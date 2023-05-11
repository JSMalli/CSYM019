
<form action="double.php" method="GET">
        <input type="text" name="num" />
        <input type="submit" value="Submit" name="submit" />
</form><?php
echo 2*$_GET['num']
?>