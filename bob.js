class bob {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':1,
          'friction':1,
          'density':0.8
      }

      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(x, y, (this.r)/2, options);
     
     // Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        //rotate(angle);
        fill("blue");
        strokeWeight(3)
        stroke("black")
        ellipse(0, 0, this.r, this.r);
        pop();
    }
  };