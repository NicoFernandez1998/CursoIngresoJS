/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let precioTotal;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    precioTotal = precioUno + precioDos + precioTres;

    alert(precioTotal);

}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let precioPromedio;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    precioPromedio = (precioUno + precioDos + precioTres) / 3;

    alert(precioPromedio);
	
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let precioTotal;
    let Iva;
    let precioFinal;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    precioTotal = precioUno + precioDos + precioTres;

    Iva = precioTotal * 25 / 100;

    precioFinal = precioTotal + Iva;

    alert(precioFinal);
}