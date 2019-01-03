let mark = ["X", "O"]
let player = 0
let player1 = []
let player2 = []

function playGame (event) {
	console.log(event.target.id)
	// https://www.w3schools.com/jsref/event_target.asp
	let button = event.target.id
	if (button) {
		document.getElementById(event.target.id).innerHTML = "<p class= 'letter'>" + mark[player] + "</p>";
		changePlayer();
	}	

	if (player == 0){
		if (event.target.id === button1) {
			player1.push(1)
		} else if (event.target.id === button2){
			player1.push(2)
		} else if (event.target.id === button3){
			player1.push(3)
		} else if (event.target.id === button4){
			player1.push(4)
		} else if (event.target.id === button5){
			player1.push(5)
		} else if (event.target.id === button6){
			player1.push(6)
		} else if (event.target.id === button7){
			player1.push(7)
		} else if (event.target.id === button8){
			player1.push(8)
		} else{
			player1.push(9)
		}
		console.log(player1)
	} else {
		if (button === button1) {
			player2.push(1)
		} else if (button === button2){
			player2.push(2)
		} else if (button === button3){
			player2.push(3)
		} else if (button === button4){
			player2.push(4)
		} else if (button === button5){
			player2.push(5)
		} else if (button === button6){
			player2.push(6)
		} else if (button === button7){
			player2.push(7)
		} else if (button === button8){
			player2.push(8)
		} else{
			player2.push(9)
		}
		console.log(player2)
	}
}	

document.addEventListener('click', playGame)

// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/js_htmldom_html.asp
// https://www.youtube.com/watch?v=XwPVlXb5thI
// to alternate players must go back and forth
/* 
change between players
	IF player is 0 will mark box with X and change player to 0
		ELSE change player to 1

Change display of whos turn it is
	IF player 0 display Player 1's turn
	IF player 1 display player 2's turn
*/

function changePlayer (event) {
	let display = document.querySelector(".box2")
	let display_player1 = display.textContent = "Player 2's Turn"
	let display_player2 = display.textContent = "Player 1's Turn"

	if (player == 0) {
		player = 1
		display.textContent = display_player1;
	
	} else {
		player = 0
		display.textContent = display_player2;

	}
}	
	

/*
use clear button the clear the board
*/
let body = document.querySelector('body')
let clearButton = document. querySelector('.box1')

function clear () {
	let display = document.querySelector(".box2")
		display.textContent = "Player 1's Turn"
	let button = document.querySelectorAll('.button')
	for (i = 0; i < button.length; i++) {
      	let tic =document.querySelectorAll('.button')
   		 tic[i].innerHTML = ''
   		 player1Score = []
		 player2Score = []
		 player = 0
 	}
}

clearButton.addEventListener('click', clear)



