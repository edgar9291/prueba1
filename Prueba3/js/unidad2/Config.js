var RD6_ACT1_P0_Principito_audio1 = new Audio('audio/unidad2/RDC62.mp3');
var RD6_ACT1_P1_Principito_audio1 = new Audio('audio/unidad2/RDC63.mp3');





var contador=0;
var correct = 0;
var error=0;
var aceptado;
var stop = undefined;
var stopn = undefined;
var colocado;
var opaca;
var draggable = undefined;
var droppable = undefined;
var dragg=0;
var clases = ["U2_RDC6_ACT1_P2_Option1","U2_RDC6_ACT1_P2_Option2",
			  "U2_RDC6_ACT1_P2_Option3","U2_RDC6_ACT1_P2_Option4",
			  "U2_RDC6_ACT1_P2_Option5"];






/*-----------------------------------pantalla1----------------------*/


function show1() {
	$("#U2_RDC6_ACT2_id").hide();
	RD6_ACT1_P0_Principito_audio1.pause();
	RD6_ACT1_P0_Principito_audio1.currentTime=0;
	var ocultap3=["#U2_RDC6_ACT1_P2_Button_id","#U2_RDC6_ACT1_P2_Correct_id","#U2_RDC6_ACT1_P2_Error_id","#U2_RDC6_ACT1_P2_Pop1_id","#U2_RDC6_ACT1_P2_Cuadro6_id","#U2_RDC6_ACT1_P2_Cuadro5_id","#U2_RDC6_ACT1_P2_Cuadro4_id",,"#U2_RDC6_ACT1_P2_Cuadro3_id","#U2_RDC6_ACT1_P2_Cuadro2_id","#U2_RDC6_ACT1_P2_PopUp_id","#U2_RDC6_ACT1_P2_Box_id","#U2_RDC6_ACT1_P2_Option6_id","#U2_RDC6_ACT1_P2_Option5_id","#U2_RDC6_ACT1_P2_Option4_id","#U2_RDC6_ACT1_P2_Option3_id",
"#U2_RDC6_ACT1_P2_Option2_id","#U2_RDC6_ACT1_P2_Option1_id","#fondo3","#U2_RDC4_ACT1_P4_Bocina_3","#f3a1","#f3a2","#U2_RDC4_ACT1_P2_Principito_personaje","#U2_RDC4_ACT1_P4_LibertadGuiando",
	"#f3a3","#f3a4","#U2_RDC4_ACT1_P3_Principito_personaje2","#U2_RDC4_ACT1_P4_Elgrito","#U2_RDC4_ACT1_P4_Fusilamiento",
	"#Meteoritodiferente","#U2_RDC4_ACT1_P4_LibertadGuiandoGrande","#U2_RDC4_ACT1_P4_VendedoraFlores",
	"#U2_RDC4_ACT1_P4_Principito_personaje3","#dialogo3","#PopUp3","#U2_RDC6_ACT1_P0_Arrowizqui3"]	
    for (var i = 0; i <= ocultap3.length; i++) {
		$(ocultap3[i]).hide();}

	var ocultap2=["#U2_RDC6_ACT1_P1_Title_Fondo1_id","#U2_RDC6_ACT1_P1_SubTitle_Fondo1_id","#U2_RDC6_ACT1_P1_Speaker_id","#U2_RDC6_ACT1_P1_Arrow2_id","#U2_RDC6_ACT1_P1_Arrowizq2_id","#U2_RDC4_ACT1_P3_Bocina_2",
	"#barra","#meteorito","#luna","#nave","#MeteoroCorrecto","#LunaCorrecto",
	"#NaveCorrecto","#meteroritog","#lunag","#naveg","#Pop1","#Pop2","#PopUp2"]	
    for (var i = 0; i <= ocultap2.length; i++) {
		$(ocultap2[i]).hide();}
		
	var ocultap4=["#fondo4","#bocinap4","#homep4","#U2_RDC6_ACT1_P0_Arrowizqp4","#flecha5",
	"#notamusp4","#Estrellas"]
	for (var i = 0; i <= ocultap4.length; i++) {
		$(ocultap4[i]).hide();}
		
		inicio();
	}

function p1(){
	RD6_ACT1_P0_Principito_audio1.onended = PopUp;
	$("#U2_RDC6_ACT1_P0_Pop2_id").unbind("click");
	$("#U2_RDC6_ACT1_P0_Pop1_id").unbind("click");
	

	
		if(RD6_ACT1_P0_Principito_audio1.paused){
			console.debug( "reproducir" );
			
			RD6_ACT1_P0_Principito_audio1.play();	
		}
		else{
			console.debug( "pausar" );
			RD6_ACT1_P0_Principito_audio1.pause();	
		
			
		}
		 
	
}

	
	
   

 function PopUp(){
	 blinkElement("U2_RDC6_ACT1_P0_Pop1_id",true);
	$("#U2_RDC6_ACT1_P0_Pop1_id").bind("click", function(){
					blinkElement("U2_RDC6_ACT1_P0_Pop1_id",false);
					blinkElement("U2_RDC6_ACT1_P0_Pop2_id",false);
					blinkElement("U2_RDC6_ACT1_P0_Speaker_id",false);
					show2(); 
					});
	
	blinkElement("U2_RDC6_ACT1_P0_Pop2_id",true);		
			$("#U2_RDC6_ACT1_P0_Pop2_id").bind("click", function(){
				blinkElement("U2_RDC6_ACT1_P0_Pop2_id",false);	
				blinkElement("U2_RDC6_ACT1_P0_Pop1_id",false);
				blinkElement("U2_RDC6_ACT1_P0_Speaker_id",false);
					$("#U2_RDC6_ACT1_id").hide();
					$("#U2_RDC6_ACT2_P0_Pantalla_id").show();
					show21(); 
					});
 }





/*-------------------------------------Pantalla2----------------*/


function show2() {
	RD6_ACT1_P0_Principito_audio1.pause();
	RD6_ACT1_P0_Principito_audio1.currentTime=0;
	
	

	var ocultap3=["#U2_RDC6_ACT1_P2_Option6_id","#U2_RDC6_ACT1_P2_Option5_id","#U2_RDC6_ACT1_P2_Option4_id","#U2_RDC6_ACT1_P2_Option3_id",
"#U2_RDC6_ACT1_P2_Option2_id","#U2_RDC6_ACT1_P2_Option1_id","#fondo3","#U2_RDC4_ACT1_P4_Bocina_3","#f3a1","#f3a2","#U2_RDC4_ACT1_P2_Principito_personaje","#U2_RDC4_ACT1_P4_LibertadGuiando",
	"#f3a3","#f3a4","#U2_RDC4_ACT1_P3_Principito_personaje2","#U2_RDC4_ACT1_P4_Elgrito","#U2_RDC4_ACT1_P4_Fusilamiento",
	"#Meteoritodiferente","#U2_RDC4_ACT1_P4_LibertadGuiandoGrande","#U2_RDC4_ACT1_P4_VendedoraFlores",
	"#U2_RDC4_ACT1_P4_Principito_personaje3","#dialogo3","#PopUp3","#U2_RDC6_ACT1_P0_Arrowizqui3"]	
    for (var i = 0; i <= ocultap3.length; i++) {
		$(ocultap3[i]).hide();}

	var ocultap1=["#U2_RDC6_ACT1_P0_Title_Fondo1_id","#U2_RDC6_ACT1_P0_Speaker_id","#U2_RDC6_ACT1_P0_Arrow_id","#U2_RDC6_ACT1_P0_Arrowizq","#U2_RDC6_ACT1_P0_PopUp_id",
	"#U2_RDC6_ACT1_P0_Arrowizq","#U2_RDC6_ACT1_P0_Pop1_id","#U2_RDC6_ACT1_P0_Pop2_id","#U2_RDC6_ACT1_P0_Arrowizq"]	
  	for (var i = 0; i <= ocultap1.length; i++) {
	$(ocultap1[i]).hide();}
	

	var mostrar=["#U2_RDC6_ACT1_P1_Speaker_id","#U2_RDC6_ACT1_P1_Arrow2_id","#U2_RDC6_ACT1_P1_Arrowizq2_id","#U2_RDC6_ACT1_P1_Title_Fondo1_id",
	"#U2_RDC6_ACT1_P1_SubTitle_Fondo1_id","#home"]	
  	for (var i = 0; i <= mostrar.length; i++) {
	$(mostrar[i]).show();}		
	
		pantalla2();
	}
	
function pantalla2(){	
	correct = 0;
	$("#U2_RDC6_ACT1_P1_Speaker_id").show();
	blinkElement("U2_RDC6_ACT1_P1_Speaker_id",true);
	$("#U2_RDC6_ACT1_P1_PopUp_id").show();
	$("#U2_RDC6_ACT1_P1_Dialogo_id").show();

	$("#U2_RDC6_ACT1_P1_BACKGROUND_Fondo1_id").show();
	
		
	
	$("#U2_RDC6_ACT1_P1_Speaker_id").bind("click", function(){
	blinkElement("U2_RDC6_ACT1_P1_Speaker_id",false);
	
	playursup2();
	});	
}


function playursup2() { 
	
	
	if(RD6_ACT1_P1_Principito_audio1.paused){
			console.debug( "reproducir" );
			
			RD6_ACT1_P1_Principito_audio1.play();	
		}
		else{
			console.debug( "pausar" );
			RD6_ACT1_P1_Principito_audio1.pause();	
		
			
		}
    
	RD6_ACT1_P1_Principito_audio1.onended = function(){
		
		show3();
		
	};  
}

	



/*------------------------------------Pnatalla3 ------------------------*/


function show3() {
	RD6_ACT1_P1_Principito_audio1.pause();
	RD6_ACT1_P1_Principito_audio1.currentTime=0;
	
	var ocultap1=["#U2_RDC6_ACT1_P2_Button_id","#U2_RDC6_ACT1_P0_CharacterPrincipito_id","#U2_RDC6_ACT1_P0_Title_Fondo1_id","#U2_RDC6_ACT1_P0_Speaker_id","#U2_RDC6_ACT1_P0_Arrow_id","#U2_RDC6_ACT1_P0_Arrowizq","#U2_RDC6_ACT1_P0_PopUp_id",
	"#U2_RDC6_ACT1_P0_Arrowizq","#U2_RDC6_ACT1_P0_Pop1_id","#U2_RDC6_ACT1_P0_Pop2_id","#U2_RDC6_ACT1_P0_Arrowizq"]	
  	for (var i = 0; i <= ocultap1.length; i++) {
	$(ocultap1[i]).hide();}
	
	
	var ocultap2=["#U2_RDC6_ACT1_P1_CharacterPrincipito_id","#U2_RDC6_ACT1_P1_Arrowizq2_id","#U2_RDC6_ACT1_P1_Arrow2_id","#U2_RDC6_ACT1_P1_PopUp_id","#U2_RDC6_ACT1_P1_Speaker_id","#U2_RDC6_ACT1_P1_Arrow2_id","#U2_RDC6_ACT1_P1_Arrowizq2_id","#U2_RDC4_ACT1_P3_Bocina_2",
	"#barra","#meteorito","#luna","#nave","#MeteoroCorrecto","#LunaCorrecto",
	"#NaveCorrecto","#meteroritog","#lunag","#naveg","#Pop1","#Pop2","#PopUp2"]	
    for (var i = 0; i <= ocultap2.length; i++) {
		$(ocultap2[i]).hide();}
		
		var ocultap3=["#U2_RDC6_ACT1_P2_Option6_id","#U2_RDC6_ACT1_P2_Option5_id","#U2_RDC6_ACT1_P2_Option4_id","#U2_RDC6_ACT1_P2_Option3_id",
"#U2_RDC6_ACT1_P2_Option2_id","#U2_RDC6_ACT1_P2_Option1_id","#fondo3","#U2_RDC4_ACT1_P4_Bocina_3","#f3a1","#f3a2","#U2_RDC4_ACT1_P2_Principito_personaje","#U2_RDC4_ACT1_P4_LibertadGuiando",
	"#f3a3","#f3a4","#U2_RDC4_ACT1_P3_Principito_personaje2","#U2_RDC4_ACT1_P4_Elgrito","#U2_RDC4_ACT1_P4_Fusilamiento",
	"#Meteoritodiferente","#U2_RDC4_ACT1_P4_LibertadGuiandoGrande","#U2_RDC4_ACT1_P4_VendedoraFlores",
	"#U2_RDC4_ACT1_P4_Principito_personaje3","#dialogo3","#PopUp3","#U2_RDC6_ACT1_P0_Arrowizqui3"]	
    for (var i = 0; i <= ocultap3.length; i++) {
		$(ocultap3[i]).hide();}
		
var mostrar=["#U2_RDC6_ACT1_P2_Arrow3_id","#U2_RDC6_ACT1_P2_Arrowizq3_id","#U2_RDC6_ACT1_P2_Box_id","#U2_RDC6_ACT1_P2_ButtonText_id","#U2_RDC6_ACT1_P2_Pop1_id",
"#U2_RDC6_ACT1_P2_Dialogo7_id","#U2_RDC6_ACT1_P2_Dialogo6_id","#U2_RDC6_ACT1_P2_Dialogo5_id","#U2_RDC6_ACT1_P2_Dialogo4_id","#U2_RDC6_ACT1_P2_Dialogo3_id",
"#U2_RDC6_ACT1_P2_Dialogo2_id","#U2_RDC6_ACT1_P2_Cuadro6_id","#U2_RDC6_ACT1_P2_Cuadro5_id",
"#U2_RDC6_ACT1_P2_Cuadro4_id","#U2_RDC6_ACT1_P2_Cuadro3_id","#U2_RDC6_ACT1_P2_Cuadro2_id","#U2_RDC6_ACT1_P2_Cuadro_id",
"#U2_RDC6_ACT1_P2_Dialogo_id","#U2_RDC6_ACT1_P2_PopUp_id","#U2_RDC6_ACT1_P1_BACKGROUND_Fondo1_id","#U2_RDC6_ACT1_P2_Arrowizq2_id",
"#U2_RDC6_ACT1_P2_Arrow2_id","#U2_RDC6_ACT1_P1_Speaker_id",
"#U2_RDC6_ACT1_P1_Title_Fondo1_id",	"#U2_RDC6_ACT1_P1_SubTitle_Fondo1_id","#home"]	
  	for (var i = 0; i <= mostrar.length; i++) {
	$(mostrar[i]).show();}	
	
	blinkElement("U2_RDC6_ACT1_P2_Arrow3_id",true);
	blinkElement("U2_RDC6_ACT1_P2_Arrowizq3_id",true);
	$("#U2_RDC6_ACT1_P1_BACKGROUND_Fondo1_id").show();
	
	
	Options();
	
	

	
}

function Options(){
	
	$( "#U2_RDC6_ACT1_P2_Option5_id" ).removeAttr('style');
	$( "#U2_RDC6_ACT1_P2_Option5_id").addClass('U2_RDC6_ACT1_P2_Option5');
	$( "#U2_RDC6_ACT1_P2_Option5_id").addClass('oculto');
	
	$( "#U2_RDC6_ACT1_P2_Option4_id" ).removeAttr('style');
	$( "#U2_RDC6_ACT1_P2_Option4_id").addClass('U2_RDC6_ACT1_P2_Option4');
	$( "#U2_RDC6_ACT1_P2_Option4_id").addClass('oculto');
	
	$( "#U2_RDC6_ACT1_P2_Option3_id" ).removeAttr('style');
	$( "#U2_RDC6_ACT1_P2_Option3_id").addClass('U2_RDC6_ACT1_P2_Option3');
	$( "#U2_RDC6_ACT1_P2_Option3_id").addClass('oculto');
	
	$( "#U2_RDC6_ACT1_P2_Option2_id" ).removeAttr('style');
	$( "#U2_RDC6_ACT1_P2_Option2_id").addClass('U2_RDC6_ACT1_P2_Option2');
	$( "#U2_RDC6_ACT1_P2_Option2_id").addClass('oculto');
	
	$( "#U2_RDC6_ACT1_P2_Option1_id" ).removeAttr('style');
	$( "#U2_RDC6_ACT1_P2_Option1_id").addClass('U2_RDC6_ACT1_P2_Option1');
	$( "#U2_RDC6_ACT1_P2_Option1_id").addClass('oculto');
	
	
	
		/*activate draggable */
	for (var i = 1; i <= 6; i++) {
	$("#U2_RDC6_ACT1_P2_Option"+[i]+"_id").draggable(regresa());
	
		};
	/*activate droppable*/
for (var i = 2; i <= 6; i++) {
	
	$("#U2_RDC6_ACT1_P2_Cuadro"+[i]+"_id").droppable({
	accept: "#U2_RDC6_ACT1_P2_Option1_id,#U2_RDC6_ACT1_P2_Option2_id,#U2_RDC6_ACT1_P2_Option3_id,"
			+"#U2_RDC6_ACT1_P2_Option4_id,#U2_RDC6_ACT1_P2_Option5_id",
	drop: function  (event, ui) {

				droppable= $(this).attr('id');
				aceptado=$(ui.helper).attr('id') ;
				DropEvent(event,ui);

			}
	});
};
aleatorio();
}

	
function DropEvent (event, ui) {
	colocado=$(ui.helper);
	console.debug(aceptado);
	
	console.debug(droppable);
	dragg++;
	
	draggable=ui.draggable.attr('id');
	$(colocado).removeClass("oculto");
	if(droppable=="U2_RDC6_ACT1_P2_Cuadro2_id"){
			if(aceptado=="U2_RDC6_ACT1_P2_Option1_id"){
			correct++;
			console.debug("correcto");
			}
			else{
			error++;
			console.debug("error");	
			}
		
	}
	if(droppable=="U2_RDC6_ACT1_P2_Cuadro3_id"){
			if(aceptado=="U2_RDC6_ACT1_P2_Option2_id"){
			correct++;
			console.debug("correcto");
			}
			else{
			error++;
			console.debug("error");	
			}
		
	}
	if(droppable=="U2_RDC6_ACT1_P2_Cuadro4_id"){
			if(aceptado=="U2_RDC6_ACT1_P2_Option3_id"){
			correct++;
			console.debug("correcto");
			}
			else{
			error++;
			console.debug("error");	
			}
		
	}
	if(droppable=="U2_RDC6_ACT1_P2_Cuadro5_id"){
			if(aceptado=="U2_RDC6_ACT1_P2_Option4_id"){
			correct++;
			console.debug("correcto");
			}
			else{
			error++;
			console.debug("error");	
			}
		
	}
	if(droppable=="U2_RDC6_ACT1_P2_Cuadro6_id"){
			if(aceptado=="U2_RDC6_ACT1_P2_Option5_id"){
			correct++;
			console.debug("correcto");
			}
			else{
			error++;
			console.debug("error");	
			}
		
	}
	if(dragg==5){
		dragg=0;
	blinkElement("U2_RDC6_ACT1_P2_Arrow3_id",false);
	blinkElement("U2_RDC6_ACT1_P2_Arrowizq3_id",false);
	$("#U2_RDC6_ACT1_P2_Button_id").show();
	blinkElement("U2_RDC6_ACT1_P2_Button_id",true);
	$("#U2_RDC6_ACT1_P2_Button_id").bind("click",function(){
	blinkElement("U2_RDC6_ACT1_P2_Button_id",false);
	if(error>0){
	error=0;
	dragg=0;
	correct=0;
	Fail();	
	
		
	}
	
	if(correct==5){
	error=0;
	dragg=0;
	correct=0;
	Correct();
		
	}
	
		
	});
		
		
	}
	
	

}	
	
function regresa(){
	return{
  		revert: "invalid",
  		opacity: 0.7
		};
  	}

function aleatorio(){ 
	
	var numPosibilidades;
	var aleat;
	var resultado;
    numPosibilidades = 6 - 1; 
    aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat); 
    resultado= parseInt(1) + aleat;
	console.debug( resultado );
	
	$("#U2_RDC6_ACT1_P2_Option"+resultado+"_id").show();
	$("#U2_RDC6_ACT1_P2_Arrowizq3_id").bind("click",function(){
		if(resultado==1){
			resultado=5;			
		}
		else{
			resultado=resultado-1; }
			console.debug( resultado );
			//console.debug( $("#U2_RDC6_ACT1_P2_Option"+resultado+"_id") );
			$( ".oculto" ).hide( );
			
			$("#U2_RDC6_ACT1_P2_Option"+resultado+"_id").show();	
		
			
		
	});
	
	$("#U2_RDC6_ACT1_P2_Arrow3_id").bind("click",function(){
	if(resultado==5){
	resultado=1;	
		
		
	}
	else{
	resultado=resultado+1; }
	console.debug( resultado );
	
	$( ".oculto" ).hide( );
	
	$("#U2_RDC6_ACT1_P2_Option"+resultado+"_id").show();	
		
		
		
	});
	
}


	

function Fail() { 
	$("#U2_RDC6_ACT1_P2_Button_id").hide();
	blinkElement("U2_RDC6_ACT1_P2_Arrow3_id",false);
	blinkElement("U2_RDC6_ACT1_P2_Arrowizq3_id",false);
	
	document.getElementById('U2_RDC6_ACT1_P2_id').style.opacity=0.5;
	$("#U2_RDC6_ACT1_P2_Dialogo8_id").show();
	$("#U2_RDC6_ACT1_P2_Error_id").show();
	$("#U2_RDC6_ACT1_P2_Error_id").bind("click",function(){




		$("#U2_RDC6_ACT1_P2_Error_id").hide();
		document.getElementById('U2_RDC6_ACT1_P2_id').style.opacity=1;
		show3();
	});
   
	}

function Correct() { 
	$("#U2_RDC6_ACT1_P2_Button_id").hide();
	blinkElement("U2_RDC6_ACT1_P2_Arrow3_id",false);
	blinkElement("U2_RDC6_ACT1_P2_Arrowizq3_id",false);
	document.getElementById('U2_RDC6_ACT1_P2_id').style.opacity=0.5;
	$("#U2_RDC6_ACT1_P2_Dialogo9_id").show();
	
	$("#U2_RDC6_ACT1_P2_Correct_id").show();
	$("#U2_RDC6_ACT1_P2_Correct_id").bind("click",function(){
	


		$("#U2_RDC6_ACT1_P2_Correct_id").hide();
		document.getElementById('U2_RDC6_ACT1_P2_id').style.opacity=1;
		show1();
	});
   
	}















$(document).ready(inicio());

function inicio(){

	$(function(){
	$(document).ready(function(){
		
						
			
			
			
		
			$("#U2_RDC6_ACT1_P0_BACKGROUND_Fondo1_id").show();
			$("#U2_RDC6_ACT1_P0_Title_Fondo1_id").show();
			$("#U2_RDC6_ACT1_P0_CharacterPrincipito_id").show();			
			$("#U2_RDC6_ACT1_P0_PopUp_id").show();
			$("#U2_RDC6_ACT1_P0_Dialogo_id").show();
			$("#U2_RDC6_ACT1_P0_Speaker_id ").show();
			blinkElement("U2_RDC6_ACT1_P0_Speaker_id",true);
			$("#U2_RDC6_ACT1_P0_Speaker_id ").bind("click", function(){
			blinkElement("U2_RDC6_ACT1_P0_Speaker_id",false);	
				
				p1();
			
			
			});
			
			$("#U2_RDC6_ACT1_P0_Pop1_id").show();
				$("#U2_RDC6_ACT1_P0_ButtonText_id").show();
				

			$("#U2_RDC6_ACT1_P0_Pop2_id").show();
			$("#U2_RDC6_ACT1_P0_ButtonText2_id").show();
			
			
			$("#U2_RDC6_ACT1_P0_Pop1_id").bind("click", function(){
					
					show2(); 
					});
			
			$("#U2_RDC6_ACT1_P0_Pop2_id").bind("click", function(){
					
					$("#U2_RDC6_ACT1_id").hide();
					show21();
					});
			
			
			
	});
	});
}