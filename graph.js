	 var x;
	 var y = 0;
	 var poz_x2;
	 var y10;
	 var poz_x1 = 75;
	 
	function draw_c() {
	 var b_canvas = document.getElementById("graph");
	 var context = b_canvas.getContext("2d"); 
	 context.lineWidth=2;	
	 context.strokeStyle = '#000000';
	 x = parseFloat(elem.value);
	 poz_x2 = (75-x); 
	 y10 = y + 10;
	 context.beginPath();
	 context.moveTo(y, poz_x1);
	 context.lineTo(y10, poz_x2);
	 poz_x1 = poz_x2;
	 y = y + 10;
	 context.stroke();
	}
	
	function draw_line(){
		 var b_canvas = document.getElementById("graph");
		 var context = b_canvas.getContext("2d");
		context.beginPath();
		context.lineWidth=0.5;
		context.moveTo(300, 75);	
		context.lineTo(0, 75);
		context.strokeStyle = '#FF0000';
		context.stroke();
	}
	
	function clean_canvas() {
		var b_canvas = document.getElementById("graph");
		var context = b_canvas.getContext("2d");
		poz_x1, poz_x2, y = 0;
		context.clearRect(0, 0, 300, 500);
		}
