
import { fetchGame } from "./fetch";

const PageDetail = (argument) => {
const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");

    fetchGame(`https://api.rawg.io/api/games/`, cleanedArgument);
    
  };

  const render = () => {
    let welcomeDOM = document.querySelector(".welcome");
    welcomeDOM.innerHTML = "";
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <div class="gameBG"></div>
          <div class="head2">

            <div class="title2"> <h2 class="head-rating"></h2></div>
            <div class="rating"> </div>
          </div>
          <div class="description text"></div>
          <div class="grid-4">
            <div class="release-date"></div>
            <div class="developers"></div>
            <div class="platforms"></div>
            <div class="publishers"></div>
          </div>
          <div class="grid-2">
            <div class="genres subgrid-2"></div>
            <div class="tags subgrid-2"></div>
          </div>
          
          <div class="stores"></div>
          <div class="trailer"> </div>
          <div class="video"> </div>
          <div class="youtubeList"></div>
          <div class="screenshotTitle"></div>
          <div class="screenshot"></div>
          <div class= "similarGameTitle "></div>
          <div class="similarGame articles">          
          </div>
        </div>
      </section>
      <footer >
        <div class="color-block margin">
        </div>
      </footer>
    `;

    preparePage();
  };

  render();
};

export { PageDetail };
