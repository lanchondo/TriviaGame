$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h2>' + this.time + ' seconds remaining</h2>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h2>' + countdownTimer.time + ' seconds remaining</h2>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
//The following will be the list of questions asked//
var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Where does Jess dad live',
	possibleAnswers : ['A. California',
				 'B. Alaska',
				 'C. Michigan',
				 'D. Maine'],
	flags : [true, false, false, false],
	answer : 'A. California'
};

var q2 = {
	question: 'How does Jess get a black eye before going to Friday night dinner with Richard and Emily?',
	possibleAnswers: ['A. He was on a ladder doing work for Luke and fell.',
				 'B. He tripped while running away from Miss Patty.',
				 'C. A swan attacked him',
				 'D. He got in a fight with Dean'],
	flags : [false, false, true, false],
	answer : 'C. A swan attacked him'
};

var q3 = {
	question : 'After Lulu is cast in the town play, what does Kirk yell when he runs into Luke\'s diner?',
	possibleAnswers : ['A. My girlfriend\'s a virgin!',
				 'B. My girlfriend\'s the prostitute!',
				 'C. My girlfriend\'s an ass',
				 'D. My girlfriend\'s the whore!'],
	flags : [false, false, false, true],
	answer : 'D. My girlfriend\'s the whore!'
};

var q4 = {
	question : 'When Rory gets home from the LADB event with Logan, what is waiting for her?',
	possibleAnswers : ['A. A gorilla mask, champagne, and her camera',
				 'B. A gorilla mask, her diary and a note',
				 'C. A gorilla mask, an umbrella, and champagne',
				 'D. A gorilla mask, champagne, and her notebook'],
	flags : [true, false, false, false],
	answer : 'A. A gorilla mask, champagne, and her camera'
};

var q5 = {
	question : 'In one episode, Lane does something incredibly embarrassing to Rich Bloomingfeld. What is it?',
	possibleAnswers : ['A. Took his oboe and ran away',
				 'B. Touched his hair',
				 'C. Tickled him',
				 'D. Kissed him'],
	flags : [false, true, false, false],
	answer : 'B. Touched his hair'
};

var q6 = {
	question : 'When Jamie comes to visit Paris, he refuses to let go of her hand, saying she\'d run away. How many seconds does she say it would take her?',
	possibleAnswers : ['A. 2',
				 'B. 3.2',
				 'C. 5.7',
				 'D. None'],
	flags : [true, false, false, false],
	answer : 'A. 2'
};

var q7 = {
	question : 'What is the name of Lane\'s band?',
	possibleAnswers : ['A. Hep Alien',
				 'B. Hip Alien',
				 'C. Hep Cat',
				 'D. Hip Cat'],
	flags : [true, false, false, false],
	answer : 'A. Hep Alien'
};

var q8 = {
	question : 'Which character\'s first line in the show is "Please? Please please please?"',
	possibleAnswers : ['A. Lorelai',
				 'B. Sookie',
				 'C. Rory',
				 'D. Michelle'],
	flags : [true, false, false, false],
	answer : 'A. Lorelai'
};

var q9 = {
	question : 'What does Lorelai wear to drop off Rory on her first day at Chilton?',
	possibleAnswers : ['A. A velour tracksuit',
				 'B. The dye and cowboy boots',
				 'C. An evening gown',
				 'D. A silk kimono'],
	flags : [false, true, false, false],
	answer : 'B. The dye and cowboy boots'
};

var q10 = {
	question : 'What band does Rory go see with her mom, Sookie, Paris, Louise and Madeline?',
	possibleAnswers : ['A. The Cardigans',
				  'B. The Bangles',
				  'C. The Cranberries',
				  'D. The B-52s'],
	flags : [false, true, false, false],
	answer : 'B. The Bangles'
}
//Question Array and Possible Answers
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}


//Set up a timer that will allow you to answer the question after you click the start button
function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {


	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("That's Right!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Wrong!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});
});
