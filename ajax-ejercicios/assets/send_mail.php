<?php
if (isset($_POST)) {
 // Se ejecuta si la variable de tipo $_POST está definida. (La variable se crea si mandamos datos por ella)

 //error_reporting(0); // Para que no mande reporte de errores por más que los haya
 
 //En var php guardamos las var del formulario
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$comments = $_POST["comments"];

$domain = $_SERVER["HTTP_HOST"]; //En la var $domain guardamos el dominio, para que figure como remitente. Lo obtenemos de la var php de tipo $_SERVER, en la prop "HTTP_HOST"
$to = "mellamanadrian@hotmail.com";
$subject = "Contacto desde web $domain: $subject"; //Concatenamos un texto que defino yo, más el asunto que puso el usuario en el formulario. Aquí redefinimos la var php que creamos más arriba.
$message = "
<p>
Mensaje generado en el sitio <b>$domain</b>
</p>
<ul>
 <li>Nombre: <b>$name</b></li>
 <li>Mail: <b>$email</b></li>
 <li>Asunto: $subject</li>
 <li>Comentarios: $comments</li>
</ul>
";
$headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset=utf-8\r\n" . "From: Envío Automático No Responder <no-reply@$domain>"; //$headers es opcional. El from ayuda a no ir a SPAM


//Función mail() para enviar email en php, dentro de la var php $send_mail
$send_mail = mail($to, $subject, $message, $headers); 

if ($send_mail) {
 $res = [
  "err" => false,
  "message" => "Tus datos han sido enviados"
 ];
} else {
 $res = [
  "err" => true,
  "message" => "Error al enviar"
 ];
}


header("Access-Control-Allow-Origin: * ");
header( 'Content-type: application/json' );
echo json_encode($res);
exit;
}