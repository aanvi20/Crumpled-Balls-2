class Banana{
    constructor(x, y){
        var options={
            isStatic: false,
            'restitution' : 0.3,
            'friction': 0.5,
            'density': 1.2

        }
        
        this.body=Bodies.circle(x, y, 20, options);
        this.image=loadImage("banana.png")
        this.radius=30;
        World.add(world, this.body)
        
       
       
    }

    display(){

        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        fill("purple");
        pop();

      //ellipseMode(RADIUS);
  
      fill("yellow");
  
      //ellipse(this.body.position.x, this.body.position.y, 20);
      //image(this.image,this.body.position.x,this.body.position.y,70,70);
    }
};