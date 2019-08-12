var Engine = Matter.Engine,
// Render = Matter.Bodies,
World = Matter.World,
Bodies = Matter.Bodies;


var engine;
var world;
var circles = [];
var ground;

function setup(){
    createCanvas(1525, 750);
    engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);
    
    floor = new Ground(710, height, 2150, 30);
    ceiling = new Ground(710, 0, 2150, 30);
    leftWall = new Ground(0, 375, 30, 750 );
    rightWall = new Ground(1525, 375, 30, 750);
    

    Matter.World.add(world, floor);
    Matter.World.add(world, ceiling);
    Matter.World.add(world, leftWall);
    Matter.World.add(world, rightWall);
    
}


function mouseDragged(){
   circles.push(new Circle(mouseX, mouseY, random(10, 30)));
    score = score + 1
    
    
    
}

function draw(){
    background("black");
    if(frameCount % 1 === 0) {
    //circles.push(new Circle(random(30, 1490),200, random(20, 40)));
    //circles.torque = random(500,1000);
    //circles.speed = random(0, 1000);
    }
    
    
    for (var i = 0; i < circles.length; i++){
        circles[i].show();
    }
    

   floor.show();
   ceiling.show();
   leftWall.show();
   rightWall.show();
   
}
