function login(e) {
    e.preventDefault();

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var formValid = true;

    if (email.value == "") {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        formValid = false;
    } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        formValid = true;
    }

    if (password.value == "") {
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        formValid = false;
    } else {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
        formValid = true;
    }
    var user = {
        email: email.value,
        password: password.value
    }

    var users = JSON.parse(localStorage.getItem("users")) || [] /// get element from localstorage
    var trouve = users.find((user) => user.email == email.value && user.password == password.value)
    if (trouve != undefined) {
        alert('connected')
        window.location.href="./dasboard.html"

    } else {
        alert('vérifier email and password')

    }

}
var btnlogin = document.getElementById("loginbtn");
btnlogin.addEventListener("click", login);