//libraries
var readlineSync = require('readline-sync') //using to take input
var chalk = require('chalk') //using to beautify the output

// global variables
var score = 0
const wrong = chalk.hex('#cc3300');
const right = chalk.greenBright;
const quesColor = chalk.bold.hex('#66ff99')
const gameDesc = chalk.hex('#00e699')

//name of people who have high scores
var highScores = [{
  name: 'Debojyoti',
  score: 6
}]

//Contains all the questions and answers
var questions = [{
    question: 'Where do I live ? ',
    answer: 'Raiganj'
  },
  {
    question: 'What I am ? ',
    answer: 'Engineer'
  },
  {
    question: 'What I like to do ? ',
    answer: 'programming'
  },
  {
    question: 'What is my favourite fruit ? ',
    answer: 'Mango'
  },
  {
    question: 'What I like to do most in my leisure ? ',
    answer: 'projects'
  },
  {
    question:'Do I love to cook?y/n'
    answer:'y'
  }
]

//welcome user function....this function runs at the beginning
function welcome() {
  console.log(chalk.bold.hex('#cc0066')('Hello'))
  var userName = readlineSync.question(chalk.hex('#ffcc00')('Who is this ? '))
  console.log('Welcome ' + chalk.hex('#00ccff')(userName) + chalk.hex('#cc6699')(' to DO YOU KNOW Debojyoti'))
  console.log()
}

//this function starts the quiz game
function startGame() {
  console.log(gameDesc("This game is all about how much you know Debojyoti."))
  console.log(gameDesc("Just play it for fun. And enjoy!!!"))
  console.log()
  var startGameQues = readlineSync.question(chalk.hex('#ff1a66')('Do you want to start the game? y/n '))
  if (startGameQues.toLowerCase() == 'y') {
    game()
    showScores()
  } else {
    console.log(chalk.hex('#ffff4d')('Thank You!!'))
    return;
  }
}

//check if the user gets the correct answer and score the user
function play(question, answer) {
  var userAnswer = readlineSync.question(quesColor(question))

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(right('Right!'))
    score = score + 1
  } else {
    console.log(wrong('Wrong!'))
  }
  console.log('Current Score: ', score)
  console.log(chalk.hex('#b300b3')('--------------------------'))
}

//iterate through the questions
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

// this function show the score of the user
function showScores() {
  console.log(chalk.hex('#bbff33')('YAY,You scored: '), score)
  console.log(chalk.hex('#ff80bf')("Check out the high scores, if you should be there ping me and I'll update it"))

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
startGame();