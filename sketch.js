const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var batman,canvas;
var raindrop1,raindrop2,raindrop3,raindrop4,raindrop5;
var raindrop6,raindrop7,raindrop8,raindrop9,raindrop10;
var engine,world;

function setup(){
   var canvas = createCanvas(800,500);
   engine = Engine.create();
   world = engine.world;
   raindrop1 = new Raindrop(400,150,20,20);
   raindrop2 = new Raindrop(300,330,20,20);
   raindrop3 = new Raindrop(200,120,20,20);
   raindrop4 = new Raindrop(100,200,20,20);
   raindrop5 = new Raindrop(500,250,20,20);
   raindrop6 = new Raindrop(450,300,20,20);
   raindrop7 = new Raindrop(350,170,20,20);
   raindrop8 = new Raindrop(250,220,20,20);
   raindrop9 = new Raindrop(150,350,20,20);
   raindrop10 = new Raindrop(550,100,20,20);
   ground = new Ground(600,400,1200,20);
   batman = new Ground(100,250,40,70);
}

function draw(){
    background("black");
    Engine.update(engine);
    raindrop1.display();
    raindrop2.display();
    raindrop3.display();
    raindrop4.display();
    raindrop5.display();
    raindrop6.display();
    raindrop7.display();
    raindrop8.display();
    raindrop9.display();
    raindrop10.display();
    ground.display();
    batman.display();
}   

