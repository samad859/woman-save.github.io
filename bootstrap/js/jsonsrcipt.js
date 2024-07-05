
var inputdata = [];
var count = 0;
var datasave;

// function idcount(){
// 	if(localStorage.getItem("count")==null){
// 		count=1;
// 		localStorage.setItem("count", count);
// 	}
// 	else {
// 		count = localStorage.getItem("count",count);
// 		count = parseInt(count)+1;
// 		localStorage.setItem("count", count);
// 	}
// }

function fetchdata(){
	// idcount();
	var set_value = {
		id:"1",
		name:"shoaib",
		email:"shddssda",
		phone:"232344233"
	};
	datasave = JSON.parse(localStorage.getItem("tazmani"));
	if(datasave == null) {
		inputdata.push(set_value);
		localStorage.setItem("tazmani",JSON.stringify(inputdata));
	}
	else {
		datasave.push(set_value);
		localStorage.setItem("tazmani",JSON.stringify(datasave));
	}
	alert("Data Saved !");
	window.location.href="userdata.html";

}






// var myuserdata =$('#userdatashow');
// 	var users=JSON.parse(localStorage.getItem("tazmani"));
// 	var data ='';
// 	for(var i=0;i<users.length;i++){
// 		myuserdata.append('<tr><td>'+users[i].id+'</td><td>'+users[i].name+'</td><td>'+users[i].email+'</td><td>'+users[i].phone+'</td></tr>');
// 	}