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
let main = document.getElementById("main");
let productsArray = [];
let link = 'https://my-json-server.typicode.com/Jocutagava/marketplace';
let xhr = new XMLHttpRequest();

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
    <p class="product-price">Price:${p.price}</p>
    <p class="product-description">${p.description}</p>
    <a href="">Seller profile</a>
    <button>Buy</button>
    `;
    main.append(pElem);
 })
}
xhr.send();



