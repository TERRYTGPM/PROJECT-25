
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var bottomS, leftS, rightS;
var dustbin, dp;

function preload(){
	dp = loadImage("d.png");
}


function setup(){
	createCanvas(800, 700);

	dustbin = createSprite(650, 570, 10, 10);
	dustbin.addImage("lol", dp);
	dustbin.scale = 0.3;
	/*
LOOK AT THE TITLE OF THE PROJECT
LOOK AT THE TITLE OF THE PROJECT
LOOK AT THE TITLE OF THE PROJECT
LOOK AT THE TITLE OF THE PROJECT
LOOK AT THE TITLE OF THE PROJECT
this is some spam cause i was bored
	*/

	bottomS = createSprite(650, 610, 100, 20);
	bottomS.shapeColor = color(200);

	leftS = createSprite(700, 570, 20, 80);
	leftS.shapeColor = color(200);

	rightS = createSprite(600, 570, 20, 80);
	rightS.shapeColor = color(200);

	groundSprite=createSprite(width/2, 620, 800, 10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(50, 90, 50);
	World.add(world, paper1);

	ground = Bodies.rectangle(width/2, 650, 800, 10, {isStatic:true}); 	
	World.add(world, ground);
	
	bottom = Bodies.rectangle(650, 610, 100, 10, {isStatic:true}); 	
	World.add(world, bottom);

	left = Bodies.rectangle(710, 570, 20, 80, {isStatic:true}); 	
	World.add(world, left);

	right = Bodies.rectangle(590, 570, 20, 80, {isStatic:true}); 	
	World.add(world, right);	

  	Engine.run(engine);
}


function draw(){
	rectMode(CENTER);
	background(240);
	force();
	paper1.display();
  	drawSprites();
 
}

function force(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:1, y:-20});
	}
}

