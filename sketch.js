
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,paperObject,ground	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

  //create objects here
	dustbin = new Dustbin(1200,650);
	paperObject = new Paper(200,450,40);
	ground = new Ground(width/2,670,width,20);
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin.display();
  paperObject.display();
  ground.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}



