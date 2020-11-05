class Roof{
    constructor(){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(400, 200, 300, 30, options);
        this.width = 300;
        this.height = 30
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
    }
}