$(function() {
    $('#btn-submit').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/oresteja@gmail.com",
                method: "POST",
                data: {
                    name: $('#client-name').val(),
                    phone: $('#client-phone').val(),
                    email: $('#client-email').val()
                },
                dataType: "json"
            })
            .done(function(data) {
                console.dir(data);
                $('contacts').html('<h1>Thank you!</h1>');
            });
    });
});
