class pack{
    constructor(x,y,width,height)
    {
        var options={
            isStatic: true,
            restitution: 0.8,
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("helicopter.png");
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height)
        pop()
    }
}