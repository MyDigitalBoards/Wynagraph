

const CATEGORY_COLORS = {
  genre: "#42ebe2", auteur: "#0dbac1", livre: "#7dd3fc",
  racine: "#42ebe2", branche: "#0dbac1", penseur: "#a78bfa",
  notion: "#7dd3fc", figure: "#fbbf24", objet: "#e05454", pratique: "#34d399",
  legume: "#34d399", herbe: "#86efac", laitier: "#fde68a",
  technique: "#fbbf24", fruit: "#fcd34d", proteine: "#fca5a5", saison: "#42ebe2",
  scene: "#42ebe2", artiste: "#a78bfa",
  default: "#1D3655",
};

function colorFor(group) {
  return CATEGORY_COLORS[group] || CATEGORY_COLORS.default;
}

function buildNetwork(container, graph, opts = {}) {
  const interactive = opts.interactive !== false;

  const nodes = new vis.DataSet(
    graph.nodes.map((n) => ({
      id: n.id,
      label: interactive ? n.label : "",
      value: n.size || 14,
      shape: "box",
      margin: interactive ? 10 : 4,
      color: {
        background: "#042042",
        border: colorFor(n.group),
        highlight: { background: "#1D3655", border: "#42ebe2" },
        hover:     { background: "#364D68", border: "#1D3655" },
      },
      font: {
        color: "#ffffff",
        size: interactive ? 13 : 10,
        face: "Inter",
        bold: interactive,
      },
      borderWidth: 1,
      shadow: interactive
        ? { enabled: true, color: "rgba(0,0,0,0.4)", size: 10, x: 0, y: 4 }
        : false,
    }))
  );

  const edges = new vis.DataSet(
    graph.edges.map((e, i) => ({
      id: i,
      from: e.source,
      to: e.target,
      label: e.label || "",
      properties: e.properties || [],
      color: {
        color: "rgba(255,255,255,0.18)",
        highlight: "#42ebe2",
        hover: "#42ebe2",
      },
      font: {
        color: "#AAB4C0",
        size: 11,
        align: "middle",
        strokeWidth: interactive ? 3 : 0,
        strokeColor: "#042042",
      },
      width: 1,
      smooth: { enabled: true, type: "dynamic" },
      arrows: interactive
        ? { to: { enabled: true, scaleFactor: 0.8 } }
        : undefined,
    }))
  );

  const options = {
    physics: {
      enabled: true,
      barnesHut: {
        gravitationalConstant: -3500,
        centralGravity: 0.15,
        springLength: interactive ? 142 : 90,
        springConstant: 0.04,
      },
      stabilization: { iterations: interactive ? 400 : 200 },
      maxVelocity: 15,
      minVelocity: 0.7,
    },
    interaction: {
      hover: interactive,
      zoomView: interactive,
      dragView: interactive,
      dragNodes: interactive,
      selectable: interactive,
      selectConnectedEdges: false,
    },
    nodes: { borderWidth: 1, scaling: { min: 8, max: 30 } },
    edges: {
      font: { color: "#AAB4C0", size: 11, align: "middle", strokeWidth: 3, strokeColor: "#042042" },
      color: { color: "rgba(255,255,255,.18)", highlight: "#42ebe2", hover: "#42ebe2" },
      arrows: { to: { enabled: true, scaleFactor: 0.8 } },
    },
  };

  const network = new vis.Network(container, { nodes, edges }, options);
  network.once("stabilizationIterationsDone", () => {
    network.fit({ animation: { duration: 600, easingFunction: "easeInOutQuad" } });
  });

  return { network, nodes, edges };
}
