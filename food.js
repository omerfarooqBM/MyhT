
  let change =() =>{
    window.location.href = 'food.html'
}


let products = [
    {
        name: "Burger",
        price: 200,
        image : "img/pizza.png"
    },
    {
        name: "Hot Dogs",
        price: 300,
        image : "img/Burger.png"
    },
    {
        name: "Fresh Meat",
        price: 1000,
        image : "img/meat.png"
    },

    
   
    
]



let main = document.getElementById('products');

for(var i = 0; i < products.length; i++){
    main.innerHTML += `  
    <div class="card card-bo mt-3 mb-4" >
    <img src="${products[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title" id="productName">${products[i].name}</h5>
        <p class="card-text" id="productPrice">Price = Rs: ${products[i].price}</p>
    <button href="#" id="btn-dis" class="btn btn-warning btn-dis" onclick='addToCart("${products[i].name}","${products[i].price}","${products[i].image}")'>BUY</button>
    </div>
</div>  `

}

let allCarts = [];
let carts = localStorage.getItem('carts')

if(carts !== null){
   allCarts = JSON.parse(carts)
   let cart_badge = document.getElementById('cart-badge');
   cart_badge.innerHTML = allCarts.length

   
}



function addToCart(name,price,image){
  
    
 let cart = {
        name,
        price,
        image
    }
       
    allCarts.push(cart)
    localStorage.setItem('carts',JSON.stringify(allCarts))
    let cart_badge = document.getElementById('cart-badge');
    cart_badge.innerHTML = allCarts.length;

}

  let webStore = document.getElementById('webStore');
  webStore.innerHTML = `Welcome ${localStorage.getItem('localName')}`

logout=()=>{
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}