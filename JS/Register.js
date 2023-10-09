// Ajouter un utilisateur //
function register(e) {
    // Empecher le refresh de la page en cliquant sur le bouton //
    e.preventDefault();

    // Récupérer les valeurs des inputs //
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prénom");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmpassword = document.getElementById("confirm");
    var formValid = true;

    // Vérifier les valeurs des inputs //
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
    var user = {
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        password: password.value,
    }

    // Ajouter un utilisateur au localStorage //
    if (formValid) {
        var users = JSON.parse(localStorage.getItem("users")) || [] /// get element from localstorage
        users.push(user) ///add dans le tableau
        localStorage.setItem("users", JSON.stringify(users)) //add dans localstorage
        window.location.href = "login.html"
    }
    else {
        alert('vérifier donnée')
    }
}

// Ajouter un utilisateur avec le bouton //
var btnregister = document.getElementById("submit")
btnregister.addEventListener("click", register)


