// Données des graphes — modifiez ce fichier pour ajouter vos propres modèles
window.GRAPHS = [
  {
  "id": "cartographie-succession-complete",
  "title": "Succession et démarches après décès : le guide pour ne rien oublier",
  "category": "Droits & Démarches",
  "description": "Vue d'ensemble des formalités administratives et patrimoniales.",
  "longDescription": "Cette cartographie intègre les obligations légales, gestion des contrats, délais et organismes à contacter.",
  "nodes": [
    {
      "id": "personne_conjoint",
      "label": "Conjoint",
      "group": "Personne",
      "size": 18
    },
    {
      "id": "allocation_pension_de_réversion",
      "label": "Pension de réversion",
      "group": "Allocation",
      "size": 18
    },
    {
      "id": "formalite_etablissement_du_certificat_de_décès",
      "label": "Etablissement du certificat de décès",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "personne_médecin",
      "label": "Médecin",
      "group": "Personne",
      "size": 18
    },
    {
      "id": "defunt_défunt",
      "label": "Défunt",
      "group": "Defunt",
      "size": 24
    },
    {
      "id": "derniere_volonte_inhumation",
      "label": "Inhumation",
      "group": "Derniere_volonte",
      "size": 18
    },
    {
      "id": "formalite_informer_les_organismes_payeurs",
      "label": "Informer les organismes payeurs",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "organisme_bailleur",
      "label": "Bailleur",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "patrimoine_biens_professionnels",
      "label": "Biens professionnels",
      "group": "Patrimoine",
      "size": 18
    },
    {
      "id": "bien_entreprise",
      "label": "Entreprise",
      "group": "Bien",
      "size": 18
    },
    {
      "id": "bien_fonds_de_commerce",
      "label": "Fonds de commerce",
      "group": "Bien",
      "size": 18
    },
    {
      "id": "patrimoine_biens_matériels",
      "label": "Biens Matériels",
      "group": "Patrimoine",
      "size": 18
    },
    {
      "id": "bien_objets_d'art_ou_de_collection",
      "label": "Objets d'art ou de collection",
      "group": "Bien",
      "size": 18
    },
    {
      "id": "formalite_déclarer_le_décès",
      "label": "Déclarer le décès",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "delais_dans_les_24_heures",
      "label": "Dans les 24 heures",
      "group": "Delais",
      "size": 18
    },
    {
      "id": "contrat_contrat_d'assurance_obsèques",
      "label": "Contrat d'assurance obsèques",
      "group": "Contrat",
      "size": 18
    },
    {
      "id": "depense_achat_d'une_concession",
      "label": "Achat d'une concession",
      "group": "Depense",
      "size": 18
    },
    {
      "id": "formalite_organisation_des_funérailles",
      "label": "Organisation des funérailles",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "personne_voisin",
      "label": "Voisin",
      "group": "Personne",
      "size": 18
    },
    {
      "id": "depense_transport_du_corps",
      "label": "Transport du corps",
      "group": "Depense",
      "size": 18
    },
    {
      "id": "personne_légataire",
      "label": "Légataire",
      "group": "Personne",
      "size": 18
    },
    {
      "id": "patrimoine_propriété_intellectuelle",
      "label": "Propriété intellectuelle",
      "group": "Patrimoine",
      "size": 18
    },
    {
      "id": "depense_inhumation_ou_crémation",
      "label": "Inhumation ou Crémation",
      "group": "Depense",
      "size": 18
    },
    {
      "id": "depense_cérémonie_d'accompagnement",
      "label": "Cérémonie d'accompagnement",
      "group": "Depense",
      "size": 18
    },
    {
      "id": "formalite_vérifier_l'existence_d'un_testament",
      "label": "Vérifier l'existence d'un Testament",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "organisme_fichier_central_des_dispositions_de_dernières_volontés",
      "label": "Fichier central des dispositions de dernières volontés",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "contrat_contrat_d'assurance_vie",
      "label": "Contrat d'assurance Vie",
      "group": "Contrat",
      "size": 18
    },
    {
      "id": "organisme_agira",
      "label": "AGIRA",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "dette_emprunt",
      "label": "Emprunt",
      "group": "Dette",
      "size": 18
    },
    {
      "id": "contrat_contrat_d'assurance_décès",
      "label": "Contrat d'assurance décès",
      "group": "Contrat",
      "size": 18
    },
    {
      "id": "document_testament",
      "label": "Testament",
      "group": "Document",
      "size": 18
    },
    {
      "id": "testament_olographe",
      "label": "Olographe",
      "group": "Testament",
      "size": 18
    },
    {
      "id": "formalite_recherche_d'une_assurance_obsèques",
      "label": "Recherche d'une assurance obsèques",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "delais_dans_les_48_heures",
      "label": "Dans les 48 heures",
      "group": "Delais",
      "size": 18
    },
    {
      "id": "organisme_caisse_de_retraite",
      "label": "Caisse de retraite",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "delais_dans_les_6_jours",
      "label": "Dans les 6 jours",
      "group": "Delais",
      "size": 18
    },
    {
      "id": "allocation_capital_décès_de_la_cpam",
      "label": "Capital décès de la CPAM",
      "group": "Allocation",
      "size": 18
    },
    {
      "id": "formalite_organiser_la_succession",
      "label": "Organiser la succession",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "organisme_maison_de_retraite",
      "label": "Maison de retraite",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "entreprise_pompes_funèbres",
      "label": "Pompes funèbres",
      "group": "Entreprise",
      "size": 18
    },
    {
      "id": "depense_achat_et_pose_d'un_emblème_sur_la_sépulture",
      "label": "Achat et pose d'un emblème sur la sépulture",
      "group": "Depense",
      "size": 18
    },
    {
      "id": "depense_achat_de_fleurs",
      "label": "Achat de fleurs",
      "group": "Depense",
      "size": 18
    },
    {
      "id": "dette_impôts",
      "label": "Impôts",
      "group": "Dette",
      "size": 18
    },
    {
      "id": "organisme_centre_des_impôts",
      "label": "Centre des impôts",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "entreprise_office_notarial",
      "label": "Office Notarial",
      "group": "Entreprise",
      "size": 18
    },
    {
      "id": "delais_dans_le_mois",
      "label": "Dans le mois",
      "group": "Delais",
      "size": 18
    },
    {
      "id": "derniere_volonte_crémation",
      "label": "Crémation",
      "group": "Derniere_volonte",
      "size": 18
    },
    {
      "id": "formalite_gérer_les_comptes_bancaires",
      "label": "Gérer les comptes bancaires",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "delais_dans_les_10_jours",
      "label": "Dans les 10 jours",
      "group": "Delais",
      "size": 18
    },
    {
      "id": "formalite_déclaration_de_revenus",
      "label": "Déclaration de revenus",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "entreprise_etablissement_bancaire",
      "label": "Etablissement bancaire",
      "group": "Entreprise",
      "size": 18
    },
    {
      "id": "formalite_résiliation_des_abonnements",
      "label": "Résiliation des abonnements",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "formalite_déclaration_de_succession",
      "label": "Déclaration de succession",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "actif_financier_produits_d'épargne",
      "label": "Produits d'épargne",
      "group": "Actif_financier",
      "size": 18
    },
    {
      "id": "contret_contrat_d'assurance_vie",
      "label": "Contrat d'assurance Vie",
      "group": "Contret",
      "size": 18
    },
    {
      "id": "bien_equipements",
      "label": "Equipements",
      "group": "Bien",
      "size": 18
    },
    {
      "id": "bien_brevet",
      "label": "Brevet",
      "group": "Bien",
      "size": 18
    },
    {
      "id": "bien_droits_d'auteur",
      "label": "Droits d'auteur",
      "group": "Bien",
      "size": 18
    },
    {
      "id": "organisme_mairie",
      "label": "Mairie",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "organisme_hôpital",
      "label": "Hôpital",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "delais_dans_les_6_mois",
      "label": "Dans les 6 mois",
      "group": "Delais",
      "size": 18
    },
    {
      "id": "personne_amis",
      "label": "Amis",
      "group": "Personne",
      "size": 18
    },
    {
      "id": "testament_authentique",
      "label": "Authentique",
      "group": "Testament",
      "size": 18
    },
    {
      "id": "formalite_établissement_de_l'acte_de_décès",
      "label": "Etablissement de l'acte de décès",
      "group": "Formalite",
      "size": 18
    },
    {
      "id": "testament_mystique",
      "label": "Mystique",
      "group": "Testament",
      "size": 18
    },
    {
      "id": "patrimoine_placements_financiers",
      "label": "Placements financiers",
      "group": "Patrimoine",
      "size": 18
    },
    {
      "id": "actif_financier_dépôt_bancaire",
      "label": "Dépôt bancaire",
      "group": "Actif_financier",
      "size": 18
    },
    {
      "id": "actif_financier_actions",
      "label": "Actions",
      "group": "Actif_financier",
      "size": 18
    },
    {
      "id": "actif_financier_cotisations_retraite",
      "label": "Cotisations retraite",
      "group": "Actif_financier",
      "size": 18
    },
    {
      "id": "actif_financier_parts_de_fonds_collectifs",
      "label": "Parts de fonds collectifs",
      "group": "Actif_financier",
      "size": 18
    },
    {
      "id": "patrimoine_foncier_et_immobilier",
      "label": "Foncier et Immobilier",
      "group": "Patrimoine",
      "size": 18
    },
    {
      "id": "propriete_habitation",
      "label": "Habitation",
      "group": "Propriete",
      "size": 18
    },
    {
      "id": "depense_courriers_d'invitation_et_de_remerciements",
      "label": "Courriers d'invitation et de remerciements",
      "group": "Depense",
      "size": 18
    },
    {
      "id": "propriete_terrain",
      "label": "Terrain",
      "group": "Propriete",
      "size": 18
    },
    {
      "id": "entreprise_employeur",
      "label": "Employeur",
      "group": "Entreprise",
      "size": 18
    },
    {
      "id": "personne_collègue",
      "label": "Collègue",
      "group": "Personne",
      "size": 18
    },
    {
      "id": "allocation_allocation_de_veuvage",
      "label": "Allocation de veuvage",
      "group": "Allocation",
      "size": 18
    },
    {
      "id": "personne_famille",
      "label": "Famille",
      "group": "Personne",
      "size": 18
    },
    {
      "id": "allocation_allocation_de_soutien_familial",
      "label": "Allocation de soutien familial",
      "group": "Allocation",
      "size": 18
    },
    {
      "id": "organisme_service_des_eaux_de_la_commune",
      "label": "Service des eaux de la commune",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "organisme_centre_national_de_traitement_fbfv",
      "label": "Centre national de traitement FBFV",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "bien_véhicules",
      "label": "Véhicules",
      "group": "Bien",
      "size": 18
    },
    {
      "id": "entreprise_opérateur_téléphonique",
      "label": "Opérateur téléphonique",
      "group": "Entreprise",
      "size": 18
    },
    {
      "id": "entreprise_fournisseur_d'accès_internet",
      "label": "Fournisseur d'accès Internet",
      "group": "Entreprise",
      "size": 18
    },
    {
      "id": "entreprise_assurance",
      "label": "Assurance",
      "group": "Entreprise",
      "size": 18
    },
    {
      "id": "bien_meubles",
      "label": "Meubles",
      "group": "Bien",
      "size": 18
    },
    {
      "id": "organisme_france_travail",
      "label": "France travail",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "organisme_caisse_d'allocations_familliales",
      "label": "Caisse d'allocations familliales",
      "group": "Organisme",
      "size": 18
    },
    {
      "id": "depense_avis_d'obsèques",
      "label": "Avis d'obsèques",
      "group": "Depense",
      "size": 18
    }
  ],
  "edges": [
    {
      "source": "personne_conjoint",
      "target": "allocation_pension_de_réversion",
      "label": "PEUT BENEFICIER"
    },
    {
      "source": "formalite_etablissement_du_certificat_de_décès",
      "target": "personne_médecin",
      "label": "ETABLI PAR"
    },
    {
      "source": "defunt_défunt",
      "target": "derniere_volonte_inhumation",
      "label": "A EXPRIME"
    },
    {
      "source": "formalite_informer_les_organismes_payeurs",
      "target": "organisme_bailleur",
      "label": "CONTACTER"
    },
    {
      "source": "patrimoine_biens_professionnels",
      "target": "bien_entreprise",
      "label": "INCLUT"
    },
    {
      "source": "patrimoine_biens_professionnels",
      "target": "bien_fonds_de_commerce",
      "label": "INCLUT"
    },
    {
      "source": "patrimoine_biens_matériels",
      "target": "bien_objets_d'art_ou_de_collection",
      "label": "INCLUT"
    },
    {
      "source": "formalite_déclarer_le_décès",
      "target": "delais_dans_les_24_heures",
      "label": "A EFFECTUER"
    },
    {
      "source": "contrat_contrat_d'assurance_obsèques",
      "target": "depense_achat_d'une_concession",
      "label": "POUR FINANCER"
    },
    {
      "source": "formalite_organisation_des_funérailles",
      "target": "personne_voisin",
      "label": "INFORMER"
    },
    {
      "source": "contrat_contrat_d'assurance_obsèques",
      "target": "depense_transport_du_corps",
      "label": "POUR FINANCER"
    },
    {
      "source": "personne_légataire",
      "target": "patrimoine_biens_professionnels",
      "label": "HERITE"
    },
    {
      "source": "personne_légataire",
      "target": "patrimoine_propriété_intellectuelle",
      "label": "HERITE"
    },
    {
      "source": "contrat_contrat_d'assurance_obsèques",
      "target": "depense_inhumation_ou_crémation",
      "label": "POUR FINANCER"
    },
    {
      "source": "contrat_contrat_d'assurance_obsèques",
      "target": "depense_cérémonie_d'accompagnement",
      "label": "POUR FINANCER"
    },
    {
      "source": "formalite_vérifier_l'existence_d'un_testament",
      "target": "organisme_fichier_central_des_dispositions_de_dernières_volontés",
      "label": "CONSULTER"
    },
    {
      "source": "contrat_contrat_d'assurance_vie",
      "target": "organisme_agira",
      "label": "CONSULTER"
    },
    {
      "source": "defunt_défunt",
      "target": "personne_conjoint",
      "label": "ETAIT MARIE"
    },
    {
      "source": "dette_emprunt",
      "target": "contrat_contrat_d'assurance_décès",
      "label": "COUVERT PAR"
    },
    {
      "source": "document_testament",
      "target": "testament_olographe",
      "label": "PEUT ÊTRE"
    },
    {
      "source": "contrat_contrat_d'assurance_décès",
      "target": "organisme_agira",
      "label": "ENREGISTRE AUPRES"
    },
    {
      "source": "formalite_recherche_d'une_assurance_obsèques",
      "target": "delais_dans_les_48_heures",
      "label": "A EFFECTUER"
    },
    {
      "source": "formalite_informer_les_organismes_payeurs",
      "target": "organisme_caisse_de_retraite",
      "label": "CONTACTER"
    },
    {
      "source": "formalite_organisation_des_funérailles",
      "target": "delais_dans_les_6_jours",
      "label": "A EFFECTUER"
    },
    {
      "source": "formalite_organisation_des_funérailles",
      "target": "allocation_capital_décès_de_la_cpam",
      "label": "SOLLICITER"
    },
    {
      "source": "formalite_organiser_la_succession",
      "target": "organisme_fichier_central_des_dispositions_de_dernières_volontés",
      "label": "CONSULTER"
    },
    {
      "source": "formalite_déclarer_le_décès",
      "target": "organisme_maison_de_retraite",
      "label": "DECLARE PAR"
    },
    {
      "source": "formalite_organisation_des_funérailles",
      "target": "entreprise_pompes_funèbres",
      "label": "CONTACTER"
    },
    {
      "source": "contrat_contrat_d'assurance_obsèques",
      "target": "depense_achat_et_pose_d'un_emblème_sur_la_sépulture",
      "label": "POUR FINANCER"
    },
    {
      "source": "contrat_contrat_d'assurance_obsèques",
      "target": "depense_achat_de_fleurs",
      "label": "POUR FINANCER"
    },
    {
      "source": "defunt_défunt",
      "target": "dette_impôts",
      "label": "DOIT PAYER"
    },
    {
      "source": "defunt_défunt",
      "target": "dette_emprunt",
      "label": "DOIT REMBOURSER"
    },
    {
      "source": "dette_impôts",
      "target": "organisme_centre_des_impôts",
      "label": "ENREGISTRE AUPRES"
    },
    {
      "source": "formalite_organiser_la_succession",
      "target": "entreprise_office_notarial",
      "label": "CONTACTER"
    },
    {
      "source": "formalite_organiser_la_succession",
      "target": "delais_dans_le_mois",
      "label": "A EFFECTUER"
    },
    {
      "source": "defunt_défunt",
      "target": "derniere_volonte_crémation",
      "label": "A EXPRIME"
    },
    {
      "source": "formalite_gérer_les_comptes_bancaires",
      "target": "delais_dans_le_mois",
      "label": "A EFFECTUER"
    },
    {
      "source": "formalite_informer_les_organismes_payeurs",
      "target": "delais_dans_les_10_jours",
      "label": "A EFFECTUER"
    },
    {
      "source": "formalite_déclaration_de_revenus",
      "target": "organisme_centre_des_impôts",
      "label": "DECLARER A"
    },
    {
      "source": "dette_emprunt",
      "target": "entreprise_etablissement_bancaire",
      "label": "ENREGISTRE AUPRES"
    },
    {
      "source": "formalite_résiliation_des_abonnements",
      "target": "delais_dans_le_mois",
      "label": "A EFFECTUER"
    },
    {
      "source": "formalite_déclaration_de_succession",
      "target": "organisme_centre_des_impôts",
      "label": "DECLARER A"
    },
    {
      "source": "actif_financier_produits_d'épargne",
      "target": "contret_contrat_d'assurance_vie",
      "label": "CONSTITUE"
    },
    {
      "source": "patrimoine_biens_matériels",
      "target": "bien_equipements",
      "label": "INCLUT"
    },
    {
      "source": "formalite_recherche_d'une_assurance_obsèques",
      "target": "organisme_agira",
      "label": "CONSULTER"
    },
    {
      "source": "patrimoine_propriété_intellectuelle",
      "target": "bien_brevet",
      "label": "INCLUT"
    },
    {
      "source": "patrimoine_propriété_intellectuelle",
      "target": "bien_droits_d'auteur",
      "label": "INCLUT"
    },
    {
      "source": "formalite_déclarer_le_décès",
      "target": "organisme_mairie",
      "label": "DECLARER A"
    },
    {
      "source": "formalite_déclarer_le_décès",
      "target": "organisme_hôpital",
      "label": "DECLARE PAR"
    },
    {
      "source": "formalite_déclaration_de_revenus",
      "target": "delais_dans_les_6_mois",
      "label": "A EFFECTUER"
    },
    {
      "source": "formalite_organisation_des_funérailles",
      "target": "personne_amis",
      "label": "INFORMER"
    },
    {
      "source": "formalite_déclaration_de_succession",
      "target": "delais_dans_les_6_mois",
      "label": "A EFFECTUER"
    },
    {
      "source": "document_testament",
      "target": "testament_authentique",
      "label": "PEUT ÊTRE"
    },
    {
      "source": "formalite_établissement_de_l'acte_de_décès",
      "target": "organisme_mairie",
      "label": "ETABLI PAR"
    },
    {
      "source": "formalite_établissement_du_certificat_de_décès",
      "target": "delais_dans_les_24_heures",
      "label": "A EFFECTUER"
    },
    {
      "source": "document_testament",
      "target": "testament_mystique",
      "label": "PEUT ÊTRE"
    },
    {
      "source": "testament_authentique",
      "target": "organisme_fichier_central_des_dispositions_de_dernières_volontés",
      "label": "ENREGISTRE AUPRES"
    },
    {
      "source": "document_testament",
      "target": "personne_légataire",
      "label": "DESIGNE"
    },
    {
      "source": "defunt_défunt",
      "target": "contrat_contrat_d'assurance_vie",
      "label": "A SOUSCRIT"
    },
    {
      "source": "defunt_défunt",
      "target": "contrat_contrat_d'assurance_obsèques",
      "label": "A SOUSCRIT"
    },
    {
      "source": "patrimoine_placements_financiers",
      "target": "actif_financier_dépôt_bancaire",
      "label": "INCLUT"
    },
    {
      "source": "personne_légataire",
      "target": "patrimoine_biens_matériels",
      "label": "HERITE"
    },
    {
      "source": "patrimoine_placements_financiers",
      "target": "actif_financier_actions",
      "label": "INCLUT"
    },
    {
      "source": "patrimoine_placements_financiers",
      "target": "actif_financier_cotisations_retraite",
      "label": "INCLUT"
    },
    {
      "source": "patrimoine_placements_financiers",
      "target": "actif_financier_produits_d'épargne",
      "label": "INCLUT"
    },
    {
      "source": "patrimoine_placements_financiers",
      "target": "actif_financier_parts_de_fonds_collectifs",
      "label": "INCLUT"
    },
    {
      "source": "patrimoine_foncier_et_immobilier",
      "target": "propriete_habitation",
      "label": "INCLUT"
    },
    {
      "source": "testament_mystique",
      "target": "organisme_fichier_central_des_dispositions_de_dernières_volontés",
      "label": "ENREGISTRE AUPRES"
    },
    {
      "source": "contrat_contrat_d'assurance_obsèques",
      "target": "depense_courriers_d'invitation_et_de_remerciements",
      "label": "POUR FINANCER"
    },
    {
      "source": "defunt_défunt",
      "target": "document_testament",
      "label": "A REDIGE"
    },
    {
      "source": "patrimoine_foncier_et_immobilier",
      "target": "propriete_terrain",
      "label": "INCLUT"
    },
    {
      "source": "entreprise_employeur",
      "target": "personne_collègue",
      "label": "INFORMER"
    },
    {
      "source": "formalite_établissement_du_certificat_de_décès",
      "target": "organisme_hôpital",
      "label": "ETABLI PAR"
    },
    {
      "source": "formalite_gérer_les_comptes_bancaires",
      "target": "entreprise_etablissement_bancaire",
      "label": "CONTACTER"
    },
    {
      "source": "personne_conjoint",
      "target": "allocation_allocation_de_veuvage",
      "label": "PEUT BENEFICIER"
    },
    {
      "source": "personne_famille",
      "target": "allocation_allocation_de_soutien_familial",
      "label": "PEUT BENEFICIER"
    },
    {
      "source": "formalite_résiliation_des_abonnements",
      "target": "organisme_service_des_eaux_de_la_commune",
      "label": "CONTACTER"
    },
    {
      "source": "formalite_gérer_les_comptes_bancaires",
      "target": "organisme_centre_national_de_traitement_fbfv",
      "label": "ENREGISTRE AUPRES"
    },
    {
      "source": "formalite_organisation_des_funérailles",
      "target": "entreprise_employeur",
      "label": "INFORMER"
    },
    {
      "source": "patrimoine_biens_matériels",
      "target": "bien_véhicules",
      "label": "INCLUT"
    },
    {
      "source": "formalite_établissement_du_certificat_de_décès",
      "target": "organisme_maison_de_retraite",
      "label": "ETABLI PAR"
    },
    {
      "source": "formalite_résiliation_des_abonnements",
      "target": "entreprise_opérateur_téléphonique",
      "label": "CONTACTER"
    },
    {
      "source": "formalite_résiliation_des_abonnements",
      "target": "entreprise_fournisseur_d'accès_internet",
      "label": "CONTACTER"
    },
    {
      "source": "formalite_résiliation_des_abonnements",
      "target": "entreprise_assurance",
      "label": "CONTACTER"
    },
    {
      "source": "patrimoine_biens_matériels",
      "target": "bien_meubles",
      "label": "INCLUT"
    },
    {
      "source": "formalite_informer_les_organismes_payeurs",
      "target": "organisme_france_travail",
      "label": "CONTACTER"
    },
    {
      "source": "formalite_informer_les_organismes_payeurs",
      "target": "entreprise_employeur",
      "label": "CONTACTER"
    },
    {
      "source": "formalite_informer_les_organismes_payeurs",
      "target": "organisme_caisse_d'allocations_familliales",
      "label": "CONTACTER"
    },
    {
      "source": "contrat_contrat_d'assurance_obsèques",
      "target": "depense_avis_d'obsèques",
      "label": "POUR FINANCER"
    },
    {
      "source": "personne_légataire",
      "target": "patrimoine_foncier_et_immobilier",
      "label": "HERITE"
    },
    {
      "source": "personne_légataire",
      "target": "patrimoine_placements_financiers",
      "label": "HERITE"
    },
    {
      "source": "formalite_établissement_de_l'acte_de_décès",
      "target": "entreprise_employeur",
      "label": "ENVOYER A"
    }
  ]
},
  {
  "id": "theme-legal-fin-de-vie-numerique",
  "title": "Données Personnelles & Fin de Vie",
  "category": "Droits & Démarches",
  "description": "Une cartographie des obligations, des droits et du testament numérique.",
  "longDescription": "À l'ère du numérique, la fin de vie ne concerne plus seulement le patrimoine physique. Ce graphe structure les démarches administratives indispensables, les droits d'accès aux données (loi République Numérique), et la gestion des comptes en ligne après le décès.",
  "nodes": [
    { "id": "prevoyance", "label": "Planification Fin de Vie", "group": "racine", "size": 28 },
    
    // Volet Juridique & Administratif Classique
    { "id": "directives_anticipees", "label": "Directives Anticipées (Santé)", "group": "legal_sante", "size": 20 },
    { "id": "testament_notarie", "label": "Testament (Notaire)", "group": "legal_patrimoine", "size": 20 },
    { "id": "personne_confiance", "label": "Personne de Confiance", "group": "humain", "size": 18 },
    { "id": "executeur_testamentaire", "label": "Exécuteur Testamentaire", "group": "humain", "size": 16 },
    
    // Volet Numérique (Le "Testament Numérique")
    { "id": "testament_numerique", "label": "Directives Numériques (Post-Mortem)", "group": "legal_numerique", "size": 22 },
    { "id": "gestionnaire_mots_passe", "label": "Coffre-fort / Gestionnaire de Mots de Passe", "group": "outil", "size": 16 },
    { "id": "cnil", "label": "Droits CNIL (Accès/Effacement)", "group": "institution", "size": 16 },
    
    // Les Actifs Numériques & Comptes
    { "id": "comptes_sociaux", "label": "Réseaux Sociaux (Mémorial/Suppression)", "group": "plateforme", "size": 15 },
    { "id": "cloud_photos", "label": "Données Cloud (Photos/Souvenirs)", "group": "plateforme", "size": 15 },
    { "id": "crypto_banque", "label": "Comptes Bancaires & Crypto-actifs", "group": "plateforme", "size": 16 }
  ],
  "edges": [
    // Liens du volet classique / médical
    { "source": "prevoyance", "target": "directives_anticipees", "label": "Consigne les choix médicaux dans" },
    { "source": "prevoyance", "target": "testament_notarie", "label": "Organise la succession via" },
    { "source": "directives_anticipees", "target": "personne_confiance", "label": "Est consultée par / confiée à" },
    { "source": "testament_notarie", "target": "executeur_testamentaire", "label": "Nomme l'" },
    
    // Liens du volet numérique
    { "source": "prevoyance", "target": "testament_numerique", "label": "Anticipe l'héritage digital par" },
    { "source": "testament_numerique", "target": "gestionnaire_mots_passe", "label": "Nécessite le legs des accès via" },
    { "source": "testament_numerique", "target": "cnil", "label": "S'appuie sur le cadre légal de la" },
    { "source": "gestionnaire_mots_passe", "target": "executeur_testamentaire", "label": "Doit être transmis à l'" },
    
    // Application sur les plateformes
    { "source": "testament_numerique", "target": "comptes_sociaux", "label": "Décide du statut (ex: 'Compte de commémoration') de" },
    { "source": "testament_numerique", "target": "cloud_photos", "label": "Autorise le transfert aux proches de" },
    { "source": "testament_notarie", "target": "crypto_banque", "label": "Lègue légalement les accès et fonds de" },
    { "source": "cnil", "target": "comptes_sociaux", "label": "Permet aux héritiers d'exiger la clôture de" }
  ]
},
{
  "id": "theme-gastronomie-michelin-paris",
  "title": "Les Étoilés Michelin de Paris",
  "category": "Gastronomie & Tourisme",
  "description": "Une cartographie des palaces, des grands chefs et des distinctions de la capitale.",
  "longDescription": "Paris est l'une des capitales mondiales de la gastronomie. Ce graphe explore l'écosystème ultra-connecté des tables triples étoilées, des chefs d'orchestre qui les dirigent, de leurs styles culinaires et des producteurs d'élite qui font l'excellence de ces assiettes.",
  "nodes": [
    { "id": "guide_michelin", "label": "Le Guide Michelin Paris", "group": "racine", "size": 28 },
    
    // Les Distinctions (Étoiles)
    { "id": "3_etoiles", "label": "★★★ (Exceptionnel)", "group": "distinction", "size": 22 },
    { "id": "etoile_verte", "label": "♣ Étoile Verte (Durable)", "group": "distinction", "size": 18 },
    
    // Les Grands Chefs
    { "id": "chef_passard", "label": "Alain Passard", "group": "chef", "size": 18 },
    { "id": "chef_alleno", "label": "Yannick Alléno", "group": "chef", "size": 18 },
    { "id": "chef_pacaud", "label": "Bernard Pacaud", "group": "chef", "size": 18 },
    
    // Les Restaurants / Palaces
    { "id": "rest_arpège", "label": "L'Arpège (Paris 7e)", "group": "restaurant", "size": 20 },
    { "id": "rest_ledoyen", "label": "Alléno Paris au Pavillon Ledoyen (Paris 8e)", "group": "restaurant", "size": 20 },
    { "id": "rest_ambroisie", "label": "L'Ambroisie (Place des Vosges, Paris 4e)", "group": "restaurant", "size": 20 },
    
    // Styles de Cuisine
    { "id": "cuisine_legumiere", "label": "Haute Cuisine Légumière", "group": "style", "size": 14 },
    { "id": "cuisine_sauces", "label": "Cuisine Moderniste & Extractions (Sauces)", "group": "style", "size": 14 },
    { "id": "cuisine_classique", "label": "Classicisme Français Absolu", "group": "style", "size": 14 },
    
    // Les Producteurs d'Exception
    { "id": "prod_ferme_arpège", "label": "Les Potagers de l'Arpège (Sarthe/Eure)", "group": "producteur", "size": 14 }
  ],
  "edges": [
    // Attribution des étoiles par le Guide
    { "source": "guide_michelin", "target": "3_etoiles", "label": "Décerne" },
    { "source": "guide_michelin", "target": "etoile_verte", "label": "Valorise via" },
    
    // Liens vers les restaurants triples étoilés
    { "source": "rest_arpège", "target": "3_etoiles", "label": "Détient (depuis 1996)" },
    { "source": "rest_ledoyen", "target": "3_etoiles", "label": "Détient" },
    { "source": "rest_ambroisie", "target": "3_etoiles", "label": "Détient (plus longue longévité)" },
    
    // Liens Chefs -> Restaurants
    { "source": "chef_passard", "target": "rest_arpège", "label": "Chef Propriétaire de" },
    { "source": "chef_alleno", "target": "rest_ledoyen", "label": "Dirige les cuisines de" },
    { "source": "chef_pacaud", "target": "rest_ambroisie", "label": "Fondateur et Chef de" },
    
    // Liens Restaurants -> Identité Culinaire
    { "source": "rest_arpège", "target": "cuisine_legumiere", "label": "A pour signature la" },
    { "source": "rest_ledoyen", "target": "cuisine_sauces", "label": "Innovers grâce à la" },
    { "source": "rest_ambroisie", "target": "cuisine_classique", "label": "Incarne le" },
    
    // L'éco-système et les distinctions durables
    { "source": "rest_arpège", "target": "etoile_verte", "label": "A obtenu l'" },
    { "source": "rest_arpège", "target": "prod_ferme_arpège", "label": "S'approvisionne exclusivement dans" },
    { "source": "prod_ferme_arpège", "target": "cuisine_legumiere", "label": "Alimente la" }
  ]
},
{
  "id": "theme-patrimoine-monuments-monde",
  "title": "Merveilles de l'Architecture Mondiale",
  "category": "Histoire & Voyage",
  "description": "Une exploration des monuments iconiques, de leurs styles et de leur géographie.",
  "longDescription": "Des pyramides d'Égypte aux gratte-ciels modernes, l'humanité défie les lois de la gravité pour ancrer sa culture dans la pierre et le métal. Ce graphe connecte les plus grands monuments de la planète à leurs époques, leurs matériaux et leurs signatures architecturales.",
  "nodes": [
    { "id": "patrimoine_mondial", "label": "Monuments du Monde", "group": "racine", "size": 28 },
    
    // Distinctions / Protections
    { "id": "unesco", "label": "Patrimoine Mondial de l'UNESCO", "group": "statut", "size": 20 },
    
    // Les Continents (Filtres géographiques)
    { "id": "europe", "label": "Europe", "group": "continent", "size": 18 },
    { "id": "asie", "label": "Asie", "group": "continent", "size": 18 },
    { "id": "amerique", "label": "Amérique", "group": "continent", "size": 18 },
    
    // Les Monuments
    { "id": "tour_eiffel", "label": "Tour Eiffel (Paris, France)", "group": "monument", "size": 22 },
    { "id": "taj_mahal", "label": "Taj Mahal (Agra, Inde)", "group": "monument", "size": 22 },
    { "id": "machu_picchu", "label": "Machu Picchu (Cuzco, Pérou)", "group": "monument", "size": 22 },
    
    // Époques de construction
    { "id": "epoque_inca", "label": "Époque Précolombienne (XVe siècle)", "group": "epoque", "size": 14 },
    { "id": "epoque_moghole", "label": "Empire Moghol (XVIIe siècle)", "group": "epoque", "size": 14 },
    { "id": "epoque_industrielle", "label": "Révolution Industrielle (XIXe siècle)", "group": "epoque", "size": 14 },
    
    // Styles Architecturaux
    { "id": "style_indo_islamique", "label": "Architecture Indo-Islamique", "group": "style", "size": 15 },
    { "id": "style_ingénierie_fer", "label": "Architecture Métallique / Industrie", "group": "style", "size": 15 },
    { "id": "style_inca", "label": "Architecture Cyclopéenne (Inca)", "group": "style", "size": 15 },
    
    // Matériaux principaux
    { "id": "mat_fer_puddle", "label": "Fer Puddlé", "group": "materiau", "size": 12 },
    { "id": "mat_marbre_blanc", "label": "Marbre Blanc", "group": "materiau", "size": 12 },
    { "id": "mat_granite", "label": "Blocs de Granite", "group": "materiau", "size": 12 }
  ],
  "edges": [
    // Liens géographiques
    { "source": "patrimoine_mondial", "target": "europe", "label": "Explore l'" },
    { "source": "patrimoine_mondial", "target": "asie", "label": "Explore l'" },
    { "source": "patrimoine_mondial", "target": "amerique", "label": "Explore l'" },
    
    { "source": "tour_eiffel", "target": "europe", "label": "Situé en" },
    { "source": "taj_mahal", "target": "asie", "label": "Situé en" },
    { "source": "machu_picchu", "target": "amerique", "label": "Situé en" },
    
    // Protection UNESCO (Le Taj Mahal et le Machu Picchu le sont, la Tour Eiffel est protégée via les Rives de la Seine)
    { "source": "taj_mahal", "target": "unesco", "label": "Classé par l'" },
    { "source": "machu_picchu", "target": "unesco", "label": "Classé par l'" },
    
    // Liens Époques & Histoire
    { "source": "tour_eiffel", "target": "epoque_industrielle", "label": "Construit durant la" },
    { "source": "taj_mahal", "target": "epoque_moghole", "label": "Érigé sous l'" },
    { "source": "machu_picchu", "target": "epoque_inca", "label": "Bâti à l'" },
    
    // Liens Styles Architecturaux
    { "source": "tour_eiffel", "target": "style_ingénierie_fer", "label": "Incarne l'" },
    { "source": "taj_mahal", "target": "style_indo_islamique", "label": "Chef-d'œuvre de l'" },
    { "source": "machu_picchu", "target": "style_inca", "label": "Exemple parfait d'" },
    
    // Liens Matériaux de construction
    { "source": "tour_eiffel", "target": "mat_fer_puddle", "label": "Composé de" },
    { "source": "taj_mahal", "target": "mat_marbre_blanc", "label": "Façonné dans du" },
    { "source": "machu_picchu", "target": "mat_granite", "label": "Assemblé en" }
  ]
},
  {
  "id": "theme-sport-entrainement-physique",
  "title": "La Science de l'Entraînement Physique",
  "category": "Sport & Santé",
  "description": "Une cartographie des méthodes d'entraînement, des exercices et de l'anatomie.",
  "longDescription": "Optimiser sa condition physique demande de comprendre comment le corps réagit. Ce graphe connecte les grands objectifs de transformation physique aux méthodes de travail, aux mouvements polyarticulaires majeurs et aux muscles sollicités.",
  "nodes": [
    { "id": "preparation_physique", "label": "Condition Physique", "group": "racine", "size": 28 },
    
    // Grands Objectifs de l'athlète
    { "id": "obj_hypertrophie", "label": "Prise de Muscle (Hypertrophie)", "group": "objectif", "size": 20 },
    { "id": "obj_force", "label": "Force Maximale", "group": "objectif", "size": 20 },
    { "id": "obj_endurance", "label": "Endurance Cardiovasculaire", "group": "objectif", "size": 20 },
    
    // Méthodes d'Entraînement
    { "id": "methode_surcharge", "label": "Surcharge Progressive", "group": "methode", "size": 16 },
    { "id": "methode_hiit", "label": "HIIT (Haute Intensité)", "group": "methode", "size": 16 },
    
    // Exercices Fondamentaux (Mouvements Polyarticulaires)
    { "id": "exo_squat", "label": "Squat", "group": "exercice", "size": 18 },
    { "id": "exo_developpe_couche", "label": "Développé Couché", "group": "exercice", "size": 18 },
    { "id": "exo_souleve_terre", "label": "Soulevé de Terre (Deadlift)", "group": "exercice", "size": 18 },
    
    // Groupes Musculaires (Anatomie)
    { "id": "muscle_quadriceps", "label": "Quadriceps & Fessiers", "group": "anatomie", "size": 14 },
    { "id": "muscle_pectoraux", "label": "Pectoraux & Triceps", "group": "anatomie", "size": 14 },
    { "id": "muscle_dos", "label": "Chaîne Postérieure (Dos/Ischios)", "group": "anatomie", "size": 14 }
  ],
  "edges": [
    // Liens Objectifs -> Méthodes nécessaires
    { "source": "obj_hypertrophie", "target": "methode_surcharge", "label": "Nécessite impérativement la" },
    { "source": "obj_force", "target": "methode_surcharge", "label": "Se développe via la" },
    { "source": "obj_endurance", "target": "methode_hiit", "label": "S'améliore avec le" },
    
    // Liens Objectifs -> Exercices Rois
    { "source": "obj_force", "target": "exo_souleve_terre", "label": "S'évalue principalement au" },
    { "source": "obj_hypertrophie", "target": "exo_developpe_couche", "label": "Utilise couramment le" },
    { "source": "obj_hypertrophie", "target": "exo_squat", "label": "Utilise couramment le" },
    
    // Liens Exercices -> Muscles ciblés (Anatomie)
    { "source": "exo_squat", "target": "muscle_quadriceps", "label": "Recrute en priorité les" },
    { "source": "exo_developpe_couche", "target": "muscle_pectoraux", "label": "Recrute en priorité les" },
    { "source": "exo_souleve_terre", "target": "muscle_dos", "label": "Sollicite massivement la" },
    
    // Liens transverses de synergie
    { "source": "exo_squat", "target": "muscle_dos", "label": "Demande le gainage de la" },
    
    // Rattachement racine
    { "source": "preparation_physique", "target": "obj_hypertrophie", "label": "Option" },
    { "source": "preparation_physique", "target": "obj_force", "label": "Option" },
    { "source": "preparation_physique", "target": "obj_endurance", "label": "Option" }
  ]
},
{
  "id": "theme-dev-perso-best-sellers",
  "title": "La Carte du Développement Personnel",
  "category": "Psychologie & Bien-être",
  "description": "Une cartographie des livres incontournables, de leurs philosophies et de leurs outils.",
  "longDescription": "Le développement personnel regroupe des approches très variées. Ce graphe connecte les plus grands best-sellers mondiaux à leurs courants de pensée fondateurs, tout en mettant en lumière les concepts clés et les exercices pratiques que chaque livre transmet.",
  "nodes": [
    { "id": "racine_dev_perso", "label": "Épanouissement Personnel", "group": "racine", "size": 28 },
    
    // Courants théoriques / Philosophies de fond
    { "id": "courant_stoicisme", "label": "Stoïcisme & Philosophie Antique", "group": "philosophie", "size": 18 },
    { "id": "courant_tcc", "label": "Psychologie Cognitive (TCC)", "group": "philosophie", "size": 18 },
    { "id": "courant_systemique", "label": "Approche Systémique & Habitudes", "group": "philosophie", "size": 18 },
    
    // Les Livres Majeurs
    { "id": "livre_atomic_habits", "label": "Atomic Habits (James Clear)", "group": "livre", "size": 22 },
    { "id": "livre_obstacle_way", "label": "L'Obstacle est le Chemin (Ryan Holiday)", "group": "livre", "size": 22 },
    { "id": "livre_4_accords", "label": "Les Quatre Accords Toltèques (Don Miguel Ruiz)", "group": "livre", "size": 22 },
    
    // Les Auteurs
    { "id": "auteur_clear", "label": "James Clear", "group": "auteur", "size": 15 },
    { "id": "auteur_holiday", "label": "Ryan Holiday", "group": "auteur", "size": 15 },
    { "id": "auteur_ruiz", "label": "Don Miguel Ruiz", "group": "auteur", "size": 15 },
    
    // Concepts Clés / Leçons de vie
    { "id": "concept_interets_composes", "label": "L'effet cumulé des petites actions", "group": "concept", "size": 14 },
    { "id": "concept_dichotomie_controle", "label": "La dichotomie du contrôle", "group": "concept", "size": 14 },
    { "id": "concept_parole_impeccable", "label": "La parole impeccable", "group": "concept", "size": 14 },
    
    // Outils Pratiques / Actions pour le lecteur
    { "id": "outil_regle_2_min", "label": "La règle des 2 minutes", "group": "outil", "size": 13 },
    { "id": "outil_journaling", "label": "L'écriture quotidienne (Journaling)", "group": "outil", "size": 13 },
    { "id": "outil_communication", "label": "La communication non-violente", "group": "outil", "size": 13 }
  ],
  "edges": [
    // Liens Auteurs -> Livres
    { "source": "livre_atomic_habits", "target": "auteur_clear", "label": "Écrit par" },
    { "source": "livre_obstacle_way", "target": "auteur_holiday", "label": "Écrit par" },
    { "source": "livre_4_accords", "target": "auteur_ruiz", "label": "Écrit par" },
    
    // Liens Livres -> Courants de pensée
    { "source": "livre_atomic_habits", "target": "courant_systemique", "label": "S'appuie sur l'" },
    { "source": "livre_obstacle_way", "target": "courant_stoicisme", "label": "Vulgarise le" },
    { "source": "livre_4_accords", "target": "courant_tcc", "label": "Partage des mécanismes de la" },
    
    // Liens Livres -> Concepts clés
    { "source": "livre_atomic_habits", "target": "concept_interets_composes", "label": "Démontre le pouvoir de" },
    { "source": "livre_obstacle_way", "target": "concept_dichotomie_controle", "label": "Repose sur la" },
    { "source": "livre_4_accords", "target": "concept_parole_impeccable", "label": "Met en premier accord" },
    
    // Liens Concepts -> Outils pratiques (Comment appliquer le concept)
    { "source": "concept_interets_composes", "target": "outil_regle_2_min", "label": "S'active via" },
    { "source": "concept_dichotomie_controle", "target": "outil_journaling", "label": "Se pratique par l'" },
    { "source": "concept_parole_impeccable", "target": "outil_communication", "label": "Se traduit par la" },
    
    // Rattachement à la racine pour la navigation
    { "source": "racine_dev_perso", "target": "livre_atomic_habits", "label": "Inclus" },
    { "source": "racine_dev_perso", "target": "livre_obstacle_way", "label": "Inclus" },
    { "source": "racine_dev_perso", "target": "livre_4_accords", "label": "Inclus" }
  ]
},
  {
  "id": "theme-nutrition-saisons-vegetaux",
  "title": "Le Calendrier des Fruits & Légumes",
  "category": "Écologie & Nutrition",
  "description": "Une cartographie pour consommer local et de saison toute l'année.",
  "longDescription": "Manger de saison est le meilleur moyen de respecter la nature et de faire le plein de nutriments adaptés à nos besoins biologiques. Ce graphe connecte les fruits et légumes phares aux quatre saisons, tout en révélant leurs vitamines et bienfaits principaux.",
  "nodes": [
    { "id": "alimentation_durable", "label": "Consommer de Saison", "group": "racine", "size": 28 },
    
    // Les 4 Saisons (Nœuds pivots)
    { "id": "saison_printemps", "label": "Printemps", "group": "saison", "size": 20 },
    { "id": "saison_ete", "label": "Été", "group": "saison", "size": 20 },
    { "id": "saison_automne", "label": "Automne", "group": "saison", "size": 20 },
    { "id": "saison_hiver", "label": "Hiver", "group": "saison", "size": 20 },
    
    // Fruits & Légumes
    { "id": "veg_fraise", "label": "Fraise", "group": "fruit", "size": 16 },
    { "id": "veg_tomate", "label": "Tomate", "group": "legume", "size": 16 },
    { "id": "veg_asperge", "label": "Asperge", "group": "legume", "size": 15 },
    { "id": "veg_potimarron", "label": "Potimarron", "group": "legume", "size": 16 },
    { "id": "veg_orange", "label": "Orange", "group": "fruit", "size": 16 },
    { "id": "veg_poireau", "label": "Poireau", "group": "legume", "size": 15 },
    
    // Bienfaits & Nutriments
    { "id": "nut_vitamine_c", "label": "Vitamine C (Immunité)", "group": "nutriment", "size": 14 },
    { "id": "nut_beta_carotene", "label": "Bêta-Carotène (Antioxydant)", "group": "nutriment", "size": 14 },
    { "id": "nut_hydratation", "label": "Riche en Eau (Hydratation)", "group": "nutriment", "size": 14 }
  ],
  "edges": [
    // Rattachement des saisons à la racine
    { "source": "alimentation_durable", "target": "saison_printemps", "label": "Découvrir le" },
    { "source": "alimentation_durable", "target": "saison_ete", "label": "Découvrir l'" },
    { "source": "alimentation_durable", "target": "saison_automne", "label": "Découvrir l'" },
    { "source": "alimentation_durable", "target": "saison_hiver", "label": "Découvrir l'" },
    
    // Printemps
    { "source": "saison_printemps", "target": "veg_asperge", "label": "Récolté au" },
    { "source": "saison_printemps", "target": "veg_fraise", "label": "Débute au" },
    
    // Été (La fraise chevauche le printemps et l'été)
    { "source": "saison_ete", "target": "veg_fraise", "label": "Se récolte en" },
    { "source": "saison_ete", "target": "veg_tomate", "label": "Pleine saison en" },
    
    // Automne
    { "source": "saison_automne", "target": "veg_potimarron", "label": "Récolté en" },
    
    // Hiver (Le poireau fait l'automne et l'hiver)
    { "source": "saison_automne", "target": "veg_poireau", "label": "Apparaît en" },
    { "source": "saison_hiver", "target": "veg_poireau", "label": "Résiste à l'" },
    { "source": "saison_hiver", "target": "veg_orange", "label": "Pleine saison en" },
    
    // Liens vers les Nutriments & Bienfaits
    { "source": "veg_tomate", "target": "nut_hydratation", "label": "Apporte de l'" },
    { "source": "veg_fraise", "target": "nut_vitamine_c", "label": "Contient de la" },
    { "source": "veg_orange", "target": "nut_vitamine_c", "label": "Excellente source de" },
    { "source": "veg_potimarron", "target": "nut_beta_carotene", "label": "Riche en" },
    { "source": "veg_tomate", "target": "nut_beta_carotene", "label": "Contient du" }
  ]
},
  {
  "id": "theme-ecologie-menage-naturel",
  "title": "Le Graphe du Ménage Écologique",
  "category": "Maison & Écologie",
  "description": "Une cartographie des ingrédients naturels et de leurs actions pour chaque pièce.",
  "longDescription": "Entretenir sa maison sans produits toxiques est une science simple. Ce graphe connecte les ingrédients naturels indispensables aux différentes pièces de la maison, en mettant en lumière leurs propriétés chimiques spécifiques et les surfaces idéales à traiter.",
  "nodes": [
    { "id": "maison_propre", "label": "Ménage Éco-Responsable", "group": "racine", "size": 28 },
    
    // Les Pièces de la Maison (Zones cibles)
    { "id": "zone_cuisine", "label": "La Cuisine", "group": "piece", "size": 20 },
    { "id": "zone_sdb", "label": "La Salle de Bain & WC", "group": "piece", "size": 20 },
    { "id": "zone_salon", "label": "Le Salon & Chambres", "group": "piece", "size": 20 },
    
    // Les Ingrédients Naturels
    { "id": "ing_vinaigre", "label": "Vinaigre Blanc", "group": "ingredient", "size": 22 },
    { "id": "ing_bicarbonate", "label": "Bicarbonate de Soude", "group": "ingredient", "size": 22 },
    { "id": "ing_savon_noir", "label": "Savon Noir Liquide", "group": "ingredient", "size": 18 },
    { "id": "ing_terre_sommieres", "label": "Terre de Sommières", "group": "ingredient", "size": 16 },
    
    // Les Propriétés / Actions Chimiques
    { "id": "prop_anticalcaire", "label": "Détartrant / Anticalcaire", "group": "propriete", "size": 14 },
    { "id": "prop_degraissant", "label": "Dégraissant Puissant", "group": "propriete", "size": 14 },
    { "id": "prop_abrasif_doux", "label": "Abrasif Doux (Récurant)", "group": "propriete", "size": 14 },
    { "id": "prop_absorbant", "label": "Absorbeur de Gras & Odeurs", "group": "propriete", "size": 14 },
    
    // Les Surfaces spécifiques
    { "id": "surf_robinetterie", "label": "Robinetterie & Paroi de douche", "group": "surface", "size": 13 },
    { "id": "surf_four", "label": "Four & Plaques de cuisson", "group": "surface", "size": 13 },
    { "id": "surf_carrelage", "label": "Sols en Carrelage", "group": "surface", "size": 13 },
    { "id": "surf_tapis", "label": "Tapis, Canapés & Textiles", "group": "surface", "size": 13 }
  ],
  "edges": [
    // Rattachement des pièces à la racine
    { "source": "maison_propre", "target": "zone_cuisine", "label": "Nettoyer" },
    { "source": "maison_propre", "target": "zone_sdb", "label": "Désinfecter" },
    { "source": "maison_propre", "target": "zone_salon", "label": "Entretenir" },
    
    // Liens Ingrédients -> Propriétés chimiques
    { "source": "ing_vinaigre", "target": "prop_anticalcaire", "label": "Agit comme" },
    { "source": "ing_bicarbonate", "target": "prop_abrasif_doux", "label": "Agit comme" },
    { "source": "ing_savon_noir", "target": "prop_degraissant", "label": "Agit comme" },
    { "source": "ing_terre_sommieres", "target": "prop_absorbant", "label": "Agit comme" },
    
    // Liens Propriétés -> Surfaces (L'application concrète)
    { "source": "prop_anticalcaire", "target": "surf_robinetterie", "label": "Fait briller la" },
    { "source": "prop_degraissant", "target": "surf_four", "label": "Décape le" },
    { "source": "prop_degraissant", "target": "surf_carrelage", "label": "Nettoie les" },
    { "source": "prop_abrasif_doux", "target": "surf_four", "label": "Désincruste le" },
    { "source": "prop_absorbant", "target": "surf_tapis", "label": "Détache à sec les" },
    
    // Rattachement final aux Pièces de la maison (pour clore la boucle)
    { "source": "surf_four", "target": "zone_cuisine", "label": "Situé dans" },
    { "source": "surf_robinetterie", "target": "zone_sdb", "label": "Situé dans" },
    { "source": "surf_carrelage", "target": "zone_sdb", "label": "Présent dans" },
    { "source": "surf_carrelage", "target": "zone_cuisine", "label": "Présent dans" },
    { "source": "surf_tapis", "target": "zone_salon", "label": "Situé dans" }
  ]
},
  {
  "id": "theme-mode-inventaire-dressing-capsule",
  "title": "L'Art du Dressing Minimaliste",
  "category": "Mode & Style de vie",
  "description": "Une cartographie intelligente de votre garde-robe pour maximiser les associations.",
  "longDescription": "Créer une garde-robe capsule consiste à posséder moins de vêtements, mais à mieux les associer. Ce graphe inventorie les pièces essentielles d'un dressing, les classe par saison et par style, et trace visuellement les combinaisons de tenues possibles (hauts et bas).",
  "nodes": [
    { "id": "mon_dressing", "label": "Mon Dressing Optimal", "group": "racine", "size": 28 },
    
    // Les Catégories de Vêtements
    { "id": "cat_hauts", "label": "Les Hauts", "group": "categorie", "size": 18 },
    { "id": "cat_bas", "label": "Les Bas", "group": "categorie", "size": 18 },
    { "id": "cat_vestes", "label": "Vestes & Manteaux", "group": "categorie", "size": 18 },
    
    // Les Pièces de l'Inventaire (Vêtements réels)
    { "id": "item_chemise_blanche", "label": "Chemise Blanche en Lin", "group": "vetement", "size": 20 },
    { "id": "item_tshirt_marin", "label": "T-shirt Marinière Coton", "group": "vetement", "size": 16 },
    { "id": "item_jean_brut", "label": "Jean Brut Coupe Droite", "group": "vetement", "size": 22 },
    { "id": "item_pantalon_toile", "label": "Chino Beige", "group": "vetement", "size": 20 },
    { "id": "item_blazer_marine", "label": "Blazer Bleu Marine", "group": "vetement", "size": 18 },
    
    // Les Saisons / Météo
    { "id": "saison_ete", "label": "Garde-robe d'Été", "group": "saison", "size": 15 },
    { "id": "saison_mi_saison", "label": "Printemps / Automne", "group": "saison", "size": 15 },
    
    // Les Styles / Occasions (Dress Codes)
    { "id": "style_casual", "label": "Style Décontracté (Casual)", "group": "style", "size": 14 },
    { "id": "style_office", "label": "Style Professionnel (Business Casual)", "group": "style", "size": 14 }
  ],
  "edges": [
    // Rattachement des catégories au dressing
    { "source": "mon_dressing", "target": "cat_hauts", "label": "Contient" },
    { "source": "mon_dressing", "target": "cat_bas", "label": "Contient" },
    { "source": "mon_dressing", "target": "cat_vestes", "label": "Contient" },
    
    // Rangement des vêtements dans leurs catégories
    { "source": "cat_hauts", "target": "item_chemise_blanche", "label": "Type" },
    { "source": "cat_hauts", "target": "item_tshirt_marin", "label": "Type" },
    { "source": "cat_bas", "target": "item_jean_brut", "label": "Type" },
    { "source": "cat_bas", "target": "item_pantalon_toile", "label": "Type" },
    { "source": "cat_vestes", "target": "item_blazer_marine", "label": "Type" },
    
    // Liens Vêtements -> Saisons (Certains vêtements font les deux)
    { "source": "item_chemise_blanche", "target": "saison_ete", "label": "Idéal en" },
    { "source": "item_tshirt_marin", "target": "saison_ete", "label": "Idéal en" },
    { "source": "item_tshirt_marin", "target": "saison_mi_saison", "label": "Se porte à" },
    { "source": "item_jean_brut", "target": "saison_mi_saison", "label": "Idéal à" },
    { "source": "item_pantalon_toile", "target": "saison_ete", "label": "Idéal en" },
    { "source": "item_blazer_marine", "target": "saison_mi_saison", "label": "Idéal à" },
    
    // Liens Vêtements -> Style (Le cœur de la garde-robe capsule)
    { "source": "item_tshirt_marin", "target": "style_casual", "label": "Donne un look" },
    { "source": "item_chemise_blanche", "target": "style_office", "label": "Parfait pour un look" },
    { "source": "item_blazer_marine", "target": "style_office", "label": "Structure le look" },
    
    // Associations de tenues magiques (Le Mix & Match direct entre vêtements)
    { "source": "item_chemise_blanche", "target": "item_jean_brut", "label": "S'associe très bien avec" },
    { "source": "item_chemise_blanche", "target": "item_pantalon_toile", "label": "S'associe très bien avec" },
    { "source": "item_tshirt_marin", "target": "item_jean_brut", "label": "S'associe très bien avec" },
    { "source": "item_blazer_marine", "target": "item_jean_brut", "label": "Se superpose sur" },
    { "source": "item_blazer_marine", "target": "item_chemise_blanche", "label": "Se superpose sur" }
  ]
},
  {
  "id": "theme-musique-samples",
  "title": "Une Généalogie du Son",
  "category": "Pop Culture",
  "description": "Cartographie des samples et des influences à travers les générations de musiciens.",
  "longDescription": "Rien ne se perd, tout se transforme. Ce graphe retrace comment un morceau de funk des années 70 est devenu la fondation de hits majeurs du Hip-Hop et de la French Touch dans les décennies suivantes.",
  "nodes": [
    { "id": "racine_musique", "label": "Histoire du Sample", "group": "racine", "size": 28 },
    // Artistes / Morceaux Originaux
    { "id": "winstons", "label": "The Winstons - Amen, Brother (1969)", "group": "original", "size": 22 },
    { "id": "edwin_birdsong", "label": "Edwin Birdsong - Cola Bottle Baby (1979)", "group": "original", "size": 20 },
    // Artistes qui ont samplé
    { "id": "daft_punk", "label": "Daft Punk - Harder, Better, Faster, Stronger (2001)", "group": "moderne", "size": 18 },
    { "id": "kanye_west", "label": "Kanye West - Stronger (2007)", "group": "moderne", "size": 18 },
    { "id": "nwa", "label": "N.W.A - Straight Outta Compton (1988)", "group": "moderne", "size": 16 },
    { "id": "prodigy", "label": "The Prodigy - Firestarter (1996)", "group": "moderne", "size": 16 },
    // Genres musicaux
    { "id": "genre_hiphop", "label": "Hip-Hop / Rap", "group": "genre", "size": 14 },
    { "id": "genre_drum_bass", "label": "Drum and Bass", "group": "genre", "size": 14 },
    { "id": "genre_french_touch", "label": "French Touch", "group": "genre", "size": 14 }
  ],
  "edges": [
    { "source": "racine_musique", "target": "winstons", "label": "Source rythmique" },
    { "source": "racine_musique", "target": "edwin_birdsong", "label": "Source mélodique" },
    // L'impact de "Amen, Brother" (Le Amen Break)
    { "source": "nwa", "target": "winstons", "label": "A samplé le rythme de" },
    { "source": "prodigy", "target": "winstons", "label": "A accéléré le rythme de" },
    { "source": "nwa", "target": "genre_hiphop", "label": "Pionnier du" },
    { "source": "prodigy", "target": "genre_drum_bass", "label": "A popularisé la" },
    // La chaîne de Daft Punk à Kanye
    { "source": "daft_punk", "target": "edwin_birdsong", "label": "A samplé les synthés de" },
    { "source": "daft_punk", "target": "genre_french_touch", "label": "Pilier de la" },
    { "source": "kanye_west", "target": "daft_punk", "label": "A vocalement samplé" },
    { "source": "kanye_west", "target": "genre_hiphop", "label": "A dominé le" }
  ]
},
  {
  "id": "theme-education-scolarite-france",
  "title": "Le Parcours Scolaire en France",
  "category": "Société & Éducation",
  "description": "Une cartographie chronologique de l'école maternelle aux études supérieures.",
  "longDescription": "Le système éducatif français est structuré en grands cycles bien définis. Ce graphe chronologique retrace le parcours type d'un élève, matérialise l'âge d'obligation scolaire et met en lumière les paliers d'orientation majeurs.",
  "nodes": [
    { "id": "systeme_educatif", "label": "Scolarité Obligatoire", "group": "racine", "size": 28 },
    
    // Premier Degré (École primaire)
    { "id": "cycle_maternelle", "label": "École Maternelle (Petite, Moyenne, Grande Section)", "group": "premier_degre", "size": 20 },
    { "id": "cycle_elementaire", "label": "École Élémentaire (CP, CE1, CE2, CM1, CM2)", "group": "premier_degre", "size": 24 },
    
    // Second Degré (Collège et Lycée)
    { "id": "cycle_college", "label": "Le Collège (de la 6ème à la 3ème)", "group": "second_degre", "size": 22 },
    { "id": "filiere_lycee_general", "label": "Lycée Général & Technologique (Seconde, Première, Terminale)", "group": "orientation", "size": 18 },
    { "id": "filiere_lycee_pro", "label": "Voie Professionnelle (Bac Pro / CAP)", "group": "orientation", "size": 18 },
    
    // Les Grands Examens / Diplômes Jalons
    { "id": "diplome_brevet", "label": "Diplôme National du Brevet (DNB)", "group": "examen", "size": 14 },
    { "id": "diplome_bac", "label": "Le Baccalauréat", "group": "examen", "size": 15 },
    
    // L'Après-Bac (Ouverture)
    { "id": "post_bac", "label": "Enseignement Supérieur (Université, Prépas, BTS)", "group": "superieur", "size": 16 }
  ],
  "edges": [
    // Fil chronologique principal
    { "source": "systeme_educatif", "target": "cycle_maternelle", "label": "Début de l'obligation à 3 ans" },
    { "source": "cycle_maternelle", "target": "cycle_elementaire", "label": "Entrée au CP à 6 ans" },
    { "source": "cycle_elementaire", "target": "cycle_college", "label": "Entrée en 6ème à 11 ans" },
    
    // Le passage du Brevet au Collège
    { "source": "cycle_college", "target": "diplome_brevet", "label": "S'achève par l'examen du" },
    
    // Bifurcation / Orientation après la 3ème
    { "source": "cycle_college", "target": "filiere_lycee_general", "label": "Orientation possible en fin de 3ème" },
    { "source": "cycle_college", "target": "filiere_lycee_pro", "label": "Orientation possible en fin de 3ème" },
    
    // Les diplômes de fin de second degré
    { "source": "filiere_lycee_general", "target": "diplome_bac", "label": "Prépare au" },
    { "source": "filiere_lycee_pro", "target": "diplome_bac", "label": "Prépare au" },
    
    // Passerelle vers le supérieur
    { "source": "diplome_bac", "target": "post_bac", "label": "Ouvre l'accès à l'" }
  ]
},
{
  "id": "theme-cinema-dune",
  "title": "L'Échiquier d'Arrakis (Dune)",
  "category": "Cinéma & Séries",
  "description": "Les relations politiques, familiales et mystiques de l'univers de Frank Herbert.",
  "longDescription": "Suivez les fils de la trahison et de la prophétie. Ce graphe relie les grandes Maisons, les personnages clés et les forces écologiques de la planète de sable Arrakis.",
  "nodes": [
    { "id": "arrakis", "label": "Arrakis (Dune)", "group": "racine", "size": 28 },
    // Factions / Maisons
    { "id": "maison_atreides", "label": "Maison Atréides", "group": "faction", "size": 20 },
    { "id": "maison_harkonnen", "label": "Maison Harkonnen", "group": "faction", "size": 20 },
    { "id": "fremen", "label": "Les Fremen (Peuple)", "group": "faction", "size": 18 },
    // Personnages
    { "id": "paul", "label": "Paul Atréides", "group": "personnage", "size": 22 },
    { "id": "jessica", "label": "Dame Jessica", "group": "personnage", "size": 16 },
    { "id": "vladimir", "label": "Baron Vladimir Harkonnen", "group": "personnage", "size": 18 },
    { "id": "chani", "label": "Chani", "group": "personnage", "size": 16 },
    // Éléments clés
    { "id": "epice", "label": "L'Épice (Mélange)", "group": "ressource", "size": 18 },
    { "id": "ver_sable", "label": "Shai-Hulud (Ver de sable)", "group": "creature", "size": 18 }
  ],
  "edges": [
    { "source": "arrakis", "target": "epice", "label": "Unique producteur de" },
    { "source": "ver_sable", "target": "arrakis", "label": "Façonne l'écosystème de" },
    { "source": "ver_sable", "target": "epice", "label": "Crée indirectement" },
    // Liens de factions
    { "source": "paul", "target": "maison_atreides", "label": "Héritier de" },
    { "source": "jessica", "target": "maison_atreides", "label": "Concubine du Duc de" },
    { "source": "vladimir", "target": "maison_harkonnen", "label": "Dirigeant de" },
    // Conflits et Alliances
    { "source": "maison_atreides", "target": "maison_harkonnen", "label": "Guerre ancestrale contre" },
    { "source": "paul", "target": "jessica", "label": "Fils de" },
    { "source": "paul", "target": "fremen", "label": "Devient le Messie (Muad'Dib) des" },
    { "source": "paul", "target": "chani", "label": "Amoureux de" },
    { "source": "chani", "target": "fremen", "label": "Guerrière" },
    { "source": "fremen", "target": "ver_sable", "label": "Révère et chevauche" }
  ]
},
{
  "id": "theme-finance-private-equity-criteria",
  "title": "Due Diligence en Private Equity",
  "category": "Finance & Investissement",
  "description": "Les critères clés pour analyser et choisir un fonds de capital-investissement.",
  "longDescription": "L'investissement en Private Equity engage des capitaux sur le long terme. Ce graphe cartographie les piliers indispensables à analyser lors de la Due Diligence : de la stratégie de l'équipe de gestion aux métriques financières de performance, en passant par les risques d'illiquidité.",
  "nodes": [
    { "id": "racine_pe", "label": "Sélection du Fonds PE", "group": "racine", "size": 28 },
    
    // Piliers de la Due Diligence
    { "id": "pilier_equipe", "label": "Équipe de Gestion (Track Record)", "group": "pilier", "size": 20 },
    { "id": "pilier_strategie", "label": "Thèse d'Investissement", "group": "pilier", "size": 20 },
    { "id": "pilier_financier", "label": "Performance Financière", "group": "pilier", "size": 20 },
    { "id": "pilier_risques", "label": "Gestion des Risques & Alignement", "group": "pilier", "size": 20 },
    
    // Sous-critères d'analyse
    { "id": "crit_stade", "label": "Stade de maturité (LBO, Venture, Growth)", "group": "critere", "size": 16 },
    { "id": "crit_historique", "label": "Performance des fonds précédents", "group": "critere", "size": 16 },
    { "id": "crit_irr", "label": "TRI (Taux de Rendement Interne)", "group": "critere", "size": 15 },
    { "id": "crit_moic", "label": "MOIC (Multiple du Capital Investi)", "group": "critere", "size": 15 },
    { "id": "crit_illiquidite", "label": "Horizon de blocage (Période de lock-up)", "group": "critere", "size": 16 },
    { "id": "crit_gp_commit", "label": "GP Commitment (Alignement d'intérêts)", "group": "critere", "size": 16 }
  ],
  "edges": [
    // Connexion de la racine aux grands piliers
    { "source": "racine_pe", "target": "pilier_equipe", "label": "Évaluer l'" },
    { "source": "racine_pe", "target": "pilier_strategie", "label": "Valider la" },
    { "source": "racine_pe", "target": "pilier_financier", "label": "Analyser la" },
    { "source": "racine_pe", "target": "pilier_risques", "label": "Mesurer la" },
    
    // Liens Thèse / Stratégie
    { "source": "pilier_strategie", "target": "crit_stade", "label": "Définit le" },
    
    // Liens Équipe de gestion
    { "source": "pilier_equipe", "target": "crit_historique", "label": "Se mesure par l'" },
    
    // Liens Indicateurs Financiers
    { "source": "pilier_financier", "target": "crit_irr", "label": "Mesure la vitesse de performance via le" },
    { "source": "pilier_financier", "target": "crit_moic", "label": "Mesure la création de valeur absolue via le" },
    { "source": "crit_historique", "target": "crit_irr", "label": "Permet de vérifier la régularité du" },
    
    // Liens Risques & Alignement
    { "source": "pilier_risques", "target": "crit_illiquidite", "label": "Intègre la contrainte d'" },
    { "source": "pilier_risques", "target": "crit_gp_commit", "label": "Exige un fort" }
  ]
},
{
  "id": "theme-skilltree-frontend",
  "title": "Devenir Développeur Front-End",
  "category": "Développement Personnel",
  "description": "Le parcours d'apprentissage guidé et les prérequis pour maîtriser le web moderne.",
  "longDescription": "Visualisez votre progression comme dans un jeu vidéo. Ce graphe de compétences (Skill Tree) indique par quoi commencer et quelles technologies débloquer pour devenir un expert Front-End.",
  "nodes": [
    { "id": "metier_frontend", "label": "Expert Front-End", "group": "racine", "size": 28 },
    // Les Fondations (Niveau 1)
    { "id": "html", "label": "HTML5 (Structure)", "group": "fondation", "size": 20 },
    { "id": "css", "label": "CSS3 (Style)", "group": "fondation", "size": 20 },
    { "id": "javascript", "label": "JavaScript ES6 (Logique)", "group": "fondation", "size": 22 },
    // Compétences Intermédiaires (Niveau 2)
    { "id": "flexbox", "label": "Layouts (Flexbox/Grid)", "group": "intermediaire", "size": 15 },
    { "id": "git", "label": "Git & GitHub", "group": "intermediaire", "size": 16 },
    { "id": "api_fetch", "label": "Appels API (Fetch/Axios)", "group": "intermediaire", "size": 15 },
    // Spécialisations / Frameworks (Niveau 3)
    { "id": "react", "label": "React.js / Next.js", "group": "avance", "size": 18 },
    { "id": "tailwind", "label": "Tailwind CSS", "group": "avance", "size": 14 },
    { "id": "typescript", "label": "TypeScript", "group": "avance", "size": 16 }
  ],
  "edges": [
    { "source": "metier_frontend", "target": "html", "label": "Requiert la base" },
    // Liens de dépendance (A pour apprendre B)
    { "source": "html", "target": "css", "label": "Indissociable de" },
    { "source": "css", "target": "flexbox", "label": "Nécessaire pour" },
    { "source": "flexbox", "target": "tailwind", "label": "Facilite l'usage de" },
    { "source": "html", "target": "javascript", "label": "Donne de la dynamique via" },
    { "source": "javascript", "target": "api_fetch", "label": "Indispensable pour" },
    { "source": "javascript", "target": "react", "label": "Est le socle de" },
    { "source": "javascript", "target": "typescript", "label": "Évolue vers" },
    // Consolidation finale vers l'objectif
    { "source": "react", "target": "metier_frontend", "label": "Valide le niveau pour" },
    { "source": "git", "target": "metier_frontend", "label": "Compétence transverse exigée pour" }
  ]
},
{
  "id": "theme-mode-entretien-textile",
  "title": "Le Guide d'Entretien des Matières",
  "category": "Maison & Mode",
  "description": "Une cartographie pour laver, sécher et protéger vos vêtements selon leur fibre.",
  "longDescription": "Chaque textile a ses propres exigences chimiques et thermiques. Ce graphe connecte les matières les plus courantes de nos dressings aux températures maximales, aux modes de lavage recommandés et aux pièges à éviter pour faire durer vos vêtements.",
  "nodes": [
    { "id": "racine_entretien", "label": "Soin du Linge", "group": "racine", "size": 28 },
    
    // Les Familles de Matières
    { "id": "mat_coton", "label": "Coton (Fibre végétale)", "group": "matiere", "size": 20 },
    { "id": "mat_lin", "label": "Lin (Fibre végétale)", "group": "matiere", "size": 18 },
    { "id": "mat_laine", "label": "Laine & Cachemire (Fibre animale)", "group": "matiere", "size": 20 },
    { "id": "mat_soie", "label": "Soie (Fibre animale)", "group": "matiere", "size": 18 },
    { "id": "mat_polyester", "label": "Polyester & Synthétiques", "group": "matiere", "size": 20 },
    
    // Températures de Lavage
    { "id": "temp_froid", "label": "À froid ou 20°C", "group": "temperature", "size": 15 },
    { "id": "temp_30", "label": "30°C (Cycle Éco / Quotidien)", "group": "temperature", "size": 16 },
    { "id": "temp_60", "label": "60°C (Haute Température)", "group": "temperature", "size": 15 },
    
    // Modes d'Entretien / Action
    { "id": "mode_main", "label": "Lavage à la main (ou cycle Berceau)", "group": "mode", "size": 16 },
    { "id": "mode_machine", "label": "Lavage en machine standard", "group": "mode", "size": 16 },
    { "id": "mode_essorage_doux", "label": "Essorage réduit (600 tours max)", "group": "mode", "size": 14 },
    { "id": "mode_tambour_interdit", "label": "Sèche-linge interdit (Séchage à plat)", "group": "mode", "size": 15 },
    
    // Risques / Alertes
    { "id": "risq_retrecissement", "label": "Risque de Rétrécissement", "group": "danger", "size": 14 },
    { "id": "risq_feutrage", "label": "Risque de Feutrage (Fibres cassées)", "group": "danger", "size": 14 }
  ],
  "edges": [
    // Rattachement des matières à la racine
    { "source": "racine_entretien", "target": "mat_coton", "label": "Trier le" },
    { "source": "racine_entretien", "target": "mat_lin", "label": "Trier le" },
    { "source": "racine_entretien", "target": "mat_laine", "label": "Trier la" },
    { "source": "racine_entretien", "target": "mat_soie", "label": "Trier la" },
    { "source": "racine_entretien", "target": "mat_polyester", "label": "Trier le" },
    
    // Paramétrage du COTON & LIN (Résistants)
    { "source": "mat_coton", "target": "temp_60", "label": "Supporte jusqu'à" },
    { "source": "mat_coton", "target": "mode_machine", "label": "Se lave en" },
    { "source": "mat_lin", "target": "temp_30", "label": "Se lave idéalement à" },
    { "source": "mat_lin", "target": "mode_essorage_doux", "label": "Exige un" },
    
    // Paramétrage de la LAINE & CACHEMIRE (Très fragiles)
    { "source": "mat_laine", "target": "temp_froid", "label": "Exige une eau" },
    { "source": "mat_laine", "target": "mode_main", "label": "Recommande le" },
    { "source": "mat_laine", "target": "mode_tambour_interdit", "label": "Exige" },
    { "source": "mat_laine", "target": "risq_feutrage", "label": "Sensible au" },
    { "source": "mat_laine", "target": "risq_retrecissement", "label": "En cas de chaleur" },
    
    // Paramétrage de la SOIE
    { "source": "mat_soie", "target": "temp_froid", "label": "Se lave" },
    { "source": "mat_soie", "target": "mode_main", "label": "Préfère le" },
    { "source": "mat_soie", "target": "mode_tambour_interdit", "label": "Exige" },
    
    // Paramétrage du POLYESTER / SYNTHÉTIQUES
    { "source": "mat_polyester", "target": "temp_30", "label": "Se lave à" },
    { "source": "mat_polyester", "target": "mode_machine", "label": "Passe en" },
    { "source": "mat_polyester", "target": "risq_retrecissement", "label": "Une eau trop chaude provoque le" }
  ]
},
{
  "id": "theme-geographie-fuseaux-horaires",
  "title": "La Toile des Fuseaux Horaires",
  "category": "Géographie & Travail",
  "description": "Une cartographie des décalages horaires mondiaux et des fenêtres de travail partagées.",
  "longDescription": "La Terre tourne, et avec elle, nos horloges. Ce graphe connecte les grands fuseaux horaires de référence (UTC) à des métropoles mondiales, tout en mettant en lumière le phénomène de l'heure d'été et les fenêtres de chevauchement idéales pour les réunions internationales.",
  "nodes": [
    { "id": "racine_temps_mondial", "label": "Le Temps Mondial", "group": "racine", "size": 28 },
    
    // Fuseaux Horaires de Référence (Pivots)
    { "id": "fuseau_utc_0", "label": "UTC±0 (Temps Universel)", "group": "fuseau", "size": 22 },
    { "id": "fuseau_utc_1", "label": "UTC+1 (Europe Centrale)", "group": "fuseau", "size": 20 },
    { "id": "fuseau_utc_minus_5", "label": "UTC-5 (Heure de l'Est)", "group": "fuseau", "size": 20 },
    { "id": "fuseau_utc_9", "label": "UTC+9 (Heure du Japon)", "group": "fuseau", "size": 20 },
    
    // Grandes Métropoles
    { "id": "ville_londres", "label": "Londres", "group": "ville", "size": 16 },
    { "id": "ville_paris", "label": "Paris", "group": "ville", "size": 16 },
    { "id": "ville_new_york", "label": "New York", "group": "ville", "size": 16 },
    { "id": "ville_tokyo", "label": "Tokyo", "group": "ville", "size": 16 },
    
    // Spécificités Régionales (Changements d'heure)
    { "id": "spec_dst_europe", "label": "Heure d'été (Changement Mars/Octobre)", "group": "regle", "size": 15 },
    { "id": "spec_no_dst", "label": "Heure Fixe (Aucun changement)", "group": "regle", "size": 15 },
    
    // Créneaux horaires de collaboration (Overlap de travail)
    { "id": "creneau_paris_ny", "label": "Fenêtre Paris - NY (14h - 18h Paris)", "group": "collaboration", "size": 14 },
    { "id": "creneau_tokyo_paris", "label": "Fenêtre Tokyo - Paris (9h - 11h Paris)", "group": "collaboration", "size": 14 }
  ],
  "edges": [
    // Rattachement des fuseaux à la racine
    { "source": "racine_temps_mondial", "target": "fuseau_utc_0", "label": "Base" },
    { "source": "racine_temps_mondial", "target": "fuseau_utc_1", "label": "Avance de 1h sur" },
    { "source": "racine_temps_mondial", "target": "fuseau_utc_9", "label": "Avance de 9h sur" },
    { "source": "racine_temps_mondial", "target": "fuseau_utc_minus_5", "label": "Retard de 5h sur" },
    
    // Assignation des villes à leur fuseau standard
    { "source": "ville_londres", "target": "fuseau_utc_0", "label": "Est calée sur" },
    { "source": "ville_paris", "target": "fuseau_utc_1", "label": "Est calée sur" },
    { "source": "ville_new_york", "target": "fuseau_utc_minus_5", "label": "Est calée sur" },
    { "source": "ville_tokyo", "target": "fuseau_utc_9", "label": "Est calée sur" },
    
    // Application des règles de changement d'heure
    { "source": "ville_paris", "target": "spec_dst_europe", "label": "Applique l'" },
    { "source": "ville_londres", "target": "spec_dst_europe", "label": "Applique l'" },
    { "source": "ville_tokyo", "target": "spec_no_dst", "label": "Reste à l'" },
    
    // Interconnexions des créneaux de travail (Le "Overlap")
    { "source": "creneau_paris_ny", "target": "ville_paris", "label": "Fin de journée pour" },
    { "source": "creneau_paris_ny", "target": "ville_new_york", "label": "Début de journée pour" },
    
    { "source": "creneau_tokyo_paris", "target": "ville_tokyo", "label": "Fin de journée pour" },
    { "source": "creneau_tokyo_paris", "target": "ville_paris", "label": "Début de journée pour" }
  ]
},
{
  "id": "theme-cybersecurite-particuliers",
  "title": "Guide de Cybersécurité pour les Particuliers",
  "category": "Technologie & Sécurité",
  "description": "Une cartographie des menaces en ligne et des réflexes pour s'en protéger.",
  "longDescription": "Les cyberattaques ne visent pas que les entreprises. Ce graphe structure les pièges les plus fréquents du quotidien numérique (phishing, rançongiciels, piratage de compte) et vous connecte directement aux meilleures pratiques pour sécuriser votre vie numérique.",
  "nodes": [
    { "id": "cyber_protection", "label": "Ma Sécurité Numérique", "group": "racine", "size": 28 },
    
    // Les Menaces / Cyberattaques courantes
    { "id": "att_phishing", "label": "Hameçonnage (Phishing / Smishing)", "group": "attaque", "size": 22 },
    { "id": "att_mots_passe", "label": "Piratage de Compte (Force brute / Fuite de données)", "group": "attaque", "size": 22 },
    { "id": "att_ransomware", "label": "Rançongiciel (Ransomware)", "group": "attaque", "size": 20 },
    { "id": "att_arnaque_virement", "label": "Arnaque au Faux Conseiller Bancaire", "group": "attaque", "size": 20 },
    
    // Les Canaux / Vecteurs de pièges
    { "id": "canal_email_sms", "label": "E-mails & SMS Frauduleux", "group": "vecteur", "size": 16 },
    { "id": "canal_appel", "label": "Appels Téléphoniques (Spoofing du numéro)", "group": "vecteur", "size": 16 },
    { "id": "canal_piece_jointe", "label": "Pièces Jointes ou Liens Suspects", "group": "vecteur", "size": 16 },
    
    // Les Bonnes Pratiques / Réflexes de défense
    { "id": "prat_mfa", "label": "Double Authentification (MFA / 2FA)", "group": "defense", "size": 18 },
    { "id": "prat_gestionnaire", "label": "Utiliser un Gestionnaire de Mots de Passe", "group": "defense", "size": 18 },
    { "id": "prat_sauvegarde", "label": "Sauvegardes régulières (Disque externe / Cloud)", "group": "defense", "size": 16 },
    { "id": "prat_raccrocher", "label": "Raccrocher et rappeler soi-même sa banque", "group": "defense", "size": 16 },
    { "id": "prat_cybermalveillance", "label": "Signalement (Cybermalveillance.gouv.fr)", "group": "defense", "size": 15 }
  ],
  "edges": [
    // Rattachement des menaces à la racine
    { "source": "cyber_protection", "target": "att_phishing", "label": "Menace majeure" },
    { "source": "cyber_protection", "target": "att_mots_passe", "label": "Menace majeure" },
    { "source": "cyber_protection", "target": "att_ransomware", "label": "Menace majeure" },
    { "source": "cyber_protection", "target": "att_arnaque_virement", "label": "Menace en forte hausse" },
    
    // Liens Attaques -> Vecteurs d'activation
    { "source": "att_phishing", "target": "canal_email_sms", "label": "Prend la forme d'" },
    { "source": "att_phishing", "target": "canal_piece_jointe", "label": "Contient souvent des" },
    { "source": "att_ransomware", "target": "canal_piece_jointe", "label": "S'infiltre via les" },
    { "source": "att_arnaque_virement", "target": "canal_appel", "label": "Se déroule par" },
    
    // Liens Attaques -> Solutions / Bonnes Pratiques (Le cœur de la prévention)
    { "source": "att_phishing", "target": "prat_cybermalveillance", "label": "À transférer et signaler sur" },
    
    { "source": "att_mots_passe", "target": "prat_gestionnaire", "label": "Contré par des clés uniques via un" },
    { "source": "att_mots_passe", "target": "prat_mfa", "label": "Bloqué à 99% grâce à la" },
    
    { "source": "att_ransomware", "target": "prat_sauvegarde", "label": "Neutralisé en amont par des" },
    
    { "source": "att_arnaque_virement", "target": "prat_raccrocher", "label": "Réflexe absolu :" },
    
    // Liens transverses entre bonnes pratiques
    { "source": "prat_gestionnaire", "target": "prat_mfa", "label": "Permet de stocker les codes de" }
  ]
},
{
  "id": "theme-survie-autonomie-blackout",
  "title": "Guide d'Autonomie en cas de Blackout",
  "category": "Sécurité & Prévoyance",
  "description": "Une cartographie des réflexes de survie et de l'organisation pour faire face à une panne générale.",
  "longDescription": "Une panne électrique majeure paralyse instantanément nos infrastructures modernes (eau courante, chauffage, réseaux mobiles). Ce graphe structure les priorités vitales de votre foyer pour les premières 72 heures, en associant chaque besoin aux solutions alternatives et aux consignes de sécurité.",
  "nodes": [
    { "id": "survie_blackout", "label": "Autonomie Blackout", "group": "racine", "size": 28 },
    
    // Les Piliers des Besoins Vitaux
    { "id": "besoin_eau", "label": "1. Eau & Hydratation (Priorité N°1)", "group": "besoin", "size": 22 },
    { "id": "besoin_thermique", "label": "2. Chaleur & Énergie", "group": "besoin", "size": 22 },
    { "id": "besoin_com", "label": "3. Information & Communication", "group": "besoin", "size": 20 },
    { "id": "besoin_alimentation", "label": "4. Alimentation d'Urgence", "group": "besoin", "size": 20 },
    
    // Matériel & Actions de Secours
    { "id": "sol_stock_eau", "label": "Stock de sécurité (3L / jour / personne)", "group": "solution", "size": 16 },
    { "id": "sol_filtration", "label": "Filtre à eau par gravité (ou pastilles de purification)", "group": "solution", "size": 15 },
    { "id": "sol_radio", "label": "Radio à manivelle / solaire (Dynamo FM/AM)", "group": "solution", "size": 16 },
    { "id": "sol_gaz", "label": "Réchaud de camping à gaz", "group": "solution", "size": 16 },
    { "id": "sol_vetements", "label": "Règle des 3 couches (Laine, Polaire, Coupe-vent)", "group": "solution", "size": 15 },
    
    // Les Dangers Majeurs / Pièges de sécurité
    { "id": "dang_intoxication", "label": "🚨 Risque d'Asphyxie (Monoxyde de Carbone)", "group": "danger", "size": 15 },
    { "id": "dang_rupture_chaine", "label": "🚨 Rupture de la chaîne du froid", "group": "danger", "size": 15 },
    
    // Consignes d'action immédiates
    { "id": "act_frigo", "label": "Garder le congélateur et le frigo fermés", "group": "action", "size": 14 },
    { "id": "act_aeration", "label": "Ne jamais utiliser un chauffage d'appoint à gaz en continu", "group": "action", "size": 14 }
  ],
  "edges": [
    // Connexion de la racine aux grands besoins
    { "source": "survie_blackout", "target": "besoin_eau", "label": "Sécuriser l'" },
    { "source": "survie_blackout", "target": "besoin_thermique", "label": "Maintenir la" },
    { "source": "survie_blackout", "target": "besoin_com", "label": "Rétablir l'" },
    { "source": "survie_blackout", "target": "besoin_alimentation", "label": "Gérer l'" },
    
    // Liens Eau
    { "source": "besoin_eau", "target": "sol_stock_eau", "label": "Nécessite un" },
    { "source": "besoin_eau", "target": "sol_filtration", "label": "En cas d'épuisement, utiliser un" },
    
    // Liens Chaleur & Énergie
    { "source": "besoin_thermique", "target": "sol_vetements", "label": "Conserver les calories via la" },
    { "source": "besoin_thermique", "target": "sol_gaz", "label": "Permet de chauffer l'eau avec un" },
    { "source": "sol_gaz", "target": "dang_intoxication", "label": "Une mauvaise utilisation crée un" },
    { "source": "dang_intoxication", "target": "act_aeration", "label": "Évité par la consigne :" },
    
    // Liens Communication
    { "source": "besoin_com", "target": "sol_radio", "label": "Écouter les consignes de l'État (France Bleu) via" },
    
    // Liens Alimentation
    { "source": "besoin_alimentation", "target": "dang_rupture_chaine", "label": "Le manque d'électricité provoque la" },
    { "source": "dang_rupture_chaine", "target": "act_frigo", "label": "Limité par la consigne :" },
    { "source": "besoin_alimentation", "target": "sol_gaz", "label": "Nécessite la cuisson au" }
  ]
},
{
  "id": "theme-administration-creation-entreprise-france",
  "title": "Le Parcours de Création d'Entreprise",
  "category": "Business & Administration",
  "description": "Une cartographie chronologique des étapes pour lancer sa boîte en France.",
  "longDescription": "Créer une entreprise demande de suivre un parcours réglementaire précis. Ce graphe vous guide pas à pas, du business plan à l'immatriculation officielle, en passant par le choix crucial du statut juridique et la demande d'aides de l'État.",
  "nodes": [
    { "id": "racine_creation", "label": "Lancer mon Entreprise", "group": "racine", "size": 28 },
    
    // Étape 1 : La Préparation
    { "id": "etape_preparation", "label": "1. Validation du Projet", "group": "etape", "size": 22 },
    { "id": "doc_etude_marche", "label": "Étude de Marché", "group": "document", "size": 16 },
    { "id": "doc_business_plan", "label": "Business Plan & Prévisionnel", "group": "document", "size": 16 },
    
    // Étape 2 : Le Choix du Statut Juridique (Bifurcation majeure)
    { "id": "etape_statut", "label": "2. Choix Juridique", "group": "etape", "size": 22 },
    { "id": "statut_ei", "label": "Entreprise Individuelle (Micro-Entreprise)", "group": "statut", "size": 18 },
    { "id": "statut_societe", "label": "Société commerciale (SASU / EURL / SAS / SARL)", "group": "statut", "size": 18 },
    
    // Étape 3 : Les Formalités Administratives
    { "id": "etape_formalites", "label": "3. Immatriculation Officielle", "group": "etape", "size": 22 },
    { "id": "admin_guichet_unique", "label": "Le Guichet Unique (INPI)", "group": "administration", "size": 20 },
    { "id": "doc_statuts", "label": "Rédaction des Statuts", "group": "document", "size": 15 },
    { "id": "admin_banque", "label": "Dépôt du Capital Social à la Banque", "group": "administration", "size": 15 },
    
    // Les Aides à la création (Accompagnement)
    { "id": "aide_acre", "label": "ACRE (Exonération partielle de charges)", "group": "aide", "size": 16 },
    { "id": "aide_france_travail", "label": "France Travail (Maintien ARE ou versement ARCE)", "group": "aide", "size": 16 }
  ],
  "edges": [
    // Fil conducteur principal (Chronologie)
    { "source": "racine_creation", "target": "etape_preparation", "label": "Phase d'idéation" },
    { "source": "etape_preparation", "target": "etape_statut", "label": "Puis vient le" },
    { "source": "etape_statut", "target": "etape_formalites", "label": "Puis viennent les" },
    
    // Liens de la Phase 1 (Préparation)
    { "source": "etape_preparation", "target": "doc_etude_marche", "label": "Nécessite une" },
    { "source": "etape_preparation", "target": "doc_business_plan", "label": "Débouche sur le" },
    
    // Liens de la Phase 2 (Orientation Statut)
    { "source": "etape_statut", "target": "statut_ei", "label": "Option simplifiée" },
    { "source": "etape_statut", "target": "statut_societe", "label": "Option pour s'associer/grandir" },
    
    // Liens de la Phase 3 (Formalités selon statut)
    { "source": "statut_ei", "target": "admin_guichet_unique", "label": "S'immatricule directement sur le" },
    
    { "source": "statut_societe", "target": "doc_statuts", "label": "Exige obligatoirement la" },
    { "source": "doc_statuts", "target": "admin_banque", "label": "Permet de bloquer les fonds via le" },
    { "source": "admin_banque", "target": "admin_guichet_unique", "label": "Fournit l'attestation nécessaire au" },
    
    // Activation des aides d'État au moment des formalités
    { "source": "admin_guichet_unique", "target": "aide_acre", "label": "Permet de cocher la demande d'" },
    { "source": "etape_formalites", "target": "aide_france_travail", "label": "Permet de solliciter les options de" }
  ]
},
{
  "id": "theme-administration-identite-numerique-gouv-officiel",
  "title": "L'Identité Numérique Officielle France Identité",
  "category": "Administration & Sécurité",
  "description": "Le parcours de création et de certification conforme aux étapes du site gouv.fr.",
  "longDescription": "L'application France Identité permet de générer une identité numérique régalienne. Ce graphe retrace les étapes officielles : de la configuration initiale avec le code PIN à 6 chiffres jusqu'à la certification en mairie par comparaison d'empreintes.",
  "nodes": [
    { "id": "racine_identite", "label": "France Identité (gouv.fr)", "group": "racine", "size": 28 },
    
    // Étape 1 : Les Prérequis de base
    { "id": "req_cni_nouveau_format", "label": "Nouvelle Carte d'Identité (Format carte bancaire)", "group": "requis", "size": 18 },
    { "id": "req_smartphone_compatible", "label": "Smartphone Android ou iOS équipé du NFC", "group": "requis", "size": 16 },
    
    // Étape 2 : Création de l'Identité Numérique (Niveau de base)
    { "id": "act_scan_carte", "label": "1. Scanner la carte en NFC avec le téléphone", "group": "action", "size": 16 },
    { "id": "act_definir_pin", "label": "2. Définir le Code PIN personnel à 6 chiffres", "group": "action", "size": 16 },
    { "id": "service_identite_numerique", "label": "Identité Numérique Active", "group": "statut", "size": 20 },
    
    // Étape 3 : Demande de Certification (Niveau élevé)
    { "id": "act_demande_certif", "label": "3. Initier la demande de certification dans l'App", "group": "action", "size": 15 },
    { "id": "doc_qr_code", "label": "Génération d'un QR Code de certification", "group": "document", "size": 15 },
    { "id": "act_passage_mairie", "label": "4. Comparaison d'empreintes en Mairie (sans RDV)", "group": "action", "size": 18 },
    { "id": "service_identite_certifiee", "label": "Identité Numérique Certifiée", "group": "statut", "size": 22 },
    
    // Les Droits et Usages officiels selon le niveau
    { "id": "usage_justificatif", "label": "Générer un justificatif d'identité à usage unique", "group": "usage", "size": 15 },
    { "id": "usage_permis", "label": "Importer son Permis de Conduire numérique", "group": "usage", "size": 15 },
    { "id": "usage_franceconnect", "label": "Se connecter aux services via FranceConnect", "group": "usage", "size": 15 },
    { "id": "usage_procuration", "label": "Faire une Procuration de vote 100% dématérialisée", "group": "usage", "size": 16 }
  ],
  "edges": [
    // Condition initiale pour démarrer
    { "source": "racine_identite", "target": "req_cni_nouveau_format", "label": "Exige" },
    { "source": "racine_identite", "target": "req_smartphone_compatible", "label": "Exige" },
    
    // Flux de création de base
    { "source": "req_cni_nouveau_format", "target": "act_scan_carte", "label": "Est scannée par" },
    { "source": "req_smartphone_compatible", "target": "act_scan_carte", "label": "Sert à" },
    { "source": "act_scan_carte", "target": "act_definir_pin", "label": "Permet de" },
    { "source": "act_definir_pin", "target": "service_identite_numerique", "label": "Donne accès à" },
    
    // Usages de base ouverts
    { "source": "service_identite_numerique", "target": "usage_justificatif", "label": "Permet de" },
    { "source": "service_identite_numerique", "target": "usage_permis", "label": "Permet de" },
    { "source": "service_identite_numerique", "target": "usage_franceconnect", "label": "Permet de" },
    
    // Flux vers l'Identité Certifiée
    { "source": "service_identite_numerique", "target": "act_demande_certif", "label": "Peut être élevée par" },
    { "source": "act_demande_certif", "target": "doc_qr_code", "label": "Crée le" },
    { "source": "doc_qr_code", "target": "act_passage_mairie", "label": "À présenter lors du" },
    { "source": "act_passage_mairie", "target": "service_identite_certifiee", "label": "Déclenche la validation de" },
    
    // Usage exclusif du niveau Certifié
    { "source": "service_identite_certifiee", "target": "usage_procuration", "label": "Rend possible la" }
  ]
},
{
  "id": "theme-sante-bienfaits-plantes",
  "title": "Le Guide des Plantes et de leurs Bienfaits",
  "category": "Nature & Bien-être",
  "description": "Une cartographie des plantes médicinales, de leurs propriétés et de leurs usages.",
  "longDescription": "La phytothérapie utilise les vertus naturelles des plantes pour soulager les maux du quotidien. Ce graphe structure les plantes phares de la pharmacopée naturelle en les reliant directement à leurs propriétés thérapeutiques et aux modes de préparation recommandés.",
  "nodes": [
    { "id": "racine_plantes", "label": "Le Pouvoir des Plantes", "group": "racine", "size": 28 },
    
    // Les Plantes Références
    { "id": "plante_lavande", "label": "Lavande Vraie", "group": "plante", "size": 20 },
    { "id": "plante_menthe", "label": "Menthe Poivrée", "group": "plante", "size": 20 },
    { "id": "plante_camomille", "label": "Camomille Matricaire", "group": "plante", "size": 18 },
    { "id": "plante_gingembre", "label": "Gingembre (Rhyzome)", "group": "plante", "size": 20 },
    
    // Les Propriétés / Vertus majeures
    { "id": "prop_calmante", "label": "Apaisante & Sédative", "group": "propriete", "size": 18 },
    { "id": "prop_digestive", "label": "Digestive & Antispasmodique", "group": "propriete", "size": 18 },
    { "id": "prop_anti_inflam", "label": "Anti-inflammatoire & Tonique", "group": "propriete", "size": 16 },
    
    // Maux ciblés (Symptômes)
    { "id": "maux_sommeil", "label": "Stress & Troubles du sommeil", "group": "symptome", "size": 16 },
    { "id": "maux_migraine", "label": "Maux de tête & Migraines", "group": "symptome", "size": 15 },
    { "id": "maux_nausees", "label": "Nausées & Transports", "group": "symptome", "size": 15 },
    { "id": "maux_digestion", "label": "Ballonnements & Digestion difficile", "group": "symptome", "size": 16 },
    
    // Formes d'usage (Galénique)
    { "id": "usage_tisane", "label": "Infusion / Tisane (Fleurs/Feuilles séchées)", "group": "usage", "size": 16 },
    { "id": "usage_he", "label": "Huile Essentielle (Haute concentration)", "group": "usage", "size": 16 },
    
    // Contre-indications / Vigilance (Sécurité)
    { "id": "vigilance_he", "label": "⚠️ Précautions d'usage (Femmes enceintes / Enfants)", "group": "alerte", "size": 15 }
  ],
  "edges": [
    // Connexions des plantes à la racine
    { "source": "racine_plantes", "target": "plante_lavande", "label": "Étudier la" },
    { "source": "racine_plantes", "target": "plante_menthe", "label": "Étudier la" },
    { "source": "racine_plantes", "target": "plante_camomille", "label": "Étudier la" },
    { "source": "racine_plantes", "target": "plante_gingembre", "label": "Étudier le" },
    
    // Association Plantes -> Propriétés
    { "source": "plante_lavande", "target": "prop_calmante", "label": "Reconnue comme" },
    { "source": "plante_camomille", "target": "prop_calmante", "label": "Reconnue comme" },
    { "source": "plante_camomille", "target": "prop_digestive", "label": "Agit aussi comme" },
    { "source": "plante_menthe", "target": "prop_digestive", "label": "Possède une action" },
    { "source": "plante_gingembre", "target": "prop_anti_inflam", "label": "Puissant" },
    { "source": "plante_gingembre", "target": "prop_digestive", "label": "Aide à la sphère" },
    
    // Association Propriétés -> Maux ciblés
    { "source": "prop_calmante", "target": "maux_sommeil", "label": "Soulage" },
    { "source": "prop_digestive", "target": "maux_digestion", "label": "Traite les" },
    { "source": "prop_digestive", "target": "maux_nausees", "label": "Calme les" },
    { "source": "plante_menthe", "target": "maux_migraine", "label": "Appliquée sur les tempes contre" },
    
    // Mode de préparation / Forme d'usage
    { "source": "plante_camomille", "target": "usage_tisane", "label": "Se consomme en" },
    { "source": "plante_lavande", "target": "usage_he", "label": "S'utilise beaucoup en" },
    { "source": "plante_menthe", "target": "usage_he", "label": "S'utilise beaucoup en" },
    
    // Alerte sécurité
    { "source": "usage_he", "target": "vigilance_he", "label": "Nécessite une" }
  ]
},
{
  "id": "theme-sciences-fonctionnement-cerveau",
  "title": "La Toile des Neurosciences",
  "category": "Sciences & Santé",
  "description": "Une cartographie des structures, fonctions et de la chimie du cerveau humain.",
  "longDescription": "Le cerveau est une machine biologique d'une complexité infinie. Ce graphe structure ses grandes régions anatomiques, les associe à nos capacités quotidiennes (mémoire, vision, logique) et descend jusqu'à l'échelle cellulaire pour montrer comment les neurotransmetteurs dictent nos comportements.",
  "nodes": [
    { "id": "racine_cerveau", "label": "Le Cerveau Humain", "group": "racine", "size": 28 },
    
    // Anatomie : Les Grands Lobes
    { "id": "lobe_frontal", "label": "Lobe Frontal (À l'avant)", "group": "anatomie", "size": 20 },
    { "id": "lobe_occipital", "label": "Lobe Occipital (À l'arrière)", "group": "anatomie", "size": 18 },
    { "id": "lobe_temporal", "label": "Lobe Temporal (Sur les côtés)", "group": "anatomie", "size": 18 },
    { "id": "systeme_limbique", "label": "Système Limbique (Cerveau émotionnel)", "group": "anatomie", "size": 20 },
    
    // Fonctions Cognitives & Sensorielles
    { "id": "fonc_logique", "label": "Raisonnement & Prise de décision", "group": "fonction", "size": 16 },
    { "id": "fonc_vision", "label": "Traitement de la Vision", "group": "fonction", "size": 15 },
    { "id": "fonc_memoire", "label": "Mémoire & Apprentissage", "group": "fonction", "size": 16 },
    { "id": "fonc_emotions", "label": "Gestion des Émotions & Peur", "group": "fonction", "size": 16 },
    
    // Échelle Cellulaire : La Communication
    { "id": "cell_neurone", "label": "Le Neurone (Cellule nerveuse)", "group": "cellule", "size": 18 },
    { "id": "cell_synapse", "label": "La Synapse (Zone de contact)", "group": "cellule", "size": 16 },
    
    // La Chimie : Les Neurotransmetteurs
    { "id": "chem_dopamine", "label": "Dopamine (Molécule de la motivation)", "group": "chimie", "size": 16 },
    { "id": "chem_serotonine", "label": "Sérotonine (Régulateur de l'humeur)", "group": "chimie", "size": 16 }
  ],
  "edges": [
    // Connexions de la racine à l'anatomie
    { "source": "racine_cerveau", "target": "lobe_frontal", "label": "Comprend le" },
    { "source": "racine_cerveau", "target": "lobe_occipital", "label": "Comprend le" },
    { "source": "racine_cerveau", "target": "lobe_temporal", "label": "Comprend le" },
    { "source": "racine_cerveau", "target": "systeme_limbique", "label": "Enferme le" },
    
    // Cartographie des fonctions par Lobe
    { "source": "lobe_frontal", "target": "fonc_logique", "label": "Pilote le" },
    { "source": "lobe_occipital", "target": "fonc_vision", "label": "Décode la" },
    { "source": "lobe_temporal", "target": "fonc_memoire", "label": "Héberge la" },
    { "source": "systeme_limbique", "target": "fonc_emotions", "label": "Génère les" },
    { "source": "systeme_limbique", "target": "fonc_memoire", "label": "Ancre les souvenirs via les" },
    
    // Le réseau cellulaire sous-jacent
    { "source": "racine_cerveau", "target": "cell_neurone", "label": "Composé de 86 milliards de" },
    { "source": "cell_neurone", "target": "cell_synapse", "label": "Communique via la" },
    
    // L'injection de la chimie dans la communication
    { "source": "cell_synapse", "target": "chem_dopamine", "label": "Libère la" },
    { "source": "cell_synapse", "target": "chem_serotonine", "label": "Libère la" },
    
    // Liens finaux Chimie -> Fonctions / Comportements
    { "source": "chem_dopamine", "target": "fonc_logique", "label": "Alimente l'action et la" },
    { "source": "chem_serotonine", "target": "fonc_emotions", "label": "Stabilise le sommeil et les" }
  ]
},
{
  "id": "theme-nature-fabrication-miel-etapes",
  "title": "La Toile de Fabrication du Miel",
  "category": "Nature & Biologie",
  "description": "Une cartographie chronologique du travail des abeilles, de la fleur jusqu'au pot.",
  "longDescription": "Le miel est le fruit d'une organisation collective fascinante. Ce graphe détaille chaque étape du processus de transformation : de la récolte du nectar par les butineuses au travail de déshydratation des ouvrières, jusqu'à la mise en pot finale par l'apiculteur.",
  "nodes": [
    { "id": "racine_miel", "label": "La Fabrication du Miel", "group": "racine", "size": 28 },
    
    // Étape 1 : La Récolte (À l'extérieur)
    { "id": "etape_butinage", "label": "1. Le Butinage", "group": "etape", "size": 22 },
    { "id": "act_recolte_nectar", "label": "Récolte du Nectar & Miellat", "group": "action", "size": 16 },
    { "id": "bio_jabot", "label": "Stockage temporaire dans le Jabot", "group": "biologie", "size": 16 },
    
    // Étape 2 : La Transformation (Dans la ruche)
    { "id": "etape_transformation", "label": "2. La Trophallaxie (Passage de bouche à bouche)", "group": "etape", "size": 22 },
    { "id": "act_enrichissement", "label": "Enrichissement en Enzymes (Invertase)", "group": "action", "size": 16 },
    { "id": "act_ventilation", "label": "3. La Déshydratation (Ventilation mécanique)", "group": "action", "size": 18 },
    
    // Étape 3 : Le Stockage (Le garde-manger)
    { "id": "etape_stockage", "label": "4. Le Mûrissement & Conservation", "group": "etape", "size": 22 },
    { "id": "bio_alveole", "label": "Dépôt dans les Alvéoles de cire", "group": "biologie", "size": 16 },
    { "id": "act_operculation", "label": "Operculation (Fermeture étanche à la cire)", "group": "action", "size": 16 },
    
    // Étape 4 : L'Intervention Humaine
    { "id": "etape_apiculteur", "label": "5. La Récolte de l'Apiculteur", "group": "etape", "size": 22 },
    { "id": "act_extraction", "label": "Désoperculation & Extraction par Centrifugation", "group": "action", "size": 16 },
    { "id": "prod_pot_miel", "label": "🍯 Le Pot de Miel Final", "group": "produit", "size": 24 }
  ],
  "edges": [
    // Fil conducteur principal (Chronologie globale)
    { "source": "racine_miel", "target": "etape_butinage", "label": "Début du cycle" },
    { "source": "etape_butinage", "target": "etape_transformation", "label": "Retour à la ruche" },
    { "source": "etape_transformation", "target": "act_ventilation", "label": "Baisse du taux d'humidité" },
    { "source": "act_ventilation", "target": "etape_stockage", "label": "Une fois mûr" },
    { "source": "etape_stockage", "target": "etape_apiculteur", "label": "Quand les hausses sont prêtes" },
    
    // Détails Étape 1 : Butinage
    { "source": "etape_butinage", "target": "act_recolte_nectar", "label": "L'abeille butineuse réalise la" },
    { "source": "act_recolte_nectar", "target": "bio_jabot", "label": "Le liquide est aspiré dans le" },
    
    // Détails Étape 2 : Transformation chimique
    { "source": "bio_jabot", "target": "etape_transformation", "label": "Transmis aux abeilles receveuses par" },
    { "source": "etape_transformation", "target": "act_enrichissement", "label": "Le transit répété permet l'" },
    
    // Détails Étape 3 : Stockage et séchage
    { "source": "act_enrichissement", "target": "bio_alveole", "label": "Le pré-miel est placé dans une" },
    { "source": "act_ventilation", "target": "bio_alveole", "label": "Les ouvrières battent des ailes pour sécher l'" },
    { "source": "bio_alveole", "target": "act_operculation", "label": "Quand l'eau tombe à ~18%, déclenchement de l'" },
    
    // Détails Étape 4 : Extraction apicole
    { "source": "act_operculation", "target": "etape_apiculteur", "label": "Le cadre operculé est retiré par" },
    { "source": "etape_apiculteur", "target": "act_extraction", "label": "L'humain procède à l'" },
    { "source": "act_extraction", "target": "prod_pot_miel", "label": "Permet d'obtenir" }
  ]
},
{
  "id": "theme-sciences-cycle-lunaire-complet",
  "title": "La Toile du Cycle Lunaire",
  "category": "Astronomie & Sciences",
  "description": "Une cartographie chronologique et orbitale des phases de la Lune.",
  "longDescription": "La Lune tourne autour de la Terre en 29,5 jours, changeant d'aspect selon sa position face au Soleil. Ce graphe structure la lunaison étape par étape, de l'obscurité de la Nouvelle Lune à l'éclat de la Pleine Lune, en passant par les forces gravitationnelles qui régissent nos océans.",
  "nodes": [
    { "id": "racine_lunaison", "label": "Le Cycle Lunaire (29,5 jours)", "group": "racine", "size": 28 },
    
    // Phase 1 : Le renouveau (Lune Noire)
    { "id": "phase_nouvelle", "label": "1. Nouvelle Lune", "group": "phase_cle", "size": 22 },
    { "id": "pos_conjonction", "label": "Alignement : Soleil ➡️ Lune ➡️ Terre", "group": "astronomie", "size": 16 },
    { "id": "vis_invisible", "label": "Face éclairée cachée (Lune invisible)", "group": "visuel", "size": 15 },
    
    // Phase 2 : La croissance (Lune croissante)
    { "id": "phase_premier_croissant", "label": "2. Premier Croissant", "group": "phase_inter", "size": 18 },
    { "id": "phen_lumiere_cendree", "label": "Lumière Cendrée (Lueur de la Terre)", "group": "phenomene", "size": 15 },
    { "id": "phase_premier_quartier", "label": "3. Premier Quartier", "group": "phase_cle", "size": 20 },
    { "id": "phase_gibeuse_croissante", "label": "4. Lune Gibeuse Croissante", "group": "phase_inter", "size": 18 },
    
    // Phase 3 : L'apogée lumineuse (Pleine Lune)
    { "id": "phase_pleine", "label": "5. Pleine Lune", "group": "phase_cle", "size": 22 },
    { "id": "pos_opposition", "label": "Alignement : Lune ⬅️ Terre ⬅️ Soleil", "group": "astronomie", "size": 16 },
    { "id": "phen_marees_vives", "label": "Marées de Vive-Eau (Coefficients forts)", "group": "phenomene", "size": 16 },
    
    // Phase 4 : Le déclin (Lune décroissante)
    { "id": "phase_gibeuse_decroissante", "label": "6. Lune Gibeuse Décroissante", "group": "phase_inter", "size": 18 },
    { "id": "phase_dernier_quartier", "label": "7. Dernier Quartier", "group": "phase_cle", "size": 20 },
    { "id": "phase_dernier_croissant", "label": "8. Dernier Croissant", "group": "phase_inter", "size": 18 }
  ],
  "edges": [
    // La boucle chronologique principale (Le cercle de la lunaison)
    { "source": "racine_lunaison", "target": "phase_nouvelle", "label": "Début du cycle" },
    { "source": "phase_nouvelle", "target": "phase_premier_croissant", "label": "Puis grandit en" },
    { "source": "phase_premier_croissant", "target": "phase_premier_quartier", "label": "Devient le" },
    { "source": "phase_premier_quartier", "target": "phase_gibeuse_croissante", "label": "Évolue en" },
    { "source": "phase_gibeuse_croissante", "target": "phase_pleine", "label": "Culmine en" },
    { "source": "phase_pleine", "target": "phase_gibeuse_decroissante", "label": "Entame le déclin en" },
    { "source": "phase_gibeuse_decroissante", "target": "phase_dernier_quartier", "label": "Passe au" },
    { "source": "phase_dernier_quartier", "target": "phase_dernier_croissant", "label": "S'affine en" },
    { "source": "phase_dernier_croissant", "target": "phase_nouvelle", "label": "Se ferme et recommence" },
    
    // Liaisons scientifiques de la Nouvelle Lune
    { "source": "phase_nouvelle", "target": "pos_conjonction", "label": "Causée par" },
    { "source": "phase_nouvelle", "target": "vis_invisible", "label": "Effet" },
    { "source": "pos_conjonction", "target": "phen_marees_vives", "label": "Attractions cumulées ➡️" },
    
    // Liaisons de la phase croissante
    { "source": "phase_premier_croissant", "target": "phen_lumiere_cendree", "label": "Laisse entrevoir la" },
    
    // Liaisons de la Pleine Lune
    { "source": "phase_pleine", "target": "pos_opposition", "label": "Causée par" },
    { "source": "pos_opposition", "target": "phen_marees_vives", "label": "Attractions alignées ➡️" }
  ]
},
{
  "id": "theme-genealogie-famille-jackson",
  "title": "L'Arbre Généalogique de la Famille Jackson",
  "category": "Histoire & Culture Pop",
  "description": "La cartographie de l'une des dynasties musicales les plus célèbres au monde.",
  "longDescription": "De Joe et Katherine Jackson jusqu'à la troisième génération, ce graphe structure les liens de parenté de cette famille d'artistes hors norme. Il met en évidence la fratrie des Jackson 5 et la descendance directe du Roi de la Pop.",
  "nodes": [
    { "id": "famille_jackson", "label": "Dynastie Jackson", "group": "racine", "size": 28 },
    
    // G1 : Les Parents Fondateurs
    { "id": "par_joe", "label": "Joe Jackson (Père / Manager)", "group": "g1_parents", "size": 22 },
    { "id": "par_katherine", "label": "Katherine Jackson (Mère)", "group": "g1_parents", "size": 22 },
    
    // G2 : La Fratrie (Les Enfants)
    { "id": "enf_rebbie", "label": "Rebbie Jackson", "group": "g2_enfants", "size": 18 },
    { "id": "enf_jackie", "label": "Jackie Jackson", "group": "g2_enfants", "size": 18 },
    { "id": "enf_tito", "label": "Tito Jackson", "group": "g2_enfants", "size": 18 },
    { "id": "enf_jermaine", "label": "Jermaine Jackson", "group": "g2_enfants", "size": 18 },
    { "id": "enf_latoya", "label": "La Toya Jackson", "group": "g2_enfants", "size": 18 },
    { "id": "enf_marlon", "label": "Marlon Jackson", "group": "g2_enfants", "size": 18 },
    { "id": "enf_michael", "label": "👑 Michael Jackson", "group": "g2_enfants_star", "size": 25 },
    { "id": "enf_randy", "label": "Randy Jackson", "group": "g2_enfants", "size": 18 },
    { "id": "enf_janet", "label": "🎵 Janet Jackson", "group": "g2_enfants_star", "size": 22 },
    
    // G3 : Exemples clés de la 3ème Génération (Petits-enfants)
    { "id": "pt_paris", "label": "Paris Jackson (Fille de Michael)", "group": "g3_petits_enfants", "size": 16 },
    { "id": "pt_prince", "label": "Prince Jackson (Fils de Michael)", "group": "g3_petits_enfants", "size": 16 },
    { "id": "pt_bigi", "label": "Bigi 'Blanket' Jackson (Fils de Michael)", "group": "g3_petits_enfants", "size": 16 },
    { "id": "pt_eissa", "label": "Eissa Al Mana (Fils de Janet)", "group": "g3_petits_enfants", "size": 15 },
    { "id": "pt_taj", "label": "Taj Jackson (Fils de Tito / Groupe 3T)", "group": "g3_petits_enfants", "size": 15 }
  ],
  "edges": [
    // Union des parents
    { "source": "par_joe", "target": "par_katherine", "label": "Mariés en 1949" },
    { "source": "famille_jackson", "target": "par_joe", "label": "Fondateur" },
    { "source": "famille_jackson", "target": "par_katherine", "label": "Fondatrice" },
    
    // Enfants de Joe & Katherine (G2)
    { "source": "par_katherine", "target": "enf_rebbie", "label": "Mère de" },
    { "source": "par_katherine", "target": "enf_jackie", "label": "Mère de" },
    { "source": "par_katherine", "target": "enf_tito", "label": "Mère de" },
    { "source": "par_katherine", "target": "enf_jermaine", "label": "Mère de" },
    { "source": "par_katherine", "target": "enf_latoya", "label": "Mère de" },
    { "source": "par_katherine", "target": "enf_marlon", "label": "Mère de" },
    { "source": "par_katherine", "target": "enf_michael", "label": "Mère de" },
    { "source": "par_katherine", "target": "enf_randy", "label": "Mère de" },
    { "source": "par_katherine", "target": "enf_janet", "label": "Mère de" },
    
    { "source": "par_joe", "target": "enf_michael", "label": "Père & Manager de" },
    { "source": "par_joe", "target": "enf_janet", "label": "Père de" },
    
    // Liens vers la troisième génération (G3)
    { "source": "enf_michael", "target": "pt_prince", "label": "Père de" },
    { "source": "enf_michael", "target": "pt_paris", "label": "Père de" },
    { "source": "enf_michael", "target": "pt_bigi", "label": "Père de" },
    
    { "source": "enf_janet", "target": "pt_eissa", "label": "Mère de" },
    { "source": "enf_tito", "target": "pt_taj", "label": "Père de (Membre des 3T)" }
  ]
},
{
  "id": "theme-immobilier-acquisition-france-valide",
  "title": "Le Parcours d'Achat Immobilier",
  "category": "Droit & Immobilier",
  "description": "Les étapes légales et financières pour acheter un bien immobilier en France.",
  "longDescription": "L'achat d'un bien immobilier est un parcours hautement réglementé. Ce graphe chronologique détaille chaque étape obligatoire, des simulations financières à la signature de l'acte authentique chez le notaire, en passant par les délais légaux de rétractation.",
  "nodes": [
    { "id": "racine_achat", "label": "Achat Immobilier", "group": "racine", "size": 28 },
    
    // Étape 1 : Le Financement & La Recherche
    { "id": "etape_financement", "label": "1. Capacité d'Emprunt", "group": "etape", "size": 22 },
    { "id": "act_simulation", "label": "Calcul de l'apport et taux d'endettement (max 35%)", "group": "action", "size": 16 },
    { "id": "doc_offre_achat", "label": "Formulation de l'Offre d'Achat écrite", "group": "document", "size": 16 },
    
    // Étape 2 : L'Avant-contrat (Engagement)
    { "id": "etape_avant_contrat", "label": "2. Compromis ou Promesse de Vente", "group": "etape", "size": 22 },
    { "id": "legal_delai_sru", "label": "Délai de rétractation légal SRU (10 jours)", "group": "loi", "size": 18 },
    { "id": "act_depot_garantie", "label": "Versement du dépôt de garantie (5% à 10%)", "group": "action", "size": 15 },
    
    // Étape 3 : La Course au Prêt (Le verrou bancaire)
    { "id": "etape_pret", "label": "3. Recherche du Financement", "group": "etape", "size": 22 },
    { "id": "legal_condition_suspensive", "label": "Condition suspensive d'obtention de prêt (Min 45 à 60 jours)", "group": "loi", "size": 18 },
    { "id": "doc_accord_principe", "label": "Accord de principe de la banque", "group": "document", "size": 15 },
    { "id": "doc_offre_pret", "label": "Offre de Prêt Officielle (Délai de réflexion Scrivener de 10 jours)", "group": "document", "size": 16 },
    
    // Étape 4 : L'Acte Authentique (La propriété)
    { "id": "etape_notaire", "label": "4. Acte Authentique de Vente", "group": "etape", "size": 22 },
    { "id": "admin_notaire", "label": "Signature chez le Notaire (Officier public)", "group": "administration", "size": 20 },
    { "id": "act_remise_cles", "label": "🔑 Déblocage des fonds & Remise des clés", "group": "action", "size": 24 }
  ],
  "edges": [
    // Fil d'ariane chronologique principal
    { "source": "racine_achat", "target": "etape_financement", "label": "Étape initiale" },
    { "source": "etape_financement", "target": "etape_avant_contrat", "label": "Si l'offre est acceptée" },
    { "source": "etape_avant_contrat", "target": "etape_pret", "label": "Une fois l'avant-contrat signé" },
    { "source": "etape_pret", "target": "etape_notaire", "label": "Une fois le prêt édité" },
    
    // Liaisons Phase 1
    { "source": "etape_financement", "target": "act_simulation", "label": "Commence par" },
    { "source": "act_simulation", "target": "doc_offre_achat", "label": "Permet de calibrer le prix de l'" },
    
    // Liaisons Phase 2
    { "source": "etape_avant_contrat", "target": "legal_delai_sru", "label": "Déclenche le lendemain le" },
    { "source": "etape_avant_contrat", "target": "act_depot_garantie", "label": "Sécurisé par le" },
    
    // Liaisons Phase 3
    { "source": "etape_pret", "target": "legal_condition_suspensive", "label": "Est encadrée par la" },
    { "source": "etape_pret", "target": "doc_accord_principe", "label": "Passe d'abord par un" },
    { "source": "doc_accord_principe", "target": "doc_offre_pret", "label": "Se transforme en" },
    
    // Liaisons Phase 4
    { "source": "doc_offre_pret", "target": "admin_notaire", "label": "Est transmise pour validation à l'" },
    { "source": "etape_notaire", "target": "admin_notaire", "label": "Se formalise par la" },
    { "source": "admin_notaire", "target": "act_remise_cles", "label": "Aboutit immédiatement à la" }
  ]
},
{
  "id": "theme-administration-declaration-impots-france",
  "title": "Le Parcours de la Déclaration d'Impôts en Ligne",
  "category": "Administration & Finance",
  "description": "Les étapes officielles et obligatoires pour déclarer ses revenus sur impots.gouv.fr.",
  "longDescription": "La déclaration des revenus en ligne est obligatoire en France. Ce graphe chronologique détaille le parcours sécurisé pour valider vos revenus, déclarer vos charges déductibles et finaliser votre signature électronique afin d'éviter les pénalités.",
  "nodes": [
    { "id": "racine_impots", "label": "Déclaration des Revenus", "group": "racine", "size": 28 },
    
    // Étape 1 : Accès Sécurisé
    { "id": "etape_connexion", "label": "1. Connexion à l'Espace Particulier", "group": "etape", "size": 22 },
    { "id": "auth_franceconnect", "label": "Authentification via FranceConnect (ou Numéro Fiscal)", "group": "securite", "size": 16 },
    
    // Étape 2 : Vérification de la situation
    { "id": "etape_verification", "label": "2. État Civil & Foyer Fiscal", "group": "etape", "size": 22 },
    { "id": "act_situation_perso", "label": "Signalement des changements (Mariage, Pacs, Naissance, Divorce)", "group": "action", "size": 16 },
    
    // Étape 3 : Contrôle et Modification des données préremplies
    { "id": "etape_revenus", "label": "3. Contrôle des Revenus Préremplis", "group": "etape", "size": 22 },
    { "id": "doc_pre_rempli", "label": "Salaires, retraites et allocations pré-affichés", "group": "document", "size": 15 },
    { "id": "act_frais_reels", "label": "Option Optionnelle : Déduction des Frais Réels (Barème kilométrique)", "group": "decision", "size": 16 },
    
    // Étape 4 : Optimisation (Charges et Réductions)
    { "id": "etape_charges", "label": "4. Déclaration des Charges & Dons", "group": "etape", "size": 22 },
    { "id": "doc_reductions", "label": "Saisie des Dons, Garde d'enfants, Emploi à domicile, Épargne Retraite", "group": "document", "size": 16 },
    
    // Étape 5 : Clôture Légale
    { "id": "etape_validation", "label": "5. Signature & Taux de Prélèvement", "group": "etape", "size": 22 },
    { "id": "act_signature", "label": "Simulation immédiate & Signature électronique", "group": "action", "size": 18 },
    { "id": "doc_avis_impot", "label": "📄 Réception de l'Avis de Situation Déclarative (Asdir)", "group": "produit", "size": 24 }
  ],
  "edges": [
    // Fil d'Ariane chronologique principal
    { "source": "racine_impots", "target": "etape_connexion", "label": "Ouverture du service" },
    { "source": "etape_connexion", "target": "etape_verification", "label": "Une fois connecté" },
    { "source": "etape_verification", "target": "etape_revenus", "label": "Après validation de la situation" },
    { "source": "etape_revenus", "target": "etape_charges", "label": "Après contrôle des montants" },
    { "source": "etape_charges", "target": "etape_validation", "label": "Dernière étape" },
    
    // Liaisons Étape 1
    { "source": "etape_connexion", "target": "auth_franceconnect", "label": "Exige de s'identifier par" },
    
    // Liaisons Étape 2
    { "source": "etape_verification", "target": "act_situation_perso", "label": "Nécessite la mise à jour de la" },
    
    // Liaisons Étape 3
    { "source": "etape_revenus", "target": "doc_pre_rempli", "label": "Affiche automatiquement les" },
    { "source": "doc_pre_rempli", "target": "act_frais_reels", "label": "Peut être complété par l'" },
    
    // Liaisons Étape 4
    { "source": "etape_charges", "target": "doc_reductions", "label": "Permet d'ajouter les" },
    
    // Liaisons Étape 5
    { "source": "etape_validation", "target": "act_signature", "label": "Se conclut par la" },
    { "source": "act_signature", "target": "doc_avis_impot", "label": "Génère instantanément l'" }
  ]
},
{
  "id": "theme-automobile-budget-entretien",
  "title": "La Cartographie des Charges Automobiles",
  "category": "Budget & Pratique",
  "description": "Une ventilation complète des coûts fixes, variables et d'entretien d'un véhicule.",
  "longDescription": "Posséder une voiture implique de nombreux frais cachés au-delà de l'achat initial. Ce graphe structure les dépenses automobiles en distinguant l'entretien courant, les taxes obligatoires, les fluides et les réparations imprévues pour anticiper son budget annuel.",
  "nodes": [
    { "id": "racine_auto", "label": "Coût Total de la Voiture", "group": "racine", "size": 28 },
    
    // Catégorie 1 : Les Charges Fixes & Légales (Incompressibles)
    { "id": "cat_charges_fixes", "label": "1. Charges Fixes & Obligatoires", "group": "categorie", "size": 22 },
    { "id": "cout_assurance", "label": "Assurance Auto (Tiers ou Tous Risques)", "group": "fixe", "size": 16 },
    { "id": "cout_controle_technique", "label": "Contrôle Technique (Tous les 2 ans)", "group": "fixe", "size": 15 },
    
    // Catégorie 2 : L'Entretien Courant (Planifié)
    { "id": "cat_entretien_courant", "label": "2. Entretien Courant & Révisions", "group": "categorie", "size": 22 },
    { "id": "cout_revision", "label": "Révision Annuelle (Vidange + Filtres)", "group": "courant", "size": 16 },
    { "id": "cout_pneus", "label": "Train de Pneus (Usure ou Permutation Saisonière)", "group": "courant", "size": 16 },
    { "id": "cout_freinage", "label": "Consommables de Freinage (Plaquettes et Disques)", "group": "courant", "size": 15 },
    
    // Catégorie 3 : Les Fluides & Énergie (Variables selon l'usage)
    { "id": "cat_fluides", "label": "3. Énergie & Fluides Annexes", "group": "categorie", "size": 22 },
    { "id": "cout_carburant", "label": "Carburant (Essence/Diesel) ou Recharge Électrique", "group": "variable", "size": 18 },
    { "id": "cout_appoint_fluides", "label": "Fluides (Lave-glace, Liquide de refroidissement, AdBlue)", "group": "variable", "size": 14 },
    
    // Catégorie 4 : Les Grosses Réparations (Imprévues ou Long Terme)
    { "id": "cat_reparations_lourdes", "label": "4. Réparations Lourdes & Usure", "group": "categorie", "size": 22 },
    { "id": "cout_distribution", "label": "Kit de Distribution (Tous les 5 à 10 ans)", "group": "lourd", "size": 16 },
    { "id": "cout_embrayage", "label": "Embrayage ou Organes de Suspension", "group": "lourd", "size": 15 },
    { "id": "cout_batterie", "label": "Batterie de démarrage (Durée de vie ~4-5 ans)", "group": "lourd", "size": 15 }
  ],
  "edges": [
    // Connexion des grandes catégories à la racine
    { "source": "racine_auto", "target": "cat_charges_fixes", "label": "Génère des" },
    { "source": "racine_auto", "target": "cat_entretien_courant", "label": "Nécessite un" },
    { "source": "racine_auto", "target": "cat_fluides", "label": "Consomme de l'" },
    { "source": "racine_auto", "target": "cat_reparations_lourdes", "label": "Subit des" },
    
    // Rattachement des nœuds à la Catégorie 1 (Fixe)
    { "source": "cat_charges_fixes", "target": "cout_assurance", "label": "Obligation légale d'" },
    { "source": "cat_charges_fixes", "target": "cout_controle_technique", "label": "Soumis au" },
    
    // Rattachement des nœuds à la Catégorie 2 (Courant)
    { "source": "cat_entretien_courant", "target": "cout_revision", "label": "Passe par la" },
    { "source": "cat_entretien_courant", "target": "cout_pneus", "label": "Inclut le changement de" },
    { "source": "cat_entretien_courant", "target": "cout_freinage", "label": "Surveille le" },
    
    // Rattachement des nœuds à la Catégorie 3 (Fluides)
    { "source": "cat_fluides", "target": "cout_carburant", "label": "Poste principal :" },
    { "source": "cat_fluides", "target": "cout_appoint_fluides", "label": "Nécessite l'appoint de" },
    
    // Rattachement des nœuds à la Catégorie 4 (Lourd)
    { "source": "cat_reparations_lourdes", "target": "cout_distribution", "label": "Échéance majeure :" },
    { "source": "cat_reparations_lourdes", "target": "cout_embrayage", "label": "Risque d'usure de l'" },
    { "source": "cat_reparations_lourdes", "target": "cout_batterie", "label": "Remplacement de la" },
    
    // Liens transverses logiques (Interdépendances)
    { "source": "cout_revision", "target": "cout_appoint_fluides", "label": "Renouvelle les" },
    { "source": "cout_carburant", "target": "cat_entretien_courant", "label": "Plus on roule, plus on accélère l'" }
  ]
},
{
  "id": "theme-immobilier-obligations-meuble-france",
  "title": "Équipements Obligatoires en Location Meublée",
  "category": "Droit & Immobilier",
  "description": "La liste légale et obligatoire des équipements pour un logement meublé en France.",
  "longDescription": "Pour être qualifié de meublé au sens de la loi (loi Alur), un logement doit comporter un mobilier minimum fixé par décret. Ce graphe structure ces obligations par pièce et par fonction pour sécuriser le bail commercial ou d'habitation.",
  "nodes": [
    { "id": "racine_meuble", "label": "Logement Meublé Décret 2015-981", "group": "racine", "size": 28 },
    
    // Zone 1 : Espace Sommeil (Chambre)
    { "id": "zone_chambre", "label": "1. Literie & Chambre", "group": "zone", "size": 22 },
    { "id": "req_lit", "label": "Literie comprenant couette ou couverture", "group": "obligation", "size": 16 },
    { "id": "req_occultation", "label": "Dispositif d'occultation des fenêtres (Volets ou Rideaux)", "group": "obligation", "size": 16 },
    
    // Zone 2 : Espace Cuisine & Repas
    { "id": "zone_cuisine", "label": "2. Cuisine & Restauration", "group": "zone", "size": 22 },
    { "id": "req_cuisson", "label": "Plaques de cuisson", "group": "obligation", "size": 16 },
    { "id": "req_four", "label": "Four ou Four à micro-ondes", "group": "obligation", "size": 16 },
    { "id": "req_froid", "label": "Réfrigérateur avec compartiment congélateur (ou freezer ≤ -6°C)", "group": "obligation", "size": 16 },
    { "id": "req_ustensiles", "label": "Ustensiles de cuisine (Poêles, casseroles)", "group": "obligation", "size": 15 },
    { "id": "req_vaisselle", "label": "Vaisselle nécessaire à la prise des repas (Assiettes, couverts, verres)", "group": "obligation", "size": 15 },
    
    // Zone 3 : Vie quotidienne & Mobilier
    { "id": "zone_vie", "label": "3. Mobilier de Vie & Confort", "group": "zone", "size": 22 },
    { "id": "req_table_sieges", "label": "Table et Sièges (Adaptés au nombre de locataires)", "group": "obligation", "size": 16 },
    { "id": "req_rangement", "label": "Étagères de rangement ou Placards", "group": "obligation", "size": 15 },
    { "id": "req_luminaires", "label": "Luminaires (Éclairage fonctionnel dans chaque pièce)", "group": "obligation", "size": 15 },
    
    // Zone 4 : Entretien ménager
    { "id": "zone_entretien", "label": "4. Matériel d'Entretien", "group": "zone", "size": 22 },
    { "id": "req_entretien_sol", "label": "Matériel d'entretien ménager adapté (Balai, serpillère, aspirateur si moquette)", "group": "obligation", "size": 16 },
    
    // Sanction légale
    { "id": "legal_sanction", "label": "⚠️ Risque : Requalification en bail nu (Perte des avantages fiscaux)", "group": "alerte", "size": 18 }
  ],
  "edges": [
    // Raccordement des zones à la racine légale
    { "source": "racine_meuble", "target": "zone_chambre", "label": "Exige pour la nuit" },
    { "source": "racine_meuble", "target": "zone_cuisine", "label": "Exige pour les repas" },
    { "source": "racine_meuble", "target": "zone_vie", "label": "Exige pour le séjour" },
    { "source": "racine_meuble", "target": "zone_entretien", "label": "Exige pour l'hygiène" },
    
    // Liens de la zone Chambre
    { "source": "zone_chambre", "target": "req_lit", "label": "Doit inclure" },
    { "source": "zone_chambre", "target": "req_occultation", "label": "Doit inclure" },
    
    // Liens de la zone Cuisine
    { "source": "zone_cuisine", "target": "req_cuisson", "label": "Doit inclure" },
    { "source": "zone_cuisine", "target": "req_four", "label": "Doit inclure" },
    { "source": "zone_cuisine", "target": "req_froid", "label": "Doit inclure" },
    { "source": "zone_cuisine", "target": "req_ustensiles", "label": "Doit inclure" },
    { "source": "zone_cuisine", "target": "req_vaisselle", "label": "Doit inclure" },
    
    // Liens de la zone Vie
    { "source": "zone_vie", "target": "req_table_sieges", "label": "Doit inclure" },
    { "source": "zone_vie", "target": "req_rangement", "label": "Doit inclure" },
    { "source": "zone_vie", "target": "req_luminaires", "label": "Doit inclure" },
    
    // Liens de la zone Entretien
    { "source": "zone_entretien", "target": "req_entretien_sol", "label": "Doit inclure" },
    
    // Impact de la loi / Sanction si manquement
    { "source": "racine_meuble", "target": "legal_sanction", "label": "Tout manquement entraîne un" }
  ]
},
{
  "id": "theme-ia-vulgarisation-grand-public",
  "title": "Découvrir l'Intelligence Artificielle simplement",
  "category": "Technologie / Découverte",
  "description": "Une carte simple pour comprendre comment l'IA imite nos sens au quotidien.",
  "longDescription": "L'Intelligence Artificielle peut sembler mystérieuse. Ce graphe l'explique simplement en reliant les technologies de l'IA aux capacités humaines que nous utilisons tous les jours : voir, parler, écouter et réfléchir.",
  "nodes": [
    { "id": "racine_ia_public", "label": "L'Intelligence Artificielle (IA)", "group": "racine", "size": 28 },
    
    // Sens 1 : La Vue
    { "id": "sens_voir", "label": "👀 La Vision (Voir)", "group": "sens", "size": 20 },
    { "id": "tech_vision", "label": "Reconnaissance d'images", "group": "technologie", "size": 16 },
    { "id": "ex_voiture", "label": "Exemple : Les voitures autonomes qui repèrent les piétons", "group": "exemple", "size": 15 },
    { "id": "ex_faceid", "label": "Exemple : Le déverrouillage du smartphone par le visage", "group": "exemple", "size": 15 },
    
    // Sens 2 : La Parole & Le Texte
    { "id": "sens_parler", "label": "💬 Le Langage (Parler & Écrire)", "group": "sens", "size": 20 },
    { "id": "tech_generative", "label": "IA Générative (Modèles de texte)", "group": "technologie", "size": 17 },
    { "id": "ex_chatgpt", "label": "Exemple : ChatGPT qui rédige un poème ou un résumé", "group": "exemple", "size": 15 },
    { "id": "ex_traduction", "label": "Exemple : Les traducteurs automatiques instantanés", "group": "exemple", "size": 15 },
    
    // Sens 3 : L'Ouïe
    { "id": "sens_ecouter", "label": "👂 L'Audition (Écouter)", "group": "sens", "size": 20 },
    { "id": "tech_audio", "label": "Reconnaissance vocale", "group": "technologie", "size": 16 },
    { "id": "ex_assistants", "label": "Exemple : Siri ou Alexa qui comprennent vos ordres", "group": "exemple", "size": 15 },
    
    // Sens 4 : La Réflexion & Prédiction
    { "id": "sens_penser", "label": "🧠 La Logique (Réfléchir & Deviner)", "group": "sens", "size": 20 },
    { "id": "tech_prediction", "label": "Analyse des données", "group": "technologie", "size": 16 },
    { "id": "ex_netflix", "label": "Exemple : Les suggestions personnalisées sur Netflix ou TikTok", "group": "exemple", "size": 15 },
    { "id": "ex_meteo", "label": "Exemple : Les prévisions météo ultra-précises", "group": "exemple", "size": 15 }
  ],
  "edges": [
    // Connexion de la racine aux sens humains
    { "source": "racine_ia_public", "target": "sens_voir", "label": "Permet d'imiter" },
    { "source": "racine_ia_public", "target": "sens_parler", "label": "Permet d'imiter" },
    { "source": "racine_ia_public", "target": "sens_ecouter", "label": "Permet d'imiter" },
    { "source": "racine_ia_public", "target": "sens_penser", "label": "Permet d'imiter" },
    
    // Liens vers les technologies
    { "source": "sens_voir", "target": "tech_vision", "label": "Grâce à la" },
    { "source": "sens_parler", "target": "tech_generative", "label": "Grâce à l'" },
    { "source": "sens_ecouter", "target": "tech_audio", "label": "Grâce à la" },
    { "source": "sens_penser", "target": "tech_prediction", "label": "Grâce à l'" },
    
    // Liens vers les exemples concrets de la vie quotidienne
    { "source": "tech_vision", "target": "ex_voiture", "label": "Utilisé pour" },
    { "source": "tech_vision", "target": "ex_faceid", "label": "Utilisé pour" },
    
    { "source": "tech_generative", "target": "ex_chatgpt", "label": "Utilisé pour" },
    { "source": "tech_generative", "target": "ex_traduction", "label": "Utilisé pour" },
    
    { "source": "tech_audio", "target": "ex_assistants", "label": "Utilisé pour" },
    
    { "source": "tech_prediction", "target": "ex_netflix", "label": "Utilisé pour" },
    { "source": "tech_prediction", "target": "ex_meteo", "label": "Utilisé pour" }
  ]
},
{
  "id": "theme-tech-ecosysteme-reseaux-sociaux-2026",
  "title": "La Toile des Réseaux Sociaux et Maisons Mères",
  "category": "Économie & Technologie",
  "description": "Cartographie des réseaux sociaux mondiaux et des conglomérats qui les possèdent.",
  "longDescription": "Le paysage des réseaux sociaux est hyper-centralisé. Ce graphe structure les liens de propriété exclusifs entre les plateformes grand public (messageries, vidéos, réseaux pros) et les géants de la Tech (Meta, Alphabet, ByteDance...) qui tirent les ficelles économiques.",
  "nodes": [
    { "id": "racine_medias_sociaux", "label": "L'Écosystème Social Media", "group": "racine", "size": 30 },
    
    // MAISON MÈRE 1 : META (USA)
    { "id": "corp_meta", "label": "META (ex-Facebook)", "group": "maison_mere", "size": 25 },
    { "id": "app_facebook", "label": "Facebook (Réseau généraliste)", "group": "plateforme", "size": 18 },
    { "id": "app_instagram", "label": "Instagram (Partage photo/vidéo)", "group": "plateforme", "size": 18 },
    { "id": "app_whatsapp", "label": "WhatsApp (Messagerie instantanée)", "group": "plateforme", "size": 18 },
    { "id": "app_threads", "label": "Threads (Microblogging concurrent de X)", "group": "plateforme", "size": 16 },
    { "id": "app_messenger", "label": "Messenger (Messagerie Facebook)", "group": "plateforme", "size": 15 },
    
    // MAISON MÈRE 2 : ALPHABET (USA)
    { "id": "corp_alphabet", "label": "ALPHABET (Google)", "group": "maison_mere", "size": 25 },
    { "id": "app_youtube", "label": "YouTube (Hébergement vidéo & Shorts)", "group": "plateforme", "size": 19 },
    
    // MAISON MÈRE 3 : BYTEDANCE (Chine)
    { "id": "corp_bytedance", "label": "BYTEDANCE", "group": "maison_mere", "size": 24 },
    { "id": "app_tiktok", "label": "TikTok (Vidéos courtes internationales)", "group": "plateforme", "size": 19 },
    { "id": "app_douyin", "label": "Douyin (Version chinoise de TikTok)", "group": "plateforme", "size": 16 },
    
    // MAISON MÈRE 4 : TENCENT (Chine)
    { "id": "corp_tencent", "label": "TENCENT", "group": "maison_mere", "size": 24 },
    { "id": "app_wechat", "label": "WeChat / Weixin (Super-App & Messagerie)", "group": "plateforme", "size": 18 },
    { "id": "app_qq", "label": "QQ (Messagerie & Portail)", "group": "plateforme", "size": 15 },
    
    // MAISON MÈRE 5 : MICROSOFT (USA)
    { "id": "corp_microsoft", "label": "MICROSOFT", "group": "maison_mere", "size": 23 },
    { "id": "app_linkedin", "label": "LinkedIn (Réseau professionnel)", "group": "plateforme", "size": 18 },
    
    // MAISON MÈRE 6 : KUAISHOU TECHNOLOGY (Chine)
    { "id": "corp_kuaishou", "label": "KUAISHOU TECHNOLOGY", "group": "maison_mere", "size": 20 },
    { "id": "app_kuaishou", "label": "Kuaishou (Concurrent majeur de Douyin)", "group": "plateforme", "size": 16 },
    
    // LES INDÉPENDANTS / STRUCTURES UNIQUES
    { "id": "corp_x", "label": "X Corp (Elon Musk / ex-Twitter)", "group": "independant", "size": 22 },
    { "id": "app_x", "label": "X (Microblogging)", "group": "plateforme", "size": 18 },
    
    { "id": "app_littleredbook", "label": "Xiaohongshu / RED (Le 'Instagram chinois')", "group": "plateforme", "size": 16 },
    
    { "id": "corp_snap", "label": "SNAP INC.", "group": "independant", "size": 20 },
    { "id": "app_snapchat", "label": "Snapchat (Éphémère & Réalité augmentée)", "group": "plateforme", "size": 17 },
    
    { "id": "corp_telegram", "label": "TELEGRAM FZ-LLC (Pavel Durov)", "group": "independant", "size": 20 },
    { "id": "app_telegram", "label": "Telegram (Messagerie chiffrée & Canaux)", "group": "plateforme", "size": 17 },
    
    { "id": "corp_pinterest", "label": "PINTEREST INC.", "group": "independant", "size": 19 },
    { "id": "app_pinterest", "label": "Pinterest (Découverte visuelle & Idées)", "group": "plateforme", "size": 16 },
    
    { "id": "corp_reddit", "label": "REDDIT INC.", "group": "independant", "size": 19 },
    { "id": "app_reddit", "label": "Reddit (Communautés & Forums)", "group": "plateforme", "size": 16 }
  ],
  "edges": [
    // Connexions globales vers les têtes de réseaux
    { "source": "racine_medias_sociaux", "target": "corp_meta", "label": "Dominé par" },
    { "source": "racine_medias_sociaux", "target": "corp_alphabet", "label": "Dominé par" },
    { "source": "racine_medias_sociaux", "target": "corp_bytedance", "label": "Dominé par" },
    { "source": "racine_medias_sociaux", "target": "corp_tencent", "label": "Dominé par" },
    { "source": "racine_medias_sociaux", "target": "corp_microsoft", "label": "Comprend" },
    { "source": "racine_medias_sociaux", "target": "corp_x", "label": "Comprend" },
    
    // Propriétés de META
    { "source": "corp_meta", "target": "app_facebook", "label": "Possède & édite" },
    { "source": "corp_meta", "target": "app_instagram", "label": "A racheté (2012)" },
    { "source": "corp_meta", "target": "app_whatsapp", "label": "A racheté (2014)" },
    { "source": "corp_meta", "target": "app_threads", "label": "A développé (2023)" },
    { "source": "corp_meta", "target": "app_messenger", "label": "Intègre" },
    
    // Propriétés d'ALPHABET
    { "source": "corp_alphabet", "target": "app_youtube", "label": "A racheté (2006)" },
    
    // Propriétés de BYTEDANCE
    { "source": "corp_bytedance", "target": "app_tiktok", "label": "Déploie à l'international" },
    { "source": "corp_bytedance", "target": "app_douyin", "label": "Déploie en Chine" },
    
    // Propriétés de TENCENT
    { "source": "corp_tencent", "target": "app_wechat", "label": "Possède & édite" },
    { "source": "corp_tencent", "target": "app_qq", "label": "Possède & édite" },
    
    // Propriété de MICROSOFT
    { "source": "corp_microsoft", "target": "app_linkedin", "label": "A racheté (2016)" },
    
    // Propriété de KUAISHOU
    { "source": "corp_kuaishou", "target": "app_kuaishou", "label": "Possède & édite" },
    
    // Liens des structures autonomes / dédiées
    { "source": "corp_x", "target": "app_x", "label": "Contrôle" },
    { "source": "corp_tencent", "target": "app_littleredbook", "label": "Est l'un des principaux actionnaires de" },
    { "source": "corp_snap", "target": "app_snapchat", "label": "Édite" },
    { "source": "corp_telegram", "target": "app_telegram", "label": "Édite" },
    { "source": "corp_pinterest", "target": "app_pinterest", "label": "Édite" },
    { "source": "corp_reddit", "target": "app_reddit", "label": "Édite" },
    
    // Liens de rivalités / Duplication fonctionnelle (Liens transverses)
    { "source": "app_threads", "target": "app_x", "label": "Rivalise directement avec" },
    { "source": "app_tiktok", "target": "app_youtube", "label": "Concurrence via Shorts" },
    { "source": "app_instagram", "target": "app_littleredbook", "label": "Équivalent occidental de" }
  ]
},
{
  "id": "theme-sante-physiologie-bienfaits-froid",
  "title": "Les Effets Scientifiques du Froid sur le Corps",
  "category": "Physiologie & Santé",
  "description": "Cartographie des mécanismes biologiques déclenchés par l'exposition au froid.",
  "longDescription": "L'exposition au froid (bain de glace, douche froide) déclenche des réponses hormonales et vasculaires immédiates. Ce graphe structure ses bienfaits validés par la science, du soulagement musculaire à la stimulation de la dopamine et du métabolisme.",
  "nodes": [
    { "id": "racine_froid", "label": "Exposition au Froid (Hormèse)", "group": "racine", "size": 28 },
    
    // AXE 1 : Système Vasculaire & Inflammation
    { "id": "axe_vasculaire", "label": "1. Système Vasculaire", "group": "axe", "size": 22 },
    { "id": "meca_vasoconstriction", "label": "Vasoconstriction périphérique", "group": "mecanisme", "size": 16 },
    { "id": "meca_vasodilatation", "label": "Vasodilatation réactionnelle (Chasse thermique)", "group": "mecanisme", "size": 15 },
    { "id": "bienfait_circulation", "label": "Amélioration du retour veineux & réduction des œdèmes", "group": "bienfait", "size": 18 },
    
    // AXE 2 : Récupération Musculaire & Douleur
    { "id": "axe_musculaire", "label": "2. Récupération & Analgésie", "group": "axe", "size": 22 },
    { "id": "meca_conduction", "label": "Ralentissement de la conduction nerveuse (Effet antalgique)", "group": "mecanisme", "size": 16 },
    { "id": "bienfait_douleur", "label": "Diminution immédiate des douleurs musculaires (Courbatures)", "group": "bienfait", "size": 18 },
    
    // AXE 3 : Système Nerveux & Neurotransmetteurs
    { "id": "axe_mental", "label": "3. Neurobiologie & Clarté Mentale", "group": "axe", "size": 22 },
    { "id": "horm_noradrenaline", "label": "Pic de Noradrénaline (Vigilance & Anti-inflammatoire)", "group": "hormone", "size": 16 },
    { "id": "horm_dopamine", "label": "Libération durable de Dopamine (+250% sans crash)", "group": "hormone", "size": 18 },
    { "id": "bienfait_humeur", "label": "Résilience au stress, énergie et concentration", "group": "bienfait", "size": 18 },
    
    // AXE 4 : Métabolisme & Graisses
    { "id": "axe_metabolisme", "label": "4. Thermogenèse & Métabolisme", "group": "axe", "size": 22 },
    { "id": "meca_graisse_brune", "label": "Activation du tissu adipeux brun (Graisse brune)", "group": "mecanisme", "size": 17 },
    { "id": "bienfait_calories", "label": "Production de chaleur par combustion des calories", "group": "bienfait", "size": 16 },
    
    // Warning Médical (Pour la rigueur scientifique absolue)
    { "id": "warning_hypertrophie", "label": "⚠️ Contre-indication : Bloque l'hypertrophie musculaire juste après la musculation", "group": "limite", "size": 16 }
  ],
  "edges": [
    // Connexion de la racine aux 4 axes de réponse
    { "source": "racine_froid", "target": "axe_vasculaire", "label": "Provoque un choc thermal sur le" },
    { "source": "racine_froid", "target": "axe_musculaire", "label": "Agit localement sur le" },
    { "source": "racine_froid", "target": "axe_mental", "label": "Stimule le" },
    { "source": "racine_froid", "target": "axe_metabolisme", "label": "Active le" },
    
    // Liens Axe Vasculaire
    { "source": "axe_vasculaire", "target": "meca_vasoconstriction", "label": "Étape 1 : Le sang fuit vers les organes" },
    { "source": "meca_vasoconstriction", "target": "meca_vasodilatation", "label": "Étape 2 (Sortie du froid) :" },
    { "source": "meca_vasodilatation", "target": "bienfait_circulation", "label": "Aboutit à l'" },
    
    // Liens Axe Musculaire
    { "source": "axe_musculaire", "target": "meca_conduction", "label": "Par le" },
    { "source": "meca_conduction", "target": "bienfait_douleur", "label": "Entraîne une" },
    { "source": "axe_musculaire", "target": "warning_hypertrophie", "label": "Attention :" },
    
    // Liens Axe Mental
    { "source": "axe_mental", "target": "horm_noradrenaline", "label": "Déclenche une sécrétion massive de" },
    { "source": "axe_mental", "target": "horm_dopamine", "label": "Provoque une hausse diffuse de" },
    { "source": "horm_dopamine", "target": "bienfait_humeur", "label": "Améliore l'" },
    { "source": "horm_noradrenaline", "target": "bienfait_humeur", "label": "Renforce la" },
    
    // Liens Axe Métabolisme
    { "source": "axe_metabolisme", "target": "meca_graisse_brune", "label": "Recrute l'action de la" },
    { "source": "meca_graisse_brune", "target": "bienfait_calories", "label": "Entraîne la" }
  ]
},
{
  "id": "theme-economie-fortunes-mondiales-2026",
  "title": "Les Plus Grandes Fortunes Mondiales par Domaine",
  "category": "Économie & Business",
  "description": "Cartographie des milliardaires les plus riches de la planète classés par secteur d'activité.",
  "longDescription": "Le classement des ultra-riches mondiaux évolue constamment au gré des marchés boursiers. Ce graphe structure les plus grands patrimoines de la planète en les segmentant par domaine d'excellence (Tech, Luxe, Finance, Industrie) et en isolant l'entreprise qui a bâti leur empire.",
  "nodes": [
    { "id": "racine_milliardaires", "label": "Top Fortunes Mondiales", "group": "racine", "size": 30 },
    
    // DOMAINE 1 : TECHNOLOGIE
    { "id": "dom_tech", "label": "💻 Technologies & IA", "group": "domaine", "size": 24 },
    { "id": "rich_elon_musk", "label": "Elon Musk", "group": "milliardaire", "size": 22 },
    { "id": "rich_jeff_bezos", "label": "Jeff Bezos", "group": "milliardaire", "size": 20 },
    { "id": "rich_mark_zuckerberg", "label": "Mark Zuckerberg", "group": "milliardaire", "size": 20 },
    { "id": "rich_jensen_huang", "label": "Jensen Huang", "group": "milliardaire", "size": 18 },
    
    { "id": "cie_tesla_spacex", "label": "Tesla & SpaceX", "group": "entreprise", "size": 16 },
    { "id": "cie_amazon", "label": "Amazon", "group": "entreprise", "size": 16 },
    { "id": "cie_meta", "label": "Meta (Facebook)", "group": "entreprise", "size": 16 },
    { "id": "cie_nvidia", "label": "Nvidia (Puces IA)", "group": "entreprise", "size": 16 },
    
    // DOMAINE 2 : LUXE & RETAIL
    { "id": "dom_luxe_retail", "label": "🛍️ Luxe & Grande Distribution", "group": "domaine", "size": 24 },
    { "id": "rich_bernard_arnault", "label": "Bernard Arnault & famille", "group": "milliardaire", "size": 20 },
    { "id": "rich_amancio_ortega", "label": "Amancio Ortega", "group": "milliardaire", "size": 17 },
    
    { "id": "cie_lvmh", "label": "LVMH", "group": "entreprise", "size": 16 },
    { "id": "cie_inditex", "label": "Inditex (Zara)", "group": "entreprise", "size": 15 },
    
    // DOMAINE 3 : FINANCE & INVESTISSEMENT
    { "id": "dom_finance", "label": "📈 Finance & Investissement", "group": "domaine", "size": 23 },
    { "id": "rich_warren_buffett", "label": "Warren Buffett", "group": "milliardaire", "size": 19 },
    
    { "id": "cie_berkshire", "label": "Berkshire Hathaway", "group": "entreprise", "size": 16 },
    
    // DOMAINE 4 : LOGICIELS & LOGISTIQUE INDUSTRIELLE
    { "id": "dom_industrie_logiciel", "label": "⚙️ Logiciels d'Entreprise & Industrie", "group": "domaine", "size": 23 },
    { "id": "rich_larry_ellison", "label": "Larry Ellison", "group": "milliardaire", "size": 19 },
    
    { "id": "cie_oracle", "label": "Oracle", "group": "entreprise", "size": 16 }
  ],
  "edges": [
    // Connexion de la racine aux domaines économiques
    { "source": "racine_milliardaires", "target": "dom_tech", "label": "Secteur pivot :" },
    { "source": "racine_milliardaires", "target": "dom_luxe_retail", "label": "Secteur pivot :" },
    { "source": "racine_milliardaires", "target": "dom_finance", "label": "Secteur pivot :" },
    { "source": "racine_milliardaires", "target": "dom_industrie_logiciel", "label": "Secteur pivot :" },
    
    // Raccordement Domaine Tech
    { "source": "dom_tech", "target": "rich_elon_musk", "label": "Mené par" },
    { "source": "dom_tech", "target": "rich_jeff_bezos", "label": "Comprend" },
    { "source": "dom_tech", "target": "rich_mark_zuckerberg", "label": "Comprend" },
    { "source": "dom_tech", "target": "rich_jensen_huang", "label": "Poussé par l'IA via" },
    
    { "source": "rich_elon_musk", "target": "cie_tesla_spacex", "label": "Fondateur/Actionnaire de" },
    { "source": "rich_jeff_bezos", "target": "cie_amazon", "label": "Fondateur de" },
    { "source": "rich_mark_zuckerberg", "target": "cie_meta", "label": "Fondateur de" },
    { "source": "rich_jensen_huang", "target": "cie_nvidia", "label": "CEO & Cofondateur de" },
    
    // Raccordement Domaine Luxe & Retail
    { "source": "dom_luxe_retail", "target": "rich_bernard_arnault", "label": "Mené par" },
    { "source": "dom_luxe_retail", "target": "rich_amancio_ortega", "label": "Comprend" },
    
    { "source": "rich_bernard_arnault", "target": "cie_lvmh", "label": "Président de" },
    { "source": "rich_amancio_ortega", "target": "cie_inditex", "label": "Fondateur de" },
    
    // Raccordement Domaine Finance
    { "source": "dom_finance", "target": "rich_warren_buffett", "label": "Mené par" },
    { "source": "rich_warren_buffett", "target": "cie_berkshire", "label": "Dirige" },
    
    // Raccordement Domaine Industrie / Logiciel
    { "source": "dom_industrie_logiciel", "target": "rich_larry_ellison", "label": "Mené par" },
    { "source": "rich_larry_ellison", "target": "cie_oracle", "label": "Cofondateur de" },
    
    // Liens transverses de synergie boursière (Optionnel mais réaliste)
    { "source": "cie_nvidia", "target": "cie_meta", "label": "Fournit les puces IA à" },
    { "source": "cie_berkshire", "target": "dom_luxe_retail", "label": "Investit massivement dans le" }
  ]
},
{
  "id": "theme-nostalgie-jeux-ecole-annees-90",
  "title": "Les Jeux de Récré Incontournables des Années 90",
  "category": "Culture Pop & Nostalgie",
  "description": "Une cartographie des phénomènes et tendances qui ont enflammé les cours de récréation.",
  "longDescription": "Avant les écrans et les smartphones, les cours d'école des années 90 étaient le théâtre de véritables vagues de fond commerciales et de jeux d'agilité. Ce graphe structure ces tendances par type de jeu et en précise les règles ou objets cultes.",
  "nodes": [
    { "id": "racine_recre_90", "label": "La Récréation des Années 90", "group": "racine", "size": 28 },
    
    // Catégorie 1 : Les Phénomènes de Collection (Les Cours de Troc)
    { "id": "cat_collection", "label": "1. Objets à Collectionner & Échanger", "group": "categorie", "size": 22 },
    { "id": "jeu_pogs", "label": "Les Pogs", "group": "jeu_culte", "size": 20 },
    { "id": "item_kini", "label": "Le 'Kini' (La rondelle en plastique lourd pour retourner les Pogs)", "group": "accessoire", "size": 15 },
    { "id": "jeu_cartes_pokemon", "label": "Les Cartes Pokémon (Fin 90s)", "group": "jeu_culte", "size": 20 },
    { "id": "jeu_jojo", "label": "Les Jojos (Petites figurines en plastique crantées)", "group": "jeu_culte", "size": 17 },
    
    // Catégorie 2 : Les Jeux d'Adresse et d'Agilité
    { "id": "cat_adresse", "label": "2. Adresse, Rythme & Agilité", "group": "categorie", "size": 22 },
    { "id": "jeu_billes", "label": "Les Billes (et Calots/Agates)", "group": "jeu_culte", "size": 18 },
    { "id": "jeu_elastique", "label": "Le Jeu de l'Élastique", "group": "jeu_culte", "size": 17 },
    { "id": "jeu_yoyo", "label": "Le Yoyo (Mode éphémère mais intense)", "group": "jeu_culte", "size": 16 },
    
    // Catégorie 3 : Les Premiers "Écrans" Portables
    { "id": "cat_electronique", "label": "3. L'Arrivée du Virtuel", "group": "categorie", "size": 22 },
    { "id": "jeu_tamagotchi", "label": "Le Tamagotchi", "group": "jeu_culte", "size": 19 },
    { "id": "act_nourrir", "label": "L'obligation de le nourrir toutes les 2 heures sous peine de mort", "group": "regle", "size": 14 }
  ],
  "edges": [
    // Connexions de la racine aux grandes catégories
    { "source": "racine_recre_90", "target": "cat_collection", "label": "Génère des modes de" },
    { "source": "racine_recre_90", "target": "cat_adresse", "label": "Voit s'affronter les élèves en" },
    { "source": "racine_recre_90", "target": "cat_electronique", "label": "Introduit les premiers" },
    
    // Liens de la catégorie Collection
    { "source": "cat_collection", "target": "jeu_pogs", "label": "Phénomène roi (1995-1996) :" },
    { "source": "jeu_pogs", "target": "item_kini", "label": "Nécessite l'usage d'un" },
    { "source": "cat_collection", "target": "jeu_cartes_pokemon", "label": "Raz-de-marée de la fin de décennie :" },
    { "source": "cat_collection", "target": "jeu_jojo", "label": "Alternative aux Pogs :" },
    
    // Liens de la catégorie Adresse
    { "source": "cat_adresse", "target": "jeu_billes", "label": "Le classique indémodable :" },
    { "source": "cat_adresse", "target": "jeu_elastique", "label": "Le jeu rythmé des filles et garçons :" },
    { "source": "cat_adresse", "target": "jeu_yoyo", "label": "Relancé par les marques (ex: Coca-Cola) :" },
    
    // Liens de la catégorie Électronique
    { "source": "cat_electronique", "target": "jeu_tamagotchi", "label": "L'animal virtuel de Bandai :" },
    { "source": "jeu_tamagotchi", "target": "act_nourrir", "label": "Créait un stress majeur :" },
    
    // Liens transverses (Interdépendances de récré)
    { "source": "jeu_pogs", "target": "jeu_billes", "label": "A temporairement remplacé le commerce des" },
    { "source": "jeu_cartes_pokemon", "target": "jeu_tamagotchi", "label": "Se disputaient le titre de roi de la récré en 1999" }
  ]
},
{
  "id": "theme-popculture-saga-harry-potter",
  "title": "L'Univers Étendu de la Saga Harry Potter",
  "category": "Pop Culture & Littérature",
  "description": "Cartographie complète de l'empire magique de J.K. Rowling, des romans d'origine aux extensions cross-médias.",
  "longDescription": "Débutée en 1997, la saga Harry Potter est devenue l'un des phénomènes culturels et économiques les plus massifs de l'histoire. Ce graphe structure cet univers en séparant l'œuvre littéraire, l'univers cinématographique, la mythologie interne (factions) et les extensions contemporaines.",
  "nodes": [
    { "id": "racine_potter", "label": "Le Monde des Sorciers (Wizarding World)", "group": "racine", "size": 30 },
    
    // BRANCHE 1 : La Saga Littéraire Originale (Le Cœur)
    { "id": "cat_romans", "label": "📚 Les 7 Romans Fondateurs (1997-2007)", "group": "categorie", "size": 24 },
    { "id": "rom_ecole_sorciers", "label": "1. L'École des sorciers", "group": "roman", "size": 16 },
    { "id": "rom_chambre_secrets", "label": "2. La Chambre des secrets", "group": "roman", "size": 16 },
    { "id": "rom_prisonnier_azkaban", "label": "3. Le Prisonnier d'Azkaban", "group": "roman", "size": 17 },
    { "id": "rom_coupe_feu", "label": "4. La Coupe de feu", "group": "roman", "size": 17 },
    { "id": "rom_ordre_phenix", "label": "5. L'Ordre du Phénix", "group": "roman", "size": 17 },
    { "id": "rom_prince_sang_mele", "label": "6. Le Prince de sang-mêlé", "group": "roman", "size": 17 },
    { "id": "rom_reliques_mort", "label": "7. Les Reliques de la Mort", "group": "roman", "size": 18 },
    
    // BRANCHE 2 : La Mythologie Interne (Factions & Lieux)
    { "id": "cat_lore", "label": "🔮 Factions & Institutions Clés", "group": "categorie", "size": 24 },
    { "id": "lore_poudlard", "label": "École de Magie Poudlard", "group": "lieu", "size": 20 },
    { "id": "lore_gryffondor", "label": "Gryffondor", "group": "maison", "size": 15 },
    { "id": "lore_serpentard", "label": "Serpentard", "group": "maison", "size": 15 },
    { "id": "lore_poufsouffle", "label": "Poufsouffle", "group": "maison", "size": 14 },
    { "id": "lore_serdaigle", "label": "Serdaigle", "group": "maison", "size": 14 },
    { "id": "lore_ordre_phenix", "label": "L'Ordre du Phénix (Alliance)", "group": "faction", "size": 18 },
    { "id": "lore_mangemorts", "label": "Les Mangemorts (Voldemort)", "group": "faction", "size": 18 },
    
    // BRANCHE 3 : L'Univers Cinématographique (Warner Bros)
    { "id": "cat_cinema", "label": "🎬 Adaptations & Blockbusters", "group": "categorie", "size": 24 },
    { "id": "film_films_originaux", "label": "Les 8 Films Harry Potter (2001-2011)", "group": "cinema", "size": 21 },
    { "id": "film_animaux_fantastiques", "label": "Trilogie 'Les Animaux Fantastiques'", "group": "cinema", "size": 17 },
    
    // BRANCHE 4 : Les Extensions Modernes & Gaming
    { "id": "cat_extensions", "label": "🎮 Extensions & Univers Étendu", "group": "categorie", "size": 23 },
    { "id": "ext_enfant_maudit", "label": "Pièce de Théâtre : L'Enfant Maudit", "group": "theatre", "size": 16 },
    { "id": "ext_hogwarts_legacy", "label": "Jeu Vidéo : Hogwarts Legacy (Succès historique)", "group": "gaming", "size": 19 }
  ],
  "edges": [
    // Connexions de la racine aux 4 piliers de la franchise
    { "source": "racine_potter", "target": "cat_romans", "label": "A pour origine" },
    { "source": "racine_potter", "target": "cat_lore", "label": "Repose sur le" },
    { "source": "racine_potter", "target": "cat_cinema", "label": "S'est développée via" },
    { "source": "racine_potter", "target": "cat_extensions", "label": "Se prolonge avec" },
    
    // Chronologie des Romans
    { "source": "cat_romans", "target": "rom_ecole_sorciers", "label": "Début (1997) :" },
    { "source": "rom_ecole_sorciers", "target": "rom_chambre_secrets", "label": "Suivi de" },
    { "source": "rom_chambre_secrets", "target": "rom_prisonnier_azkaban", "label": "Suivi de" },
    { "source": "rom_prisonnier_azkaban", "target": "rom_coupe_feu", "label": "Bascule vers le sombre avec" },
    { "source": "rom_coupe_feu", "target": "rom_ordre_phenix", "label": "Suivi de" },
    { "source": "rom_ordre_phenix", "target": "rom_prince_sang_mele", "label": "Suivi de" },
    { "source": "rom_prince_sang_mele", "target": "rom_reliques_mort", "label": "Conclusion (2007) :" },
    
    // Liens du Lore magique
    { "source": "cat_lore", "target": "lore_poudlard", "label": "Épicentre :" },
    { "source": "lore_poudlard", "target": "lore_gryffondor", "label": "Divisée en 4 Maisons :" },
    { "source": "lore_poudlard", "target": "lore_serpentard", "label": "Divisée en 4 Maisons :" },
    { "source": "lore_poudlard", "target": "lore_poufsouffle", "label": "Divisée en 4 Maisons :" },
    { "source": "lore_poudlard", "target": "lore_serdaigle", "label": "Divisée en 4 Maisons :" },
    { "source": "cat_lore", "target": "lore_ordre_phenix", "label": "Camp du Bien :" },
    { "source": "cat_lore", "target": "lore_mangemorts", "label": "Camp du Mal :" },
    
    // Liens Cinéma
    { "source": "cat_cinema", "target": "film_films_originaux", "label": "Adapte fidèlement les romans" },
    { "source": "cat_cinema", "target": "film_animaux_fantastiques", "label": "Préquel se déroulant au XXe siècle" },
    
    // Liens Extensions et Gaming
    { "source": "cat_extensions", "target": "ext_enfant_maudit", "label": "Suite officielle sous forme de" },
    { "source": "cat_extensions", "target": "ext_hogwarts_legacy", "label": "Plonge le joueur au XIXe siècle dans" },
    
    // Connexions transverses cruciales (La cohérence de l'univers)
    { "source": "rom_reliques_mort", "target": "film_films_originaux", "label": "A été découpé en 2 films au cinéma" },
    { "source": "lore_gryffondor", "target": "lore_ordre_phenix", "label": "Fournit la majorité des membres de" },
    { "source": "lore_serpentard", "target": "lore_mangemorts", "label": "Berceau historique des" },
    { "source": "lore_poudlard", "target": "ext_hogwarts_legacy", "label": "Sert de décor principal à" }
  ]
},
{
  "id": "theme-medias-influenceurs-francais-2026",
  "title": "La Cartographie des Grands Créateurs de Contenu Français",
  "category": "Médias & Société",
  "description": "Les visages majeurs du web français et l'écosystème de leurs entreprises.",
  "longDescription": "L'industrie de l'influence en France s'est structurée de manière spectaculaire. Ce graphe met en évidence les plus grands créateurs de contenu francophones (YouTube, Twitch, TikTok), leurs domaines de spécialité et les marques physiques ou événements majeurs qu'ils ont créés.",
  "nodes": [
    { "id": "racine_influence", "label": "Le Web Créatif Français", "group": "racine", "size": 30 },
    
    // SECTEUR 1 : DIVERTISSEMENT & BLOCKBUSTERS LÉGENDAIRES
    { "id": "sec_divertissement", "label": "🎬 Divertissement & Grands Formats", "group": "secteur", "size": 24 },
    { "id": "creator_squeezie", "label": "Squeezie (Lucas Hauchard)", "group": "createur", "size": 22 },
    { "id": "creator_amixem", "label": "Amixem (Maxime Chabroud)", "group": "createur", "size": 19 },
    
    { "id": "brand_gentlemates", "label": "Gentle Mates (Structure Esport co-fondée)", "group": "entreprise", "size": 16 },
    { "id": "brand_space_fox", "label": "Space Fox (Marque de vêtements d'Amixem)", "group": "entreprise", "size": 15 },
    
    // SECTEUR 2 : GAMING & STREAMING EN DIRECT (TWITCH)
    { "id": "sec_gaming_twitch", "label": "🎮 Gaming & Communautés Live", "group": "secteur", "size": 24 },
    { "id": "creator_kameto", "label": "Kameto (Kamel Kebir)", "group": "createur", "size": 20 },
    { "id": "creator_aminematue", "label": "AmineMaTue (Amine Mohamed)", "group": "createur", "size": 20 },
    
    { "id": "brand_kcorp", "label": "Karmine Corp (Club esport majeur en Europe)", "group": "entreprise", "size": 17 },
    { "id": "event_kings_league", "label": "Événements Live (Eleven All Stars, Kings League France)", "group": "evenement", "size": 16 },
    
    // SECTEUR 3 : LIFESTYLE, VLOG & MODE
    { "id": "sec_lifestyle_mode", "label": "✨ Lifestyle, Vlog & Mode", "group": "secteur", "size": 23 },
    { "id": "creator_lena_situations", "label": "Léna Situations (Léna Mahfouf)", "group": "createur", "size": 21 },
    { "id": "creator_mister_v", "label": "Mister V (Yvick Letexier)", "group": "createur", "size": 19 },
    
    { "id": "brand_hotel_mafouf", "label": "Hôtel Mahfouf (Marque de vêtements & concept-store)", "group": "entreprise", "size": 16 },
    { "id": "brand_la_pizza_delamama", "label": "La Pizza Delamama (Succès en grande distribution)", "group": "entreprise", "size": 15 },
    
    // SECTEUR 4 : POP-CULTURE, SOCIÉTÉ & VOYAGE
    { "id": "sec_societe_culture", "label": "🌍 Pop-Culture, Enquêtes & Voyage", "group": "secteur", "size": 23 },
    { "id": "creator_gaspard_g", "label": "Gaspard G (Gaspard Guérin)", "group": "createur", "size": 18 },
    { "id": "creator_papi_grenier", "label": "Joueur du Grenier / Frédéric Molas", "group": "createur", "size": 18 }
  ],
  "edges": [
    // Connexions de la racine aux différents secteurs du web français
    { "source": "racine_influence", "target": "sec_divertissement", "label": "S'organise autour du" },
    { "source": "racine_influence", "target": "sec_gaming_twitch", "label": "S'organise autour du" },
    { "source": "racine_influence", "target": "sec_lifestyle_mode", "label": "S'organise autour de la" },
    { "source": "racine_influence", "target": "sec_societe_culture", "label": "S'organise autour de la" },
    
    // Liens Branche Divertissement
    { "source": "sec_divertissement", "target": "creator_squeezie", "label": "Premier créateur de France :" },
    { "source": "sec_divertissement", "target": "creator_amixem", "label": "Leader des studios à Angers :" },
    { "source": "creator_squeezie", "target": "brand_gentlemates", "label": "A co-créé la structure" },
    { "source": "creator_amixem", "target": "brand_space_fox", "label": "A fondé la marque" },
    
    // Liens Branche Gaming / Twitch
    { "source": "sec_gaming_twitch", "target": "creator_kameto", "label": "Pilier du streaming :" },
    { "source": "sec_gaming_twitch", "target": "creator_aminematue", "label": "Roi des événements Twitch :" },
    { "source": "creator_kameto", "target": "brand_kcorp", "label": "CEO & Fondateur de la" },
    { "source": "creator_aminematue", "target": "event_kings_league", "label": "Organisateur en chef d'" },
    
    // Liens Branche Lifestyle / Mode
    { "source": "sec_lifestyle_mode", "target": "creator_lena_situations", "label": "Incontournable internationale :" },
    { "source": "sec_lifestyle_mode", "target": "creator_mister_v", "label": "Créateur multi-casquettes :" },
    { "source": "creator_lena_situations", "target": "brand_hotel_mafouf", "label": "Propriétaire de l'" },
    { "source": "creator_mister_v", "target": "brand_la_pizza_delamama", "label": "A commercialisé" },
    
    // Liens Branche Société / Culture
    { "source": "sec_societe_culture", "target": "creator_gaspard_g", "label": "Décrypte l'actualité via" },
    { "source": "sec_societe_culture", "target": "creator_papi_grenier", "label": "Analyse le rétro-gaming avec" },
    
    // Liens transverses d'alliances et projets communs
    { "source": "creator_squeezie", "target": "creator_aminematue", "label": "Partenaires sur les GP Explorer / Eleven All Stars" },
    { "source": "brand_kcorp", "target": "brand_gentlemates", "label": "Rivalité historique dans l'esport français" },
    { "source": "creator_mister_v", "target": "creator_squeezie", "label": "Collaborent régulièrement sur des vidéos" }
  ]
},
{
  "id": "theme-services-urgence-france-europe",
  "title": "Répertoire des Numéros d'Urgence",
  "category": "Sécurité & Assistance",
  "description": "Vue d'ensemble des numéros d'appel d'urgence en France et en Europe.",
  "longDescription": "En situation de détresse, la rapidité d'accès à l'information est vitale. Ce graphe catégorise les numéros d'urgence selon leur finalité : secours médicaux, sécurité publique, signalement de danger ou assistance aux personnes en situation de vulnérabilité.",
  "nodes": [
    { "id": "racine_urgence", "label": "Numéros d'Urgence", "group": "racine", "size": 30 },
    
    // Niveau 1 : Urgences Vitales & Sécurité (Général)
    { "id": "cat_vital", "label": "1. Urgences Vitales & Sécurité", "group": "categorie", "size": 22 },
    { "id": "num_europe", "label": "112 : Numéro d'urgence européen", "group": "numero", "size": 18 },
    { "id": "num_samu", "label": "15 : SAMU (Urgence médicale)", "group": "numero", "size": 18 },
    { "id": "num_police", "label": "17 : Police / Gendarmerie", "group": "numero", "size": 18 },
    { "id": "num_pompiers", "label": "18 : Pompiers", "group": "numero", "size": 18 },
    
    // Niveau 2 : Urgences Sociales & Vulnérabilité
    { "id": "cat_social", "label": "2. Urgences Sociales & Écoute", "group": "categorie", "size": 22 },
    { "id": "num_enfance", "label": "119 : Enfance en danger", "group": "numero", "size": 16 },
    { "id":"num_femmes", "label": "3919 : Violences femmes info", "group": "numero", "size": 16 },
    { "id": "num_sans_abri", "label": "115 : Hébergement d'urgence", "group": "numero", "size": 16 },
    
    // Niveau 3 : Accessibilité
    { "id": "cat_access", "label": "3. Accessibilité (Sourds/Malentendants)", "group": "categorie", "size": 22 },
    { "id": "num_sms", "label": "114 : Numéro d'urgence par SMS", "group": "numero", "size": 16 }
  ],
  "edges": [
    // Connexion à la racine
    { "source": "racine_urgence", "target": "cat_vital", "label": "Nécessite une réponse immédiate via" },
    { "source": "racine_urgence", "target": "cat_social", "label": "Pour aide et signalement via" },
    { "source": "racine_urgence", "target": "cat_access", "label": "Accessibilité universelle via" },
    
    // Liens de fonctionnalité
    { "source": "cat_vital", "target": "num_europe", "label": "Valable dans toute l'UE :" },
    { "source": "cat_vital", "target": "num_samu", "label": "Santé / Détresse vitale :" },
    { "source": "cat_vital", "target": "num_police", "label": "Sécurité / Ordre public :" },
    { "source": "cat_vital", "target": "num_pompiers", "label": "Incendie / Accidents :" },
    
    { "source": "cat_social", "target": "num_enfance", "label": "Protection des mineurs :" },
    { "source": "cat_social", "target": "num_femmes", "label": "Soutien victimes de violence :" },
    { "source": "cat_social", "target": "num_sans_abri", "label": "Urgence sociale :" },
    
    { "source": "cat_access", "target": "num_sms", "label": "Alternative aux numéros vocaux :" }
  ]
},
{
  "id": "theme-sante-premiers-secours",
  "title": "La Chaîne de Survie : Les Gestes qui Sauvent",
  "category": "Santé & Sécurité",
  "description": "Les étapes fondamentales et les gestes techniques des premiers secours.",
  "longDescription": "Face à une urgence, chaque seconde compte. Ce graphe décompose la procédure standardisée P.A.S (Protéger, Alerter, Secourir) et détaille les actions réflexes pour les situations critiques (inconscience, arrêt cardiaque, hémorragie).",
  "nodes": [
    { "id": "racine_secours", "label": "Premiers Secours", "group": "racine", "size": 30 },
    
    // PILIER : La Procédure P.A.S
    { "id": "pas_proteger", "label": "1. PROTÉGER", "group": "etape", "size": 20 },
    { "id": "pas_alerter", "label": "2. ALERTER", "group": "etape", "size": 20 },
    { "id": "pas_secourir", "label": "3. SECOURIR", "group": "etape", "size": 20 },
    
    // DÉTAIL : Protéger
    { "id": "action_zone", "label": "Sécuriser la zone (Balisage, couper le courant, danger)", "group": "action", "size": 15 },
    
    // DÉTAIL : Alerter
    { "id": "action_appel", "label": "Appeler le 112 / 15 / 17 / 18", "group": "action", "size": 15 },
    { "id": "info_alerte", "label": "Lieu, Nature, Nombre de victimes, État", "group": "info", "size": 14 },
    
    // DÉTAIL : Secourir (Cas critiques)
    { "id": "etat_inconscient", "label": "Victime inconsciente qui respire", "group": "etat", "size": 18 },
    { "id": "geste_pls", "label": "Position Latérale de Sécurité (PLS)", "group": "geste", "size": 18 },
    
    { "id": "etat_arrete", "label": "Victime inconsciente qui NE respire PAS", "group": "etat", "size": 18 },
    { "id": "geste_rcp", "label": "RCP (Massage cardiaque + Défibrillateur)", "group": "geste", "size": 18 },
    
    { "id": "etat_hemorragie", "label": "Hémorragie externe grave", "group": "etat", "size": 18 },
    { "id": "geste_compression", "label": "Compression directe locale", "group": "geste", "size": 18 }
  ],
  "edges": [
    { "source": "racine_secours", "target": "pas_proteger", "label": "Priorité absolue :" },
    { "source": "racine_secours", "target": "pas_alerter", "label": "Étape suivante :" },
    { "source": "racine_secours", "target": "pas_secourir", "label": "Action finale :" },
    
    { "source": "pas_proteger", "target": "action_zone", "label": "Implique de" },
    { "source": "pas_alerter", "target": "action_appel", "label": "Via" },
    { "source": "action_appel", "target": "info_alerte", "label": "Transmettre les" },
    
    { "source": "pas_secourir", "target": "etat_inconscient", "label": "Si" },
    { "source": "etat_inconscient", "target": "geste_pls", "label": "Réaliser une" },
    
    { "source": "pas_secourir", "target": "etat_arrete", "label": "Si" },
    { "source": "etat_arrete", "target": "geste_rcp", "label": "Réaliser une" },
    
    { "source": "pas_secourir", "target": "etat_hemorragie", "label": "Si" },
    { "source": "etat_hemorragie", "target": "geste_compression", "label": "Réaliser une" }
  ]
},
{
  "id": "theme-sante-detection-avc",
  "title": "Reconnaître un AVC : La méthode V.I.T.E.",
  "category": "Santé & Urgence",
  "description": "Les signes avant-coureurs d'un AVC et la conduite à tenir.",
  "longDescription": "L'AVC est une urgence absolue. La méthode V.I.T.E. permet d'identifier les symptômes en quelques secondes. Une intervention rapide est le seul moyen de préserver les fonctions cérébrales de la victime.",
  "nodes": [
    { "id": "racine_avc", "label": "AVC : URGENCE ABSOLUE", "group": "racine", "size": 30 },
    
    // Les signes V.I.T.E.
    { "id": "v_visage", "label": "V : Visage", "group": "signe", "size": 20 },
    { "id": "v_desc", "label": "Visage affaissé d'un côté (sourire asymétrique)", "group": "detail", "size": 15 },
    
    { "id": "i_inertie", "label": "I : Inertie (bras/jambe)", "group": "signe", "size": 20 },
    { "id": "i_desc", "label": "Faiblesse ou paralysie d'un membre (impossibilité de lever les bras)", "group": "detail", "size": 15 },
    
    { "id": "t_trouble", "label": "T : Trouble de la parole", "group": "signe", "size": 20 },
    { "id": "t_desc", "label": "Difficulté à parler, confusion, mots déformés", "group": "detail", "size": 15 },
    
    { "id": "e_urgence", "label": "E : Extrême urgence", "group": "signe", "size": 20 },
    { "id": "e_desc", "label": "Appeler le 15 immédiatement", "group": "detail", "size": 15 }
  ],
  "edges": [
    { "source": "racine_avc", "target": "v_visage", "label": "Observer le" },
    { "source": "racine_avc", "target": "i_inertie", "label": "Tester la" },
    { "source": "racine_avc", "target": "t_trouble", "label": "Écouter le" },
    { "source": "racine_avc", "target": "e_urgence", "label": "Action finale :" },
    
    { "source": "v_visage", "target": "v_desc", "label": "Si :" },
    { "source": "i_inertie", "target": "i_desc", "label": "Si :" },
    { "source": "t_trouble", "target": "t_desc", "label": "Si :" },
    { "source": "e_urgence", "target": "e_desc", "label": "Sans hésiter :" }
  ]
},
];
