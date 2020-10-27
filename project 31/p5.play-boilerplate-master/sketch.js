const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3,ground4;
var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight  =  300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  
  ground1 = new Ground(width/2,height,width,5);
  ground2 = new Ground(478,400,5,height);
  ground3 = new Ground(240,1,480,5);
  ground4 = new Ground(1,400,5,height);

 
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 6.5, divisionHeight));
  }


   for (var j = 45; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 40; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,150));
   }

    for (var j = 45; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,225));
   }

    for (var j = 40; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,300));
   }
}

function draw() {
  background("pink");  
  Engine.update(engine);
  
  
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  
  
  for(var j = 0; j<plinkos.length; j++)
  {
    plinkos[j].display();
  }
  for(var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,7));
  }

  for (var j = 0; j < particles.length; j++) 
  {
    particles[j].display(); 
  } 

}