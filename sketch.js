const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bunny;
var bgImg, fruitImg, rabbitImg, btn;

function preload() {
  bgImg = loadImage("background.png");
  fruitImg = loadImage("melon.png");
  rabbitImg = loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  imageMode(CENTER);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  btn = createImg("cut_button.png");
  btn.position(220,30);
  btn.size(40,40);
  btn.mouseClicked(drop);

  bunny = createSprite(250,650,100,100);  
  bunny.addImage(rabbitImg);
  bunny.scale = 0.2;

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);

  image(bgImg, width/2, height/2,500,700);
  rope.show();
  image(fruitImg, fruit.position.x, fruit.position.y,80,80);
  Engine.update(engine);
  ground.show();

  drawSprites();

 
   
}

function drop() {
  rope.break();
  fruit_con.detach();
  fruit_con = null;
}
