const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  // variable para luego detener el reloj
  let clockTempo;

  d.addEventListener("click", (e) => {
    // Selector para iniciar reloj, con el método matches detectamos el objeto que inició el evento. (igual con stop))
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<p id:"reloss">${clockHour}</p>`;
      }, 1000);
      // desabilitamos el botón Iniciar Reloj
      e.target.disabled = true;
      // habilitamos el botón para detenerlo (en caso de apagar y volver a prender varias veces)
      d.querySelector(btnStop).disabled = false;
    }
    if (e.target.matches(btnStop)) {
      // detenemos setInterval
      clearInterval(clockTempo);
      // con null borramos el reloj
      d.querySelector(clock).innerHTML = null;
      // habilitamos nuevamente el botón Iniciar Rejol
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(sound, btnPlay, btnStop) {
  let alarmTempo;

  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 50);
    }
    // desabilitamos el botón para evitar que se reproduzcan varias alarmas
    e.target.disabled = true;

    if (e.target.matches(btnStop)) {
      // detenemos alarma, deteniendo el setTimeout
      clearInterval(alarmTempo);
      // con pause() detenemos el sonido, y con currentTime lo llevamos al comienzo, o sea a tiempo cero.
      $alarm.pause();
      $alarm.currentTime = 0;
      // habilitamos nuevamente el botón Iniciar Alarma
      d.querySelector(btnPlay).disabled = false;
      // habilitamos el botón para detenerlo, porque a veces queda desactivado.
      d.querySelector(btnStop).disabled = false;
    }
  });
}
