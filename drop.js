class Drop{
    constructor(x,y){
       friction:0.1
    }
    
    update(){
        drop.update();
        if(this.rain.position.y > height){
         Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
        }
    }
};