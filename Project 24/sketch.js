const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball,bin1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(150,450,20);
	bin1 = new dustbin(1000,450);
	ground = new Ground(600,height,1200,20);

	var render = Render.create({
		element: document.body,
		engine: engine, 
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
		
	
	});

	Engine.run(engine);
  Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  bin1.display();
  ground.display();
 
}

function keyPressed()
{
if (keyCode === UP_ARROW)
{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
}
}
