
const bubbleClass = require('./bubble.js')
const insertClass = require('./insert.js')
const selectClass = require('./select.js')
const quickClass = require('./quick.js')
const mergeClass = require('./merge.js')
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

//const bubble = new bubbleClass;
//bubble.sort(fList) 
//
//const insert = new insertClass;
//insert.sort(fList) 
//
//const select = new selectClass;
//select.sort(fList) 
//
//const quick = new quickClass;
//quick.sort(fList) ;
console.log(fList)
const merge = new mergeClass;
merge.mergeSort(fList)