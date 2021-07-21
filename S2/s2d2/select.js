class Select{
  constructor(count=0){
    this.count= count;
  } 

  sort(array) {
    let arraySelect = [...array];
    let iMin = 0;
    for (let j = 0; j < arraySelect.length; j++) {
      iMin = j;
  
      for (let i = j+1; i < arraySelect.length; i++) {
        if (arraySelect[i] < arraySelect[iMin]) {
          iMin = i;
          this.count ++
        }
      }
        
          const temp = arraySelect[j];
          arraySelect[j] = arraySelect[iMin];
          arraySelect[iMin] = temp;
          this.count ++
        
        
      
    }
    console.log(`Tri par selection: ${this.count} comparaisons - [${arraySelect}]`)
  }
  
}
module.exports = Select;

