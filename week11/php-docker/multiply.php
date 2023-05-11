<form action="multiply.php" method="GET">
        <input type="text" name="num1" />
        <input type="text" name="num2" />
        <input type="submit" value="Submit" name="submit" />
</form>

<?php
echo $_GET['num1']*$_GET['num2'];
?>