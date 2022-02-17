export default function countdown(id, limitDate, finalMessage) {
  const $countdown = document.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let ahora = new Date().getTime(),
      tiempoLimite = countdownDate - ahora,
      dias = Math.floor(tiempoLimite / (1000 * 60 * 60 * 24)),
      horas = Math.floor(
        (tiempoLimite % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutos = Math.floor((tiempoLimite % (1000 * 60 * 60)) / (1000 * 60)),
      segundos = Math.floor((tiempoLimite % (1000 * 60)) / 1000);

    $countdown.innerHTML = `<h3>Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos\npara festejar el cumple del Coco 👦</h3>`;

    if (tiempoLimite < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }

    //console.log(countdownDate, ahora, tiempoLimite);
  }, 1000);
}

/*     let dias = new Date(countdownDate - new Date().getTime()).getDate();
    document.getElementById(id).InnerHTML = `<p>${dias} Días ${new Date(
      countdownDate - new Date().getTime()
    ).getHours()} Horas ${new Date(
      countdownDate - new Date().getTime()
    ).getMinutes()} Minutos ${new Date(
      countdownDate - new Date().getTime()
    ).getSeconds()} Segundos</p>`; */
