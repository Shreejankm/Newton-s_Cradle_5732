class String{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            stiffness:0.2,
            pointB:{x:this.offsetX,y:this.offsetY},
            pointA:{x:this.offsetX,y:this.offsetY}
        }
        this.String = Constraint.create(options);
        World.add(world,this.String);
    }
    

display(){
 var pointA = this.String.bodyA.position;
 var pointB = this.String.bodyB.position;
 strokeWeight(4);
 line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);   
}
}