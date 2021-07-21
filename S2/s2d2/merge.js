class Merge {
  constructor(count = 0, result = []) {
    this.count = count;
    this.result = result;
  }

  mergeSort (unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      this.count ++
      return unsortedArray;

    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
    //const mergeLeft = this.mergeSort(left)
    //const mergeRight = 
    // Using recursion to combine the left and right
    
    return merge(
      this.mergeSort(left), this.mergeSort(right)
    ); 
    
  

  function merge(left_part,right_part) 
  {
  	var i = 0;
  	var j = 0;
    var results = []

  	while (i < left_part.length || j < right_part.length) {
  		if (i === left_part.length) {
  			// j is the only index left_part
  		  results.push(right_part[j]);
  			j++;

  		} 
        else if (j === right_part.length || left_part[i] <= right_part[j]) {
  			results.push(left_part[i]);
  			i++;
        
  		} else {
  			results.push(right_part[j]);
  			j++;

  		}
  	}
    
  	return results;
  }
  
  }

  
}
//console.log(mergeSort([1,5,3,4,6]))

module.exports = Merge;
