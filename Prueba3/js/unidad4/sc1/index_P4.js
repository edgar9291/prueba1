/*******************  Variables **********************/

var instrucciones_P4 = $("#U4_RDC10_P0_pantalla5Act1_id")[0];


function validaAudioInstruccion_P4() {
	if(!instrucciones_P4.paused) {
		instrucciones_P4.pause();
		console.log("Corriendo123");
	}
	else{
		instrucciones_P4.play();
		console.log("Corriendo325");
	}
}

function reset_P4() {
	utils.blinkElement("forward_id",false);
}

function iniciaP4() {
	
	utils.blinkElement("U4_RDC10_ACT1_P3_btnBocina_id",true);
	utils.blinkElement("forward_id",true);
	nav_current = "U4_RDC10_ACT1_P3";
	fun = goNextRDC10_P4;
	fun2 = goBackRDC10_P4;
}

function goNextRDC10_P4( ){
		instrucciones_P4.pause();
		instrucciones_P4.currentTime = 0;
		reset_P4( );
		iniciaP5( );
	
}

function goBackRDC10_P4( ){
		instrucciones_P4.pause();
		instrucciones_P4.currentTime = 0;
		reset_P4();		
		iniciaP3();
	
}

/*#####################################################################



######################################################################*/

$( document ).ready( function() {
	$("#U4_RDC10_ACT1_P3_btnBocina_id").click(function(){
		utils.blinkElement("U4_RDC10_ACT1_P3_btnBocina_id",false);
		$("#U4_RDC10_ACT1_P3_InfoMirror_id").show();
		$("#U4_RDC10_ACT1_P3_tilde_id").show();
		console.log("Corriendo instrucciones");
		validaAudioInstruccion_P4();
	});

});