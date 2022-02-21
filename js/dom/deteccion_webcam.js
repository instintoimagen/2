export default function webCam(id) {
  const $video = document.getElementById(id);
  //console.log(navigator.mediaDevices.getUserMedia);
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML("afterend", `<p> <mark> ${err} </mark></p>`);
        console.log(`Sucedió el siguiente errorilijillo:  ${err}`);
      });
  }
}
