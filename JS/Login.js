function login(e) {
    e.preventDefault();

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var formValid = true;

    // Vérifier les valeurs des inputs //
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

    // Compare this snippet from JS/Register.js:
    var users = JSON.parse(localStorage.getItem("users")) || [] /// get element from localstorage
    var trouve = users.find((user) => user.email == email.value && user.password == password.value)
    if (trouve != undefined) {
        window.location.href="./dasboard.html"
    } else {
        alert('Vérifier email et mot de passe')

    }

}
var btnlogin = document.getElementById("loginbtn");
btnlogin.addEventListener("click", login);