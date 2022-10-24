
alert("Bienvenido a ' By Daiana Mancuso' ! Deleitese con nuestros productos!")

let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")
console.log("Bienvenido " + nombre + " " + apellido + " !")


producto = prompt("ingrese el producto que quiera comprar. Cuando termine, ponga 'esc'");
precio = parseFloat(prompt("ingrese el precio del producto"));
descuento_porcentaje = 0;
cantidad=1;

console.log (producto + " " + "$ " + precio);
console.log(cantidad);

let precio_acumulador = 0 + precio;

// Ciclo condicional para que siga pidiendo el ingreso de productos mientras se cumpla la condición
while(producto != ("esc")){

    ingresar_productos = prompt(" Continue con el ingreso de los demás productos. Cuando termine, ponga 'esc'. ")

    if (ingresar_productos !=("esc")){

        precio2 = parseFloat(prompt("Ingrese el precio del producto a comprar:"));

        console.log(ingresar_productos + " $" + precio2 );

        precio_acumulador = precio_acumulador +precio2;

        console.log("Subtotal: $" + precio_acumulador)

        cantidad = cantidad + 1;

        console.log(cantidad)

        // cuando el usuario escribe esc, el ciclo se corta
    } else if (ingresar_productos == "esc"){
        alert("Ingresó 'esc', continúe para pagar.")
        break;
    }
}

console.log("Usted comprará: " + cantidad + "  productos.")
console.log ("Precio total: $" + precio_acumulador)

// Funcion para que aplique un 10% de descuento si compran mas de 3 productos
function aplicar_descuento (cantidad){
    if (cantidad > 3){
        descuento_porcentaje = (precio_acumulador*10)/100;
        descuento = precio_acumulador - descuento_porcentaje

        console.log("total a abonar con descuento por cantidad: $" + descuento);
    } else if (cantidad <3){
        console.log("Total a abonar: $" + precio_acumulador)
    }

}

aplicar_descuento (cantidad);

// Uso de switch para aplicar (o no) descuento según como elija pagar el cliente
let forma_pago_cliente = parseFloat(prompt(" Cómo abonará? (1) efectivo (2) tarjeta?"));

switch(forma_pago_cliente){
    case 1:
        let descuento2_porcentaje = (precio_acumulador*10)/100;
        let descuento2 = precio_acumulador - descuento2_porcentaje;
        console.log("Usted abonará $" + descuento2 + "  con descuento por pago en efectivo")
        break;
    case 2:
        console.log("Usted debe abonar $" + precio_acumulador)
}


