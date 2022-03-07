export default function draw(btn, selector, id) {
  const getWinner = (selector) => {
    // Traigo en la variable "$players" todos los elementos que coincidan con el selector: en este caso todos los participantes al sorteo, listados en el html, con la clase "player" (singular)
    const $players = document.querySelectorAll(selector),
      // El random me dará la posición del lisado, en este caso del nodeList que me trae $players. Por eso multiplicamos el numero aleatorio por la longitud de la variable. Lo redondeamos (para abajo) con .floor para quitarle los decimales
      random = Math.floor(Math.random() * $players.length),
      // Extraigo el nombre, de la posición del número aleatorio del nodeList (igual que sería con un arreglo)
      winner = $players[random];

    //console.log($players, random, winner);

    // winner es un listItem, por lo que debemos traer el textContent
    return `Hoy le decimos: ${winner.textContent}`;
  };

  document.addEventListener("click", (e) => {
    const $id = document.getElementById(id);
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      $id.innerHTML = `<br><p>${result}<p>`;
    }
  });
}

// Del comentario del video en youtube:
/* 
Por si a alguien pudiera ayudar aquí dejo una pequeña implementación que hice que crea una nueva lista con los ganadores y los elimina del pool inicial para que así no puedan volver a salir elegidos, así se podrían elegir varios ganadores y que quede constancia de los anteriores, es muy sencillo pero funciona. Gracias por tanto Jon :)

const d = document;

export default function sorteo(btn, selector, padre) {
    const $padre = d.querySelector(padre);
    $padre.insertAdjacentHTML("afterend", `<ul class="seleccionados"></ul>`);
    
    const sacarGanador = (selector) => {
        const $jugadores = d.querySelectorAll(selector),
              aleatorio = Math.floor(Math.random() * $jugadores.length),
              ganador = $jugadores[aleatorio];

        if($jugadores.length === 0) {
            alert("No quedan mas jugadores");
        }
        else {
            $padre.removeChild(ganador);
            d.querySelector(".seleccionados").appendChild(ganador);

            ganador.classList.remove("jugador");
            ganador.classList.add("ganadores");
            
            return ganador.textContent;
        };
    };

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)) {
            let resultado = sacarGanador(selector);
            // console.log(resultado);
        };
    });
};
 */
