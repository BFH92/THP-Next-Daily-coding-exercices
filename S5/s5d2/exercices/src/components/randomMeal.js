import React from 'react'


const RandomMeal =() => {
  
  const [title, setTitle] = React.useState("");
  const [img, setImg] = React.useState("");
  const [link, setLink] = React.useState("");
  
  const FetchMeal = () => {

    const apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      
       const receipeTitle = data.meals[0].strMeal
       const receipeImg = data.meals[0].strMealThumb
       const receipeLink = data.meals[0].strSource
       
       setTitle(receipeTitle);
       setImg(receipeImg);
       setLink(receipeLink);
    })


  }
  
  return (
    <div>
    <button onClick={FetchMeal}> get Random Meal </button>
    <a href={link}><h3>{title}</h3></a>
    <img src={img} alt={title}></img>
    </div>
  )



}

export default RandomMeal;