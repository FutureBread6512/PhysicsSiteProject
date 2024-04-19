var canvas;
var stage;
var whee;
var line
var hm = false;	
var rad = true;	
var button;

var f = 0;
var s = 2 * Math.PI / 180; 

function init() {
  canvas = document.getElementById("testCanvas");
  button = document.getElementById("button");
  stage = new createjs.Stage(canvas);

    ball = new createjs.Shape();
    ball.graphics.beginFill("#09093C").drawCircle(0, 0, 20);
    ball.x = 100;
    ball.y = canvas.height / 2;

    ball1 = new createjs.Shape();
    ball1.graphics.beginFill("#09093C").drawCircle(0, 0, 20);
    ball1.x = 100;
    ball1.y = canvas.height / 2;

    var line = new createjs.Shape();
  line.graphics.setStrokeStyle(1.5).beginStroke("rgba(0,0,0,1)").drawCircle(canvas.width/2, canvas.height / 2, 100);

  var line1 = new createjs.Shape();
  line1.graphics.setStrokeStyle(1.5).beginStroke("rgba(0,0,0,1)").drawCircle(canvas.width/2, canvas.height / 2, 200);

    stage.addChild(ball);
    stage.addChild(ball1);
    stage.addChild(line);
    stage.addChild(line1);

  createjs.Ticker.interval = 10;
  createjs.Ticker.addEventListener("tick", tick);
  stage.addEventListener("stagemouseup", handleMouseUp);
}
function handleMouseUp(event) {
  hm=!hm;
}
function tick(event) {
  if (!hm){
    if (rad){
      f += s;
  ball.x = canvas.width / 2 + 100 * Math.cos(f);
  ball.y = canvas.height / 2 + 100 * Math.sin(f);

  ball1.x = canvas.width / 2 + 200 * Math.cos(f); 
  ball1.y = canvas.height / 2 + 200 * Math.sin(f); 

  stage.update(event);
    } else {
      f += s;
  ball.x = canvas.width / 2 + 100 * Math.cos(f);
  ball.y = canvas.height / 2 + 100 * Math.sin(f); 

  ball1.x = canvas.width / 2 + 200 * Math.cos(f-s*200); 
  ball1.y = canvas.height / 2 + 200 * Math.sin(f-s*200); 

  stage.update(event);
    }
  }      
}
function setAll(){
rad=!rad;
if (rad){
  button.textContent = "Одинаковая угловая скорость";
} else{
  button.textContent = "Одинаковая линйная скорость";
} }