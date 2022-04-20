import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";

export function App() {
  const $root = document.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());

  Router();
}

/*     - - - -  Version Anterior   - - - - 
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
