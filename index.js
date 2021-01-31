document.getElementById("generatePin").addEventListener("click", function () {
    const getInputPin = document.getElementById("getInputPin").value;
    const getInputNum = Math.floor(Math.random(getInputPin) * 10000);
    document.getElementById("getInputPin").value = getInputNum;
    document.getElementById("pinMatch").style.display = "none";
    document.getElementById("pinNotMatch").style.display = "none";
})

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

document.getElementById("submitBtn").addEventListener("click", function () {
    let generatePin = document.getElementById("getInputPin").value;
    let inputPin = document.getElementById("inputPin").value;
    if (generatePin == inputPin) {
        displayMatchResult("block", "none");
    }
    else {
        displayMatchResult("none", "block");
    }
    // document.getElementById("inputPin").value = "";
    // document.getElementById("getInputPin").value = "";
})
function displayMatchResult(match, notMatch) {
    document.getElementById("pinMatch").style.display = match;
    document.getElementById("pinNotMatch").style.display = notMatch;
}














// document.getElementById("b7").addEventListener("click", function(){
//     getInput("inputPin", "b7");
// })
// document.getElementById("b8").addEventListener("click", function(){
//     getInput("inputPin", "b8");
// })
// document.getElementById("b9").addEventListener("click", function(){
//     getInput("inputPin", "b9");
// })
// document.getElementById("b4").addEventListener("click", function(){
//     getInput("inputPin", "b4");
// })
// document.getElementById("b5").addEventListener("click", function(){
//     getInput("inputPin", "b5");
// })
// document.getElementById("b6").addEventListener("click", function(){
//     getInput("inputPin", "b6");
// })
// document.getElementById("b1").addEventListener("click", function(){
//     getInput("inputPin", "b1");
// })
// document.getElementById("b2").addEventListener("click", function(){
//     getInput("inputPin", "b2");
// })
// document.getElementById("b3").addEventListener("click", function(){
//     getInput("inputPin", "b3");
// })
// document.getElementById("b0").addEventListener("click", function(){
//     getInput("inputPin", "b0");
// })
// document.getElementById("b<").addEventListener("click", function(){
//     getInput("inputPin", "b<");
// })
// document.getElementById("bc").addEventListener("click", function(){
//     getInput("inputPin", "bc");
// })

// function getInput(inputPin, btnNum){
//   let resultNumber =   document.getElementById(inputPin).value = document.getElementById(inputPin).value + document.getElementById(btnNum).innerText;
//   return resultNumber;
// }