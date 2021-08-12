import React from 'react'

const HangMan = () => {
  let textInput = React.createRef();
  const [word, setWord] = React.useState("");
  const [hiddenWord, setHidden] = React.useState("");
  const [charFound, setChar] = React.useState("");

  const PlayGame = async() => {
    
    const FetchWord = () => {

      const apiUrl = `https://random-word-api.herokuapp.com/word?number=1`
      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {

         setWord(data.join());
         
      })
      
    
    }

    FetchWord()

    
  }
  
    
  const foundChar= (e) =>{
    console.log(word)
    console.log(textInput.current.value)
    let removeStr = `[a-z](?<![${charFound}])`;
    let regex = new RegExp(removeStr,'g');
    const hiddenWord = word.replaceAll(regex, "-") //[ed] à remplacer par une variable
    
    if (word.includes(textInput.current.value)){
        setChar(charFound+ textInput.current.value)
    }else{

    }
    
    setHidden(hiddenWord)
    return(
      hiddenWord
      
      ) 
    }


  
  
  return(
    <div>
    <button onClick={PlayGame}> Play New Game</button>
      <p>{word}</p>

      <div>
        <input ref={textInput} type="text" />
        <button onClick={foundChar}>get value</button>
      </div>
    
      <p>{hiddenWord}</p>
    </div>
  )

}

export default HangMan