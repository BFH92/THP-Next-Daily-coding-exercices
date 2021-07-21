class Quick {
  constructor(count = 0) {
    this.count = count;
  }
  sort(array) {
    let quickArray = [...array];
    let pivot = 0;
    let storeIndex = 0;
    let temp = 0;
    const swap = (value1, value2) => {
      temp = value1;
      value1 = value2;
      value2 = temp;
    };
    for (let i = 0; i < quickArray.length; i++) {
      pivot = i;

      for (let j = i + 1; j < quickArray.length; j++) {
        storeIndex = quickArray[pivot];
        if (quickArray[j] < quickArray[pivot]) {
          //swap(quickArray[j],storeIndex)
          temp = quickArray[j];
          quickArray[j] = storeIndex;
          storeIndex = temp;
          this.count++;
        }
        //swap(quickArray[pivot],storeIndex)
        let temp2 = quickArray[pivot];
        quickArray[pivot] = storeIndex;
        storeIndex = temp2;
      }
    }
    console.log(`Tri rapide: ${this.count} comparaisons - [${quickArray}]`);
  }
}
module.exports = Quick;
