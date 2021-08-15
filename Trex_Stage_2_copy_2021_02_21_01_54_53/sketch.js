
var robo1, roboImage
var robo2
var robo3





var edges

var player, beam, beamImage, playerImage

var backgroundImage

function preload(){
  beamImage = loadImage("Beam.png");
  playerImage = loadImage("Player.png");
  backgroundImage = loadImage("bg.png");
  roboImage = loadImage("Robo.png");
  
  
}

function setup() {
  createCanvas(1200, 600);
  
  robo1 = createSprite(500,180,20,50);
  robo2 = createSprite(300,180,20,50);
  robo3 = createSprite(1000,180,20,50);

  player = createSprite(50, 550, 30, 50)
  beam = createSprite(110,562,50,7)

  beam.shapeColor = 0;
  beam.addImage("beam",beamImage);
  beam.scale = 0.2;

  player.addImage("player",playerImage);
  player.scale = 0.4

  robo1.addImage("robo",roboImage);
  robo1.scale = 0.3

  robo2.addImage("robo",roboImage);
  robo2.scale = 0.3

  robo3.addImage("robo",roboImage);
  robo3.scale = 0.3


  
  

  
robo1.velocityX = 5;
robo1.velocityY = -3;

robo2.velocityX =  6;
robo2.velocityY = -10;

robo3.velocityX = 1;
robo3.velocityY = -6;



edges = createEdgeSprites();


  
 
}

function draw() {
  background(backgroundImage);
  
 robo1.bounceOff(edges[0]); 
 robo1.bounceOff(edges[1]);
 robo1.bounceOff(edges[2]);
 robo1.bounceOff(edges[3]);

 robo2.bounceOff(edges[0]); 
 robo2.bounceOff(edges[1]);
 robo2.bounceOff(edges[2]);
 robo2.bounceOff(edges[3]);

 robo3.bounceOff(edges[0]); 
 robo3.bounceOff(edges[1]);
 robo3.bounceOff(edges[2]);
 robo3.bounceOff(edges[3]);

 beam.bounceOff(edges[0]); 
 beam.bounceOff(edges[1]);
 beam.bounceOff(edges[2]);
 beam.bounceOff(edges[3]);
 

 
 if(beam.isTouching(robo1)){
    robo1.visible = false;
    
    
 }

 if(beam.isTouching(robo2)){
  robo2.visible = false;
  
  
}

if(beam.isTouching(robo3)){
  robo3.visible = false;
  
}
 



 
  
  
  

  
  drawSprites();
  keyPressed();
  keyPressed1();
  keyPressed2();
  keyPressed3();
  moreRobots();
  
  
  
}


  



    
    
  


function keyPressed(){
    if(keyCode === 39){
    beam.velocityX = 10;
    beam.velocityY = 0;
    }
}

function keyPressed1(){
    if(keyCode === 37){
    beam.velocityX = -10;
    beam.velocityY =  0;
    }
}

function keyPressed2(){
    if(keyCode === 40){
    beam.velocityY = 10;
    beam.velocityX = 0;
    }
}

function keyPressed3(){
    if(keyCode === 38){
    beam.velocityY = -10;
    beam.velocityX =  0;
    }
}

function moreRobots(){
  if(keyCode === 32){
  robo1.visible = true;
  robo2.visible = true;
  robo3.visible = true;
  beam.velocityX = 0;
  beam.velocityY = 0;
  }  
}

function End() {
 if (robo1.visible = false, robo2.visible = false, robo3.visible = false ) {
  text("Good Job, Press Space to Try Again", 1000,400);
 } 
}
