function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	
	if ( edad < 13 || edad > 17) {
		alert("No adolescente");
	}
	
	
	//if(!(edad >= 13 && edad <= 17)){ negando el ejercicio anterior
	//	alert("No adolescente");
	

}//FIN DE LA FUNCIÓN