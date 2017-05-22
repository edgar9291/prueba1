
/*******************  Variables **********************/

var instrucciones_P8 = $("#U4_RDC10_P0_pantalla1Actv2_id")[0];

function validaAudioInstruccion_P8() {
	if(!instrucciones_P8.paused) {
		instrucciones_P8.pause();
		console.log("Corriendo123");
	}
	else{
		instrucciones_P8.play();
		console.log("Corriendo325");
	}
}

function reset_P8() {
	utils.blinkElement("forward_id",false);
}

function iniciaP8() {

	utils.blinkElement("back_id",false);
	utils.blinkElement("forward_id",true);
	utils.blinkElement("U4_RDC10_ACT2_P1_btnBocina_id",true);
	//$("#back_id").show();
	nav_current = "U4_RDC10_ACT2_P1";
	fun = goNextRDC10_P8;
	fun2 = goBackRDC10_P8;
}

function goNextRDC10_P8( ){
		instrucciones_P8.pause();
		instrucciones_P8.currentTime = 0;
		reset_P8();
		iniciaP9();
	
}

function goBackRDC10_P8( ){
		instrucciones_P8.pause();
		instrucciones_P8.currentTime = 0;	
		reset_P8();
		iniciaP1();
	
}

/*#####################################################################



######################################################################*/

$( document ).ready( function() {
	$("#U4_RDC10_ACT2_P1_btnBocina_id").click(function(){
		utils.blinkElement("U4_RDC10_ACT2_P1_btnBocina_id",false);
		$("#U4_RDC10_ACT2_P1_InfoMirror_id").show();
		$("#U4_RDC10_ACT2_P1_tilde_id").show();
		console.log("Corriendo instrucciones");
		validaAudioInstruccion_P8();
	});
});