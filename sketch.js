var garden,rabbit;
var gardenImg,rabbitImg;
var leaf,greenLeaf;
var apple,grass,appleImg;

var score;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  greenLeaf = loadImage("leaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
 // Moving background
 garden = createSprite(200,200);
 garden.addImage(gardenImg);

//creating boy running
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);
 rabbit.VelocityX = 3;

 apple = createSprite(random(50,350),40,10,10);
 apple.addImage(appleImg);
 apple.scale = 0.1;
 apple.velocityY = 10;
 apple.lifetime = 92;

 leaf = createSprite(random(50,350),40,10,10);
 leaf.addImage(greenLeaf);
 leaf.scale = 0.1;
 leaf.velocityY = 10;
 leaf.lifetime = 92;

 console.log(frameCount);
 console.log(score);
}

function draw() {
  background(0);

  text("Score: "+ score, 300,50);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;

  drawSprites();

  if (rabbit.isTouching(apple)) {
    score = score+1;
    apple.remove();
  }
  
  if (rabbit.isTouching(leaf)) {
    score = score+1;
    leaf.remove();
  }

  var select_apple = Math.round(random(1,2));

if (frameCount % 80 == 0) {
  if(select_apple == 1) {
    createApple();
  }
  else {
    createLeaf();
  }
} 
}


function createApple() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 10;
  apple.lifetime = 92;

}

function createLeaf() {
  
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(greenLeaf);
  leaf.scale = 0.1;
  leaf.velocityY = 10;
  leaf.lifetime = 92;

}

