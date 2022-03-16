export default function contactFormValidations() {
  // En variable con simbolo $ traemos el formulario, y TODOS los input con atributo required. Que son los que nos interesa validar.
  const $form = document.querySelector(".contact-form"),
    $input = document.querySelectorAll(".contact-form [required]");

  // Por cada input creamos un elemento span
  $input.forEach((input) => {
    const $span = document.createElement("span");
    // Para que sea único: Le asignamos como id el valor que tiene el input en su propiedad name.
    $span.id = input.name;
    // En el text content le ponemos el valor que tiene el input en su propiedad title (en el HTML pusimos el texto que dice el mensaje de error).
    $span.textContent = input.title;
    // Para que tome los estilos les ponemos las clases contact-form-error y none, esta última para que no aparezca hasta que sea necesario:
    $span.classList.add("contact-form-error", "none");
    // Para insertar el span debajo de su correspondiente input:
    input.insertAdjacentElement("afterend", $span);
  });

  // LAS VALIDACIONES pueden hacerse en el submit o mientras el usuario escribe (keyup).
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let pattern = e.target.pattern || e.target.dataset.pattern;
      // Usando op. de corto circuito: Traigo el pattern de los input, pero como el <textarea> no tiene pattern será null, en ese caso que busque el data-attribute "data-pattern"

      if (pattern && e.target.value !== "") {
        // El && es para esperar que el usuario empiece a escribir, que no esté vacío.

        // Guardo la expresión regular, que viene en "pattern", dentro de la variable "regex".
        let regex = new RegExp(pattern);
        // Retorna un op ternario: si la expresion regular, guardada en regex, no valida (lo que viene en la propiedad value)
        return !regex.exec(e.target.value)
          ? document.getElementById(e.target.name).classList.add("is-active")
          : document
              .getElementById(e.target.name)
              .classList.remove("is-active");
      }
      if (!pattern) {
        return e.target.value === ""
          ? document.getElementById(e.target.name).classList.add("is-active")
          : document
              .getElementById(e.target.name)
              .classList.remove("is-active");
      }
    }
  });

  document.addEventListener("submit", (e) => {
    //e.preventDefault();

    // Para que aparezca la animación "Cargando": guardamos en variable $loader. También el mensaje de confirmación.
    const $loader = document.querySelector(".contact-form-loader"),
      $response = document.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    // simulamos envíos con un setTimeout, y hacemos aparecer y desaparecer la animación de "Cargando" y el mensaje de confirmación.
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();

      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
}
