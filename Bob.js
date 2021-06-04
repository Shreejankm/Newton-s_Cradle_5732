class Bob {
    constructor(x,y){ 
        var prop = {  
            restitution:1,
            density:1.2
        }             
        this.body = Bodies.circle(x,y,29,prop);
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.image = loadImage("metalBall.png");
                      
        World.add(world,this.body);
    }                 
    display(){           
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
                      
    }                 
}                    
                     