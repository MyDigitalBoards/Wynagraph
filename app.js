
    (function() {
    let network = null;
    const nodesDataSet = new vis.DataSet([]);
    const edgesDataSet = new vis.DataSet([]);
    const manuallyHidden = new Set(); 
    let isFiltered     = false;
    let currentNodeId = null;
    let currentOpenedViewId = null;
    

  window.nodesDataSet = nodesDataSet;
  window.edgesDataSet = edgesDataSet;
  window.network = network;
  
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


  function parseCSV(text) {
    const lines = text.split(/\r?\n/);
    if (lines.length < 2) { showToast('Fichier CSV vide ou non reconnu.',"error"); return; }

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
      showToast("Format non reconnu : le fichier doit contenir au minimum une colonne 'Source' et une colonne 'Cible'.","error");
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
      if (!src) continue;

      const cat  = get(idx.cat);
      const rel  = get(idx.rel)  || 'Lien';
      const pSrc = get(idx.pSrc);
      const pTgt = get(idx.pTgt);
      const pRel = get(idx.pRel);

      
      if (!detectedNodes[src]) detectedNodes[src] = { id: src, label: src, category: cat, properties: [], attachments: [] };
      if (cat && !detectedNodes[src].category) detectedNodes[src].category = cat;
      if (pSrc) pSrc.split(',').forEach(p => { const t = p.trim(); if (t && !detectedNodes[src].properties.includes(t)) detectedNodes[src].properties.push(t); });

      
      if (!detectedNodes[tgt]) detectedNodes[tgt] = { id: tgt, label: tgt, category: '', properties: [], attachments: [] };
      if (pTgt) pTgt.split(',').forEach(p => { const t = p.trim(); if (t && !detectedNodes[tgt].properties.includes(t)) detectedNodes[tgt].properties.push(t); });
      
      if (tgt) {
  if (!detectedNodes[tgt]) detectedNodes[tgt] = { 
    id: tgt, label: tgt, category: '', properties: [], attachments: [] 
  };
  if (pTgt) pTgt.split(',').forEach(p => { 
    const t = p.trim(); 
    if (t && !detectedNodes[tgt].properties.includes(t)) detectedNodes[tgt].properties.push(t); 
      });
      
           detectedEdges.push({
        id: 'e_' + i + '_' + Math.random().toString(36).substr(2,4),
        from: src, to: tgt, label: rel,
        properties: pRel ? pRel.split(',').map(p => p.trim()).filter(Boolean) : [],
        font: { color: '#AAB4C0', size: 11, align: 'middle', strokeWidth: 0 },
        color: { color: 'rgba(255,255,255,.18)', hover: '#42ebe2', highlight: '#42ebe2' },
        arrows: { to: { enabled: true, scaleFactor: .8 } }
      });
      }
  }
    
    if (!Object.keys(detectedNodes).length) { 
      showToast('Aucune donnée valide détectée dans le fichier.',"error"); 
      return; 
    }

    if (typeof nodesDataSet !== 'undefined' && typeof edgesDataSet !== 'undefined') {
        nodesDataSet.clear();
        edgesDataSet.clear();
    }

   
    loadGraphData(Object.values(detectedNodes), detectedEdges);
    window.location.hash = "#workspace";
  } 

function loadGraphData(rawNodes, rawEdges) {
    nodesDataSet.clear();
    edgesDataSet.clear();

    document.getElementById('side-title').textContent = 'Cliquez sur un nœud pour voir les informations';
    document.getElementById('sidebar-body').innerHTML = '';
  
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

  if (typeof resetFilters === "function") resetFilters();
  if (typeof updateFilterLists === "function") updateFilterLists(); 
  if (typeof syncAllDropdowns === "function") syncAllDropdowns();
  if (typeof updateAutocompleteLists === "function") updateAutocompleteLists();
  if (typeof applyFilters === "function") applyFilters();


  window.location.hash = "#workspace"; 
  console.log("📊 Graphe généré avec succès !");
}


function renderPresetTiles() {
  
  const gridContainer = document.getElementById("grid-preset-container");
   if (!gridContainer) {
        return;
   }
    gridContainer.innerHTML = "";

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
}

function renderUserSavedTiles() {
   
    const gridContainer = document.getElementById("grid-user-container");
    if (!gridContainer) {
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


function openPaywall() {
    const paywallModal = document.getElementById("paywall-modal");
    if (paywallModal) {
        paywallModal.classList.add("active");
    } 
}


function closePaywall() {
    const paywallModal = document.getElementById("paywall-modal");
    if (paywallModal) {
        paywallModal.classList.remove("active");
    }
}

    const btnClosePaywall = document.getElementById("btn-close-trigger");
    if (btnClosePaywall) {
        btnClosePaywall.addEventListener("click", closePaywall);
    }
    const btnReturn = document.getElementById("btn-return-trigger");
if (btnReturn) {
    btnReturn.addEventListener("click", closePaywall);
    }

    function initNetwork() {
  const container = document.getElementById('graph-container');
  

  const options = {
    interaction: { 
      hover: true, 
      selectConnectedEdges: false, 
      dragNodes: true,
      zoomView: true,    
      dragView: true, 
    },
    physics: {
      enabled: true,
      barnesHut: { 
        gravitationalConstant: -3500, 
        centralGravity: 0.15, 
        springLength: 142 
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

nodes: {
      color: {
        highlight: { background: '#1D3655', border: '#42ebe2' },
        hover:     { background: '#364D68', border: '#ffffff' }
      }
    },

    edges: {
      font: { color: '#AAB4C0', size: 11, align: 'middle', strokeWidth: 3, strokeColor: '#042042' },
      color: { color: 'rgba(255,255,255,.18)', highlight: '#42ebe2', hover: '#42ebe2' },
      arrows: { to: { enabled: true, scaleFactor: .8 } }
    }
  };

  network = new vis.Network(container, { nodes: nodesDataSet, edges: edgesDataSet }, options);
  window.network = network;

  network.setOptions({
  interaction: { zoomView: true, dragView: true }
});

setTimeout(() => {
  network.setOptions({ physics: { enabled: true } });
  setTimeout(() => {
    network.fit({ 
      animation: { duration: 500, easingFunction: 'easeOutQuad' } 
    });
  }, 100);
}, 1500); 

  network.on('dragStart', params => {
    if (params.nodes.length > 0) {
      nodesDataSet.update({ id: params.nodes[0], fixed: { x: false, y: false } });
    }
  });

  network.on('dragEnd', params => {
    if (params.nodes.length > 0) {
      nodesDataSet.update({ id: params.nodes[0], fixed: { x: true, y: true } });
      
      network.setOptions({ physics: { enabled: true } });
    }
  });

  network.on('click', params => {
    if (params.nodes.length > 0) {
      if (isFiltered) revealNeighbors(params.nodes[0]);
      openNodeSidebar(nodesDataSet.get(params.nodes[0]));
    } else if (params.edges.length > 0) {
      openEdgeSidebar(edgesDataSet.get(params.edges[0]));
    } 
  });

  network.on('oncontext', params => {
  params.event.preventDefault(); 
  params.event.stopPropagation();

  if (params.nodes.length > 0) {
    const nodeId = params.nodes[0];
    showContextMenu(params.event, nodeId);
  }
});
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
 
  if (isLoadViewParams) {
    const viewId = hash.split('=')[1];
  
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
      if (network) {
        network.setSize('100%', '100%');
        network.redraw();
        if (typeof applyFilters === "function") applyFilters();
      }
    }, 1500);
  }

  if (cleanHash === '#table') {
    if (typeof renderWorkspaceTable === "function") {
      renderWorkspaceTable();
    }
  }
} 


window.addEventListener("DOMContentLoaded", () => {
    initNetwork();
    renderPresetTiles(); 
    router();            

    document.getElementById('graph-container').addEventListener('contextmenu', e => {
      e.preventDefault();
      e.stopPropagation();
    });

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
      } 
      else {
        btn.innerHTML = '<i class="fa-solid fa-bars-staggered"></i> Masquer le panneau';
        btn.title = "Masquer le panneau"; 
      }
      setTimeout(() => {
        if (typeof network !== 'undefined' && network !== null) {
          network.setSize("100%", "100%");
          network.redraw();
          
        }
      }, 1500);
    }); 
  } 
  const exportBtn = document.getElementById('btn-export-csv');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
       if (typeof nodesDataSet !== 'undefined' && nodesDataSet.length > 0) {
          exportCSV();
        } else {
          showToast("Il n'y a aucun graphique affiché à exporter !","error");
        }
      });
    }

    const jsonBtn = document.getElementById('btn-export-json');
    if (jsonBtn) {
      jsonBtn.addEventListener('click', () => {
        if (typeof nodesDataSet !== 'undefined' && nodesDataSet.length > 0) {
          exportToJSON();
        } else {
          showToast("Il n'y a aucun graphique affiché à exporter","error");
        }
      });
    }
    document.addEventListener('click', e => {
  const saveNodeBtn   = e.target.closest('[data-node-id]');
  const deleteNodeBtn = e.target.closest('[data-delete-node-id]');
  const saveEdgeBtn   = e.target.closest('[data-edge-id]');
  const deleteEdgeBtn = e.target.closest('[data-delete-edge-id]');
  
  if (saveNodeBtn)   { saveNode(saveNodeBtn.dataset.nodeId);               return; }
  if (deleteNodeBtn) { deleteNode(deleteNodeBtn.dataset.deleteNodeId);     return; }
  if (saveEdgeBtn)   { saveEdge(saveEdgeBtn.dataset.edgeId);               return; }
  if (deleteEdgeBtn) { deleteEdge(deleteEdgeBtn.dataset.deleteEdgeId);     return; }
  });
    
});


window.addEventListener('hashchange', router);

window.saveNode = function(nodeId) {
  const node = nodesDataSet.get(nodeId);
  if (!node) return;

  const newLabel = document.getElementById('edit-label').value.trim();
  const newCat   = document.getElementById('edit-cat').value.trim();
  const newProps = document.getElementById('edit-props').value
                   .split('\n').map(p => p.trim()).filter(Boolean);

  if (!newLabel) { showToast('Le nom ne peut pas être vide.',"error"); return; }

 
  if (newLabel === nodeId) {
    nodesDataSet.update({ id: nodeId, label: newLabel, category: newCat, properties: newProps });

  } else {
  
    if (nodesDataSet.get(newLabel)) { 
      showToast('Un élément avec ce nom existe déjà.',"error");
      return; 
    }

   
    nodesDataSet.remove(nodeId);
    nodesDataSet.add({ 
      ...node, 
      id:         newLabel, 
      label:      newLabel, 
      category:   newCat, 
      properties: newProps 
    });

   
    const edgesToUpdate = [];
    edgesDataSet.forEach(e => {
      if (e.from === nodeId || e.to === nodeId) {
        edgesToUpdate.push({
          id:   e.id,
          from: e.from === nodeId ? newLabel : e.from,
          to:   e.to   === nodeId ? newLabel : e.to
        });
      }
    });
    if (edgesToUpdate.length > 0) edgesDataSet.update(edgesToUpdate);

    
    document.getElementById('side-title').textContent = newLabel;
  }

  if (typeof syncAllDropdowns === "function") syncAllDropdowns();
  if (typeof updateFilterLists === "function") updateFilterLists(true);
  if (typeof updateAutocompleteLists === "function") updateAutocompleteLists();
  if (typeof applyFilters === "function") applyFilters();
  showToast('✅ Élément enregistré');
};

function showContextMenu(event, nodeId) {
  removeContextMenu();

  const menu = document.createElement('div');
  menu.id = 'context-menu';
  menu.innerHTML = `
    <ul>
      <li data-action="hide" data-node-id="${esc(nodeId)}">
        <i class="fa-solid fa-eye-slash"></i> Cacher ce nœud
      </li>
      <li data-action="hide-neighbors" data-node-id="${esc(nodeId)}">
        <i class="fa-solid fa-circle-minus"></i> Cacher ses voisins
      </li>
      <li data-action="reset" class="separator">
        <i class="fa-solid fa-eye"></i> Tout réafficher
      </li>
    </ul>
  `;

  menu.style.left = event.clientX + 'px';
  menu.style.top  = event.clientY + 'px';
  document.body.appendChild(menu);

  menu.addEventListener('click', e => {
     e.stopPropagation();
     e.preventDefault();
    const item = e.target.closest('[data-action]');
    if (!item) return;

    const action = item.dataset.action;
    const nId    = item.dataset.nodeId;

    if (action === 'hide') {
  manuallyHidden.add(nId);
  edgesDataSet.forEach(edge => {
    if (edge.from === nId || edge.to === nId) {
      manuallyHidden.add('edge_' + edge.id);
    }
  });
  applyFilters(); 
  showToast('👁️ Nœud masqué');
}

    if (action === 'hide-neighbors') {
  edgesDataSet.forEach(edge => {
    if (edge.from === nId || edge.to === nId) {
      const neighborId = edge.from === nId ? edge.to : edge.from;
      manuallyHidden.add(neighborId);
      manuallyHidden.add('edge_' + edge.id);
    }
  });
  applyFilters();
  showToast('👁️ Voisins masqués');
}

if (action === 'reset') {
  manuallyHidden.clear();
  applyFilters();
  showToast('↩️ Vue réinitialisée');
}

    removeContextMenu();
  });

  // Fermer si clic ailleurs
  setTimeout(() => {
    document.addEventListener('click', removeContextMenu, { once: true });
  }, 10);
}

function removeContextMenu() {
  const existing = document.getElementById('context-menu');
  if (existing) existing.remove();
}

function saveCurrentView() {
  const nodes = nodesDataSet.get();
  const edges = edgesDataSet.get();

  if (nodes.length === 0) {
    showToast("Le graphe est vide, il n'y a rien à sauvegarder !","error");
    return;
  }

   let savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];

    const dataSize = new Blob([JSON.stringify(savedViews)]).size;
      if (dataSize > 4 * 1024 * 1024) { 
      showToast("Espace de stockage presque plein. Exportez puis supprimez des graphes anciens.","error");
      return;
    }

  if (currentOpenedViewId) {
    const existingView = savedViews.find(v => v.id === currentOpenedViewId);
    
    if (existingView) {
     
      const confirmOverwrite = confirm(`Voulez-vous enregistrer les modifications apportées à "${existingView.name}" ?\n\n(Cliquez sur 'Annuler' pour créer une copie sous un autre nom)`);
      
      if (confirmOverwrite) {
        existingView.data = { nodes, edges };
        existingView.createdAt = new Date().toLocaleString(); 
        
        localStorage.setItem('network_saved_views', JSON.stringify(savedViews));
        showToast(`✅ Le projet "${existingView.name}" a été mis à jour avec succès !`);
        
        if (typeof renderPresetTiles === "function") renderPresetTiles();
        if (typeof renderUserSavedTiles === "function") renderUserSavedTiles();
        return; 
      }
    }
  }

  
  const viewName = prompt("Entrez un nom pour sauvegarder cette vue :", `Vue du ${new Date().toLocaleDateString()}`);
    if (!viewName || !viewName.trim()) return;

  const existingViewIndex = savedViews.findIndex(v => v.name.toLowerCase() === viewName.trim().toLowerCase());
    if (existingViewIndex !== -1) {
      const confirmOverwriteByName = confirm(`⚠️ Une vue nommée "${viewName}" existe déjà dans vos sauvegardes.\nVoulez-vous la remplacer ?`);
    
      if (confirmOverwriteByName) {
        savedViews[existingViewIndex].data = { nodes, edges };
        savedViews[existingViewIndex].createdAt = new Date().toLocaleString();
        
        localStorage.setItem('network_saved_views', JSON.stringify(savedViews));
        showToast(`✅ La vue "${viewName}" a été mise à jour !`);
        
        currentOpenedViewId = savedViews[existingViewIndex].id;
      
      if (typeof renderPresetTiles === "function") renderPresetTiles();
      if (typeof renderUserSavedTiles === "function") renderUserSavedTiles();
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
  showToast(`✅ Nouveau graphique "${viewName}" enregistré !`);

  currentOpenedViewId = newId;
  if (typeof renderPresetTiles === "function") renderPresetTiles();
  if (typeof renderUserSavedTiles === "function") renderUserSavedTiles();
}

function isValidView(view) {
  return view 
    && typeof view.id === 'string'
    && typeof view.name === 'string'
    && Array.isArray(view.data?.nodes)
    && Array.isArray(view.data?.edges)
    && view.data.nodes.every(n => typeof n.id === 'string' && typeof n.label === 'string')
    && view.data.edges.every(e => typeof e.from === 'string' && typeof e.to === 'string');
}

function loadSavedViewIntoWorkspace(viewId) {
    const savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];
    const view = savedViews.find(v => v.id === viewId);
    if (!view) return;

  
    nodesDataSet.clear();
    edgesDataSet.clear();
    const cleanNodes = view.data.nodes.map(n => ({ ...n, fixed: { x: false, y: false }, x: undefined, y: undefined }));
    
    if (!network) initNetwork();

    nodesDataSet.add(cleanNodes);
    edgesDataSet.add(view.data.edges);

  
    if (!view || !isValidView(view)) {
      console.warn('Vue corrompue ou invalide, chargement annulé');
      return;
      }
    if (typeof syncAllDropdowns === "function") syncAllDropdowns();
    if (typeof updateAutocompleteLists === "function") updateAutocompleteLists();
    if (typeof applyFilters === "function") applyFilters();

  
    if (network) {
        network.setOptions({ physics: { enabled: true } });
        
      
        network.once('stabilizationIterationsDone', () => {
            network.setOptions({ physics: { enabled: false } });
          
            network.fit({ 
                animation: { duration: 500, easingFunction: 'easeOutQuad' } 
            });
        });
    }

    window.location.hash = "#workspace";
}


window.deleteSavedView = function(viewId) {
  if (!confirm("Supprimer cette vue définitivement ?")) return;
  let savedViews = JSON.parse(localStorage.getItem('network_saved_views')) || [];
  savedViews = savedViews.filter(v => v.id !== viewId);
  localStorage.setItem('network_saved_views', JSON.stringify(savedViews));
  renderUserSavedTiles();
  showToast('🗑️ vue supprimée');
};
    window.deleteNode = function(nodeId) {
      if (!nodeId) return;
      if (!confirm('Supprimer cet élément et toutes ses relations ?')) return;
     
      const toRemove = edgesDataSet.get({ filter: e => e.from === nodeId || e.to === nodeId }).map(e => e.id);
      edgesDataSet.remove(toRemove);
      nodesDataSet.remove(nodeId);
      updateFilterLists(false);
      updateAutocompleteLists();
      showToast('🗑️ Élément supprimé');      
    }



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
    showToast("⚠️ Format incorrect. Veuillez glisser uniquement un fichier au format .csv","error");
      return;
  }


  const reader = new FileReader();
  reader.onload = e => {
    if (file.size > 5 * 1024 * 1024) { // 5MB max
      showToast('Fichier trop volumineux (max 5MB). Réduisez le nombre de lignes.',"error");
      return;
    }     
      parseCSV(e.target.result);
      
      
      setTimeout(() => {
          window.location.hash = "#workspace";
      }, 100);
  };
  reader.readAsText(file, 'utf-8');
}


function updateFilterLists(preserveCat = false) {
      const fCat  = document.getElementById('f-cat');
      const fNode = document.getElementById('f-node');
      const fRel  = document.getElementById('f-rel');
      if(!fCat || !fNode || !fRel) return;

      const prevCat  = preserveCat ? fCat.value : '';
      const prevNode = fNode.value;
      const prevRel  = fRel.value;

    
      if (!preserveCat) {
        fCat.innerHTML = '<option value="">— Toutes les catégories —</option>';
        const cats = new Set();
        nodesDataSet.forEach(n => { if (n.category) cats.add(n.category); });
        [...cats].sort().forEach(c => {
          const o = document.createElement('option'); o.value = c; o.textContent = c; fCat.appendChild(o);
        });
      }

      syncAllDropdowns();

      
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

  manuallyHidden.forEach(id => {
    if (id.startsWith('edge_')) {
      edgesDataSet.update({ id: id.replace('edge_', ''), hidden: true });
    } else {
      nodesDataSet.update({ id, hidden: true });
    }
  });

   if (isFiltered && network) {
    const visibleNodeIds = nodeUpdates
      .filter(n => !n.hidden && !manuallyHidden.has(n.id)) // ✅ exclure cachés manuellement
      .map(n => n.id);

    if (visibleNodeIds.length > 0) {
      setTimeout(() => {
        network.fit({
          nodes: visibleNodeIds,
          animation: { duration: 700, easingFunction: 'easeInOutQuad' }
        });
      }, 50); 
    }
  }
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
        network.once('stabilizationIterationsDone', () => network.setOptions({ physics: { enabled: true } }));
      }
      updateFilterLists(false);  
}

function openNodeSidebar(node) {
      document.getElementById('side-title').textContent = node.label;
      const body = document.getElementById('sidebar-body');

      body.innerHTML = `
    <div class="form-group">
      <label class="prop-label" for="edit-label">Nom</label>
      <input type="text" id="edit-label" class="sidebar-edit-input" value="${esc(node.label || '')}">
    </div>  
    <div class="form-group">
      <label class="prop-label" for="edit-cat">Catégorie</label>
      <input type="text" id="edit-cat" class="sidebar-edit-input" value="${esc(node.category || '')}">
    </div>
    <div class="form-group">
      <label class="prop-label" for="edit-props">Propriétés (une par ligne)</label>
      <textarea id="edit-props" class="sidebar-edit-input">${esc((node.properties || []).join('\n'))}</textarea>
    </div>
    <button class="btn btn-primary btn-full" style="margin-bottom:10px;"data-node-id="${esc(node.id)}">
      <i class="fa-solid fa-floppy-disk"></i> Enregistrer
    </button>
    <button class="btn btn-danger btn-full btn-sm" data-delete-node-id="${esc(node.id)}">
      <i class="fa-solid fa-trash"></i> Supprimer l'élément
    </button>
  `;

     setTimeout(() => {
  const sidebar = document.getElementById('sidebar');
  const panelLeft = document.getElementById('panel-left');
  panelLeft.scrollTo({
    top: sidebar.offsetTop,
    behavior: 'smooth'
  });
}, 150);

}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = message;
  toast.style.borderColor = type === 'error' 
    ? 'rgba(226, 75, 74, 0.4)' 
    : 'rgba(66, 235, 226, 0.4)';
  
  toast.classList.add('show');
  
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function applySearch() {
  const query = document.getElementById('search-global').value.toLowerCase().trim();
  
  if (!query) {
    nodesDataSet.forEach(n => nodesDataSet.update({ id: n.id, hidden: false }));
    edgesDataSet.forEach(e => edgesDataSet.update({ id: e.id, hidden: false }));
    return;
  }

  const matchedEdgeIds = [];
  edgesDataSet.forEach(e => {
    if (e.label && e.label.toLowerCase().includes(query)) {
      matchedEdgeIds.push(e.id);
    }
  });

  const nodesFromEdges = [];
  edgesDataSet.forEach(e => {
    if (matchedEdgeIds.includes(e.id)) {
      if (!nodesFromEdges.includes(e.from)) nodesFromEdges.push(e.from);
      if (!nodesFromEdges.includes(e.to)) nodesFromEdges.push(e.to);
    }
  });

  nodesDataSet.forEach(n => {
    const matchNode = n.label && n.label.toLowerCase().includes(query);
    const matchCat  = n.category && n.category.toLowerCase().includes(query);
    const matchRel  = nodesFromEdges.includes(n.id);
    
    const isVisible = matchNode || matchCat || matchRel;
    nodesDataSet.update({ id: n.id, hidden: !isVisible });
  });

  edgesDataSet.forEach(e => {
    const fromVisible = !nodesDataSet.get(e.from)?.hidden;
    const toVisible   = !nodesDataSet.get(e.to)?.hidden;
    edgesDataSet.update({ id: e.id, hidden: !(fromVisible && toVisible) });
  });
}

function resetSearch() {
  document.getElementById('search-global').value = '';
  document.getElementById('search-clear').style.display = 'none';
  applySearch();
}

document.getElementById('search-global').addEventListener('input', () => {
  const val = document.getElementById('search-global').value;
  document.getElementById('search-clear').style.display = val ? 'block' : 'none';
  applySearch();
});
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
        <button class="btn btn-primary btn-full" style="margin-bottom:10px;" data-edge-id="${esc(edge.id)}">
          <i class="fa-solid fa-floppy-disk"></i> Enregistrer
        </button>
        <button class="btn btn-danger btn-full btn-sm" data-delete-edge-id="${esc(edge.id)}">
          <i class="fa-solid fa-trash"></i> Supprimer la relation
        </button>
      `;

      setTimeout(() => {
  const sidebar = document.getElementById('sidebar');
  const panelLeft = document.getElementById('panel-left');
  panelLeft.scrollTo({
    top: sidebar.offsetTop,
    behavior: 'smooth'
  });
}, 150);
}

window.closeSidebar = function() {
  const sidebar = document.getElementById('sidebar');
  

  if (sidebar && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }


  if (typeof currentNodeId !== 'undefined') {
    currentNodeId = null;
  }
  window.currentNodeId = null;
};


window.saveEdge = function(edgeId) {
  const label = document.getElementById('edit-edge-label').value.trim();
    if (!label) {showToast('⚠️ Le libellé ne peut pas être vide.', 'error'); 
    return; 
  }
    const props = document.getElementById('edit-edge-props').value
    .split('\n').map(l => l.trim()).filter(l => l.length > 0);
    edgesDataSet.update({ id: edgeId, label, properties: props });
    updateFilterLists(true);      
    applyFilters();
    showToast('✅ Relation enregistrée');
  }

window.deleteEdge = function(edgeId) {
      if (!confirm('Supprimer cette relation ?')) return;
      edgesDataSet.remove(edgeId);
      updateFilterLists(false);
      updateAutocompleteLists();  
      showToast('🗑️ Relation supprimée');    
    }


function createNode() {
      const name = document.getElementById('add-node-name').value.trim();
      const cat  = document.getElementById('add-node-cat').value.trim();
      if (!name) { showToast('Le nom est requis.', "error"); return; }
      if (nodesDataSet.get(name)) { showToast('Un élément avec ce nom existe déjà.',"error"); return; }

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
      showToast('✅ Élément créé');
}

function createRelation() {
      const src    = document.getElementById('add-src').value.trim();
      const rel    = document.getElementById('add-rel').value.trim();
      const pRel   = document.getElementById('add-prop-rel').value.trim();
      const tgt    = document.getElementById('add-tgt').value.trim();

      if (!src || !rel || !tgt) { showToast('Source, Relation et Cible sont requis.',"error"); return; }

    
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
      showToast('✅ Relation créée');
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
          const value = parts.slice(1).join(':').trim(); 
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
window.resetSearch = resetSearch;
})();
