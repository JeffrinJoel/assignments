/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let word = str.split('');
    let arr = word.sort();
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let value = 0;
    for(let i = 0; i < word.length ; i++) {
      for(let j = 0; j < vowels.length ; j++){
        if(arr[i] === vowels[j]){
          value +=1;
        }
      }
    }
  return value;
}

module.exports = countVowels;