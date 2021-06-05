var Bg,Bg1;
var MainCraft,MainCraftImg;
var EnemyCraft1,EnemyCraft1Img;
var EnemyCraft2,EnemyCraft2Img;
var BossCraft,BossCraftImg;




function preload(){

    Bg = loadImage("SpaceWar.jpg");

    MainCraftImg = loadImage("MainCraft.png");
    EnemyCraft1Img = loadImage("EnemySpaceCraft1.png");
    EnemyCraft2Img = loadImage("EnemySpaceCraft2.png");
    BossCraftImg = loadImage("Boss.png");

}

function setup(){
    createCanvas(1400,1400);

MainCraft = createSprite(700,580,50,50);
MainCraft.addImage(MainCraftImg);
MainCraft.scale = 0.2;


//Bg1 = createSprite(0,0,10000,10000);
//Bg1.addImage(Bg)



}



function draw(){
    background(Bg);

enemy1();
enemy2();
boss();

drawSprites();





}
function enemy1(){

EnemyCraft1 = createSprite(200,300,50,50);
EnemyCraft1.addImage(EnemyCraft1Img);
EnemyCraft1.scale = 0.1;

 EnemyCraft1.velocityY = 2;

}

function enemy2(){

EnemyCraft2 = createSprite(1100,300,50,50);
EnemyCraft2.addImage(EnemyCraft2Img);
EnemyCraft2.scale = 0.15;

EnemyCraft2.velocityY = 2;

}

function boss(){

BossCraft = createSprite(700,100,50,50)
BossCraft.addImage(BossCraftImg);
BossCraft.scale = 0.4;

 BossCraft.velocityY = 1;

}