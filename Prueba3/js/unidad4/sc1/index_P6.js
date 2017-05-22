/*******************  Variables **********************/

var instrucciones_P6 = $("#U4_RDC10_P0_pantalla7Act1_id")[0];



function validaAudioInstruccion_P6() {
	if(!instrucciones_P6.paused) {
		instrucciones_P6.pause();
		console.log("Corriendo123");
	}
	else{
		instrucciones_P6.play();
		console.log("Corriendo325");
	}
}

function reset_P6() {
	utils.blinkElement("forward_id",false);
}

function iniciaP6() {
	U4_title_RDC1_ACT_1_complete = true;
	utils.blinkElement("U4_RDC10_ACT1_P5_btnBocina_id",true);
	utils.blinkElement("forward_id",true);
	
	nav_current = "U4_RDC10_ACT1_P5";
	fun = goNextRDC10_P6;
	fun2 = goBackRDC10_P6;
}

function goNextRDC10_P6( ){
		instrucciones_P6.pause();
		instrucciones_P6.currentTime = 0;
		flagEndAct1 = true;
		reset_P6();
		iniciaP1();
}

function goBackRDC10_P6( ){
		instrucciones_P6.pause();
		instrucciones_P6.currentTime = 0;
		reset_P6();
		iniciaP5();
	
}

/*#####################################################################



######################################################################*/

$( document ).ready( function() {
	$("#U4_RDC10_ACT1_P5_btnBocina_id").click(function(){
		utils.blinkElement("U4_RDC10_ACT1_P5_btnBocina_id",false);
		$("#U4_RDC10_ACT1_P5_InfoMirror_id").show();
		$("#U4_RDC10_ACT1_P5_tilde_id").show();
		console.log("Corriendo instrucciones");
		validaAudioInstruccion_P6();
	});
});