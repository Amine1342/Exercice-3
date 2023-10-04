function login(e) {
    e.preventDefault();
    
    var email = document.getElementById("email") ;
    var password = document.getElementById("password") ;
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
}
    var btnregister = document.getElementById("submit");
    btnregister.addEventListener("click", login);