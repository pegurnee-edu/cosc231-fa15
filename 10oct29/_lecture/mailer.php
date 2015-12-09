<?php
	function send_mail($to, $subject, $message) {
		$from = 'egurnee@emich.edu';
		
		$message = wordwrap($message, 70);
		
		$headers = "From: $from" . "\r\n";
		
		mail($to, $subject, $message, $headers);
	}
	
	function welcome($to) {
		$subject = "Welcome dude";
		$message = "Welcome to the club I hope you like iron man becuase i do very much and ayaoy u ou should omg her's tday sbest.";
		
		send_mail($to, $subject, $message);
	}
