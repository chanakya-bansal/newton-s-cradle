
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	base=new Base(width/2,10,600,25)

	b1=new Bob (width/2,250)
	b2=new Bob (width/2+60,250)
	b3=new Bob (width/2+120,250)
	b4=new Bob (width/2-60,250)
	b5=new Bob (width/2-120,250)

	r1=new Rope (b1.body,base.body,0,0)
	r2=new Rope (b2.body,base.body,60,0)
	r3=new Rope (b3.body,base.body,120,0)
	r4=new Rope (b4.body,base.body,-60,0)
	r5=new Rope (b5.body,base.body,-120,0)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

	base.display()

	b1.display()
	b2.display()
	b3.display()
	b4.display()
	b5.display()

	r1.display()
	r2.display()
	r3.display()
	r4.display()
	r5.display()
	
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(b3.body,b3.body.position,{x:10,y:0})
	}
	if(keyDown("DOWN_ARROW")){
		Matter.Body.applyForce(b5.body,b5.body.position,{x:-10,y:0})
	}

  drawSprites();
 
}

