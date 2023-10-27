const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let block = document.getElementById("main-container");
let productsArray = [];
let link = 'https://my-json-server.typicode.com/Jocutagava/marketplace';
let xhr = new XMLHttpRequest();

xhr.open('GET', `${link}/users/${id} `);
xhr.responseType = 'json';
xhr.onload = function(){ 
    let answer = xhr.response;
    block.innerHTML = `
    <div class="visitka">
        <h1>${answer.name}</h1>
        <h3>${answer.sirname}</h3>
        <img src="${answer.photo_url}" alt="">
        <p>Ballance:${answer.ballance}</p>
    </div>
    
 `
}
xhr.send();
/* <div class="seller-products">
        <div class="productOfSeller">
            <h1><b></b></h1>
            <img src="" alt="">
            <p><b></b></p>
            <p><b></b></p>
        </div>
        <div class="productOfSeller">
            <h1><b></b></h1>
            <img src="" alt="">
            <p><b></b></p>
            <p><b></b></p>
        </div>
    </div> */