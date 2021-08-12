
//n  = n.toString()
//n = n.split("")
//console.log(n)



const nextBigger = (n) => {
  console.log(n)
  n  = n.toString()
n = n.split("")
n = n.map((element)=>
element = Number(element))

let temp;
for (let i=(n.length-1); i>=0 ; i--){
  if (n[i]> n[i-1]){
    temp = n[i-1] 
    n[i-1] = n[i]
    n[i]= temp
  
    if (n[i]> n[i+1]){
      temp = n[i+1] 
      n[i+1] = n[i]
      n[i]= temp
      i-=1
      break
    }else if(n[i]> n[i-2]){
      temp = n[i-2] 
      n[i-2] = n[i]
      n[i]= temp
      //test()
      if (n[i]< n[i-1]){
        temp = n[i-1] 
        n[i-1] = n[i]
        n[i]= temp
        i-=1
        break
      }
    i-=1 
  }
  break
  }
console.log("step")
}
n = Number(n.join(""))
console.log(n)
return n
}
 nextBigger(46084)
 
//console.log(n)
