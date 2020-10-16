const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var bobDiameter = 50;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	roofObject = new roof(400, 50, 300, 20)
	//Create the Bodies Here.
	bobObject1 = new bob(100, 400, bobDiameter)
	bobObject2 = new bob(150, 400, bobDiameter)
	bobObject3 = new bob(200, 400, bobDiameter)
	bobObject4 = new bob(250, 400, bobDiameter)
	bobObject5 = new bob(300, 400, bobDiameter)
	
	
	rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3 = new rope(bobObject3.body,roofObject.body,0, 0)
	rope4 = new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5 = new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50});

	}
}
