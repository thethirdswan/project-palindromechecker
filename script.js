const button = document.getElementById("check-btn");
const result = document.getElementById("result")

function wordcheck() {
    let baseword = document.getElementById("text-input").value;
    let pattern = /[^a-zA-Z0-9]+/g;
    if (baseword === "") {
        alert("Please input a value")
    } else {
        let dirty = baseword.toLowerCase().split(" ").join("").split("")
        for (let i = 0; i < dirty.length; i++) {
            if (pattern.test(dirty[i]) == true) {
                dirty.splice(i, 1)
            }
        }
        for (let i = 0; i < dirty.length; i++) {
            if (pattern.test(dirty[i]) == true) {
                dirty.splice(i, 1)
            }
        }
        for (let i = 0; i < dirty.length; i++) {
            if (pattern.test(dirty[i]) == true) {
                dirty.splice(i, 1)
            }
        }
        let joined = dirty.join("")
        let reversed = dirty.reverse().join("")
        console.log(joined)
        console.log(reversed)
        if (joined == reversed) {
            result.textContent = baseword + " is a palindrome!"
        } else {
            result.textContent = baseword + " is not a palindrome."
        }
    }
}

function reload() {
    document.getElementById("text-input").value = "";
}

document.addEventListener("load", reload());