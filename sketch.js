
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, binWall1, binWall2, binBase, paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,650,800,20);
	binWall1= new Dustbin(600,500,20,100);
	binWall2= new Dustbin(700,500,20,100);
	binBase= new Dustbin(650,650,100,20);
	paper= new Paper(300,300);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  binWall1.display();
  binWall2.display();
  binBase.display();
  paper.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


