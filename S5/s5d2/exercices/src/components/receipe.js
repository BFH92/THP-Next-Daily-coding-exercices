import React from 'react'

const Recipe =()=>{
  const [title, setTitle] = React.useState("");
  const [img, setImg] = React.useState("");
  const [link, setLink] = React.useState("");
  
  const FetchMeal = () => {

    const apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      
       const recipeTitle = data.meals[0].strMeal
       const recipeImg = data.meals[0].strMealThumb
       const recipeLink = data.meals[0].strSource
       
       setTitle(recipeTitle);
       setImg(recipeImg);
       setLink(recipeLink);
    })


    return(
      <div>
      <a href={link}><h3>{title}</h3></a>
      <img src={img} alt={title}></img>
      </div>
  
    )
  }
  FetchMeal()
}

export default Recipe;
  
