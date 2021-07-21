var main_courses = [
  "Filet de turbot de la mer Noire",
  "Tablier de sapeur",
  "Gigot d'agneau",
  "Faisan de forêt",
  "Trio de quinoa, chou kale et pousses d'épinard",
];
var techniques = [
  "à la cocotte",
  "minute",
  "avec sa sauce hollandaise",
  "façon sud-ouest",
  "comme chez ma grand-mère",
  "déglacé au saké",
  "maturé en fût de chêne",
];
var sides = [
  "une purée de topinambour",
  "ses frites truffées",
  "des châtaignes croustillantes",
  "une brunoise carotte-cèleri",
  "un oeuf parfait",
  "sa crème veloutée de fromages affinés",
];
var seasonings = [
  "au yuzu rouge",
  "au poivre vert de Sichuan",
  "et une pointe de safran",
  "à l'ail noir",
  "et un peu de sucre en poudre",
];

var coursesTitle = document.querySelectorAll(".menu-title");
var coursesContent = document.querySelectorAll(".menu-content");
var coursesPrices = document.querySelectorAll(".offer-price");

coursesTitle = Array.prototype.slice.call(coursesTitle);
coursesContent = Array.prototype.slice.call(coursesContent);

const randomMenu = () => {
  for (let i = 0; i < coursesContent.length; i++) {
    
    var random_main_course =
      main_courses[Math.floor(Math.random() * main_courses.length)];
    var random_technique =
      techniques[Math.floor(Math.random() * techniques.length)];
    var random_side = sides[Math.floor(Math.random() * sides.length)];
    var random_seasoning =
      seasonings[Math.floor(Math.random() * seasonings.length)];

    var menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`;
    var menuTitle = `${random_main_course}`;
    coursesTitle[i].innerHTML = menuTitle.toUpperCase();
    coursesContent[i].innerHTML = menu;
  }
};

var btn = document.querySelector(".btn");

btn.addEventListener("click", () => randomMenu());

function onMouseOut(event) {
  // Remove this event listener
  if (
    event.clientY < 50 &&
    event.relatedTarget == null &&
    event.target.nodeName.toLowerCase() !== "select"
  ) {
    // Show the popup
    document.getElementById("popup").style.display = "block";
  }
}
function exitPopup() {
  document.getElementById("popup").style.display = "none";
}

document.addEventListener("mouseout", onMouseOut);

document.addEventListener("click", exitPopup);

var menu = document.getElementById("Menu");

const navMenu = () => {
  document.getElementById("Menu").style.display = "block";
  document.getElementById("Accueil").style.display = "none";
  document.getElementById("Photos").style.display = "none";
};

document.getElementById("Menu-Nav").addEventListener("click", navMenu);

const navAccueil = () => {
  document.getElementById("Accueil").style.display = "block";
  document.getElementById("Menu").style.display = "none";
  document.getElementById("Photos").style.display = "none";
};
document.getElementById("Accueil-Nav").addEventListener("click", navAccueil);

const navPhotos = () => {
  document.getElementById("Photos").style.display = "block";
  document.getElementById("Menu").style.display = "none";
  document.getElementById("Accueil").style.display = "none";
};
document.getElementById("Photos-Nav").addEventListener("click", navPhotos);

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("src", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var source = document.getElementById(ev.dataTransfer.getData("src"));
  var sourceParent = source.parentNode;
  var target = ev.currentTarget.firstElementChild;

  ev.currentTarget.replaceChild(source, target);
  sourceParent.appendChild(target);
}
