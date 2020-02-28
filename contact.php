<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$envfile = file_get_contents('.env', false);

$env = [];
foreach (array_map(function ($line) {
    return array_map('trim', explode('=', trim($line), 2));
}, explode("\n", $envfile)) as $row) {
  $env[$row[0]] = $row[1];
}

$SUCCESS = true;

if ($SUCCESS) {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    $captcha = filter_input(INPUT_POST, 'captcha', FILTER_SANITIZE_STRING);

    $fields = [];
    if (!$name) { $fields[] = 'name'; }
    if (!$email) { $fields[] = 'email'; }
    if (!$phone) { $fields[] = 'phone'; }
    if (!$message) { $fields[] = 'message'; }
    if (!$captcha) { $fields[] = 'captcha'; }

    $SUCCESS = $SUCCESS && count($fields) == 0;
}


if ($SUCCESS) {
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => $env['UNIFAVELA_CONTACT_RECAPTCHA_SECRET_KEY'],
        'response' => $captcha
    ];
    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    $context  = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    $response = json_decode($response, true);

    $SUCCESS = $SUCCESS && $response["success"];
}


if ($SUCCESS) {
    try {
        $mail = new PHPMailer(true);
        $mail->SMTPDebug = false;
        $mail->isSMTP();
        $mail->Host = $env['UNIFAVELA_CONTACT_SMTP_HOST'];
        $mail->Port = $env['UNIFAVELA_CONTACT_SMTP_PORT'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->SMTPAuth = true;
        $mail->Username = $env['UNIFAVELA_CONTACT_SMTP_USER'];
        $mail->Password = $env['UNIFAVELA_CONTACT_SMTP_PASS'];
        $mail->setFrom($env['UNIFAVELA_CONTACT_SMTP_USER'], $env['UNIFAVELA_CONTACT_SMTP_NAME']);
        $mail->addAddress($env['UNIFAVELA_CONTACT_SMTP_TO_EMAIL'], $env['UNIFAVELA_CONTACT_SMTP_TO_NAME']);
        $mail->addReplyTo($email, $name);
        $mail->isHTML(true);
        $mail->Subject = "Contato do site: $name";
        $mail->Body = <<<EOT

<h2>Contato via Site</h2>

<p><strong>Nome</strong>: $name</p>
<p><strong>E-mail</strong>: $email</p>
<p><strong>Telefone</strong>: $phone</p>

<p>$message</p>

EOT;

        $mail->AltBody = <<<EOT

Contato via Site

Nome: $name
E-mail: $email
Telefone: $phone

$message

EOT;

        $mail->send();
    } catch (Exception $e) {
        $SUCCESS = false;
    }
}


header('Content-type: application/json');
echo json_encode([
    'success' => $SUCCESS,
    'fields' => $fields,
]);