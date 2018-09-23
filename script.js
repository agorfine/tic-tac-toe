
/*
FUNCTION selectButton
	let button EQUAL get element button
	ADD click event listener to button
*/

function marker (event) {
	console.log(event.target.id)
	let button = event.target.id
	if (button) {
		document.getElementById(event.target.id).innerHTML = "<p>" + mark[players] + "</p>";
		changePlayer();
	}
}

document.addEventListener('click', player)

let mark = ["X", "O"]
let player = 0
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/js_htmldom_html.asp
// https://www.youtube.com/watch?v=XwPVlXb5thI
// to alternate players must go back and forth
// IF players 

function changePlayer () {
	if (player == 0) {
		player = 1
		console.log(player)
	} else {
		players = 0
		console.log(player)
	}
	}	


/*
FUNCTION playGame	
	player 1 turn
		IF player 1 selectButton button 1
			write X in center of box
		IF player 1 selectButton button 2
			write X in center of box
		IF player 1 selectButton button 3
			write X in center of box	
		IF player 1 selectButton button 4
			write X in center of box
		IF player 1 selectButton button 5
			write X in center of box
		IF player 1 selectButton button 6
			write X in center of box
		IF player 1 selectButton button 7
			write X in center of box
		IF player 1 selectButton button 8
			write X in center of box	
		IF player 1 selectButton button 9
			write X in center of box	
	player 2 turn
		IF player 2 selectButton button 1
			write X in center of box
		IF player 2 selectButton button 2
			write X in center of box
		IF player 2 selectButton button 3
			write X in center of box	
		IF player 2 selectButton button 4
			write X in center of box
		IF player 2 selectButton button 5
			write X in center of box
		IF player 2 selectButton button 6
			write X in center of box
		IF player 2 selectButton button 7
			write X in center of box
		IF player 2 selectButton button 8
			write X in center of box	
		IF player 2 selectButton button 9
			write X in center of box
*/
/*
FUNCTION playGame 
	
*/

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


