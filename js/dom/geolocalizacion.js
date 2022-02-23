export default function getGeolocation(id) {
  // Podemos acceder a la función de la geolocalización a través de navigator.geolocation (por eso no usamos ese nombre en esta función)
  const $id = document.getElementById(id),
    // La función que ejecuta la geolocalización necesita una serie de opciones:
    options = {
      // Que el dispositivo trate de hacer la mejor lectura posible, lo estamos "acelerando". Por default viene el false.
      enableHightAccuracy: true,
      // Tiempo en el cual estará esperando la respuesta para tomar la lectura.
      timeout: 5000,
      // Para evitar que se guarden en cache las lecturas. Que cada vez que se tomen lecturas no tenga de referencia la anterior.
      maximumAge: 0,
      // Se pueden ver más opciones en la documentación
    };

  const success = (position) => {
    $id.innerHTML = `<p><mark>Tu posición actual es:</mark></p>`;
    if (position.coords.altitude === null) {
      $id.innerHTML = `<ul>
    <li>Latitud: <b>${position.coords.latitude}</b></li>
    <li>Longitud: <b>${position.coords.longitude}</b></li>
    <li>Presición de GPS: <b>${position.coords.accuracy.toFixed(0)}m</b></li>
   </ul>
      <a href="https://www.google.com/maps/@${position.coords.latitude},${
        position.coords.longitude
      },15z" target="_blank" rel="noopener">Ver en Google Maps</a>
   `;
    } else {
      `<ul>
    <li>Latitud: <b>${position.coords.latitude}</b></li>
    <li>Longitud: <b>${position.coords.longitude}</b></li>
    <li>Altitud: <b>${position.coords.altitude}</b></li>
    <li>Presición de GPS: <b>${position.coords.accuracy.toFixed(0)}m</b></li>
   </ul>
      <a href="https://www.google.com/maps/@${position.coords.latitude},${
        position.coords.longitude
      },15z" target="_blank" rel="noopener">Ver en Google Maps</a>
   `;
    }
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
  };

  navigator.geolocation.getCurrentPosition(success, error, options);

  // también existe el método "watchPosition" para ir actualizando la posición, lo que se usa por ejemplo para ver la ubicación en tiempo real, que se vaya desplazando.
}

// navigator.geolocation.watchPosition;
