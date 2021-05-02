var hypnoticBall, database;
var position;
var gameState = 0;
var playerCount;
var form;
var player;
var game;
var allPlayers;
var cars,car1,car2,car3,car4;


function setup(){
  database = firebase.database();
  createCanvas(displayWidth,displayHeight);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}


