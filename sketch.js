var a,b;
var box1,box2;

var ball;

function setup() {
  createCanvas(600,600);
  
  b = createSprite(300,300,50,100);
  a = createSprite(100,100,100,50);

  box1 = createSprite(200,50,50,50);
  box2 = createSprite(300,50,50,50);

  ball = createSprite(100,300,50,50);

  a.debug = true;
  b.debug = true;

  ball.velocityX = 3;
}

function draw() {
  background("black");
  
  a.x = World.mouseX;
  a.y = World.mouseY;

  //if(touch(a,box2)){
    //box2.shapeColor = "yellow";
    //a.shapeColor = "red";
  //}
  //else{
    //box2.shapeColor = "grey";
    //a.shapeColor = "grey";
  //}

  if(touch(ball,b)){
    bounceOff(ball,b);
  }

  drawSprites();
}
