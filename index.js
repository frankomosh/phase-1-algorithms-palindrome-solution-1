function reversedString(word){
  const wordArray=word.split('');
  const reversedWordArray=wordArray.reverse('');
  const reversedWord=reversedWordArray.join('');
  return reversedWord;
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord=reversedString(word);
  if (word===reversedWord){
      return true
  }else{
    return false
  }
    
}

/* 
  Add your pseudocode here
  reverse the input string 
  if the reversed string is equal to the input
    return true
  else 
     return false  
*/

/*
  Add written explanation of your solution here
  The isPalidrome function returns either true or false depending on whether the argument passed in the palidrome is a  function 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
