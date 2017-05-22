/*******************  Variables **********************/

var instrucciones_P10 = $("#U4_RDC10_P0_pantalla3Actv2_id")[0];


function validaAudioInstruccion_P10() {
	if(!instrucciones_P10.paused) {
		instrucciones_P10.pause();
		console.log("Corriendo123");
	}
	else{
		instrucciones_P10.play();
		console.log("Corriendo325");
	}
}

function reset_P10() {
	utils.blinkElement("forward_id",false);
}

function iniciaP10() {

	utils.blinkElement("forward_id",true);
	utils.blinkElement("U4_RDC10_ACT2_P3_btnBocina_id",true);
	nav_current = "U4_RDC10_ACT2_P3";
	fun = goNextRDC10_P10;
	fun2 = goBackRDC10_P10;
}

function goNextRDC10_P10( ){
		instrucciones_P10.pause();
		instrucciones_P10.currentTime = 0;	
		reset_P10();
		iniciaP11();
	
}

function goBackRDC10_P10( ){
		instrucciones_P10.pause();
		instrucciones_P10.currentTime = 0;	
		reset_P10();
		iniciaP9();
	
}

/*#####################################################################



######################################################################*/

$( document ).ready( function() {
	$("#U4_RDC10_ACT2_P3_btnBocina_id").click(function(){
		utils.blinkElement("U4_RDC10_ACT2_P3_btnBocina_id",false);
		$("#U4_RDC10_ACT2_P3_InfoMirror_id").show();
		$("#U4_RDC10_ACT2_P3_tilde_id").show();
		console.log("Corriendo instrucciones");
		validaAudioInstruccion_P10();
	});

});