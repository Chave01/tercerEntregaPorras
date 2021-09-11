/*class Carrito {
 // anadir producto al carrito 

     comprarProducto (e) {

        e.preventDefault ();
        if (e.target.classList.contains ("btn")){

         const producto = e.target.parentElement.parentElement;

         this.leerDatosProducto (producto)
        
     }


}

   

class datos {
    constructor (producto , precio , id) {
       this.producto = producto ;
       this.precio = precio;
       this.id = id;

   }
}
   let dato = [ 
    {product:document.getElementsByClassName ("ptexto")},
       {coste: document.getElementsByClassName ("cost")},
       {iden: document.querySelector("data-id")}

   
]

const listProd []


// Guardar mi info de productos en el storage
localStorage.setItem ("Nombre", JSON.stringify(dato))

let guardado = localStorage.getItem ("Nombre");

let agregarGuardado= JSON.parse(localStorage.getItem ("guardado"))
console.log(dato);
*/ 





//aca es el posta 


const clickButton = document.querySelectorAll (".btn")
const tbody = document.getElementById ("tablaItem")
const total = document.getElementById("total")
//const itemName = document.querySelector(".ptexto").textContent;
// const itemPrecio = document.querySelector (".cost").textContent;



let carrito =[]


clickButton.forEach (btn => {
  btn.addEventListener ("click", addToCart) 
  

 })


function addToCart (e) {
 const button = e.target 
 const item = button.closest (".divfoto")
 const itemName = item.querySelector(".ptexto").textContent;
 const itemPrice = item.querySelector (".cost").textContent;
 




 const newItem = {
    title:itemName,
    precio:itemPrice,

}

addItemCarrito (newItem);

}

function addItemCarrito (newItem) {

    carrito.push (newItem)
    renderCarrito ()
    let ObjtoJsonbox = JSON.stringify (carrito);
   localStorage.setItem (`carrito`,ObjtoJsonbox)
}
   // let ObjtoJsonbox = JSON.stringify (carrito);
   // localStorage.setItem (`carrito`,ObjtoJsonbox)
   // saveData ()
    

   function renderCarrito () { 
    const row = document.createElement ("tr")
    tbody.innerHTML = ``
    //let agregarGuardado= JSON.parse(localStorage.getItem ("carrito"))
    carrito.forEach (item => {

       
        tbody.innerHTML  += `
     
       <tr>
          <td>${item.title }</td>
          <td>${item.precio}</td>
         
      </tr>
     
`
 
   tbody.appendChild (row) 

})
}


const precioTotal =() => {    
    //let agregarGuardado= JSON.parse(localStorage.getItem ("carrito"))
 
    let calculo = 0 ;
    carrito.forEach (item => {
    
        calculo += calculo + item.precio

     })
    
     total.textContent = calculo
    }
    precioTotal ()
  


  /*  // count total amount
function countCartTotal() {
   let initialCount = 0;
   cart.forEach(cartItem => {
     initialCount += cartItem.quantity * cartItem.price;
   });
   document.querySelector(
     '[data-action="CHECKOUT"]'
   ).textContent = `Pay $${initialCount}`;
 }
 
 function saveCart() {
   localStorage.setItem("cart", JSON.stringify(cart));
   countCartTotal();
 }

 
 const imprimirCarrito = () => {
  let agregarGuardado= JSON.parse(localStorage.getItem ("agregaritem"))
  agregarGuardado.forEach (e => {
        agregarItemID.innerHTML += `
        <div class = d-flex>
          <p> ${e.producto} <br></p>
          <p> ${e.precio} <br> </p>
      </div>
      `
     })
  }






 const renderListado = () => { 


 <tr>
 <td>John</td>
 <td>Doe</td>
 <td>john@example.com</td>
</tr>
 


return carrito.forEach (e => {

const TR = document.createElement ("tr");
const nameItemTD = document.createElement ("td");

nameItemTD.textContent = itemName

const CostItemTD = document.createElement ("td");

CostItemTD.textContent =itemPrecio



TR.appendChild (nameItemTD);
TR.appendChild (CostItemTD);

agregarItem.appendChild (TR);
})

}
*/
