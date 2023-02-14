<?php
$name=$_POST["firstname"];
$lastname=$_POST["lastname"];
$phone=$_POST["phone"];
$email=$_POST["email"];
$question=$_POST["question"];

require_once '../../../vendor/autoload.php';
$ses = new SimpleEmailService('AKIAZVA6MXB3KV4GEHPS','VKSfAqiGzkQF4K78ydiDbDbu0/mSFvvpMUgs/yM1');

$m = new SimpleEmailServiceMessage();
$m->setFrom('info@vanodal.com');
$m->addTo('info@vanodal.com');
$m->setSubject('Correo Electrónico: '.$email);
$m->setMessageFromString('Full Stack'."\n".'Nombre: '.$name."\n".'Apellido '.$lastname."\n".'Telefono '.$phone."\n".'Email '.$email."\n");

($ses->sendEmail($m));
?>