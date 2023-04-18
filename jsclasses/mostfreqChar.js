function mostFreqChar(str, startIndex = 0) {
    if (str.length === 0 || startIndex >= str.length) {
      return null; 
    }
  
    const freq = {}; 
    let maxFreq = 0; 
    let mostFreqChar = null; 
    for (let i = startIndex; i < str.length; i++) {
      const char = str[i];
      freq[char] = (freq[char] || 0) + 1; 
      if (freq[char] > maxFreq) { 
        maxFreq = freq[char];
        mostFreqChar = char;
      }
    }
  
    return mostFreqChar;
  }