# Wynagraph
Personal inventories with graph visualization

# WynaGraph Workspace - Documentation

## 📋 Vue d'ensemble

**WynaGraph Workspace** est une **Application ** permettant de créer et visualiser des graphes de connaissances personnels et de conserver ses données localement. 


### Caractéristiques principales

✅ creation simple de graphes personnels   
✅ Inspecteur de propriétés interactif  
✅ Filtrage dynamique  
✅ 100% local (pas d'envoi de données)

---

## 🏗️ Architecture

```
WynaGraph Workspace
├── index.html
├── styles.css
├── app.js
└── README.md
```

## 🚀 Démarrage Rapide

## Essayer l'application
👉 [Ouvrir Wynagraph](https://mydigitalboards.github.io/Wynagraph/)

### Installer l'application

1. Télécharger le fichier .zip
2. Extraire le contenu dans un même dossier
3. Ouvrez `index.html` dans un navigateur (appui double sur le fichier)

**Aucune installation ou serveur requis !**

### Routes disponibles

| Route          | Page       | Description                  |
| -------------- | ---------- | ---------------------------- |
| `#welcome`     | Welcome    | Page d'accueil               |
| `#categories`  | Catégories | Grille de modèles de données |
| `#worspace`    | Graphe     | Visualisation interactive    |
| `#import`      | Importer   | charger un fichier csv       |
| `#table`       | tableau    | Visualisation tableur        |
| `#saved-views` | graphes    | Visualisations sauvegardées  |

Exemples :

- `index.html` → Welcome
- `index.html#categories` → Catégories
- `index.html#workspace` → vue du graphe
- `index.html#import` → Importer un fichier csv

---

## 🎨 Modèles de données disponibles

| ID           | Nom                  | Cas d'usage                       |
| ------------ | -------------------- | --------------------------------- |
| `mobile`     | Applications mobiles | Applis, abonnements, flux         |
| `accounts`   | Comptes en ligne     | Comptes cloud, sécurité           |
| `followed`   | Abonnements          | Réseaux sociaux, veille           |
| `emails`     | Messageries          | Flux email, redirections          |
| `items`      | Inventaire           | Biens de valeur                   |
| `projects`   | Projets              | Dépendances, jalons               |
| `documents`  | Documents            | Pièces administratives            |
| `clothes`    | Garde-robe           | Vêtements, assurances             |
| `contacts`   | Contacts             | Experts, conseillers              |
| `books`      | Bibliothèque         | Références thématiques            |
| `patrimoine` | Patrimoine familial  | Structure complète (Holding, SCI) |

---

## 🔍 Fonctionnalités principales

### 1. Navigation et Pages

**Navbar fixe en haut**

- Logo cliquable → Welcome
- Liens de navigation (Categories, Mes graphes, vue tableau, vue graphe)
- Bouton menu burger(pour masquer/afficher la barre latérale gauche)

**4 Pages principales**

- **Welcome**: Formulaire d'accueil
- **Categories**: Grille de 11 modèles + 1 tuile Premium
- **Workspace**: Visualisation interactive avec contrôles
- **Mes graphes**: visualisations personnelles sauvegardées

### 2. Visualisation du graphe

**Conteneur de réseau**

- Vis.js rend les nœuds et arêtes
- Physique activée (attraction/répulsion)
- Clic = sélection + inspecteur

**Contrôles gauche** (Control Panel)

- Affichage des propriétés du nœud/relation
- Edition des noeuds et relations
- Suppression de noeuds/relation
- Filtre par catégorie, noeud ou relation
- Création de noeuds et relations
- Création de noeuds sans relation

### 4. Inspecteur de propriétés

**Pour un nœud**

- ID du nœud (nom de l'élément)
- Catégorie
- Propriété personnalisée (pSrc)

**Pour une arête (liaison)**

- Type de relation (label)
- Nœud source
- Nœud destination

### Erreurs courantes & solutions

| Problème                | Cause                       | Solution                       |
| ----------------------- | --------------------------- | ------------------------------ |
| "Vis.js non chargé"     | CDN indisponible            | Téléchargez vis.js localement  |
| Page blanche            | `index.html` mal nommé      | Respectez la casse             |
| Graphe ne s'affiche pas | JavaScript désactivé        | Activez-le dans les paramètres |
| Network error           | Chemin de fichier incorrect | Vérifiez `src=""` dans HTML    |

---

## 🔐 Confidentialité & Sécurité

✅ **Aucune donnée n'est envoyée à un serveur**

- Tout se passe localement dans le navigateur
- Pas de connexion Internet requise (à condition de télépcharger le package)
- Vos données restent sur votre ordinateur
- Pas de cookies ni tracking

⚠️ **Attention**

- Raffraîchir la page réinitialise les changements. Pensez à sauvegarder régulièrement vos modifications et à exporter vos données.

🔒 Sécurité et Confidentialité
La philosophie de Wynagraph est le "Privacy-First". Votre inventaire personnel doit le rester, c'est pourquoi j'ai fait le choix d'une architecture orientée vers la souveraineté de vos données :

Stockage 100% Local : Wynagraph utilise le stockage natif de votre navigateur (IndexedDB/LocalStorage). Vos données ne quittent jamais votre machine et ne transitent par aucun serveur tiers.

Architecture "Zero-Server" : Il n'y a aucune base de données centrale. Vous n'avez pas besoin de créer de compte ; vous êtes le seul et unique propriétaire de vos graphes.

Transparence totale : le code est entièrement auditable sur GitHub. Vous pouvez vérifier par vous-même comment vos données sont manipulées.

💡 **Bonnes pratiques pour vos données** :

Bien que les données soient stockées localement sur votre machine :
**Accès physique** : Assurez-vous de protéger l'accès à votre session utilisateur sur votre ordinateur.
**Extensions** : Soyez vigilant quant aux extensions de navigateur que vous installez, car elles peuvent potentiellement accéder aux données des pages que vous consultez.
**Sauvegardes** : N'oubliez pas d'utiliser régulièrement les fonctionnalités d'export (.csv / .json) pour conserver des copies de sécurité de vos graphes sur un support externe ou un espace sécurisé.

---

## 📄 Licence & Crédits

**Développé par**: Roselyne Biaou
**Stack technique**:
- Vanilla JavaScript (ES6+)
- Vis.js (Université Amsterdam)
**Licence**:Ce projet n'a pas encore de licence officielle. Le code est partagé pour consultation, mais tous les droits restent réservés à l'auteur. L'utilisation commerciale ou la redistribution ne sont pas autorisées pour le moment. 

---

## 🤝 Améliorations

Améliorations en cours :

1. 📊 Exports PDF des la vue Tableau
2. 📊 Exports PNG/SVG du graphe
3. 🌍 Support multilingue
4. 📈 Statistiques du graphe
5. ✨ interface adaptée au plus petits device
6. Contrastes et accessibilité 
7. 

---

## 📚 Ressources

- [Vis.js Documentation](https://visjs.org/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [FontAwesome Icons](https://fontawesome.com/icons)
- [CSS Tricks](https://css-tricks.com/)

---

**Dernière mise à jour**: 31 Mai 2026

## ⚠️ Statut du Projet : Version Bêta
Ce projet est encore en plein développement (**Bêta**) :
- Le code est "artisanal" et a besoin d'être nettoyé.
- Il peut y avoir des bugs ou des instabilités.
- En cours d'améliorations !


