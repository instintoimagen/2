export default function speechReader() {
  const $speechSelect = document.getElementById("speech-select"),
    $speechTextarea = document.getElementById("speech-text"),
    $speechBtn = document.getElementById("speech-btn"),
    // En la variable speechMessage (que no es del DOM, por eso no lleva $), guardamos la API que me permite leer los mensajes. SpeechSyntesisUtterance nos permite interactuar con las voces de nuestro sistema operativo.
    speechMessage = new SpeechSynthesisUtterance();
  //console.log(speechMessage);

  // Generamos el arreglo vacío para las voces que detectará.
  let voices = [];

  // Las voces se encuentran en una API del window que se llama speechSynthesis, ahí dentro hay un evento llamado onvoicechanged que nos servirá para cambiar de una voz a otra.
  // El prototipo de speechSynthesis tiene un método llamado .getVoices()

  document.addEventListener("DOMContentLoaded", (e) => {
    // Para obtener las voces necesito realizarlo a través de un evento, usamos "voiceschanged", como segundo parámetro le digo que el resultado del método .getVoices() vaya al arreglo "voices"
    window.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = window.speechSynthesis.getVoices();
      // Por cada voz del arreglo que arme una opción para seleccionar. Por cada voz creará en el HTML dinámicamente una etiqueta option. Como valor le asignamos lo que venga en cada voz en el atributo "name". Y en el textContent ponemos el nombre de la voz y el idioma.
      voices.forEach((voice) => {
        const $option = document.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name}  >> ${voice.lang}`;

        // Al contenido del select le agregamos las options
        $speechSelect.appendChild($option);
      });
    });
  });

  // En change para que se ejecute cuando cambiemos una opción de voz dentro del select, para que SpeechSynthesisUtterance no tenga la propiedad "voice" en null
  document.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      // busco el valor que trae el e.target y se lo asigno a la voz.
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
  });

  // Que lea el texto con el botón
  document.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      // En speechMessage está la API, la propiedad text, que es la que utilizamos para que tome el texto a leer, le asignamos el valor que ingresó el usuario en el <textarea>
      speechMessage.text = $speechTextarea.value;

      // Finalmente le decimos a la API speechSynthesis que hable!, usando el método .speak() ingresando como parámetro la variable speechMessage, que corresponde a la API SpeechSynthesisUtterance
      window.speechSynthesis.speak(speechMessage);
    }
  });
}
