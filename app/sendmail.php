<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'dist/phpmailer/src/Exception.php';
require 'dist/phpmailer/src/PHPMailer.php';


require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

// От кого письмо
$mail->setFrom('rashkevich2000@mail.ru', 'прогер');
// Кому отправить
$mail->addAddress('rashkevich2001@mail.ru');
// Тема письма
$mail->Subject = 'почта для заявки';

// проверки письма 

if (trim(!empty($_POST['email']))) {
    $body .= '<p><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
}

// Отправка
if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

