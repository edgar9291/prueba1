//Funcion de openQuestion Desarroollada por Kádima :3 ~(o.0)~
//Función inicial en esta solo pasa Id's de los elementos que contienen a cada atributo

function AgregarEventos(idElemento, idElementoContrario, idElementosPopUp,indicePop){
	var elemento = $('#'+idElemento);
	//Buscamos que se encuentren las clases
	$('#'+idElemento).bind("click",function (){
		var nombreClase = $("#"+idElemento).attr('class');
		var nombreClaseContrario = $("#"+idElementoContrario).attr('class');
		
		if (nombreClase.search("U1_RDC1_P11_Opcion_Inactiva") >= 0){
			$('#'+idElemento).bind("click",MostrarPopUP(idElementosPopUp,indicePop));
			if(nombreClaseContrario.search("U1_RDC1_P11_Opcion_Activa") >= 0){
				$("#" + idElementoContrario).removeClass("U1_RDC1_P11_Opcion_Activa");
				$("#" + idElementoContrario).addClass("U1_RDC1_P11_Opcion_Inactiva");
			}
			
			//console.log("Contiene nuestra clase: " + nombreClase.search("U1_RDC1_P11_Opcion_Inactiva"));
			$("#" + idElemento).removeClass("U1_RDC1_P11_Opcion_Inactiva");
			$("#" + idElemento).addClass("U1_RDC1_P11_Opcion_Activa");
						
		}
		else if(nombreClase.search("U1_RDC1_P11_Opcion_Inactiva") <0){
			//console.log("Ya no contiene clase: " + nombreClase.search("U1_RDC1_P11_Opcion_Inactiva"));
			$("#" + idElemento).removeClass("U1_RDC1_P11_Opcion_Activa");
			$("#" + idElemento).addClass("U1_RDC1_P11_Opcion_Inactiva");
		}
//		console.log("La clase es: " + nombreClase);
	});
	
}

function AgregarEventosDos(idElemento, idElementoContrario){
	var elemento = $('#'+idElemento);
	//Buscamos que se encuentren las clases
	$('#'+idElemento).bind("click",function (){
		var nombreClase = $("#"+idElemento).attr('class');
		var nombreClaseContrario = $("#"+idElementoContrario).attr('class');
		
		if (nombreClase.search("U1_RDC1_P11_Opcion_Inactiva") >= 0){
			//$('#'+idElemento).bind("click",MostrarPopUP());
			if(nombreClaseContrario.search("U1_RDC1_P11_Opcion_Activa") >= 0){
				$("#" + idElementoContrario).removeClass("U1_RDC1_P11_Opcion_Activa");
				$("#" + idElementoContrario).addClass("U1_RDC1_P11_Opcion_Inactiva");
			}
			
			//console.log("Contiene nuestra clase: " + nombreClase.search("U1_RDC1_P11_Opcion_Inactiva"));
			$("#" + idElemento).removeClass("U1_RDC1_P11_Opcion_Inactiva");
			$("#" + idElemento).addClass("U1_RDC1_P11_Opcion_Activa");
						
		}
		else if(nombreClase.search("U1_RDC1_P11_Opcion_Inactiva") <0){
			//console.log("Ya no contiene clase: " + nombreClase.search("U1_RDC1_P11_Opcion_Inactiva"));
			$("#" + idElemento).removeClass("U1_RDC1_P11_Opcion_Activa");
			$("#" + idElemento).addClass("U1_RDC1_P11_Opcion_Inactiva");
		}
//		console.log("La clase es: " + nombreClase);
	});
	
}

function OpenQuestion(divBotonFinalizar, divPrimerPopUp, divCategoriasFeedBak, divFeedBack, funcionFinal){
	//Inicio de función
	//console.log("iniciando función");
	var btnFin = $('#'+divBotonFinalizar);
	var popUP = $('#'+divPrimerPopUp);
	var categoriasFeedback = $('#'+divCategoriasFeedBak);
	var feedBack = $('#'+ divFeedBack);
	var arregloCategorias = [];
	
	arregloCategorias = categoriasFeedback.children();
	
	RevisarHermanos("U1_RDC1_P11_ResSi_id","U1_RDC1_P11_ResNo_id",divPrimerPopUp);	
	btnFin.bind("click",funcionFinal);
}
//Esta función se utiliza cuando se le da clic a los elementos
function RevisarHermanos(divLadoAfirmativo, divLadoNegativo, divPopUps){
	var positivo = $('#'+divLadoAfirmativo);
	var negativo = $('#'+divLadoNegativo);
	var arregloPositivas = [];
	var arregloNegativas = [];
	
	arregloNegativas = negativo.children();
	arregloPositivas = positivo.children();
	for(var i = 0; i < arregloNegativas.length; i++){
		//console.log(arregloNegativas[i].id);		
		AgregarEventos(arregloNegativas[i].id, arregloPositivas[i].id,divPopUps,i);
	}
	for(var ind = 0; ind < arregloNegativas.length; ind ++ ){
		AgregarEventosDos(arregloPositivas[ind].id, arregloNegativas[ind].id);
	}

}

function finalFuncion(){
	//Ejecución de función final
	console.log("Ejecución de función final");
}


function ModificacionDeClases(idElemento){
	var elemento = $("#"+idElemento);
	var claseElemento = elemento.attr('class');
	//console.log("la clase es: "  + claseElemento);
}

function MostrarPopUP(divPopUp,indicePopUp){	
	//Aquí manden a llamar su función de Pop Up
	var arregloDivPopUp = [];
	var popUpMpstrar;
	arregloDivPopUp = $("#"+divPopUp).children();
	console.log("Mostrar PopUp: " + arregloDivPopUp[indicePopUp].id + " indice: " + indicePopUp);
	popUpMpstrar = $('#'+ arregloDivPopUp[indicePopUp].id);
	popUpMpstrar.show();
	
}

function cerrarPopUp(elemento){
	var idElemento;
	var elementoJquery;
	var elementoCerrar;
	if(elemento.id != undefined){
		idElemento = elemento.id
		elementoJquery = $('#' + idElemento);
		elementoCerrar = $('#' + elementoJquery.parent().attr('id'));		
		console.log(elementoJquery.parent().attr('id'));
		elementoCerrar.hide();
	}	
}

OpenQuestion('U1_RDC1_P11_Boton_Finalizar','U1_RDC1_P11_Pop_Ups_id','U1_RDC1_P11_Categorias_Feedback_id','U1_RDC1_P11_Feedback_id',finalFuncion);
