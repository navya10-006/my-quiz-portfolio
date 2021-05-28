var canvas;
var gameState = 0;
var contestantCount, database;
var quiz, question, contestant;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz;
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  gameState=0;
  if(contestantCount === 4){
    gameState = 1;
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  
}
