

var id1 ='#title';
var id2 = '#title2';
var id3 = '#title3';
const fetchApi =() => {


}

function animeObject(id){
    anime({
      targets: id,
      translateX: '-100%',
      
       })
       console.log("hey")
}
  
  
  
  document.addEventListener("keypress",function(){animeObject(id3)})




