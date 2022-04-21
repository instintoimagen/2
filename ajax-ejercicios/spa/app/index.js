import { App } from "./App.js";
import api from "./helpers/wp_api.js";

//App se renderiza a la carga del DOM y cuando cambia el hash
document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
  api.page = 1; //Al cambiar hash vuelve a 1, para mostrar posts o resultados de búsqueda de la primera página
  App();
});
