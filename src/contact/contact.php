<?php
    $toEmail = 'catherineshing@gmail.com';

    $name = $_POST['name'];
    $fromEmail = $_POST['email'];
    $message = wordwrap($_POST['message'], 70, "\r\n");
    $headers = 'From: ' . $fromEmail . "\r\n" . 'Reply-To: ' . $fromEmail . "\r\n";

    $sent = mail($toEmail, "Hello from $name", $message, $headers);
    $result = array(
        'sent' => $sent
    );

    echo json_encode($result);
    exit();
?>
