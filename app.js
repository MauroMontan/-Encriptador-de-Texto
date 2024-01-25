
const algorithKeys = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
}

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

const textInput = document.querySelector("#text-input")
const encryptButton = document.querySelector("#encrypt")
const decryptButton = document.querySelector("#decrypt")
const outputContainer = document.querySelector("#output-container")
const placeHolder = document.querySelector(".placeholder")
const contentBox = document.querySelector(".content-box")
const copyBtn = document.querySelector(".copy-btn")

const toggleContentVisibility = () => {

  if (!placeHolder.classList.contains("hidden")) {
    placeHolder.classList.add("hidden")
    contentBox.classList.remove("hidden")
  }
}


encryptButton.addEventListener("click", () => {
  toggleContentVisibility();
  outputContainer.innerHTML = encrypt(textInput.value);

})

decryptButton.addEventListener("click", () => {
  toggleContentVisibility();
  outputContainer.innerHTML = decrypt(textInput.value);

})

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(outputContainer.textContent)
  textInput.value = "";
})
