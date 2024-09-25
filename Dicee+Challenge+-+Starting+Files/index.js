//First Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDice);

//Second Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

//Changing titles

if(randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML = "Player 1 wins!";

} else if(randomNumber2 > randomNumber1){

    document.querySelector("h1").innerHTML = "Player 2 wins!";

} else {

    document.querySelector("h1").innerHTML = "Draw!";
}