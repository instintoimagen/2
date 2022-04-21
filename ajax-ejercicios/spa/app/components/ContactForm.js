export function ContactForm() {
  const $form = document.createElement("form"),
    $styles = document.getElementById("dynamic-styles"); //Dynamic styles

  //Pego los estilos dinámicamente en el html desde esta var $styles
  $styles.innerHTML = `
     .contact-form {
   --form-ok-color: #4caf50;
   --form-error-color: #f44336;
   margin-left: auto;
   margin-right: auto;
   width: 90%;
  }

  .contact-form>* {
   /* Usamos simbolo mayor y asterisco para identificar a todos los hijos de "contact-form" */
   padding: 0.5rem;
   margin: 1rem auto;
   display: block;
   width: 100%;
  }

  .contact-form textarea {
   resize: none;
  }

  .contact-form legend,
  .contact-form-response {
   font-size: 1.5rem;
   font-weight: bold;
   text-align: center;
  }

  .contact-form input,
  .contact-form textarea {
   font-size: 1rem;
   font-family: sans-serif;
   border-radius: 0.3rem;
  }

  .contact-form input[type="submit"] {
   /* Para los input que tengan atributo type submit, dentro de "contact-form" */
   width: 30%;
   font-weight: bold;
   cursor: pointer;
   color: #fff;
   background-color: #05b80b;
   border: none;
   border-radius: 7px;
  }

  .contact-form *::placeholder {
   /* Para todos los hijos de "contact-form" que tenga atributo "placeholder"  */
   color: #000;
  }

  .contact-form [required]:valid {
   /* Que esté dentro de "contact-form" y que tenga el atributo "required" y sea válido */
   border: thin solid var(--form-ok-color);
  }

  .contact-form [required]:invalid {
   border: thin solid var(--form-error-color);
  }

  .contact-form-error {
   margin-top: -1rem;
   background-color: var(--form-error-color);
   color: #fff;
   transition: all 800ms ease;
  }

  .contact-form-error.is-active {
   display: block;
   animation: show-message 1s 1 normal 0s ease-out both;
  }

  .contact-form-loader {
   text-align: center;
  }

  .none {
   display: none;
  }

  @keyframes show-message {
   0% {
    visibility: hidden;
    opacity: 0;
   }

   100% {
    visibility: visible;
    opacity: 1;
   }
  }
    `;

  $form.classList.add("contact-form");

  //Creo el formulario en forma dinámica
  $form.innerHTML = `
  <legend>Envía tu mensaje</legend>
<input type="text" name="name" placeholder="Escribe tu nombre"
 title="¿Cómo te llamás? (solo letras, no signos ni números)"
 pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]{2,50}$" required>
<input type="email" name="email" placeholder="¿tu mail?" title="...un mail correcto, si?"
 pattern="^[A-Za-z0-9]+(\\.[A-Za-z0-9]+|-[A-Za-z0-9]+|_[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,15})$"
 required>
<input type="text" name="subject" placeholder="Qué asunto es?" title="Te falta escribir un asunto" required>
<textarea name="comments" cols="50" rows="5" placeholder="Escribe tu mensaje"
 title="Sin salto de línea (Enter), y hasta 255 caracteres ;-)" data-pattern="^(\\n|.).{1,255}$"
 required></textarea>
<input type="submit" value="Enviarlosss :)">
<div class="contact-form-loader none">
 <img src="./app/assets/dot-loader.svg" alt="cargando">
</div>
<div class="contact-form-response none">
 <p>Los datos fueron enviados</p>
</div>
  `;

  function validationsForm() {
    const $form = document.querySelector(".contact-form"),
      $input = document.querySelectorAll(".contact-form [required]");

    $input.forEach((input) => {
      const $span = document.createElement("span");

      $span.id = input.name;

      $span.textContent = input.title;

      $span.classList.add("contact-form-error", "none");

      input.insertAdjacentElement("afterend", $span);
    });

    document.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let pattern = e.target.pattern || e.target.dataset.pattern;

        if (pattern && e.target.value !== "") {
          let regex = new RegExp(pattern);

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
      e.preventDefault();

      const $loader = document.querySelector(".contact-form-loader"),
        $response = document.querySelector(".contact-form-response");

      $loader.classList.remove("none");

      fetch("https://formsubmit.co/ajax/mellamanadrian@hotmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          $loader.classList.add("none");
          $response.classList.remove("none");
          $response.innerHTML = `<p>${json.message}</p>`;
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message = err.statusText || "Ups! Huston tenemos un problema";
          $response.innerHTML = `<p>Error nº${err.status}: ${message}</p>`;
        })
        .finally((e) =>
          setTimeout(() => {
            $response.classList.add("none");
            $response.innerHTML = "";
          }, 3000)
        );
    });
  }

  //Llamamos aquí la función para que se ejecute. No en DOMContentLoaded. Le ponemos un setTimeout porque la función necesita esperar que se cargue el contenido html dinámico para llamar los elementos
  setTimeout(() => {
    validationsForm();
  }, 10);

  return $form;
}
