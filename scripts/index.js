//Pseudo Code
/*

Generate ideas for accessories to match users outfit; 
User enters a combination and the computer provides 
ideas of apparell to match.

*/

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



	if (userChoice === userChoice2){
		display('Invalid Pairings');
	}

	else if (userChoice === 'whitetop' && userChoice2 === 'bluejeans') {
		display('images/2teal-access.jpg');
}

else if (userChoice === 'blacktop' && userChoice2 === 'bluejeans') {
		display('images/2red-access.jpg');
}

else if (userChoice === 'coloredtop' && userChoice2 === 'bluejeans') {
		display('images/2silver-accessories.jpg');
}


	else if (userChoice === 'whitetop' && userChoice2 === 'blackpants') {
		display('images/2blue-access.jpg');
}

else if (userChoice === 'blacktop' && userChoice2 === 'blackpants') {
		display('images/2blackgold-access.jpg');
}

else if (userChoice === 'coloredtop' && userChoice2 === 'blackpants') {
		display('images/2silver-accessories.jpg');
}


else if (userChoice === 'whitetop' && userChoice2 === 'whitepants') {
		display('images/2teal-access.jpg');
}

else if (userChoice === 'blacktop' && userChoice2 === 'whitepants') {
		display('images/2red-access.jpg');
}

else if (userChoice === 'coloredtop' && userChoice2 === 'whitepants') {
		display('images/2blackgold-access.jpg');
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






