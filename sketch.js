

const Body = Matter.Body;
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var mango;
var bg_img;

var button,knife;
var boy;



function preload(){
bg_img = loadImage("bg.webp")
knife = loadImage("knife.png")
mango = loadImage('mango.png')

}

function setup() {
  createCanvas(800,500);
 
  engine = Engine.create();
  world = engine.world;
mango=Bodies.circle(40,40,20)
World.add(world,mango)
}


function draw() 
{
  background(bg_img);
  Engine.update(engine);
  ellipse(mango.position.x,mango.position.y,20)
  image(mango,40,40,20,20)
}

=