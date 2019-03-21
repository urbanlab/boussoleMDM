function afficherBloc(idBlocAAfficher='') {
    document.getElementById(idBlocAAfficher).style.display = 'block';
}

function effacerBlocsAsso() {
    document.getElementById('blocRecap').style.display = 'none';
    document.getElementById('blocEntraide').style.display = 'none';
    document.getElementById('blocContacts').style.display = 'none';
}

/**
 * @author : Pierre-Alexandre Racine (pierrealexandreracine -at(@)- gmail -dot(.)- com)
 * @owner : ERASME (https://www.erasme.org/)
 * @copyright : ERASME (https://www.erasme.org/)
 * @license  : ALFERO GPL ( https://www.gnu.org/licenses/agpl-3.0.fr.html )
 * Project : cartographie.erasme.org (cartographie des labs de la Métropole de Lyon)
 * Date: 26/09/18
 * Time: 11:55
 */

// On créé une carte que l'on centre et zoome sur la région lyonnaise.
var mymap = L.map('carte').setView([45.776597, 4.804046], 13);
var markers = L.markerClusterGroup();

/***********************************************************************************************************************
 *                                              LISTE ASSOCIATIONS
 **********************************************************************************************************************/
var associations = {
    petiteEnfance:{
        0:{
            nom:'À petit pas',
            adresse:'9 rue Roquette',
            latitude:'45.776401',
            longitude:'4.8059408',
            choisi:false,
        },
        1:{
            nom:'Crèche attitude',
            adresse:'47 rue de Saint-Cyr',
            latitude:'45.781187',
            longitude:'4.807082',
            choisi:false,
        },
        2:{
            nom:'L\'Ours en Peluche',
            adresse:'21 rue Émile Duport',
            latitude:'45.784528',
            longitude:'4.810366',
            choisi:false,
        },
        3:{
            nom:'Multiaccueil La Chrysalide',
            adresse:'16 Boulevard de Saint-Exupéry',
            latitude:'45.771594',
            longitude:'4.80568',
            choisi:false,
        },
    },
    handicap:{

    },
    logement:{

    },
    accompagnementAuxDemarches:{

    },
    senior:{

    },
    parentalite:{

    },
    sante:{

    },
    alimentaire:{
        0:{
            nom:'Colis alimentaires, Restos du cœur',
            adresse:'143bis avenue Sidoine Appolinaire',
            latitude:'45.764009',
            longitude:'4.8034651',
            choisi:false,
        },
        1:{
            nom:'Colis alimentaires, Restos du cœur',
            adresse:'26 avenue Rosa Parks',
            latitude:'45.7870096',
            longitude:'4.7915896',
            choisi:false,
        },
        2:{
            nom:'Saint-Rambert solidarité',
            adresse:'5 place Henri Barbusse',
            latitude:'45.798577',
            longitude:'4.830026',
            choisi:false,
        },
        3:{
            nom:'Croix-Rouge',
            adresse:'20 rue Gorge de Loup',
            latitude:'45076945',
            longitude:'4.800178',
            choisi:false,
        },
        3:{
            nom:'Secours Populaire',
            adresse:'8 rue Maurice Bellemain',
            latitude:'45.762538',
            longitude:'4.791006',
            choisi:false,
        },
        4:{
            nom:'Épicerie Sociale et Solidaire',
            adresse:'76 rue des Docks',
            latitude:'45.7897413',
            longitude:'4.8143465',
            choisi:false,
        },
    },
    developpementDurable:{

    },
};

/***********************************************************************************************************************
 *                                              GESTION DES DONNÉES
 **********************************************************************************************************************/
/**
 * On récupère les associations répondant aux filtres de :
 * - catégorie
 * - maison du demandeur
 * - distance de la maison du demandeur
 *
 * Une fois récupéré, on les liste dans le bloc div d'id « blocResultats » ainsi que sous forme de marqueurs sur la
 * carte.
 *
 * @param categorie La catégorie qui nous intéresse.
 */
function getAssociationsCorrespondantes(categorie) {
    miseAJourMarqueurs(categorie);
    document.getElementById('blocResultats').innerHTML='';
    // Prenons les associations répondant à nos critères.
    for (let association in associations[categorie]) {
        // On ajoute à la liste des résultats
        document.getElementById('blocResultats').innerHTML += '<div class="resultat" onclick="ajouterALaSelection(\'' + categorie + '\',' + association + ');">' + associations[categorie][association].nom + '</div>';
        // Ajoutons leur marqueur sur la carte.
        //miseAJourMarqueurs(categorie);
        //if(!associations[categorie][association].choisi) {
        //   markers.addLayer(L.marker([associations[categorie][association].latitude, associations[categorie][association].longitude])/*.bindPopup(codePopUp)*/);
        // }
    }
    mymap.addLayer(markers);
}

function ajouterALaSelection(categorie='', id='')
{
    if(!associations[categorie][id].choisi) {
        document.getElementById('blocProjetsSelectionnes').innerHTML += '<div onclick="supprimerSelection(this.id, \'' + categorie + '\', ' + id + ')" id="selection_' + categorie + '_' + id + '" class="elementSelection">' + associations[categorie][id].nom + '</div>';
        associations[categorie][id].choisi = true;
    }
    miseAJourMarqueurs(categorie);
}

function supprimerSelection(idSelection, categorie, id)
{
    /*
    let element = document.getElementById(idSelection);
    element.parentNode.removeChild(element);
    associations[categorie][id].choisi=false;
    mymap.removeLayer(markers);

    miseAJourMarqueurs(categorie);
    */
}




/***********************************************************************************************************************
 *                                              GESTION DE LA CARTE
 **********************************************************************************************************************/

// On ajoute une tuile sur la carte avec les outils utilisés.

/*
    FONDS DE CARTE INTÉRESSANTS :
    https://{s}.piano.tiles.data.gouv.fr/fr{r}/{z}/{x}/{y}.png
    OSM Hydda               : https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png
    OSM Positron (Carto)    : https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png

 */
L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> | ' +
        '<a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

function miseAJourMarqueurs(categorieCourante='') {
    // On efface tous les marqueurs
    markers.clearLayers();

    // Puis on affichera ceux qui ont déjà été selectionnés.
    for (let categorie in associations) {
        //console.log(categorie);
        for (let idAssociation in associations[categorie]) {
            if (associations[categorie][idAssociation].choisi) {
                //markers.addLayer(L.marker([associations[categorie][idAssociation].latitude, associations[categorie][idAssociation].longitude])/*.bindPopup(codePopUp)*/);
                var myIcon = L.icon({
                    iconUrl: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF',
                    iconSize: [38, 96],
                    iconAnchor: [22, 94],
                    popupAnchor: [-3, -76],
                    shadowSize: [34, 96],
                    shadowAnchor: [22, 94]
                });
                L.marker([associations[categorie][idAssociation].latitude, associations[categorie][idAssociation].longitude], {icon: myIcon}).addTo(mymap);
            } else {
                if(categorie===categorieCourante) {
                    markers.addLayer(L.marker(
                        [associations[categorie][idAssociation].latitude, associations[categorie][idAssociation].longitude]
                    ))/*.bindPopup(codePopUp)*/;
                }
            }
        }
    }
}
//
//
// /**
//  * La fonction génère le code HTML qui sera injecté dans le pop-up correspondant à un lab.
//  * @param lab Les données du lab dont on extraiera les infos.
//  * @returns {string} Du code HTML représentant les infos du lab. Utilisé dans les pop-ups des marqueurs.
//  */
// function forgerTextePopUp(lab)
// {
//     let textePopUp = "\n" +
//         '<h1>' + lab['titre'] + '</h1>' + "\n" +
//         '<p>Géré par ' + lab['gouvernance'] + "\n" +
//         ' avec pour public cible : ' + lab['publicCible'] + '</p>' + "\n";
//
//     if(lab['description']!=='')
//     {
//         textePopUp += '<h3>Description :</h3>' + "\n" +
//             '<p>' + lab['description'] + '</p>' + "\n";
//     }
//
//     if(lab['adressePostale']!=='')
//     {
//         textePopUp += '<p><b>Adresse : </b>' + lab['adressePostale'] + '</p>'  + "\n";
//     }
//
//     if(lab['web']!=='')
//     {
//         textePopUp += '<p><a href="' + labs[i]['web'] + '" title="Site web de ' + labs[i]['titre'] + '">Site web</a></p>' + "\n";
//     }
//     return textePopUp;
// }

/***********************************************************************************************************************
 *                                             AIDE À LA CARTO
 **********************************************************************************************************************/
// Aide à la carto : un clic sur la carte donnera les coordonnées. Utile pour les retardataires ne connaissant pas
// leurs coordonnées géographiques ou ne sachant pas comment les avoir.

var popup = L.popup();
/**
 * Un clic sur la carte fera apparaître un petit pop-up indiquant les coordonnées du point cliqué.
 * Cela sert à aider les responsables de labs à trouver leurs coordonnées exactes si ils n'y arrivent pas.
 * @param e Le point cliqué sur la carte.
 */
function onMapClick(e)
{
    popup
        .setLatLng(e.latlng)
        .setContent("Coordonnées (lat, long) " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);
/***********************************************************************************************************************
 *
 **********************************************************************************************************************/