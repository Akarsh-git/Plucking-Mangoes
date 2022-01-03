class Mango {
    constructor(x, y, radius) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.R=radius;
      
      this.image=loadImage("mango.png")
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
  