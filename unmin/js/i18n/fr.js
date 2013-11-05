/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-05
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- French dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "fr",
	"%lang-en": "French",
	"%lang-fr": "français",
	"%lang-nat": "Français",
	"%all": "Tous",
	"%home": "Accueil",
	"%main-page": "Page principale",
	"%tphp": "Haut de la page",
	"%you-are-in": "Vous êtes dans :",
	"%welcome-to": "Bienvenue à :",
	"%load": "chargement...",
	"%process": "traitement...",
	"%srch": "Recherche",
	"%srch-terms": "Recherche de terme(s)&#160;:",
	"%no-match": "Aucune correspondance trouvée",
	"%matches": {
		"mixin": "[MIXIN] correspondance(s) trouvées"
	},
	"%menu": "Menu",
	"%settings": "Paramètres",
	"%langs": "Langues",
	"%about": "À propos",
	"%curr": "(actuel)",
	"%hide": "Masquer",
	"%err": "Erreur",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Lancer",
	"%stop": "Arrêter",
	"%back": "Précédent",
	"%cancel": "Annuler",
	"%new-win": " (Ouvre dans une nouvelle fenêtre)",
	"%min-ago": "il y a une minute",
	"%coup-mins": "il y a quelques minutes",
	"%mins-ago": {
		"mixin": "il y a [MIXIN] minutes"
	},
	"%hour-ago": "il y a une heure",
	"%hours-ago": {
		"mixin": "il y a [MIXIN] heures"
	},
	"%days-ago": {
		"mixin": "il y a [MIXIN] jours"
	},
	"%yesterday": "hier",

	"%nxt": "Suivant",
	"%nxt-r": "Suivant (touche droite)",
	"%prv": "Précedent",
	"%prv-l": "Précedent (touche gauche)",
	"%first": "Premier",
	"%last": "Dernier",
	"%close-esc": "Fermer (touche d'échappement)",
	"%show": "Afficher",

	/* Archived Web page template */
	"%arch-pg": "Cette page Web a été archivée dans le Web.",
	/* Menu bar */
	"%sm-hlp": "(ouvrir le sous-menu avec la touche d'entrée et le fermer avec la touche d'échappement)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Arrêter la rotation d'onglets",
		"on": "Lancer la rotation d'onglets"
	},
	"%tab-list": "Liste des onglets",
	"%tab-pnl-end1": "Fin de ce panneau à onglets.",
	"%tab-pnl-end2": "Retourner à la liste des onglets",
	"%tab-pnl-end3": "ou continuer au reste de la page.",
	/* Multimedia player */
	"%play": "Jouer",
	"%pause": "Pause",
	"%open": "Ouvrir",
	"%close": "Fermer",
	"%rew": "Reculer",
	"%ffwd": "Avancer",
	"%mute": {
		"on": "Activer le mode muet",
		"off": "Désactiver le mode muet"
	},
	"%cc": {
		"off": "Masquer le sous-titrage",
		"on": "Afficher le sous-titrage"
	},
	"%cc-err": "Erreur dans le chargement des sous-titres",
	"%adesc": {
		"on": "Activer l'audiodescription",
		"off": "Désactiver l'audiodescription"
	},
	"%prog-bar": "utilisez les touches gauche ou droite pour avancer ou reculer le progrès des médias",
	"%no-video": "Votre navigateur ne semble pas avoir les capacité nécessaires pour lire cette vidéo, s'il vous plaît télécharger la vidéo ci-dessous",
	"%pos": "Position actuelle :",
	"%perc": "Pourcentage de lecture :",
	"%dur": "Temps total :",
	"%buff": "Mis en mémoire-tampon :",
	/* Share widget */
	"%fav": "Lien préféré",
	"%email": "Courriel",
	"%shr-txt": "Partagez cette page",
	"%shr-hnt": " avec {s} ",
	"%shr-email-sub": "Page qui est intéressante",
	"%shr-email-bd": "J'espère que cette page vous intéresse :\n{t} ({u})",
	"%shr-fav-ttl": "(ajouter cette page à vos signets)",
	"%shr-man": "S'il vous plaît fermer ce dialogue et appuyer sur Ctrl-D pour ajouter cette page à vos signets.",
	"%shr-all": "Tous montrer ({n})",
	"%shr-all-ttl": "Tout les sites de mise en signet",
	"%shr-disc": "Aucun appui n’est accordé, soit de façon expresse ou tacite, à aucun produit ou service.",
	/* Form validation */
	"%frm-nosubmit": "Le formulaire n'a pu être soumis car ",
	"%errs-fnd": " erreurs ont été trouvées.",
	"%err-fnd": " erreur a été trouvée.",
	/* Date picker */
	"%date-hide": "Masquer le calendrier",
	"%date-show": "Sélectionner une date à partir d'un calendrier pour le champ:",
	"%date-sel": "Sélectionné",
	/* Calendar */
	"%days": ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
	"%mnths": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
	"%cal": "Calendrier",
	"%currDay": "(Jour courrant)",
	"%cal-goToLnk": "Aller au<span class=\"wb-inv\"> mois de l'année</span>",
	"%cal-goToTtl": "Aller au mois de l'année",
	"%cal-goToMnth": "Mois :",
	"%cal-goToYr": "Année :",
	"%cal-goToBtn": "Aller",
	"%prvMnth": "Mois précédent : ",
	"%nxtMnth": "Mois suivant : ",
	/* Slideout */
	"%show-toc": "Afficher la table des matières",
	"%hide-toc": "Cacher la table des matières",
	"%toc": "la table des matières",
	/* Lightbox */
	"%lb-curr": "Article %curr% de %total%",
	"%lb-xhr-err": "Le chargement de ce contenu a échoué.",
	"%lb-img-err": "Le chargement de cette image a échoué.",
	/* Charts widget */
	"%table-mention": "Tableau",
	"%table-following": "Graphique. Plus de détails dans le tableau suivant.",
	/* Session timeout */
	"%st-to-msg-bgn": "Votre session expirera automatiquement dans #min# min #sec# sec.",
	"%st-to-msg-end": "Sélectionner « Continuer la session » pour prolonger votre session.",
	"%st-msgbx-ttl": "Avertissement d'expiration de la session",
	"%st-alrdy-to-msg": "Désolé, votre session a déjà expiré. S'il vous plaît vous connecter à nouveau.",
	"%st-btn-cont": "Continuer la session",
	"%st-btn-end": "Mettre fin à la session",
	/* Toggle details */
	"%td-toggle": "Basculer tout",
	"%td-open": "Afficher tout",
	"%td-close": "Réduire tout",
	"%td-ttl-open": "Afficher toutes les sections de contenu",
	"%td-ttl-close": "Réduire toutes les sections de contenu",
	/* Table enhancement */
	"%sortAsc": "&#160;: activer pour tri ascendant",
	"%sortDesc": "&#160;: activer pour tri descendant",
	"%emptyTbl": "Aucunes données sont disponibles dans la table",
	"%infoEntr": "Montre _START_ à _END_ de _TOTAL_ entrées",
	"%infoEmpty": "Montre 0 à 0 de 0 entrées",
	"%infoFilt": "(filtré de _MAX_ entrées totales)",
	"%info1000": "&#160;",
	"%lenMenu": "Montrer _MENU_ entrées",
	/* Geomap */
	"%geo-mapcontrol": "Contrôle de la carte",
	"%geo-zoomin": "Zoom avant",
	"%geo-zoomout": "Zoom arrière",
	"%geo-zoomworld": "Zoom sur l'étendue de la carte",
	"%geo-zoomfeature": "Zoom à l'élément",
	"%geo-scaleline": "Échelle de la carte",
	"%geo-mouseposition": "Latitude et longitude du curseur de la souris",
	"%geo-ariamap": "Objet de la carte. Les descriptions des caractéristiques de la carte se trouvent dans la table ci-dessous.",
	"%geo-accessibilize": "<strong>Utilisateurs de clavier :</strong> Lorsque la carte a l'attention, utiliser les touches flèches pour déplacer la carte et utiliser les touches plus et négatif pour faire un zoom. La carte ne peut être déplacée lorsque le zoom est à son étendue maximal.",
	"%geo-accessibilizetitle": "Instructions : comment naviguer dans la carte",
	"%geo-togglelayer": "Basculer l'affichage de la couche",
	"%geo-hiddenlayer": "Cette couche est présentement cachée.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBCT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBCT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=fr",
	"%geo-attributiontitle": "GéoGratis - Carte de Base du Canada",
	"%geo-select": "Sélectionnez",
	"%geo-labelselect": "Cochez pour sélectionner cet élément sur la carte",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Version HTML simplifiée",
	"%wb-enable": "Version standard",
	/* Template */
	"%tmpl-signin": "Ouvrir une session"
};

window.i18nObj = ind;

})( window );