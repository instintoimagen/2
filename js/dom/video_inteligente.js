export default function smartVideo() {
  // En la variable $videos (del tipo DOM, por eso el símbolo $), traigo TODOS los elementos que coincidan con el siguiente selector: las etiquetas "video" que tengan el atributo [data-smart-video].
  const $videos = document.querySelectorAll("video[data-smart-video]");

  // La función como callBack
  const cb = (entries) => {
    // Por cada una de las entradas que va a observar, ejecuta la siguiente programación:
    entries.forEach((entry) => {
      // Si la entrada es observada en el navegador (si ha cruzado la intersección), dale play, sino pausa. Esto es a través de la propiedad .target (el objeto que origina la observación).
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      // Para que se pause cuando no vemos esa pestaña o ventana del navegador utilizamos el evento visibilitychange, detecta la no visualización del navegador por parte del usuario.
      window.addEventListener("visibilitychange", (e) => {
        document.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
      }); // Usamos un op ternario, si vivibilitiState es "visible" le damos play, sino pausa.
    });
  };
  // IntersectionObserver espera recibir la callBack (función) y propiedades, en este caso configuramos 0.5 (para que cuando aparezca el 50% de lo observado se desencadene la función).
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });

  // Finalmente asignamos este observador a los elementos del DOM:
  $videos.forEach((el) => observer.observe(el));
  // A los elemento que están en la variable $videos: a cada uno ejecuta la función observer, con el método .observe() y recibe como parámetro el elemento que va a observar, el mismo elemento al que está recorriendo, (en este caso la lista de nodos de los videos).
}

// En HTML etiqueta video, con atributos booleanos: no necesitan valor, si están son true. (muted controls loop autoplay). Además usamos un "data attibute" inventado por nosotros para indicar cuáles serán los videos involucrados en esta función.
