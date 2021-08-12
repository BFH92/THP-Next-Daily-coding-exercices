
import { PageList } from "./PageList";
const Home = () => {
  
const render = () => {
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
      
        <div id = "platformFilter" class="platform-filter">
        <select class="plateform-filter">
        <option value=""></option>
        <option value="1">PC</option>
        <option value="18">PLAYSTATION</option>
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

  PageList();
};
render()
};


export {Home}