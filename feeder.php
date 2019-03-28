<?php
$donneesCompletes = array();

$file = fopen('docs/bdd.csv', 'r');
while (($line = fgetcsv($file)) !== FALSE) {
    array_push($donneesCompletes, $line);
}

//var_dump($donneesCompletes);
echo json_encode($donneesCompletes);