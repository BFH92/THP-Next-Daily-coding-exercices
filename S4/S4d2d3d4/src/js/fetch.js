import { chooseElement} from "./elements";
const RAWG_API_KEY = `?key=${process.env.RAWG_API}`;

let resultID;
const  fetchGame = async (url, argument) => {
  let finalURL = url + argument + RAWG_API_KEY;

  await fetch(`${finalURL}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let {
        name,
        released,
        description_raw,
        platforms,
        developers,
        tags,
        genres,
        publishers,
        website,
        stores,
        rating,
        suggestions_count,
        slug,
        background_image,
      } = response;

      let articleDOM = document.querySelector(".page-detail .article");

      articleDOM.querySelector("h2.head-rating").innerHTML = name;
      articleDOM.querySelector(".release-date ").innerHTML = `<p class="subtitle"> Released date </plot>`;
      articleDOM.querySelector(".release-date ").innerHTML += `<p>${released}</p>`;
      articleDOM.querySelector(".description").innerHTML = `<p class="subtitle"> Plot </plot>`;
      articleDOM.querySelector(".description").innerHTML += `<p> ${description_raw}</p>`;
      console.log(website)
      articleDOM.querySelector(
        ".gameBG"
      ).innerHTML += `<div class="img-header" style="background-image: url('${background_image}');"> <div class="websiteURL"><button type=button > <a href = "${website}">website </a></button></div> </div>`;

      articleDOM.querySelector(".platforms").innerHTML = `<p class="subtitle"> Available on </p>`;
      platforms.map((element) => {
      
        articleDOM.querySelector(
          ".platforms"
        ).innerHTML += ` <a href = "#pagelist/&platforms=${element.platform.id}">${element.platform.name}  </a> `;
      });
      if (developers[0] != undefined) {
        articleDOM.querySelector(
          ".developers"
        ).innerHTML = `<p class="subtitle"> Developer </p>`;
        
        articleDOM.querySelector(
          ".developers"
        ).innerHTML += `<a href = "#pagelist/&developers=${developers[0].id}"> ${developers[0].name}</a>`;
      }
      if (tags[0] != undefined)
        articleDOM.querySelector(".tags").innerHTML = `<p class="subtitle"> Tags </p>`;;
      console.log(tags);
      tags.map((element) => {
        if (element.id != undefined) {
          articleDOM.querySelector(
            ".tags"
          ).innerHTML += ` <a href = "#pagelist/&tags=${element.id}">#${element.name}</a> `;
        }
      });

      articleDOM.querySelector(".genres").innerHTML = `<p class="subtitle"> Genres </p>`;
      genres.map((element) => {
        articleDOM.querySelector(
          ".genres"
        ).innerHTML += ` <a href = "#pagelist/&genres=${element.id}">${element.name}</a> `;
      });
      if (publishers[0] != undefined) {
        articleDOM.querySelector(
          ".publishers"
        ).innerHTML = `<p class="subtitle">Publisher </p>  <a href = "#pagelist/&publishers=${publishers[0].slug}">${publishers[0].name}</a>`;
      }

      //articleDOM.querySelector(
      //  "p.website"
      //).innerHTML = `website: <a href = "${website}"> website </a> `;

      articleDOM.querySelector(".rating").innerHTML = `<p class="rating-votes ">${rating}/5 - ${suggestions_count} votes</p>`;
      
      if (stores[0] != undefined) {
        articleDOM.querySelector(".stores").innerHTML = `<h1 class="margin"> BUY ON</h1>`;
        stores.map((element) => {
          console.log(element.store.slug);
          articleDOM.querySelector(
            ".stores"
          ).innerHTML += ` <a href="https://${
            element.store.domain
          }"> ${chooseElement(element.store.slug)}   ${
            element.store.name
          } </a>`;
        });
      }
      resultID = response.id
    
  
    


  const fetchScreenShots = (url, slug) => {
  let screenURL = url + slug + "/screenshots" + RAWG_API_KEY;
  console.log(`TEST ${screenURL}`);
  fetch(`${screenURL}`)
    .then((response) => response.json())
    .then((response) => {
      //  console.log(response);
      let count = 0;
      let results = response.results;
      if (results != undefined) {
        articleDOM.querySelector(".screenshotTitle").innerHTML +=
          `<h1 class="margin">SCREENSHOTS</h1>`;
      }
      results.map((result) => {
        if (count < 4) {
          articleDOM.querySelector(
            ".screenshot"
          ).innerHTML += `<div class="img-screen" style="background-image: url('${result.image}');"></div> `;
          count += 1;
        }
      });
    });
  };

  const fetchSimilarGame = (url, slug) => {
  let similarURL = url + slug + "/game-series" + RAWG_API_KEY;
  let articles = "";
  fetch(`${similarURL}`)
    .then((response) => response.json())
    .then((response) => {
      let results = response.results;

      results.map((result) => {
        const platformsList = [];
        const genresList = [];
        if (result.parent_platforms) {
          result.parent_platforms.map((index) => {
            platformsList.push(
              ` <a href="#pagelist/&platforms=${
                index.platform.id
              }">${chooseElement(index.platform.slug)}</a>`
            );
          });
        }
        
        if (result.genres){
          
          result.genres.map((index) => {
            genresList.push(
              ` <a href="#pagelist/&genres=${index.id}">${index.name}</a>`
            );
          });
        }
        
        
          console.log(genresList)
        articles += ` 

          <div class="cardGame">
          <div class="img-cardGame" style="background-image: url('${result.background_image}');"></div>
          <div class="hover-content">
                        <p>${released}</p>
                        <p>Votes :  ${result.suggestions_count}</p>
                        <p>Rating : ${result.rating}</p>
                        <p>Genres : ${genresList.join(" ")}</p>
            </div>
          <h4 class="text-cardGame margin"><a href = "#pagedetail/${result.slug}">${result.name}</a></h5>  
          <p class="platforms text-cardGame">${platformsList.join(" ")}<p>
          </div>
      
          `;
      });
      if (articles != "") {
        articleDOM.querySelector(
          ".similarGameTitle"
        ).innerHTML = `<h1 class="margin"> SIMILAR GAMES </h1>`;
      }
      articleDOM.querySelector(".similarGame").innerHTML += articles;
      
    });
  }
  

  const fetchTrailer = (url, id) => {
  let trailerURL = url + id + "/movies" + RAWG_API_KEY;
  let articles = "";
  fetch(`${trailerURL}`)
    .then((response) => response.json())
    .then((response) => {
      let results = response.results;
      console.log(results);
      articles = `
      <video class="video2"controls>
      <source src="${results[0].data.max}" type="video/mp4">
      Your browser does not support the video tag.
      </video>

      `;
      console.log(articleDOM.querySelector(".trailer"));
      console.log(articleDOM.querySelector(".video"));
      if (articles != "") {
        articleDOM.querySelector(".trailer").innerHTML = `<h1 class="margin"> TRAILER </h1>`;
      }
      articleDOM.querySelector(".video").innerHTML += articles;
    });
    
  };
  fetchTrailer(`https://api.rawg.io/api/games/`, resultID );
  fetchScreenShots(`https://api.rawg.io/api/games/`, slug);
 fetchSimilarGame(`https://api.rawg.io/api/games/`, slug);
  });
     
};
export { fetchGame, resultID};
