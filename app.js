let listRandomNumber = [];
let limitNumber = 10;
let secretNumber = creatRandomNumber();
let attemps = 1;

function showTextOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, "US English Female", {rate: 1.5});
}

function firstMessage() {
    showTextOnScreen("h1", "The Secret Number Game");
    showTextOnScreen("p", "Chose a number between 1 to 10");
}

firstMessage ();

function verifyAttemp() {
    let attemp = document.querySelector ("input").value;

    if (attemp == secretNumber) {
        showTextOnScreen("h1", "YES! You got it.");
        let wordAttemp = attemps > 1 ? "Attemps" : "Attemp";
        let messageAttemps = `You find the secret number with ${attemps} ${wordAttemp}`;
        showTextOnScreen("p", messageAttemps);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (attemp >  secretNumber) {
            showTextOnScreen("h1", "Wrong!");
            showTextOnScreen("p", "the secret number is less, try again.");
        } else {
            if (attemp < secretNumber) {
                showTextOnScreen("h1", "Wrong!");
                showTextOnScreen("p", "the secret number is bigger, try again.");
            }
        }
        attemps++;
        cleanField ();
    }
}

function creatRandomNumber(){
    let numberChoose = parseInt(Math.random () * limitNumber + 1);
    let quantityElementsonthelist = listRandomNumber.length;

    if (quantityElementsonthelist == limitNumber) {
        listRandomNumber = [];
    }

    if (listRandomNumber.includes(numberChoose)) {
        return creatRandomNumber();
    }   else {
        listRandomNumber.push(numberChoose);
        return numberChoose;
    }
}

function cleanField() {
    attemp = document.querySelector("input");
    attemp.value = "";
}

function restartGame() {
    secretNumber= creatRandomNumber();
    attemps = 1;
    cleanField();
    firstMessage();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}