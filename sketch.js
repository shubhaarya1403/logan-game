var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;



var zombieGroup;



function preload(){
  
  
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite

}

function draw() {
  background(0); 

  

drawSprites();
}