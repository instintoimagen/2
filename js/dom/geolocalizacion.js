const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
// RECORDAR: CSS de Leaflet dentro de la etiqueta <head>, y el script dentro de la etiqueta <body>de HTML. Luego el enlace de tilesProvider (aquí arriba). Y el código a continuación.

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
    // Acualización automática mediante setInterval
    let periodicidad = setInterval(() => {
      if (position.coords.altitude === null) {
        // Si NO muestra la altitud, este código se ejecuta:
        $id.innerHTML = `<p><mark>Tu posición actual es:</mark></p>
      <ul>
    <li>Latitud: <b>${position.coords.latitude}</b></li>
    <li>Longitud: <b>${position.coords.longitude}</b></li>
    <li>Presición de GPS: <b>${position.coords.accuracy.toFixed(0)}m</b></li>
   </ul>
   <a href="https://www.google.com/maps/@${position.coords.latitude},${
          position.coords.longitude
        },15z" target="_blank" rel="noopener">Seguir en Google Maps</a>
   `;
        // Código para pintar el mapa
        let myMap = L.map("myMap").setView(
          [position.coords.latitude, position.coords.longitude],
          14
        );

        L.tileLayer(tilesProvider, {
          maxZoom: 20,
        }).addTo(myMap);

        let marcador = L.marker([
          position.coords.latitude,
          position.coords.longitude,
        ]).addTo(myMap);
      } else {
        // SI muestra la altitud:
        `<p><mark>Tu posición actual es:</mark></p><ul>
    <li>Latitud: <b>${position.coords.latitude}</b></li>
    <li>Longitud: <b>${position.coords.longitude}</b></li>
    <li>Altitud: <b>${position.coords.altitude}</b></li>
    <li>Presición de GPS: <b>${position.coords.accuracy.toFixed(0)}m</b></li>
   </ul>
   <a href="https://www.google.com/maps/@${position.coords.latitude},${
          position.coords.longitude
        },15z" target="_blank" rel="noopener">Seguir en Google Maps</a>
   `;
        // Código para pintar el mapa
        let myMap = L.map("myMap").setView(
          [position.coords.latitude, position.coords.longitude],
          14
        );

        L.tileLayer(tilesProvider, {
          maxZoom: 20,
        }).addTo(myMap);

        let marcador = L.marker([
          position.coords.latitude,
          position.coords.longitude,
        ]).addTo(myMap);
      }
    }, 3000);
  };

  const error = (err) => {
    $id.innerHTML = `<p>Error nº ${err.code}: ${err.message}<br><br>Pruebe habilitar GPS y reintente.</p>`;
  };

  // En el método getCurrentPosition le damos los parámetro: (qué hacer si es exitosa la obtención de coordenadas, qué hacer si da error, y las opciones)
  //navigator.geolocation.getCurrentPosition(success, error, options);

  // también existe el método "watchPosition" para ir actualizando la posición, lo que se usa por ejemplo para ver la ubicación en tiempo real, que se vaya desplazando.
  navigator.geolocation.watchPosition(success, error, options);
}
