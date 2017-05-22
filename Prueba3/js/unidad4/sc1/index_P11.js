/*******************  Variables **********************/

var instrucciones_P11 = $("#U4_RDC10_P0_pantalla4Actv2_id")[0];




function validaAudioInstruccion_P11() {
	if(!instrucciones_P11.paused) {
		instrucciones_P11.pause();
		console.log("Corriendo123");
	}
	else{
		instrucciones_P11.play();
		console.log("Corriendo325");
	}
}

function reset_P11() {
	utils.blinkElement("forward_id",false);
}

function iniciaP11() {
	U4_title_RDC1_ACT_2_complete = true;
	utils.blinkElement("forward_id",true);
	utils.blinkElement("U4_RDC10_ACT2_P4_btnBocina_id",true);
	$(".U4_RDC10_btn").removeClass("U4_RDC10_cursor");
	
	nav_current = "U4_RDC10_ACT2_P4";
	fun = goNextRDC10_P11;
	fun2 = goBackRDC10_P11;
}


function goNextRDC10_P11( ){
		instrucciones_P11.pause();
		instrucciones_P11.currentTime = 0;
		flagEndAct1 = false;
		reset_P11();
		iniciaP1();
	
}

function goBackRDC10_P11( ){
		instrucciones_P11.pause();
		instrucciones_P11.currentTime = 0;
		reset_P11();		
		iniciaP10();
	
}

/*#####################################################################



######################################################################*/

$( document ).ready( function() {
	$("#U4_RDC10_ACT2_P4_btnBocina_id").click(function(){
		utils.blinkElement("U4_RDC10_ACT2_P4_btnBocina_id",false);
		$("#U4_RDC10_ACT2_P4_InfoMirror_id").show();
		$("#U4_RDC10_ACT2_P4_tilde_id").show();
		console.log("Corriendo instrucciones");
		validaAudioInstruccion_P11();
	});
});