const besoins = {
    accesAuxDroits:[
        'Accompagnement aux démarches',
        'Documents administratifs',
        'Rédaction de courrier',
    ],
    alimentaire:[
        'Aide financière',
        'Colis alimentaire',
        'Epicerie alimentaire',
        'Distribution alimentaire',
    ],
    culture:[
        'Activité culturelle',
        'Entraide',
        'Animation sociale',
    ],
    devDurable:[
        'Économie d\'énergie',
    ],
    emploi:[
        'Recherche d\'emploi',
        'Information sur les droits',
        'Insertion',
    ],
    handicap:[
        'Association de soutien',
        'Drapeaux adoption',
    ],
    logement:[
        'Recherche de logement',
        'Demande de logement social',
        'Equipement / Travaux',
        'Déménagement',
        'Information sur les droits',
        'Hébergement d\'urgence',
        'Recherche d\'hébergement',
    ],
    loisirs:[
        'Vacances',
        'Centre aéré',
        'Activités sportive ou culturelle',
    ],
    parentalite:[
        'Soutien à la parentalité',
        'Education de prévention',
    ],
    petiteEnfance: [
        'Mode de garde',
        'Difficulté parentale',
        'Santé',
        'Scolarité',
    ],
    precarite:[
        'Accueil de jour',
        'Hébergement d\'urgence',
        'Aides alimentaires',
        'Vêtements',
        'Hygiène et soins',
        'Magasin solidaire',
    ],
    sante:[
        'Démarches',
        'Centres médicaux gratuits',
        'Addictions',
        'Enfance',
    ],
    senior: [
        'Lutte contre l\'isolement',
        'Besoins relatif au logement',
        'Demande d\'aire financière',
        'Loisirs',
        'Aide à domicile',
    ],
};

function masquerBlocs()
{
    const blocsAMasquer = document.getElementsByClassName('blocMasquable');
    for (let i = 0; i < blocsAMasquer.length; i++) {
        blocsAMasquer[i].style.display = 'none';
    }
}

function afficherBloc(idBlocAAfficher)
{
    document.getElementById(idBlocAAfficher).style.display='block';
}

function mettreAJourPrecisionsCriteres(idBesoin) {
    const blocPrecision = document.getElementById('precisionBesoin');
    let textePrecisionBesoin ='<h5 id="titrePrecisionsBesoins">Quel est le besoin plus précisément ?</h5>';
    for (let besoin in besoins[idBesoin]) {
        console.log(besoins[idBesoin][besoin]);
        textePrecisionBesoin += '<p><label><input type="checkbox">' + besoins[idBesoin][besoin] + '</label></p>';
    }
    blocPrecision.innerHTML=textePrecisionBesoin;
}

function assombrir(idAAssombrir) {
    document.getElementById(idAAssombrir).style.backgroundColor = 'gray';
}
function eclaircir(idAEclaircir) {
    document.getElementById(idAEclaircir).style.backgroundColor = 'lightgray';
}