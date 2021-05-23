class Tramp{

    constructor(x,y,w,h){

        var options={
            isStatic:true
          }
         
          this.body=Bodies.rectangle(x,y,w,h,options);
          this.width=w;
          this.height=h;
          this.image = loadImage("sprite12_0.png");
          World.add(world,this.body); 
          

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