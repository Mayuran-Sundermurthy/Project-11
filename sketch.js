var runner, runner_animation, ground, ground_animation, inviswall1, inviswall2, edges; 

function preload(){
  //pre-load images
  runner_animation = loadAnimation("Runner-1.png", "Runner-2.png");
  ground_animation = loadImage("path.png");
}

function setup(){
  createCanvas(300,600);
  
  
  ground = createSprite(150,300);
  ground.addAnimation("road", ground_animation);
  ground.velocityY = 10;
  runner = createSprite(150,500);
  runner.addAnimation("running", runner_animation);
  runner.scale = 0.05;
  inviswall1 = createSprite(25,300,10,600);
  inviswall1.visible = true;
  edges = createEdgeSprites();
  //create sprites here
}

function draw() {
  background(0);
  
  
if(ground.y > 505){
  ground.y = 300;
}

runner.collide(edges[3]);
runner.x = World.mouseX;
runner.collide(inviswall1);
drawSprites();
}

  



