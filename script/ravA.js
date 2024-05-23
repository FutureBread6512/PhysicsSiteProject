let canvas, stage, tween, ball, valb

function init() {
  canvas = document.getElementById("testCanvas")
  stage = new createjs.Stage(canvas)

  let line = new createjs.Shape()
  stage.addChild(line)
  line.graphics.setStrokeStyle(1.5).beginStroke("rgba(0,0,0,1)")
  line.graphics.moveTo(0, canvas.height / 2 + 20)
  line.graphics.lineTo(canvas.width, canvas.height / 2 + 20)
  line.graphics.endStroke()

  ball = new createjs.Shape()
  ball.graphics.beginFill("#09093C").drawCircle(0, 0, 20)
  ball.x = 100
  ball.y = canvas.height / 2

  stage.addChild(ball)
  stage.addChild(line)

  createjs.Ticker.timingMode = createjs.Ticker.RAF
  stage.addEventListener("stagemouseup", handleMouseUp)

  createjs.Ticker.addEventListener("tick", stage)
}
function handleMouseUp(event) {
  ball.x = 100
  tween = createjs.Tween.get(ball, { loop: 0, bounce: false, timeScale: valb })
    .to({ x: canvas.width - 100 }, 1000, createjs.Ease.getElasticIn(2, 3))
}

function setTimeScale(val) {
  valb = val
  timeScaleFld.innerText = val.toFixed(1) + " м/с^2"
}