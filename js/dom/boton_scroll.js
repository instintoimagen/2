export default function scrollTopButton(btn) {
  // Guardamos en variable de tipo DOM ($) el selector del botón
  const $scrollBtn = document.querySelector(btn);

  // Para que el botón aparezca cuando hacemos scroll para abajo, y desaparezca cuando suba. Usamos las propiedades: "pageYOffset" del objeto Window, || o la propiedad "documentElement.scrollTop" del Document, para detectar a qué distancia se ha hecho scroll vertical, y luego determinar que cuando sea mayor de 400 haga aparecer (quita el hidden) al botón. Con else volvemos a ocultarlo.
  window.addEventListener("scroll", (e) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 400) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
    //podríamos ver la actividad del scroll con console.log(window.pageYOffset, document.documentElement.scrollTop)
  });

  document.addEventListener("click", (e) => {
    // tanto se toque el borde del botón, como su interior, por eso el || y el asteristo
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      // No se porque el botón se desabilita cuando se usa por primera vez, para esto le agregué la siguiente línea. Luego cuando agregué el botón del tema oscuro no lo necesitó más.
      //e.target.disabled = false;
    }
  });
}
