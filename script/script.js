
  function saludar(usuario) {
    return console.log(`Hola ${usuario} ¿como estas?`);
  }
  
  function iniciarPedido() {
    let nombre = prompt("Bienvenido/a Pizzeria Juan Carlo ¿Cual es tu nombre?");
  
    saludar(nombre);
  
    let pizzasApedir = parseInt(
      prompt("Ingresa la cantidad de pizzas que va a encargar")
    );
  
    if (parseInt(pizzasApedir) === 1) {
      console.log(`Tu orden es de ${pizzasApedir} Pizzas.`);
    } else if (parseInt(pizzasApedir)) {
      console.log(`Tu orden es de ${pizzasApedir} Pizzas.`);
    } else {
      while (!parseInt(pizzasApedir)) {
        pizzasApedir = parseInt(
          prompt(
            "Debes ingresar un numero valido. Vuelve a ingresar el numero de pizzas que desea encargar."
          )
        );
      }
      if (parseInt(pizzasApedir) === 1) {
        console.log(`Tu orden es de ${pizzasApedir} Pizzas.`);
      } else {
        console.log(`Tu orden es de ${pizzasApedir} Pizzas.`);
      }
    }

    let precioPizzas = pizzasApedir * 1000;
    const ENVIO = precioPizzas * 0.15;
    let precioTotal = precioPizzas + ENVIO;
  
    alert(
      `El costo de ENVIO de tu pedido es de un 15%($${ENVIO}) del precio total de la compra. El precio total de tu pedido es de $${precioTotal}`
    );
    console.log(`El costo de tu pedido es de $${precioTotal}.`);
  
    for (pizzasApedir; pizzasApedir > 0; pizzasApedir--) {
      let gusto = prompt("Ingresa el sabor a encargar (muzzarella, tapa arterias,napolitana):");
      if (
        gusto.toLowerCase() === "muzzarella" ||
        gusto.toLowerCase() === "tapa arterias" ||
        gusto.toLowerCase() === "napolitana"
      ) {
        console.log(gusto);
      } else {
        while (
          gusto.toLowerCase() != "muzzarella" &&
          gusto.toLowerCase() != "tapa arterias" &&
          gusto.toLowerCase() != "napolitana"
        ) {
          gusto = prompt(
            "Elegir un sabor disponible. Ingresa el sabor a encargar (muzzarella, tapa arterias, napolitana):"
          );
        }
        console.log(gusto);
      }
    }
  
    alert(`TU PEDIDO HA SIDO ENVIADO CON EXITO. GRACIAS POR ELEGIRNOS!!!`);
  }


  alert(
    'Abrir "console" antes de empezar tu pedido. Para realizar tu pedido hace click en "Quiero hacer un pedido".'
  );

  let iniciarOrden=document.getElementById("iniciarOrden");
  iniciarOrden.onclick= iniciarPedido;

  class Producto {
    constructor(id, nombre, precio,) {
      this.id = id;
      this.nombre = nombre.toUpperCase();
      this.precio = parseFloat(precio);
    }

  sumaIva() {
    this.precio = `$${this.precio * 1.21}`;
    console.log(`al precio se le incluyo el IVA`);
  }
  descuentoDiez() {
    this.precio = `$${this.precio * 0.9}`;
    console.log(`felicitaciones se aplicó el descuento conseguido`);
  }
}

const producto0 = new Producto(0, `La gran Muzarella`, 1500,);
const producto1 = new Producto(1, `La gran tapa arterias`, 1900,);
const producto2 = new Producto(2, `La especial de la casa`, 1800,);
const producto3 = new Producto(3, `Napolitana sutil`, 1600,);


const productos = [
  producto0,
  producto1,
  producto2,
  producto3,
];

let btnCarrito=document.getElementById("btnCarrito");
btnCarrito.onclick= iniciar;
let btnCarrito1=document.getElementById("btnCarrito1");
btnCarrito1.onclick= iniciar;
let btnCarrito2=document.getElementById("btnCarrito2");
btnCarrito2.onclick= iniciar;
let btnCarrito3=document.getElementById("btnCarrito3");
btnCarrito3.onclick= iniciar;

function iniciar(){
    let listaProductos = `Lista de productos\n`;
    for (e of productos){
      listaProductos += `${e.id} - ${e.nombre} - $ ${e.precio}\n`;}

  let seleccionProductos = parseInt(prompt(`Ingrese el numero de la pizza que desea\n${listaProductos}`));
    if (isNaN(seleccionProductos)){
      seleccionProductos = prompt(`Ingresa el numero dije`);
    }

    const eligeProductos  = productos.find(e => e.id === seleccionProductos);
    alert(`Usted selecciono la pizza: ${eligeProductos.nombre} por tan solo  ${eligeProductos.precio} iva icluido`);
  }