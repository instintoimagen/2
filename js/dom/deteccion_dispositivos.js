export default function userDeviceInfo(id) {
  //console.log(navigator.userAgent);
  // $id hace referencia al div user-device del HTML, que es donde vamos a imprimir esta información
  const $id = document.getElementById(id);
  //Creamos esos 3 objetos con las validaciones:
  const isMobile = {
      android: () => navigator.userAgent.match(/android/i) /* 
  Hace matches con la expresión regular /androir/ 
  La "i" es una bandera en las exp reg que hace que no tome en cuenta si está escrito con mayúsculas, minúsculas o combinadas */,
      ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
      windows: () => navigator.userAgent.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => navigator.userAgent.match(/linux/i),
      mac: () => navigator.userAgent.match(/mac os/i),
      windows: () => navigator.userAgent.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => navigator.userAgent.match(/chrome/i),
      safari: () => navigator.userAgent.match(/safari/i),
      firefox: () => navigator.userAgent.match(/firefox/i),
      opera: () => navigator.userAgent.match(/opera|opera mini|opr/i),
      ie: () => navigator.userAgent.match(/msie|iemobile/i),
      edge: () => navigator.userAgent.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };
  // console.log(navigator.userAgent);
  // console.log(isBrowser.chrome());
  $id.innerHTML = `
  <ul>
  <li>User Agent: <br>${navigator.userAgent} <br></li>
  <br>
   <li>Plataforma (sistema operativo): <br>${
     isMobile.any() ? isMobile.any() : isDesktop.any()
   } <br></li>
   <br>
   <li>Navegador: <br>${isBrowser.any()} <br></li>
  </ul>
  `;

  //  Contenido exclusivo en base a la plataforma, navegador, etc

  if (isBrowser.chrome()) {
    $id.innerHTML += `
   <br>
   <img src="https://media.istockphoto.com/vectors/exclusive-vector-id541295148" alt="Exclusivo" width="25%">
   <br>
   <p>Este contenido solo se ve en Chrome</p>
   `;
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `
   <p><mark>Este contenido solo se ve en Firefox</mark><br>
   <img src="https://hdwallpapers.cat/thumbnail/flaming-firefox-red-zorro-technology-power-Ar6B.jpg" alt="Exclusivo" width="45%"></p>
   `;
  }

  //  Redirecciones

  /*   
    if (isMobile.android()) {
    window.location.href = "https://aplitivo.com";
  } 
  */
}
