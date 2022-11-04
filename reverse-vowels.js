/**
 * Reverse only the vowels in a string
 */

const reverseVowels = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    for(let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        let temp;
        str[i] = temp;
        temp = str[j + 1]
        return str
      }
    }
  }
}

console.log(reverseVowels('helloijfdea'))