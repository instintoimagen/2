// 1-El selector (botón). 2-El data attibut nos sirve de ayuda para cuando no es suficiente aplicar (en CSS) el estilo dark al html o al body, sino que tendríamos que ir uno por uno en varios elementos.
export default function darkTheme(btn, classDark) {
  const $themeBtn = document.querySelector(btn),
    // Usamos querySelectorAll para que tome TODOS los elementos que tengan este attibut.
    // Usamos corchetes dentro de comillas para: especificar elementos que tengan este atributo. No es un atributo html sino uno inventado.
    $selectors = document.querySelectorAll("[data-dark]");

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    localStorage.setItem("theme", "light");
  };

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    localStorage.setItem("theme", "dark");
  };

  document.addEventListener("click", (e) => {
    // El setTimeout es para que habilite el botón luego de que carga toda la página, ya que la desabilitación se hacía al realizar el primer click, pero sin el modo asíncrono no se podía volver a habilitar (disabled = false)
    setTimeout(() => {
      document.querySelector(btn).disabled = false;
    }, 1);
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  //  LOCALSTORAGE: Se utilizan dos métodos, getItem para obtener el valor de una variable del tipo localstorage, y setItem me permita actualizar o establecer un valor para localstorage. Similar a getAtribute y setAtribute
  document.addEventListener("DOMContentLoaded", (e) => {
    //console.log(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light"); // Si no existe (igual a null), la creamos y asignamos el valor, por ejemplo la nombramos "theme" y le asignamos el valor de "light"
    if (localStorage.getItem("theme") === "light") lightMode();
    if (localStorage.getItem("theme") === "dark") darkMode();
  });
}

//document.querySelector(boton).disabled = false;

// Con emojis
/* 
let moon = "🌙",
    sun = "☀️";
*/

// Con iconos de bootstrap:
/* 
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-moon-fill" viewBox="2 0 12 20">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
  </svg>

<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-sun" viewBox="2 0 12 20">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
    </svg> 
*/
