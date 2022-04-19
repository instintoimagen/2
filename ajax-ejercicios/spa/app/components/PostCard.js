export function PostCard(props) {
  let { date, slug, title, _embedded } = props; //Destructuración con denominaciones que existen en API de wordpress
  let dateFormat = new Date(date).toLocaleDateString(),
    urlPoster = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : "app/assets/favicon.ico";

  return `
 <article class="post-card">
 <img src="${urlPoster}" alt="${title.rendered}">
 <h2>${title.rendered}</h2>
 <p>
 <time datetime="${date}">${dateFormat}</time>
 <a href="#/${slug}">Ver publicación</a>
 </p>
 </article>
 `;
}
