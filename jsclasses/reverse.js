function reverse(arr, modify = false) {
    
    if (modify) {
      
      for (let i = 0; i < arr.length / 2; i++) {
        
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
      }
  
      
      return arr;
    } else {
      
      const reversed = [];
  
     
      for (let i = arr.length - 1; i >= 0; i--) {
        
        reversed.push(arr[i]);
      }
  
     
      return reversed;
    }
  }
  
  const arr = [1, 2, 3, 4, 5];
  console.log(reverse(arr)); 
  console.log(arr); 
  
  reverse(arr, true); 
  console.log(arr); 