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
            
// If the submit button was pressed
if (isset($_POST['submit'])) {
$stmt = $pdo->prepare('INSERT I person (email, firstname, surname) VALUES (:email, :firstname, :surname)');
$values = [
 'firstname' => $_POST['firstname'],
 'surname' => $_POST['surname'],
 'email' => $_POST['email']
 ];
$stmt->execute($values);
}
?>
<form action="add.php" method="POST">
<label>First name:</label>
<input type="text" name="firstname" />
<label>Surname:</label>
<input type="text" name="surname" />
<label>Email:</label>
<input type="text" name="email" />
<input type="submit" name="submit" value=”Submit” />
</form>
