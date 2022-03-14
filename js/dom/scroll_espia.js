export default function scrollSpy() {
  // En la variable $secciones traigo TODAS las etiquetas "section" que tengan el atributo que inventé [data-scroll-spy]
  const $secciones = document.querySelectorAll("section[data-scroll-spy]");

  // La callBack recibe entradas, las cuales son los elementos que están ingresando en la visualización de view port (navegador). Las Entries en este ejemplo son las esas section con el data attribute.
  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      // La propiedad "isIntersecting" nos devuelve true o false en base a si se está viendo en el navegador (si ha sido observada). En base a esto esto podemos agregar la clase "active" al enlace del menú. Para que se resalte cuando estamos viendo dicha sección.
      if (entry.isIntersecting) {
        // Si un elemento tiene el valor true en isIntersecting (o sea que ya se vió)
        document
          // Buscamos el primer selector que sea un enlace, que tenga el atributo data-scroll-spy, y que en su href tenga #section... (el id)
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.add("active");
      } else {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.remove("active");
      }
    });
  };

  // Intersection Observer es una API que detecta cuando en la parte visible del navegador (View Port) se encuentra un elemento. Recibe una cb (callBack) y propiedades, en esas propiedades del Intersection Observer podemos estabrecer el margen de visualización, para que no marque dos al mismo tiempo.
  const observer = new IntersectionObserver(cb, {
    // Con la propiedad rootMargin achicamos o agrandamos el "visor de observación", si le pongo valores positivos me observará más cosas, si le pongo negativos restringirá la observación. (Siempre en px).
    //rootMargin: "-350px",

    // Con threshold establecemos un límite, con valores de 0 a 1. Por ejemplo: si el valor es 0.5 y el elemento se visualiza por lo menos un 50% entonces dará positivo y se marcará. [Entre corchetes pueden ir valores de min y max].
    threshold: [0.5, 0.75],
  });

  // Especificamos a quién tiene que observar: Por cada sección del HTML, asígnale el observador.
  $secciones.forEach((el) => observer.observe(el));
  // El método .observe() recibe el target que queremos observar, el mismo elemento al que está recorriendo.
}

// En este ejemplo utilizamos un menú modificado por media query en CSS, el cual establece que cuando se incorpora la clase "active" le cambie el color de texto y fondo para resaltarlos cuando se muestre en pantalla esa sección de la onepage.
