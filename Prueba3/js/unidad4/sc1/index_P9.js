/*******************  Variables **********************/

var instrucciones_P9 = $('#U4_RDC10_P0_pantalla2Act2_id')[0];

function validaAudioInstruccion_P9() {
	if(!instrucciones_P9.paused) {
		instrucciones_P9.pause();
		console.log("Corriendo123");
	}
	else{
		instrucciones_P9.play();
		console.log("Corriendo325");
	}
}

function reset_P9() {
	utils.blinkElement("forward_id",false);
}

function iniciaP9() {

	utils.blinkElement("forward_id",true);
	utils.blinkElement("U4_RDC10_ACT2_P2_btnBocina_id",true);	
	nav_current = "U4_RDC10_ACT2_P2";
	fun = goNextRDC10_P9;
	fun2 = goBackRDC10_P9;
}

function goNextRDC10_P9( ){
		instrucciones_P9.pause();	
		instrucciones_P9.currentTime = 0;
		reset_P9();
		iniciaP10();
	
}

function goBackRDC10_P9( ){
		instrucciones_P9.pause();	
		instrucciones_P9.currentTime = 0;	
		reset_P9();	
		iniciaP8();
	
}

/*#####################################################################


######################################################################*/

$( document ).ready( function() {
	$("#U4_RDC10_ACT2_P2_btnBocina_id").click(function(){
		utils.blinkElement("U4_RDC10_ACT2_P2_btnBocina_id",false);
		$("#U4_RDC10_ACT2_P2_InfoMirror_id").show();
		$("#U4_RDC10_ACT2_P2_tilde_id").show();
		console.log("Corriendo instrucciones");
		validaAudioInstruccion_P9();
	});
});