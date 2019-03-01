$('#contactForm').on('submit', function(e) {
    var name = $('#formName').val();
    var surname = $('#formSurname').val();
    var email = $('#formEmail').val();
    var textArea = $('#inputTextArea').val();

    if((name && surname && email && textArea) != "") {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'kontakt.php',
            data: $('#contactForm').serialize(),
            success: function() {
                alert('Wiadomość została wysłana');
                $('#formName').val('');
                $('#formSurname').val('');
                $('#formEmail').val('');
                $('#inputTextArea').val('');
            }
        });
    }
    else {
        e.preventDefault();
        alert('Nie udało się wysłać wiadomości, nie wszystkie pola zostały wypełnione');
    }
});
