
/*
FUNCTION selectButton
	let button EQUAL get element button
	ADD click event listener to button
*/

function playGame (event) {
	console.log(event.target.id)
	// https://www.w3schools.com/jsref/event_target.asp
	let button = event.target.id
	if (button) {
		document.getElementById(event.target.id).innerHTML = "<p>" + mark[player] + "</p>";
		changePlayer();
		// backgroundColor();
		// pushValue()	
	}	
}	

// function backgroundColor(){
// 	let info = document.querySelector('p')
	
// 	if (info.innerHTML.includes('X')) {
// 		info.style.backgroundColor = 'pink'
// 	} else {
// 		info.style.backgroundColor = 'white'
// 	}
// }



document.addEventListener('click', playGame)

let mark = ["X", "O"]
let player = 0

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
	let value = [0,1,2,3,4,5,6,7,8]

	for (let i = 0; i < value.length; i++) {
		if (player == 0) {
			player = 1
			display.textContent = display_player1;
			let score = pushValue()
			player1Score.push(score)
			console.log(player1Score)
			// https://www.w3schools.com/jsref/prop_node_textcontent.asp
			// console.log(player)
			// console.log(display_player1)
		} else {
			player = 0
			display.textContent = display_player2;
			player2Score.push()
			console.log(player2Score)
			// console.log(display_player2)
			// console.log(player)
		}
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


/*
LOOP through game until player1 gets threeInRow
or until player2 gets threeInRow
*/
/*
threeInRow
	EQUAL to player1 clicked button1 button2 button3
	EQUAL to player1 clicked button4 button5 button6
	EQUAL to player1 clicked button7 button8 button9

	EQUAL to player1 clicked button1 button4 button7
	EQUAL to player1 clicked button2 button5 button8
	EQUAL to player1 clicked button3 button6 button9

	EQUAL to player1 clicked button1 button5 button 9
	EQUAL to player1 clicked button7 button5 button 3

	EQUAL to player2 clicked button1 button2 button3
	EQUAL to player2 clicked button4 button5 button6
	EQUAL to player2 clicked button7 button8 button9

	EQUAL to player2 clicked button1 button4 button7
	EQUAL to player2 clicked button2 button5 button8
	EQUAL to player2 clicked button3 button6 button9

	EQUAL to player2 clicked button1 button5 button 9
	EQUAL to player2 clicked button7 button5 button 3
*/

let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let button5 = document.getElementById('button5')
let button6 = document.getElementById('button6')
let button7 = document.getElementById('button7')
let button8 = document.getElementById('button8')
let button9 = document.getElementById('button9')


// function checkWinner () {
// 	if (button1.childNode.innerHTML.includes === mark[0] && button2.childNode.innerHTML.includes === mark[0] && button3.childNode.innerHTML.includes === mark[0]) {
// 		alert("Player 1 Wins!")
// 	}
// }

let player1Score = []
let player2Score = []
let value = [0,1,2,3,4,5,6,7,8]


// function ID(values) {
// 	this.values = values;
// }

function pushValue (score) {
	for (let i = 0; i < value.length; i++) {
		score = value[i]
	}
	return score;
}	

let wins = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
]

function checkWinner(){
  	for(var i=0; i<wins.length; i++){
  		if (player1Score === wins[i]) {
  			alert("player 1 wins")
  			
  		} else {
  			alert("player 2 wins")
  			player2Score = []
  		}
  	}
}



