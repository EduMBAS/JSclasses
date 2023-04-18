function charCount(str, caseSensitive = true) {
    
    const freq = {};
  
    
    for (let char of str) {
      
      if (char.match(/[a-z0-9]/i)) {
        
        if (!caseSensitive) {
          char = char.toLowerCase();
        }
        
        freq[char] = freq[char] ? freq[char] + 1 : 1;
      }
    }
  
    
    return freq;
  }
  console.log(charCount("Hello, World!", false));