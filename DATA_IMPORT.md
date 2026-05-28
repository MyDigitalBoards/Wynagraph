# Guide d'import de données CSV/Excel

## 📋 Format des données

WynaGraph accepte des données structurées avec cette colonne :

| cat | src | pSrc | rel | tgt | pTgt |
|-----|-----|------|-----|-----|------|
| Catégorie | Source | Propriété Source | Relation | Target | Propriété Target |

### Explications

- **cat** (Catégorie): Type de classification du lien (ex: "Immobilier", "Finance")
- **src** (Source): Nœud de départ
- **pSrc** (Propriété Source): Métadonnées du nœud source
- **rel** (Relation): Description de la liaison entre les deux nœuds
- **tgt** (Target): Nœud de destination
- **pTgt** (Propriété Target): Métadonnées du nœud target

---

## 📄 Exemples de fichiers CSV

### Exemple 1: Patrimoine immobilier

**Fichier: patrimoine.csv**
```csv
cat,src,pSrc,rel,tgt,pTgt
Immobilier,Maison Paris,Surface: 250m²,Possédée par,Jean Dupont,Propriétaire
Immobilier,Appartement Lyon,Surface: 120m²,Possédée par,Marie Dupont,Propriétaire
Finance,Prêt Immobilier,Taux: 2.5%,Financé par,Crédit Agricole,Durée: 20 ans
Structure,Jean Dupont,Régime: Communauté,Marié à,Marie Dupont,Régime: Communauté
Structure,Jean Dupont,Associé depuis 2015,Actionnaire de,Holding SAS,Parts: 85%
```

### Exemple 2: Infrastructure IT

**Fichier: infrastructure.csv**
```csv
cat,src,pSrc,rel,tgt,pTgt
Sécurité,Compte Root AWS,MFA: Clé Titan,Supervise,Serveur Prod,IP: 54.12.9.2
Cloud,Google Workspace,Admin: Jean,Sauvegarde vers,Google Drive,Volume: 5TB
Réseau,Load Balancer,Certificat SSL,Route vers,App Server 1,Port: 443
Réseau,Load Balancer,Certificat SSL,Route vers,App Server 2,Port: 443
Base Données,App Server 1,Réplique Primaire,Connecté à,PostgreSQL,Version: 13
```

### Exemple 3: Réseau professionnel

**Fichier: contacts.csv**
```csv
cat,src,pSrc,rel,tgt,pTgt
Partenaire,Cabinet Audit Morin,Tel: 01.23.45.67.89,Conseille,Jean Dupont,Spécialiste Fiscalité
Partenaire,Me Dupont Avocat,Spécialité: Droit Immobilier,Représente,SARL Dupont,Conseil Juridique
Affilié,SARL Dupont,CA: 500k€,Membre de,Syndicat Professionnel,Depuis 2010
Client,Société ABC,Secteur: Tech,Supervisé par,Jean Dupont,Consultant Principal
```

### Exemple 4: Inventaire personnel

**Fichier: inventaire.csv**
```csv
cat,src,pSrc,rel,tgt,pTgt
Électronique,MacBook Pro,Série: ABC123,Stocké dans,Bureau Principal,Assuré jusqu'à 2500€
Électronique,iPhone 14,Numéro IMEI: XYZ,Assurance,Apple Care+,Couverture: 2 ans
Accessoires,AirPods Pro,Bluetooth 5.0,Utilisé avec,iPhone 14,Synchronisation Active
Accessoires,Apple Watch,GPS Intégré,Synchronisé avec,iPhone 14,Batterie: 3j
```

---

## 🔧 Format des fichiers

### CSV standard
```
Séparateur: virgule (,)
Guillemets: Optionnels (pour les valeurs avec virgules)
Encodage: UTF-8
```

### Exemple avec guillemets
```csv
cat,src,pSrc,rel,tgt,pTgt
"Immobilier","Maison Paris","Surface: 250m², Piscine: Oui",Possédée par,"Jean Dupont","Propriétaire depuis 2010"
```

### Excel → CSV
1. Ouvrez le fichier Excel
2. File → Save As
3. Format: CSV (Comma-delimited) (.csv)
4. Choisissez l'encodage: UTF-8
5. Cliquez Save

---
---

## 📊 Données de test

### Test 1: Réseau simple (3 nœuds)

```javascript
const templates = {
    test_simple: [
        { cat: "Réseau", src: "A", pSrc: "Point A", rel: "Connecté à", tgt: "B", pTgt: "Point B" },
        { cat: "Réseau", src: "B", pSrc: "Point B", rel: "Connecté à", tgt: "C", pTgt: "Point C" }
    ]
};
```

### Test 2: Graphe complexe (10 nœuds)

```javascript
const templates = {
    test_complex: [
        { cat: "Groupe A", src: "N1", pSrc: "Type A", rel: "Contient", tgt: "N2", pTgt: "Type B" },
        { cat: "Groupe A", src: "N1", pSrc: "Type A", rel: "Contient", tgt: "N3", pTgt: "Type C" },
        { cat: "Groupe B", src: "N2", pSrc: "Type B", rel: "Connecté à", tgt: "N4", pTgt: "Type D" },
        { cat: "Groupe B", src: "N3", pSrc: "Type C", rel: "Connecté à", tgt: "N5", pTgt: "Type E" },
        { cat: "Groupe C", src: "N4", pSrc: "Type D", rel: "Parent", tgt: "N6", pTgt: "Type F" },
        { cat: "Groupe C", src: "N5", pSrc: "Type E", rel: "Sibling", tgt: "N6", pTgt: "Type F" },
        { cat: "Groupe D", src: "N6", pSrc: "Type F", rel: "Enfant", tgt: "N7", pTgt: "Type G" },
        { cat: "Groupe D", src: "N6", pSrc: "Type F", rel: "Enfant", tgt: "N8", pTgt: "Type H" },
        { cat: "Groupe E", src: "N7", pSrc: "Type G", rel: "Référence", tgt: "N9", pTgt: "Type I" },
        { cat: "Groupe E", src: "N8", pSrc: "Type H", rel: "Référence", tgt: "N10", pTgt: "Type J" }
    ]
};
```

---

## ⚠️ Erreurs courantes

### Erreur 1: Colonnes renommées
```
ne pas modifier le nom lds colonnes. Préférez créer le graphe directement dans le Workspace.
✅ BON: src, pSrc, rel, tgt, pTgt, cat
✅ BON: categorie, source, Propriete_Source, Relation, Propriete_Relation,Cible,Propriete_Cible
```

### Erreur 2: Guillemets mal échappés
```
❌ MAUVAIS: cat,src,"pSrc avec "citation"",rel,tgt,pTgt
✅ BON: cat,src,"pSrc avec ""citation""",rel,tgt,pTgt
```

### Erreur 3: Sauts de ligne dans les valeurs
```
❌ MAUVAIS: cat,src,"Description
multi-ligne",rel,tgt,pTgt

✅ BON: cat,src,"Description sur une ligne",rel,tgt,pTgt
```

### Erreur 4: Caractères spéciaux
```
❌ MAUVAIS: Encodes as: "Café" → Peut devenir "Caf?"
✅ BON: Assurez-vous que le fichier est encodé en UTF-8
```

---

## 📈 Bonnes pratiques

### 1. Structure claire
- Utilisez des catégories cohérentes
- Évitez les valeurs vides
- Nommez les colonnes exactement

### 2. Performance
- Max 1000 lignes pour fluidité
- Max 500 nœuds par graphe
- Regroupez les données similaires

### 3. Maintenabilité
- Documentez la source des données
- Gardez une version de backup
- Versionnez les imports

### 4. Sécurité
- Validez les données avant l'import
- Évitez les scripts/HTML dans les valeurs
- Sanitizez les entrées utilisateur

---

## 🎯 Cas d'usage complets

### Cas 1: Cartographier un projet
```
cat: Tâche/Milestone/Ressource
src: Identification du projet
pSrc: Statut/Responsable
rel: DépendanceDe/BloquéPar/Alloué
tgt: Tâche dépendante
pTgt: Priorité/Deadline
```

### Cas 2: Inventaire d'actifs
```
cat: Type (Électronique/Mobilier/Immatériel)
src: Nom de l'actif
pSrc: Localisation/Serial Number
rel: Assuré/Propriété/Contenu
tgt: Contenant/Assurance/Propriétaire
pTgt: Valeur/Police/Couverture
```

### Cas 3: Organigramme
```
cat: Département
src: Employé
pSrc: Poste/Spécialité
rel: ReportePour/Supervise/Collabore
tgt: Manager/Pair/Subordonné
pTgt: Rôle/Département
```

---

## 🔗 Ressources

- [CSV RFC4180](https://tools.ietf.org/html/rfc4180)
- [CSVtoJSON Tool](https://csvtojson.com/)
- [Online CSV Validator](https://www.csvvalidator.com/)
- [Excel to CSV Guide](https://support.microsoft.com/en-us/office/save-a-file-as-csv)

---

**Dernière mise à jour**: Mai 2026  
**Auteur**: Roselyne Biaou

