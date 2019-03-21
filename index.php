<?php
/**
 * Created by PhpStorm.
 * User: racine
 * Date: 18/03/19
 * Time: 12:01
 */

echo '<p>Bienvenue sur l\'application Boussole</p>';

echo '<p><a href="monAsso.php">On commence par la création de la page dédiée aux associations elles-même</a></p>';

echo '<p><a href="admin.php">page admin</a></p>';

echo '<!DOCTYPE html>
<html lang=\'fr\'>
<head>
    <!--
    Auteur : Pierre-Alexandre RACINE
    Propriétaire : Erasme (https://www.erasme.org/)
    Licence  : ALFERO GPL ( https://www.gnu.org/licenses/agpl-3.0.fr.html )
    Copyright : ERASME (https://www.erasme.org/)
    -->
    <title>MDM5</title>

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
</head >

<body >

<div id = "blocGauche" >
    <div id = "blocFiltres" >
        <div >
            <label for="adresseRequerant" > Adresse du demandeur :</label >
            <input type = "text" id = "adresseRequerant" >
        </div >
        <div >
            <label for="emailRequerant" > E-mail du demandeur :</label >
            <input type = "text" id = "emailRequerant" >
        </div >
        <div >
            <label for="distanceAuFoyer" > Distance de déplacement :</label >
            <input type = "number" id = "distanceAuFoyer" value = "50" >
        </div >
        <div >
            <div ><img title = "Petite enfance" class="pictoCategorie" src = "svg/baby-solid.svg" onclick = "getAssociationsCorrespondantes(\'petiteEnfance\');" ></div >
            <div ><img title = "Santé" class="pictoCategorie" src = "svg/briefcase-medical-solid.svg" onclick = "getAssociationsCorrespondantes(\'sante\');" ></div >
            <div ><img class="pictoCategorie" src = "svg/child-solid.svg" title = "Parentalité" onclick = "getAssociationsCorrespondantes(\'parentalite\');" ></div >
            <div ><img class="pictoCategorie" src = "svg/crutch-solid.svg" title = "Senior" onclick = "getAssociationsCorrespondantes(\'senior\');" ></div >
            <div ><img class="pictoCategorie" src = "svg/hands-helping-solid.svg" title = "Accompagnement aux démarches" onclick = "getAssociationsCorrespondantes(\'accompagnementAuxDemarches\');" ></div >
            <div ><img class="pictoCategorie" src = "svg/home-solid.svg" title = "Logement" onclick = "getAssociationsCorrespondantes(\'logement\')" ></div >
            <div ><img class="pictoCategorie" src = "svg/leaf-solid.svg" title = "Développement durable" onclick = "getAssociationsCorrespondantes(\'developpementDurable\');" ></div >
            <div ><img class="pictoCategorie" src = "svg/utensils-solid.svg" title = "Alimentaire" onclick = "getAssociationsCorrespondantes(\'alimentaire\');" ></div >
            <div ><img class="pictoCategorie" src = "svg/wheelchair-solid.svg" title = "Handicap" onclick = "getAssociationsCorrespondantes(\'handicap\');" ></div >
        </div >
    </div >
    <div id = "blocResultats" ></div >
    <div id = "blocProjetsSelectionnes" >
        <h4 > Résultats sélectionnés :</h4 >
    </div >
    <div >
        <button type = "button" class="btn btn-primary btn-sm" id = "boutonPDF" > Télécharger en pdf </button >
        <button type = "button" class="btn btn-info btn-sm" id = "boutonEmail" > Envoyer par mail </button >
    </div >

</div >

    <div id = "carte" ></div >

    <script src = "js/carto.js" ></script >

</body >
</html >';