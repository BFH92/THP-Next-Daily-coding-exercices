const fs = require("fs");
const fileName = process.argv[2];

try {
  const data = fs.readFileSync(fileName, "utf8");
  var split = data.split(" ");
  console.log(split);
  var list = split.map(function (value) {  
    if (isNaN(value)){
      console.error(`la valeur "${value}" n'a pas été pris en compte`)
    }
    if (value == "") {
      value = NaN;
    }
    return Number(value);
  })
  var fList = list.filter(function (value) {
    return isNaN(value) == false;
  });
} catch (error) {
  console.error(error.message);
}



//function bubbleSort(array) {
//  let bubbleArray = array;
//  for (let i = 0; i < array.length; i++) {
//    for (let j = 1; j < array.length; j++) {
//      if (array[j] < array[j - 1]) {
//        let temp = array[j];
//        array[j] = array[j - 1];
//        array[j - 1] = temp;
//      }
//    }
//  }
//  return bubbleArray;
//}

//function insertSort(array) {
//  let insertArray = array;
//  for (let i = 1; i < insertArray.length; i++) {
//    let current = insertArray[i];
//    let j = i - 1;
//    while (j >= 0 && insertArray[j] > current) {
//      insertArray[j + 1] = insertArray[j];
//      j--;
//    }
//    insertArray[j + 1] = current;
//  }
//  return insertArray;
//}

//function selectSort(array) {
//  let arraySelect = array
//  let iMin = 0;
//  for (let j = 0; j < arraySelect.length; j++) {
//    iMin = j;
//
//    for (let i = j+1; i < arraySelect.length; i++) {
//      if (arraySelect[i] < arraySelect[iMin]) {
//        iMin = i;
//      }
//    
//      if (iMin != j) {
//        let temp = arraySelect[j];
//        arraySelect[j] = arraySelect[iMin];
//        arraySelect[iMin] = temp;
//      }
//    }
//  }
//  return arraySelect;
//}

function mergeSort(array) {
  var newArray = [];
if (array.length == 1){
  return array
}else{
  partition(array);
}
return newArray
}

function partition(array){
  var firstHalf = [];
  var secondHalf = [];
  if (array.length > 1){
    const half = Math.ceil(array.length / 2);    
    firstHalf = array.slice(0, half);
    secondHalf = array.slice(-half);
    partition(firstHalf);
    partition(secondHalf);
    if (firstHalf.length ==1 && secondHalf.length ==1){
      compare(array)
    }
  }else{
    return;
  }
}

function compare(firstHalf,secondHalf){
  const newArray = [];
  if (firstHalf == undefined){
    if(secondHalf[0] == undefined){
      return;
    }
    var minS = secondHalf[0]
    newArray.push(minS)
  }else if (secondHalf == undefined){
      if(firstHalf[0] == undefined){
        return;
      }
      var minF = firstHalf[0]
      newArray.push(minF)
  }
  else{
    var minF = firstHalf[0]
    var minS = secondHalf[0]
  }

  console.log(minF);
  console.log(minS);

    if(minF< minS){
      newArray.push(minF, minS)
    }else{
      newArray.push(minS, minF)
    }
    //console.log(newArray)
    firstHalf.shift();
    secondHalf.shift();
    compare(firstHalf,secondHalf);
}
//console.log(bubbleSort(fList));
//console.log(insertSort(fList));
//console.log(selectSort(fList));
//console.log(quickSort(fList));

const bubble = new Bubble();

bubble.sort(fList) 