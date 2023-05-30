<?php
//////////////////////
//Connect to database//
///////////////
$server = 'db';
  $username = 'root';
  $password = 'csym019';
  //The name of the schema/database we created earlier in Adminer
  //If this schema/database does not exist you will get an error!
  $schema = 'Internet_programming';
  $pdo = new PDO('mysql:dbname=' . $schema . ';host=' . $server, $username, $password,
            [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

 ///////////////
 ///Run an SQL query to retrieve the data from the person table
 //////////////////
$results = $pdo->query('SELECT * FROM person');

//////////////////////////
//use a for each loop to print the data returned by the query, to the browser window (web page)
//a .php extension
///////////////////////
$results = $pdo->query('SELECT * FROM person');
foreach ($results as $row) {
        echo '<p>' . $row['Firstname'] . '</p>';} ?>