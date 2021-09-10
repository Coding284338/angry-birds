class Ground{
    constructor(a,b,c,d)
    {
        var ground_options = {
            isStatic: true

        }
  this.x = a;
  this.y = b;
  this.width = c;
  this.height = d;
  this.body = Bodies.rectangle(a,b,c,d,ground_options)
  World.add(world,this.body);
    }

    display()
    {
        var ground_position = this.body.position;
  var angle = this.body.angle;
  push();
  translate(ground_position.x,ground_position.y);
  rotate(angle);
  rectMode(CENTER);
  fill("red");
  rect(0,0,this.width,this.height);
  pop();
    }
}