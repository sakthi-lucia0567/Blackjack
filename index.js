let firstCard;
let secondCard;
let thirdCard;
let sum;
let hasBlackjack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

firstCard = 22; //Math.floor(Math.random() * 12 + 2);
secondCard = 0; //Math.floor(Math.random() * 12 + 2);
thirdCard = 9;
sum = firstCard + secondCard;
console.log(firstCard);
console.log(secondCard);
console.log(sum);

function startGame() {
	if (sum === 21) {
		message = "Wohoo..! you've got black jack🥳";
		hasBlackjack = true;
	} else if (sum < 21) {
		message = 'Do u want to draw a new card.. ? 🤨';
	} else {
		message = "You're logging out of the game";
		isAlive = false;
	}
	messageEl.innerText = message;
	cardsEl.innerHTML = 'Cards : ' + firstCard + '   ' + secondCard;
	sumEl.innerHTML = 'Sum : ' + sum;
	console.log(message);
}

function newCard() {}

// var age = window.prompt("Enter your age: ");
// alert("Your name is " + age);

// if (age < 100) {
//     console.log("not eligible");
// } else if (age == 100) {
//     console.log("here is your birthday card from king..!");
// } else {
//     console.log("not eligible .. you've already gotten one!");
// }
