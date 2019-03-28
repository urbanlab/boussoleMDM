<?php
$donneesCompletes = array();

$file = fopen('docs/Copie_de_BOUSSOLE2.csv', 'r');
while (($line = fgetcsv($file)) !== FALSE) {
    array_push($donneesCompletes, $line);
}

//var_dump($donneesCompletes);
echo json_encode($donneesCompletes);