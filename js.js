// $(document).ready(function(){

//   $.ajax('https://my-json-server.typicode.com/Jocutagava/marketplace/main/db.json',{
//      dataType:'json',
//      success:function(result){
//         console.log(result)
//      },
    
//      error:function(xhr){
//         console.log(xhr.statusText)
//      }


//   })
   
// })
let cartProducts = document.getElementById("cart-products")
let cartButton = document.getElementById("but")
let main = document.getElementById("main");
let productsArray = [];
let link = 'https://my-json-server.typicode.com/Jocutagava/marketplace';
let xhr = new XMLHttpRequest();
let cart = [];
if(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"))
    drawCart();
}

function cartClick(){
    cartProducts.classList.toggle("hide");
}

xhr.open('GET', link + "/products");
xhr.responseType = 'json';
xhr.onload = function(){
 let products = xhr.response;
 main.innerHTML = null;
 products.forEach(p => {
    productsArray.push(p);
    let pElem = document.createElement('div');
    pElem.classList.add('product');
    pElem.innerHTML = 
    `
    <h2 class="product-name">${p.name}</h2>
    <img src="${p.photo_url}" alt="" class="product-photo">
    <p class="product-price"><b>Price:</b>${p.price}</p>
    <p class="product-description"><b>Description:</b>${p.description}</p>
    <a href="user1.html?id=${p.author_id}">Seller profile</a>
    <br>
    <button class="but" onclick="addProductToCart(${p.id})">Buy</button>
    `;
    main.append(pElem);
 })
}
xhr.send();

function addProductToCart(id){
    let product = productsArray.find(function(p){
        return p.id == id; 

    })
    cart.push(product);
    drawCart();
    localStorage.setItem("cart", JSON.stringify(cart))
}

function drawCart(){


    if(cart.length === 0) return cartProducts.innerHTML = "cart is empty";
    cartProducts.innerHTML = null;
    let sum = 0;
    cart.forEach( a => {
      cartProducts.innerHTML +=
       `

       <div class="cartItem"><img src="${a.photo_url}" alt=""> <p>${a.name}</p>|<p>${a.price}</p></div>
       <hr>
       
       `
       sum += a.price;


    });
    cartProducts.innerHTML += 
    `
    <p> Total Price:${sum}$</p>
    <button onclick="buyAll()"> Buy all</button>
    `;
}



    function buyAll() {

        cart = [];
    
        cartProducts.innerHTML = 'Money was withdrawn from your credit card';
    
        localStorage.setItem("cart", '[]');
    
    }


