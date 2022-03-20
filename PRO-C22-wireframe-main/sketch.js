const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundIMG
var towerIMG, tower

function preload() {
backgroundIMG = loadImage("./assets/background.gif")
towerIMg = loadImage("./assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower= Bodies.rectangle(150, 360, 100, 300, options)
 World.add(world, tower);


}

function draw() {
  image(backgroundIMG, 0, 0, 1200, 600)

  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 push()
 imageMode(CENTER)
 image(towerIMG, tower.position.x, tower.position.y, 100, 300)
 pop()
  
   
}
