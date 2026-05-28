
    let network      = null;
    // Instanciés une seule fois pour éviter les fuites mémoire
    const nodesDataSet = new vis.DataSet([]);
    const edgesDataSet = new vis.DataSet([]);
    let isFiltered     = false;
    let currentNodeId = null;
    let currentWorkspaceView = 'categories';
    let currentOpenedViewId = null; // Stocke l'ID du projet en cours de modification
    
    
/* =======================================================
       GESTION FICHIER ET IMPORT -   UTILITAIRES ET PROTECTION SÉCURITÉ
   ======================================================= */

    function esc(str) {
      if (str === null || str === undefined) return '';
      return String(str).replace(/[&<>"']/g, m => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;' }[m]));
    }

  
    function parseCSVLine(line, sep) {
      const result = [];
      let cur = '', inQ = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i]; 
        if (ch === '"') { inQ = !inQ; }
        else if (ch === sep && !inQ) { result.push(cur); cur = ''; }
        else { cur += ch; }
      }
      result.push(cur);
      return result;
    }


/* =======================================================
     PARSING CSV → GRAPHE
     ======================================================= */
  function parseCSV(text) {
    const lines = text.split(/\r?\n/);
    if (lines.length < 2) { alert('Fichier CSV vide ou non reconnu.'); return; }

    const sep = lines[0].includes(';') ? ';' : ',';

   
    const headers = lines[0].split(sep).map(h =>
      h.replace(/^"|"$/g,'').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    );

    const idx = {
      cat:     headers.findIndex(h => h.includes('cat')),
      src:     headers.findIndex(h => h.includes('sour') || h.includes('from') || h === 'de'),
      pSrc:    headers.findIndex(h => h.includes('prop') && (h.includes('sour') || h.includes('de'))),
      rel:     headers.findIndex(h => h.includes('rel') || h.includes('lien') || h.includes('type')),
      pRel:    headers.findIndex(h => h.includes('prop') && (h.includes('rel') || h.includes('lien'))),
      tgt:     headers.findIndex(h => h.includes('cibl') || h.includes('to') || h === 'a'),
      pTgt:    headers.findIndex(h => h.includes('prop') && (h.includes('cibl') || h.includes('a')))
    };

    if (idx.src === -1 || idx.tgt === -1) {
      alert("Format non reconnu : le fichier doit contenir au minimum une colonne 'Source' et une colonne 'Cible'.");
      return;
    }

    const detectedNodes = {};
    const detectedEdges = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const cols = parseCSVLine(line, sep);
      const get  = (j) => (j !== -1 && cols[j]) ? cols[j].replace(/^"|"$/g,'').trim() : '';

      const src  = get(idx.src);
      const tgt  = get(idx.tgt);
      if (!src || !tgt) continue;

      const cat  = get(idx.cat);
      const rel  = get(idx.rel)  || 'Lien';
      const pSrc = get(idx.pSrc);
      const pTgt = get(idx.pTgt);
      const pRel = get(idx.pRel);

      // Nœud source
      if (!detectedNodes[src]) detectedNodes[src] = { id: src, label: src, category: cat, properties: [], attachments: [] };
      if (cat && !detectedNodes[src].category) detectedNodes[src].category = cat;
      if (pSrc) pSrc.split(',').forEach(p => { const t = p.trim(); if (t && !detectedNodes[src].properties.includes(t)) detectedNodes[src].properties.push(t); });

      // Nœud cible
      if (!detectedNodes[tgt]) detectedNodes[tgt] = { id: tgt, label: tgt, category: '', properties: [], attachments: [] };
      if (pTgt) pTgt.split(',').forEach(p => { const t = p.trim(); if (t && !detectedNodes[tgt].properties.includes(t)) detectedNodes[tgt].properties.push(t); });

      detectedEdges.push({
        id: 'e_' + i + '_' + Math.random().toString(36).substr(2,4),
        from: src, to: tgt, label: rel,
        properties: pRel ? pRel.split(',').map(p => p.trim()).filter(Boolean) : [],
        font: { color: '#AAB4C0', size: 11, align: 'middle', strokeWidth: 0 },
        color: { color: 'rgba(255,255,255,.18)', hover: '#42ebe2', highlight: '#42ebe2' },
        arrows: { to: { enabled: true, scaleFactor: .8 } }
      });
    }

    
    if (!Object.keys(detectedNodes).length) { 
      alert('Aucune donnée valide détectée dans le fichier.'); 
      return; 
    }

    if (typeof nodesDataSet !== 'undefined' && typeof edgesDataSet !== 'undefined') {
        nodesDataSet.clear();
        edgesDataSet.clear();
    }

   
    loadGraphData(Object.values(detectedNodes), detectedEdges);
    window.location.hash = "#workspace";
  } // <--- Fermeture de la fonction parseCSV
    
/* =======================================================
   CHARGEMENT ET INJECTION DU GRAPHE
   ======================================================= */
function loadGraphData(rawNodes, rawEdges) {
    nodesDataSet.clear();
    edgesDataSet.clear();
  
       const processedNodes = rawNodes.map(n => ({
        ...n,
        shape: 'box', margin: 12,
        color: {
          background: 'rgba(29,54,85,.8)',
          border: 'rgba(255,255,255,.3)',
          highlight: { background: '#1D3655', border: '#42ebe2' },
          hover:     { background: '#364D68', border: '#ffffff' }
        },
        font: { color: '#FFFFFF', face: 'Inter', size: 13, bold: true },
        borderWidth: 1,
        shadow: { enabled: true, color: 'rgba(0,0,0,.4)', size: 10, x: 0, y: 4 }
      }));

    
      nodesDataSet.add(processedNodes);
      edgesDataSet.add(rawEdges);

  if (typeof resetFilters === "function") {
    resetFilters();
  }


  if (typeof updateFilterLists === "function") updateFilterLists(); 
  if (typeof syncAllDropdowns === "function") syncAllDropdowns();
 
 
  if (typeof applyFilters === "function") {
    applyFilters();
  }


  window.location.hash = "#workspace"; 
  console.log("📊 Graphe généré avec succès !");
}


const templatesData = {
  mobile: [
        { cat: "Apps", src: "iPhone 15", pSrc: "iOS 17.5", rel: "Utilise", tgt: "Application Yuka", pTgt: "Statut: Abonné Premium" },
        { cat: "Abonnements", src: "Apple ID", rel: "Paye", tgt: "Forfait Apple Music", pTgt: "Renouvellement: 05/06" },
        { cat: "Santé", src: "Apple Watch", pSrc: "Batterie: 85%", rel: "Synchronise", tgt: "App Santé", pTgt: "Pas totaux: 8 400" },
        { cat: "Apps", src: "Pixel 8", pSrc: "Android 14", rel: "Héberge", tgt: "Too Good To Go", pTgt: "Dernier panier: Boulangerie" },
        { cat: "Matériel", src: "Étui MagSafe", pSrc: "Couleur: Bleu", rel: "Protège", tgt: "iPhone 15", pTgt: "Garantie: Active" },
        { cat: "Abonnements", src: "Google Play", rel: "Gère", tgt: "Stockage Google One", pTgt: "Utilisation: 180Go/200Go" },
        { cat: "Apps", src: "iPad Air", pSrc: "Mode: Lecture", rel: "Ouvre", tgt: "Kindle App", pTgt: "Livre: Sapiens" },
        { cat: "Accessoires", src: "Chargeur Secteur", pSrc: "Puissance: 30W", rel: "Alimente", tgt: "iPhone 15", pTgt: "Charge: Rapide" },
        { cat: "Apps", src: "iPhone 15", rel: "Diffuse sur", tgt: "Spotify Connect", pTgt: "Enceinte: Sonos Salon" },
        { cat: "Abonnements", src: "Canal+", rel: "Connecté à", tgt: "iPhone 15", pTgt: "Profil: Principal" }
    ],
    accounts: [
        { cat: "Social", src: "Instagram", pSrc: "Profil: @Jdupont", rel: "Publie sur", tgt: "Galerie Photos Cloud", pTgt: "Espace: 2Go" },
        { cat: "Banque", src: "Compte Courant", pSrc: "Solde: 2 450€", rel: "Alimente", tgt: "Épargne Livret A", pTgt: "Virement: Automatique" },
        { cat: "Shopping", src: "Compte Amazon", pSrc: "Prime: Actif", rel: "Suivi colis", tgt: "Boîte aux lettres", pTgt: "Livraison: Demain" },
        { cat: "Streaming", src: "Netflix", pSrc: "Forfait: Premium", rel: "Partagé avec", tgt: "Marie Dupont", pTgt: "Profil: Famille" },
        { cat: "Voyage", src: "Compte Airbnb", pSrc: "Statut: Voyageur", rel: "Réserve", tgt: "Appartement Sicile", pTgt: "Dates: 10-17 Août" },
        { cat: "Social", src: "Pinterest", pSrc: "Thème: Déco", rel: "Enregistre", tgt: "Tableau Salon", pTgt: "Épingles: 142" },
        { cat: "Sport", src: "Strava", pSrc: "Activité: Vélo", rel: "Enregistre", tgt: "Parcours Forêt", pTgt: "Distance: 42km" },
        { cat: "Administration", src: "Compte Ameli", pSrc: "Sécurité: Vitale", rel: "Gère", tgt: "Remboursements Santé", pTgt: "Dernier: 24€" },
        { cat: "Finances", src: "PayPal", pSrc: "Solde: 45€", rel: "Paye", tgt: "Achat eBay", pTgt: "Statut: Expédié" },
        { cat: "Cloud", src: "iCloud", pSrc: "Backup: Quotidien", rel: "Sauvegarde", tgt: "iPhone 15", pTgt: "Dernière synchro: 03h00" }
    ],
    followed: [
        { cat: "Gastronomie", src: "Instagram", pSrc: "Abonné", rel: "Suit", tgt: "Chef Philippe Etchebest", pTgt: "Thématique: Cuisine" },
        { cat: "Sport", src: "YouTube", pSrc: "Abonné", rel: "Suit", tgt: "Yoga avec Adrienne", pTgt: "Fréquence: Quotidien" },
        { cat: "Déco", src: "Pinterest", pSrc: "Abonné", rel: "Suit", tgt: "Architectural Digest", pTgt: "Style: Moderne" },
        { cat: "Tech", src: "Twitter", pSrc: "Abonné", rel: "Suit", tgt: "Presse-citron", pTgt: "Thème: High-Tech" },
        { cat: "Musique", src: "Spotify", pSrc: "Abonné", rel: "Suit", tgt: "Playlist Jazz Lounge", pTgt: "Titre: Favoris" },
        { cat: "Voyage", src: "Instagram", pSrc: "Abonné", rel: "Suit", tgt: "Lonely Planet", pTgt: "Région: Europe" },
        { cat: "Environnement", src: "Newsletter", pSrc: "Abonné", rel: "Suit", tgt: "Greenpeace France", pTgt: "Fréquence: Mensuelle" },
        { cat: "Cinéma", src: "Letterboxd", pSrc: "Abonné", rel: "Suit", tgt: "Critique Cinéma X", pTgt: "Genre: Thriller" },
        { cat: "Littérature", src: "Goodreads", pSrc: "Abonné", rel: "Suit", tgt: "Club de Lecture", pTgt: "Prochaine: Juin" },
        { cat: "Jardinage", src: "YouTube", pSrc: "Abonné", rel: "Suit", tgt: "Permaculture Urbaine", pTgt: "Conseils: Saisonniers" }
    ],
    emails: [
        { cat: "Newsletter", src: "hello@madamefigaro.fr", pSrc: "Hebdo", rel: "Redirige vers", tgt: "Dossier Lecture", pTgt: "Priorité: Basse" },
        { cat: "Perso", src: "billetterie@concert.fr", pSrc: "Ticket: #8892", rel: "Confirme", tgt: "Concert de Jazz", pTgt: "Date: 15/06/2026" },
        { cat: "Travail", src: "rh@entreprise.com", pSrc: "Fiche de paie", rel: "Classé dans", tgt: "Dossier Impôts", pTgt: "Année: 2026" },
        { cat: "Facture", src: "edf@client.fr", pSrc: "Montant: 85€", rel: "Payé via", tgt: "Compte Courant", pTgt: "Statut: OK" },
        { cat: "Perso", src: "amis@voyage.com", pSrc: "Itinéraire", rel: "Partagé avec", tgt: "Marie Dupont", pTgt: "Moyen: Email" },
        { cat: "Achats", src: "confirmation@fnac.fr", pSrc: "Commande: #123", rel: "Suivi via", tgt: "Colissimo", pTgt: "Livré: Demain" },
        { cat: "Santé", src: "rdv@dentiste.fr", pSrc: "Rappel", rel: "Ajoute à", tgt: "Agenda Google", pTgt: "Heure: 14h30" },
        { cat: "Social", src: "notifications@facebook.fr", pSrc: "Alerte", rel: "Supprimé par", tgt: "Corbeille", pTgt: "Date: Aujourd'hui" },
        { cat: "Banque", src: "alerte@banque.fr", pSrc: "Virement reçu", rel: "Notifie", tgt: "Jean Dupont", pTgt: "Montant: 500€" },
        { cat: "Loisir", src: "info@cinema.fr", pSrc: "Programme", rel: "Imprimé par", tgt: "Imprimante Bureau", pTgt: "Statut: Encre OK" }
    ],
    items: [
        { cat: "Équipement", src: "Cafetière Jura", pSrc: "Modèle: E8", rel: "Nécessite", tgt: "Filtres Eau", pTgt: "Stock: 2 restants" },
        { cat: "Loisirs", src: "Vélo de Route", pSrc: "Cadre: Carbone", rel: "Entretien chez", tgt: "Atelier Vélo Local", pTgt: "Révision: Juillet" },
        { cat: "Maison", src: "Robot Aspirateur", pSrc: "Marque: Roomba", rel: "Nettoie", tgt: "Salon", pTgt: "Programmable: Oui" },
        { cat: "Bureau", src: "Chaise Ergonomique", pSrc: "Modèle: Herman Miller", rel: "Utilisé par", tgt: "Jean Dupont", pTgt: "Confort: Optimal" },
        { cat: "Cuisine", src: "Mixeur Blender", pSrc: "Puissance: 1200W", rel: "Range dans", tgt: "Placard Bas", pTgt: "État: Propre" },
        { cat: "Jardin", src: "Barbecue Gaz", pSrc: "Marque: Weber", rel: "Couvert par", tgt: "Bâche Protection", pTgt: "État: Bon" },
        { cat: "Sécurité", src: "Clé Yubikey", pSrc: "Version: 5C", rel: "Sécurise", tgt: "Compte Gmail", pTgt: "Usage: Quotidien" },
        { cat: "Transport", src: "Valise Cabine", pSrc: "Dimensions: 55cm", rel: "Utilisé pour", tgt: "Voyage Sicile", pTgt: "Poids: 8kg" },
        { cat: "Audio", src: "Casque Bluetooth", pSrc: "Sony WH-1000XM5", rel: "Chargé par", tgt: "Câble USB-C", pTgt: "Batterie: 100%" },
        { cat: "Entretien", src: "Aspirateur Main", pSrc: "Sans fil", rel: "Range dans", tgt: "Buanderie", pTgt: "Socle: Mural" }
    ],
    projects: [
        { cat: "Voyage", src: "Projet Sicile 2026", pSrc: "Budget: 1 500€", rel: "Dépend de", tgt: "Réservation Vols", pTgt: "Statut: Confirmé" },
        { cat: "Maison", src: "Rénovation Salon", pSrc: "Peinture: Blanc", rel: "Nécessite", tgt: "Devis Artisan", pTgt: "Jalon: Validation" },
        { cat: "Sport", src: "Prépa Marathon", pSrc: "Plan: 12 semaines", rel: "Utilise", tgt: "Chaussures Hoka", pTgt: "Progression: 40%" },
        { cat: "Finances", src: "Épargne Logement", pSrc: "Objectif: 20k€", rel: "Alimenté par", tgt: "Prélèvement auto", pTgt: "Échéance: Mensuelle" },
        { cat: "Cuisine", src: "Dîner Anniversaire", pSrc: "Invités: 6", rel: "Prépare", tgt: "Menu Gastronomique", pTgt: "Courses: Liste" },
        { cat: "Santé", src: "Programme Yoga", pSrc: "App: Down Dog", rel: "Suivi par", tgt: "Marie Dupont", pTgt: "Série: 5 jours" },
        { cat: "Technique", src: "Nettoyage PC", pSrc: "Outil: CCleaner", rel: "Optimise", tgt: "Ordinateur Bureau", pTgt: "Gain: Espace" },
        { cat: "Jardin", src: "Potager Urbain", pSrc: "Plantes: Aromates", rel: "Nécessite", tgt: "Engrais Bio", pTgt: "Arrosage: 2/sem" },
        { cat: "Lecture", src: "Challenge 50 livres", pSrc: "Lu: 12/50", rel: "Suivi via", tgt: "Excel", pTgt: "Retard: Non" },
        { cat: "Projet", src: "Organisation Fête", pSrc: "Lieu: Jardin", rel: "Loue", tgt: "Chapiteau", pTgt: "Date: 14 Juillet" }
    ],
    documents: [
        { cat: "Santé", src: "Carnet Vaccination", pSrc: "À jour", rel: "Contient", tgt: "Certificat DTP", pTgt: "Rappel: 2030" },
        { cat: "Perso", src: "Dossier Propriétaire", pSrc: "Quittance", rel: "Contient", tgt: "Contrat location", pTgt: "Date: 01/01/2024" },
        { cat: "Auto", src: "Carte Grise", pSrc: "Propriétaire: Jean", rel: "Stocké dans", tgt: "Boîte à gants", pTgt: "État: Original" },
        { cat: "Finance", src: "Déclaration Impôts", pSrc: "Statut: Envoyé", rel: "Détient", tgt: "Revenu Annuel", pTgt: "Validation: OK" },
        { cat: "Loisir", src: "Licence Tennis", pSrc: "Validité: 2026", rel: "Donne accès à", tgt: "Club Tennis", pTgt: "Niveau: Amateur" },
        { cat: "Maison", src: "Assurance Habitation", pSrc: "Assureur: MAIF", rel: "Couvre", tgt: "Appartement Lyon", pTgt: "Prime: Annuelle" },
        { cat: "Voyage", src: "Passeport", pSrc: "Expiration: 2030", rel: "Utilisé pour", tgt: "Vol Sicile", pTgt: "Visa: Aucun" },
        { cat: "Pro", src: "Contrat Travail", pSrc: "Type: CDI", rel: "Signé le", tgt: "15 Mai 2024", pTgt: "Lieu: Paris" },
        { cat: "Éducation", src: "Diplôme Master", pSrc: "Année: 2018", rel: "Stocké dans", tgt: "Coffre-fort Papier", pTgt: "État: Certifié" },
        { cat: "Achats", src: "Garantie Téléviseur", pSrc: "Expiration: 2027", rel: "Classé dans", tgt: "Classeur Maison", pTgt: "Magasin: Darty" }
    ],
    clothes: [
        { cat: "Saison", src: "Veste en Lin", pSrc: "Couleur: Beige", rel: "Nettoyé chez", tgt: "Pressing Écologique", pTgt: "Date: Samedi" },
        { cat: "Stockage", src: "Boîtes Chaussures", pSrc: "Organisateur", rel: "Range", tgt: "Basket Running", pTgt: "Modèle: Hoka" },
        { cat: "Bureau", src: "Chemise Coton", pSrc: "Repassée", rel: "Pendue sur", tgt: "Cintre Bois", pTgt: "Couleur: Bleue" },
        { cat: "Hiver", src: "Manteau Laine", pSrc: "Marque: Zara", rel: "Stocké dans", tgt: "Housse Vêtement", pTgt: "Protection: Anti-mites" },
        { cat: "Sport", src: "Short Technique", pSrc: "Matière: Dry", rel: "Lavage à", tgt: "30 degrés", pTgt: "Séchage: Air" },
        { cat: "Soirée", src: "Robe Cocktail", pSrc: "Matière: Soie", rel: "Nettoyé chez", tgt: "Pressing Luxe", pTgt: "Récupération: 10 Juin" },
        { cat: "Accessoire", src: "Foulard Soie", pSrc: "Vintage", rel: "Range dans", tgt: "Tiroir Écharpes", pTgt: "Ordre: Couleur" },
        { cat: "Détente", src: "Pyjama Flanelle", pSrc: "Confortable", rel: "Lavage à", tgt: "Machine Perso", pTgt: "Cycle: Délicat" },
        { cat: "Voyage", src: "Veste Imperméable", pSrc: "Tech: Goretex", rel: "Utilisé pour", tgt: "Randonnée", pTgt: "Pliable: Oui" },
        { cat: "Été", src: "Chapeau Paille", pSrc: "Origine: Italie", rel: "Stocké sur", tgt: "Étagère Entrée", pTgt: "État: Fragile" }
    ],
    contacts: [
        { cat: "Gastronomie", src: "Le Bistrot", pSrc: "Réservation", rel: "Accueille", tgt: "Jean Dupont", pTgt: "Table: Terrasse" },
        { cat: "Services", src: "Coach Sportif", pSrc: "Dispo: Mardi", rel: "Conseille", tgt: "Marie Dupont", pTgt: "Séance: 1h" },
        { cat: "Pro", src: "Comptable", pSrc: "Cabinet Alpha", rel: "Gère", tgt: "Bilan Annuel", pTgt: "RDV: Juin" },
        { cat: "Perso", src: "Dr. Martin", pSrc: "Médecin", rel: "Suit", tgt: "Jean Dupont", pTgt: "Rappel: Vaccin" },
        { cat: "Voisinage", src: "Lucas (Voisin)", pSrc: "Aide", rel: "Arrose", tgt: "Plantes Balcon", pTgt: "Clés: Prêtées" },
        { cat: "Famille", src: "Marie Dupont", pSrc: "Épouse", rel: "Partage", tgt: "Compte Netflix", pTgt: "Profil: Famille" },
        { cat: "Loisir", src: "Prof de Tennis", pSrc: "Club Local", rel: "Entraîne", tgt: "Jean Dupont", pTgt: "Niveau: Progressif" },
        { cat: "Artisan", src: "Électricien", pSrc: "Devis: 200€", rel: "Intervient sur", tgt: "Cuisine", pTgt: "Date: 12 Juin" },
        { cat: "Ami", src: "Thomas", pSrc: "Ami Voyage", rel: "Rejoint", tgt: "Projet Sicile", pTgt: "Vols: Ok" },
        { cat: "Administration", src: "Notaire", pSrc: "Cabinet Morin", rel: "Signe", tgt: "Acte Vente", pTgt: "Date: 2025" }
    ],
    books: [
        { cat: "Lecture", src: "Le Petit Prince", pSrc: "Édition: Poche", rel: "Prêté à", tgt: "Lucas (Voisin)", pTgt: "Prêt depuis: 2 sem" },
        { cat: "Cuisine", src: "Recettes Italiennes", pSrc: "Auteur: Gennaro", rel: "Posé sur", tgt: "Étagère Cuisine", pTgt: "Usage: Fréquent" },
        { cat: "Finance", src: "Père Riche Père Pauvre", pSrc: "Kiyosaki", rel: "Stocké dans", tgt: "Bibliothèque Salon", pTgt: "Niveau: Milieu" },
        { cat: "Déco", src: "Design Intérieur", pSrc: "Ed: Taschen", rel: "Utilisé pour", tgt: "Rénovation Salon", pTgt: "Inspiration: OK" },
        { cat: "Science", src: "Sapiens", pSrc: "Harari", rel: "En cours de", tgt: "Lecture (iPad)", pTgt: "Progression: 50%" },
        { cat: "Jardin", src: "Permaculture", pSrc: "Guide pratique", rel: "Consulté pour", tgt: "Potager Urbain", pTgt: "Saison: Printemps" },
        { cat: "Loisir", src: "Guide de Voyage", pSrc: "Sicile 2026", rel: "Emporté pour", tgt: "Projet Sicile", pTgt: "Marque-page: Oui" },
        { cat: "Sport", src: "Marathon pour tous", pSrc: "Guide technique", rel: "Utilisé pour", tgt: "Prépa Marathon", pTgt: " Chapitre: 3" },
        { cat: "Enfant", src: "Contes de Grimm", pSrc: "Collection", rel: "Lu par", tgt: "Coucher Enfant", pTgt: "Fréquence: Soir" },
        { cat: "Art", src: "Histoire de l'Art", pSrc: "Phaidon", rel: "Exposé dans", tgt: "Table Basse", pTgt: "État: Très bon" }
    ],
    patrimoine: [
        { cat: "Loisirs", src: "Club Tennis", pSrc: "Licence 2026", rel: "Permet accès à", tgt: "Court de Tennis n°4", pTgt: "Réservé: 10h" },
        { cat: "Événements", src: "Festival Jazz", pSrc: "Zone: VIP", rel: "Donne accès à", tgt: "Soirée Ouverture", pTgt: "Date: 12/07" },
        { cat: "Finance", src: "Épargne", pSrc: "Livret A", rel: "Soutient", tgt: "Projet Sicile", pTgt: "Montant: Alloué" },
        { cat: "Immo", src: "Appartement", pSrc: "Loyer: 800€", rel: "Assuré par", tgt: "Assurance Habitation", pTgt: "État: Assuré" },
        { cat: "Invest", src: "Bourse", pSrc: "ETF Monde", rel: "Géré par", tgt: "Compte Titres", pTgt: "Performance: +5%" },
        { cat: "Culture", src: "Musée", pSrc: "Carte Membre", rel: "Offre entrée à", tgt: "Exposition Été", pTgt: "Validité: Annuelle" },
        { cat: "Santé", src: "Mutuelle", pSrc: "Remboursement", rel: "Couvre", tgt: "Frais Dentiste", pTgt: "Taux: 100%" },
        { cat: "Auto", src: "Véhicule", pSrc: "Assurance", rel: "Protège", tgt: "Carte Grise", pTgt: "Usage: Mixte" },
        { cat: "Loisir", src: "Abonnement", pSrc: "Stream VOD", rel: "Détient", tgt: "Accès Netflix", pTgt: "Profil: Principal" },
        { cat: "Projet", src: "Jardin", pSrc: "Aménagement", rel: "Valorise", tgt: "Appartement", pTgt: "Plus-value: Est." }
    ],
    nutriments: [
        { cat: "Fruits", src: "Kiwi", pSrc: "100g", rel: "Apporte", tgt: "Vitamine C", pTgt: "Dose: 93mg" },
        { cat: "Fruits", src: "Avocat", pSrc: "100g", rel: "Apporte", tgt: "Vitamine E", pTgt: "Action: Antioxydant" },
        { cat: "Fruits", src: "Abricot", pSrc: "100g", rel: "Apporte", tgt: "Bêta-carotène", pTgt: "Action: Vision" },
        { cat: "Fruits", src: "Citron", pSrc: "100g", rel: "Apporte", tgt: "Vitamine C", pTgt: "Action: Immunité" },
        { cat: "Fruits", src: "Banane", pSrc: "100g", rel: "Apporte", tgt: "Vitamine B6", pTgt: "Action: Métabolisme" },
        { cat: "Fruits", src: "Fraise", pSrc: "100g", rel: "Apporte", tgt: "Vitamine C", pTgt: "Action: Collagène" },
        { cat: "Fruits", src: "Orange", pSrc: "100g", rel: "Apporte", tgt: "Folate", pTgt: "Action: Sang" },
        { cat: "Fruits", src: "Mangue", pSrc: "100g", rel: "Apporte", tgt: "Vitamine A", pTgt: "Action: Peau" },
        { cat: "Fruits", src: "Papaye", pSrc: "100g", rel: "Apporte", tgt: "Vitamine C", pTgt: "Action: Digestion" },
        { cat: "Fruits", src: "Cassis", pSrc: "100g", rel: "Apporte", tgt: "Vitamine C", pTgt: "Taux: 200mg" }
    ],
    fitness: [
        { cat: "Exercice", src: "Squat", pSrc: "Poids libre", rel: "Sollicite", tgt: "Quadriceps", pTgt: "Action: Puissance" },
        { cat: "Exercice", src: "Tractions", pSrc: "Barre fixe", rel: "Sollicite", tgt: "Dorsaux", pTgt: "Action: Posture" },
        { cat: "Exercice", src: "Pompes", pSrc: "Poids corps", rel: "Sollicite", tgt: "Pectoraux", pTgt: "Action: Poussée" },
        { cat: "Exercice", src: "Fentes", pSrc: "Poids corps", rel: "Sollicite", tgt: "Fessiers", pTgt: "Action: Équilibre" },
        { cat: "Exercice", src: "Gainage", pSrc: "Statique", rel: "Sollicite", tgt: "Abdominaux", pTgt: "Action: Stabilité" },
        { cat: "Exercice", src: "Dips", pSrc: "Banc", rel: "Sollicite", tgt: "Triceps", pTgt: "Action: Extension" },
        { cat: "Exercice", src: "Soulevé de terre", pSrc: "Barre", rel: "Sollicite", tgt: "Ischio-jambiers", pTgt: "Action: Chaîne post." },
        { cat: "Exercice", src: "Développé militaire", pSrc: "Haltères", rel: "Sollicite", tgt: "Deltoïdes", pTgt: "Action: Épaules" },
        { cat: "Exercice", src: "Leg Press", pSrc: "Machine", rel: "Sollicite", tgt: "Quadriceps", pTgt: "Action: Force" },
        { cat: "Exercice", src: "Rowing", pSrc: "Haltère", rel: "Sollicite", tgt: "Trapèzes", pTgt: "Action: Dos" }
    ],
    relations_bibliques: [
        { cat: "Alliance", src: "David", pSrc: "Roi", rel: "Allié à", tgt: "Jonathan", pTgt: "Lien: Pacte d'âme" },
        { cat: "Mentor", src: "Paul", pSrc: "Apôtre", rel: "Mentor de", tgt: "Timothée", pTgt: "Lien: Transmission" },
        { cat: "Fidélité", src: "Ruth", pSrc: "Étrangère", rel: "Fidèle à", tgt: "Naomi", pTgt: "Lien: Loyauté" },
        { cat: "Discipulat", src: "Jésus", pSrc: "Maître", rel: "Appelle", tgt: "Pierre", pTgt: "Lien: Restauration" },
        { cat: "Famille", src: "Moïse", pSrc: "Prophète", rel: "Aidé par", tgt: "Aaron", pTgt: "Lien: Fraternité" },
        { cat: "Amour", src: "Jacob", pSrc: "Patriarche", rel: "Sert pour", tgt: "Rachel", pTgt: "Lien: Persévérance" },
        { cat: "Foi", src: "Élie", pSrc: "Prophète", rel: "Transmet à", tgt: "Élisée", pTgt: "Lien: Double portion" },
        { cat: "Mission", src: "Barnabé", pSrc: "Lévite", rel: "Accompagne", tgt: "Paul", pTgt: "Lien: Soutien" },
        { cat: "Obéissance", src: "Abraham", pSrc: "Patriarche", rel: "Père de", tgt: "Isaac", pTgt: "Lien: Promesse" },
        { cat: "Soutien", src: "Aquila", pSrc: "Artisan", rel: "Collabore avec", tgt: "Priscille", pTgt: "Lien: Service" }
    ],
    hydratation: [
        { cat: "Fluides", src: "Eau Minérale", pSrc: "pH 7.2", rel: "Hydrate", tgt: "Cellules", pTgt: "Action: Équilibre" },
        { cat: "Boissons", src: "Thé Vert", pSrc: "Antioxydants", rel: "Optimise", tgt: "Métabolisme", pTgt: "Action: Drainage" },
        { cat: "Boissons", src: "Eau Citronnée", pSrc: "Vitamine C", rel: "Soutient", tgt: "Foie", pTgt: "Action: Détox" },
        { cat: "Boissons", src: "Eau de Coco", pSrc: "Électrolytes", rel: "Réhydrate", tgt: "Muscles", pTgt: "Action: Récup." },
        { cat: "Boissons", src: "Infusion", pSrc: "Plantes", rel: "Apaise", tgt: "Système Nerveux", pTgt: "Action: Détente" },
        { cat: "Boissons", src: "Bouillon", pSrc: "Minéraux", rel: "Apporte", tgt: "Sels minéraux", pTgt: "Action: Équilibre" },
        { cat: "Fluides", src: "Eau Gazéifiée", pSrc: "Bicarbonates", rel: "Favorise", tgt: "Digestion", pTgt: "Action: Confort" },
        { cat: "Boissons", src: "Jus de Betterave", pSrc: "Nitrates", rel: "Améliore", tgt: "Afflux sanguin", pTgt: "Action: O2" },
        { cat: "Boissons", src: "Eau froide", pSrc: "Température", rel: "Régule", tgt: "Température corps", pTgt: "Action: Thermic" },
        { cat: "Fluides", src: "Eau Citronnée", pSrc: "Acide", rel: "Équilibre", tgt: "pH Gastrique", pTgt: "Action: Aide" }
    ]
    
};

const tileConfig = [
      { id: 'mobile', title: 'Mobile Applications', icon: 'fa-mobile-screen-button', desc: 'Vos apps, flux et abonnements associés.', special: false  },
      { id: 'accounts', title: 'Online Accounts', icon: 'fa-cloud', desc: 'Sécurité et liaisons de vos comptes Cloud.' },
      { id: 'followed', title: 'Followed Accounts', icon: 'fa-users', desc: 'Gestion de cercles et abonnements de veille.' },
      { id: 'emails', title: 'Emails', icon: 'fa-envelope', desc: 'Cartographie des flux de messageries.' },
      { id: 'items', title: 'Items', icon: 'fa-cube', desc: 'Inventaire de biens de valeur et matériels.' },
      { id: 'projects', title: 'Projects', icon: 'fa-diagram-project', desc: 'Suivi de dépendances, livrables et jalons.' },
      { id: 'documents', title: 'Documents', icon: 'fa-file-lines', desc: 'Indexation de pièces administratives.' },
      { id: 'clothes', title: 'Clothes', icon: 'fa-shirt', desc: 'Garde-robe capsule et valeurs assurées.' },
      { id: 'contacts', title: 'Contacts', icon: 'fa-address-book', desc: 'Répertoire de vos experts et conseillers.' },
      { id: 'books', title: 'Books', icon: 'fa-book', desc: 'Bibliothèques thématiques de référence.' },
      { id: 'patrimoine', title: 'Patrimoine Familial', icon: 'fa-vault', desc: 'Modèle complet : Holding, SCI et actifs.'},
      { id: 'Nutriments', title: 'Alimentation', icon: 'fa-vault', desc: 'Les fruits et les vitamines'},
      { id: 'Fitness', title: 'Activité physique', icon: 'fa-vault', desc: 'Excercices ciblés'},
      { id: 'Etude Biblique', title: 'relations_bibliques', icon: 'fa-vault', desc: 'Thèmes et personnages Bibliques'},
      { id: 'Santé', title: 'Boissons', icon: 'fa-vault', desc: 'Boire plus et mieux'},
      // AJOUT : Intégration de la tuile de conversion dans la configuration
      { id: 'new-category', title: 'Nouveau Graphe', icon: 'fa-plus', desc: 'Importez votre propre fichier CSV/Excel pour générer une cartographie sur mesure.', isCta: true }
    ];

/* =======================================================
   RENDU INTERFACE categories
   ======================================================= */

function renderPresetTiles() {
  
    const gridContainer = document.getElementById("grid-preset-container");
    if (!gridContainer) {
        console.error("⚠️ Conteneur 'grid-preset-container' introuvable dans le HTML.");
        return;
    }

    gridContainer.innerHTML = "";

 // ==========================================================
    // PARTIE A : Génération dynamique des modèles de démo 
    // ==========================================================   
    
    Object.keys(templatesData).forEach(key => {   
        
        const matchedConfig = tileConfig.find(item => item.id === key);
        
        const config = matchedConfig || { 
            title: key.charAt(0).toUpperCase() + key.slice(1), 
            icon: "fa-database", 
            desc: "Données de démonstration interactives." 
        };
        
        const tile = document.createElement("div");
        tile.className = "preset-tile tile-card";
        
        tile.innerHTML = `
            <div class="tile-icon"><i class="fa-solid ${config.icon}"></i></div>
            <div class="tile-title"><h3>${config.title}</h3></div>
            
            <div class="tile-overlay">
                <div class="tile-desc">${config.desc}</div>
            </div>
        `;

        
        tile.addEventListener('click', () => {
    
    window.location.hash = `#workspace?id=${key}`;
});

        gridContainer.appendChild(tile);
    });

// ==========================================================
    //  Génération des tuiles de vues sauvegardées
    // ==========================================================
    const savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];

    savedViews.forEach(view => {
        const tile = document.createElement("div");
      
        tile.className = "preset-tile tile-card saved-view-tile";
        
        tile.innerHTML = `
            <div class="tile-icon"><i class="fa-solid fa-bookmark" style="color: #42ebe2;"></i></div>
            <div class="tile-title"><h3>${esc(view.name)}</h3></div>
            
            <div class="tile-overlay" style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 10px; padding: 10px;">
                <div><br>
                    <strong>${view.data.nodes.length}</strong> Éléments | <strong>${view.data.edges.length}</strong> Liens
                </div>
        `;

       
        tile.addEventListener('click', () => {
            window.location.hash = `#workspace?loadview=${view.id}`;
        });

        gridContainer.appendChild(tile);
    });

// ==========================================================
    // Ajout popup paywall
    // ==========================================================
    
    const premiumTile = document.createElement("div");
    premiumTile.className = "preset-tile cta-premium-tile tile-card";
    
    const premiumConfig = tileConfig.find(item => item.id === 'new-category') || {
        title: "Modèle Personnalisé",
        icon: "fa-crown",
        desc: "Importez votre propre fichier CSV/Excel pour générer une cartographie sur mesure."
    };

    premiumTile.innerHTML = `
        <div class="tile-icon"><i class="fa-solid ${premiumConfig.icon}" style="color: #FFD700;"></i></div>
        <div class="tile-title" style="color: var(--color_cyan); font-weight: 800;"><h3>${premiumConfig.title}</h3></div>
        
        <div class="tile-overlay">
            <div class="tile-desc">${premiumConfig.desc}</div>
        </div>
    `;

    premiumTile.addEventListener('click', () => {
        openPaywall();
    });

    gridContainer.appendChild(premiumTile);
    
    console.log("🚀 Grille des modèles rendue avec succès (icônes et titres uniques rétablis) !");
}

function renderUserSavedTiles() {
   
    const gridContainer = document.getElementById("grid-user-container");
    if (!gridContainer) {
        console.error("⚠️ Conteneur 'grid-user-container' introuvable dans la section #saved-views.");
        return;
    }

    gridContainer.innerHTML = "";

    const savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];

    if (savedViews.length === 0) {
        gridContainer.innerHTML = `
            <div style="color: #AAB4C0; grid-column: 1 / -1; text-align: center; padding: 40px; border: 2px dashed rgba(255,255,255,0.1); border-radius: 8px;">
                <i class="fa-solid fa-bookmark" style="font-size: 2.5rem; margin-bottom: 15px; display: block; color: rgba(66, 235, 226, 0.4);"></i>
                Aucun graphique sauvegardé pour le moment. Créez-en un depuis le Workspace !
            </div>
        `;
        return;
    }

    
    savedViews.forEach(view => {
        const tile = document.createElement("div");
        
        tile.className = "preset-tile tile-card saved-view-tile"; 
        tile.dataset.id = view.id; 

        tile.innerHTML = `
            <button class="tile-delete-btn" title="Supprimer définitivement ce graphique" data-id="${view.id}">
                <i class="fa-solid fa-trash-can"></i>
            </button>

            <div class="tile-icon"><i class="fa-solid fa-bookmark" style="color: #42ebe2;"></i></div>
            <div class="tile-title"><h3>${view.name}</h3></div>
            
            <div class="tile-overlay" style="display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 10px;">
                <div style="text-align: center;">
                    <span style="color: #42ebe2; font-weight: bold;">${view.data.nodes.length}</span> Éléments<br>
                    <span style="color: #42ebe2; font-weight: bold;">${view.data.edges.length}</span> Liens
                </div>
            </div>
        `;

        
        tile.addEventListener('click', (e) => {
           
            if (e.target.closest('.tile-delete-btn')) return;
            
            window.location.hash = `#workspace?loadview=${view.id}`;
        });

        gridContainer.appendChild(tile);
    });

    setupUserTileDeleteEvents();
}

function setupUserTileDeleteEvents() {
    const deleteButtons = document.querySelectorAll('.tile-delete-btn');
    
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            
            const viewId = btn.dataset.id;
            
            if (confirm("Êtes-vous sûr de vouloir supprimer définitivement ce graphique sauvegardé ?")) {
                
                let savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];
                
                
                savedViews = savedViews.filter(view => view.id !== viewId);
                
                
                localStorage.setItem('network_saved_views', JSON.stringify(savedViews));
                
                renderUserSavedTiles();
            }
        });
    });
}

// Afficher la popup
function openPaywall() {
    const paywallModal = document.getElementById("paywall-modal");
    if (paywallModal) {
        paywallModal.classList.add("active"); // 
        console.log("🔒 Popup Premium affichée");
    } else {
        console.error("⚠️ Impossible de trouver la popup '#paywall-modal' dans le HTML.");
    }
}

// Fermer la popup )
function closePaywall() {
    const paywallModal = document.getElementById("paywall-modal");
    if (paywallModal) {
        paywallModal.classList.remove("active");
        console.log("🔓 Popup Premium fermée");
    }
}

    const btnClosePaywall = document.getElementById("btn-close-trigger");
    if (btnClosePaywall) {
        btnClosePaywall.addEventListener("click", closePaywall);
    }
    const paywallModal = document.getElementById("btn-return-trigger");
if (paywallModal) {
    paywallModal.addEventListener("click", function(event) {
                            closePaywall();
        })
    }


function resetEditionBlock() {
  const titleEl = document.getElementById('side-title');
  const bodyEl = document.getElementById('sidebar-body');

  if (titleEl) {
    titleEl.textContent = "Sélection";
  }

  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="color: var(--color_text_muted, #AAB4C0); font-size: 0.85rem; text-align: center; margin-top: 15px; padding: 10px; font-style: italic;">
         💡 Cliquez sur un élément du graphe pour afficher et modifier ses détails.
      </div>
    `;
  }
}

function router() {
 
  const hash = window.location.hash || '#welcome';
  const cleanHash = hash.split('?')[0];
 
  const isWorkspaceParams = hash.startsWith('#workspace?id=');
  const isLoadViewParams  = hash.startsWith('#workspace?loadview=');
  
  console.log("📍 Route active :", hash, " | Sélecteur propre :", cleanHash);

if (cleanHash === '#categories' || cleanHash === '#welcome' || cleanHash === '#TABLE' || cleanHash === '#saved-views') {
    currentOpenedViewId = null; 
}

  document.querySelectorAll('#page-container > section').forEach(section => {
    section.classList.remove('active');
  });

  const pageActive = document.querySelector(cleanHash);
  if (pageActive) {
    pageActive.classList.add('active');
  }

  // CHARGEMENT DYNAMIQUE DES MODELES DE DÉMO
  if (isWorkspaceParams) {
    const templateId = hash.split('=')[1];
    const data = templatesData[templateId];

    if (data) {
      
      const matchedConfig = tileConfig.find(item => item.id === templateId);
      const templateTitle = matchedConfig ? matchedConfig.title : (templateId.charAt(0).toUpperCase() + templateId.slice(1));
      
      
      const titleElement = document.getElementById('current-template-title');
      if (titleElement) {
        titleElement.textContent = templateTitle;
      }

      const generatedNodes = {};
      const generatedEdges = [];

      data.forEach((row, index) => {
        if (!generatedNodes[row.src]) {
          generatedNodes[row.src] = { id: row.src, label: row.src, category: row.cat || '', properties: row.pSrc ? [row.pSrc] : [], attachments: [] };
        }
        if (!generatedNodes[row.tgt]) {
          generatedNodes[row.tgt] = { id: row.tgt, label: row.tgt, category: '', properties: row.pTgt ? [row.pTgt] : [], attachments: [] };
        }
        generatedEdges.push({
          id: `e_t_${templateId}_${index}`,
          from: row.src, to: row.tgt, label: row.rel || 'Lien',
          properties: row.pRel ? [row.pRel] : [],
          font: { color: '#AAB4C0', size: 11, align: 'middle', strokeWidth: 0 },
          color: { color: 'rgba(255,255,255,.18)', hover: '#42ebe2', highlight: '#42ebe2' },
          arrows: { to: { enabled: true, scaleFactor: .8 } }
        });
      });

      loadGraphData(Object.values(generatedNodes), generatedEdges);
    }
  } 

  // CHARGEMENT D'UNE VUE SAUVEGARDÉE DANS LE WORKSPACE
  if (isLoadViewParams) {
    const viewId = hash.split('=')[1];
    // 🎯 ÉTAPE 1 : On mémorise l'ID dans la variable globale
  if (typeof currentOpenedViewId !== 'undefined') {
    currentOpenedViewId = viewId; 
  }
    if (typeof loadSavedViewIntoWorkspace === "function") {
      loadSavedViewIntoWorkspace(viewId);
      setTimeout(() => { window.location.hash = "#workspace"; }, 50);
    }
  }

if (cleanHash === '#views' || cleanHash === '#saved-views') {
  
  if (typeof renderWorkspaceTable === "function") {
    renderWorkspaceTable(); 
  }
  
  if (typeof renderSavedViewsPage === "function") {
    renderSavedViewsPage();  
  }
 
  if (typeof renderUserSavedTiles === "function") {
    renderUserSavedTiles();
  }
}

  const switchLink = document.getElementById('switch-view');
  if (switchLink) {
    if (cleanHash === '#table') {
      switchLink.href = '#workspace';
      switchLink.innerHTML = '<i class="fa-solid fa-chart-nodes"></i><span>Vue Graphe</span>';
    } else {
      switchLink.href = '#table';
      switchLink.innerHTML = '<span>Vue Tableau</span>';
    }
  }

  if (cleanHash === '#workspace') {
    
    setTimeout(() => {
      const container = document.getElementById('graph-container');
      if (!container) {
        console.error("⚠️ Impossible de trouver 'graph-container' dans le HTML.");
        return;
      }

      
      if (!network) {
        if (typeof initNetwork === "function") {
          initNetwork();
        } else if (typeof options !== 'undefined') {
          network = new vis.Network(container, { nodes: nodesDataSet, edges: edgesDataSet }, options);
        }
        if (typeof applyFilters === "function") {
          applyFilters();
        }
        
      } 
     
      else {
        !
        network.setSize('100%', '100%'); 
        network.fit();
        network.redraw();                 
        console.log("🕸️ [Routeur] Retour sur le graphe : filtres et zoom préservés.");
      }
    }, 1000);
  }

  if (cleanHash === '#table') {
    if (typeof renderWorkspaceTable === "function") {
      renderWorkspaceTable();
      console.log("📊 [Routeur] Vue Tableau générée avec les filtres actuels.");
    }
  }

} 


window.addEventListener("DOMContentLoaded", () => {
    renderPresetTiles(); 
    router();            

    const filterCategory = document.getElementById('f-cat');
    const filterNode     = document.getElementById('f-node');
    const filterRelation = document.getElementById('f-rel');


if (filterCategory) {
    filterCategory.addEventListener('change', () => {
      syncAllDropdowns('cat'); 
      applyFilters();          
    });
  }

  if (filterNode) {
    filterNode.addEventListener('change', () => {
      syncAllDropdowns('node'); 
      applyFilters();
    });
  }

  if (filterRelation) {
    filterRelation.addEventListener('change', () => {
      syncAllDropdowns('rel');  
      applyFilters();
    });
  }
 
  const closeBtn = document.getElementById('btn-close-sidebar');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
  }

  const btnSaveView = document.getElementById('btn-save-view');
if (btnSaveView) btnSaveView.addEventListener('click', saveCurrentView);


  const btn = document.getElementById('toggle-panel-btn');
  
  if (btn) {
    
    btn.addEventListener("click", () => {
      const panel = document.getElementById('panel-left');
      if (!panel) return;

      
      panel.classList.toggle('collapsed');

     
      if (panel.classList.contains('collapsed')) {
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        btn.title = "Afficher le panneau";
        
        console.log("↔️ Panneau gauche masqué.");
      } else {
        btn.innerHTML = '<i class="fa-solid fa-bars-staggered"></i> Masquer le panneau';
        btn.title = "Masquer le panneau";
        console.log("↔️ Panneau gauche affiché.");
      }

      
      setTimeout(() => {
        if (typeof network !== 'undefined' && network !== null) {
          network.setSize("100%", "100%");
          network.redraw();
          console.log("🔄 Graphe recalibré avec succès.");
        }
      }, 500);
    });
    
    console.log("✅ Écouteur sur #toggle-panel-btn configuré avec succès.");
  } else {
    console.warn("⚠️ Le bouton #toggle-panel-btn n'a pas été trouvé au chargement du DOM.");
  }

const exportBtn = document.getElementById('btn-export-csv');
  
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
   
      if (typeof nodesDataSet !== 'undefined' && nodesDataSet.length > 0) {
        exportCSV();
      } else {
        alert("Action impossible : Il n'y a aucun graphique affiché à exporter !");
      }
    });
  }

  const jsonBtn = document.getElementById('btn-export-json');

if (jsonBtn) {
  jsonBtn.addEventListener('click', () => {
    if (typeof nodesDataSet !== 'undefined' && nodesDataSet.length > 0) {
      exportToJSON();
    } else {
      alert("Action impossible : Il n'y a aucun graphique affiché à exporter !");
    }
  });
}
  
});


window.addEventListener('hashchange', router);

window.saveNode = function(nodeId) {
  console.log("💾 Enregistrement du nœud :", nodeId);
  const node = nodesDataSet.get(nodeId);
  if (!node) {
    console.error("Nœud introuvable :", nodeId);
    return;
  }

 
  const newCat = document.getElementById('edit-cat').value.trim();
  const propsText = document.getElementById('edit-props').value;
  const newProps = propsText.split('\n').map(p => p.trim()).filter(Boolean);

 
  nodesDataSet.update({
    id: nodeId,
    label: node.label,
    category: newCat,
    properties: newProps
  });

 
  if (typeof syncAllDropdowns === "function") syncAllDropdowns();
  if (typeof updateFilterLists === "function") updateFilterLists(true);
  if (typeof applyFilters === "function") applyFilters();
  
  console.log(`✅ Nœud "${nodeId}" enregistré avec succès !`);
}

function saveCurrentView() {
  
  const nodes = nodesDataSet.get();
  const edges = edgesDataSet.get();

  if (nodes.length === 0) {
    alert("Le graphe est vide, il n'y a rien à sauvegarder !");
    return;
  }

  
  let savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];

  // =========================================================================
  // VUE EXISTANTE (Mise à jour)
  // =========================================================================
  if (currentOpenedViewId) {
    const existingView = savedViews.find(v => v.id === currentOpenedViewId);
    
    if (existingView) {
     
      const confirmOverwrite = confirm(`Voulez-vous enregistrer les modifications apportées à "${existingView.name}" ?\n\n(Cliquez sur 'Annuler' pour créer une copie sous un autre nom)`);
      
      if (confirmOverwrite) {
        existingView.data = { nodes, edges };
        existingView.createdAt = new Date().toLocaleString(); 
        
        localStorage.setItem('network_saved_views', JSON.stringify(savedViews));
        alert(`✅ Le projet "${existingView.name}" a été mis à jour avec succès !`);
        
        if (typeof renderPresetTiles === "function") renderPresetTiles();
        if (typeof renderSavedViewsPage === "function") renderSavedViewsPage();
        return; 
      }
    }
  }

  // =========================================================================
  // NOUVEAU GRAPHE 
  // =========================================================================
  
   const viewName = prompt("Entrez un nom pour sauvegarder cette vue :", `Vue du ${new Date().toLocaleDateString()}`);
  if (!viewName || !viewName.trim()) return;

 const existingViewIndex = savedViews.findIndex(v => v.name.toLowerCase() === viewName.trim().toLowerCase());

  if (existingViewIndex !== -1) {
    const confirmOverwriteByName = confirm(`⚠️ Une vue nommée "${viewName}" existe déjà dans vos sauvegardes.\nVoulez-vous la remplacer ?`);
    
    if (confirmOverwriteByName) {
      savedViews[existingViewIndex].data = { nodes, edges };
      savedViews[existingViewIndex].createdAt = new Date().toLocaleString();
      
      localStorage.setItem('network_saved_views', JSON.stringify(savedViews));
      alert(`✅ La vue "${viewName}" a été mise à jour !`);
      
      currentOpenedViewId = savedViews[existingViewIndex].id;
      
      if (typeof renderPresetTiles === "function") renderPresetTiles();
      if (typeof renderSavedViewsPage === "function") renderSavedViewsPage();
      return;
    } else {
      return; 
    }
  }


  const newId = 'view_' + Date.now();
  const newView = {
    id: newId,
    name: viewName.trim(),
    data: { nodes, edges },
    createdAt: new Date().toLocaleString()
  };

  savedViews.push(newView);
  localStorage.setItem('network_saved_views', JSON.stringify(savedViews));
  alert(`✅ Nouveau graphique "${viewName}" enregistré !`);


  currentOpenedViewId = newId;

  if (typeof renderPresetTiles === "function") renderPresetTiles();
  if (typeof renderSavedViewsPage === "function") renderSavedViewsPage();
}



function renderSavedViewsPage() {
  const grid = document.getElementById('saved-views-grid');
  if (!grid) return;

  const savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];

  if (savedViews.length === 0) {
    grid.innerHTML = `<div class="no-views"><p>Aucune vue sauvegardée pour le moment.</p></div>`;
    return;
  }

  grid.innerHTML = '';
  savedViews.forEach(view => {
    const card = document.createElement('div');
    card.className = 'view-card'; 
    card.style = "background:#1e2430; border:1px solid #2d3748; padding:15px; border-radius:8px; margin-bottom:15px; color:#fff;"; 
    card.innerHTML = `
      <h3 style="margin-top:0; color:#42ebe2;">${esc(view.name)}</h3>
      <p style="margin:5px 0;"><small>Créée le : ${view.createdAt}</small></p>
      <p style="margin:5px 0;">Nœuds : ${view.data.nodes.length} | Liens : ${view.data.edges.length}</p>
      <div style="display:flex; gap:10px; margin-top:10px;">
        <a href="#workspace?loadview=${view.id}" class="btn btn-primary btn-sm">Ouvrir</a>
        <button class="btn btn-danger btn-sm" onclick="deleteSavedView('${view.id}')">Supprimer</button>
      </div>
    `;
    grid.appendChild(card);
  });
}


function loadSavedViewIntoWorkspace(viewId) {
  const savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];
  const view = savedViews.find(v => v.id === viewId);
  if (!view) return;
  console.log("📂 Déploiement de la vue sauvegardée :", view.name);

 
  nodesDataSet.clear();
  edgesDataSet.clear();

  nodesDataSet.add(view.data.nodes);
  edgesDataSet.add(view.data.edges);

  
  if (typeof syncAllDropdowns === "function") syncAllDropdowns();
  if (typeof applyFilters === "function") applyFilters();


  setTimeout(() => {
    if (network) {
      network.setSize('100%', '100%');
      network.redraw();                 
      network.fit({                     
        animation: {
          duration: 1000,             
          easingFunction: 'easeInOutQuad'
        }
      });
      console.log("🕸️ Graphe déployé, centré et stabilisé avec succès !");
    }
  }, 150);


  setTimeout(() => { window.location.hash = "#workspace"; }, 100);
}


window.deleteSavedView = function(viewId) {
  if (!confirm("Supprimer cette vue définitivement ?")) return;
  let savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];
  savedViews = savedViews.filter(v => v.id !== viewId);
  localStorage.setItem('network_saved_views', JSON.stringify(savedViews));
  renderSavedViewsPage();
};
    window.deleteNode = function(nodeId) {
      if (!nodeId) return;
      if (!confirm('Supprimer cet élément et toutes ses relations ?')) return;
     
      const toRemove = edgesDataSet.get({ filter: e => e.from === nodeId || e.to === nodeId }).map(e => e.id);
      edgesDataSet.remove(toRemove);
      nodesDataSet.remove(nodeId);
      updateFilterLists(false);
      updateAutocompleteLists();
      
    }


/* =======================================================
   IMPORT CSV
   ======================================================= */

const dropZone  = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');

if (dropZone) {
  ['dragenter','dragover'].forEach(ev => dropZone.addEventListener(ev, e => { e.preventDefault(); dropZone.classList.add('dragover'); }));
  ['dragleave','drop'].forEach(ev => dropZone.addEventListener(ev, e => { e.preventDefault(); dropZone.classList.remove('dragover'); }));
  dropZone.addEventListener('drop', e => { e.preventDefault(); loadFile(e.dataTransfer.files[0]); });
}

if (fileInput) {
  fileInput.addEventListener('change', e => { loadFile(e.target.files[0]); fileInput.value = ''; });
}

    function loadFile(file) {
  if (!file) return;
  console.log("🚀 Fichier csv importé avec succès !");

  if (!file.name.endsWith('.csv')) {
      alert("⚠️ Format incorrect. Veuillez glisser uniquement un fichier au format .csv");
      return;
  }

  const reader = new FileReader();
  reader.onload = e => {
     
      parseCSV(e.target.result);
      
      
      setTimeout(() => {
          console.log("🔄 Redirection automatique vers le workspace...");
          window.location.hash = "#workspace";
      }, 100);
  };
  reader.readAsText(file, 'utf-8');
}



    function initNetwork() {
  const container = document.getElementById('graph-container');
  

  const options = {
    interaction: { 
      hover: true, 
      selectConnectedEdges: false, 
      dragNodes: true 
    },
    physics: {
      enabled: true,
      barnesHut: { 
        gravitationalConstant: -3500, 
        centralGravity: 0.15, 
        springLength: 160 
      },
      stabilization: { 
        enabled: true,
        iterations: 400,
        updateInterval: 25,
        fit: false 
      },
      maxVelocity: 15, 
      minVelocity: 0.7
    },



    edges: {
      font: { color: '#AAB4C0', size: 11, align: 'middle', strokeWidth: 3, strokeColor: '#042042' },
      color: { color: 'rgba(255,255,255,.18)', highlight: '#42ebe2', hover: '#42ebe2' },
      arrows: { to: { enabled: true, scaleFactor: .8 } }
    }
  };

  network = new vis.Network(container, { nodes: nodesDataSet, edges: edgesDataSet }, options);

  // =========================================================================
  // 🎯 LE PREMIER CHARGEMENT 
  // =========================================================================

  network.once('stabilized', () => {
    if (network) {
      
      network.setOptions({ physics: { enabled: false } });
      
      // 2. On cadre parfaitement à la taille de l'écran
      network.fit({ 
        animation: { duration: 1000, easingFunction: 'easeOutQuad' } 
      });
    }
  });

  // =========================================================================
  // ⚡ GESTION DES DÉPLACEMENTS (Sans aucun risque de re-zoom)
  // =========================================================================

  network.on('dragStart', params => {
    if (params.nodes.length > 0) {
      nodesDataSet.update({ id: params.nodes[0], fixed: { x: false, y: false } });
      
       network.setOptions({
        physics: {
          enabled: true,
          barnesHut: { gravitationalConstant: -2000, centralGravity: 0.1, springLength: 140 }
        }
      });
    }
  });

  network.on('dragEnd', params => {
    if (params.nodes.length > 0) {
      nodesDataSet.update({ id: params.nodes[0], fixed: { x: true, y: true } });
      
      network.setOptions({ physics: { enabled: false } });
    }
  });

  network.on('click', params => {
    if (params.nodes.length > 0) {
      if (isFiltered) revealNeighbors(params.nodes[0]);
      openNodeSidebar(nodesDataSet.get(params.nodes[0]));
    } else if (params.edges.length > 0) {
      openEdgeSidebar(edgesDataSet.get(params.edges[0]));
    } else {
      
    }
  });
}



    /* =======================================================
       FILTRES
       ======================================================= */
    function updateFilterLists(preserveCat = false) {
      const fCat  = document.getElementById('f-cat');
      const fNode = document.getElementById('f-node');
      const fRel  = document.getElementById('f-rel');
      if(!fCat || !fNode || !fRel) return;

      const prevCat  = preserveCat ? fCat.value : '';
      const prevNode = fNode.value;
      const prevRel  = fRel.value;

      // Catégories
      if (!preserveCat) {
        fCat.innerHTML = '<option value="">— Toutes les catégories —</option>';
        const cats = new Set();
        nodesDataSet.forEach(n => { if (n.category) cats.add(n.category); });
        [...cats].sort().forEach(c => {
          const o = document.createElement('option'); o.value = c; o.textContent = c; fCat.appendChild(o);
        });
      }

      // Nœuds (filtrés par catégorie active)
      syncAllDropdowns();

      // Relations
      fRel.innerHTML = '<option value="">— Toutes les relations —</option>';
      const rels = new Set();
      edgesDataSet.forEach(e => { if (e.label) rels.add(e.label); });
      [...rels].sort().forEach(r => {
        const o = document.createElement('option'); o.value = r; o.textContent = r; fRel.appendChild(o);
      });

  
      if (preserveCat && prevCat) fCat.value = prevCat;
      if ([...fNode.options].some(o => o.value === prevNode)) fNode.value = prevNode;
      if ([...fRel.options].some(o => o.value === prevRel))  fRel.value  = prevRel;
    }

    
    function updateAutocompleteLists() {
      const dlSrc = document.getElementById('dl-source');
      const dlTgt = document.getElementById('dl-target');
      const dlRel = document.getElementById('dl-relation');
      dlSrc.innerHTML = ''; dlTgt.innerHTML = ''; dlRel.innerHTML = '';

      nodesDataSet.get().sort((a,b) => a.id.localeCompare(b.id)).forEach(n => {
        const oSrc = document.createElement('option'); oSrc.value = n.id; dlSrc.appendChild(oSrc);
        const oTgt = document.createElement('option'); oTgt.value = n.id; dlTgt.appendChild(oTgt);
      });
      const rels = new Set(); edgesDataSet.forEach(e => { if (e.label) rels.add(e.label); });
      [...rels].sort().forEach(r => {
        const o = document.createElement('option'); o.value = r; dlRel.appendChild(o);
      });
    
    }
    function handleCategoryChange() { syncAllDropdowns(); applyFilters(); }

    function syncAllDropdowns(changedFilter) {
  const fCat  = document.getElementById('f-cat');
  const fNode = document.getElementById('f-node');
  const fRel  = document.getElementById('f-rel');
  if (!fCat || !fNode || !fRel) return;

 
  if (typeof nodesDataSet === 'undefined' || !nodesDataSet) return;

  // On sauvegarde les sélections actuelles de l'utilisateur
  const currentCat  = fCat.value;
  const currentNode = fNode.value;
  const currentRel  = fRel.value;

 
  if (!changedFilter) {
    const categories = new Set();
    nodesDataSet.get().forEach(node => {
      if (node.category && node.category.trim() !== '') {
        categories.add(node.category.trim());
      }
    });

    fCat.innerHTML = '<option value="">— Toutes les catégories —</option>';
    Array.from(categories).sort().forEach(cat => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = cat;
      fCat.appendChild(option);
    });
    
   
    fCat.value = currentCat;
  }


  if (changedFilter === 'cat' || changedFilter === 'rel' || !changedFilter) {
    fNode.innerHTML = '<option value="">— Tous les éléments —</option>';
    
    const validNodes = new Set();
    nodesDataSet.get().forEach(n => {
      const matchCat = !fCat.value || (n.category && n.category.toLowerCase() === fCat.value.toLowerCase());
      
      let matchRel = true;
      if (currentRel) {
        const connectedEdges = edgesDataSet.get({ 
          filter: e => (e.from === n.id || e.to === n.id) && e.label === currentRel 
        });
        matchRel = connectedEdges.length > 0;
      }

      if (matchCat && matchRel) validNodes.add(n.id);
    });

    [...validNodes].sort().forEach(id => {
      const o = document.createElement('option'); o.value = id; o.textContent = id; fNode.appendChild(o);
    });
    fNode.value = [...fNode.options].some(o => o.value === currentNode) ? currentNode : '';
  }

 
  if (changedFilter === 'cat' || changedFilter === 'node' || !changedFilter) {
    fRel.innerHTML = '<option value="">— Toutes les relations —</option>';
    const validRels = new Set();

    edgesDataSet.get().forEach(e => {
      const srcNode = nodesDataSet.get(e.from);
      const tgtNode = nodesDataSet.get(e.to);

      let matchCat = true;
      if (fCat.value) {
        matchCat = (srcNode && srcNode.category && srcNode.category.toLowerCase() === fCat.value.toLowerCase()) ||
                   (tgtNode && tgtNode.category && tgtNode.category.toLowerCase() === fCat.value.toLowerCase());
      }

      let matchNode = true;
      if (currentNode) {
        matchNode = (e.from === currentNode || e.to === currentNode);
      }

      if (matchCat && matchNode && e.label) validRels.add(e.label);
    });

    [...validRels].sort().forEach(r => {
      const o = document.createElement('option'); o.value = r; o.textContent = r; fRel.appendChild(o);
    });
    fRel.value = [...fRel.options].some(o => o.value === currentRel) ? currentRel : '';
  }

  console.log("🔄 [SUCCÈS] Tous les menus déroulants (Catégories, Éléments, Relations) ont été synchronisés !");
}

    function applyFilters() {
      const sCat  = document.getElementById('f-cat').value.toLowerCase();
      const sNode = document.getElementById('f-node').value;
      const sRel  = document.getElementById('f-rel').value;

      isFiltered = !!(sCat || sNode || sRel);

    
  const edgeUpdates = [];
  const activeEdges = []; 

  edgesDataSet.forEach(e => {
   
    const matchRel = !sRel || e.label === sRel;
    
    edgeUpdates.push({ id: e.id, hidden: !matchRel });
    
    if (matchRel) {
      activeEdges.push(e); 
    }
  });

 
  const nodeUpdates = [];
  nodesDataSet.forEach(n => {
    
    const matchCat  = !sCat  || (n.category && n.category.toLowerCase() === sCat);
    const matchNode = !sNode || (n.id === sNode);
    
    let connectedToActiveEdge = true;
    if (sRel) {
      connectedToActiveEdge = activeEdges.some(e => e.from === n.id || e.to === n.id);
    }

   
    const isVisible = matchCat && matchNode && connectedToActiveEdge;
    
    nodeUpdates.push({ id: n.id, hidden: !isVisible });
  });


  nodesDataSet.update(nodeUpdates);
  edgesDataSet.update(edgeUpdates);

  
  setTimeout(() => { 
    if (network) network.fit({ animation: { duration: 400, easingFunction: 'easeInOutQuad' } }); 
  }, 80);
}

    function revealNeighbors(nodeId) {
      edgesDataSet.forEach(e => {
        if (e.from === nodeId || e.to === nodeId) {
          e.hidden = false; edgesDataSet.update(e);
          const fN = nodesDataSet.get(e.from);
          const tN = nodesDataSet.get(e.to);
          if (fN && fN.hidden) { fN.hidden = false; nodesDataSet.update(fN); }
          if (tN && tN.hidden) { tN.hidden = false; nodesDataSet.update(tN); }
        }
      });
    }

    function resetFilters() {
      document.getElementById('f-cat').value  = '';
      document.getElementById('f-node').value = '';
      document.getElementById('f-rel').value  = '';
      isFiltered = false;

      if (network) {
        network.setOptions({ physics: { enabled: true } });
        nodesDataSet.forEach(n => nodesDataSet.update({ id: n.id, physics: true, hidden: false, fixed: { x: false, y: false } }));
        edgesDataSet.forEach(e => edgesDataSet.update({ id: e.id, hidden: false }));
        network.once('stabilizationIterationsDone', () => network.setOptions({ physics: { enabled: false } }));
      }
      updateFilterLists(false);
      
    }

    /* =======================================================
       SIDEBAR ÉDITION ÉLÉMENTS (NŒUDS & RELATIONS)
       ======================================================= */

    function openNodeSidebar(node) {
      document.getElementById('side-title').textContent = node.label;
      const body = document.getElementById('sidebar-body');

      body.innerHTML = `
    <div class="form-group">
      <label class="prop-label" for="edit-cat">Catégorie</label>
      <input type="text" id="edit-cat" class="sidebar-edit-input" value="${esc(node.category || '')}">
    </div>
    <div class="form-group">
      <label class="prop-label" for="edit-props">Propriétés (une par ligne)</label>
      <textarea id="edit-props" class="sidebar-edit-input">${esc((node.properties || []).join('\n'))}</textarea>
    </div>
    <button class="btn btn-primary btn-full" style="margin-bottom:10px;" onclick="saveNode('${esc(node.id)}')">
      <i class="fa-solid fa-floppy-disk"></i> Enregistrer
    </button>
    <button class="btn btn-danger btn-full btn-sm" onclick="deleteNode('${esc(node.id)}')">
      <i class="fa-solid fa-trash"></i> Supprimer l'élément
    </button>
  `;

      document.getElementById('sidebar');
    }


    function openEdgeSidebar(edge) {
      document.getElementById('side-title').textContent = 'Relation';
      const body = document.getElementById('sidebar-body');

      body.innerHTML = `
        <p style="font-size:.84rem;color:var(--color_muted);margin-bottom:14px;">
          <b style="color:#fff;">${esc(edge.from)}</b>
          <i class="fa-solid fa-arrow-right" style="margin:0 7px;font-size:.75rem;color:var(--color_cyan);"></i>
          <b style="color:#fff;">${esc(edge.to)}</b>
        </p>
        <div class="form-group">
          <label class="prop-label">Libellé de la relation</label>
          <input type="text" id="edit-edge-label" class="sidebar-edit-input" value="${esc(edge.label || '')}">
        </div>
        <div class="form-group">
          <label class="prop-label">Propriétés de la relation (une par ligne)</label>
          <textarea id="edit-edge-props" class="sidebar-edit-input">${esc((edge.properties || []).join('\n'))}</textarea>
        </div>
        <button class="btn btn-primary btn-full" style="margin-bottom:10px;" onclick="saveEdge('${esc(edge.id)}')">
          <i class="fa-solid fa-floppy-disk"></i> Enregistrer
        </button>
        <button class="btn btn-danger btn-full btn-sm" onclick="deleteEdge('${esc(edge.id)}')">
          <i class="fa-solid fa-trash"></i> Supprimer la relation
        </button>
      `;

      document.getElementById('sidebar');
    }



window.closeSidebar = function() {
  const sidebar = document.getElementById('sidebar');
  
  // On ne déclenche la fermeture QUE si la sidebar est actuellement ouverte
  if (sidebar && sidebar.classList.contains('open')) {
    console.log("🚪 Fermeture centralisée de la sidebar.");
    sidebar.classList.remove('open');
  }

  // Nettoyage sécurisé de la variable de suivi du nœud
  if (typeof currentNodeId !== 'undefined') {
    currentNodeId = null;
  }
  window.currentNodeId = null;
};

/* =======================================================
   AIGUILLAGE CENTRAL : CLICS SUR LE GRAPHE (Vis.js)
   ======================================================= */
if (network)
   network.on("click", function (params) {
  const sidebar = document.getElementById('sidebar');


  if (params.nodes.length > 0) {
    const nodeId = params.nodes[0];
    const nodeData = nodesDataSet.get(nodeId);
    if (nodeData) {
      openNodeSidebar(nodeData); 
    }
  } 
 
  else if (params.edges.length > 0) {
    const edgeId = params.edges[0];
    const edgeData = edgesDataSet.get(edgeId);
    if (edgeData) {
      openEdgeSidebar(edgeData); 
    }
  } 

  else {
    if (sidebar && sidebar.classList.contains('open')) {
      console.log("🌌 Clic dans le vide détecté. Fermeture unique de la sidebar.");
      
    }
  }
});

    window.saveEdge = function(edgeId) {
      const label = document.getElementById('edit-edge-label').value.trim();
      if (!label) { alert('Le libellé de la relation ne peut pas être vide.'); return; }
      const props = document.getElementById('edit-edge-props').value
        .split('\n').map(l => l.trim()).filter(l => l.length > 0);
      edgesDataSet.update({ id: edgeId, label, properties: props });
      updateFilterLists(true);
      
      applyFilters();
    }

    window.deleteEdge = function(edgeId) {
      if (!confirm('Supprimer cette relation ?')) return;
      edgesDataSet.remove(edgeId);
      updateFilterLists(false);
      updateAutocompleteLists();
      
    }

    
    /* =======================================================
       CRÉER NŒUD / RELATION 
       ======================================================= */
    function createNode() {
      const name = document.getElementById('add-node-name').value.trim();
      const cat  = document.getElementById('add-node-cat').value.trim();
      if (!name) { alert('Le nom est requis.'); return; }
      if (nodesDataSet.get(name)) { alert('Un élément avec ce nom existe déjà.'); return; }

      nodesDataSet.add({
        id: name, label: name, category: cat, properties: [], attachments: [],
        shape: 'box', margin: 12,
        color: { background: 'rgba(29,54,85,.8)', border: 'rgba(255,255,255,.3)' },
        font: { color: '#FFFFFF', face: 'Inter', size: 13, bold: true }
      });

      document.getElementById('add-node-name').value = '';
      document.getElementById('add-node-cat').value  = '';
      updateFilterLists(true);
      updateAutocompleteLists();
      applyFilters();
    }

    function createRelation() {
      const src    = document.getElementById('add-src').value.trim();
      const rel    = document.getElementById('add-rel').value.trim();
      const pRel   = document.getElementById('add-prop-rel').value.trim();
      const tgt    = document.getElementById('add-tgt').value.trim();

      if (!src || !rel || !tgt) { alert('Source, Relation et Cible sont obligatoires.'); return; }

    
      [src, tgt].forEach(name => {
        if (!nodesDataSet.get(name)) {
          nodesDataSet.add({
            id: name, label: name, category: '', properties: [], attachments: [],
            shape: 'box', margin: 12,
            color: { background: 'rgba(29,54,85,.8)', border: 'rgba(255,255,255,.3)' },
            font: { color: '#FFFFFF', face: 'Inter', size: 13, bold: true }
          });
        }
      });

      edgesDataSet.add({
        id: 'e_m_' + Math.random().toString(36).substr(2,6),
        from: src, to: tgt, label: rel,
        properties: pRel ? pRel.split(',').map(p => p.trim()).filter(Boolean) : [],
        font: { color: '#AAB4C0', size: 11, align: 'middle', strokeWidth: 0 },
        color: { color: 'rgba(255,255,255,.18)', hover: '#42ebe2', highlight: '#42ebe2' },
        arrows: { to: { enabled: true, scaleFactor: .8 } }
      });

      document.getElementById('add-src').value     = '';
      document.getElementById('add-rel').value     = '';
      document.getElementById('add-prop-rel').value = '';
      document.getElementById('add-tgt').value     = '';
      updateFilterLists(true);
      updateAutocompleteLists();
      applyFilters();
    }

function renderWorkspaceTable() {

  const oldTable = document.getElementById('workspace-table-container');
  if (oldTable) oldTable.remove();


  const tablePage = document.getElementById('table');
  if (!tablePage) {
        return;
  }
  tablePage.innerHTML = ""; 

  const tableContainer = document.createElement('div');
  tableContainer.id = 'workspace-table-container';
  tableContainer.className = 'panel-glass';
  

  tableContainer.style.position = 'relative'; 
  tableContainer.style.width = '100%';
  tableContainer.style.height = 'calc(100vh - 100px)';
  tableContainer.style.overflowY = 'auto';
  tableContainer.style.padding = '30px';
  tableContainer.style.boxSizing = 'border-box';


  let tableHTML = `
    <h4 style="margin-bottom:20px; color: #fff;">liste des Noeuds et Liaisons Détectées</h4>
    <table class="data-table" style="text-align: left; width: 100%; border-collapse: collapse;">
      <thead style="position: sticky; top: 0; background-color: #042042; z-index: 10; box-shadow: 0 2px 2px 2px #c9c9c9;">
        <tr>
          <th style="position: sticky; text-align: left;background-color: #042042; padding: 10px;">Catégorie</th>
          <th style=" position: sticky; text-align: left;background-color: #042042; padding: 10px;">Source</th>
          <th style=" position: sticky; text-align: left;background-color: #042042; padding: 10px;">Propriétés Source</th>
          <th style=" position: sticky; text-align: left;background-color: #042042; padding: 10px;">Relation</th>
          <th style=" position: sticky; text-align: left;background-color: #042042; padding: 10px;">Propriétés Relation</th>
          <th style="position: sticky; text-align: left;background-color: #042042; padding: 10px;">Cible</th>
          <th style="position: sticky; text-align: left;background-color: #042042; padding: 10px;">Propriétés Cible</th>
        </tr>
      </thead>
      <tbody>
  `;

  
  const sCat  = document.getElementById('f-cat') ? document.getElementById('f-cat').value.toLowerCase() : "";
  const sNode = document.getElementById('f-node') ? document.getElementById('f-node').value : "";
  const sRel  = document.getElementById('f-rel') ? document.getElementById('f-rel').value : "";


  const allEdges = edgesDataSet.get();

  allEdges.forEach(edge => {
    const fromNode = nodesDataSet.get(edge.from);
    const toNode = nodesDataSet.get(edge.to);

    if (fromNode && toNode) {

      const matchRel = !sRel || edge.label === sRel;
      const matchCat = !sCat || (fromNode.category && fromNode.category.toLowerCase() === sCat);
      const matchNode = !sNode || (edge.from === sNode || edge.to === sNode);

   
      if (matchRel && matchCat && matchNode) {
        const cat = fromNode.category || 'Général';
        
        // =====================================================================
        // 🔮 GÉNÉRATION DIRECTE DES PUCES 
        // =====================================================================
        

        let sourceLi = '';
        if (fromNode.properties) {
          Object.entries(fromNode.properties)
            .filter(([key]) => !['id', 'label', 'x', 'y', 'color', 'group', 'category'].includes(key))
            .forEach(([key, value]) => {
              const labelKey = isNaN(key) ? `<span style="color:rgba(255,255,255,0.5); font-size:0.8rem;">${key}:</span> ` : '';
              sourceLi += `<li style="margin-bottom: 2px;">${labelKey}${value}</li>`;
            });
        }
        const sourceUl = sourceLi ? `<ul style="margin: 0; padding-left: 15px; list-style-type: disc;">${sourceLi}</ul>` : `<span style="opacity:0.3; font-style:italic;">-</span>`;

        let relationLi = '';
        if (edge.properties) {
          Object.entries(edge.properties)
            .filter(([key]) => !['id', 'label', 'x', 'y', 'color', 'group', 'category'].includes(key))
            .forEach(([key, value]) => {
              const labelKey = isNaN(key) ? `<span style="color:rgba(255,255,255,0.5); font-size:0.8rem;">${key}:</span> ` : '';
              relationLi += `<li style="margin-bottom: 2px;">${labelKey}${value}</li>`;
            });
        }
        const relationUl = relationLi ? `<ul style="margin: 0; padding-left: 15px; list-style-type: disc;">${relationLi}</ul>` : `<span style="opacity:0.3; font-style:italic;">-</span>`;

     
        let targetLi = '';
        if (toNode.properties) {
          Object.entries(toNode.properties)
            .filter(([key]) => !['id', 'label', 'x', 'y', 'color', 'group', 'category'].includes(key))
            .forEach(([key, value]) => {
              const labelKey = isNaN(key) ? `<span style="color:rgba(255,255,255,0.5); font-size:0.8rem;">${key}:</span> ` : '';
              targetLi += `<li style="margin-bottom: 2px;">${labelKey}${value}</li>`;
            });
        }
        const targetUl = targetLi ? `<ul style="margin: 0; padding-left: 15px; list-style-type: disc;">${targetLi}</ul>` : `<span style="opacity:0.3; font-style:italic;">-</span>`;

        const sourceLabel = fromNode.label || edge.from;
        const targetLabel = toNode.label || edge.to;
        

        tableHTML += `
         <tr>
            <td style="text-align: left; vertical-align: top; padding: 10px;"><span class="badge-privacy" style="font-size:1rem; padding:2px 8px;">${cat}</span></td>
            
            <td style="text-align: left; vertical-align: top; padding: 10px;"><strong style="color:var(--color_cyan);">${sourceLabel}</strong></td>
            
            <td style="text-align: left; vertical-align: top; padding: 10px; line-height: 1.3;">${sourceUl}</td>
            
            <td style="text-align: left; vertical-align: top; padding: 10px;"><i class="fa-solid fa-arrow-right" style="font-size:0.8rem; margin-right:8px; opacity:0.5;"></i>${edge.label || 'Lié à'}</td>
            
            <td style="text-align: left; vertical-align: top; padding: 10px; line-height: 1.3;">${relationUl}</td>
            
            <td style="text-align: left; vertical-align: top; padding: 10px;"><strong>${targetLabel}</strong></td>
            
            <td style="text-align: left; vertical-align: top; padding: 10px; line-height: 1.3;">${targetUl}</td>
          </tr>
        `;
      }
    }
  });

  tableHTML += `</tbody></table>`;
  tableContainer.innerHTML = tableHTML;
  
  tablePage.appendChild(tableContainer);
}

/* =======================================================
       EXPORTS
   ======================================================= */
    function exportCSV() {
      let csv = '\uFEFFCategorie;Source;Propriete_Source;Relation;Propriete_Relation;Cible;Propriete_Cible\r\n';
      
      const allEdges = edgesDataSet.get();
      const allNodes = nodesDataSet.get();
      const done = new Set();
      const q = s => '"' + String(s || '').replace(/"/g,'""') + '"';

      allEdges.forEach(edge => {
        const sN = allNodes.find(n => n.id === edge.from);
        const tN = allNodes.find(n => n.id === edge.to);
        const cat  = (sN && sN.category)   ? sN.category : '';
        const pSrc = (sN && sN.properties) ? sN.properties.join(', ') : '';
        const pTgt = (tN && tN.properties) ? tN.properties.join(', ') : '';
        const pRel = edge.properties       ? edge.properties.join(', ') : '';
        csv += `${q(cat)};${q(edge.from)};${q(pSrc)};${q(edge.label)};${q(pRel)};${q(edge.to)};${q(pTgt)}\r\n`;
        if (sN) done.add(sN.id);
      });


      allNodes.forEach(node => {
        const isIsolated = !allEdges.some(e => e.from === node.id || e.to === node.id);
        const hasData    = (node.category && node.category.trim()) || (node.properties && node.properties.length);
        if (isIsolated || (hasData && !done.has(node.id))) {
          const pSrc = node.properties ? node.properties.join(', ') : '';
          csv += `${q(node.category || '')};${q(node.id)};${q(pSrc)};"";"";"";""\r\n`;
        }
      });

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);

  let filename = 'wynagraph_export';
  
  if (typeof currentOpenedViewId !== 'undefined' && currentOpenedViewId) {

    const savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];
    const currentView = savedViews.find(v => v.id === currentOpenedViewId);
    if (currentView) {
      filename = currentView.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
    }
  } else {

    filename += '_' + new Date().toISOString().split('T')[0];
  }

  a.download = `${filename}.csv`;
  document.body.appendChild(a); 
  a.click(); 
  document.body.removeChild(a);
}

function exportToJSON() {
  const allNodes = nodesDataSet.get();
  const allEdges = edgesDataSet.get();
  const arrayToObj = (propertiesArray) => {
    const obj = {};
    if (Array.isArray(propertiesArray)) {
      propertiesArray.forEach(prop => {
        if (typeof prop === 'string' && prop.includes(':')) {
          const parts = prop.split(':');
          const key = parts[0].trim();
          const value = parts.slice(1).join(':').trim(); // Gère les ":" multiples (ex: les URLs)
          if (key) obj[key] = value;
        } else if (prop) {
          obj[`prop_${Object.keys(obj).length + 1}`] = String(prop).trim();
        }
      });
    }
    return obj;
  };

  const exportStructure = {
    metadata: {
      exporter: "WynaGraph B2B",
      version: "1.0",
      generated_at: new Date().toISOString(),
      total_nodes: allNodes.length,
      total_relationships: allEdges.length
    },
    nodes: allNodes.map(node => {
      return {
        id: node.id,
        label: node.id,
        category: node.category || "Unassigned",
        properties: arrayToObj(node.properties) 
      };
    }),
    relationships: allEdges.map(edge => {
      return {
        id: edge.id,
        type: edge.label ? edge.label.toUpperCase().replace(/\s+/g, '_').normalize('NFD').replace(/[\u0300-\u036f]/g, '') : 'RELATION',
        source: edge.from,
        target: edge.to,
        properties: arrayToObj(edge.properties) 
      };
    })
  };

  const jsonString = JSON.stringify(exportStructure, null, 2);

  let filename = 'wynagraph_export';
  if (typeof currentOpenedViewId !== 'undefined' && currentOpenedViewId) {
    const savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];
    const currentView = savedViews.find(v => v.id === currentOpenedViewId);
    if (currentView) {
      filename = currentView.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
    }
  } else {
    filename += '_' + new Date().toISOString().split('T')[0];
  }

  const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${filename}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

window.closeSidebar = closeSidebar;
window.handleCategoryChange = handleCategoryChange;
window.applyFilters = applyFilters;
window.resetFilters = resetFilters;
window.saveNode = saveNode;
window.deleteNode = deleteNode;
window.saveEdge = saveEdge;
window.deleteEdge = deleteEdge;
window.createNode = createNode;
window.createRelation = createRelation;
window.openNodeSidebar = openNodeSidebar;
window.openEdgeSidebar = openEdgeSidebar;
window.renderWorkspaceTable = renderWorkspaceTable;
