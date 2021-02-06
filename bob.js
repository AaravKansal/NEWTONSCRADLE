class bob{
    constructor(x,y){
        this.width=70;
        this.height=70;
        this.body=Bodies.circle(x,y,20,{isStatic:false,friction:0.5,density:1.2,restitution:0.3})
        World.add(world,this.body);
      
        
    }display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("red")
        ellipse(0,0,this.width,this.height)
        pop();
    }
    
}