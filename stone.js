class Stone
{
    constructor(x,y)
    {
        var option ={
            restitution: 0.8,
            friction: 0.9,
            density: 12
        }

        this.stone = Bodies.rectangle(x,y,90,30,option);
        this.width = 90;
        this.height = 30;
        World.add(world,this.stone);
    }

    display()
    {
        var pos = this.stone.position;
        var angle = this.stone.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke("purple");
        fill("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}