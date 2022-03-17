// Utilizamos una función anónima autoejecutable para evitar inconvenientes de sobreescribir variables, porque utilizaremos los mismos nombre, ya que utilizaremos este archivo ajax para otras funciones, peticiones asíncronas, etc. No utilizamos modulos. Quedará cerrado, encapsular, "closure".
(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  // Para que el objeto XMLHttpRequest() funcione necesita: 1- La instancia, que ya está en la variable xhr. y 2- Ejecutar un evento, en ajax el que más se utiliza es "onreadystatechange". Esto último puede ser a modo semántico xhr.onreadystatechange = (asignándole una función), o con un addEventListener

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    // Validaciones: que "readyState" esté en 4, y que "status" tenga código 200
    console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Exito ;)");
      // Con el método .parse() convierto los datos que vienen en formato JSON para poder imprimirlos en el HTML. Como parámetro le paso la respuesta que viene en una cadena en la propiedad "responseText"
      let json = JSON.parse(xhr.responseText);
      console.log(json[0]);

      //Recorremos el arreglo que generamos con .parse()
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
      //$xhr.innerHTML = json;
    } else {
      console.log(" - - ERROR  - - ");
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error nº${xhr.status}: ${message}`;
    }
    console.log("Este mensaje se cargará de cualquier forma");
  });

  // También necesitamos la instrucción que abrirá la petición, con el método open, 1er parámetro es el me´todo porque el cual vamos a comunicarnos (Get, Head, Post, etc). 2do parámetro es el recurso, en el caso de GET la URL a la que haremos la petición.
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  // El último paso es ENVIAR LA PETICIÓN
  xhr.send();
})();
