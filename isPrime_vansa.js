function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let a = 2; a < n; a++){
      if (n % a === 0){
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(9));
  console.log(isPrime(43));
  
  


//......................................//
  // function isPrime(n) {
  //   if (n <= 2)
  // }
  
  // console.log(isPrime(10));
  // console.log(isPrime(43));