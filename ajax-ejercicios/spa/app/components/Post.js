export function Post(props) {
  let { date, content, title, jetpack_featured_media_url } = props;
  let dateFormat = new Date(date).toLocaleDateString(),
    urlPoster = jetpack_featured_media_url
      ? jetpack_featured_media_url
      : "app/assets/favicon.ico";

  return `
 <section class="post-page">
 <img src="${urlPoster}" alt="${title.rendered}">
 <aside>
 <h2>${title.rendered}</h2>
 <time datetime="${date}">${dateFormat}</time>
 </aside>
 <hr>
 <article>${content.rendered}</article>
 </section>
 `;
}
