/*
console.log(window);
console.log(document);

const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

let texto = "Hola mi nombre es Sergio Ortega, ...y soy papá del Coco";

hablar(texto);


console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);



console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
console.log(document.documentElement.setAttribute("lang", "es-AR"));
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://aplitivo.com");

console.log($linkDOM.hasAttribute("rel"));

$linkDOM.removeAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-id", "2 ex 1");
console.log($linkDOM.dataset);
$linkDOM.dataset.description = "Herramientas para avanzar";




const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.style.backgroundColor);
//console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-shadow", "1px 1px 2px grey");
$linkDOM.style.setProperty("font-size", "20px");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.setProperty("text-align", "center"); //también podría escribirse así:  $linkDOM.style.textAlign = "center";
$linkDOM.style.width = "75%";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginTop = "1rem";
$linkDOM.style.marginBottom = "1rem";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "1rem";
console.log("------------");
//console.log($linkDOM.style);
//console.log($linkDOM.getAttribute("style"));
//console.log(getComputedStyle($linkDOM));

//  VARIABLES CSS - CUSTOM PROPERTIES CSS

const $html = document.documentElement,
  $body = document.body;

let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color"),
  varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#444");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);



const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log("+++ Agregamos rotate-45 con .add() +++");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log("--- Quitamos rotate-45 con .remove() ---");
console.log($card.classList.contains("rotate-45"));
console.log("+-+- Cambiamos con toggle() +-+-");
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("rotate-135", "sepia");



const $whatIsDOM = document.getElementById("que-es");

let text = `
   <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Este provee una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;


// Traversing

const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.childNodes);
console.log($cards.children[3]);
console.log($cards.parentNode);
console.log($cards.firstElementChild);
console.log($cards.firstChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.children[2].closest("section"));



// Creando Elementos y Fragmentos

const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animalirijillo"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animalitos");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People"> <figcaption>Gentesss</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");
document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
//$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);



//  Templates HTML - Nueva etiqueta

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);



// Modificando Elementos (old style)

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Cualquierasa">
  <figcaption>☻Cualquierilijillo figcaption</figcaption>
`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
//$cards.insertBefore($newCard, $cards.firstElementChild);

const $cloneCards = $cards.cloneNode(true);

document.body.appendChild($cloneCards);


// Modificando Elementos  - (COOL style)

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Cualquierasa">
  <figcaption>☻Cualquierilijillo figcap</figcaption>
`;
$newCard.classList.add("card");

$cards.insertAdjacentElement("afterend", $newCard);


const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="Cualquierasa">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard
  .querySelector("figcaption")
  .insertAdjacentText("beforeend", "☻Cualquierilijillo");
$cards.insertAdjacentElement("afterbegin", $newCard);

// $cards.before($newCard);
// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.after($newCard);



// Manejadores de eventos - events handler

function holaMundo() {
  alert("Hola Mundo celeste");
  console.log(event);
}

function saludar(nombre = "desconocido/a") {
  alert(`Hola ${nombre}`);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert(
    "Hola munidirijillo, manejador de elementos semántico, con función anonima"
  );
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundito, manejador de eventos MULTIPLES");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

$eventoMultiple.addEventListener("click", () => {
  saludar();
  let nombre = prompt("...pos entonces quién eres?");
  saludar(nombre);
});

const removerDobleClickSer = (e) => {
  alert(`Quitando el evento ${e.type}, no funciona más el botón`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClickSer);
  $eventoRemover.disabled = true;
};
$eventoRemover.addEventListener("dblclick", removerDobleClickSer);



//   Flujo de eventos - Burbuja y captura

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
  //e.stopPropagation();
}

console.log($divsEventos);


$divsEventos.forEach((div) => {
  // Fase de burbuja
  div.addEventListener("click" , flujoEventos);
  //div.addEventListener("click" , flujoEventos, false);

  // Fase de captura
   div.addEventListener("click" , flujoEventos, {
    capture: false,
    once: true
  });
});

$linkEventos.addEventListener("click", (e) => {
    alert("Educación online Aplitivo");
    e.preventDefault();
    e.stopPropagation();
  });



//   Delegación de eventos

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this}, el click lo originó ${e.target.className}`
  );
}

document.addEventListener("click", (e) => {
  console.log("click en ", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Educación online Aplitivo");
    e.preventDefault();
  }
});



//   BOM:   Propiedades y Eventos

window.addEventListener("resize", (e) => {
  console.clear();
  console.log("++++++ Evento Resize +++++++");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("* * * * *  Evento Scroll * * * * * ");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.log("- - - -  Evento Load - - - -");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("/ / / DOMContentLoaded / / /");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});


//    BOM  -  Métodos

alert("hola");
let confirmacion = confirm("acepta los términos?");
let nombre = prompt("cual es su nombre?");

console.log(confirmacion + " " + nombre); 

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = open("https://aplitivo.com");
});
$btnCerrar.addEventListener("click", (e) => {
  ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
  print();
});



//   BOM   -   Objetos: URL, Historial y Navegador

console.log("***  Objeto URL (Location) ***");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);

console.log("++++  Objeto URL (Location) ++++");
console.log(history);
console.log(history.length);
console.log(history.back(2));

console.log("--- Objeto Navegador (Navigator) ---");
console.log(navigator);
console.log(navigator);
console.log(navigator);
console.log(navigator);
*/
