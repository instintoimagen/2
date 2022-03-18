// Utilizamos una función anónima autoejecutable para evitar inconvenientes de sobreescribir variables, porque utilizaremos los mismos nombre (clases y variables), ya que utilizaremos este archivo ajax para otras funciones, peticiones asíncronas, etc. No utilizamos modulos. Quedará cerrado, encapsular, "closure".
(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  // Para que el objeto XMLHttpRequest() funcione necesita: 1- La instancia, que ya está en la variable xhr. y 2- Ejecutar un evento, en ajax el que más se utiliza es "onreadystatechange". Esto último puede ser a modo semántico xhr.onreadystatechange = (asignándole una función), o con un addEventListener

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    // Validaciones: que "readyState" esté en 4, y que "status" tenga código 200
    //console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      // Con el método .parse() convierto los datos que vienen en formato JSON para poder imprimirlos en el HTML. Como parámetro le paso la respuesta que viene en una cadena en la propiedad "responseText"
      let json = JSON.parse(xhr.responseText);

      //Recorremos el arreglo que generamos con .parse()
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
      //$xhr.innerHTML = json;
    } else {
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error nº${xhr.status}: ${message}`;
    }
  });

  // También necesitamos la instrucción que abrirá la petición, con el método open, 1er parámetro es el me´todo porque el cual vamos a comunicarnos (Get, Head, Post, etc). 2do parámetro es el recurso, en el caso de GET la URL a la que haremos la petición.
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  // El último paso es ENVIAR LA PETICIÓN
  xhr.send();
})();

(() => {
  // No necesitamos instanciar objeto AJAX (ej: new XMLHttpRequest() )
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  // En fetch: 1-ejecutamos el recurso fetch(), como parámetros: le ponemos el recurso (ej la API de placeholder), e incluso podemos pasar un objeto con opciones (no obligatorio).
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // 2-Como fetch es un mecanismo que trabaja con PROMESAS, nos dará una resultante "then catch", similar a lo que hacíamos con if else en el Objeto XMLHttpRequest
      console.log(res);

      // Los datos se reciben dentro de la prop "body" en formato ReadableStream. Se convierte a formato Json con .json()
      // Extraemos esto en un return y lo procesamos en otro then()
      //Para validar errores en fetch necesitamos un op ternario donde  verificamos que la propiedad "ok" sea true, sino que rechace la "Promise", solo así lo envía al catch()
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      //Recorremos el arreglo que generamos con .json() para crear cada una de las <li> que se añaden al $fragment, y cuando está listo hacemos .appendChild() para hacer solo un agregado al DOM.
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error nº${err.status}: ${message}`;
    })
    .finally(() => {
      // el finally es opcional
      console.log("CODE Finally: esto se ejecuntará igual   ;)");
    });
})();
