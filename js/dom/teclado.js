const d = document;
let x = 0,
  y = 0;

// parametros: 1-evento 2-selector de la pelota 3-selector del escenario
export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  // console.log(e.keyCode);
  // console.log(limitsBall, limitsStage);

  switch (e.keyCode) {
    case 37:
      // fecha izquierda - move("left");
      if (limitsBall.left > limitsStage.left + 10) x--;
      e.preventDefault();
      break;
    case 38:
      // fecha arriba - move("up");
      if (limitsBall.top > limitsStage.top + 10) y--;
      e.preventDefault();
      break;
    case 39: // fecha derecha - move("right");
      if (limitsBall.right < limitsStage.right - 10) x++;
      e.preventDefault();
      break;
    case 40:
      // fecha abajo - move("down");
      if (limitsBall.bottom < limitsStage.bottom - 10) y++;
      e.preventDefault();
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

// + keyCode nos devuelve el código de la tecla presionada. + ctrlKey devuelve si se presionó tecla control. + shiftKey devuelve si se presionó tecla mayusculas (shift). + altKey devuelve si se presionó tecla alt.
export function shortCuts(e) {
  /*   console.log(e.keyCode === 65);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`shift: ${e.shiftKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(e); */

  if (e.altKey && e.key === "a") {
    alert("Lanzó una ALERTA\nPresionó las teclas Alt + A");
  }
  if (e.altKey && e.key === "c") {
    confirm(
      "Lanzó una confirmación\nPresionó las teclas Alt + C\n¿Acepta que le faltan jugadores?"
    );
  }
  if (e.altKey && e.key === "p") {
    prompt(
      "Lanzó una pregunta\nPresionó las teclas Alt + P\nDígame su nombre:"
    );
  }
}
