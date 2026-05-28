# 🚀 DÉMARRAGE RAPIDE - WynaGraph Workspace

## ⚡ Installation (2 étapes)

### Étape 1: Télécharger les fichiers

Vous avez déjà téléchargé ces 3 fichiers:

- ✅ `index.html`
- ✅ `styles.css`
- ✅ `app.js`

### Étape 2: Lancer l'application

1. Placez les 3 fichiers dans le **même dossier**
2. **Double-clic** sur `index.html`
3. C'est tout! 🎉

> ℹ️ **Important**: Les 3 fichiers **DOIVENT** être dans le même dossier

---

## 📱 L'application est prête!

Vous devriez voir :

- 🟦 Fond bleu navy avec accents cyan
- 📋 Navbar en haut
- 📊 Grille de 11 modèles de données
- ✨ Interface fluide et responsive

---

## 🎯 Premier usage

### Page 1: Welcome (Accueil)

```
Welcome
├─ Titre: Personal Inventory Dashboard
├─ Sous-titre: Build your personal inventory...
├─ Formulaire avec Email/Password
└─ Bouton: Get Started → Va à Categories
```

### Page 2: Categories (Grille de modèles)

```
DB Categories
├─ Mobile Applications (📱 Applis, flux, abonnements)
├─ Online Accounts (☁️ Comptes cloud, sécurité)
├─ Followed Accounts (👥 Réseaux, veille)
├─ Emails (📧 Messageries)
├─ Items (📦 Inventaire)
├─ Projects (📊 Projets)
├─ Documents (📄 Administratifs)
├─ Clothes (👗 Garde-robe)
├─ Contacts (📇 Experts)
├─ Books (📚 Bibliothèque)
├─ Patrimoine Familial (🏛️ Holding, SCI, immobilier)
└─ Nouveau Graphe (👑 Premium)
```

### Page 3: Workspace (Visualisation)

```
Workspace
├─ Contrôles gauche
│  ├─ Propriétés du nœud/liaison
│  └─ Bouton de fermeture
│  ├─ Filtre par catégorie, noeud, relation
│  ├─ Bouton Réinitialiser
│
├─ Graphe (centre)
│  ├─ Nœuds interactifs
│  ├─ Liaisons dynamiques
│  └─ Drag & drop les nœuds

### Page 4: Table (vue tableau du graphe en cours de visualisation)

```

Tableau
├─ Titre: liste des Noeuds et Liaisons Détectées
└─ Table des noeuds visibles sur le graphe

```
---

## 🖱️ Guide d'utilisation basique

### Navigation

| Action               | Résultat                        |
| -------------------- | ------------------------------- |
| Cliquer "Categories" | Voir la grille des 11 modèles   |
| Cliquer une tuile    | Charger et visualiser le graphe |

|

### Graphe

| Action                   | Résultat                                 |
| ------------------------ | ---------------------------------------- |
| Cliquer sur un nœud      | voir + éditer ses propriétés             |
| Cliquer sur une liaison  | Voir + éditer les détails de la relation |
| Drag un nœud             | Le déplacer (reste fixe après)           |
| Scroll (molette)         | Zoomer in/out                            |
| Clic + drag (background) | Panoramique                              |

### Filtres

```

Filtrer par catégorie
└─ Sélectionnez une catégorie
└─ Affiche uniquement les nœuds de cette catégorie

Rechercher un élément
└─ Sélectionnez un nœud
└─ Zoom et centrage automatique

Réinitialiser
└─ Clique
└─ Remet tout à zéro

```

---

## 🎓 Exemples d'utilisation

### Exemple 1: Explorer le Patrimoine

1. Ouvrez l'app
2. Cliquez "Categories"
3. Cliquez sur "Patrimoine Familial"
4. Vous voyez:
   - Nœuds: Jean Dupont, Marie Dupont, Holding SAS, SCI, etc.
   - Liaisons: "Époux de", "Actionnaire de", "Propriétaire de", etc.
5. Cliquez sur "Jean Dupont"
6. La sidebar montre ses propriétés
7. Filtrez par "Immobilier" pour voir uniquement l'immobilier

### Exemple 2: Visualiser une infrastructure IT

```

Réseau -> Nœuds serveurs/bdd
-> Liaisons de connectivité
-> Filtrer par type (DB, App, Load Balancer)
-> Inspecter chaque composant

```

### Exemple 3: Cartographier un projet

```

Projet -> Tâches et jalons
-> Dépendances
-> Ressources allouées
-> Filtrer par statut
-> Inspecteur montre la priorité/deadline

```

---

## ⚙️ Modifications simples

### Changer les couleurs

1. Ouvrez `styles.css`
2. Cherchez `:root { --color-cyan: #42ebe2; }`
3. Changez la valeur `#42ebe2` en une autre couleur (ex: `#FF0000`)
4. Sauvegardez et rechargez la page

### Ajouter vos propres données (directement dans le Workspace)

1. Ouvrez la vue Graphe
2. A jouter des noeuds et des relations depuis le panneau de gauche
3. Sauvegardez votre graphe

### Ajouter vos propres données (depuis un fichier csv)

1. Ouvrez un modèle depuis catégories
2. exporter au format .csv
3. Ajoutez vos données
4. Importer le fichier CSV
5. Sauvegardez votre graphe

---

## 🐛 Problèmes courants

### "Page blanche"

**Cause**: Fichiers pas au même endroit
**Solution**: Placez `index.html`, `styles.css` et `app.js` dans le même dossier

### "Le graphe n'apparait pas"

**Cause**: Vis.js CDN non chargé
**Solution**: Vérifiez votre connexion Internet (il faut charger vis.js)

### "Les clics ne fonctionnent pas"

**Cause**: JavaScript désactivé
**Solution**: Vérifiez les paramètres du navigateur

---

## ✨ Points clés à retenir

✅ **Données locales** - Pas de serveur, pas de stockage externe de données
✅ **Pas d'installation** - Double-clic sur index.html, c'est tout
✅ **Facile à utiliser** - Vous pouvez créer vos graphes personnels simplement

---

## 🚀 Prochaines étapes

1. ✅ Explorez les 11 modèles de données fournis
2. 📝 Lisez le README.md
3. 💾 Créez vos propres données
4. 📊 Importez vos données CSV (voir DATA_IMPORT.md)

---

## 📞 Contact

**Auteur**: Roselyne Biaou
**Email**: wynamail@protonmail.com
**Version**: 1.0.0
**Statut**: Bêta ✅

---

## 🎉 Bienvenue dans WynaGraph Workspace!
```
