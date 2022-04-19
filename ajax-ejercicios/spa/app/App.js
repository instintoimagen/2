import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { Loader } from "./components/Loader.js";
import { PostCard } from "./components/PostCard.js";

export function App() {
  const $root = document.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());

  ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
      console.log(posts);
      let html = ""; //Junto los elementos que vienen como código html, que me retorna la función PostCard(), los concateno porque vendrán varios del forEach
      posts.forEach((post) => (html += PostCard(post))); //Por cada post, en la variable html (al contenido que ya tenga) le voy a añadir el post (código html) que arroja la función PostCard()
      document.querySelector(".loader").style.display = "none";
      document.getElementById("posts").innerHTML = html;
    },
  });
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
