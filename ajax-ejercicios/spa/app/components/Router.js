import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";

export function Router() {
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
