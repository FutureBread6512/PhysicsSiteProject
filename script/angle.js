let al = 45 * deg;
var deg = Math.PI / 180;
        function MainMG(canvas) {
        
            var X_max = canvas.width;
            var Y_max = canvas.height;
        
            var g = 1.;
            var v0 = 1.;
            
            var h = v0 * v0 / 2 / g;

            var x_min = 0;  
            var x_max = 2 * h;
            var y_min = 0;    
            var y_max = h;      
        
            var N = X_max;
            var dx = x_max / N;
            var sx = X_max / x_max;  
        
            var sy;
            var Y0;
            var context;
            
            Slider_01.min = 0;       	
            Slider_01.max = 90;
            Slider_01.step = 1;
            Slider_01.value = Math.round(al / deg);     	
            
            draw();
        
            this.set_01 = function(input) { al = input * deg; draw(); }  

            this.setCheckbox_01 = function(bool) { draw(); }
            this.setCheckbox_02 = function(bool) { draw(); }	
            
            function draw() { 
           
                sy = Y_max / (y_max - y_min); 
                Y0 = Y_max + y_min * sy;  
        
                context = canvas.getContext("2d"); 
                context.clearRect(0, 0, X_max, Y_max);

        
                Graph(F0, 	checkbox_02.checked, 	'lightgrey');		
                Graph(F1, 	checkbox_01.checked, 	'black');
        
                context.fillStyle = 'black';
                context.font = "Roboto 20px sans-serif";
                context.fillText("x", x_max * sx - 15, Y0 - 7);
                context.fillText("y", 5, 15);
                context.fillText("0", 10, Y0 - 3);
            }
            
            function Graph(F, flag, color)
            {
                if (!flag) return;
                
                context.strokeStyle = color;
                context.beginPath();
                for (var x = x_min; x < x_max; x += dx)
                {
                    var y = F(x);
                    var X = x * sx; 
                    var Y = Y0 - y * sy; 
                    context.lineTo(X, Y);	
                }
                context.stroke();
            }	
            
            function F0(x) 	
            {
                var y = x - g / (v0 * v0) * x * x; 
                return y;
            }    

            function F1(x)
            {
                var t = x / v0 / Math.cos(al) 
                var y = v0 * Math.sin(al) * t - g * t * t / 2; 
                return y;
            }    
        }
        function setTimeScale(val) {
      timeScaleFld.innerText = val+"°";
    }