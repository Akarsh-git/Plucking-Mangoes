
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;
var ground,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,Boy,Tree,stone;
function preload()
{
Boy =loadImage("boy.png");
Tree=loadImage("tree.png");
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,690,width,20);
	m1=new Mango(1150,200,30);
	m2=new Mango(1000,70,30);
	m3=new Mango(1140,120,30);
	m4=new Mango(1190,210,30);
	m5=new Mango(1000,110,30);
	m6=new Mango(1150,150,30);
	m7=new Mango(1130,170,30);
	m8=new Mango(1200,190,30);
	m9=new Mango(1170,135,30);
	m10=new Mango(1160,105,30);
	stone=new Stone(235,530,30);
	sling=new Slingshot(stone.body,{x:235,y:450})
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  imageMode(CENTER);
  image(Tree,1050,300,500,700)
  image(Boy,300,500,200,300)
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  stone.display();
  sling.Display();
  
 collide(stone,m1);
 collide(stone,m2);
 collide(stone,m3);
 collide(stone,m4);
 collide(stone,m5);
 collide(stone,m6);
 collide(stone,m7);
 collide(stone,m8);
 collide(stone,m9);
 collide(stone,m10);
 
}

function collide(s,m){
	mpos=m.body.position;
	spos=s.body.position;
	var distance=dist(mpos.x,mpos.y,spos.x,spos.y)
	if(distance<= m.R+s.R){
		Matter.Body.setStatic(m.body,false)
	}

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

