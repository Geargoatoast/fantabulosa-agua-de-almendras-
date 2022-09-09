var  BackgroundImg 

function preload (){
BackgroundImg=loadAnimation("Background.gif");
}

function setup(){
    createCanvas(windowWidth,widowHeight);
}
function draw(){
Background(BackgroundImg);

}