function Ground(x, y, w, h){
    var options ={
        friction: 0.5,
        restitution: 1,
        isStatic: true

    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    Matter.World.add(world, this.body);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        noStroke();
        fill(120);
        rect(0,0,this.w,this.h);

        pop();
    }
}