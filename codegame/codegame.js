var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var playing = "true";

function preload() {
  img = loadImage('paw.png');
 }

function setup() {
  createCanvas(1920, 1080);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(70, 100, 200);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  image(img, mouseX, mouseY);
   var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  ellipse(ballx, bally, ballSize, ballSize);
  fill(245, 25, 0);
  
} // end level one



function levelTwo(){
  function preload() {
  img = loadImage('paw.png');
 }

  background(200, 40, 80);
  text("Level 2", width/2, height-20);
   image(img, mouseX, mouseY);
 var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// call game end
   gameState = "L3";
  }
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);

  
} // end level two
