let firstCard;
let secondCard;
let sum;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

firstCard = 7; //Math.floor(Math.random() * 12 + 2);
secondCard = 8; //Math.floor(Math.random() * 12 + 2);
thirdCard = 9;
let cards = [firstCard, secondCard];
sum = firstCard + secondCard;
console.log(firstCard);
console.log(secondCard);
console.log(sum);

function startGame() {
  renderGame();
}

function addingTwoNumbers() {
  let a = 1;
  let b = 2;
  let c = a + b;
  console.log(c);
}

function renderGame() {
  if (sum === 21) {
    message = "Wohoo..! you've got black jack🥳";
    hasBlackjack = true;
  } else if (sum < 21) {
    message = "Do u want to draw a new card.. ? 🤨";
  } else {
    message = "You're logging out of the game";
    isAlive = false;
  }
  messageEl.innerText = message;
  cardsEl.innerHTML = "Cards : " + card[0] + "   " + card[1];
  sumEl.innerHTML = "Sum : " + sum;
  console.log(message);
}

function newCard() {
  console.log("Drawing a new card from desk");
  let card = 9;
  sum += card;
  cards.push(card);
  renderGame();
}

// var age = window.prompt("Enter your age: ");
// alert("Your name is " + age);

// if (age < 100) {
//     console.log("not eligible");
// } else if (age == 100) {
//     console.log("here is your birthday card from king..!");
// } else {
//     console.log("not eligible .. you've already gotten one!");
// }
