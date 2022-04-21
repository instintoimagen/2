import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null; //Borra el contenido, para que no se duplique el header, ya que al al usar un enlace del menú Router.js y App.js generan un header

  $root.appendChild(Header()); //Genera dinámicamente cabecera con la función Header() que importamos de components/Header.js
  $root.appendChild(Main());
  $root.appendChild(Loader());

  Router(); //Componente que genera el contenido (de acuerdo a la interacción del usuario en el menú), para Home hace la petición AJAX para traer el contenido de la API de WordPress

  InfiniteScroll();
}

/*     - - - -  Version Anterior   - - - - 
//$post cambió a $main

export function App() {
  document.getElementById(
    "root"
  ).innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla JS - dice JonMircha, yo no ;)</h1>`;

  console.log(api);

  //FETCH: Englobamos en una función y solo pasamos los parámetros que necesitamos, el resto está dentro de la función ajax() en el archivo ajax.js
  ajax({
    url: api.POSTS,
    cbSuccess: (posts) => console.log(posts),
  });
  //Los parámetros son un objeto {url, cbSuccess}

  ajax({
    url: api.CATEGORIES,
    cbSuccess: (categories) => console.log(categories),
  });
} 
*/
