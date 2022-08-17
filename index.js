let firstCard;
let secondCard;
let sum;
let hasBlackjack = false;
let isAlive = true;
let message = "";

firstCard = 22; //Math.floor(Math.random() * 12 + 2);
secondCard = 0; //Math.floor(Math.random() * 12 + 2);
sum = firstCard + secondCard;
console.log(firstCard);
console.log(secondCard);
console.log(sum);

if (sum === 21) {
    console.log("Wohoo..! you've got black jack🥳");
    hasBlackjack = true;
} else if (sum < 21) {
    console.log("Do u want to draw a new card..? 🤨");
} else {
    message = "You're logging out of the game";
    console.log(message);
    isAlive = false;
}

console.log(hasBlackjack);
console.log(isAlive);
console.log(message);

// var age = window.prompt("Enter your age: ");
// alert("Your name is " + age);

// if (age < 100) {
//     console.log("not eligible");
// } else if (age == 100) {
//     console.log("here is your birthday card from king..!");
// } else {
//     console.log("not eligible .. you've already gotten one!");
// }