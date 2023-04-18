function max(nums, strict = true) {
    
    let maxNum = nums[0];
  

    for (let i = 1; i < nums.length; i++) {
      
      if (strict) {
        if (nums[i] > maxNum) {
          maxNum = nums[i];
        }
      } else {
        if (nums[i] >= maxNum) {
          maxNum = nums[i];
        }
      }
    }
  

    return maxNum;
  }
  
  console.log(max([1, 5, 2, 9, 3], false));