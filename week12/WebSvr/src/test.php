<?php
$server = 'db';
  $username = 'root';
  $password = 'csym019';
  //The name of the schema/database we created earlier in Adminer
  //If this schema/database does not exist you will get an error!
  $schema = 'Internet_programming';
  $pdo = new PDO('mysql:dbname=' . $schema . ';host=' . $server, $username, $password,
            [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
$results = $pdo->query('SELECT * FROM person');

$results = $pdo->query('SELECT * FROM person');
foreach ($results as $row) {
    echo    "TEST MESSAGE: it works";
        echo '<p>' . $row['firstname'] . '</p>';} ?>