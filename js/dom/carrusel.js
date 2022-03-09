export default function slider() {
  // esta función no lleva parámetros, pero debe respetar las clases, no podemos poner en el HTML (aquí tampoco), otro nombre de selector
  const $nextBtn = document.querySelector(".slider-btns .next"),
    $prevBtn = document.querySelector(".slider-btns .prev"),
    $slides = document.querySelectorAll(".slider-slide");

  let i = 0;

  document.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    }

    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;

      if (i >= $slides.length) {
        i = 0;
      }
      $slides[i].classList.add("active");
    }
  });
}
