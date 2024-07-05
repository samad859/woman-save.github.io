	var uname;
	window.onload = function() {
		document.getElementById('inputalert').style.display = 'block';
	};
	function userinput(){
		var useralertinput = document.getElementById('alertinput').value;
		if (useralertinput == "") {
      document.getElementById('errorstatus').innerHTML = "Fill The Box";
     
      return false;
    }
    else{
    	uname = document.getElementById('alertinput').value;
    	document.getElementById('headusername').innerHTML = uname;
    	document.getElementById('inputalert').style.display = 'none';
    }
	}
	
function onloadtazmani(){
		var tazmaniteam=document.getElementById("tazmanilead");
		tazmaniteam.innerHTML="";
		for(var tazmania=0;tazmania<trafficdata.length;tazmania++){
			tazmaniteam.innerHTML+='<tr><td>'+(tazmania+1)+'</td><td>'+trafficdata[tazmania].city+'</td><td>'+trafficdata[tazmania].area+'</td><td>'+trafficdata[tazmania].date+'</td><td>'+trafficdata[tazmania].time+'</td></tr>';
		}
	}
