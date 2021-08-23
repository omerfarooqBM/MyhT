let allcarts = [];

let carts = localStorage.getItem('carts');

if(carts != null){
    allcarts = JSON.parse(carts);
 
}

let values = document.getElementById('cartProducts');


for (let i=0;i<allcarts.length;i++){
    values.innerHTML += `
        <tr class= "mt-4">
    <td>${allcarts[i].name}</td>
    <td>${allcarts[i].price}</td>
     <td> pending.... </td> 
     </tr>`
}

var final = 0;
for (let i=0;i<allcarts.length;i++){
 result = parseInt(allcarts[i].price);
 final = result + final;
}
let price = document.getElementById('price');
price.innerHTML = `Rs: ${final}`


let remove = ()=>{
    localStorage.removeItem('carts');
    location.reload();
}

let buy = ()=>{
    for(let i =0;i<allcarts.length;i++){
      let obj = {
          userName : localStorage.getItem('localName'),
          DeviceName : allcarts[i].name,
          Price : allcarts[i].price,
          Total : final        
      }    
      var key = Math.random()*10000;
         firebase.database().ref('UserOrder'+key.toFixed()).push(obj);

}
localStorage.removeItem('carts');
alert('Your Order will be delivered with in 1 hour.\nThank You')


setTimeout(function(){
    window.location.href = 'cart.html'
  },3000)

}

let webStore = document.getElementById('webStore');
webStore.innerHTML = `Welcome ${localStorage.getItem('localName')}`


