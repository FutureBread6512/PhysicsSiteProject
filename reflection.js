var angleA=20;
var valb = angleA;
var varfre = 20;
var pointLen = 0;
var R=30;

var showAmp=true;
var showFre = true;
    function showAxes(ctx,axes) {
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var xMin = 0;
        
        
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(42,40,36)";
        
        // X-Axis
        ctx.moveTo(xMin, height/2);
        ctx.lineTo(width, height/2);

        //Y-axis
        ctx.moveTo(width/2, 0);
        ctx.lineTo(width/2, height);

        // Starting line
        ctx.moveTo(0, 0);
        ctx.lineTo(0, height);
        
        ctx.stroke();
        
        ctx.fillStyle = "#272215";

         ctx.font = "20pt Roboto";
        if (showAmp){
          ctx.fillText("α = "+ angleA +" °", width/2-R*4, canvas.height/2-R);
        }
        
        if (showFre){
        ctx.fillText("α = "+ angleA +" °", width/2+R*2, canvas.height/2-R);
        }
        ctx.stroke();
        
    }
    function plotSine(ctx, xOffset, yOffset) {
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var scale = 0;
        var x = 0;
        var y = 0;
       

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(66,44,255)";
        
        //before ref

        ctx.moveTo(width/2, height/2);
        ctx.lineTo(width/2-Math.tan((angleA)*Math.PI/180)*height/2, 0);

        ctx.stroke();
        ctx.save();
        ctx.restore();

        ctx.moveTo(width/2, height/2);
        ctx.lineTo(width/2+Math.tan((angleA)*Math.PI/180)*height/2, 0);
        
        ctx.stroke();
        ctx.save();
        ctx.restore();

        ctx.moveTo(width/2, height/2);
        ctx.arc(width/2, height/2, R, -1*(90 + Number(angleA)) * Math.PI/180, -Math.PI/2);
        ctx.stroke();
        ctx.save();
        ctx.restore();

        ctx.moveTo(width/2, height/2);
        ctx.arc(width/2, height/2, R-10 , Math.PI/2*3, (90 + Number(angleA)) * Math.PI/180+Math.PI);
        ctx.stroke();
        ctx.save();
        ctx.restore();
        
    }
   
    function draw() {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        context.clearRect(0, 0, 960, 960);
        showAxes(context);
        context.save();            
        
        plotSine(context, step, 50);
        context.restore();
        
       step += 4; //частота
        
        window.requestAnimationFrame(draw);
    }var step = -4;

    
    function init() {
        window.requestAnimationFrame(draw);
    }
    function setTimeScale(val) {
  angleA = val;
}
