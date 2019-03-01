<?php
//---poczatek form
    $adresat = 'kontakt@dariuszsuchy.pl';
    
    
    @$formName = $_POST['formName'];
    @$formSurname = $_POST['formSurname'];
    @$formEmail = $_POST['formEmail'];
    @$formText = $_POST['formText'];
    
    $formTextFull = 'Imie: ' . $formName . "\n" . 'Nazwisko: ' . $formSurname . "\n" . 'Adres email: ' .$formEmail . "\n" . "\n\n\n" . "Tresc wiadomosci: ". "\n" . $formText;


    $header = 	"From: $formEmail \nContent-Type:".
			' text/plain;charset="UTF-8"'.
			"\nContent-Transfer-Encoding: 8bit";
    if(!empty($formName) && !empty($formSurname) && !empty($formEmail) && !empty($formText)) {        
        if (mail($adresat, 'Wiadomosc z formularza kontaktowego', $formTextFull, $header))
		echo '<p>Wiadomość została wysłana</p>';
        
	else 
		echo '<p><b>NIE</b> wysłano maila</p>';
    }
    
    else
        echo '<p><b>Nie wszystkie pola formularza zostały uzupełnione. Wiadomość nie zostanie wysłana</b></p>'
?>


