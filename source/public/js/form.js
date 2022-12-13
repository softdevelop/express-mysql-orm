const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("inputName");
    const email = document.getElementById("inputEmail");
    const pass = document.getElementById("inputPass");
    const file = document.getElementById("formFile");
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("pass", pass.value);
    formData.append("avata", file.files[0]);
    /*
    for(let i =0; i < files.files.length; i++) {
           formData.append("avata", files.files[i]);
    }
    */
    fetch("/users", {
        method: 'POST',
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data; boundary=qw"
        }
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => ("Error occured", err));
}