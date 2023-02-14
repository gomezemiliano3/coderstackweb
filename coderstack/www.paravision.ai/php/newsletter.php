<?php
$email=$_POST["email"];

require_once '../../../vendor/autoload.php';
$ses = new SimpleEmailService('AKIAZVA6MXB3KV4GEHPS','VKSfAqiGzkQF4K78ydiDbDbu0/mSFvvpMUgs/yM1');

$m = new SimpleEmailServiceMessage();
$m->setFrom('info@vanodal.com');
$m->addTo('info@vanodal.com');
$m->setSubject('Correo Electrónico: '.$email);
$m->setMessageFromString('Newsletter: '.$email."\n");

($ses->sendEmail($m));
?>