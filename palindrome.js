/**
 * Change the integer to a string
 * Then reverse the string to see if its palindrome
 * return true if it is a palindrome else return false
 */

const palindromeChecker = num => {
  num = num.toString();
  let reversedInt = '';
  for (let i = num.length - 1; i >= 0; i--) {
    reversedInt += num[i];
  }
  return reversedInt === num;
}

console.log(palindromeChecker(-121)) // returns false