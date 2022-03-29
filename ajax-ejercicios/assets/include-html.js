document.addEventListener("DOMContentLoaded", (e) => {
  // la función includeHTML se ejecutará por cada elemento que traiga el data-attibute. Espera recibir el elemento ("el") y la url que tiene que cargar
  const includeHTML = (el, url) => {
    // Pasos:
    const xhr = new XMLHttpRequest(); // 1- Creamos instancia del objeto xhr

    xhr.addEventListener("readystatechange", (e) => {
      // 2- Levanto el "listener" al evento readystatechange

      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        el.outerHTML = xhr.responseText;
      } else {
        let message =
          xhr.statusText ||
          "Error al cargar archivo, verifica que estés haciendo la petición por http o https (en entorno de servidor y no de file)";
        el.outerHTML = `<div><p> Error nº${xhr.status}: ${message}</p></div>`;
      }
    });

    xhr.open("GET", url); // 3- Abro petición (solo por metodo GET), y uso las cabeceras
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send(); // 4- Enviar
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include"))); // con el getAttribute obtenemos la "url"
});
