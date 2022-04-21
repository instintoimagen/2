export function Main() {
  const $main = document.createElement("main");
  $main.id = "main";

  //Para que diferencie si son los post de la home o resultados de búsqueda:
  if (!location.hash.includes("#/search")) $main.classList.add("grid-fluid");

  return $main;
}
