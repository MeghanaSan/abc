var PLAY = 1;
var END  = 0;
var gameState = PLAY;

var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var gameOver, restart
var obstaclesGroup 

function preload(){
 bgImg = loadImage("./assets/path3.png");
 balloonImg = loadAnimation("./assets/balloon1.png","./assets/balloon2.png","./assets/balloon3.png" );
 restartImg = loadImage("./assets/restart.png");
 gameOverImg  = loadImage("./assets/gameOver.png");
 building1 = loadImage("./assets/obsBottom1.png");
 light = loadImage("./assets/obsBottom2.png");
 building2 = loadImage("./assets/obsBottom3.png");
 blue = loadImage("./assets/obsTop1.png");
 bird = loadImage("./assets/obsTop2.png");
}

function setup(){

createCanvas(windowWidth, windowHeight);
bg = createSprite(800,1000)
bg.addImage(bgImg);
bg.scale = 2.9;
bg.rotation = 90;
bg.velocityX=-5;

balloon = createSprite(100,150);
balloon.addAnimation("balloonImg", balloonImg);
balloon.scale = 0.37;
console.log(bg.width);
balloon.setCollider("circle",0,0,300)
balloon.velocityY=3;

restart = createSprite(1850,50);
restart.addImage(restartImg);

gameOver = createSprite(900,300);
gameOver.addImage(gameOverImg);
gameOver.visible=false;



obstacleGroup = new Group();
obstacleGroup2 = new Group();
}

function draw() {
  background("lightblue");
   

    if(gameState===PLAY){
      bg.velocityX=-4;
      gameOver.visible=false;
      spawnObstacles();
      spawnObstacles2();
      if (bg.x < -3100){
        bg.x = bg.width/2;
      }

      // balloon.velocityY=balloon.velocityY-0.5;
      if(keyDown==="space"){ 
        balloon.velocityY=-5;
      }
    }
  
 
    


   

    if(gameState===END){
      bg.velocityX = 0;
      gameOver.visible = true;
      
    }
    
    drawSprites();
        
}

function spawnObstacles() {
 
  if (frameCount % 150 === 0) {

  
    var obstacle = createSprite(windowWidth+100,460,40,10);
    obstacle.velocityX = -4
    obstacle.scale = 0.09;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(building1);
              break;
      case 2: obstacle.addImage(light);
              break;
      case 3: obstacle.addImage(building2);
              break;
      default: break;
    }
    obstacle.scale = 0.17;
    obstacle.lifetime = 700;
    
    obstacle.setCollider("rectangle",0,0,obstacle.width/2,obstacle.height/2)
    obstacleGroup.add(obstacle);
    
  }
  
}

function spawnObstacles2() {
 
  if (frameCount % 200 === 0) {

  
    var top = createSprite(windowWidth+100,200,40,10);
    top.velocityX = -4
    top.scale = 0.09;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: top.addImage(blue);
              break;
      case 2: top.addImage(bird);
              break;
      default: break;
    }
    top.scale = 0.13;
    top.lifetime = 700;
    
    top.setCollider("rectangle",0,0,top.width/2,top.height/2)
    obstacleGroup2.add(top);
    
  }
  
}



// function reset(){
//   gameState = PLAY;
//   gameOver.visible = false;
//   restart.visible = false;
//   balloon.visible = true;
  
// }