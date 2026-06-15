$(function () {

    emailjs.init('zE-zuKEJ9PsxfKMbi');

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {},
        submitSuccess: function ($form, event) {
            event.preventDefault();

            var name    = $("input#name").val();
            var email   = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            var $btn = $("#sendMessageButton");
            $btn.prop("disabled", true);

            var templateParams = {
                from_name  : name,
                from_email : email,
                subject    : subject,
                message    : message
            };

            emailjs.send('service_rdj169m', 'template_4kz8h7m', templateParams)
                .then(function () {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append("<strong>Votre message a bien été envoyé, merci !</strong>");
                    $('#contactForm').trigger("reset");
                }, function () {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append($("<strong>").text("Désolé " + name + ", une erreur s'est produite. Veuillez réessayer plus tard."));
                    $('#contactForm').trigger("reset");
                })
                .finally(function () {
                    setTimeout(function () { $btn.prop("disabled", false); }, 1000);
                });
        },
        filter: function () {
            return $(this).is(":visible");
        }
    });

    $("a[data-toggle='tab']").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
