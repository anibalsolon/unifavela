<?php

$envfile = file_get_contents('.env', false);

$env = [];
foreach (array_map(function ($line) {
    return array_map('trim', explode('=', trim($line), 2));
}, explode("\n", $envfile)) as $row) {
  $env[$row[0]] = $row[1];
}

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

header('Content-type: application/json');
echo json_encode([
    'success' => $response["success"] ? true : false,
    'fields' => $fields,
]);