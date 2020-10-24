var bullet, wall
var thickness, damage, speed, weight

function setup() {
  createCanvas(800,400);
  bullet =  createSprite(200, height/2, 30, 30)
  bullet.shapeColor = "yellow";
  wall = createSprite(760, height/2, 2134, height)
  thickness = random(22, 83)
  wall.width = thickness
  wall.x = width - thickness/2
  speed = random(231, 321)
  weight = random(20, 52)
  bullet.velocityX = speed/15;
}

function draw() {
  background(0);  
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    damage = 0.5*weight*speed*speed/thickness*thickness*thickness
    if (damage <= 10) {
      wall.shapeColor=color(255, 50, 0)
    } else {
      wall.shapeColor=color(0, 255, 70)
    }
  }
  drawSprites();
}

