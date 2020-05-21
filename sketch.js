var bullets, weight, wall, speed, thickness;
var damage;
function setup() {

  createCanvas(1200,400);

  thickness = random(22, 83);

  speed = random(223, 321);

  weight = random(30, 62);

  wall = createSprite(1100, 200, thickness, 200);

  bullet = createSprite(20, 200, 20, 8);
  bullet.velocityX = 20;
  bullet.shapeColor = "grey";

  damage = 0.5 * speed *speed * weight/(thickness *thickness *thickness)
    
}

function draw() {

  bullet.collide(wall);

  background(255,255,255);  
  
  drawSprites();

  if(damage > 10 && isTouching())
    {

           wall.shapeColor="red";

}




  else
  if(damage <= 10 && isTouching()){

           wall.shapeColor = "green";
           
  
  }


}


function isTouching(){

if(bullet.x == wall.x - thickness/2 - 10)
{

  return true;

}
else{
   return false;
}
}