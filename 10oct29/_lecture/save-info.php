<?php
	include 'mailer.php';
	
	welcome($_POST['email']);
	
	ini_set("allow_url_fopen", true);
	
	ini_set('display_errors', true);
    error_reporting(E_ALL);

	$theFile = fopen('storage.txt', 'w') or die('great big horror');
	
	foreach ($_POST as $item) {
		fwrite($theFile, "\n$item") or die('great big horror, but this time i was writing');
	}
	
	fclose($theFile) or die('closing');
	
	echo 'writing all done';
// 	header('Location: ' . 'http://people.emich.edu/egurnee/teach/231/fa15/10oct29/form.html');
?>