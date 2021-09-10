class Rect{
    constructor(a,b,c,d)
    {
        var rect_options = {
            isStatic: true

        }
  this.x = a;
  this.y = b;
  this.width = c;
  this.height = d;
  this.body = Bodies.rectangle(a,b,c,d,rect_options)
  this.image = loadImage("iammisc_Wood_Plank.png")
  World.add(world,this.body);
    }

    display()
    {
        var rect_position = this.body.position;
  var angle = this.body.angle;
  push();
  translate(rect_position.x,rect_position.y);
  rotate(angle);
  imageMode(CENTER);
  fill("white");
  stroke("green")
  strokeWeight(5)

  image(this.image,0,0,this.width,this.height);
  pop();
    }
}