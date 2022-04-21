export function SearchForm() {
  const $form = document.createElement("form"),
    $input = document.createElement("input");

  $form.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar...";
  $input.autocomplete = "off";

  $form.appendChild($input);

  //Que el input conserve la plabra ingresada, sino al enviar la búsqueda se blanquea
  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }

  //Al tocal la crux en el input search se borre lo almacenado en la var wpSearch del local storage
  document.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!e.target.value) localStorage.removeItem("wpSearch"); //cuando tocamos en la crux se borra el contenido, en ese momento remueve la variable en local storage
  });

  //Al enviar el formulario: no opere por defecto, se guarde en var de local storage, y cambie el hash
  document.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();

    localStorage.setItem("wpSearch", e.target.search.value); //Guarda en local storage, en var wpSearch lo que el usuario coloque en el input

    location.hash = `#/search?search=${e.target.search.value}`; //Cambiamos el hash en el navegador, para que accione Router.js
  });

  return $form;
}
