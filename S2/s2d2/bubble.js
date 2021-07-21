class Bubble{
  constructor(count=0){
    this.count= count;
  } 

  sort(array) {
    let bubbleArray = [...array];
    for (let i = 0; i < bubbleArray.length; i++) {
      for (let j = 1; j < bubbleArray.length; j++) {
        if (bubbleArray[j] < bubbleArray[j - 1]) {
          let temp = bubbleArray[j];
          bubbleArray[j] = bubbleArray[j - 1];
          bubbleArray[j - 1] = temp;
          this.count ++
        }
      }
    }
    console.log(`Tri à bulle: ${this.count} comparaisons - [${bubbleArray}]`)
  }
  
}
module.exports = Bubble;