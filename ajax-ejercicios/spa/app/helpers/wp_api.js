const NAME = "css-tricks",
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  PER_PAGE = 6,
  POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`, //P-scll-inf agregamos &per_page=${PER_PAGE}
  POST = `${API_WP}/posts`,
  SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1; //P-scll-inf incializamos cargando la página 1, luego cuando detecta el final recarga la página 2 y así sucesivamente

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  PER_PAGE,
  POSTS,
  POST,
  SEARCH,
  page,
};

// https://developer.wordpress.org/rest-api/
