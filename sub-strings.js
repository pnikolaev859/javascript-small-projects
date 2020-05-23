const subStrings = (str, dict) => {
  const result = {}
  const arrayOfWords = str.toLowerCase().split(/[.,;:!? ]/)
//  console.log(arrayOfWords)

  for (let word of arrayOfWords) {
    word = word.trim()
    if (dict.includes(word)) {
      if (!result[word]) {
        result[word] = 1
      } else {
        result[word] += 1
      }
    }
  }

  return result
}

const string = 'Hello, World! Hello! Lorem ipsun sun qwerty. Ipsun loten wrey qwerty'
const dictionary = ['qwerty', 'azerty', 'sun', 'hello']

console.log(subStrings(string, dictionary))

module.exports = subStrings

