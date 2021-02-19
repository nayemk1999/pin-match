//Generate Pin Number Button Part
document.getElementById("generatePin").addEventListener("click", function () {
    const getInputPin = document.getElementById("getInputPin").value;
    const getInputNum = Math.floor(Math.random(getInputPin) * 10000);
    if(getInputNum.toString().length == 4){
        document.getElementById("getInputPin").value = getInputNum;
    }
    document.getElementById("pinMatch").style.display = "none";
    document.getElementById("pinNotMatch").style.display = "none";
})

//Typing Input Number
const digitPin = document.getElementById("digit-container");
digitPin.addEventListener("click", function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit == 'C') {
            const typePin = document.getElementById("inputPin");
            typePin.value = "";
        }
    }
    else {
        const typePin = document.getElementById("inputPin");
        typePin.value = typePin.value + digit;
    }
})

// Submit Button Part
document.getElementById("submitBtn").addEventListener("click", function () {
    let generatePin = document.getElementById("getInputPin").value;
    let inputPin = document.getElementById("inputPin").value;
    if (generatePin == inputPin) {
        displayMatchResult("block", "none");
        document.getElementById("inputPin").value = "";
    }
    else {
        displayMatchResult("none", "block");
        let actionLeft = document.getElementById('actionLeft');
        let actionResult = parseFloat(actionLeft.innerText) - 1;
        if(actionResult > 0){
            actionLeft.innerText = actionResult;
        }else{
            actionLeft.innerText = 'Please Try Again!'; 
        }
    }
})

// Pin Verify Part
function displayMatchResult(match, notMatch) {
    document.getElementById("pinMatch").style.display = match;
    document.getElementById("pinNotMatch").style.display = notMatch;
}