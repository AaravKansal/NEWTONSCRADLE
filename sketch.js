
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Body = Matter.Body;
const Constraint = Matter.Constraint
var Bob,Bob1,bob2,bob3,bob4;
var roof;
var rope,rope1,rope2,rope3,rope4,rope5; 

function preload()
{
	
}     

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  roof=new Roof(400,100,500,30)
  Bob1 = new bob(100,300)
  rope = new Rope(Bob1.body,roof.body,{x:20,y:20}) 
  Bob = new bob(170,300)
  rope1 = new Rope(Bob.body,roof.body,{x:70,y:20})
  bob2 = new bob(240,300)
  rope2 = new Rope(bob2.body,roof.body,{x:120,y:20})
  bob3 = new bob(310,300)
  rope3 = new Rope(bob3.body,roof.body,{x:170,y:20})
  bob4 = new bob(380,300)
  rope4 = new Rope(bob4.body,roof.body,{x:220,y:20})
  

}


function draw() {
  rectMode(CENTER);
  background(255);

  
roof.display();
Bob1.display();
rope.display();
Bob.display();
rope1.display();
bob2.display();
rope2.display();
bob3.display();
rope3.display();
bob4.display();
rope4.display();
  drawSprites();
 
}



