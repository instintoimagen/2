import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortCuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";

//   El evento del botón del menu hamburguesa, y los otros eventos (reloj, contador, etc) los invocamos, o sea, lo cargamos en el DOMContentListener que es más eficiente que en el window.load
document.addEventListener("DOMContentLoaded", (e) => {
  // 1-Definimos el selector, el botón está definido por una clase entonces lleva punto. 2-El evento despliega el panel. 3-tocar un link del menu cierra panel.
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Mar 12, 2022 16:30:00", "Feliz Cumple Coco 👦");
  // Definimos el selector (botón), lleva punto por ser clase
  scrollTopButton(".scroll-top-boton");
  // Definimos el 1-El id (sin # porque lo capturamos con getElementById). 2-El valor de la media query. 3-Contenido Móvil. 4-Contenido Escritorio.
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=xVwvcB5A1sE"  target="_blank"><img src="assets/youtube.jpg" alt="Joaquin en el Rocsen" ></a>`,
    `<iframe width="800" height="450" src="https://www.youtube.com/embed/xVwvcB5A1sE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  // Doble porque uno para la ventana de youtube y otra para maps
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://www.google.com/maps/place/Museo+Rocsen/@-31.8040454,-64.9704181,13z/data=!4m5!3m4!1s0x942d2ef9d0783977:0xd9764e49db56f5e0!8m2!3d-31.799595!4d-64.956579"  target="_blank"><br><img src="assets/gmaps.gif" alt="Ubicación del Rocsen"></a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54252.30373386871!2d-64.97041811207026!3d-31.804045394317505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d2ef9d0783977%3A0xd9764e49db56f5e0!2sMuseo%20Rocsen!5e0!3m2!1ses!2sar!4v1644448137038!5m2!1ses!2sar" width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("responsive-tester");
});
// Fuera del DOMContentLoaded porque en tema_oscuro.js utilizamos otro DOMContentLoaded, y no puede haber uno dentro de otro. Se reemplazarían y uno no funcionaría.
// En la función darkTheme: 1-Definimos selector (botón), 2-La clase que va a activar el tema oscuro en los elementos que vamos a hacer dark, agregando o quitando de la lista de clases, No lleva punto.
darkTheme(".dark-theme-btn", "dark-mode");

// Eventos del Teclado: 1- keydown se ejecuta cuando presionamos una tecla. 2- keyup se ejecuta cuando soltamos una tecla presionada. 3- keypress se estará ejecutando mientras mantengamos presionada la tecla.
document.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage");
});
