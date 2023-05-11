<?php
echo '<a href="http://localhost/file2.php?choice=1">One</a>';
echo '<a href="http://localhost/file2.php?choice=2">Two</a>';
echo '<a href="http://localhost/file2.php?choice=3">Three</a>';
if (isset($_GET['choice'])) {
        echo 'You chose ' . $_GET['choice'];
} else {
}