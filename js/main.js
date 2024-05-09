function sumarProductos(precioUnitario, cantidadDeseada){
    let totalGastado = precioUnitario * cantidadDeseada;
    return totalGastado;
}

let precio = 20;
let cantidad = 2;
let totalCompra = sumarProductos(precio, cantidad);
console.log("El total gastado en el producto es: $" + totalCompra);