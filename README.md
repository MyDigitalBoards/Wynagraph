# WynaGraph — Site vitrine vanilla

Site statique en HTML / CSS / JavaScript pur, sans build ni framework.

## Lancer en local

Ouvrez simplement `index.html` dans un navigateur, OU servez le dossier :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Structure

- `index.html` — galerie d'accueil
- `graph.html` — page de détail d'un graphe (`graph.html?id=...`)
- `a-propos.html` — README de WynaGraph Workspace
- `styles.css` — design system (palette WynaGraph)
- `data.js` — vos modèles de graphes (modifiez ce fichier)
- `graph-render.js` — rendu vis-network partagé

## Ajouter un graphe

Modifiez `data.js` et ajoutez un objet à `window.GRAPHS` :

```js
{
  id: "mon-graphe",
  title: "Titre",
  category: "Inventaire",
  description: "Une phrase.",
  longDescription: "Texte long.",
  nodes: [{ id: "a", label: "A", group: "categorie", size: 16 }],
  edges: [{ source: "a", target: "b" }]
}
```

## Déploiement

Tout hébergeur statique : Netlify, Vercel, GitHub Pages, OVH, etc. Glissez le dossier, c'est en ligne.
