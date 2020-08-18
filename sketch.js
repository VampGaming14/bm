var batman;
var maxDrops = 100;
function preload(){
    
}

function setup(){
 
   batman = createSprite(200,200,30,30);
   umbrella = new Umbrella(300,3430,5,5); 
}

function draw(){
    for(var i=0; i<maxDrops; i++){
drops.push(new createDrop(random,0,400, random(0,400)));
    }

    
    umbrella.display();
}   

function ellipse(){

}