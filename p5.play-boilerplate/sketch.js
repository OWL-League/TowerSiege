const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(600,800);
  engine = Engine.create();
  world = engine.world;

  stand1 = new ground(390, 260, 240, 10);

  block1 = new box(330, 235, 30, 40);
  block2 = new box(360, 235, 30, 40);   
  block3 = new box(390, 235, 30, 40);
  block4 = new box(420, 235, 30, 40);
  block5 = new box(450, 235, 30, 40);
  block6 = new box(360, 195, 30, 40);
  block7 = new box(390, 195, 30, 40);
  block8 = new box(420, 195, 30, 40);
  block9 = new box(390, 155, 30, 40);

  polygon1 = new rn(50, 200, 40, 40);
  slingshot1 = new slingshot(polygon1.body, {x:100, y:200});
}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  stand1.display();
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("green")
  block6.display();
  block7.display();
  block8.display();
  fill("pink")
  block9.display();

  polygon1.display();

  slingshot1.display();

} 

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}
