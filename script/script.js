
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