class Tina{
    constructor(x, y, width, height) {
        var options = {
            'restitution':2,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("girl0.png");
        World.add(world, this.body);
      }
      display(){
        push();  
        var pos=this.body.position;      
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }