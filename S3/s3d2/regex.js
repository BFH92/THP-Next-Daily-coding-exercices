function returnToPreviousPage() {
  window.history.back();
}
const nameCheck = (event,myform) => {
	if (myform.nom.value == "" || myform.nom.value == null) {
		alert("Le nom est obligatoire");
		event.preventDefault();
	}
};

const emailCheck = (event,myform) => {
	//if (myform.email.value == "" || myform.nom.value == null) {
	//	alert("le format du mail est invalide");
	//	event.preventDefault();
	//}
	var regex  = new RegExp ('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
	if (!myform.email.value.match(regex)){
		alert("le format du mail est invalide");
		event.preventDefault();
	}

}
//var myform = document.getElementById("form")
const check = (event) => {
  var myform = document.getElementById("form");
  nameCheck(event,myform);
	emailCheck(event,myform);

	
};

document.getElementById("submit").addEventListener("click", check);
