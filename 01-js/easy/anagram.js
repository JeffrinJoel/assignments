/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   const string1 = str1.toLowerCase();
   const string2 = str2.toLowerCase();
   const arr1 = string1.split('');
   const arr2 = string2.split('');
   let sortArr1 = arr1.sort();
   let sortArr2 = arr2.sort();
   if( sortArr1.join('') === sortArr2.join('')){
      return true
   }else {
    return false
   }
}

module.exports = isAnagram;
