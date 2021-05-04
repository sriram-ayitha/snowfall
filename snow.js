class Snow{
    constructor(x,y){
    var options={
    isStatic:false,
    restitution:1.0
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    World.add(world,this.body);
    this.snowImage = loadImage("snow5.webp");
    }
    display(){
    image(this.snowImage,this.body.position.x,this.body.position.y,50,50);
     
    }



}
