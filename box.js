function Circle(x, y, r){
    var options ={
        friction: 1,
        restitution: 1,
        frictionAir: .01,
        slop: 0,
        
        


    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    var wierd = random(.05, 1);
    Matter.World.add(world, this.body);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        //strokeWeight(4);
        //stroke("white");
        var r = random(2,51);
        var g = random(56, 72);
        var b = random(168,169);



        
        fill(r, g, b);
        ellipse(0,0,this.r*2);

        pop();
    }
}