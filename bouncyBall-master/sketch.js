const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pig;
var block;
var bird;
var pig2;
var block1;
var block2
var block3
var block4
var block5
var ground
var rectangle1
var rectangle2
var rectangle3
var rectangle4
var backgroundImage
function preload()
{
    backgroundImage = loadImage("Background4.png")
}
function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    pig = new Pig(800,250,50,50)
    pig2 = new Pig(800,370,50,50)
    block1 = new Block(800,150,75,75)
    block2 = new Block(925,360,75,75)
    block3 = new Block(925,250,75,75)
    block4 = new Block(675,250,75,75)
    block5 = new Block(675,360,75,75)
    bird = new Bird(100,150,50,50)
    ground = new Ground(800,400,10000,10)
    rectangle1 = new Rect(800,200,300,15)
    rectangle2= new Rect(800,300,300,15)
    rectangle3 = new Rect(900,140,15,100)
    rectangle4 = new Rect(700,140,15,100)
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    drawSprites()
    pig.display()   
    pig2.display()
    block1.display()
    block5.display()
    block4.display()
    block2.display()
    block3.display()
    bird.display()
    ground.display()
    rectangle1.display()
    rectangle2.display()
    rectangle3.display()
    rectangle4.display()
    if(keyDown("space"))
    {
   bird.velocityX = 1;
    }
}

