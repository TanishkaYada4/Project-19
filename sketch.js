var girl
var road
var v1,v2,v3
var end=1
var play=2
var gameOver,restart
var score=0

function preload(){
girlImg=loadImage("girl.png")
road=loadAnimation("road.png")
v1=loadImage("v1.png")
v2=loadImage("v2.png")
v3=loadImage("v3.png")
}

function setup() {
    createCanvas(1200,300);
    road=createSprite(100,150)
    road.addImg(roadImg)
    road.velocityX=0.3

    girl=createSprite(20,40)
    girl.addImg(girlImg)
    girl.setCollider("circle",0,0,0,40)
    debug=false

    v1=createSprite(20,30)
    v1.addImage(v1Img)
    v2=createSprite(20,30)
    v2.addImage(v2Img)
    v3=createSprite(20,30)
    v3.addImage(v3Img)

    gameOver=createSprite(30,30)
    gameOver.visible=false
    restart=createSprite(40,40)
    restart.visible=false

   
}

function draw() {
 
    
    

    if (gameState===play){
        if(girl.isTouching("v1||v2||v3"))
        gameState=end()

        girl.x=World.mouseX
        score = score + Math.round(getFrameRate()/50);
   road.velocityX = -(3 + 2*score/50);

   edges= createEdgeSprites();
   girl.collide(edges);








    }
    if (gameState===end){
        score=0
gameOver=visible
restart=visible
girl.velocityX=0
if (restart.){

}



    }

}