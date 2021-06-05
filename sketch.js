var bg, enemy1,enemy2,boss,spacewar ;
var enemyImage1, enemyImage2, bossImage,  MaincraftImage,
backgroundImage;
var laser, laserImg;
var enemyGroup1,enemyGroup2,enemyGroup3;
var laserGroup;
var spaceSound,exploSound;
var life = 3;
var score = 0;
var gameState = "START";




function preload(){
  
  backgroundImage = loadImage("SpaceWar.jpg");
  enemyImage1 = loadImage("EnemySpaceCraft1.png");
  enemyImage2 = loadImage("EnemySpaceCraft2.png");
  bossImage = loadImage("Boss.png");
  MaincraftImage= loadImage("MainCraft.png");
  laserImg = loadImage("missile1.png")

  spaceSound = loadSound("SpaceTheme.mp3");
  exploSound = loadSound("explosionSound.wav");
  
  
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //creating background
  bg = createSprite(0,0,980,400);
  bg.addImage(backgroundImage);
  bg.scale = 2.5;
  
  // creating bow to shoot arrow
  Maincraft = createSprite(width/2 ,height/2+200,20,50);
  Maincraft.addImage( MaincraftImage); 
  Maincraft.scale = 0.1;

  enemyGroup1 = new Group();
  enemyGroup2 = new Group();
  enemyGroup3 = new Group();
  laserGroup = new Group();

  
  
    
}

function draw() {
 background(0);

 if(gameState === "START"){
   textSize(14);
   stroke("white");
   strokeWeight("black");
 text("Welcome To SpaceBattle",150,30);
 text("Instructions : ",200,50);
 text("1.You can move the SpaceCraft by Right And Left Arrow Key",150,70);
 text("2.You can shoot missiles by pressing SpaceBar and knock down enemyCrafts",150,90);
 text("3.You have 3 lives If you lose all the lives then game will be over",150,110);
 text("4.ou get scores By shooting down the enemy spaceCrafts",150,130);
 
 if(keyDown("space")){

  gameState = "PLAY"

 }
 }

 if(gameState === "PLAY"){

 //spaceSound.play();

  // moving ground
    bg.velocityY = -3 

    if (bg.y < 0){
      bg.y = bg.height/2;
   }
  
  
   
  //creating continous enemies
  //var select_craft = Math.round(random(1,3));
  
  if (World.frameCount % 100 == 0) {
      enemy1();
    } if (World.frameCount % 300 === 0 ) {
      enemy2();
    } if (World.frameCount % 400 === 0) {
      enemy3();
    } 
  

  if(enemyGroup1.isTouching(laserGroup)){
    enemyGroup1.destroyEach();
    laserGroup.destroyEach();
    score = score+1;
  }

  if(enemyGroup2.isTouching(laserGroup)){
    enemyGroup2.destroyEach();
    laserGroup.destroyEach();
    score = score+2;
  }

  if(enemyGroup3.isTouching(laserGroup)){
    enemyGroup3.destroyEach();
    laserGroup.destroyEach();
    score = score+3;
  }

  if(enemyGroup1.isTouching(Maincraft)){
    enemyGroup1.destroyEach();
    life = life-1;
  }

  if(enemyGroup2.isTouching(Maincraft)){
    enemyGroup2.destroyEach();
    life = life-1;
  }

  if(enemyGroup3.isTouching(Maincraft)){
    enemyGroup3.destroyEach();
    life = life-1;
  }

  
  if(keyDown(RIGHT_ARROW)){
    Maincraft.x = Maincraft.x +3;

  }

  if(keyDown(LEFT_ARROW)){
    Maincraft.x = Maincraft.x -3;
  }

  if(keyDown("space")){
     var cLaser = createLaser();
     cLaser.x = Maincraft.x;  
    
   }

   
   

    
  drawSprites();

  textSize(20);
   stroke("red");
   strokeWeight("white");
  text("score = "+score,30,50);

  textSize(20);
  stroke("white");
  strokeWeight("black");
  text("lives "+life,270,45);
 }
 if(life === 0){
   gameState = "END";
   
 }
 if(gameState === "END"){
   textSize(40);
   stroke("white");
   text("Game Over",width/2,height/2)
 }
}



function enemy1() {
  var ene1 = createSprite(width+20,height-450,40, 10);
  ene1.x = Math.round(random(300, 1000));
  ene1.addImage(enemyImage1);
  ene1.velocityY = 3;
  ene1.lifetime = 150;
  ene1.scale = 0.1;
  enemyGroup1.add(ene1);
}

function enemy2() {
  var ene2 = createSprite(width+20,height-450, 10, 10);
  ene2.x = Math.round(random(40, 370));
  ene2.addImage(enemyImage2);
  ene2.velocityY = 3;
  ene2.lifetime = 150;
  ene2.scale = 0.1;
  enemyGroup2.add(ene2);
}

function enemy3() {
  var ene3 = createSprite(width+20,height-450, 10, 10);
  ene3.x = Math.round(random(60, 370))
  ene3.addImage(bossImage);
  ene3.velocityY= 3;
  ene3.lifetime = 150;
  ene3.scale = 0.1;
  enemyGroup3.add(ene3);
}

function createLaser(){

  laser = createSprite(Maincraft.x,Maincraft.y,10,10);
  laser.addImage(laserImg);
  laser.scale = 0.1;
  laser.lifetime = 150;

  laser.velocityY = -2;
  laserGroup.add(laser);
  return laser;

  

}

