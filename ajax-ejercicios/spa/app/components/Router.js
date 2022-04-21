import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router() {
  //Asíncrona para que espere la petición ajax antes de seguir la ejecución del código y de esa manera no borre el loader antes que cargue el contenido

  let { hash } = location;

  //console.log(hash);

  document.getElementById("main").innerHTML = null;

  //Con if anidados indicamos qué sección mostrará según lo que tenga en el hash
  if (!hash || hash === "#/") {
    //hash #/ es igual a Home, ejecuta la petición AJAX
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        //console.log(posts);
        let html = ""; //Junto los elementos que vienen como código html, que me retorna la función PostCard(), los concateno porque vendrán varios del forEach
        posts.forEach((post) => (html += PostCard(post))); //Por cada post, en la variable html (al contenido que ya tenga) le voy a añadir el post (código html) que arroja la función PostCard()
        document.getElementById("main").innerHTML = html; //finalmente cargo el contenido reunido en la var html en la sección posts
      },
    });
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");

    if (!query) {
      document.querySelector(".loader").style.display = "none"; //Quitar loader
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        // console.log(search);
        let html = "";
        if (search.length === 0) {
          html = `
 <p class="error">No existen resultados para tu búsqueda. Término <mark>${query}</mark></p>
 `;
        } else {
          search.forEach((post) => (html += SearchCard(post)));
        }

        document.getElementById("main").innerHTML = html;
      },
    });
  } else if (hash === "#/contacto") {
    document.getElementById("main").appendChild(ContactForm());
  } else {
    //Nueva petición AJAX para cargar el post seleccionado. En el que obtenemos el id guardado en local storage
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        console.log(post);
        document.getElementById("main").innerHTML = Post(post); //Enviamos al componente Post.js los datos que vienen en la API de wp para esa publicación (argumento post), y el contenido recibido lo agregamos a la etiqueta main
      },
    });
  }

  document.querySelector(".loader").style.display = "none"; //Quitar loader. Va fuera del if anidados para no repetirlo en cada uno de los if else
}
