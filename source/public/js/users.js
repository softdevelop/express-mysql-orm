let delUserEls = document.getElementsByClassName("del-user");
//let delUserEls = document.querySelectorAll("a.del-user");

let toastEl = document.getElementById("liveToast");
let toast =new bootstrap.Toast(toastEl, option)

delUserEls.addEventListener("click", function(e) {
	e.stopPropagation();
	tc = this;
	var cf = confirm("Are you sure!");
	if (cf == true) {
		url=tc.href;
		fetch('https://reqres.in/api/users' + id, {	method: 'DELETE' })
		.then(res => {
		  	return res.json();
		})
		.then(data => {
			if(data) {
				tc.parentNode.parentNode.remove();
				document.getElementById("toast-message").innerHTML = data.message;
			}
			toast.show();
		});
	}
	return false;
});