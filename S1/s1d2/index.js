function lotoCheck() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkLotoDraw();
}


function checkFirstName() {
  const inputFirstName = document.forms["myForm"]["first_name"].value;
  if (inputFirstName == "") {
    alert("remplissez le prénom !");
    return false;
  }
}
function checkLastName() {
  const inputLastName = document.forms["myForm"]["last_name"].value;
  if (inputLastName == "") {
    alert("remplissez le nom !");
    return false;
  }
}

function checkEmail() {
  const inputEmail = document.forms["myForm"]["email"].value;
  const regex = new RegExp(/[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
  inputEmail.match(regex)? true : alert("mail invalide!");
}

function checkLotoDraw() {
  var inputLotoNumber1 = document.forms["myForm"]["loto_numbers_1"].value;
  var inputLotoNumber2 = document.forms["myForm"]["loto_numbers_2"].value;
  var inputLotoNumber3 = document.forms["myForm"]["loto_numbers_3"].value;
  var inputLotoNumber4 = document.forms["myForm"]["loto_numbers_4"].value;
  var inputLotoNumber5 = document.forms["myForm"]["loto_numbers_5"].value;
  var inputLotoNumber6 = document.forms["myForm"]["loto_numbers_6"].value;  
  function checkLotoNumbers(){
    const numberScope = new RegExp(/^(?:[1-9]|[1-4][0-9]|50)$/);
    inputLotoNumber1.match(numberScope)? true : alert("nombre_1 : numero entre 1 et 50 seulement!");
    inputLotoNumber2.match(numberScope)? true : alert("nombre_2 : numero entre 1 et 50 seulement!");
    inputLotoNumber3.match(numberScope)? true : alert("nombre_3 : numero entre 1 et 50 seulement!");
    inputLotoNumber4.match(numberScope)? true : alert("nombre_4 : numero entre 1 et 50 seulement!");
    inputLotoNumber5.match(numberScope)? true : alert("nombre_5 : numero entre 1 et 50 seulement!");
    inputLotoNumber6.match(numberScope)? true : alert("nombre_6 : numero entre 1 et 50 seulement!");
    function pushLotoNumbersInArray() {
      lotoNumbersInputs = [inputLotoNumber1,inputLotoNumber2,inputLotoNumber3,inputLotoNumber4,inputLotoNumber5,inputLotoNumber6]
      //return lotoNumbersInputs
      function hasDuplicates(lotoNumbersInputs) {
        return (new Set(lotoNumbersInputs)).size !== lotoNumbersInputs.length;
      }
      if (hasDuplicates(lotoNumbersInputs)){
        alert("tous les nombres doivent être unique");
        return;
      } else {
        generateLotoDraw()
        compareLotoDrawWithInput()
      }

    }
    pushLotoNumbersInArray()
    console.log(lotoNumbersInputs)
  }
  checkLotoNumbers()
}

var lotoDraw =[];
function generateLotoDraw() {
  
  for (let step = 0; step < 6; step++) {
    
    function addRandomNumber(){
    randomNumber = (Math.floor(Math.random() *49 ) + 1).toString();
    
      if (lotoDraw.includes(randomNumber)){
        addRandomNumber();
      } else {
      lotoDraw.push(randomNumber);
      }
    }
    addRandomNumber();
  }
  console.log(lotoDraw);
  return lotoDraw;
  
}

function compareLotoDrawWithInput() {
  
  isEqual = lotoDraw.sort().toString() === lotoNumbersInputs.sort().toString()? alert("WIN"):alert("LOOSE") ;
}
    



    
  
