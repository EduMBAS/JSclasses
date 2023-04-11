function mostFreqChar(str) {
    let freq = {};
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (/[a-z0-9]/.test(char)) {
        freq[char] = ++freq[char] || 1;
      }
    }
    
    let maxChar = null;
    let maxCount = 0;
    
    for (let char in freq) {
      if (freq[char] > maxCount) {
        maxChar = char;
        maxCount = freq[char];
      }
    }
    
    return maxChar;
  }