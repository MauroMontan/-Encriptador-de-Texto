
const algorithKeys = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
}

const word = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"




function encrypt(word) {
  let letterArr = [...word]
  Object.entries(algorithKeys).forEach(([letterKey, value]) => {
    letterArr = letterArr.map(letter => letter === letterKey ? value : letter)
  })
  return letterArr.join("");
}


function decrypt(word = "") {
  let letters = [...word]

  Object.entries(algorithKeys).forEach(([k, v]) => {
    if (word.includes(v)) {
      letters.forEach(letter => {
        if (letter === k) {
          word = word.replaceAll(v, letter)

        }
      })
    }
  })

  return word;

}

const encripted = encrypt(word)
console.log(encripted)
console.log(decrypt(word))