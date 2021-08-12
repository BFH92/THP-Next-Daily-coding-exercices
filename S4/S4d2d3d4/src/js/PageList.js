import { Button, chooseElement } from "./elements";

const PageList = (argument = "", results = 9, platforms ="") => {
  //console.log(`debut de fonction ${results}`);
  welcome.innerHTML = `
    <div class="welcome text">
      <div class="text-content">
      <h2>Welcome,</h2>
        <p>
          The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
          the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
          brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
          groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
          with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure
        </p>
      
  
    <div  class="platform-filter">
    <select id="platformFilter" class="plateform-filter">
    <option value=""></option>
    <option value="1">PC</option>
    <option value="2">PLAYSTATION</option>
    <option value="4">IOS</option>
    <option value="8">ANDROID</option>
    <option value="6">LINUX</option>
    <option value="3">XBOX</option>
    <option value="5">MAC</option>
    <option value="7">NINTENDO</option>
    <option value="">ANY</option>
    
    </select>

  
  <div>
  </div>
  </div>

`
  pageContent.innerHTML = `
<div class="articles text"><p>...loading</p></div>
    </section>
  `
  let inputArgument = argument;
  const publishers = [];
  let startDate = "2015-01-01";
  let endDate = "2021-12-31";
  const RAWG_API_KEY = `key=${process.env.RAWG_API}`;

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+^/g, "-");

    let articles = "";

    const fetchList =(url, argument) => {
      let finalURL = url;

      if (argument.length) {
        finalURL = url + "&search=" + argument + "&search_precise=true";
      }
      console.log(platforms)
      console.log(finalURL)
      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
          
            console.log(response)

          

            let platformsList = [];
            if (article.parent_platforms)
              article.parent_platforms.map((index) => {
                let platformId = index.platform.id;
                //console.log(platformId);
                

                platformsList.push(
                  ` <a href="#pagelist/&parent_platforms=${platformId}">${chooseElement(index.platform.slug)}</a>`
                );
              });
            //let platformView = `platforms : ${platformsList}`;
            let released = `released : ${article.released}`;
            let vote;
            if (article.suggestions_count != 0 && article.suggestions_count != undefined){
            vote = `${article.suggestions_count} votes`;
            }
            let rating ="";
            if (article.rating != 0 && article.rating != undefined){
               rating = `rating : ${article.rating} / 5 - `;
            }
            
            let genresList = [];

            if (article.genres)
              article.genres.map((index) => {
                genresList.push(
                  ` <a href="#pagelist/&genres=${index.id}">${index.name}</a>`
                );
              });
            
              let genresView ="";
              console.log(`GENRE ${genresList}`)
              if (genresList != ""&& genresList != undefined){genresView =`${genresList}`;}
            
            
            //console.log(genresView);
            articles += `
              
                  <div class="cardGame">
                    <div class="img-cardGame" style="background-image: url('${article.background_image}');">     </div> 
                      <div class="hover-content">
                        <p>${released}</p>
                        <p>${rating} ${vote}</p>

                        <p class="genres-list">${genresView}</p>
                      </div>
                
                  

                      <a href = "#pagedetail/${article.slug}"><h3 class="text-cardGame margin">${article.name}</h3> </a> 
                      <p class="platforms text-cardGame"> ${platformsList.join(" ")}<p>
                
                  </div>

          
                `;
          });
        
          document.querySelector(".page-list .articles").innerHTML = articles;
        });
    };
    if (platforms!=""){
      console.log("PLATFORM!")
    fetchList(
      `https://api.rawg.io/api/games?page_size=${results}&ordering=rating&parent_platforms=${platforms}&dates=${startDate},${endDate}&${RAWG_API_KEY}`,
      cleanedArgument
    );
    }else{
      console.log(" NO ___PLATFORM!")
      fetchList(
        `https://api.rawg.io/api/games?page_size=${results}&ordering=-released&dates=${startDate},${endDate}&${RAWG_API_KEY}`,
        cleanedArgument
      );
    }
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
    `;

    preparePage();
    pageContent.innerHTML += `<div class="grid-3"> ${Button("showmore", "Show more")} </div>`;
  };

  render();

  const showMore = () => {
    let showMoreButton = document.getElementById("showmore");
    showMoreButton.addEventListener("click", function () {
      if (results < 27) {
        let valueResults = results + 9;
        //console.log(results);
        
        PageList(inputArgument, valueResults);
        
      }
    });
  };

  showMore();

  const SelectPlatform = () => {
    let selectList = document.getElementById("platformFilter");


    selectList.addEventListener('change', function () {
      selectList.selected = true
      PageList(inputArgument, results, selectList.value);
  
    });
  };
  SelectPlatform()
};


export { PageList };
