var tower, towerImage
var door, doorImage
var doorsGroup
var climber, climberImage, climberGroup
var invisibleblockGroup
var ghost
var gameover,gameoverImage
var invisible

function preload(){
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png");
  ghostImage = loadImage("ghost-jumping.png");
  gameoverImage = loadImage("gameover.jpeg");
}

function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  
  ghost = createSprite(100,100);
  ghost.addImage(ghostImage);
  ghost.scale = 0.4;
  ghost.velocityY = 1;
  
  invisible = createSprite(300,600,800,10);
  invisible.visible = true;
  
  
  
  doorsGroup = new Group();
  climberGroup = new Group();
  invisibleblockGroup = new Group();
}

function draw(){
  background(0);
  tower.velocityY = 1;
  if(tower.y>400){
    tower.y = 300;
  }
  ghost.velocityY = ghost.velocityY + 0.9
  
  if (keyDown("space") && ghost.y>=10) {
      ghost.velocityY = -4;
  }
  
  if(ghost.isTouching(invisible)){
    text("GAME OVER", 300,300);
    text.visible = true;
  }
 ghost.x = mouseX;
  ghost.collide(invisible);
 
ghost.depth = ghost.depth+1;
  
  ghost.collide(invisibleblockGroup);
  console.log(ghost.x)
  Spawndoors();
  
  drawSprites();
}


function Spawndoors(){
 if(frameCount%240 ==0){
   door = createSprite(200,-50);
   door.addImage(doorImage);
   door.velocityY = 1;
   door.x = Math.round(random(120,400));
   climber = createSprite(200,10);  
   climber.velocityY = 1;
   climber.addImage(climberImage);
   climber.x = door.x;
   invisibleblock = createSprite(200,15);
   invisibleblock.width = climber.width;
   invisibleblock.height = 2;
   invisibleblock.velocityY = 1;
   invisibleblock.x = door.x;
   invisibleblock.visible = false;
   
   doorsGroup.add(door);
   climberGroup.add(climber);
   invisibleblockGroup.add(invisibleblock);
   
 }
}