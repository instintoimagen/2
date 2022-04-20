export async function ajax(props) {
  //Asíncrona para que espere la petición ajax antes de seguir la ejecución del código y de esa manera no borre el loader antes que cargue el contenido
  let { url, cbSuccess } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Ocurrió un error al acceder a la API";
      document.getElementById("main").innerHTML = `
   <div class="error">
   <p>Error ${err.status}: ${message}</p>
   </div>
   `;
      document.querySelector(".loader").style.display = "none";
      console.log(err);
    });
}
