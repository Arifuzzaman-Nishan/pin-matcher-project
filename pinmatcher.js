function getId(id) {
    return document.getElementById(id);
}

/// all button controls
getId("button-number").addEventListener("click", (event) => {
    const currentNumber = event.target.innerText;

    if (isNaN(currentNumber)) {
        if (currentNumber == 'C') {
            getId("cal-input").value = "";
        }
        else if (currentNumber == '<') {
            let calInput = getId("cal-input").value;

            calInput = calInput.slice(0, calInput.length - 1);

            getId("cal-input").value = calInput;
            // console.log(calInput);
        }

    }
    else {
        getId("cal-input").value += currentNumber;
        getId("cal-input").style.textAlign = "right";
    }


    getId("cal-input").style.color = "salmon";
    getId("cal-input").style.fontSize = "25px";



})

function randomNumberGenerate() {
    let number = parseInt(Math.random() * 10000) + "";
    if (number.length == 4) return number;
    if (number.length < 4) {
        number = randomNumberGenerate();
    }
    return number;
}



getId("generate-pin").addEventListener("click", () => {
    const randomNumber = randomNumberGenerate();
    getId("generate-pin-input").value = randomNumber;
    getId("generate-pin-input").style.textAlign = "center";
    getId("generate-pin-input").style.color = "salmon";
    getId("generate-pin-input").style.fontSize = "25px";

    getId("pin-match").style.display = "none";
    getId("pin-not-match").style.display = "none";
})



getId("submit-btn").addEventListener("click", () => {
    const generatePin = getId("generate-pin-input").value;
    const buttonPin = getId("cal-input").value;

    if (generatePin === buttonPin) {
        getId("pin-match").style.display = "block";
    }
    else {
        getId("pin-not-match").style.display = "block";
    }
})
