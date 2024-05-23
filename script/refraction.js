let angleA = 20
let valb = angleA
let letfre = 20
let pointLen = 0
let R = 30
let showAmp = true
let showFre = true
function showAxes(ctx, axes) {
  let width = ctx.canvas.width
  let height = ctx.canvas.height
  let xMin = 0

  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.strokeStyle = "rgb(42,40,36)"

  // X-Axis
  ctx.moveTo(xMin, height / 2)
  ctx.lineTo(width, height / 2)

  //Y-axis
  ctx.moveTo(width / 2, 0)
  ctx.lineTo(width / 2, height)

  // Starting line
  ctx.moveTo(0, 0)
  ctx.lineTo(0, height)

  ctx.stroke()

  ctx.stroke()

  ctx.fillStyle = "#272215"

  ctx.font = "20pt Roboto"
  if (showAmp) {
    ctx.fillText("α = " + angleA + " °", width / 2 - R * 4, canvas.height / 2 - R)
  }
}
function plotSine(ctx, xOffset, yOffset) {
  let width = ctx.canvas.width
  let height = ctx.canvas.height
  let scale = 0
  let x = 0
  let y = 0

  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.strokeStyle = "rgb(66,44,255)"

  //before refr
  ctx.moveTo(width / 2, height / 2)
  ctx.lineTo(width / 2 - Math.tan((angleA) * Math.PI / 180) * height / 2, 0)

  ctx.stroke()
  ctx.save()
  ctx.restore()
  //after
  ctx.moveTo(width / 2, height / 2)
  ctx.lineTo(width / 2 + Math.tan(Math.asin(Math.sin(angleA * Math.PI / 180) / 1.5)) * height / 2, height)
  ctx.stroke()
  ctx.save()
  ctx.restore()

  ctx.moveTo(width / 2, height / 2)
  ctx.arc(width / 2, height / 2, R, -1 * (90 + Number(angleA)) * Math.PI / 180, -Math.PI / 2)
  ctx.stroke()
  ctx.save()
  ctx.restore()
}

function draw() {
  let canvas = document.getElementById("canvas")
  let context = canvas.getContext("2d")

  context.clearRect(0, 0, 960, 960)
  showAxes(context)
  context.save()

  plotSine(context, step, 50)
  context.restore()

  step += 4 //частота

  window.requestAnimationFrame(draw)
} let step = -4


function init() {
  window.requestAnimationFrame(draw)
}
function setTimeScale(val) {
  angleA = val
}

