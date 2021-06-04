
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;

function preload(){
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/5,300,20);

	bob1 = new Bob(width/2,height/1.36);
	bob2 = new Bob((width/2)-50,height/1.59);
	bob3 = new Bob((width/2)-100,height/2.01);
	bob4 = new Bob((width/2)+50,height/1.59);
	bob5 = new Bob((width/2)+100,height/2.01);

	string1 = new String(bob1.body,roof.body,0*2.2,0);
	string2 = new String(bob2.body,roof.body,-25*2.2,0);
	string3 = new String(bob3.body,roof.body,-50*2.2,0);
	string4 = new String(bob4.body,roof.body,25*2.2,0);
	string5 = new String(bob5.body,roof.body,50*2.2,0);

	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);
  rectMode(CENTER);
  background("gray");
  
  drawSprites();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(bob3.body,bob3.body.position,{x:-198,y:197});
	}
}