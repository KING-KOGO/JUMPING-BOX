var canvas;
var music;
var box1,box2,box3,box4,block,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(700,570,200,15);
    box1.shapeColor=rgb(100,235,180)
    box2=createSprite(500,570,200,15);
    box2.shapeColor=rgb(0,100,0)
    box3=createSprite(300,570,200,15);
    box3.shapeColor=rgb(150,10,150)
    box4=createSprite(100,570,200,15);
    box4.shapeColor=rgb(0,25,180)
    block=createSprite(400,20,30,30);
    block.shapeColor=rgb(255,0,0);
    block.setVelocity(-5,6);
    //create box sprite and give velocity
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    block.bounceOff(edges)
     
    if(block.isTouching(box1)){
        block.shapeColor=rgb(100,235,180)
    }
    if(block.isTouching(box2)){
        block.shapeColor=rgb(0,100,0)
    }
    if(block.isTouching(box3)){
        block.shapeColor=rgb(150,10,150)
        music.play();
    }
    if(block.isTouching(box4)){
        block.shapeColor=rgb(0,25,180)
    }
    block.bounceOff(box1)
    block.bounceOff(box2)
    block.bounceOff(box3)
    block.bounceOff(box4)
    
    //add condition to check if box touching surface and make it box
    drawSprites()
}
