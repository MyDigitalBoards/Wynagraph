const templatesData = {
    inspirations: [
        { cat: "Compte", src: "Instagram", pSrc: "@lesgustaves", rel: "Inspire pour", tgt: "Idée déco salon", pTgt: "Style: Japonisant" },
        { cat: "Podcast", src: "Huberman Lab", pSrc: "Épisode: Sommeil", rel: "Recommande", tgt: "Routine matinale", pTgt: "Action: Lumière naturelle" },
        { cat: "Newsletter", src: "The Shelf", pSrc: "Hebdo", rel: "A présenté", tgt: "Livre: Range ta vie", pTgt: "Lu: À faire" },
        { cat: "Compte", src: "YouTube", pSrc: "@thomassoliveres", rel: "Explique", tgt: "Investissement locatif", pTgt: "Note: Revoir" },
        { cat: "Podcast", src: "Génération Do It Yourself", pSrc: "Épisode: 320", rel: "Parle de", tgt: "Méthode Deep Work", pTgt: "Concept: Clé" },
        { cat: "Compte", src: "Pinterest", pSrc: "Board: Jardinage", rel: "Montre", tgt: "Potager vertical", pTgt: "Faisabilité: Oui" },
        { cat: "Newsletter", src: "Slowdown", pSrc: "Mensuel", rel: "Recommande", tgt: "Outil: Notion", pTgt: "Usage: Organisation" },
        { cat: "Compte", src: "LinkedIn", pSrc: "@annesophiedufour", rel: "Partage", tgt: "Conseil: Négociation salaire", pTgt: "Méthode: BATNA" },
        { cat: "Podcast", src: "Transfert", pSrc: "Épisode: Confiance", rel: "A changé", tgt: "Ma vision des relations", pTgt: "Impact: Fort" },
        { cat: "Compte", src: "Twitter/X", pSrc: "@paulgraham", rel: "A écrit sur", tgt: "Comment penser clairement", pTgt: "Thread: Sauvegardé" }
    ],
    voyages: [
        { cat: "Destination", src: "Lisbonne", pSrc: "Vols: directs depuis Paris", rel: "Recommandé par", tgt: "Sophie (collègue)", pTgt: "Période: Octobre" },
        { cat: "Adresse", src: "Lisbonne", pSrc: "Quartier: Alfama", rel: "Incontournable", tgt: "Miradouro da Graça", pTgt: "Vue: Panoramique" },
        { cat: "Restaurant", src: "Lisbonne", pSrc: "Tasca do Chico", rel: "Spécialité", tgt: "Fado et cuisine locale", pTgt: "Réserver à l'avance" },
        { cat: "Destination", src: "Kyoto", pSrc: "Vols: avec escale", rel: "Idéal en", tgt: "Avril (cerisiers)", pTgt: "Budget: Moyen-élevé" },
        { cat: "Astuce", src: "Booking.com", pSrc: "Tarif flexible", rel: "Meilleur pour", tgt: "Annulation gratuite", pTgt: "Conseil: Comparer" },
        { cat: "Destination", src: "Marrakech", pSrc: "2h de Paris", rel: "Idéal pour", tgt: "Week-end prolongé", pTgt: "Éviter: Juillet-Août" },
        { cat: "Adresse", src: "Marrakech", pSrc: "Médina", rel: "À voir absolument", tgt: "Jardin Majorelle", pTgt: "Arriver tôt" },
        { cat: "Astuce", src: "Google Flights", pSrc: "Alerte prix", rel: "Utile pour", tgt: "Surveiller tarifs", pTgt: "Action: Activer" },
        { cat: "Destination", src: "Côte Amalfitaine", pSrc: "Italie", rel: "Accessible depuis", tgt: "Naples (train)", pTgt: "Durée: 1h30" },
        { cat: "Astuce", src: "Airbnb", pSrc: "Filtre: Cuisine équipée", rel: "Économise sur", tgt: "Budget repas", pTgt: "Conseil: Marchés locaux" }
    ],
    restaurants: [
        { cat: "Cuisine française", src: "Le Baratin", pSrc: "Paris 20e", rel: "Connu pour", tgt: "Terrine maison", pTgt: "Réservation: Indispensable" },
        { cat: "Cuisine italienne", src: "Chez Luisa", pSrc: "Lyon 1er", rel: "Spécialité", tgt: "Pasta fraîche maison", pTgt: "Prix: Abordable" },
        { cat: "Brunch", src: "Café Oberkampf", pSrc: "Paris 11e", rel: "Ouvert le", tgt: "Week-end 10h-15h", pTgt: "File d'attente: Fréquente" },
        { cat: "Cuisine japonaise", src: "Kunitoraya", pSrc: "Paris 1er", rel: "Meilleur pour", tgt: "Udon fait maison", pTgt: "Service: Midi uniquement" },
        { cat: "Bon plan", src: "Marché d'Aligre", pSrc: "Paris 12e", rel: "Idéal pour", tgt: "Déjeuner sur le pouce", pTgt: "Jour: Samedi matin" },
        { cat: "Cuisine du monde", src: "Yima", pSrc: "Paris 10e", rel: "Cuisine", tgt: "Spécialités marocaines", pTgt: "Couscous: Exceptionnel" },
        { cat: "Cave à vins", src: "La Cave de Belleville", pSrc: "Paris 11e", rel: "Propose", tgt: "Vins naturels", pTgt: "Ambiance: Décontractée" },
        { cat: "Cuisine végétale", src: "Hank Burger", pSrc: "Plusieurs adresses", rel: "Spécialité", tgt: "Burgers 100% végétal", pTgt: "Note: Même les carnivores aiment" },
        { cat: "Pâtisserie", src: "Stohrer", pSrc: "Paris 2e", rel: "Plus ancienne", tgt: "Pâtisserie de Paris", pTgt: "À essayer: Baba au rhum" },
        { cat: "Coffee shop", src: "Café Loustic", pSrc: "Paris 3e", rel: "Sert", tgt: "Café de spécialité", pTgt: "Wifi: Oui" }
    ],
    apprentissages: [
        { cat: "Compétence", src: "Notion", pSrc: "Appris via YouTube", rel: "Utilisé pour", tgt: "Organisation projets perso", pTgt: "Niveau: Intermédiaire" },
        { cat: "Livre", src: "L'art subtil de s'en foutre", pSrc: "Mark Manson", rel: "A changé ma vision sur", tgt: "Gestion des priorités", pTgt: "Concept clé: Valeurs" },
        { cat: "Formation", src: "Coursera", pSrc: "Google Data Analytics", rel: "Enseigne", tgt: "Analyse de données", pTgt: "Avancement: 60%" },
        { cat: "Compétence", src: "Canva", pSrc: "Autodidacte", rel: "Permet de créer", tgt: "Visuels réseaux sociaux", pTgt: "Temps apprentissage: 2h" },
        { cat: "Habitude", src: "Lecture 20min/jour", pSrc: "Matin", rel: "Développe", tgt: "Culture générale", pTgt: "Livres/an: 12" },
        { cat: "Cours", src: "Duolingo", pSrc: "Espagnol", rel: "Pratiqué", tgt: "15 min par jour", pTgt: "Niveau actuel: B1" },
        { cat: "Livre", src: "Atomic Habits", pSrc: "James Clear", rel: "Explique", tgt: "Système de petites habitudes", pTgt: "Appliqué: Sport quotidien" },
        { cat: "Compétence", src: "Excel", pSrc: "Formation interne", rel: "Maîtrise des", tgt: "Tableaux croisés dynamiques", pTgt: "Usage: Budget perso" },
        { cat: "Curiosité", src: "Chaîne Arte", pSrc: "Documentaires", rel: "A développé intérêt pour", tgt: "Architecture contemporaine", pTgt: "Suite: Visiter bâtiments" },
        { cat: "Podcast", src: "No Limit Serait", pSrc: "Épisode Productivité", rel: "A introduit", tgt: "Méthode GTD", pTgt: "Testé: Oui, efficace" }
    ],
    contacts: [
        { cat: "Pro", src: "Comptable", pSrc: "Cabinet Alpha - 01 23 45 67", rel: "Gère", tgt: "Déclaration impôts", pTgt: "RDV: Chaque avril" },
        { cat: "Santé", src: "Dr. Martin", pSrc: "Médecin généraliste", rel: "Suit", tgt: "Bilan annuel", pTgt: "Rappel: Vaccin grippe oct." },
        { cat: "Artisan", src: "Électricien Moreau", pSrc: "Sérieux, prix correct", rel: "Intervient sur", tgt: "Travaux maison", pTgt: "Tel: 06 12 34 56 78" },
        { cat: "Ami", src: "Thomas", pSrc: "Conseils voyage", rel: "A recommandé", tgt: "Lisbonne en octobre", pTgt: "Contact: WhatsApp" },
        { cat: "Pro", src: "Julie (RH)", pSrc: "Mon entreprise", rel: "Référence pour", tgt: "Questions contrat", pTgt: "Discret et fiable" },
        { cat: "Voisinage", src: "Lucas (Voisin)", pSrc: "Dépanne souvent", rel: "Peut garder", tgt: "Clés appartement", pTgt: "Réciprocité: Oui" },
        { cat: "Famille", src: "Tante Claire", pSrc: "Experte cuisine", rel: "Source de", tgt: "Recettes familiales", pTgt: "Appeler: Dimanche" },
        { cat: "Pro", src: "Marc (freelance)", pSrc: "Graphiste", rel: "Disponible pour", tgt: "Missions ponctuelles", pTgt: "Tarif: Correct" },
        { cat: "Santé", src: "Kiné Dupuis", pSrc: "Proche de chez moi", rel: "Traite", tgt: "Douleurs dos", pTgt: "Prendre RDV: Dès que possible" },
        { cat: "Ami", src: "Sarah", pSrc: "Réseau pro", rel: "Travaille dans", tgt: "Secteur marketing", pTgt: "Conseil: Toujours pertinent" }
    ],
    projets: [
        { cat: "Maison", src: "Rénovation cuisine", pSrc: "Budget: 8 000€", rel: "Dépend de", tgt: "Devis artisan", pTgt: "Statut: En attente" },
        { cat: "Voyage", src: "Lisbonne octobre", pSrc: "Budget: 800€/pers", rel: "À réserver", tgt: "Vols + hôtel", pTgt: "Deadline: Fin juillet" },
        { cat: "Perso", src: "Apprendre l'espagnol", pSrc: "Objectif: B2", rel: "Via", tgt: "Duolingo + cours", pTgt: "Durée: 12 mois" },
        { cat: "Pro", src: "Changer de poste", pSrc: "Objectif: +20% salaire", rel: "Nécessite", tgt: "Mise à jour CV", pTgt: "Deadline: Septembre" },
        { cat: "Santé", src: "Courir 10km", pSrc: "Plan: 8 semaines", rel: "Utilise", tgt: "App Nike Run", pTgt: "Progression: 40%" },
        { cat: "Maison", src: "Jardin potager", pSrc: "Surface: 4m²", rel: "Nécessite", tgt: "Achat terreau + graines", pTgt: "Saison: Printemps" },
        { cat: "Finances", src: "Épargne urgence", pSrc: "Objectif: 5 000€", rel: "Alimenté par", tgt: "Virement mensuel 200€", pTgt: "Atteint dans: 18 mois" },
        { cat: "Perso", src: "Lire 12 livres", pSrc: "Suivi: Goodreads", rel: "Avancement", tgt: "5 livres lus", pTgt: "En cours: Atomic Habits" },
        { cat: "Créatif", src: "Créer un blog", pSrc: "Thème: Voyages", rel: "Bloqué par", tgt: "Choix plateforme", pTgt: "Options: WordPress / Ghost" },
        { cat: "Social", src: "Organiser réunion amis", pSrc: "15 personnes", rel: "Lieu envisagé", tgt: "Location salle associative", pTgt: "Date cible: Novembre" }
    ],
    ressources: [
        { cat: "Outil", src: "Notion", pSrc: "Gratuit jusqu'à 1000 blocs", rel: "Utile pour", tgt: "Organisation personnelle", pTgt: "Alternative: Obsidian" },
        { cat: "Site", src: "Canva", pSrc: "Version gratuite suffisante", rel: "Permet", tgt: "Créer des visuels", pTgt: "Usage: Présentations" },
        { cat: "Outil", src: "Toggl", pSrc: "Gratuit", rel: "Suit", tgt: "Temps passé par projet", pTgt: "Bilan: Hebdomadaire" },
        { cat: "Article", src: "Wait But Why", pSrc: "Blog Tim Urban", rel: "Explique", tgt: "Procrastination en profondeur", pTgt: "Lire: Absolument" },
        { cat: "Outil", src: "Calendly", pSrc: "Gratuit basique", rel: "Simplifie", tgt: "Prise de rendez-vous", pTgt: "Lien: À partager" },
        { cat: "Application", src: "Splitwise", pSrc: "Gratuit", rel: "Gère", tgt: "Dépenses partagées", pTgt: "Usage: Voyages entre amis" },
        { cat: "Site", src: "Skyscanner", pSrc: "Comparateur vols", rel: "Meilleur pour", tgt: "Trouver vols pas chers", pTgt: "Astuce: Dates flexibles" },
        { cat: "Outil", src: "Bitwarden", pSrc: "Gratuit et open source", rel: "Stocke", tgt: "Mots de passe sécurisés", pTgt: "Alternative à: LastPass" },
        { cat: "Application", src: "Too Good To Go", pSrc: "Anti-gaspi", rel: "Permet d'acheter", tgt: "Paniers surprises", pTgt: "Économie: 60-70%" },
        { cat: "Article", src: "James Clear", pSrc: "Blog", rel: "Publie sur", tgt: "Habitudes et performance", pTgt: "Newsletter: Gratuite" }
    ]
};

const tileConfig = [
    { id: 'inspirations', title: 'Mes inspirations', icon: 'fa-lightbulb', desc: 'Comptes, podcasts et newsletters qui m\'enrichissent.' },
    { id: 'voyages', title: 'Mes voyages', icon: 'fa-plane', desc: 'Destinations rêvées, adresses et astuces de voyage.' },
    { id: 'restaurants', title: 'Mes bonnes adresses', icon: 'fa-utensils', desc: 'Restaurants, cafés et lieux à ne pas oublier.' },
    { id: 'apprentissages', title: 'Mes apprentissages', icon: 'fa-graduation-cap', desc: 'Ce que j\'apprends, ce que je retiens, ce que j\'applique.' },
    { id: 'contacts', title: 'Mes contacts utiles', icon: 'fa-address-book', desc: 'Les bonnes personnes pour les bonnes situations.' },
    { id: 'projets', title: 'Mes projets', icon: 'fa-diagram-project', desc: 'Projets en cours, étapes et dépendances.' },
    { id: 'ressources', title: 'Mes ressources', icon: 'fa-toolbox', desc: 'Outils, sites et articles qui m\'ont changé la vie.' },
    { id: 'new-category', title: 'Mon propre graphe', icon: 'fa-plus', desc: 'Créez votre cartographie sur mesure depuis le Workspace.', isCta: true }
];
