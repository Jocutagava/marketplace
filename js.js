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
let main = document.getElementById("main")
let link = 'https://my-json-server.typicode.com/Jocutagava/marketplace/db'
let xhr = new XMLHttpRequest();
xhr.open('GET', link)
xhr.responseType = 'json';

xhr.onload = function(){



   draw(xhr.response)
}
xhr.send();



function draw (a){
    main.innerHTML = 
    `
    <div id="product1">
    <h2>${a.products[0].name}</h2>
    <img src="${a.products[0].photo_url}" alt="">
    <p><b>Price</b>:${a.products[0].price}</p>
    <p><b>Description</b>:${a.products[0].description}</p>
    <br>
    <a href="">Seller profile</a>
    <br>
    <button id="but"><b>Buy</b></button>
    </div>

    <div id="product2"> 
    <h2>${a.products[1].name}</h2>
    <img src="${a.products[1].photo_url}" alt="">
    <p><b>Price</b>:${a.products[1].price}</p>
    <p><b>Description</b>:${a.products[1].description}</p>
    <br>
    <a href="">Seller profile</a>
    <br>
    <button id="but"><b>Buy</b></button>
    </div>

    <div id="product3">
    <h2>${a.products[2].name}</h2>
    <img src="${a.products[2].photo_url}" alt="">
    <p><b>Price</b>:${a.products[2].price}</p>
    <p><b>Description</b>:${a.products[2].description}</p>
    <br>
    <a href="">Seller profile</a>
    <br>
    <button id="but"><b>Buy</b></button>
    </div>

    `
}
