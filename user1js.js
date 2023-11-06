const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let block = document.getElementById("karta");
let productsArray = [];
let link = 'https://my-json-server.typicode.com/Jocutagava/marketplace';
let xhr = new XMLHttpRequest();

xhr.open('GET', `${link}/users/${id} `);
xhr.responseType = 'json';
xhr.onload = function(){ 
    let answer = xhr.response;
    block.innerHTML = `
    <div class="visitka">
        <h1 class="visitkName">${answer.name}</h1>
        <h3>${answer.sirname}</h3>
        <img class="profPicture" src="${answer.photo_url}" alt="">
        <p>Ballance:${answer.ballance}</p>
    </div>
    
 `
}
xhr.send();
/* */

let prod = document.getElementById("prod")
let xhm = new XMLHttpRequest();
xhm.open('GET', `${link}/products?author_id=${id}`);
xhm.responseType = 'json';
xhm.onload = function(){ 
    let antwort = xhm.response;
    antwort.forEach( a =>{
        prod.innerHTML += `
   <div class="seller-products">
        <div class="productOfSeller">
            <h1><b>${a.name}</b></h1>
            <img src="${a.photo_url}" alt="">
            <p><b>Price:</b>${a.price}</p>
            <p><b>Description</b>${a.description}</p>
        </div>
        
    
 `
    })
    
}

xhm.send();