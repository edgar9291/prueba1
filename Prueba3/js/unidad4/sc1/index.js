/*******************  Variables **********************/

var instrucciones_P1 = null;
var flagAudioInstrucciones = false;
var flagEndAct1 = false;
var flagStartRDC = false;
var utils = null;
//Funcion ejecutada cuando se avanza:
var fun = null;
//Funcion ejecutada cuando se retrocede:
var fun2 = null;
//para saber donde estoy
var nav_current = null;

/******************************Funcion para el AutoResize***********************************************************/

function validaAudioInstruccion_P1() {
	if(!instrucciones_P1.paused) {
		instrucciones_P1.pause();
	}
	else{
		instrucciones_P1.play();
	}
}

function reset_P1() {
}

function iniciaP1() {
	utils.blinkElement("U4_RDC10_P0_btnBocina_id",true);
	if(flagEndAct1){
		utils.blinkElement("U4_RDC10_P0_btnActivity2_id",true);
	}else{
		utils.blinkElement("U4_RDC10_P0_btnActivity1_id",true);
	}
	hide_Nav();
	$(".U4_RDC10_btn").addClass("U4_RDC10_cursor");
	flagStartRDC = true;
	instrucciones_P1 = $("#U4_RDC10_P0_pantallardc10_id")[0];

}



function startRdc10() {

	utils = new Utils( );
	
	iniciaP1();
	//$("#U4_RDC10_P0").hide();
	//$("#U4_RDC10_ACT1_P1").show();
	//$("#U4_RDC10_ACT1_P2").show();
	//$("#U4_RDC10_ACT1_P3").show();
	//$("#U4_RDC10_ACT1_P4").show();
	//$("#U4_RDC10_ACT1_P5").show();
	//$("#U4_RDC10_ACT2_P1").show();
	//$("#U4_RDC10_ACT2_P2").show();
	//$("#U4_RDC10_ACT2_P3").show();
	//$("#U4_RDC10_ACT2_P4").show();
}



$("#U4_RDC10_P0_btnBocina_id").click(function() {
		utils.blinkElement("U4_RDC10_P0_btnBocina_id",false);
		$("#U4_RDC10_P0_InfoMirror_id").show();
		$("#U4_RDC10_P0_tilde_id").show();
		validaAudioInstruccion_P1();

	});


	$("#U4_RDC10_P0_btnActivity1_id").click(function() {
		utils.blinkElement("U4_RDC10_P0_btnActivity1_id",false);
			instrucciones_P1.pause();
			instrucciones_P1.currentTime = 0;
			$("#U4_RDC10_P0").hide();
			$("#U4_RDC10_ACT1_P1").show();
			reset_P1();
			iniciaP2();

	});

	$("#U4_RDC10_P0_btnActivity2_id").click(function() {
		utils.blinkElement("U4_RDC10_P0_btnActivity2_id",false);
			if (flagEndAct1) {
				//show_Nav();
				console.log("Actividd2");
				instrucciones_P1.pause();
				instrucciones_P1.currentTime = 0;
				$("#U4_RDC10_P0").hide();
				$("#U4_RDC10_ACT2_P1").show();
				reset_P1();
				iniciaP8();
			};
	});