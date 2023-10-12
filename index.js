function isPalindrome(word) {
  word = word.toLowerCase();
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  Pseudocode:
  - Convert the input word to lowercase.
  - Initialize two pointers, one at the beginning and one at the end of the word.
  - While the left pointer is less than the right pointer:
    - If the characters at the left and right pointers do not match, return false (not a palindrome).
    - Move the pointers towards the center of the word.
  - If the loop completes, return true (it's a palindrome).

  Explanation:
  We start with two pointers, one at the beginning and one at the end of the word. We compare the characters at these pointers. If they match, we move the pointers towards the center of the word and continue checking. If we find any non-matching characters, we return false. If we successfully check all characters and they match, we return true.

  This algorithm works for case-insensitive palindromes.
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("A man a plan a canal Panama"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Was it a car or a cat I saw?"));
}

module.exports = isPalindrome;
