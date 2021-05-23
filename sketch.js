const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var gameState="PLAY";
var PLAY=1;
var END=0;
var engine,world;
var tina ,bg, tramp;
var butterflyImg1,butterflyImg2,butterflyImg3,batAnimation,fairyImg;
var butterfly,bat,fairy;

function preload(){
  bg=loadImage("soccer_stage1.png");

  batAnimation = loadAnimation("bat1.png","bat2.png","bat3.png",    
  "bat4.png","bat5.png","bat6.png","bat7.png","bat8.png","bat9.png",
   "bat10.png","bat11.png","bat12.png");

  butterflyImg1 = loadAnimation("1b.png","2b.png","3b.png","4b.png","5b.png",
                              "6b.png","7b.png","8b.png","9b.png","10b.png",
                              "11b.png","12b.png","13b.png","14b.png",
                              "15b.png","16b.png");

  butterflyImg2 = loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png");

  butterflyImg3 = loadAnimation("b0.png","b1.png","b2.png","b3.png","b4.png");

  fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
  
}


function setup() {
  createCanvas(600,1700);
 


  engine = Engine.create();
  world = engine.world;

  tina = new Tina(300,13,200,200);
  tramp= new Tramp(300,1500,500,300);



}

function draw() {
  background(bg);  
 

 // if(gameState=PLAY){
  camera.position.x = 300;
  camera.position.y = tina.y+400;


  if(keyDown(RIGHT_ARROW)){
    
    tina.body.position.x+=2
  }

  
  if(keyDown(LEFT_ARROW)){
    
    tina.body.position.x-=2
  }

  if(tina.body.position.x>600){

    tina.body.position.x=590;
  }
  if(tina.body.position.x<0){

    tina.body.position.x=10;
  }

//}

  Engine.update(engine);

  tina.display();
  tramp.display();
  
  createButterfly();
  createBat();
  createFairy();

  drawSprites();

}

function createButterfly(){
    if(frameCount%80===0){
      butterfly=createSprite(random(20,680),random(20,900),15,15);
      butterfly.velocityX=random(-4,4);
      butterfly.velocityY=random(-4,4);
      var rand =Math.round(random(1,3));
      switch(rand){
        case 1:butterfly.addAnimation("butterfly1",butterflyImg1); 
        butterfly.scale=1;
        break;
        case 2:butterfly.addAnimation("butterfly2",butterflyImg2);
        butterfly.scale=0.5;
        break;
        case 3:butterfly.addAnimation("butterfly3",butterflyImg3); 
        butterfly.scale=0.5;
        break;
        default :break;
      }
      butterfly.lifetime=370;
     // obsGroup.add(obs);
   }
}

function createBat(){
  if(frameCount%200===0){
    bat=createSprite(random(20,680),random(20,900),15,15)
    bat.addAnimation("bat",batAnimation);
    bat.scale=0.7;
    bat.velocityX=random(-4,4);
    bat.velocityY=random(-4,4);
    bat.lifetime=270;
  }  
}

function createFairy(){
  if(frameCount%180===0){
    fairy=createSprite(random(20,680),random(20,900),15,15)
    fairy.addAnimation("fairy",fairyImg);
    fairy.scale=0.1;
    fairy.velocityX=random(-4,4);
    fairy.velocityY=random(-4,4);
    fairy.lifetime=370;
  }  
}
