const computeFactorialIt = (n) => {
  var result = 1;
  for (let index = 1; index <= n; index++) {
    result = index * result;
  }
  console.log(result);
};
computeFactorialIt(6);

const computeFactorialRec = (n) => {
  if (n <= 0) {
    return 1;
  }
  return n * computeFactorialRec(n - 1);
};
console.log(computeFactorialRec(6));

const computePowerIt = (n, p) => {
  var result = 1;
  for (let index = 1; index <= p; index++) {
    result = n * result;
  }
  return result;
};
console.log(computePowerIt(10, 3));

const computePowerRec = (n, p) => {
  if (p === 0) {
    return 1;
  }
  return n * computePowerRec(n, p - 1);
};
console.log(computePowerRec(10, 3));

const square = (n, i, j) => {
    let mid = (i + j) / 2;
    let mul = mid * mid;
    if ((mul === n) || (Math.abs(mul - n) < 0.00001)){
       return mid;
    }else if (mul < n){
       return square(n, mid, j);
    }else{
       return square(n, i, mid);
    }
 }
 // Function to find the square root of n
 const computeSquareRoot = num => {
    let i = 1;
    const found = false;
    while (!found){
       // If n is a perfect square
       if (i * i === num){
          return i;
       }else if (i * i > num){
          let res = square(num, i - 1, i);
          return res;
       };
       i++;
    }
 }

console.log(computeSquareRoot(10));
console.log( Math.sqrt(10));

const isPrimeNumber = (n) => {
  if (n == 1) {
    return false;
  } else if (n == 2) {
    return true;
  } else {
    let prime = 1;
    for (i = 2; i < n/2; i++) {
      if (n % i == 0) {
        prime = 0;
        return false;
      }
    }
    if (prime == 1) {
      return true;
    }
  }
};
console.log(isPrimeNumber(17));

const findSupPrime = (n) => {
  if (n <= 0) {
    return 0;
  } else {
    if (isPrimeNumber(n)) {
      return n;
    } else {
      return findSupPrime(n + 1);
    }
  }
};
console.log(findSupPrime(123));


