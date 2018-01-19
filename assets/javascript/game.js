

var wordBank = ['terrier', 'beagle', 'boxer', 'chihuahua', 'dalmatian', 'foxhound', 'labrador'];
	var wins = 0;
	var loss = 0;
	var wrongLetter = [];
	var guessesLeft = 15;
	var underScores = [];
	var userGuesses =[];
	var randWord;
	var winCounter = 0;

	function startGame() {

	 randWord = wordBank[Math.floor(Math.random() * wordBank.length)];

	 
		 for (var i = 0; i < randWord.length; i++ ) {
		 	 	underScores.push(' _ ');
		 	}
		 	document.getElementById('word-blanks').innerHTML = underScores.join(" ");

		 	//reset
		 	wrongLetter = [];
		 	guessesLeft = 15;
		 	winCounter = 0;
		 	document.getElementById('guesses-left').innerHTML = guessesLeft;
		}
		function winlose() {
			if (winCounter === randWord.length) {
				alert("Winner!!");
				wins++;
				underScores = [];
				startGame();
			}
			

			else if
				(guessesLeft === 0) {
					alert("Loser!!");
					loss++;
					underScores = [];
					startGame();
				}
			
		document.getElementById('win-counter').innerHTML = wins;
		document.getElementById('loss-counter').innerHTML = loss;
		}

		
			document.onkeyup = function(event) {
				userGuesses = event.key;
				// to avaoid multiplicity of the letters
				if(wrongLetter.indexOf(userGuesses)> -1) {
					console.log("This is to avoid multiple letters" +wrongLetter.indexOf(userGuesses))

				}	
				else if(randWord.indexOf(userGuesses) > -1) {
					// console.log('yes')
					for(var i = 0; i < randWord.length; i++) {
						if(randWord[i] === userGuesses) {
							underScores[i] = userGuesses;
							console.log(underScores);
							winCounter++;
							winlose();
						}
						document.getElementById('word-blanks').innerHTML = underScores;	
					}
				} else {
					wrongLetter.push(userGuesses);
					guessesLeft--;
					console.log(wrongLetter);
					winlose();
				}
			document.getElementById('guesses-left').innerHTML = guessesLeft;
			document.getElementById('wrong-letter').innerHTML = wrongLetter;
		}

	 
	 startGame();
