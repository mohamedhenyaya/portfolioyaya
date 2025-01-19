<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject_message = $_POST['subject'];
    $message = $_POST['message'];

    // Définir l'adresse email de destination
    $to = "mohamedhen.yaya@gmail.com";  // Remplacez par votre adresse email
    $subject = "Nouveau message depuis le portfolio";

    // Construire le corps de l'email
    $body = "Nom: $name\nEmail: $email\nSujet: $subject_message\nMessage: $message";

    // Définir les headers pour l'email
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Envoyer l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès!";
    } else {
        echo "Erreur dans l'envoi du message.";
    }
} else {
    echo "Aucune donnée reçue.";
}
?>
