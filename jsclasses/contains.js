function contains(arr, elem, strict = true) {
  
    for (let i = 0; i < arr.length; i++) {
      
      if (strict) {
        if (arr[i] === elem) {
          return true;
        }
      } else {
        if (arr[i] == elem) {
          return true;
        }
      }
    }
  
  
    return false;
  }
  
  console.log(contains([1, 2, 3, 4, 5], '3', false));