// Ajouter un produit //
function addProduct(e) {
    e.preventDefault();

    var nom = document.getElementById("nom");
    var description = document.getElementById("description");
    var reference = document.getElementById("reference");
    var price = document.getElementById("price");
    var quantity = document.getElementById("quantity");
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

    if (description.value == "") {
        description.classList.remove("is-valid");
        description.classList.add("is-invalid");
        formValid = false;
    } else {
        description.classList.remove("is-invalid");
        description.classList.add("is-valid");
        formValid = true;
    }

    if (reference.value == "") {
        reference.classList.remove("is-valid");
        reference.classList.add("is-invalid");
        formValid = false;
    } else {
        reference.classList.remove("is-invalid");
        reference.classList.add("is-valid");
        formValid = true;
    }

    if (price.value == "") {
        price.classList.remove("is-valid");
        price.classList.add("is-invalid");
        formValid = false;
    } else {
        price.classList.remove("is-invalid");
        price.classList.add("is-valid");
        formValid = true;
    }

    if (quantity.value == "") {
        quantity.classList.remove("is-valid");
        quantity.classList.add("is-invalid");
        formValid = false;
    } else {
        quantity.classList.remove("is-invalid");
        quantity.classList.add("is-valid");
        formValid = true;
    }

    var product = {
        nom: nom.value,
        description: description.value,
        reference: reference.value,
        price: price.value,
        quantity: quantity.value,
    };

    if (formValid) {
        var products = JSON.parse(localStorage.getItem("products")) || []; /// get element from localstorage
        products.push(product); ///add dans le tableau
        localStorage.setItem("products", JSON.stringify(products)); //add dans localstorage
        window.location.href = "login.html";
    } else {
        alert("vérifier donnée");
    }
}
var btnaddProduct = document.getElementById("submit");
btnaddProduct.addEventListener("click", addProduct);
