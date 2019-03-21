<?php
/**
 * Created by PhpStorm.
 * User: racine
 * Date: 18/03/19
 * Time: 12:07
 */

echo '<!DOCTYPE html><html lang="fr">
    <head>
        <title>Page des associations</title>
        
         <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous">

    <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
            integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
            crossorigin=""/>

    <link
            rel="stylesheet"
            href="css/cartoMDM.css"/>

    <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css"/>

    <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css"/>


    <!-- Make sure you put this AFTER Leaflet\'s CSS-->
    <script
            src = "https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"
            integrity = "sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA=="
            crossorigin = "" ></script >


    <script src = "https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js" ></script >

    <!--Bootstrap Twitter-->
    <script
            src = "https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin = "anonymous" >
    </script >
    <script
            src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity = "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin = "anonymous" >
    </script >
    <script
            src = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity = "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin = "anonymous" >
    </script >    
    </head>
    <body onload="afficherBloc(\'blocRecap\');">
        <div>
            <button onclick="effacerBlocsAsso();afficherBloc(\'blocRecap\');">Informations générales</button>
            <button onclick="effacerBlocsAsso();afficherBloc(\'blocEntraide\');">Entraide</button>
            <button onclick="effacerBlocsAsso();afficherBloc(\'blocContacts\');">Contacts Métropole</button>
        </div>
        
        <div class="blocMasquable" id="blocRecap">
            <h1>Mon association</h1>
            
            <form>
                <label for="nomAsso">Nom de l\'association :<input type="text" id="nomAsso"></label>
                <label for="adresseAsso">Adresse :<input type="text" id="adresseAsso"></label>
                <label for="telAsso">Téléphone :<input type="text" id="telAsso"></label>
                <label for="contactUrgenceAsso">Téléphone :<input type="text" id="contactUrgenceAsso"></label>
                
                <div>               
                TODO : Insérer carte ici
                </div>
                <h3>Votre champ d\'action</h3>
                
                <select>
                    <option>Alimentaire</option>
                    <option>Logement</option>
                    <option>Autres</option>
                </select>
                
                <h4>Public visé</h4>
                <p><label><input type="checkbox">Adultes seuls</label></p>
                <p><label><input type="checkbox">Famille</label></p>
                <p><label><input type="checkbox">Enfants</label></p>
                
                <button>+ Ajouter un champ d\'action</button>
                
                <div><h4>Horaires de l\'association</h4><label for="horairesAsso"><textarea id="horairesAsso"></textarea></label></div>
                
                <div><h4>Présentation de l\'association</h4><label for="prezAsso"><textarea id="prezAsso"></textarea></label></div>
            </form>
        </div>
        
        <div class="blocMasquable" id="blocEntraide">
            <div><button>Ajouter une demande</button></div>
        
            <h1>Demandes d\'entraide</h1>
            
            <div class="blocDemande">
            Besoin 3 chaises urgent<button>Répondre</button>
            </div>
            
            <div class="blocDemande">
            Réparation dun ordinateur<button>Répondre</button>
            </div>
            
            <div class="blocDemande">
            Cherche un local pour mercredi<button>Répondre</button>
            </div>
            
            <div class="blocDemande">
            Quelqu\'un sait comment remplir le formulaire A38 ?<button>Répondre</button>
            </div>
        
        </div>
        
        <div class="blocMasquable" id="blocContacts">
            <h2>Vos contacts à la Métropole :</h2>
            
            <button>Prendre un rendez-vous à la Métropole</button>
        </div>
    
    <script src="js/carto.js"></script>        
    </body>
</html>';