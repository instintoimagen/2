export function PostCard(props) {
  let { date, id, slug, title, _embedded } = props; //Destructuración con denominaciones que existen en API de wordpress
  let dateFormat = new Date(date).toLocaleDateString(),
    urlPoster = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : "app/assets/favicon.ico";

  document.addEventListener("click", (e) => {
    //Evento click al enlace (Ver Publicación) que se creará cuando carguen las tarjetas con cada post

    if (!e.target.matches(".post-card a")) return false; //Cuando no sea un enlace dentro de la tarjeta del post que no haga nada (al poner un "return false" en la callback de un evento, no ejecuta el código)

    localStorage.setItem("wpPostId", e.target.dataset.id); //Guarda en local storage el número que trae la API de wp en el id del post en particular
  });

  return `
 <article class="post-card">
 <img src="${urlPoster}" alt="${title.rendered}">
 <h2>${title.rendered}</h2>
 <p>
 <time datetime="${date}">${dateFormat}</time>
 <a href="#/${slug}" data-id="${id}">Ver publicación</a>
 </p>
 </article>
 `;
  //El id (nº identificador de cada post), lo guardamos en un data-id dentro del enlace. No es un id de html, sino un data-attibute que guardará ese número
}
