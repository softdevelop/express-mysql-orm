//let delUserEls = document.getElementsByClassName("del-user");
let delUserEls = document.querySelectorAll("a.del-user");

let toastEl = document.getElementById("liveToast");
let toast =new bootstrap.Toast(toastEl);

[...delUserEls].map(delUserEl => delUserEl.addEventListener("click", function(e) {
	//e.stopPropagation();
	e.preventDefault();
	tc = this;
	var cf = confirm("Are you sure!");
	if (cf == true) {
		url=tc.href;
		fetch(url, {	method: 'DELETE' })
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
}));