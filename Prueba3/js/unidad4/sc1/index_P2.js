/*******************  Variables **********************/

var instrucciones_P2 = null;
/*******************  Funciones propias **********************/


function validaAudioInstruccion_P2() {
	if(!instrucciones_P2.paused) {
		instrucciones_P2.pause();
	}
	else{
		instrucciones_P2.play();
	}

}

function reset_P2() {
	utils.blinkElement("forward_id",false);
}

function iniciaP2() {
	utils.blinkElement("U4_RDC10_ACT1_P1_btnBocina_id",true);
	utils.blinkElement("forward_id",true);
	$("#forward_id").show();
	$("#back_id").show();
	$( "#home_id" ).show( );

	nav_current = "U4_RDC10_ACT1_P1";
	fun = goNextRDC10_P2;
	fun2 = goBackRDC10_P2;
	instrucciones_P2 = $("#U4_RDC10_P0_pant1Act1_id")[0];

}

function goNextRDC10_P2 ( ) {
		instrucciones_P2.pause();
		instrucciones_P2.currentTime = 0;
		reset_P2();
		iniciaP3();
	
}

function goBackRDC10_P2() {
		instrucciones_P2.pause();
		instrucciones_P2.currentTime = 0;
		reset_P2();
		iniciaP1();
	
}

/*#####################################################################



######################################################################*/

$( document ).ready( function() {
	$("#U4_RDC10_ACT1_P1_btnBocina_id").click(function() {
		utils.blinkElement("U4_RDC10_ACT1_P1_btnBocina_id",false);
		$("#U4_RDC10_ACT1_P1_InfoMirror_id").show();
		$("#U4_RDC10_ACT1_P1_tilde_id").show();
		console.log("Corriendo instrucciones");
		validaAudioInstruccion_P2();
	});
});