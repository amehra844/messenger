var message = "";


var firebase = new Firebase ("https://aishmessenger.firebaseio.com/");

$(".btn").click(sendMessage);

firebase.on(("child_added"), onMessage);

function onMessage(newChild){
	var message = newChild.val();
	$(".messages").append("<text>" + message.text + "<text><br>");
}

function sendMessage(){
	var text = "Aish: " + $(".inputBox").val();
	$(".form-control").val("");

	if (text != ""){
		firebase.push({
			"text": text,
		});
	}	
	
}