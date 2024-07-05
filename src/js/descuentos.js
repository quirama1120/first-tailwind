function precioConDescuento (precio, descuento) {
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento)/100;
    return precioConDescuento
}
// descuento sin cupones
 function calcularDescuento () {
 const precio = document.getElementById("precio");
 const valuePrecio = parseInt(precio.value);
 const descuento = document.getElementById("descuento");
 const valueDescuento = descuento.value;
 const resultado = precioConDescuento (valuePrecio, valueDescuento)
 document.getElementById("result").innerHTML=resultado;
 }
// descuento con cupones
 const descuentos = [
     "navidad",
     "pascua",
     "cumpleaños",
     "semana Santa",
     "black Friday",
 ]
 function calcularDescuentoCupon () {
     const precio = document.getElementById("precio");
     const valuePrecio = parseInt(precio.value);
     const descuento = document.getElementById("descuentoCupon");
     const valueDescuento = descuento.value;
    
     let descuentoAplicado;
     if(valueDescuento.toLowerCase() === descuentos[0].toLowerCase()) {
         descuentoAplicado = 10
     } else if (valueDescuento.toLowerCase() === descuentos[1].toLowerCase()) {
         descuentoAplicado = 20
     } else if (valueDescuento.toLowerCase() === descuentos[2].toLowerCase()) {
         descuentoAplicado = 30
     } else if (valueDescuento.toLowerCase() === descuentos[3].toLowerCase()) {
         descuentoAplicado = 40
     } else if (valueDescuento.toLowerCase() === descuentos[4].toLowerCase()) {
         descuentoAplicado = 50
     } 
     const resultado = precioConDescuento (valuePrecio, descuentoAplicado)
     document.getElementById("result").innerHTML=resultado;
 }