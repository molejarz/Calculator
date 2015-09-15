var rownanie;
	var zm1 = 0;
	var zm2;
	var uj;
	var elem = document.getElementById("rownanie");
	var rp = document.getElementById("rp");
	elem.value = 0;
	rownanie = null;
	var schowek;
		function egzo (i) {
			switch (i) {
			case 0:
				if ((elem.value == null) || (elem.value == '0')) {
				elem.value = parseFloat(0);
					}
				else {
				elem.value = elem.value + "0";	
				}
				break;	
			case 1:
				if ((elem.value == null) || (elem.value == '0')) {
				elem.value = parseFloat(1);
						}
					else {
				elem.value = elem.value + "1";
					}
				break;	
			case 2:
				if ((elem.value == null) || (elem.value == '0')) {
				elem.value = parseFloat(2);
						}
					else {
				elem.value = elem.value + "2";
					}
				break;			
			case 3:
				if ((elem.value == null) || (elem.value == '0')) {
				elem.value = parseFloat(3);
						}
					else {
				elem.value = elem.value + "3";
					}
				break;
			case 4:
				if ((elem.value == null) || (elem.value == '0')) {
				elem.value = parseFloat(4);
						}
					else {
				elem.value = elem.value + "4";
					}
				break;
			case 5:
				if ((elem.value == null) || (elem.value == '0')) {
				elem.value = parseFloat(5);
						}
					else {
				elem.value = elem.value + "5";
					}
				break;
			case 6:
				if ((elem.value == null) || (elem.value == '0')) {
				elem.value = parseFloat(6);
						}
					else {
				elem.value = elem.value + "6";
					}
				break;
			case 7:
				if ((elem.value == null) || (elem.value == '0')) {
				elem.value = parseFloat(7);
						}
					else {
				elem.value = elem.value + "7";
					}
				break;	
			case 8:
				if ((elem.value == null) || (elem.value == '0')) {
				elem.value = parseFloat(8);
						}
					else {
				elem.value = elem.value + "8";
					}
				break;
			case 9:
				if ((elem.value == null) || (elem.value == '0')) {
				elem.value = parseFloat(9);
						}
					else {
				elem.value = elem.value + "9";
					}
				break;					
			case 10:
				elem.value = 0;
				zm1 = 0;
				rp.innerHTML = "=";
				clean_canvas();
				break;	
			case 11:
				if (rownanie == null) {
				zm1 = parseFloat(elem.value);
				}
				elem.value = null;
				rownanie = "dzielenie";
				return [zm1, rownanie];
				break;		
			case 12: 
				if (rownanie == null) {
					zm1 = parseFloat(elem.value);
					}
				elem.value = null;
				rownanie = "mnozenie";	
				return [zm1, rownanie];
				break;
			case 13:	
				if (elem.value == null) {
				elem.value = "-";
				set = "uj";
				} else
					set = null; 
					{
				if (rownanie == null) {
					zm1 = parseFloat(elem.value);
					}
				if (set != "uj") {
				elem.value = null;
					}
				else {
					elem.value = null;
					}
				rownanie = "odejmowanie";
				set = null;
				return [zm1, rownanie];
				}
				break;
			case 14: 
				if (rownanie == null) {
					zm1 = parseFloat(elem.value);
					}
				elem.value = null;
				rownanie = "dodawanie";
				return [zm1, rownanie];
				break;
			case 15: 
				zm2 = parseFloat(elem.value);		
				schowek = zm1;		
				if (rownanie == "dzielenie"){
					elem.value = zm1 / zm2;	
					rp.innerHTML = zm1 + "/" + zm2;
					rownanie = null;
					}
				if (rownanie == "dodawanie"){
					elem.value = zm1 + zm2;
					rp.innerHTML = zm1 + "+" + zm2;
					rownanie = null;
					}
				if (rownanie == "odejmowanie"){
					elem.value = zm1 - zm2;
					rp.innerHTML = zm1 + '-' + zm2;
					rownanie = null;
					}
				if (rownanie == "mnozenie"){
					elem.value = zm1 * zm2;
					rp.innerHTML = zm1 + "x" + zm2;
					rownanie = null;
					}
				if (rownanie == "potega"){
					elem.value = Math.pow(zm1, zm2);
					rp.innerHTML = zm1 + "^" + zm2;
					rownanie = null;
					}
				draw_c();
				break;
			case 16:
				schowek = elem.value;
				elem.value = parseFloat(schowek);
				elem.value = Math.log(schowek);
				rp.innerHTML = "ln(" + schowek +")";
				draw_c();
				break;
			case 17:
				schowek = elem.value;
				elem.value = parseFloat(schowek);
				elem.value = Math.sin(schowek);
				rp.innerHTML = "sin(" + schowek +")";
				draw_c();
				break;
			case 18:
				schowek = parseFloat(schowek);
				elem.value = schowek;
				rp.innerHTML = "=";
				break;
			case 19:
				schowek = elem.value;
				elem.value = parseFloat(schowek);
				elem.value = Math.tan(schowek);
				rp.innerHTML = "tangent(" + schowek +")";
				draw_c();
				break;
			case 20: 
				elem.value = elem.value + ".";
				break;	
			case 21:
				schowek = elem.value;	
				elem.value = parseFloat(elem.value);
				elem.value = Math.sqrt(elem.value);
				rp.innerHTML = "√" + schowek;
				draw_c();
				return schowek;
				break;	
			case 22:
				if (rownanie == null) {
				zm1 = parseFloat(elem.value);
				}
				elem.value = null;
				rownanie = "potega";
				draw_c();
				return [zm1, rownanie];
				break;
			case 23:				
				if (rownanie == null) {
				zm1 = parseFloat(elem.value);
				}
				elem.value = parseFloat(elem.value);
				elem.value = Math.exp(elem.value);
				rp.innerHTML = "e^" + zm1;
				draw_c();
				return zm1;
				break;
			case 24:
				schowek = elem.value;
				elem.value = parseFloat(schowek);
				elem.value = Math.asin(schowek);
				rp.innerHTML = "arcsine(" + schowek + ")";
				draw_c();
				break;
			case 25:
				schowek = elem.value;
				elem.value = parseFloat(elem.value);
				elem.value = Math.acos(elem.value);
				rp.innerHTML = "arccosine(" + schowek + ")";
				draw_c();
				break;
			case 26:
				schowek = elem.value;
				elem.value = parseFloat(elem.value);
				elem.value = Math.cos(elem.value);
				rp.innerHTML = "cosine(" + schowek + ")";
				draw_c();
				break;
			case 27:
				schowek = elem.value;
				elem.value = parseFloat(elem.value);
				elem.value = Math.atan(elem.value);
				rp.innerHTML = "arctangent(" + schowek + ")";
				draw_c();
				break;
			case 28:
				elem.value = Math.PI;
				break;
			case 29:
				elem.value = Math.E;
				break;
			case 30:
				rp.innerHTML = "abs(" + elem.value + ")";
				elem.value = Math.abs(elem.value);
				draw_c();
				break;
			case 31:
				elem.value = null;
				break;
			return rownanie;
			}
		}
