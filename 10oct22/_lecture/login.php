<?php 
	if ($_POST['username'] === 'eddie' && $_POST['password'] === 'mypass') {
		header('Location: member.html');
		die();
		
	} else {
		echo 'Not a member';
	
	}

?>