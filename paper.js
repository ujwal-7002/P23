class Paper{
    constructor(x,y,width){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Matter.Bodies.circle(x,y,1,options);
        this.width=width;
        World.add(world,this.body);
    } 
    display(){
        var pos =this.body.position;
        ellipse(pos.x,pos.y,this.width);
    }
};