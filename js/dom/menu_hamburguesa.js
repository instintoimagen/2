//   Según JonMircha
//          (como parámetros van: 1º el selector (el botón a apretar), 2º el elemento q vamos a mover cuando de oprima este botón (el menu aside), y 3º el link del menú, para que se cierre el aside después de seleccionar un link)

export default function hamburguerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    // tanto se toque el borde del botón, como su interior, por eso el || y el asteristo
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      //  switcheamos la clase "is-active" de esta forma: buscamos el selector "panel" y luego entra a su lista de clases y con el método toggle añade o quita la clase "is-active"
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    // con este tercer parámetro quitamos el "is-active" cuando se selecciona algún link del menú, cerrándolo.
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}

//   + + + + +  Traido de la web de JonSuh  + + + + + + +
//  Para que funcione esta otra opción, tiene que estar el llamado a este script en el html directo, y no a través del index_dom (el cual no usaríamos y perderíamos la modularización del código)

/* 
const $hamburger = document.querySelector(".hamburger"),
  $panel = document.querySelector(".panel"),
  $menuLink = document.querySelector(".menu");

// On click
$hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  $hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  $panel.classList.toggle("is-active");
});

// Para cerrar el menu en una onePage
$menuLink.addEventListener("click", function () {
  $hamburger.classList.remove("is-active");
  $panel.classList.remove("is-active");
});
 */
