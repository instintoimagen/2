export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakpoint = window.matchMedia(mq);

  const responsive = (e) => {
    // En esta funcion: si el tamaño (media query es MAYOR a lo especificado en "mq" en index_dom.js validará a true y completará el HTML con desktopContent, si es MENOR será false y hará lo que dice en "else")
    if (e.matches) {
      document.getElementById(id).innerHTML = desktopContent;
    } else {
      document.getElementById(id).innerHTML = mobileContent;
    }

    //console.log("MQ" + breakpoint, e.matches);
  };
  // al objeto window.matchMedia le asignamos este listener, el cual estaría revisando la media query, y cuando ésta ya no cumpla la condición de tamaño se ejecuta el cambio de contenido a "responsive".
  breakpoint.addEventListener("change", responsive);
  // Si no agregáramos la prox línea solo mostraría el contenido cuando cambia de tamaño. Agregándola lo hace con la carga inicial.
  responsive(breakpoint);
}
