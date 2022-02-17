export default function responsiveTester(form) {
  const $form = document.getElementById(form);
  let tester;

  document.addEventListener("submit", (e) => {
    // Otra forma distinta a e.target.matches(selector) es comparar e.target, que es el objeto que origina el evento, con la variable que almacena el selector. Aquí no usamos el método .matches
    if (e.target === $form) {
      e.preventDefault();
      alert("formulario enviado");
      console.log("enviado");
      setTimeout(() => {
        $form.querySelector(form).disabled = false;
      }, 1);
    }
  });
}
