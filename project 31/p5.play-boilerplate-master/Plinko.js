class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true
        };
        
        this.body = Bodies.circle(x,y,6.5,options);
        this.x = x;
        this.y = y;
        this.radius = 6.5;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        fill("black");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}