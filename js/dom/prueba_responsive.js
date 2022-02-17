export default function responsiveTester(form) {
  const $form = document.getElementById(form);
  //almacenamos en una variable (tester, por ahora vacía), la apertura de la ventana window.open
  let tester;

  document.addEventListener("submit", (e) => {
    // Otra forma distinta a e.target.matches(selector) es comparar e.target, que es el objeto que origina el evento, con la variable que almacena el selector. Aquí no usamos el método .matches
    if (e.target === $form) {
      e.preventDefault();
      //alert("formulario enviado");

      //Para el método window.open() utilizamos estos tres parámetros:
      //1-Podemos llamar lo que el usuario ingresó en el formulario, como si fuera un objeto, utilizando punto, el valor que nosotros le pusimos en el html en el atributo "name", punto "value", para que value nos traiga lo que ingresó el usuario.
      //2- El segundo parámetro será el target, en este caso la misma variable "tester".
      //3- Como tercer parámetro podemos ingresar características. En teste caso traigo el alto y ancho de la ventana que ingresó el usuario, (llamándolo del formulario). Y lo pongo en un innerWidth e innerHeight.

      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
      );
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}
