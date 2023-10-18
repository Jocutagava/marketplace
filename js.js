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
let link = 'https://github.com/Jocutagava'
let xhr = new XMLHttpRequest();
xhr.open('GET', link)
xhr.responseType = 'json';
xhr.send();
xhr.onload = function(){
   console.log(xhr.responce)
}

