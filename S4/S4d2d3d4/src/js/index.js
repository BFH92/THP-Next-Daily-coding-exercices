import "../sass/style.scss";
import { routes } from "./routes";

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  routes[path[0]](pageArgument);
  return true;
};

const searchGame = () => {
  let gameInput = document.getElementById("input_game");
  gameInput.addEventListener("keydown", function () {
    if (event.keyCode == 13) {
      let gameValue = gameInput.value;
      gameValue = gameValue.replace(/\s+/g, "-");
      window.location.href = `#pagelist/${gameValue}`;
    }
  });
};
searchGame();
const scrollBottom =() => {
  
  let button = document.getElementById("showmore");
  if (button){
  button.addEventListener("click", function () {
  window.scrollTo(0,document.body.scrollHeight);

})
  }
}


scrollBottom();
window.scrollTo(0,document.body.scrollHeight);
window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());
