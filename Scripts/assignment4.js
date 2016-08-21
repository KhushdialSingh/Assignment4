/*
 * author : Khushdial Singh - 300878370
 */
document.getElementById("body").addEventListener("load",init());
var MyCanvas;
var stage;
var text;
var pic;
var direction = true;
/**
 * @ function: init()
 * @ purpose: handle body load event
 */
function init(){
canvas=document.getElementById("canvas");
stage = new createjs.Stage(canvas);
text = new createjs.Text("Milk composition", "25px Verdana", "#000");
text.x = 0;
text.y = 345;
text.regX=250*0.5;
text.regY=250*0.5;
stage.addChild(text);
createjs.Ticker.framerate = 30;
createjs.Ticker.addEventListener("tick", loop);
text.addEventListener("click", function(){
window.open("http://www.iisvolta.gov.it/expo2015/Expo2/wp/inizio/entry.html");
}, false);
pic = new createjs.Bitmap("./Assets/bucket.png");
pic.x = 115;
stage.addChild(pic);
}
/**
 * @ function: loop()
 * @ purpose: handle the tick event
 */
function loop(){
    if(direction){
        text.x += 3;
        pic.x -= 3;
        if(text.x >= 400 && pic.x <= -285){direction = false}
    }
    else{
        text.x -= 3;
        pic.x += 3;
        if(text.x <= 0 && pic.x >= 315){direction = true}
    }
    stage.update();
}


