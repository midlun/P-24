class Iron
{
    constructor(x,y)
    {
        var option ={
            restitution: 0.8,
            friction: 3,
            density: 30
        }
        
        this.iron = Bodies.rectangle(x,y,80,20,option);
        this.width = 80;
        this.height = 20;
        World.add(world,this.iron);
    }

    display()
    {
        var pos = this.iron.position;
        var angle = this.iron.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("red");
        fill("pink");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}