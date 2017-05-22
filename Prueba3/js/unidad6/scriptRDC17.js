// JavaScript Document
//Script desarrollado por Kadima
var fun =undefined;
var fun2= undefined;
var nav_current;
var u6Rdc17Act0CargaBlink = false;
var u6Rdc17Act0CargaMensaje = false;
var u6Rdc17Act0IniciarActividad = false;
var u6Rdc17Act0IniciarActividadCero = false;
var u6RDC17BlinkAct1 = true;
var u6RDC17BlinkAct2 = false;
var u6RDC17PathImagen;
var u6RDC17ElementoTweet = null;
var u6Droppable= undefined;
var u6Draggable = undefined;
var u6Check = 0;
var u6Cont = 0;
var u6Aceptar = false;
var u6NombreBurbuja = null;
var u6Oportunity = 0;
var u6Regresando = false;


function U6_RDC17(){
	u6Rdc17Act0CargaBlink = true;
	u6Rdc17Act0CargaMensaje = true;
	u6Rdc17Act0IniciarActividad = true;
	fun = U6_RDC17;
	funDos = U6_RDC17;
	hide_Nav();
	nav_current = "U6_RDC17_P0"
	$("#U6_RDC17_ContenedorRdc17_id").show();
	var paginaUno = $('#U6_RDC17_P0');
	var actividadUno = $("#U6_RDC17_ACT0_P0_Actividad_Uno_id");
	if(u6Rdc17Act0IniciarActividad == true){
		////console.log("iniciando");
		paginaUno.show();
		U6_HabilitarMensajeTexto();
		blinkElement('U6_RDC17_ACT0_P0_BocinaUno_id',true);
		if(u6RDC17BlinkAct1 == true){
			blinkElement("U6_RDC17_ACT0_P0_Actividad_Uno_id",u6RDC17BlinkAct1);
			$('#U6_RDC17_ACT0_P0_Actividad_Dos_id').bind("click",U6_Act2_Uno);
			u6RDC17BlinkAct1 = false;
		}
		
		if(u6RDC17BlinkAct2 == true){
			blinkElement("U6_RDC17_ACT0_P0_Actividad_Dos_id",u6RDC17BlinkAct2);
			u6RDC17BlinkAct2 = false;
		}
		//$('#U6_RDC17_ACT0_P0_Actividad_Uno_id').bind("click",U6_ActUno);
	}	
}


function U6_ActUno(){
	//console.log("Estamos en la uno");
	blinkElement("forward_id",true);
	
	blinkElement('U6_RDC17_ACT0_P0_BocinaUno_id',false);
	blinkElement('U6_RDC17_ACT1_P1_Bocina_id',true);
	var paginaUno = $('#U6_RDC17_P0');
	var paginaDos = $("#U6_RDC17_ACT1_P1");
	nav_current = $("#U6_RDC17_ACT1_P1").attr('id');
	
	U6_RDC17_CreacionAudios("U6_RDC17_ACT0_P0_audioDos_id", "audio/unidad6/U6_RDC17_ACT0_speechTwo.mp3");
	show_Nav();
	fun=U6_ActDos;
	fun2=U6_RDC17;
	u6RDC17BlinkAct1 = false;
	u6Rdc17Act0CargaBlink = false;
	paginaUno.hide();
	paginaDos.show();	
	blinkElement("U6_RDC17_ACT0_P0_Actividad_Uno_id",u6RDC17BlinkAct1);
	blinkElement("U6_RDC17_ACT0_P0_Bocina_id",true);
	//$("#U6_RDC17_ACT1_P1_Bocina_id").bind("click",U6_ReproducirAudioBocinaDos);
	//U6_HabilitarBlinkConFuncion(u6Rdc17Act0CargaBlink,'U6_RDC17_ACT0_P0_Bocina_id');
	
}

function U6_ActDos(){
	////console.log("Estamos en la dos");
	blinkElement("forward_id",true);
	blinkElement('U6_RDC17_ACT1_P1_Bocina_id',false);
	
	blinkElement("U6_RDC17_ACT0_P0_Bocina_id",false);
	nav_current = $("#U6_RDC17_ACT1_P2").attr('id');
	show_Nav();
	fun=U6_ActTres;
	fun2=U6_ActUno;
}

function U6_ActTres(){
	////console.log("Estamos en la tres");
	blinkElement("forward_id",true);
	U6_RDC17_CreacionAudios("U6_RDC17_ACT0_P0_audioTres_id", "audio/unidad6/U6_RDC17_ACT0_speechThree.mp3");
	U6_HabilitarMensajeTexto();
	blinkElement("U6_RDC17_ACT0_P0_BocinaTres_id",true);
	nav_current = $("#U6_RDC17_ACT1_P3").attr('id');
	show_Nav();
	fun=U6_ActUno_Cuatro;
	fun2=U6_ActDos;
	u6RDC17BlinkAct2 = true;
}

function U6_ActUno_Cuatro(){
	u6Aceptar = false
	u6Cont = 0;
	u6NombreBurbuja = null;
	hide_Nav();
	var pregunta = "¿Según Brian Solís, ¿por qué las redes sociales son adictivas?";
	$("#U6_RDC17_ACT1_P4_CasillaPregunta_id").text(pregunta);
	fun=U6_ActUno_Cinco;
	fun2=U6_ActTres;
	$("#U6_RDC17_ACT1_P4_CasillaRecepcion_id").droppable({
		accept:"#U6_RDC17_ACT1_P4_Burbuja_id0,#U6_RDC17_ACT1_P4_Burbuja_id1,#U6_RDC17_ACT1_P4_Burbuja_id2,#U6_RDC17_ACT1_P4_Burbuja_id3",
		drop: function (event, ui){
			u6Cont++;
			if(u6Cont > 1)
				u6Aceptar = false;
			else
				u6Aceptar = true;
			u6NombreBurbuja = ui.draggable.attr('id');
			//ui.draggable.remove();
			
		}
		
	});
	var respuestas = ["Porque el usuario<br/> es el centro de la<br/> experiencia","Porque los usuarios<br/> pasan muchas horas <br/>conectados.","Porque los usuarios <br/>prefieren estar conectados<br/> a estar con amigos.","Porque los usuarios<br/> no duermen ni comen<br/> por estar conectados. "];
	
	var clases = ["U6_RDC17_ACT1_P4_Burbuja_0","U6_RDC17_ACT1_P4_Burbuja_1","U6_RDC17_ACT1_P4_Burbuja_2","U6_RDC17_ACT1_P4_Burbuja_3"];
	U6_IniciarCreacionBurbujas(respuestas,4);
	clases=_.shuffle(clases);
	for (var i = 0; i <4 ; i++) {	
		$("#U6_RDC17_ACT1_P4_Burbuja_id"+i).removeAttr('style');
		
	};
	
	
	for (var i = 0; i <4; i++) {
		
		$("#U6_RDC17_ACT1_P4_Burbuja_id"+i).removeClass();
		$("#U6_RDC17_ACT1_P4_Burbuja_id"+i).addClass(clases[i]);
		
	};
	
	for (var i = 0; i < 4; i++) {
		
		$("#U6_RDC17_ACT1_P4_Burbuja_id"+i).draggable({
			revert:"invalid",
			containment : "#U6_RDC17_ACT1_P4_ContenedorJuego_id"
		});
	};
	
	
}

function U6_ActUno_Cinco(){
	u6Aceptar = false
	u6Cont = 0;
	u6NombreBurbuja = null;
	hide_Nav();
	var pregunta = "El estudio realizado por la Universidad de Maryland y la encuesta de la empresa tecnológica TeleNav descubrieron que los usuarios de las redes sociales:";
	$("#U6_RDC17_ACT1_P5_CasillaPregunta_id").text(pregunta);
	fun=U6_ActUno_Seis;
	fun2=U6_ActUno_Cuatro;
	$("#U6_RDC17_ACT1_P5_CasillaRecepcion_id").droppable({
		accept:"#U6_RDC17_ACT1_P5_Burbuja_id0,#U6_RDC17_ACT1_P5_Burbuja_id1,#U6_RDC17_ACT1_P5_Burbuja_id2,#U6_RDC17_ACT1_P5_Burbuja_id3",
		drop: function (event, ui){
			u6Cont++;
			if(u6Cont > 1)
				u6Aceptar = false;
			else
				u6Aceptar = true;
			u6NombreBurbuja = ui.draggable.attr('id');
			//ui.draggable.remove();
			
		}
		
	});
	var respuestas = ["Presentan síntomas <br/> comunes a cualquier <br/> adicción.","Muestran rasgos de <br/>narcisismo patológico.","Se niegan a dejar<br/> de utilizar las <br/>redes sociales. ","No pudieron pasar<br/> 24 horas sin Internet."];
	var clases = ["U6_RDC17_ACT1_P4_Burbuja_0","U6_RDC17_ACT1_P4_Burbuja_1","U6_RDC17_ACT1_P4_Burbuja_2","U6_RDC17_ACT1_P4_Burbuja_3"];
	U6_IniciarCreacionBurbujas(respuestas,5);
	clases=_.shuffle(clases);
	for (var i = 0; i <4 ; i++) {	
		$("#U6_RDC17_ACT1_P5_Burbuja_id"+i).removeAttr('style');
		
	};
	
	
	for (var i = 0; i <4; i++) {
		
		$("#U6_RDC17_ACT1_P5_Burbuja_id"+i).removeClass();
		$("#U6_RDC17_ACT1_P5_Burbuja_id"+i).addClass(clases[i]);
		
	};
	
	for (var i = 0; i < 4; i++) {
		
		$("#U6_RDC17_ACT1_P5_Burbuja_id"+i).draggable({
			revert:"invalid",
			containment : "#U6_RDC17_ACT1_P5_ContenedorJuego_id"
		});
	};
	
	
}

function U6_ActUno_Seis(){
	u6Aceptar = false
	u6Cont = 0;
	u6NombreBurbuja = null;
	hide_Nav();
	var pregunta = "¿Qué propósito persigue el Día Nacional de la Desconexión?";
	$("#U6_RDC17_ACT1_P6_CasillaPregunta_id").text(pregunta);
	fun=U6_ActUno_Siete;
	fun2=U6_ActUno_Cinco;
	$("#U6_RDC17_ACT1_P6_CasillaRecepcion_id").droppable({
		accept:"#U6_RDC17_ACT1_P6_Burbuja_id0,#U6_RDC17_ACT1_P6_Burbuja_id1,#U6_RDC17_ACT1_P6_Burbuja_id2,#U6_RDC17_ACT1_P6_Burbuja_id3",
		drop: function (event, ui){
			u6Cont++;
			if(u6Cont > 1)
				u6Aceptar = false;
			else
				u6Aceptar = true;
			u6NombreBurbuja = ui.draggable.attr('id');
			//ui.draggable.remove();
			
		}
		
	});
	var respuestas = ["Promover el uso <br/>razonable y saludable <br/>de las redes sociales.","Prevenir las enfermedades <br/>sicológicas producidas <br/>por las redes sociales. ","Paralizar el uso <br/>de las redes sociales <br/>durante 24 horas.","Regular el uso <br/>de las redes sociales <br/>durante 24 horas. "];
	var clases = ["U6_RDC17_ACT1_P4_Burbuja_0","U6_RDC17_ACT1_P4_Burbuja_1","U6_RDC17_ACT1_P4_Burbuja_2","U6_RDC17_ACT1_P4_Burbuja_3"];
	U6_IniciarCreacionBurbujas(respuestas,6);
	clases=_.shuffle(clases);
	for (var i = 0; i <4 ; i++) {	
		$("#U6_RDC17_ACT1_P6_Burbuja_id"+i).removeAttr('style');
		
	};
	
	
	for (var i = 0; i <4; i++) {
		
		$("#U6_RDC17_ACT1_P6_Burbuja_id"+i).removeClass();
		$("#U6_RDC17_ACT1_P6_Burbuja_id"+i).addClass(clases[i]);
		
	};
	
	for (var i = 0; i < 4; i++) {
		
		$("#U6_RDC17_ACT1_P6_Burbuja_id"+i).draggable({
			revert:"invalid",
			containment : "#U6_RDC17_ACT1_P6_ContenedorJuego_id"
		});
	};
	
	
}

function U6_ActUno_Siete(){
	u6Aceptar = false
	u6Cont = 0;
	u6NombreBurbuja = null;
	hide_Nav();
	var pregunta = "Según la Universidad de Maryland, el empleo de las redes sociales:";
	$("#U6_RDC17_ACT1_P7_CasillaPregunta_id").text(pregunta);
	fun=U6_ActUno_Ocho;
	fun2=U6_ActUno_Seis;
	$("#U6_RDC17_ACT1_P7_CasillaRecepcion_id").droppable({
		accept:"#U6_RDC17_ACT1_P7_Burbuja_id0,#U6_RDC17_ACT1_P7_Burbuja_id1,#U6_RDC17_ACT1_P7_Burbuja_id2,#U6_RDC17_ACT1_P7_Burbuja_id3",
		drop: function (event, ui){
			u6Cont++;
			if(u6Cont > 1)
				u6Aceptar = false;
			else
				u6Aceptar = true;
			u6NombreBurbuja = ui.draggable.attr('id');
			//ui.draggable.remove();
			
		}
		
	});
	var respuestas = ["Contribuye a crear <br/>identidad. ","Facilita el alcanzar <br/>estatus social.","Permite adquirir <br/>conocimiento.","Ayuda a encontrar<br/> personas conocidas. "];
	var clases = ["U6_RDC17_ACT1_P4_Burbuja_0","U6_RDC17_ACT1_P4_Burbuja_1","U6_RDC17_ACT1_P4_Burbuja_2","U6_RDC17_ACT1_P4_Burbuja_3"];
	U6_IniciarCreacionBurbujas(respuestas,7);
	clases=_.shuffle(clases);
	for (var i = 0; i <4 ; i++) {	
		$("#U6_RDC17_ACT1_P7_Burbuja_id"+i).removeAttr('style');
		
	};
	
	
	for (var i = 0; i <4; i++) {
		
		$("#U6_RDC17_ACT1_P7_Burbuja_id"+i).removeClass();
		$("#U6_RDC17_ACT1_P7_Burbuja_id"+i).addClass(clases[i]);
		
	};
	
	for (var i = 0; i < 4; i++) {
		
		$("#U6_RDC17_ACT1_P7_Burbuja_id"+i).draggable({
			revert:"invalid",
			containment : "#U6_RDC17_ACT1_P7_ContenedorJuego_id"
		});
	};
	
	
}

function U6_ActUno_Ocho(){
	u6Aceptar = false
	u6Cont = 0;
	u6NombreBurbuja = null;
	hide_Nav();
	var pregunta = "¿Qué relación se establece en el texto entre la popularidad y la influencia en el mundo digital?";
	$("#U6_RDC17_ACT1_P8_CasillaPregunta_id").text(pregunta);
	fun=U6_ActUno_Nueve;
	fun2=U6_ActUno_Siete;
	$("#U6_RDC17_ACT1_P8_CasillaRecepcion_id").droppable({
		accept:"#U6_RDC17_ACT1_P8_Burbuja_id0,#U6_RDC17_ACT1_P8_Burbuja_id1,#U6_RDC17_ACT1_P8_Burbuja_id2,#U6_RDC17_ACT1_P8_Burbuja_id3",
		drop: function (event, ui){
			u6Cont++;
			if(u6Cont > 1)
				u6Aceptar = false;
			else
				u6Aceptar = true;
			u6NombreBurbuja = ui.draggable.attr('id');
			//ui.draggable.remove();
			
		}
		
	});
	var respuestas = ["Ser popular no <br/>garantiza el ser <br/>influyente.","Para ser popular<br/> es necesario ser <br/>influyente. ","Para ser influyente<br/> no es conveniente<br/> ser popular.","A mayor popularidad,<br/> menos influencia"];
	var clases = ["U6_RDC17_ACT1_P4_Burbuja_0","U6_RDC17_ACT1_P4_Burbuja_1","U6_RDC17_ACT1_P4_Burbuja_2","U6_RDC17_ACT1_P4_Burbuja_3"];
	U6_IniciarCreacionBurbujas(respuestas,8);
	clases=_.shuffle(clases);
	for (var i = 0; i <4 ; i++) {	
		$("#U6_RDC17_ACT1_P8_Burbuja_id"+i).removeAttr('style');
		
	};
	
	
	for (var i = 0; i <4; i++) {
		
		$("#U6_RDC17_ACT1_P8_Burbuja_id"+i).removeClass();
		$("#U6_RDC17_ACT1_P8_Burbuja_id"+i).addClass(clases[i]);
		
	};
	
	for (var i = 0; i < 4; i++) {
		
		$("#U6_RDC17_ACT1_P8_Burbuja_id"+i).draggable({
			revert:"invalid",
			containment : "#U6_RDC17_ACT1_P8_ContenedorJuego_id"
		});
	};
	
	
}

function U6_ActUno_Nueve(){
	console.log("Pantalla Nueve");
	U6_RDC17_CreacionAudios("U6_RDC17_ACT1_P9_AudioNue_id", "audio/unidad6/AudioNuevo.mp3");
	U6_ReproducirAudio("U6_RDC17_ACT0_P0_audio_whatsapp_id","U6_RDC17_ACT1_P9_Bocina_id");
	blinkElement("U6_RDC17_ACT1_P9_Bocina_id",true);
	show_Nav();
	fun=U6_ActUno_Diez;
	fun2=U6_ActUno_Ocho;
	u6RDC17BlinkAct2 = true;
}

function U6_ActUno_Diez(){
	blinkElement("forward_id",true);
	U6_title_RDC2_ACT_1_complete = true;
	show_Nav();
	fun=U6_RDC17;
	fun2=U6_ActUno_Nueve;
}

function U6_rdc17_cerrarpops(elemento){
	var div = $("#"+ elemento.id).hide();
}

function U6_ComprobarElementos(numero){
	//console.log("Comprobando");
	//console.log(u6Cont);
	//console.log(u6NombreBurbuja);
	//console.log(u6Aceptar);
	switch (numero){
		case 1: 
			if(u6Aceptar == true){
				if(u6NombreBurbuja == "U6_RDC17_ACT1_P4_Burbuja_id0"){
					////console.log("Correcto");
					$("#U6_RDC17_ACT1_P4_PopUpNoCorrecto_id").hide();
					$("#U6_RDC17_ACT1_P4_PopUpCorrecto_id").show();
					show_Nav();
					blinkElement("forward_id",true);
				}
				else{
					////console.log("Fallo el nombre");
					U6_ActUno_Cuatro();
					$("#U6_RDC17_ACT1_P4_PopUpCorrecto_id").hide();
					$("#U6_RDC17_ACT1_P4_PopUpNoCorrecto_id").show();
				}
			}
			else{
				////console.log("Hay más de uno");
				U6_ActUno_Cuatro();
				$("#U6_RDC17_ACT1_P4_PopUpCorrecto_id").hide();
				$("#U6_RDC17_ACT1_P4_PopUpNoCorrecto_id").show();
			}
		break;
		case 2: 
			if(u6Aceptar == true){
				if(u6NombreBurbuja == "U6_RDC17_ACT1_P5_Burbuja_id0"){
					////console.log("Correcto");
					$("#U6_RDC17_ACT1_P5_PopUpNoCorrecto_id").hide();
					$("#U6_RDC17_ACT1_P5_PopUpCorrecto_id").show();
					show_Nav();
					blinkElement("forward_id",true);
				}
				else{
					////console.log("Fallo el nombre");
					U6_ActUno_Cinco();
					$("#U6_RDC17_ACT1_P5_PopUpCorrecto_id").hide();
					$("#U6_RDC17_ACT1_P5_PopUpNoCorrecto_id").show();
				}
			}
			else{
				////console.log("Hay más de uno");
				$("#U6_RDC17_ACT1_P5_PopUpCorrecto_id").hide();
				$("#U6_RDC17_ACT1_P5_PopUpNoCorrecto_id").show();
				U6_ActUno_Cinco();
			}
		break;
		case 3: 
			if(u6Aceptar == true){
				if(u6NombreBurbuja == "U6_RDC17_ACT1_P6_Burbuja_id0"){
					////console.log("Correcto");
					$("#U6_RDC17_ACT1_P6_PopUpNoCorrecto_id").hide();
					$("#U6_RDC17_ACT1_P6_PopUpCorrecto_id").show();
					show_Nav();
					blinkElement("forward_id",true);
				}
				else{
					////console.log("Fallo el nombre");
					$("#U6_RDC17_ACT1_P6_PopUpCorrecto_id").hide();
					$("#U6_RDC17_ACT1_P6_PopUpNoCorrecto_id").show();
					U6_ActUno_Seis();
				}
			}
			else{
				////console.log("Hay más de uno");
				$("#U6_RDC17_ACT1_P6_PopUpCorrecto_id").hide();
				$("#U6_RDC17_ACT1_P6_PopUpNoCorrecto_id").show();
				U6_ActUno_Seis();
			}
		break;
		case 4: 
			if(u6Aceptar == true){
				if(u6NombreBurbuja == "U6_RDC17_ACT1_P7_Burbuja_id0"){
					////console.log("Correcto");
					$("#U6_RDC17_ACT1_P7_PopUpNoCorrecto_id").hide();
					$("#U6_RDC17_ACT1_P7_PopUpCorrecto_id").show();
					show_Nav();
					blinkElement("forward_id",true);
				}
				else{
					////console.log("Fallo el nombre");
					$("#U6_RDC17_ACT1_P7_PopUpCorrecto_id").hide();
					$("#U6_RDC17_ACT1_P7_PopUpNoCorrecto_id").show();
					U6_ActUno_Siete();
				}
			}
			else{
				////console.log("Hay más de uno");
				$("#U6_RDC17_ACT1_P7_PopUpCorrecto_id").hide();
				$("#U6_RDC17_ACT1_P7_PopUpNoCorrecto_id").show();
				U6_ActUno_Siete();
			}
		break;
		case 5: 
			if(u6Aceptar == true){
				if(u6NombreBurbuja == "U6_RDC17_ACT1_P8_Burbuja_id0"){
					////console.log("Correcto");
					$("#U6_RDC17_ACT1_P8_PopUpNoCorrecto_id").hide();
					$("#U6_RDC17_ACT1_P8_PopUpCorrecto_id").show();
					show_Nav();
					blinkElement("forward_id",true);
				}
				else{
					////console.log("Fallo el nombre");
					$("#U6_RDC17_ACT1_P8_PopUpCorrecto_id").hide();
					$("#U6_RDC17_ACT1_P8_PopUpNoCorrecto_id").show();
					U6_ActUno_Ocho();
				}
			}
			else{
				////console.log("Hay más de uno");
				$("#U6_RDC17_ACT1_P8_PopUpCorrecto_id").hide();
				$("#U6_RDC17_ACT1_P8_PopUpNoCorrecto_id").show();
				U6_ActUno_Ocho();
			}
		break;
	}
	
	
}

function U6_Act2_Uno(){
	//////console.log("Iniciando Actividad Dos Primera Pantalla");
	blinkElement("forward_id",true);
	fun=U6_Act2_Dos;
	fun2=U6_RDC17;
	U6_RDC17_CreacionAudios("U6_RDC17_ACT2_P1_audioUnoActDos_id", "audio/unidad6/U6_RDC17_ACT0_speechFour.mp3");
	U6_ReproducirAudio("U6_RDC17_ACT0_P0_audio_whatsapp_id","U6_RDC17_ACT2_P1_BocinaCuatro_id");
	blinkElement("U6_RDC17_ACT0_P0_BocinaTres_id",false);
	blinkElement("U6_RDC17_ACT2_P1_BocinaCuatro_id",true);
	nav_current = $("#U6_RDC17_ACT2_P1").attr('id');
	var paginaUno = $('#U6_RDC17_P0');
	var paginaDos = $("#U6_RDC17_ACT2_P1");
	paginaUno.hide();
	paginaDos.show();
	show_Nav();
}

function U6_Act2_Dos(){
	//////console.log("Iniciando Actividad Dos");
	blinkElement("forward_id",true);
	blinkElement("U6_RDC17_ACT2_P1_BocinaCuatro_id",false);
	nav_current = $("#U6_RDC17_ACT2_P2").attr('id');
	fun=U6_Act2_Tres;
	fun2=U6_Act2_Uno;
}

function U6_Act2_Tres(){
	//////console.log("Iniciando Actividad Tres");
	blinkElement("forward_id",true);
	U6_RDC17_CreacionAudios("U6_RDC17_ACT2_P1_audioTresActDos_id", "audio/unidad6/U6_RDC17_ACT0_speechFive.mp3");
	U6_ReproducirAudio("U6_RDC17_ACT0_P0_audio_whatsapp_id","U6_RDC17_ACT2_P2_BocinaCinco_id");
	blinkElement("U6_RDC17_ACT2_P2_BocinaCinco_id",true);
	nav_current = $("#U6_RDC17_ACT2_P3").attr('id');
	fun=U6_Act2_Cuatro;
	fun2=U6_Act2_Dos;
	
}

function U6_Act2_Cuatro(){
	hide_Nav();
	//blinkElement("forward_id",true);
	blinkElement("U6_RDC17_ACT2_P2_BocinaCinco_id",false);
	////console.log("Actividad dos pantalla 4");
	nav_current = $("#U6_RDC17_ACT2_P4").attr('id');
	$("#U6_RDC17_ACT2_P4_CajaTexto_id").attr("contenteditable","true");
	fun=U6_Act2_Cinco;
	fun2=U6_Act2_Tres;
	
	
}

function U6_Act2_Cinco(){
	U6_RDC17_CreacionAudios("U6_RDC17_ACT2_P5_audioCuatroActDos_id", "audio/unidad6/U6_RDC17_ACT0_speechSix.mp3");
	blinkElement("forward_id",true);
	U6_ReproducirAudio("U6_RDC17_ACT0_P0_audio_whatsapp_id","U6_RDC17_ACT2_P5_Bocina_id");
	blinkElement("U6_RDC17_ACT2_P5_Bocina_id",true);
	nav_current = $("#U6_RDC17_ACT2_P5").attr('id');
	fun=U6_Act2_Seis;
	fun2=U6_Act2_Cuatro;
	
}

function U6_Act2_Seis(){
	U6_title_RDC2_ACT_2_complete = true;
	U6_RDC17_CreacionAudios("U6_RDC17_ACT2_P6_audioCincoActDos_id", "audio/unidad6/U6_RDC17_ACT0_speechSeven.mp3");
	U6_ReproducirAudio("U6_RDC17_ACT0_P0_audio_whatsapp_id","U6_RDC17_ACT2_P6_Bocina_id");
	blinkElement("forward_id",true);
	blinkElement("U6_RDC17_ACT2_P5_Bocina_id",false);
	blinkElement("U6_RDC17_ACT2_P6_Bocina_id",true);
	fun=U6_RDC17;
	fun2=U6_Act2_Cinco;
	u6RDC17BlinkAct2 = false;
}

function U6_RDC17_CreacionAudios(idDeseado, fuente){
	////////console.log("creando audio: " + idDeseado + " " +  fuente);
	$('<audio/>', {
					'src' : fuente,
					'id'  : idDeseado 
				}).appendTo('#U6');
}

function U6_RDC17_CreacionDivs(destino){
	
	////////console.log("creando audio: " + idDeseado + " " +  fuente);
	var elemento = document.getElementById("U6_ImgTweet_id");
	if(elemento == null){
		$('<img/>', {
					'id' : 'U6_ImgTweet_id' ,
					'src' : '',
					'class': 'U6_RDC17_Imagen'
				}).appendTo('#' + destino);
				
	}
	
}

function U6_Reiniciar(){
	u6Rdc17Act0CargaBlink = false;
	u6Rdc17Act0CargaMensaje = false;
}

function U6_HabilitarBlinkConFuncion(habiltar,idObjeto){
	blinkElement(idObjeto,habiltar);
	$('#'+idObjeto).bind('click',U6_ReproducirAudioBocinaUno);
}
function U6_HabilitarBlinkConFuncionDos(habiltar,idObjeto){
	blinkElement(idObjeto,habiltar);
	////console.log("Audio: " + idObjeto);
	$('#'+idObjeto).bind('click',U6_ReproducirAudioBocinaDos);
}

function U6_HabilitarMensajeTexto(){
	U6_HabilitarElementos(u6Rdc17Act0CargaMensaje,'U6_RDC17_ACT0_P0_Mensaje_id');
	U6_ReproducirAudio('U6_RDC17_ACT0_P0_audio_whatsapp_id');
}

function U6_RDC17_ACT0_IR_ACT1(){
	
}

function U6_ReproducirAudio(idAudio, idElemento){
	var audioRecibido = document.getElementById(idAudio);
	if(idAudio == "U6_RDC17_ACT0_P0_audio_whatsapp_id"){
		if(audioRecibido != null)
			audioRecibido.currentTime = 0;
	}
	if(audioRecibido != null){
		if(audioRecibido.paused){
			audioRecibido.play();
			habilitar=false;
			blinkElement(idElemento,habilitar);
			if(document.getElementById("forward_id")!= null && nav_current != "U6_RDC17_P0"){
				blinkElement("forward_id",true);
			}
			
		}
		else{
			audioRecibido.pause();
		}
	}
	
}



function U6_ReproducirAudioBocinaDos(){
	
	////console.log("Reproduciendo Audio");
	var habilitar = false;
	var audioRecibido = document.getElementById('U6_RDC17_ACT0_P0_audioDos_id');
	if(audioRecibido.paused){
		audioRecibido.play();
		habilitar=false;
		blinkElement('U6_RDC17_ACT1_P1_Bocina_id',habilitar);
	}
	else{
		audioRecibido.pause();
		habilitar=true;
		blinkElement('U6_RDC17_ACT1_P1_Bocina_id',habilitar);
	}
	
}

function U6_ReproducirAudioBocinaUno(){
	
	var audioRecibido = document.getElementById('U6_RDC17_ACT0_P0_audioUno_id');
	if(audioRecibido.paused){
		audioRecibido.play();
		habilitar=false;
		blinkElement('U6_RDC17_ACT0_P0_Bocina_id',habilitar);
	}
	else{
		audioRecibido.pause();
		habilitar=true;
		blinkElement('U6_RDC17_ACT0_P0_Bocina_id',habilitar);
	}
	
}

function U6_HabilitarElementos(habilitar,idElemento){
	var elemento = $('#'+idElemento);
	if(habilitar == true){
		elemento.show();
		elemento.fadeOut(1,0);
		elemento.fadeIn(1000);
	}
	else{
		elemento.hide();
	}
	
}

function clickForward (fun) {
	
	var last =parseInt( nav_current.charAt(nav_current.length-1));
	last+=1;
	next = nav_current.replace(/.$/,last.toString());
	if($("#"+next).length){
		$("#"+nav_current).hide();
		nav_current = next;
		$("#"+nav_current).show();
		setTimeout(fun, 0);
	}else{
		$("#"+nav_current).hide();
		var n = nav_current.indexOf("ACT");
		var temp = nav_current.substring(0,n);
		next= temp + "P0";
		nav_current=next;
		$("#"+nav_current).show();
		hide_Nav();
		setTimeout(fun, 0);
	}
	
	
}

function clickBack (fun2) {

	var last =parseInt( nav_current.charAt(nav_current.length-1));
	last-=1;
	next = nav_current.replace(/.$/,last.toString());
	if($("#"+next).length){
		$("#"+nav_current).hide();
		nav_current = next;
		$("#"+nav_current).show();
		setTimeout(fun2, 0);
	}else{
		$("#"+nav_current).hide();
		var n = nav_current.indexOf("ACT");
		var temp = nav_current.substring(0,n);
		next= temp + "P0";
		nav_current=next;
		$("#"+nav_current).show();
		hide_Nav();
		setTimeout(fun2, 0);
	}
}



	function show_Nav () {
		$("#forward_id").show();
		$("#back_id").show();
	}
	function hide_Nav () {
		$("#forward_id").hide();
		$("#back_id").hide();
	}


$(document).ready(function(e) {
    //U6_RDC17();
	
	/*$("#forward_id").bind("click",function(){
			clickForward(fun);
		});*/
	/*$("#back_id").bind("click",function(){
			clickBack(fun2);
		});*/
		
	$('#U6_RDC17_ACT2_P4_InputFile_id').change( function(event) {
		var tmppath = URL.createObjectURL(event.target.files[0]);
			$("#U6_ImgTweet_id").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
		});
	$("#U6_RDC17_ACT2_P3_BtnCrearTweet_id").bind("click",function(){
			clickForward(fun);
		});
	$("#U6_RDC17_ACT2_P3_BtnChecarTweet_id").bind("click",function(){
			clickBack(fun2);
		});
	$("#U6_RDC17_ACT2_P4_CajaTexto_id").bind('keydown',function(){
		var cuenta = 0;
		count = jQuery("#U6_RDC17_ACT2_P4_CajaTexto_id").text().length;
		cuenta = count;
		var div = $("#U6_RDC17_ACT2_P4_NumeroCaracteres_id");
		
		if(count > 166){
			$('#U6_RDC17_ACT2_P4_CajaTexto_id').text($('#U6_RDC17_ACT2_P4_CajaTexto_id').text().substring(0, 140));
			cuenta = $('#U6_RDC17_ACT2_P4_CajaTexto_id').text().length;
			$( "#forward_id" ).focus();
		}
		div.text(166-cuenta);
		//$("#U6_RDC17_ACT2_P4_CajaTexto_id").text($("#U6_RDC17_ACT2_P4_CajaTexto_id").text().substr(0,80)+'...');
		
	});
	$("#U6_RDC17_ACT2_P4_CajaTexto_id").bind('keyup',function(){
		var cuenta = 0;
		count = jQuery("#U6_RDC17_ACT2_P4_CajaTexto_id").text().length;
		cuenta = count;
		var div = $("#U6_RDC17_ACT2_P4_NumeroCaracteres_id");
		
		if(count > 166){
			$('#U6_RDC17_ACT2_P4_CajaTexto_id').text($('#U6_RDC17_ACT2_P4_CajaTexto_id').text().substring(0, 166));
			cuenta = $('#U6_RDC17_ACT2_P4_CajaTexto_id').text().length;
		}
		div.text(166-cuenta);
		//$("#U6_RDC17_ACT2_P4_CajaTexto_id").text($("#U6_RDC17_ACT2_P4_CajaTexto_id").text().substr(0,80)+'...');
		
	});
	
});



function U6_RDC17_Habilitar_Actividades(actividad, habilitar){
	if(habilitar == true){
		actividad.show();
	}	
	else{
		actividad.hide()
	}
}

function U6_RDC17_MostrarPop(elemento){
	var idElemento = elemento.id;
	var nombrePop = idElemento + "_PopUp_id";
	var popUp = $('#' + nombrePop);
	////console.log("Abrir pop: " + nombrePop);
	popUp.show();
}
function U6_RDC17_OcultarPop(elemento){
	var idElemento =  elemento.id
	var boton = $('#'+ idElemento).parent().attr("id");
	////console.log("cerrar: "  + boton)
	var popUp = $('#' + boton);
	popUp.hide();
}

function U6_OcultarPop(elemento){
	var popUp = $("#" + elemento.id);
	popUp.hide();
	//U6_AsignarValor();
	//U6_RDC17_CreacionDivs(u6RDC17PathImagen,"U6_RDC17_ACT2_P4_CajaTexto_id");
	//u6RDC17PathImagen=$('#U6_RDC17_ACT2_P4_InputFile_id').val();
	////console.log(u6RDC17PathImagen);
}

function U6_HabilitarPopUp(elemento){
	var popUp = $("#" + elemento);
	U6_RDC17_CreacionDivs("U6_RDC17_ACT2_P4_CajaTexto_id");
	popUp.show();
	//u6RDC17PathImagen=$('#U6_RDC17_ACT2_P4_InputFile_id').val();
}

function U6_RDC17_GuardarTweet(){
	var divContenedorTexto = $("#U6_RDC17_U6_RDC17_ACT2_P4_CajaTexto_id");
	//console.log("Valor de long: "  + $('#U6_RDC17_ACT2_P4_CajaTexto_id').text().length);
	
	if($('#U6_RDC17_ACT2_P4_CajaTexto_id').text().length > 0){
		//console.log(u6RDC17ElementoTweet);
		show_Nav();
		blinkElement("forward_id",true);
		
	}
	
}

function U6_IniciarCreacionBurbujas(arreglo,unidad){
	var nombreBurbuja = "U6_RDC17_ACT1_P"+ unidad+"_Burbuja_id";
	var nombreClaseBurbuja = "U6_RDC17_ACT1_P4_Burbuja_";
	
	for( var i = 0; i <5; i++){
		U6_CrearBurbujas(nombreBurbuja+i,nombreClaseBurbuja+i,arreglo[i],unidad);
	}
}

function U6_CrearBurbujas(idBurbuja,claseBurbuja,dato,unidad){
	$("#" + idBurbuja).remove();
	$('<div/>', {
					'class' : claseBurbuja,
					'id'  : idBurbuja 
				}).appendTo('#U6_RDC17_ACT1_P'+unidad+'_ContenedorJuego_id');
	$("#" + idBurbuja).html(dato);
}

