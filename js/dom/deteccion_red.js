// No necesita parámetro según JonMircha, pero yo le agregué que el header y otros se pongan gris al detectar desconexión, para lo cual utilizo el selector desconec
export default function networkStatus(desconec) {
  const isOnLine = () => {
    const $div = document.createElement("div"),
      // Usamos querySelectorAll para que tome TODOS los elementos que tengan este attibut.
      // Usamos corchetes dentro de comillas para: especificar elementos que tengan este atributo. No es un atributo html sino uno inventado.
      $selectorGris = document.querySelectorAll("[data-offline]");
    if (navigator.onLine) {
      // Si la propiedad online del navigator valida a true, entonces creará dinámicamente un div en el HTML:
      $div.textContent = "Vuelves a tener conexión";
      $div.classList.remove("offline");
      $div.classList.add("online");
      //Para el gris en header y otros
      $selectorGris.forEach((el) => el.classList.remove(desconec)); // El nombre de la clase no la incorporo aquí sino en idex_dom.js por eso no va en comillas.
    } else {
      $div.textContent = "Se perdió la conexión";
      $div.classList.remove("online");
      $div.classList.add("offline");
      //Para el gris en header y otros
      $selectorGris.forEach((el) => el.classList.add(desconec));
    }
    document.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => document.body.removeChild($div), 2000);
  };
  window.addEventListener("online", (e) => isOnLine());
  window.addEventListener("offline", (e) => isOnLine());
}
