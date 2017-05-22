var Principito_audio1 = new Audio('audio/unidad2/RDC65.mp3');
var Principito_audio2 = new Audio('audio/unidad2/RDC66.mp3');
var Principito_audio3 = new Audio('audio/unidad2/RDC67.mp3');
var Principito_audio4 = new Audio('audio/unidad2/RDC68.mp3');
var contador1=0;
var total = 4;
var correct = 0;
var stop = undefined;
var stopn = undefined;


/*-----------------------------------pantalla1----------------------*/


function show21() {
		Inicio2();
}

function p21(){
$("#U2_RDC6_ACT2_P0_Horn_1_id").bind("click",function(){
		 Principito_audio1.pause();
		 playprincipito();
	});

}
function playprincipito() {
	$("#U2_RDC6_ACT2_P0_Horn_1_id").bind("click",function(){
		 Principito_audio1.play();
		 p21();
    });


}
function p22(){
$("#U2_RDC6_ACT2_P5_Horn_6_id").bind("click",function(){
		 Principito_audio2.pause();
		 playprincipito2();
	});

}
function playprincipito2() {
	$("#U2_RDC6_ACT2_P5_Horn_6_id").bind("click",function(){
		 Principito_audio2.play();
		 p22();
    });
}
function p3(){
$("#U2_RDC6_ACT2_P6_Horn_7_id").bind("click",function(){
		 Principito_audio2.pause();
		 playprincipito3();
	});

}
function playprincipito3() {
	$("#U2_RDC6_ACT2_P6_Horn_7_id").bind("click",function(){
		 Principito_audio3.play();
		 p22();
    });
}

function flechasigue(){
	Principito_audio1.pause();
	Principito_audio1.currentTime=0;
	$("#U2_RDC6_ACT2_P2_Arrow1_id").bind("click",show22);
}
function flechasigue2(){
	$("#U2_RDC6_ACT2_P3_Arrow2_id").bind("click",show23);
}

/*-------------------------------------Pantalla 2----------------*/


function show22() {
	
	var ocultap2=["#U2_RDC6_ACT2_P0_Pantalla_id","#U2_RDC6_ACT2_P2_Pantalla_id","#U2_RDC6_ACT2_P3_Pantalla_id","#U2_RDC6_ACT2_P4_Pantalla_id"]	
    for (var i = 0; i <= ocultap2.length; i++) {
		$(ocultap2[i]).hide();}
	

	var mostrar1=["#U2_RDC6_ACT2_P1_Background2_id","#U2_RDC6_ACT2_P1_Arrow2_id","#U2_RDC6_ACT2_P1_ArrowBack1_id","#U2_RDC6_ACT2_P1_PopUpDialogo2_id","#U2_RDC6_ACT2_P1_Dialogo2_id","#U2_RDC6_ACT2_P1_Pantalla_id"]	
  	for (var i = 0; i <= mostrar1.length; i++) {
	$(mostrar1[i]).fadeIn(100);}	
 
	$("#U2_RDC6_ACT2_P1_Home_id").fadeIn(100);
		$("#U2_RDC6_ACT2_P1_Home_id").bind("click",function(){
		Home();
		});
	$("#U2_RDC6_ACT2_P1_Arrow2_id").fadeIn(100);
	$("#U2_RDC6_ACT2_P1_Arrow2_id").bind("click", function(){
		stop(); 
		show23(); 
		Principito_audio2.pause();
		Principito_audio2.currentTime=0;
	});
	$("#U2_RDC6_ACT2_P1_ArrowBack1_id").fadeIn(100);
	$("#U2_RDC6_ACT2_P1_ArrowBack1_id").bind("click",function(){
		show21();
		Principito_audio2.pause();
		Principito_audio2.currentTime=0;
	});
		//pantalla22();
	}
	
function pantalla22(){	
	$("#U2_RDC6_ACT2_P1_Horn_2_id").bind("click", function(){
	stop();
	p22();
	Principito_audio2.play();
	});	
}

function p22(){
	$("#U2_RDC6_ACT2_P3_Horn_2_id").bind("click", function(){
	Principito_audio2.pause();
	pantalla22();
	});	

	$("#U2_RDC6_ACT2_P3_Arrow2_id").bind("click",function(){
	Principito_audio1.pause();
	Principito_audio1.currentTime=0;
	
	});

}

/*------------------------------------Pnatalla3 ------------------------*/

function show23() {
	flag=0;
	var ocultap3=["#U2_RDC6_ACT2_P1_Pantalla_id","#U2_RDC6_ACT2_P3_Pantalla_id","#U2_RDC6_ACT2_P0_Pantalla_id","#U2_RDC6_ACT2_P4_Pantalla_id","#U2_RDC6_ACT2_P5_Pantalla_id"]	
    for (var i = 0; i <= ocultap3.length; i++) {
		$(ocultap3[i]).hide();}
	
	var mostrar2=["#U2_RDC6_ACT2_P2_Pantalla_id","#U2_RDC6_ACT2_P2_Background3_id","#U2_RDC6_ACT2_P2_PopUpDialogo3_id","#U2_RDC6_ACT2_P2_Dialogo3_id","#U2_RDC6_ACT2_P2_Exit_id","#U2_RDC6_ACT2_P2_Arbol_id","#U2_RDC6_ACT2_P2_Arbol1_id","#U2_RDC6_ACT2_P2_Arbol2_id"]	
  	for (var i = 0; i <= mostrar2.length; i++) {
	$(mostrar2[i]).fadeIn(100);}	
	
	var ocultap9=["#U2_RDC6_ACT2_P3_correctFeedback_id","#U2_RDC6_ACT2_P3_wrongFeedback_id","#U2_RDC6_ACT2_P5_Dialogo11_id","#U2_RDC6_ACT2_P5_Dialogo10_id","#U2_RDC6_ACT2_P2_Arrow3_id","#U2_RDC6_ACT2_P2_ArrowBack2_id","#options","#correctBox","#check","#U2_RDC6_ACT2_P3_wrongFeedback_id"]	
    for (var i = 0; i <= ocultap9.length; i++) {
		$(ocultap9[i]).hide();}
	$("#U2_RDC6_ACT2_P2_Exit_id").bind("click",function(){
	$("#U2_RDC6_ACT2_P2_Home_id").fadeIn(100);
		$("#U2_RDC6_ACT2_P2_Home_id").bind("click",function(){
		Home();
		});
	Cuestionario();
	
	var ocultar2=["#U2_RDC6_ACT2_P2_Dialogo3_id","#U2_RDC6_ACT2_P2_Exit_id","#U2_RDC6_ACT2_P2_Arbol_id","#U2_RDC6_ACT2_P2_Arbol1_id","#U2_RDC6_ACT2_P2_Arbol2_id","#U2_RDC6_ACT2_P2_PopUpDialogo3_id"]	
  	for (var i = 0; i <= ocultar2.length; i++) {
	$(ocultar2[i]).fadeOut(1200);}	
	});
	
}

function p3(){

	$("#U2_RDC6_ACT2_P4_Horn_3_id").bind("click",function(){
	PrincipitoActividad3();
	});
}	
function Cuestionario() { 
	
	var mostrar4=["#correctBox","#options","#check","#reset","#Opcion1","#Opcion2","#Opcion3","#Opcion4","#Pregunta"]
	for (var i = 0; i <= mostrar4.length; i++) {
	$(mostrar4[i]).fadeIn(100);}

	
	boxDragQuestion( {
				droppableDiv: "correctBox",
				draggablesDiv: "options",
				correctFeedback: "U2_RDC6_ACT2_P3_correctFeedback_id",
				wrongFeedback: "U2_RDC6_ACT2_P3_wrongFeedback_id",
				correctPosition: 1,
				waitCorrectButton: true,
				checkButtonId: "check",
				resetButtonId: "reset",
				onPassActivity: function( isCorrect ){
					console.debug( "Me ha pasado " + isCorrect );
					$( "#options" ).find( "div" ).css( "cursor", "default" );
					if(isCorrect == true){
						$("#U2_RDC6_ACT2_P3_correctFeedback_id").fadeIn(200);
						$("#U2_RDC6_ACT2_P3_wrongFeedback_id").fadeOut(100);
						$("#U2_RDC6_ACT2_P5_Dialogo11_id").fadeOut(100);
						$("#U2_RDC6_ACT2_P5_Dialogo10_id").fadeIn(100);
						$("#U2_RDC6_ACT2_P2_Arrow3_id").fadeIn(100);
						$("#U2_RDC6_ACT2_P2_Arrow3_id").bind("click",function(){
							show4();
							$("#U2_RDC6_ACT2_P3_wrongFeedback_id").fadeOut(100);
							$("#U2_RDC6_ACT2_P3_correctFeedback_id").fadeOut(100);
							$("#U2_RDC6_ACT2_P5_Dialogo11_id").fadeOut(100);
						});
						$("#U2_RDC6_ACT2_P2_ArrowBack2_id").fadeIn(100);
						$("#U2_RDC6_ACT2_P2_ArrowBack2_id").bind("click",function(){
							show22();
							$("#U2_RDC6_ACT2_P3_wrongFeedback_id").fadeOut(100);
							$("#U2_RDC6_ACT2_P3_correctFeedback_id").fadeOut(100);
							$("#U2_RDC6_ACT2_P5_Dialogo11_id").fadeOut(100);
						});
				}
				else {
					intentalo.play();
					$("#U2_RDC6_ACT2_P3_wrongFeedback_id").fadeIn(100);
					$("#U2_RDC6_ACT2_P5_Dialogo11_id").fadeIn(100);	
				}
				},
				onEnter: function( ){
					$( "#correctBox" ).css( "background-color", "blue" );
				},
				onLeave: function( ){
					$( "#correctBox" ).css( "background-color", "" );
				
				}
			} );
}

function PrincipitoActividad3() { 
	
    Principito_audio3.play();
	$("#U2_RDC6_ACT2_P4_Horn_3_id").bind("click", function(){
		Principito_audio3.pause();
		p3();
	});
	}

/*--------------------------------Pantalla 4 -----------------------*/

function show4() {	
	var ocultap5=["#U2_RDC6_ACT2_P1_Pantalla_id","#U2_RDC6_ACT2_P2_Pantalla_id","#U2_RDC6_ACT2_P0_Pantalla_id","#U2_RDC6_ACT2_P4_Pantalla_id"]	
    for (var i = 0; i <= ocultap5.length; i++) {
	$(ocultap5[i]).hide();}

	var mostrar8=["#U2_RDC6_ACT2_P3_Pantalla_id","#U2_RDC6_ACT2_P3_CuadroMal","#U2_RDC6_ACT2_P3_Background4_id","#U2_RDC6_ACT2_P3_Arrow4_id","#U2_RDC6_ACT2_P3_CuadroMal1","#U2_RDC6_ACT2_P3_CuadroMal2","#U2_RDC6_ACT2_P3_CuadroMal4","#U2_RDC6_ACT2_P5_Dialogo5_id","#U2_RDC6_ACT2_P5_Dialogo6_id","#U2_RDC6_ACT2_P5_Dialogo7_id","#U2_RDC6_ACT2_P5_Dialogo4_id","#U2_RDC6_ACT2_P5_Dialogo8_id"]	
  	for (var i = 0; i <= mostrar8.length; i++) {
	$(mostrar8[i]).fadeIn(100);}		
	$("#U2_RDC6_ACT2_P3_Home_id").fadeIn(100);
		$("#U2_RDC6_ACT2_P3_Home_id").bind("click",function(){
		Home();
		});
		$("#U2_RDC6_ACT2_P3_CuadroMal").bind("click", function(){
			$("#U2_RDC6_ACT2_P3_wrongFeedback1").fadeIn(100);
			
		});
		$("#U2_RDC6_ACT2_P3_CuadroMal1").bind("click", function(){
			$("#U2_RDC6_ACT2_P3_wrongFeedback1").fadeIn(100);
			
		});
		$("#U2_RDC6_ACT2_P3_CuadroMal2").bind("click", function(){
			$("#U2_RDC6_ACT2_P3_wrongFeedback1").fadeIn(100);
			
		});
	
	$("#U2_RDC6_ACT2_P3_CuadroMal4").bind("click", function(){
	$("#U2_RDC6_ACT2_P3_CuadroMal").unbind();
	$("#U2_RDC6_ACT2_P3_CuadroMal1").unbind();
	$("#U2_RDC6_ACT2_P3_CuadroMal2").unbind();
		$("#U2_RDC6_ACT2_P3_wrongFeedback1").fadeOut(100);
		$("#U2_RDC6_ACT2_P3_CuadroMal4").fadeOut(1000);
		$("#U2_RDC6_ACT2_P3_CuadroBien").fadeIn(900);
		$("#U2_RDC6_ACT2_P3_correctFeedback1_id").fadeIn(900);
		$("#U2_RDC6_ACT2_P5_Dialogo9_id").fadeIn(900);
		$("#U2_RDC6_ACT2_P3_Arrow4_id").fadeIn(100);
		$("#U2_RDC6_ACT2_P3_Arrow4_id").bind("click", function (){
		$("#U2_RDC6_ACT2_P3_correctFeedback1_id").fadeOut(900);
		$("#U2_RDC6_ACT2_P5_Dialogo9_id").fadeOut(900);
		show5();
		});
		$("#U2_RDC6_ACT2_P3_ArrowBack3_id").fadeIn(100);
		$("#U2_RDC6_ACT2_P3_ArrowBack3_id").bind("click", function (){
		$("#U2_RDC6_ACT2_P3_correctFeedback1_id").fadeOut(900);
		$("#U2_RDC6_ACT2_P5_Dialogo9_id").fadeOut(900);
		show23();
		});
	});
}	
function Principitoplay4(){
	$("#U2_RDC6_ACT2_P5_Horn_4_id").bind("click",function(){
		Principito_audio4.pause();
		Principito4();
	});
	
}
function Principito4(){
	$("#U2_RDC6_ACT2_P5_Horn_4_id").bind("click",function(){
		Principito_audio4.play();
		Principitoplay4();
	});
}

function Home(){
		show21();
		$("#U2_RDC6_ACT2_P3_correctFeedback1_id").fadeOut(900);
		$("#U2_RDC6_ACT2_P5_Dialogo9_id").fadeOut(900);
		$("#U2_RDC6_ACT2_P3_correctFeedback1_id").fadeOut(900);
		
		
	}
function show5(){
	var ocultap6=["#U2_RDC6_ACT2_P0_Pantalla_id","#U2_RDC6_ACT2_P1_Pantalla_id","#U2_RDC6_ACT2_P2_Pantalla_id","#U2_RDC6_ACT2_P3_Pantalla_id","#U2_RDC6_ACT2_P6_Pantalla_id","#U2_RDC6_ACT2_P5_Pantalla_id"]	
    for (var i = 0; i <= ocultap6.length; i++) {
	$(ocultap6[i]).hide();}
	var mostrar9=["#U2_RDC6_ACT2_P4_Pantalla_id","U2_RDC6_ACT2_P4_Home_id","#U2_RDC6_ACT2_P4_Background5_id","#textDiv","#editor","#U2_RDC6_ACT2_P4_save1_id","#U2_RDC6_ACT2_P4_Instrucciones1_id","#U2_RDC6_ACT2_P5_Dialogo12_id"]	
  	for (var i = 0; i <= mostrar9.length; i++) {
	$(mostrar9[i]).fadeIn(100);}	
	Editar();
	$("#U2_RDC6_ACT2_P4_Home_id").fadeIn(100);
		$("#U2_RDC6_ACT2_P4_Home_id").bind("click",function(){
		Home();
		});
	$("#U2_RDC6_ACT2_P4_Arrow4_id").fadeIn(100);
	$("#U2_RDC6_ACT2_P4_Arrow4_id").bind("click",function(){ 
		$("#U2_RDC6_ACT2_P4_Cuestion_id").fadeOut();
		show6();
	}); 	
	$("#U2_RDC6_ACT2_P4_ArrowBack3_id").fadeIn(100);
	$("#U2_RDC6_ACT2_P4_ArrowBack3_id").bind("click", function(){
		$("#U2_RDC6_ACT2_P4_Cuestion_id").fadeOut();
		show4();
	});
}

function show6(){
	var ocultap6=["#U2_RDC6_ACT2_P0_Pantalla_id","#U2_RDC6_ACT2_P1_Pantalla_id","#U2_RDC6_ACT2_P2_Pantalla_id","#U2_RDC6_ACT2_P3_Pantalla_id","#U2_RDC6_ACT2_P4_Pantalla_id","#U2_RDC6_ACT2_P6_Pantalla_id"]	
	for (var i = 0; i <= ocultap6.length; i++) {
		$(ocultap6[i]).fadeOut(100);
	}	
	var mostrar9=["#U2_RDC6_ACT2_P5_Pantalla_id","#U2_RDC6_ACT2_P5_Background3_id","#U2_RDC6_ACT2_P5_Principito1_id","#U2_RDC6_ACT2_P5_Arrow3_id","#U2_RDC6_ACT2_P5_ArrowBack1_id","#U2_RDC6_ACT2_P5_PopUpDialogo_id","#U2_RDC6_ACT2_P5_Dialogo1_id","#U2_RDC6_ACT2_P5_Horn_6_id"]	
  	for (var i = 0; i <= mostrar9.length; i++) {
		$(mostrar9[i]).fadeIn(100);
	}	
	$("#U2_RDC6_ACT2_P5_Horn_6_id").bind("click",function(){
		Principito_audio2.play();
		p22();
	});
	$("#U2_RDC6_ACT2_P5_Home_id").fadeIn(100);
		$("#U2_RDC6_ACT2_P5_Home_id").bind("click",function(){
		Home();
		Principito_audio2.pause();
		 Principito_audio2.currentTime=0;
		});
	$("#U2_RDC6_ACT2_P5_Arrow3_id").bind("click", function(){
		show7();
		Principito_audio2.pause();
		 Principito_audio2.currentTime=0;
	});
	$("#U2_RDC6_ACT2_P5_ArrowBack1_id").bind("click", function(){
		show5();
		Principito_audio2.pause();
		Principito_audio2.currentTime=0;
	});
}
function show7(){
	var ocultap7=["#U2_RDC6_ACT2_P0_Pantalla_id","#U2_RDC6_ACT2_P1_Pantalla_id","#U2_RDC6_ACT2_P2_Pantalla_id","#U2_RDC6_ACT2_P3_Pantalla_id","#U2_RDC6_ACT2_P4_Pantalla_id","#U2_RDC6_ACT2_P5_Pantalla_id","#U2_RDC6_ACT2_P8_Pantalla_id","#U2_RDC6_ACT2_P7_Pantalla_id"]	
	for (var i = 0; i <= ocultap7.length; i++) {
		$(ocultap7[i]).fadeOut(100);
	}	
	var mostrar10=["#U2_RDC6_ACT2_P6_Pantalla_id","#U2_RDC6_ACT2_P6_Background3_id","#U2_RDC6_ACT2_P6_Principito1_id","#U2_RDC6_ACT2_P6_Arrow3_id","#U2_RDC6_ACT2_P6_ArrowBack1_id","#U2_RDC6_ACT2_P6_PopUpDialogo_id","#U2_RDC6_ACT2_P6_Dialogo1_id"]	
  	for (var i = 0; i <= mostrar10.length; i++) {
		$(mostrar10[i]).fadeIn(100);
	
	}	
	$("#U2_RDC6_ACT2_P6_Home_id").fadeIn(100);
		$("#U2_RDC6_ACT2_P6_Home_id").bind("click",function(){
		Home();
		});
	$("#pruebaspan").click(function(){
		alert("on toy");
		
	})
	$("#U2_RDC6_ACT2_P6_Arrow3_id").bind("click", function(){
		show8();
	});
	$("#U2_RDC6_ACT2_P6_ArrowBack1_id").bind("click", function(){
		show6();
	});
}
function show8(){
	var ocultap8=["#U2_RDC6_ACT2_P0_Pantalla_id","#U2_RDC6_ACT2_P1_Pantalla_id","#U2_RDC6_ACT2_P2_Pantalla_id","#U2_RDC6_ACT2_P3_Pantalla_id","#U2_RDC6_ACT2_P4_Pantalla_id","#U2_RDC6_ACT2_P5_Pantalla_id","#U2_RDC6_ACT2_P6_Pantalla_id","#U2_RDC6_ACT2_P8_Pantalla_id"]	
	for (var i = 0; i <= ocultap8.length; i++) {
		$(ocultap8[i]).fadeOut(100);
	}	
	var mostrar11=["#U2_RDC6_ACT2_P7_Pantalla_id","#U2_RDC6_ACT2_P7_Background3_id","#U2_RDC6_ACT2_P7_Principito1_id","#U2_RDC6_ACT2_P7_Arrow3_id","#U2_RDC6_ACT2_P7_ArrowBack1_id","#U2_RDC6_ACT2_P7_PopUpDialogo_id","#U2_RDC6_ACT2_P7_Dialogo1_id","#U2_RDC6_ACT2_P7_PopUpDialogo1_id","#U2_RDC6_ACT2_P7_Dialogo2_id"]	
  	for (var i = 0; i <= mostrar11.length; i++) {
		$(mostrar11[i]).fadeIn(100);
	}	
	$("#U2_RDC6_ACT2_P7_Horn_8_id").fadeIn(100);
	$("#U2_RDC6_ACT2_P7_Horn_8_id").bind("click",function(){
		Principito_audio3.play();
		p3();
	});
	$("#U2_RDC6_ACT2_P7_Home_id").fadeIn(100);
		$("#U2_RDC6_ACT2_P7_Home_id").bind("click",function(){
		Home();
		});
	$("#U2_RDC6_ACT2_P7_Arrow3_id").bind("click",function(){
		show9();
		Principito_audio3.pause();
		Principito_audio3.currentTime=0;
	});
	$("#U2_RDC6_ACT2_P7_ArrowBack1_id").bind("click", function(){
		show7();
		Principito_audio3.pause();
		Principito_audio3.currentTime=0;
	});
}
function show9(){
	var ocultap9=["#U2_RDC6_ACT2_P0_Pantalla_id","#U2_RDC6_ACT2_P1_Pantalla_id","#U2_RDC6_ACT2_P2_Pantalla_id","#U2_RDC6_ACT2_P3_Pantalla_id","#U2_RDC6_ACT2_P4_Pantalla_id","#U2_RDC6_ACT2_P5_Pantalla_id","#U2_RDC6_ACT2_P6_Pantalla_id","#U2_RDC6_ACT2_P7_Pantalla_id"]	
	for (var i = 0; i <= ocultap9.length; i++) {
		$(ocultap9[i]).fadeOut(100);
	}	
	var mostrar12=["#U2_RDC6_ACT2_P8_Pantalla_id","#U2_RDC6_ACT2_P8_Background3_id","#U2_RDC6_ACT2_P8_Principito1_id","#U2_RDC6_ACT2_P8_Arrow3_id","#U2_RDC6_ACT2_P8_ArrowBack1_id","#U2_RDC6_ACT2_P8_PopUpDialogo_id","#U2_RDC6_ACT2_P8_Dialogo1_id","#U2_RDC6_ACT2_P8_PopUpDialogo1_id","#U2_RDC6_ACT2_P8_Dialogo2_id"]	
  	for (var i = 0; i <= mostrar12.length; i++) {
		$(mostrar12[i]).fadeIn(100);
	}
	$("#U2_RDC6_ACT2_P8_Horn_9_id").fadeIn(100);
	$("#U2_RDC6_ACT2_P8_Horn_9_id").bind("click",function(){
		Principito_audio4.play();
		
	});
	$("#U2_RDC6_ACT2_P8_Home_id").fadeIn(100);
	$("#U2_RDC6_ACT2_P8_Home_id").bind("click",function(){
	Home();
		Principito_audio4.pause();
		Principito_audio4.currentTime=0;
	});
	$("#U2_RDC6_ACT2_P8_Arrow3_id").bind("click",function(){
		//show9();
	});
	$("#U2_RDC6_ACT2_P8_ArrowBack1_id").bind("click", function(){
		show8();
		Principito_audio4.pause();
		Principito_audio4.currentTime=0;
	});
	
}


function Editar(){
		
		new EditTextQuestion( {
					parentDiv: "textDiv2",
					saveButtonId: "save2",
					writeDocx: false,
					afterSubmit: function( text ){
						$( "#textDiv" ).html( text );
					}
				} );	
		
		$("#U2_RDC6_ACT2_P4_save1_id").bind("click",function(){
		
			$("#U2_RDC6_ACT2_P4_Cuestion_id").fadeIn();
		});
	
}



/*incrementar y decrementar botones*/

function pointAtListener ( element, rate, repeatRate ){
	var stop  = undefined;
	var number  = undefined;
	
	if( repeatRate == undefined ){
		repeatRate = 2000;
	}
	number = setInterval( function( ){
		_pointAtSimple( element, rate, 1 );
	}, repeatRate );
	
	stop = function( ){
		clearTimeout( number );
	};
	
	return stop;
};


function increase ( element, rate ){
	element.animate({
		"width": "6%",
	}, "slow");
};


function decrease( element, rate ){
	element.animate({
		"width": "5%",
	}, "slow");
};


function _pointAtSimple( element, rate, times ){
	for( i = 0; i < times; i++ ){
		increase(element, rate );
		decrease(element, rate );
	}
};


//$(document).ready(Inicio2());

function Inicio2(){

	$(function(){
	$(document).ready(function(){
		
			var ocultap2=["#U2_RDC6_ACT2_P1_Pantalla_id","#U2_RDC6_ACT2_P2_Pantalla_id","#U2_RDC6_ACT2_P3_Pantalla_id","#U2_RDC6_ACT2_P4_Pantalla_id"]	
		for (var i = 0; i <= ocultap2.length; i++) {
		$(ocultap2[i]).hide();}				
		
		var mostrar=["#U2_RDC6_ACT2_P0_ArrowBack1_id","#U2_RDC6_ACT2_P0_Background1_id","#U2_RDC6_ACT2_P0_Horn_1_id","#U2_RDC6_ACT2_P0_Arrow1_id","#U2_RDC6_ACT2_P0_Principito1_id",
		"#U2_RDC6_ACT2_P0_Pantalla_id","#U2_RDC6_ACT2_P0_PopUpDialogo_id","#U2_RDC6_ACT2_P0_Dialogo1_id"]	
		for (var i = 0; i <= mostrar.length; i++) {
		$(mostrar[i]).fadeIn(100);}	
		$("#U2_RDC6_ACT2_P0_Home_id").fadeIn(100);
		$("#U2_RDC6_ACT2_P0_Home_id").bind("click",function(){
		Home();
		 Principito_audio1.currentTime=0;
		});
		stop=pointAtListener($("#U2_RDC6_ACT2_P0_Horn_1_id"),100,2000);
		$("#U2_RDC6_ACT2_P0_Horn_1_id").bind("click",function(){
		 Principito_audio1.play();
		 p21();
		});
		$("#U2_RDC6_ACT2_P0_Arrow1_id").bind("click",function(){
		 Principito_audio1.pause();
		 Principito_audio1.currentTime=0;
		 playprincipito();
		 show22();
	});

	});
	});
}