const button = document.getElementById("checkword");
const result = document.getElementById("result")

function wordcheck() {
    let word = document.getElementById("word").value.toLowerCase();
    let reverseword = word.split("").reverse().join("");
    if (word == reverseword) {
        result.textContent = "The word is a palindrome!"
    } else {
        result.textContent = "The word is not a palindrome."
    }
}

function reload() {
    document.getElementById("word").value = "";
}

document.addEventListener("load", reload());