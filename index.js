var readlineSync = require('readline-sync')
var chalk = require('chalk')

var score = 0
const wrong = chalk.hex('#cc3300');
const right = chalk.greenBright;
const quesColor = chalk.bold.hex('#66ff99')
const gameDesc = chalk.hex('#00e699')

var highScores = [{
  name: 'Debojyoti',
  score: 5
}]

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
  }
]

function welcome() {
  console.log(chalk.bold.hex('#cc0066')('Hello'))
  var userName = readlineSync.question(chalk.hex('#ffcc00')('Who is this ? '))
  console.log('Welcome ' + chalk.hex('#00ccff')(userName) + chalk.hex('#cc6699')(' to DO YOU KNOW Debojyoti'))
  console.log()
}

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

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log(chalk.hex('#bbff33')('YAY,You scored: '), score)
  console.log(chalk.hex('#ff80bf')("Check out the high scores, if you should be there ping me and I'll update it"))

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
startGame();
// game();
// showScores();