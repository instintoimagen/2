import api from "./wp_api.js";
import { ajax } from "./ajax.js";
import { SearchCard } from "../components/SearchCard.js";
import { PostCard } from "../components/PostCard.js";

export async function InfiniteScroll() {
  let query = localStorage.getItem("wpSearch"),
    apiURL,
    Component; //High Order Component (react)

  window.addEventListener("scroll", async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = document.documentElement,
      { hash } = window.location;

    //console.log(scrollTop, clientHeight, scrollHeight, hash);

    if (scrollTop + clientHeight >= scrollHeight) {
      api.page++;
      //HOME
      if (!hash || hash === "#/") {
        apiURL = `${api.POSTS}&page=${api.page}`;

        Component = PostCard; //Estando en Home que sea PostCard la var Component
      } else if (hash.includes("#/search")) {
        //Sección SEARCH
        apiURL = `${api.SEARCH}${query}&page=${api.page}`;

        Component = SearchCard; //Estando en SEARCH que sea SearchCard la var Component
      } else {
        return false; //Solo hacemos Scroll Infinito en Home y Search, en las otras no hará nada
      }

      //Antes de recargar la siguiente página, que aparezca el Loader
      document.querySelector(".loader").style.display = "block";

      await ajax({
        url: apiURL,
        cbSuccess: (posts) => {
          let html = "";
          posts.forEach((post) => (html += Component(post)));
          document.getElementById("main").insertAdjacentHTML("beforeend", html);
          console.log(posts);
        },
      });
    }
  });
}
