function setup() {
  createCanvas(800,400);
  fixedsprite=createSprite(200,200,40,40);
  movingsprite=createSprite(200,200,40,40);
sprite1=createSprite(100,100,40,40);
sprite2=createSprite(100,400,40,40);


fixedsprite.shapeColor="red";
movingsprite.shapeColor="blue"
sprite1.velocityY=5;
sprite2.velocityY=-5;
sprite1.shapeColor="pink";
sprite2.shapeColor="green";

}

function draw() {
  background(255,255,255); 
  
  movingsprite.x=World.mouseX;
  movingsprite.y=World.mouseY;
  
  movingsprite.shapeColor="black";

  if(isTouching(movingsprite, fixedsprite)){
  movingsprite.shapeColor="black";
  fixedsprite.shapeColor="black";
 }
 else{
  movingsprite.shapeColor="purple";
  fixedsprite.shapeColor="purple";
 }

bounceoff(sprite1,sprite2)

  drawSprites();
}
