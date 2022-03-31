<?php
// En la variable estandar de php llamada $_FILES se crea un arreglo asociativo con toda la info del archivo que se está subiendo. 
//var_dump($_FILES); // Se tuvo que comentar porque sino no daba la info por consola en linea 55 del HTML: console.log(json) Funciona ok y sube archivos

// solo ejecuto el código si se ha seleccionado uno o más archivos. O sea evalúo y extraigo esta información con isset() a la variable de tipo $_FILES denominada "file" en el formData del archivo JavaScript.
if (isset($_FILES["file"])) {
// extraemos en variables de php: en la variable $name lo que viene en la variable de tipo $_FILES llamada "file", y ahi dentro lo que viene en "name" (por eso usamos juego de corchetes [""][""])
$name = $_FILES["file"]["name"];
$file = $_FILES["file"]["tmp_name"];
$error = $_FILES["file"]["error"];
$destination = "../files/$name"; //Ubicación del archivo: subir un nivel (para eso los dos puntos), luego entrar a la carpeta files y ahí que lo guarde con su nombre original (por eso la variable $name).

// la funcion move_uploaded_file() recibe dos parámetros: 1-El archivo (lo tengo el la variable $file) y 2-La ubicación (el destino). La función es booleana, y devuelve true si se sube un archivo, por eso la guardamos en la variable $upload para hacer el if
$upload = move_uploaded_file($file, $destination);

if ($upload) {
 $res = array( 
  // Las respuestas ok o error en formato similar a json
  "err" => false,
  "status" => http_response_code(200),
  "statusText" => "Archivo $name subido exitosamente",
  "files" => $_FILES["file"]
 );
} else {
 $res = array(
  "err" => true,
  "status" => http_response_code(400),
  "statusText" => "El archivo $name no se subió",
  "files" => $_FILES["file"]
 );
}

echo json_encode($res);
}

