//Namespacing
const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var groundOptions={
    isStatic: true
  }

  ground=Bodies.rectangle(200,390,400,20,groundOptions);
  World.add(world,ground);
  //console.log(object);
  //console.log(ground.position.x);
  var ballOptions = {
    restitution: 1.0
  }
  ball = Bodies.circle(100,150,30,ballOptions);
  World.add(world,ball);
}

function draw() {
  background(255,255,0);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30,30);
}