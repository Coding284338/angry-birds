class Pig {
    constructor(a,b,c,d)
    {
        var pig_options = {
            isStatic: true

        }
  this.x = a;
  this.y = b;
  this.width = c;
  this.height = d;
  this.body = Bodies.rectangle(a,b,c,d,pig_options)
  this.image = loadImage("angry-bird-icon-pack-2.png")
  World.add(world,this.body);
    }

    display()
    {
        var pig_position = this.body.position;
  var angle = this.body.angle;
  push();
  translate(pig_position.x,pig_position.y);
  rotate(angle);
  imageMode(CENTER);
  fill("green");
  stroke("lightgreen")
  strokeWeight(5)
  image(this.image,0,0,this.width,this.height);
  pop();
    }
}