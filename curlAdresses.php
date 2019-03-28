<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$adresses = array(["Maison de la Veille Sociale du Rh\u00f4ne","","","246 rue Duguesclin 69003 Lyon","","","04.78.95.00.01","contact.mvs@mvsrhone.fr","","PRECARITE | LOGEMENT","h\u00e9bergement d'urgence | recherche de logement","","Toute personne priv\u00e9e de domicile personnel ayant besoin d\u2019un h\u00e9bergement temporaire en attednant de pouvoir trouver son propre logement","Lundi et mardi\u00a09h-12h et 14h-17h, mercredi et vendredi 9h-12h, jeudi 13h-18h","","",""],
                      ["Centre Communal d\u2019Action Sociale","","","14 place Charles Ottina, 69800 Saint-Priest","","","04.37.25.12.49","","sur rendez-vous","PRECARITE | LOGEMENT","h\u00e9bergement d'urgence | recherche de logement","","Toute personne priv\u00e9e de domicile personnel ayant besoin d\u2019un h\u00e9bergement temporaire en attednant de pouvoir trouver son propre logement","Lundi 9h-12h, jeudi 14h-17h, vendredi 9h-12h","","",""],
                      ["Point Accueil LAHSo Antenne MVS","","","66 rue Etienne Richerand, 69003 Lyon","","C9 arr\u00eat Pompidou ou Sacr\u00e9 Coeur, C16 arr\u00eate Sacr\u00e9 Coeur, T3 ou T4 Part Dieu Villette","   1 15","","sur rdv avec la MVS pour les personnes sans droit de s\u00e9jour sans domicile fixe, accueil inconditionnel sans rendez-vous","PRECARITE | LOGEMENT | ALIMENTAIRE","accueil de jour | aide alimentaire | recherche de logement","","Personnes sans droit de s\u00e9jour, hommes, femmes, familles sans domicile fixe","Homme seul\u00a0: lundi-vendredi 9h-12h, Famille\u00a0: lundi-vendredi 13h30-16h30  et permanence le mercredi apr\u00e8s-midi, Femme seule\u00a0: permanence mardis et jeudis apr\u00e8s-midis","","","> 18 ans"],
                      ["Maison de Rodolphe","","","105 rue Villon 69008 Lyon","","T2 arr\u00eat Villon","04 78 74 91 53 ","","Lieu d\u2019accueil inconditionnel et convivial pour une mise \u00e0 l\u2019abri en journ\u00e9e, proposant des actions d\u2019orientation et\/ou d\u2019accompagnement et des r\u00e9ponses aux besoins fondamentaux. H\u00e9bergement et accompagnement destin\u00e9 \u00e0 aider les personnes isol\u00e9es et les familles en d\u00e9tresse \u00e0 retrouver leur autonomie personnelle et sociale, participation financi\u00e8re \u00e0 hauteur de 30\u00a0%. Animaux accept\u00e9s.","PRECARITE | LOGEMENT","accueil de jour | hygi\u00e8ne et soins | h\u00e9bergement d\u2019urgence","Accueil de jour\u00a0: R\u00e9fectoire, accompagnement social, r\u00e9f\u00e9rent RSA, point sant\u00e9, acc\u00e8s \u00e0 l\u2019hygi\u00e8ne, collation, repas midi, vestiaire, buanderie, domiciliation postale, animations, biblioth\u00e8que. H\u00e9bergement\u00a0: Chambres, consigne, r\u00e9fectoires, Espaces cuisines, accompagnement social,  Point sant\u00e9, Possibilit\u00e9 d\u2019accueillir les animaux dans les chambres, espaces communs r\u00e9serv\u00e9s pour les personnes isol\u00e9es et pour les familles.","Accueil de jour\u00a0: Personne majeure en situation d\u2019exclusion, d\u2019errance, et de grande pr\u00e9carit\u00e9\nH\u00e9bergement\u00a0: Familles et hommes isol\u00e9s accompagn\u00e9s de chien(s)","Ete 01\/04 au 31\/10\u00a0: lundi-vendredi, 7h45-15. Hiver du 01\/11 au 30\/03\u00a0: lundi-vendredi 7h-17h.","","",""],
                      ["Vestiboutique","","","16 rue Paul Cazeneuve 69008 Lyon","","","06.15.33.67.72 ","","","PRECARITE","v\u00eatements","","","Mardi \u2013 mercredi - jeudi 14h-17h, samedi 9h-12h","","",""],
                      ["Vestiboutique","","","30 rue Louis-Loucheur 69009 Lyon","","","04.82.53.88.48 ","","","PRECARITE","v\u00eatements","","","Mardi \u2013 mercredi - jeudi 13h30-17h","","",""],
                      ["Bains douches municipaux","","","13 rue Benjamin Delessert 69007 Ville Lyon ","","M\u00e9tro B station Stade de Gerland - Tram T1 station Debourg ","4 78 72 69 01","","Accueil inconditionnel et gratuit de tout public pour l\u2019acc\u00e8s \u00e0 l\u2019hygi\u00e8ne. Remise d\u2019une serviette, savon et shampooing. La structure est dot\u00e9e d\u2019\u00e9quipements sanitaires \u00e0 destination des personnes \u00e0 mobilit\u00e9 r\u00e9duite (2 cabines de douches et 2 toilettes).","PRECARITE","hygi\u00e8ne et soins","","","Lundi-vendredi 7h30-18h, 1e mardi du mois 7h30-11h30, ferm\u00e9 les jours f\u00e9ri\u00e9s et une semaine en fin d\u2019ann\u00e9e","","",""],
                      ["Boutique du Secours Populaire","","","21 rue Galland 69007 Lyon","","","04 72 77 87 77 ","contact@spf69.org ","","PRECARITE","v\u00eatements","Brocante, occasion et neuf ","","Lundi 14h-17h, mercredi 9h-12h","","",""],
                      ["CMCAS","","","30 rue Bellecombe 69006 Lyon","","","","","","LOISIRS | CULTURE SOCIOCULTUREL","Vacances | activit\u00e9s sportive ou culturelle | activit\u00e9 culturelle","","","","","",""],
                      ["Secours Catholique","","","76 rue d'Alsace 69100 Villeurbanne","","","04\u00a072\u00a033\u00a038\u00a038 ","rhone@secours-catholique.org","","PRECARITE","v\u00eatements","","","","","",""],
                      ["Restos du coeur","","","19bis rue Dumont Durville 69004 Lyon","","S6 arr\u00eat Croix-Rousse - C13 arr\u00eats place Bertone ou Hopital Croix-Rousse ","04 78 30 13 19 ","ad69.cxroussecaluire@restosducoeur.org","","PRECARITE | ALIMENTAIRE","aides alimentaires | colis alimentaire | \u00e9picerie alimentaire","","","Pr\u00e9-inscriptions : mardi 12 Mars 13h30-16h et jeudi 14: 9h-11h30 et 13h30-16h30 Inscriptions : Mardi 26 et jeudi 28 9h-11h30 et 13h30-16h30 Mercredi 27: 9h-11h30 Distributions : mercredi 17h30-19h jeudi 9h-11h30 et 14h-16h30 1\u00e8re P\u00e9riode : du 3 avril au 4 juillet 2\u00e8me P\u00e9riode : du 28 ao\u00fbt au 30 octobre ","","",""],
                      ["Restos du coeur","","","18 passage Faugier 69007 Lyon","","M\u00e9tro B direction Stade de Gerland arr\u00eat Place Jean Mac\u00e9 - Tramway T2 direction St Priest Bel Air arr\u00eat Jean Mac\u00e9 - Bus S3 direction Jean Mac\u00e9 arr\u00eat Lortet","04 72 76 96 20 ","ad69.jeanmace@restosducoeur.org","","PRECARITE | ALIMENTAIRE","aides alimentaires | colis alimentaire | \u00e9picerie alimentaire","","","","","",""],
                      ["Epi Centre","","","104 Route de Vienne, 69008 Lyon ","","","07 82 35 55 56 ","","","PRECARITE | ALIMENTAIRE","aides alimentaires | \u00e9picerie alimentaire","","","","","",""]);

//var_dump($adresses);
echo 'toto';
foreach ($adresses as &$asso) {
    $adresse = $asso[3];
    $adresseFormatee = str_replace(" ", "+", $adresse);

    // Get cURL resource
    $curl = curl_init();
    // Set some options - we are passing in a useragent too here
    curl_setopt_array($curl, [
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => 'https://api-adresse.data.gouv.fr/search/?q=' . $adresseFormatee,
        CURLOPT_USERAGENT => 'Codular Sample cURL Request'
    ]);
    // Send the request & save response to $resp
    $resp = curl_exec($curl);
    var_dump($resp);
    // Close request to clear up some resources
    curl_close($curl);
}
