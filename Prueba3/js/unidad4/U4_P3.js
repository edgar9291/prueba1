var x=0;
var v1='video/unidad4/brujas.mp4';
var v2='video/unidad4/pituca.mp4';
var valop=0;
var U4_RDC12_ACT1_finish = false;
var RDC12_text=undefined;
var U12_S1_audio= new Audio();
U12_S1_audio.src="audio/unidad4/sc3/instruccionesp1.mp3";
var U12_S2_audio= new Audio();
U12_S2_audio.src="audio/unidad4/sc3/instruccionesp2.mp3";
var U12_S3_audio= new Audio();
U12_S3_audio.src="audio/unidad4/sc3/instruccionesp3.mp3";
var U12_S4_audio= new Audio();
U12_S4_audio.src="audio/unidad4/sc3/instruccionesp7.mp3";
var U12_S5_audio= new Audio();
U12_S5_audio.src="audio/unidad4/sc3/instruccionesp11.mp3";
var U12_S6_audio= new Audio();
U12_S6_audio.src="audio/unidad4/sc3/instruccionesp14.mp3";

function initRdc12( ){
	var d1;
	//new Utils( ).attachResize( $("#U4_RDC12_ContenedorPrincipal_id"), 1024, 765 );
	//$("#U4_RDC12_P0").show();
	//$("#U4_RDC12_ACT1_P1").hide();
	//$("#U4_RDC12_ACT1_P2").hide();
	//$("#U4_RDC12_ACT1_P1").hide();
	//$("#U4_RDC12_ACT1_P4").hide();
	//$("#U4_RDC12_ACT1_P5").hide();
	//$("#U4_RDC12_ACT1_P6").hide();
	//$("#U4_RDC12_ACT1_P7").hide();
	//$("#U4_RDC12_ACT1_P8").hide();
	//$("#U4_RDC12_ACT1_P9").hide();
	//$("#U4_RDC12_ACT1_P10").hide();
	//$("#U4_RDC12_ACT2_P1").hide();
	//$("#U4_RDC12_ACT2_P2").hide();
	//$("#U4_RDC12_ACT2_P3").hide();
	//$("#U4_RDC12_ACT2_P4").hide();
	//$("#U4_RDC12_ACT2_P5").hide();



	$("#U4_RDC12_ACT1_P2_FondoPop_id").hide();
	$("#U4_RDC12_ACT1_P2_PlayerPop_id").hide();
	
	startP1( );
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TEXTEDITOR

	RDC12_text=new EditTextQuestion( {
		parentDiv: "U4_RDC12_ACT1_P8_Respuestas_id",
		saveButtonId: "U4_RDC12_ACT1_P8_Comprobar_id",
		writeDocx: false,
		afterSubmit: function( text ){
		$( "#U4_RDC12_ACT1_P10_PanelPop_id" ).html( text );
		}
		} 
	);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Cerrar Retroalimentación
$(".U4_RDC12_Tache").click(function() {
	$("#U4_RDC12_ACT1_P4_RetInco_id").hide();
	$("#U4_RDC12_ACT1_P5_RetInco_id").hide();
	$("#U4_RDC12_ACT1_P6_RetInco_id").hide();
	$("#U4_RDC12_ACT1_P7_RetInco_id").hide();
});

$(".U4_RDC12_Paloma").click(function() {
	$("#U4_RDC12_ACT1_P4_RetCorr_id").hide();
	$("#U4_RDC12_ACT1_P5_RetCorr_id").hide();
	$("#U4_RDC12_ACT1_P6_RetCorr_id").hide();
	$("#U4_RDC12_ACT1_P7_RetCorr_id").hide();
});
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DragQuestios
boxDragQuestion( {
				droppableDiv: "U4_RDC12_ACT1_P4_Respuestas_id",
				draggablesDiv: "U4_RDC12_ACT1_P4_Opciones_id",
				correctFeedback: "U4_RDC12_ACT1_P4_RetCorr_id",
				wrongFeedback: "U4_RDC12_ACT1_P4_RetInco_id",
				correctPosition: 3,
				waitCorrectButton: true,
				checkButtonId: "U4_RDC12_ACT1_P4_Comprobar_id",
				resetButtonId: "reset",
				onPassActivity: function( isCorrect ){
					console.debug( "Me ha pasado " + isCorrect );
					if(isCorrect==false||isCorrect==true){console.debug("terminada");
					$("#forward_id").show();
					utils.blinkElement("forward_id", true );
					}
					$( "#options" ).find( "div" ).css( "cursor", "default" );
				},
				onEnter: function( ){
					$( "#correctBox" ).css( "background-color", "blue" );
				},
				onLeave: function( ){
					$( "#correctBox" ).css( "background-color", "" );
				}
			} );
		
function showNavblink(){
	show_Nav();
	utils.blinkElement("forward_id", true );
}
multipleChoiceQuestion("U4_RDC12_ACT1_P5_Opciones_id", "U4_RDC12_ACT1_P5_Comprobar_id", 2, "U4_RDC12_ACT1_P5_RetCorr_id", "U4_RDC12_ACT1_P5_RetInco_id", showNavblink);
		

boxDragQuestion( {
				droppableDiv: "U4_RDC12_ACT1_P6_Respuestas_id",
				draggablesDiv: "U4_RDC12_ACT1_P6_Opciones_id",
				correctFeedback: "U4_RDC12_ACT1_P6_RetCorr_id",
				wrongFeedback: "U4_RDC12_ACT1_P6_RetInco_id",
				correctPosition: 1,
				waitCorrectButton: true,
				checkButtonId: "U4_RDC12_ACT1_P6_Comprobar_id",
				resetButtonId: "reset",
				onPassActivity: function( isCorrect ){
					console.debug( "Me ha pasado " + isCorrect );
					if(isCorrect==false||isCorrect==true){console.debug("terminada");
						$("#forward_id").show();
						utils.blinkElement("forward_id", true );
					}
					$( "#options" ).find( "div" ).css( "cursor", "default" );
				},
				onEnter: function( ){
					$( "#correctBox" ).css( "background-color", "blue" );
				},
				onLeave: function( ){
					$( "#correctBox" ).css( "background-color", "" );
				}
			} );
		

multipleChoiceQuestion("U4_RDC12_ACT1_P7_Opciones_id", "U4_RDC12_ACT1_P7_Comprobar_id", 1, "U4_RDC12_ACT1_P7_RetCorr_id", "U4_RDC12_ACT1_P7_RetInco_id", showNavblink);


}//end documentReady( )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANTALLA1
function startP1( ){
	$( "#home_id" ).show( );
	utils.blinkElement("forward_id", false );
	utils.blinkElement( "back_id", false );
	$( "#forward_id" ).hide( );
	$( "#back_id" ).hide( );
	utils.blinkElement("U4_RDC12_P0_Bocina_id",true);
	if(U4_RDC12_ACT1_finish){
		utils.blinkElement("U4_RDC12_P0_Opcion2_id",true);
	}else{
		utils.blinkElement("U4_RDC12_P0_Opcion1_id",true);
	
	}

	U12_S1_audio.addEventListener("ended",function(){
		U12_S1_audio.currentTime=0;
	});
	
	console.debug( "Nav: " + nav_current );
	nav_current = "U4_RDC12_P0";
	fun = goNextRDC12_P1;
	fun2 = goBackRDC12_P1;
}
$("#U4_RDC12_P0_Bocina_id").click(function() {
	utils.blinkElement("U4_RDC12_P0_Bocina_id",false);
		valop=0;
		
		if(!U12_S1_audio.paused){
			U12_S1_audio.pause();
		}
		else{
			U12_S1_audio.play();
		}					
	});
$("#U4_RDC12_P0_Opcion1_id").click(function() {
	utils.blinkElement("U4_RDC12_P0_Opcion2_id",false);
	utils.blinkElement("U4_RDC12_P0_Opcion1_id",false);
		startP2( );
		resetP1( );
		//U4_RDC12_ACT1_P1
		JQUERY4U.CambVent($("#U4_RDC12_ACT1_P1"),$("#U4_RDC12_P0"),U12_S1_audio);	
	});
	$("#U4_RDC12_P0_Opcion2_id").click(function() {
		utils.blinkElement("U4_RDC12_P0_Opcion2_id",false);
	utils.blinkElement("U4_RDC12_P0_Opcion1_id",false);
		startP11( );
		resetP1( );
		JQUERY4U.CambVent($("#U4_RDC12_ACT2_P1"),$("#U4_RDC12_P0"),U12_S1_audio);	
	});
function resetP1( ){
	
}

function goNextRDC12_P1( ){
	resetP1( );
	startP2( );
}

function goBackRDC12_P1( ){
	resetP1( );
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANTALLA2
function startP2( ){
	utils.blinkElement("U4_RDC12_ACT1_P1_Bocina_id",true);
	$( "#forward_id" ).show( );
	$( "#back_id" ).show( );
	utils.blinkElement("forward_id",true);


	U12_S2_audio.addEventListener("ended",function(){
		U12_S2_audio.currentTime=0;
	});
	console.debug( "Nav: " + nav_current );
	nav_current = "U4_RDC12_ACT1_P1";
	fun = goNextRDC12_P2;
	fun2 = goBackRDC12_P2;
}
$("#U4_RDC12_ACT1_P1_Bocina_id").click(function() {
		utils.blinkElement("U4_RDC12_ACT1_P1_Bocina_id",false);
		$("#U4_P3_TextEspejo2_id").show();
		
		if(!U12_S2_audio.paused){
			U12_S2_audio.pause();
		}
		else{
			U12_S2_audio.play();
		}		
	});
function resetP2( ){
	
}

function goNextRDC12_P2( ){
	U12_S2_audio.pause();
	U12_S2_audio.currentTime=0;
	resetP2( );
	startP2v( );

}

function goBackRDC12_P2( ){
	U12_S2_audio.pause();
	U12_S2_audio.currentTime=0;
	resetP2( );
	startP1( );
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANTALLA2 Videos
function startP2v( ){
	
	console.debug( "Nav: " + nav_current );
	//nav_current = "U4_RDC12_ACT1_P2";
	fun = goNextRDC12_P2v;
	fun2 = goBackRDC12_P2v;
}
	
function resetP2v( ){
	
}

function goNextRDC12_P2v( ){
	$("#forward_id").show();
	utils.blinkElement("forward_id", true );
	resetP2v( );
	startP3( );
}

function goBackRDC12_P2v( ){
	resetP2v( );
	startP2( );
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANATALLA3
function startP3( ){
	utils.blinkElement("U4_RDC12_ACT1_P3_Bocina_id",true);


	U12_S3_audio.addEventListener("ended",function(){
		U12_S3_audio.currentTime=0;
	});
	console.debug( "Nav: " + nav_current );
	//nav_current = "U4_RDC12_ACT1_P3";
	fun = goNextRDC12_P3v;
	fun2 = goBackRDC12_P3v;
}
$("#U4_RDC12_ACT1_P3_Bocina_id").click(function() {
		utils.blinkElement("U4_RDC12_ACT1_P3_Bocina_id",false);
		$("#U4_P3_TextEspejo3_id").show();
		if(!U12_S3_audio.paused){
			U12_S3_audio.pause();
		}
		else{
			U12_S3_audio.play();
		}		
	});
$("#U4_RDC12_ACT1_P2_VImg1_id").click(function() {
		$("#U4_RDC12_ACT1_P2_VideoPop_id").attr('src',v1);
		$("#U4_RDC12_ACT1_P2_FondoPop_id").show();
		$("#U4_RDC12_ACT1_P2_PlayerPop_id").show( {
			effect: "scale",
			duration: 300
		} );
	});

	$("#U4_RDC12_ACT1_P4_Vid1_id").click(function() {
		$("#U4_RDC12_ACT1_P2_VideoPop_id").attr('src',v1);
		$("#U4_RDC12_ACT1_P2_FondoPop_id").show();
		$("#U4_RDC12_ACT1_P2_PlayerPop_id").show( {
			effect: "scale",
			duration: 300
		} );
	});
	$("#U4_RDC12_ACT1_P5_Vid1_id").click(function() {
		$("#U4_RDC12_ACT1_P2_VideoPop_id").attr('src',v1);
		$("#U4_RDC12_ACT1_P2_FondoPop_id").show();
		$("#U4_RDC12_ACT1_P2_PlayerPop_id").show( {
			effect: "scale",
			duration: 300
		} );
	});
	$("#U4_RDC12_ACT1_P6_Vid1_id").click(function() {
		$("#U4_RDC12_ACT1_P2_VideoPop_id").attr('src',v1);
		$("#U4_RDC12_ACT1_P2_FondoPop_id").show();
		$("#U4_RDC12_ACT1_P2_PlayerPop_id").show( {
			effect: "scale",
			duration: 300
		} );
	});
	$("#U4_RDC12_ACT1_P7_Vid1_id").click(function() {
		$("#U4_RDC12_ACT1_P2_VideoPop_id").attr('src',v1);
		$("#U4_RDC12_ACT1_P2_FondoPop_id").show();
		$("#U4_RDC12_ACT1_P2_PlayerPop_id").show( {
			effect: "scale",
			duration: 300
		} );
	});
	
	$("#U4_RDC12_ACT1_P2_VImg2_id").click(function() {
		$("#U4_RDC12_ACT1_P2_VideoPop_id").attr('src',v2);
		$("#U4_RDC12_ACT1_P2_FondoPop_id").show();
		$("#U4_RDC12_ACT1_P2_PlayerPop_id").show( {
			effect: "scale",
			duration: 300
		} );
	});

	$("#U4_RDC12_ACT1_P4_Vid2_id").click(function() {
		$("#U4_RDC12_ACT1_P2_VideoPop_id").attr('src',v2);
		$("#U4_RDC12_ACT1_P2_FondoPop_id").show();
		$("#U4_RDC12_ACT1_P2_PlayerPop_id").show( {
			effect: "scale",
			duration: 300
		} );
	});
	$("#U4_RDC12_ACT1_P5_Vid2_id").click(function() {
		$("#U4_RDC12_ACT1_P2_VideoPop_id").attr('src',v2);
		$("#U4_RDC12_ACT1_P2_FondoPop_id").show();
		$("#U4_RDC12_ACT1_P2_PlayerPop_id").show( {
			effect: "scale",
			duration: 300
		} );
	});
	$("#U4_RDC12_ACT1_P6_Vid2_id").click(function() {
		$("#U4_RDC12_ACT1_P2_VideoPop_id").attr('src',v2);
		$("#U4_RDC12_ACT1_P2_FondoPop_id").show();
		$("#U4_RDC12_ACT1_P2_PlayerPop_id").show( {
			effect: "scale",
			duration: 300
		} );
	});
	$("#U4_RDC12_ACT1_P7_Vid2_id").click(function() {
		$("#U4_RDC12_ACT1_P2_VideoPop_id").attr('src',v2);
		$("#U4_RDC12_ACT1_P2_FondoPop_id").show();
		$("#U4_RDC12_ACT1_P2_PlayerPop_id").show( {
			effect: "scale",
			duration: 300
		} );
	});

	$("#U4_RDC12_ACT1_P2_FondoPop_id").click(function() {
		$("#U4_RDC12_ACT1_P10_PanelPop_id").hide( {
			effect: "scale",
			duration: 300
		} );
		$("#U4_RDC12_ACT1_P2_PlayerPop_id").hide( {
			effect: "scale",
			duration: 300
		} );
		$("#U4_RDC12_ACT1_P2_FondoPop_id").hide();		
	});
function resetP3( ){
	
}

function goNextRDC12_P3v( ){
	utils.blinkElement("forward_id", false );
	$("#forward_id").hide();
	U12_S3_audio.pause();
	U12_S3_audio.currentTime=0;
	resetP3( );
	startP4( );
}

function goBackRDC12_P3v( ){
	$("#forward_id").show();
	utils.blinkElement("forward_id", true );
	U12_S3_audio.pause();
	U12_S3_audio.currentTime=0;
	resetP3( );
	startP2v( );
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANATALLA4
function startP4( ){
	console.debug( "Nav: " + nav_current );
	//nav_current = "U4_RDC12_ACT1_P4";
	fun = goNextRDC12_P4;
	fun2 = goBackRDC12_P4;
}

function resetP4( ){
	
}

function goNextRDC12_P4( ){	
	utils.blinkElement("forward_id", false );
	$("#forward_id").hide();
	resetP4( );
	startP5( );
	JQUERY4U.resetPr1();
}

function goBackRDC12_P4( ){	
	$("#forward_id").show();
	utils.blinkElement("forward_id", false );
	resetP4( );
	startP3( );
	JQUERY4U.resetPr1();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANATALLA5
function startP5( ){
	console.debug( "Nav: " + nav_current );
	//nav_current = "U4_RDC12_ACT1_P5";
	fun = goNextRDC12_P5;
	fun2 = goBackRDC12_P5;
}

function restartP5( ){
	
}
function goNextRDC12_P5( ){	
	utils.blinkElement("forward_id", false );
	$("#forward_id").hide();
	restartP5( );
	startP6( );
	JQUERY4U.resetP2();
}

function goBackRDC12_P5( ){
	utils.blinkElement("forward_id", false );
	$("#forward_id").hide();
	restartP5( );
	startP4( );
	JQUERY4U.resetP2();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANATALLA6
function startP6( ){
	console.debug( "Nav: " + nav_current );
	//nav_current = "U4_RDC12_ACT1_P6";
	fun = goNextRDC12_P6;
	fun2 = goBackRDC12_P6;
}

function restartP6( ){
	
}

function goNextRDC12_P6( ){
	utils.blinkElement("forward_id", false );
	$("#forward_id").hide();
	restartP6( );
	startP7( );
	JQUERY4U.resetP3();
	$("#forward_id").hide();
}

function goBackRDC12_P6( ){
	utils.blinkElement("forward_id", false );
	$("#forward_id").hide();
	restartP6( );
	startP5( );
	JQUERY4U.resetP3();
	$("#forward_id").hide();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANATALLA7
function startP7( ){
	console.debug( "Nav: " + nav_current );
	//nav_current = "U4_RDC12_ACT1_P7";
	fun = goNextRDC12_P7;
	fun2 = goBackRDC12_P7;
}

function restartP7( ){

}

function goNextRDC12_P7( ){
	$("#forward_id").show();
	utils.blinkElement("forward_id", true );
	restartP7( );
	startP8( );
	JQUERY4U.resetP4();
}

function goBackRDC12_P7( ){	
	utils.blinkElement("forward_id", false );
	$("#forward_id").hide();
	restartP7( );
	startP6( );
	JQUERY4U.resetP4();
	$("#forward_id").hide();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANATALLA8
function startP8( ){
	console.debug( "Nav: " + nav_current );
	utils.blinkElement("forward_id", false );
	$( "#forward_id" ).hide( );
	
	//nav_current = "U4_RDC12_ACT1_P8";
	fun = goNextRDC12_P8;
	fun2 = goBackRDC12_P8;
	
}
$("#U4_RDC12_ACT1_P8_Comprobar_id").click(function() {
		$( "#forward_id" ).show( );
		utils.blinkElement("forward_id", true );
	});
function restartP8( ){
	
}

function goNextRDC12_P8( ){
	$("#U4_RDC12_ACT1_P2_PlayerPop_id").hide();
	$("#U4_RDC12_ACT1_P2_FondoPop_id").hide();
	restartP8( );
	startP9( );
	RDC12_text.reset();
}

function goBackRDC12_P8( ){
	$("#U4_RDC12_ACT1_P2_PlayerPop_id").hide();
	$("#U4_RDC12_ACT1_P2_FondoPop_id").hide();
	restartP8( );
	startP7( );
	RDC12_text.reset();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANTALLA9
function startP9( ){
	console.debug( "Nav: " + nav_current );
	utils.blinkElement("U4_RDC12_ACT1_P9_Bocina_id",true);
	utils.blinkElement("forward_id", true );

	
	//nav_current = "U4_RDC12_ACT1_P9";
	fun = goNextRDC12_P9;
	fun2 = goBackRDC12_P9;
}
U12_S4_audio.addEventListener("ended",function(){
		U12_S4_audio.currentTime=0;
	});
$("#U4_RDC12_ACT1_P9_Bocina_id").click(function() {
		utils.blinkElement("U4_RDC12_ACT1_P9_Bocina_id",false);
		valop=0;
		
		if(!U12_S4_audio.paused){
			U12_S4_audio.pause();
		}
		else{
			U12_S4_audio.play();
		}					
	});
function restartP9( ){
	
}

function goNextRDC12_P9( ){
	U12_S4_audio.pause();
	U12_S4_audio.currentTime=0;
	restartP9( );
	startP10( );
}

function goBackRDC12_P9( ){
	U12_S4_audio.pause();
	U12_S4_audio.currentTime=0;
	restartP9( );
	startP8( );
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANATALLA10
function startP10( ){
	U4_title_RDC3_ACT_1_complete = true;
	utils.blinkElement("forward_id", true );
	console.debug( "Nav: " + nav_current );
	U4_RDC12_ACT1_finish = true;
	//nav_current = "U4_RDC12_ACT1_P10";
	fun = goNextRDC12_P10;
	fun2 = goBackRDC12_P10;
}
function restartP10( ){
	
}

function goNextRDC12_P10( ){
	restartP10( );
	startP1( );
}

function goBackRDC12_P10( ){
	restartP10( );
	startP9( );
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANTALLA11
function startP11( ){
	console.debug( "Nav: " + nav_current );
	$( "#forward_id" ).show( );
	$( "#back_id" ).show( );
	utils.blinkElement("U4_RDC12_ACT2_P1_Bocina_id",true);
	utils.blinkElement("forward_id", true );
	


	U12_S5_audio.addEventListener("ended",function(){
		U12_S5_audio.currentTime=0;
	});
	nav_current = "U4_RDC12_ACT2_P1";
	fun = goNextRDC12_P11;
	fun2 = goBackRDC12_P11;
}
$("#U4_RDC12_ACT2_P1_Bocina_id").click(function() {
		utils.blinkElement("U4_RDC12_ACT2_P1_Bocina_id",false);
		if(!U12_S5_audio.paused){
			U12_S5_audio.pause();
		}
		else{
			U12_S5_audio.play();
		}		
	});
function restartP11( ){
}
function goNextRDC12_P11( ){
	U12_S5_audio.pause();
	U12_S5_audio.currentTime=0;
	restartP11( );
	startP12( );
}

function goBackRDC12_P11( ){
	U12_S5_audio.pause();
	U12_S5_audio.currentTime=0;
	restartP11( );
	startP10( );
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANTALLA12
function startP12( ){
	console.debug( "Nav: " + nav_current );
	//nav_current = "U4_RDC12_ACT2_P2";
	fun = goNextRDC12_P12;
	fun2 = goBackRDC12_P12;
}

function restartP12( ){
	
}

function goNextRDC12_P12( ){
	restartP12( );
	startP13( );
}

function goBackRDC12_P12( ){
	restartP12( );
	startP11( );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANTALLA13
function startP13( ){
	console.debug( "Nav: " + nav_current );
	//nav_current = "U4_RDC12_ACT2_P3";
	fun = goNextRDC12_P13;
	fun2 = goBackRDC12_P13;
}
function restartP13( ){
	
}

function goNextRDC12_P13( ){
	restartP13( );
	startP14( );
}

function goBackRDC12_P13( ){
	restartP13( );
	startP12( );
	
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANTALLA14
function startP14( ){
	console.debug( "Nav: " + nav_current );
	//nav_current = "U4_RDC12_ACT2_P4";
	fun = goNextRDC12_P14;
	fun2 = goBackRDC12_P14;
}

function restartP14( ){
	
}

function goNextRDC12_P14( ){
	restartP14( );
	startP15( );
}

function goBackRDC12_P14( ){
	restartP14( );
	startP13( );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PANTALLA15
function startP15( ){
	U4_title_RDC3_ACT_2_complete = true;
	console.debug( "Nav: " + nav_current );
	utils.blinkElement("U4_RDC12_ACT2_P5_Bocina_id",true);


	U12_S6_audio.addEventListener("ended",function(){
		
		U12_S6_audio.currentTime=0;
	});
	//nav_current = "U4_RDC12_ACT2_P5";
	fun = goNextRDC12_P15;
	fun2 = goBackRDC12_P15;
}
$("#U4_RDC12_ACT2_P5_Bocina_id").click(function() {
		utils.blinkElement("U4_RDC12_ACT2_P5_Bocina_id",false);
		valop=0;
		
		if(!U12_S6_audio.paused){
			U12_S6_audio.pause();
		}
		else{
			U12_S6_audio.play();
		}					
	});
function restartP15( ){
	
}
function goNextRDC12_P15( ){
	U12_S6_audio.pause();
	U12_S6_audio.currentTime=0;
	restartP15( );
	startP1( );
}

function goBackRDC12_P15( ){
	U12_S6_audio.pause();
	U12_S6_audio.currentTime=0;
	restartP15( );
	startP14( );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////Funciones externas

JQUERY4U = {
	VEnd: function() {
		x++;	
		if(x>=2){
			$("#U4_P3_Siguiente2_1_id").css("cursor", "pointer");
			$("#U4_P3_Anterior2_1_id").css("cursor", "pointer");
		}	
	},

	CambVent: function(muestra,oculta,sonido) {
		muestra.show();
		oculta.hide();
		sonido.pause();
		sonido.currentTime=0;
	},
	Pop:function(){
		$("#U4_RDC12_ACT1_P2_FondoPop_id").show();
		$("#U4_RDC12_ACT1_P10_PanelPop_id").show( {
			effect: "scale",
			duration: 300
		} );
	},
	resetPr1:function(){
		$("#U4_RDC12_ACT1_P4_RetInco_id").hide();
		$("#U4_RDC12_ACT1_P4_RetCorr_id").hide();
		$('#U4_RDC12_ACT1_P4_Resp1_id').css({'top': '40%'});
		$('#U4_RDC12_ACT1_P4_Resp1_id').css({'left': '10%'});
		$('#U4_RDC12_ACT1_P4_Resp2_id').css({'top':'50%'});
		$('#U4_RDC12_ACT1_P4_Resp2_id').css({'left': '10%'});
		$('#U4_RDC12_ACT1_P4_Resp3_id').css({'top':'60%'});
		$('#U4_RDC12_ACT1_P4_Resp3_id').css({'left': '10%'});
		$('#U4_RDC12_ACT1_P4_Resp4_id').css({'top':'30%'});
		$('#U4_RDC12_ACT1_P4_Resp4_id').css({'left': '10%'});
		boxDragQuestion( {
				droppableDiv: "U4_RDC12_ACT1_P4_Respuestas_id",
				draggablesDiv: "U4_RDC12_ACT1_P4_Opciones_id",
				correctFeedback: "U4_RDC12_ACT1_P4_RetCorr_id",
				wrongFeedback: "U4_RDC12_ACT1_P4_RetInco_id",
				correctPosition: 3,
				waitCorrectButton: true,
				checkButtonId: "U4_RDC12_ACT1_P4_Comprobar_id",
				resetButtonId: "reset",
				onPassActivity: function( isCorrect ){
					console.debug( "Me ha pasado " + isCorrect );
					if(isCorrect==false||isCorrect==true){console.debug("terminada");$("#forward_id").show();}
					$( "#options" ).find( "div" ).css( "cursor", "default" );
				},
				onEnter: function( ){
					$( "#correctBox" ).css( "background-color", "blue" );
				},
				onLeave: function( ){
					$( "#correctBox" ).css( "background-color", "" );
				}
			} );
		
	},
	//////////////////////////////////////////////////////////////////////////////////////////////RESET1Fin	
resetP2:function(){
	$("#U4_RDC12_ACT1_P5_RetInco_id").hide();
	$("#U4_RDC12_ACT1_P5_RetCorr_id").hide();
	$(".U4_RDC12_ACT1_P7_Resp").removeClass( "multipleChoiceQuestionShadow" );



},
//////////////////////////////////////////////////////////////////////////////////////////////RESET2Fin	
resetP3:function(){
		$("#U4_RDC12_ACT1_P6_RetInco_id").hide();
		$("#U4_RDC12_ACT1_P6_RetCorr_id").hide();
		$('#U4_RDC12_ACT1_P6_Resp1_id').css({'top': '40%'});
		$('#U4_RDC12_ACT1_P6_Resp1_id').css({'left': '10%'});
		$('#U4_RDC12_ACT1_P6_Resp2_id').css({'top':'50%'});
		$('#U4_RDC12_ACT1_P6_Resp2_id').css({'left': '10%'});
		$('#U4_RDC12_ACT1_P6_Resp3_id').css({'top':'60%'});
		$('#U4_RDC12_ACT1_P6_Resp3_id').css({'left': '10%'});
		$('#U4_RDC12_ACT1_P6_Resp4_id').css({'top':'30%'});
		$('#U4_RDC12_ACT1_P6_Resp4_id').css({'left': '10%'});
		boxDragQuestion( {
				droppableDiv: "U4_RDC12_ACT1_P6_Respuestas_id",
				draggablesDiv: "U4_RDC12_ACT1_P6_Opciones_id",
				correctFeedback: "U4_RDC12_ACT1_P6_RetCorr_id",
				wrongFeedback: "U4_RDC12_ACT1_P6_RetInco_id",
				correctPosition: 1,
				waitCorrectButton: true,
				checkButtonId: "U4_RDC12_ACT1_P6_Comprobar_id",
				resetButtonId: "reset",
				onPassActivity: function( isCorrect ){
					console.debug( "Me ha pasado " + isCorrect );
					if(isCorrect==false||isCorrect==true){console.debug("terminada");$("#forward_id").show();}
					$( "#options" ).find( "div" ).css( "cursor", "default" );
				},
				onEnter: function( ){
					$( "#correctBox" ).css( "background-color", "blue" );
				},
				onLeave: function( ){
					$( "#correctBox" ).css( "background-color", "" );
				}
			} );
		
	},
//////////////////////////////////////////////////////////////////////////////////////////////RESET3Fin	
resetP4:function(){
	
	$("#U4_RDC12_ACT1_P7_RetInco_id").hide();
	$("#U4_RDC12_ACT1_P7_RetCorr_id").hide();
	$(".U4_RDC12_ACT1_P7_Resp").removeClass( "multipleChoiceQuestionShadow" );

		
}
};
