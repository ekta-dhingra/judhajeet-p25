
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// function preload()
// {
	
// }
var paper;
var ground;
var dust1,dust2,dust3;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	//Engine.run(engine);
	paper = new Paper(100,500,30)
	ground = new Ground(100,650,800,20)
	dust1 = new Dustbin(500,610,20,65)
	dust2 = new Dustbin(680,610,20,65)
	dust3 = new Dustbin(590,650,200,20)
}


function draw() {
  
  background(0);
  Engine.update(engine); 
  
  paper.display()
  ground.display()
  dust1.display()
  dust2.display()
  dust3.display()
 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
	}
}



