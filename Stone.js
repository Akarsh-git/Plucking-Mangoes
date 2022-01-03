class Stone {
  
    constructor(x, y, radius) {
      var options = {
       'restitution':0.8,
        'friction':0.3,
       'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.R = radius;
      
      this.image=loadImage("stone.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      fill ("yellow");
      
      imageMode(RADIUS);
      push ();
      translate(pos.x,pos.y);
      rotate(angle);
      
      image(this.image,0, 0, this.R, this.R);
      pop();
    }
  };
  
