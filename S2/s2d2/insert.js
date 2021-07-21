class Insert{
  constructor(count=0){
    this.count= count;
  } 

  sort(array) {
    let insertArray = [...array];
    for (let i = 1; i < insertArray.length; i++) {
      let current = insertArray[i];
      let j = i - 1;
      while (j >= 0 && insertArray[j] > current) {
        insertArray[j + 1] = insertArray[j];
        j--;
        this.count ++
      }
      insertArray[j + 1] = current;
    }
    console.log(`Tri par insertion: ${this.count} comparaisons - [${insertArray}]`)
  }
  
}
module.exports = Insert;

