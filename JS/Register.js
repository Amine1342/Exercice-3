function register(e) {
    e.preventDefault();

    var nom = document.getElementById("nom") ;
    var prenom = document.getElementById("prénom") ;
    var email = document.getElementById("email") ;
    var password = document.getElementById("password") ;
    var confirmpassword = document.getElementById("confirm") ;
    var formValid = true;
  

    if (nom.value == "") {
        nom.classList.remove("is-valid");
        nom.classList.add("is-invalid");
        formValid = false;
    } else {
        nom.classList.remove("is-invalid");
        nom.classList.add("is-valid");
        formValid = true;
    }

    if (prenom.value == "") {
        prenom.classList.remove("is-valid");
        prenom.classList.add("is-invalid");
        formValid = false;
    } else {
        prenom.classList.remove("is-invalid");
        prenom.classList.add("is-valid");
        formValid = true;
    }

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

    if (confirmpassword.value == "" || confirmpassword.value != password.value) {
        confirmpassword.classList.remove("is-valid");
        confirmpassword.classList.add("is-invalid");
        formValid = false;
    } else {
        confirmpassword.classList.remove("is-invalid");
        confirmpassword.classList.add("is-valid");
        formValid = true;
    }
   
}
var btnregister = document.getElementById("submit")
btnregister.addEventListener("click" , register)
