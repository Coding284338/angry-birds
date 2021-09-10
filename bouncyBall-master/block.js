class Block {
    constructor(a,b,c,d)
    {
        var block_options = {
            isStatic: true

        }
  this.x = a;
  this.y = b;
  this.width = c;
  this.height = d;
  this.body = Bodies.rectangle(a,b,c,d,block_options)
  this.image = loadImage("angry_birds___block_tnt_by_comawhite81-d6vkt2e.png")
  World.add(world,this.body);
    }

    display()
    {
        var block_position = this.body.position;
  var angle = this.body.angle;
  push();
  translate(block_position.x,block_position.y);
  rotate(angle);
  imageMode(CENTER);
  fill("white");
  stroke("green")
  strokeWeight(4)
  image(this.image,0,0,this.width,this.height);
  pop();
    }
}