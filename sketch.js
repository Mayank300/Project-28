const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
 
var backgroundImg,platform;
var stone, slingShot;
var tree, boy;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
     
    stone = new Stone(200,470);
    
    slingshot = new SlingShot(stone.body,{x:200, y:470});

    tree = new Tree(800,100);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    stone.display();
    ground.display();
    slingshot.display();  
    tree.display();  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32 ){
        slingshot.attach(stone.body);
   }
   }