/*******************  Variables **********************/

var instrucciones_P1 = $("#U4_RDC10_P0_pantalla2Act2_id")[0];
var flagAudioInstrucciones = false;

/*******************  Funciones audios **********************/


instrucciones_P1.onplay = inhabilitar_instrucciones_P1;
instrucciones_P1.onended = habilitar_instrucciones_P1;


/*******************  Funciones propias **********************/

function inhabilitar_instrucciones_P1() {
	$("#U4_RDC10_P0_btnNext_id").hide();
	$("#U4_RDC10_P0_btnBack_id").hide();
	flagAudioInstrucciones = false;
	console.debug( "inhabilitar_instrucciones_P1" );
	$(".U4_RDC_btn").removeClass("U4_RDC10_cursor");
}

function habilitar_instrucciones_P1() {
	$("#U4_RDC10_P0_btnNext_id").show();
	$("#U4_RDC10_P0_btnBack_id").show();
	flagAudioInstrucciones = true;
	console.debug( "Habilitar" );
	$(".U4_RDC_btn").addClass("U4_RDC10_cursor");
	instrucciones_P1.currentTime = 0;
}

function reset_P1() {
	$("#U4_RDC10_P0_InfoMirror_id").hide();
	flagAudioInstrucciones = false;
	$(".U4_RDC_btn").removeClass("U4_RDC10_cursor");
}

function validaAudioInstruccion_P1() {
	if(!instrucciones_P1.paused) {
		instrucciones_P1.pause();
		console.log("Corriendo123");
	}
	else{
		instrucciones_P1.play();
		console.log("Corriendo325");
	}
}

function iniciaP1() {
	$(".U4_RDC_btn").removeClass("U4_RDC10_cursor");
	$("#U4_RDC10_P0_InfoMirror_id").hide();
	$("#U4_RDC10_P0_btnNext_id").hide();
	$("#U4_RDC10_P0_btnBack_id").hide();
}

/*#####################################################################



######################################################################*/

$( document ).ready( function() {


iniciaP1();


$("#U4_RDC10_P0_btnBocina_id").click(function(){
	$("#U4_RDC10_P0_InfoMirror_id").show();
	console.log("Corriendo instrucciones");
	validaAudioInstruccion_P1();
});

$("#U4_RDC10_P0_btnNext_id").click(function(){
	if (flagAudioInstrucciones) {
		$("#U4_RDC10_P0").hide();
		$("#U4_RDC10_ACT1_P1").show();
		reset_P1();
		iniciaP2();
	};
});

$("#U4_RDC10_P0_btnBack_id").click(function() {
	if (flagAudioInstrucciones) {

	};
});

$("#U4_RDC10_P0_btnHome_id").click(function() {
	if (flagAudioInstrucciones) {

	};
});


});