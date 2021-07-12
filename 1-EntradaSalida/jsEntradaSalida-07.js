/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declaracion de variables
  let numero1;
  let numero2;
  let suma;

  //levanto los datos de las cajas de texto
  numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
  numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

  //realizo la operacion
  suma = numero1 + numero2;

  //muestro el resultado
  alert("La suma es " + suma);	
}

function restar()
{
	
	let numero1;
	let numero2;
	let resta;
  
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
  
	
	resta = numero1 - numero2;
  
	
	alert("La resta es " + resta);	
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let multi;
  
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
  
	
	multi = numero1 * numero2;
  
	
	alert("La multiplicacion es " + multi);	
}

function dividir()
{
	let numero1;
	let numero2;
	let division;
  
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
  

	division = numero1 / numero2;
  
	
	alert("La division es " + division);	
}

