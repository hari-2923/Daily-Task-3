function findFirstNonRepeatedChar(str) {
    let charCount = {};
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return "No non repeated elements";
}
  
console.log(findFirstNonRepeatedChar("Self-Stack"))