
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,object1,object2,object3,object4,object5,object6;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object=Bodies.rectangle(200,10,10,30);
  World.add(world,object);
  console.log(object);
  object1=Bodies.rectangle(300,10,10,30);
  World.add(world,object1);
  console.log(object1);
  object2=Bodies.circle(400,400,110);
  World.add(world,object2);
  console.log(object2);
  object3=Bodies.rectangle(200,10,10,30);
  World.add(world,object3);
  console.log(object3);
  object4=Bodies.rectangle(300,10,10,30);
  World.add(world,object4);
  console.log(object4);
  object5=Bodies.circle(400,400,110);
  World.add(world,object5);
  console.log(object5);
}
function draw()
{
  Engine.update(engine);
  background(4);
  rectMode(CENTER);
  fill("purple");
    rect(object.position.x,object.position.y,50,50);
    fill("blue");
    rect(object1.position.x,object.position.y,50,50);
    fill("red");
    circle(object2.position.x,object.position.y,100,100);
    fill("pink");
    rect(object.position.x,object.position.y,40,40);
    fill("lightblue");
    rect(object1.position.x,object.position.y,40,40);
    fill("orange");
    circle(object2.position.x,object.position.y,40,40);
  
}
