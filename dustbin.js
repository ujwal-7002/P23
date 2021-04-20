class Dustbin{
    constructor(x,y,width,heigth){
        bin_options={
            isStatic:true,
            friction:0
        }
        this.body=Bodies.rectangle(x,y,width,height,bin_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.postion;
        fill("white");
        rect(x,y,width,height);
    }
};