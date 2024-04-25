let valb=20;
let varfre = 20;
let pointLen = 0;

let showAmp=true;
let showFre = true;
    function showAxes(ctx,axes) {
        let width = ctx.canvas.width;
        let height = ctx.canvas.height;
        let xMin = 0;
            
            
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgb(42,40,36)";
            
        // X-Axis
        ctx.moveTo(xMin, height/2);
        ctx.lineTo(width, height/2);

        // Starting line
        ctx.moveTo(0, 0);
        ctx.lineTo(0, height);
            
        ctx.stroke();
            
        ctx.fillStyle = "#272215";

        ctx.font = "24pt Roboto";
        if (showAmp){
            ctx.moveTo(0, canvas.height/2-valb);
        ctx.lineTo(width, canvas.height/2-valb); 
            ctx.fillText("амплитуда = "+valb +" м", 20, canvas.height/2-valb-5);
        }
            
        if (showFre){
            ctx.moveTo(varfre*Math.PI*2, canvas.height/2);
        ctx.lineTo(varfre*Math.PI*2, canvas.height);
        if(varfre>30){
            ctx.fillText("Период = "+varfre +" с", varfre*Math.PI*2-200, canvas.height/4*3);  
        } else{
            ctx.fillText("Период = "+varfre +" с", varfre*Math.PI*2+100, canvas.height/4*3);
        } 
        }
            
        ctx.stroke();
        }
    function plotSine(ctx, xOffset, yOffset) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(128, 102, 22)";
            
        let x = 0;
        let y = 0;
        let xA=0;
            
        let amplitude = valb;
        let frequency = varfre;
            
        while (x < canvas.width) {
            y = (canvas.height / 2) + amplitude * Math.cos(x / frequency);
            
            ctx.lineTo(x, y);
            x += 1;
    }
            ctx.stroke();
            ctx.save();
            ctx.restore();

            
        }
       
        function draw() {
            let canvas = document.getElementById("canvas");
            let context = canvas.getContext("2d");

            context.clearRect(0, 0, 960, 960);
            showAxes(context);
            context.save();            
            
            plotSine(context, step, 50);
            context.restore();
            
           step += 4; //частота
            
            window.requestAnimationFrame(draw);
        }let step = -4;
        function spirograph() {            
            let canvas2 = document.getElementById("canvas");
            let context = canvas2.getContext("2d");
            showAxes(context);
            context.save();
            let step = 4;
            for (var i = -4; i < canvas2.height; i += step) {
                plotSine(context, i, 54 + i);
            }
        }
        
        function init() {
            window.requestAnimationFrame(draw);
            spirograph();
        }
        function setTimeScale(val) {
      valb = val;
    }
    function setTimeScaleFRE(val) {
        varfre = val;
    }