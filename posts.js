// ─────────────────────────────────────────────────────────────────────────────
// POSTS.JS — Articles du blog WynaGraph Space
// ─────────────────────────────────────────────────────────────────────────────
// Pour ajouter un article :
//   1. Copiez un bloc existant
//   2. Donnez-lui un "id" unique (slug, sans espaces ni accents)
//   3. Renseignez "graphId" avec l'id du graphe dans data.js (ou "" si aucun)
//   4. Écrivez votre contenu dans "body" en HTML simple
//   5. Sauvegardez — l'article apparaît automatiquement sur le site
// ─────────────────────────────────────────────────────────────────────────────

window.POSTS = [
  {
    id: "cartographier-fin-de-vie-numerique",
    title: "Pourquoi cartographier sa fin de vie numérique ?",
    date: "2026-05-10",
    category: "Droits & Démarches",
    excerpt: "Comptes bancaires, réseaux sociaux, photos cloud… À notre mort, nos données numériques survivent. Voici comment s'y préparer avec un graphe.",
    graphId: "theme-legal-fin-de-vie-numerique",
    body: `
      <p>Nous accumulons des traces numériques depuis des années : comptes bancaires en ligne, profils sur les réseaux sociaux, photos dans le cloud, abonnements, gestionnaires de mots de passe… À notre décès, tout cela ne disparaît pas automatiquement.</p>

      <h3>Le problème</h3>
      <p>Sans directives claires, vos proches se retrouvent face à des plateformes qui refusent l'accès, des données bloquées, des abonnements qui continuent de prélever. La loi République Numérique de 2016 vous donne des droits, mais encore faut-il les exercer de son vivant.</p>

      <h3>Ce que le graphe révèle</h3>
      <p>La cartographie ci-contre montre les liens entre les démarches classiques (testament notarié, personne de confiance) et le volet numérique (gestionnaire de mots de passe, directives CNIL). Ce qui frappe : <strong>tout est connecté</strong>. Un testament numérique sans exécuteur testamentaire identifié ne sert à rien.</p>

      <h3>Par où commencer ?</h3>
      <ul>
        <li>Ouvrir un gestionnaire de mots de passe et y consigner vos accès importants</li>
        <li>Rédiger une lettre de directives numériques (stockée avec votre testament)</li>
        <li>Désigner une personne de confiance qui connaît l'existence de ce document</li>
      </ul>
    `
  },
  
  {
    id: "pourquoi-penser-en-graphes",
    title: "Pourquoi penser en graphes change tout",
    date: "2026-06-01",
    category: "Développement Personnel",
    excerpt: "Les listes sont linéaires. La réalité ne l'est pas. Les graphes révèlent des connexions que les tableaux et bullet points cachent systématiquement.",
    graphId: "",
    body: `
      <p>Depuis l'école, on nous apprend à organiser l'information en listes, en tableaux, en hiérarchies. C'est efficace pour classer. Mais la réalité n'est presque jamais hiérarchique. Elle est réticulaire.</p>

      <h3>Le problème des listes</h3>
      <p>Une liste de tâches dit quoi faire. Elle ne dit pas pourquoi telle tâche bloque telle autre, ni quel nœud central, s'il est débloqué, ferait tomber cinq autres obstacles. Un graphe le montre immédiatement.</p>

      <h3>WynaGraph pour visualiser</h3>
      <p>C'est exactement pour ça qu'existe WynaGraph Workspace : créer ces cartes connectées depuis vos propres données, sans outil complexe, sans cloud, sans compte. Il vous siffit d'entrer vos donnée pour obtenir une visualisation immédiate.</p>
    `
  },
];
