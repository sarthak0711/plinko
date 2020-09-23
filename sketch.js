const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Event = Matter.Event;
 
var particles = [];
var particles,divisions;
var plinkos = [];
var divisions = []
var divisionHeight=300;
var score = 0;
var turn=0;
var gameState=1
var PLAY=1
var END=0

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20,20);
  //divisions


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
 if( gameState=PLAY){
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
     //particles.display();
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(score>=500 || score>=200 || score>=100){
     gameState=END
   }
  }

   
  
}

function mousePressed(){

  if(gameState!== PLAY){
   count++;
    particle = new Particle(mouseX,10,10,10);
  }

}