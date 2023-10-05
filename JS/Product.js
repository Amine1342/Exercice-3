var products = JSON.parse(localStorage.getItem("products")) || [] /// get element from localstorage
function loadproduct() {
    var body = document.getElementById("tables")

    // Afficher les produits avec la fonction map //
    products.map((product , index) => {
        body.innerHTML += `
          <tr> 
          <td>${product.nom} </td>
          <td>${product.description}</td>
          <td>${product.reference}</td>
          <td>${product.price}</td>
          <td>${product.quantity}</td>
          <td><button class="btn btn-danger" onClick="supprimer(${index})">Supprimer</button> 
               <button
          type="button"
          Onclick="getdata(${index})"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Update
        </button>
        </td>
          `
    })

}
loadproduct()

// Supprimer un article // 
function supprimer(index){
    console.log(index);
    products.splice(index , 1)
    localStorage.setItem("products" , JSON.stringify(products))
    location.reload()
}
 

var nom = document.getElementById("nom");
var description = document.getElementById("description");
var reference = document.getElementById("reference");
var price = document.getElementById("price");
var quantity = document.getElementById("quantity");

// Ajouter un article //
var position=0;
function getdata(index){
    console.log(index);
nom.value = products[index].nom
description.value = products[index].description
reference.value = products[index].reference
price.value = products[index].price
quantity.value = products[index].quantity
position = index
}

// Modifier un article //
function updatedata() {
   
    var product = {
        nom: nom.value,
        description: description.value,
        reference: reference.value,
        price: price.value,
        quantity: quantity.value,
    };
    products.splice(position , 1 , product) // modifier un élément avec splice //
    localStorage.setItem("products" , JSON.stringify(products)) // modifier le localstorage
    location.reload() // recharger la page //
}