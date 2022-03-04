export default function searchFilters(input, selector) {
  // Escuchamos el evento "input" para que al hacer click en la cruz (del campo de entrada) vuelva a poner todas las tarjetas. JonMircha usó el "keyup", pero éste no vuelve las tarjetas al borrar con la cruz, solo las devuelve al borrar con la tecla blackspace del teclado.
  document.addEventListener("input", (e) => {
    // El if de abrajo es así: si el selector (card) coincide con lo que está en la variable input (lo que escribe el usuario) entonces ejecuta el código entre llaves:
    if (e.target.matches(input)) {
      //console.log(e.target.value) con e.target.value me muestra el valor sumado, o sea palabra y no letras separadas. Necesitamos que busque esa palabra en los selectores

      //Quiero que busques en todos los selectores (tarjetas con clase card). Usando un método forEach, por cada selector, que busque el texto que está en input
      console.log(e.target.value); //este console.log me mostrará en consola si está funcionando el input y qué está registrando (sumado)

      document.querySelectorAll(selector).forEach(
        (el) =>
          // Para evitar errores en la búsqueda por uso de mayusculas y minúsculas en los selectores (card), empleamos textContent para convertir en minúsculas con toLowerCase
          // Con includes evaluamos si ese texto está incluido en lo que se escribió en input.
          // En resumen: Si lo que el usuario escribe (e.target.value), está incluído (.includes()) en el texto de los selectores pasado a minúsculas (el.textContent.toLowerCase()) me devolverá un resultado booleano.

          el.textContent.toLowerCase().includes(e.target.value)
            ? el.classList.remove("filter")
            : el.classList.add("filter")
        // Por eso usamos un operador ternario para que: si esto me devuelve verdadero entonces que al elemento en cuestión le quite o agregue la clase "filter" la cual con CSS ocultará o mostrará mediante el atributo display: none
      );
    }
  });
}
