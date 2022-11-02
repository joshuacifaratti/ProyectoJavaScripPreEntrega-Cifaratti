
const carrito = [];
let contenedor = document.getElementById("misprods");

function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
            <div class="card row row-col-2 w-25 g-4 p-3 m-3">
                <img src=${producto.img} class="cardimg card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title">${producto.id}</h2>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id='btn${producto.id}' class="btn-card">Comprar</button>
                </div>
            </div>   
        `;
    }

    //EVENTOS
    productos.forEach((producto)=>{
        
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    });
}

renderizarProductos();

function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    alert("Producto "+productoAComprar.nombre+" agregado al carro!");
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoAComprar.id}</td>
            <td>${productoAComprar.nombre}</td>
            <td>${productoAComprar.precio}</td>
        </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
}