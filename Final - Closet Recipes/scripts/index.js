$(document).ready(function()
{
	console.log('loaded');
	$('#playGame').on('click', playGame);
});

function playGame(event){
	
	var userChoice = $('#choice').val();
	
	var userChoice2 = $('#choice2').val();

	var options = ['whitetop', 'blacktop', 'coloredtop', 'bluejeans', 'blackpants', 'white pants']

	//var cpuChoice = options[Math.floor(Math.random()*options.length)];

	display('');

	if (userChoice === userChoice2){
		display('Invalid Pairings');
	}

	else if (userChoice === 'whitetop' && userChoice2 === 'bluejeans') {
		display('./images/goldaccess.jpg');
}

else if (userChoice === 'blacktop' && userChoice2 === 'bluejeans') {
		display('../images/silveraccess.jpg');
}

else if (userChoice === 'coloredtop' && userChoice2 === 'bluejeans') {
		display('../images/goldaccess.jpg');
}


	else if (userChoice === 'whitetop' && userChoice2 === 'blackpants') {
		display('Silver Jewelry, http://www.polyvore.com/cgi/shop?.search_src=nav&query=gold+accessories');
}

else if (userChoice === 'blacktop' && userChoice2 === 'blackpants') {
		display('Gold Jewelry, http://www.polyvore.com/cgi/shop?.search_src=nav&query=gold+accessories');
}

else if (userChoice === 'coloredtop' && userChoice2 === 'blackpants') {
		display('Gold Jewelry, http://www.polyvore.com/cgi/shop?.search_src=nav&query=gold+accessories');
}


else if (userChoice === 'whitetop' && userChoice2 === 'whitepants') {
		display('Silver Jewelry, http://www.polyvore.com/cgi/shop?.search_src=nav&query=gold+accessories');
}

else if (userChoice === 'blacktop' && userChoice2 === 'whitepants') {
		display('Gold Jewelry, http://www.polyvore.com/cgi/shop?.search_src=nav&query=gold+accessories');
}

else if (userChoice === 'coloredtop' && userChoice2 === 'whitepants') {
		display('Gold Jewelry, http://www.polyvore.com/cgi/shop?.search_src=nav&query=gold+accessories');
}

else{
	display('Try Again');
}

	}


function display(textToDisplay){
	$('#results').html(textToDisplay);

	var gold = $('<img>');
	gold.attr('src', textToDisplay);
	gold.appendTo('#results');
}




//Pseudo Code
/*

Ask for a choice of Rock Paper Scissors from User
Generate Random Computer Value of Rock, Paper, Scissors
Compare Two Values

If Rock and Paper -> Paper Wins
If Rock and Scissors -> Rock Wins
If Scissors and Paper -> Scissors Wins
If Both are Same --> Tie

Display Winner, Loser or Tie

*/

