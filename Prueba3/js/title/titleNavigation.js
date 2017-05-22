/** Funcionamiento de la navegación de las portadas
 * 
 */
 var currentUnit;
 var title_dropDownAnimating = false;
 var title_dropDownOpen = false;
 var U4_title_RDC1_ACT_1_complete = false;
 var U4_title_RDC1_ACT_2_complete = false;
 var U4_title_RDC2_ACT_1_complete = false;
 var U4_title_RDC2_ACT_2_complete = false;
 var U4_title_RDC3_ACT_1_complete = false;
 var U4_title_RDC3_ACT_2_complete = false;
 
 var U6_title_RDC1_ACT_1_complete = false;
 var U6_title_RDC2_ACT_1_complete = false;
 var U6_title_RDC2_ACT_2_complete = false;
 var U6_title_RDC3_ACT_1_complete = false;
 var U6_title_RDC3_ACT_2_complete = false;
 var U6_title_audio;

/**
 * title_initUnit1() Función que inicia la navegación de la unidad 1
 */
function title_initUnit1() {
	title_stopAllAnimations();
	$("#U1_title-cover-clouds_id").css("left","0%");
	$("#U1_title-cover-clouds2_id").css("left","128%");
	$("#U1_title-cover-dragon_id").css("left","6%");
	$("#U1_title-cover-dragon_id").css("top","20%");
	title_hideDropDown();
	title_dropDownAnimating = false;
	title_dropDownOpen = false;
	currentUnit = 1;
	hide_Home();
	title_hideBigButtons();
	title_hideAllScreens();
	title_showAllButtons();
	title_hideUnitButton(1);
	title_showUnitScreen(1);
	title_showUnitBigButton(1);
	$(".title-nav-top-unit-2").css("left","55%");
	$(".title-nav-top-unit-3").css("left","64%");
	$(".title-nav-top-unit-4").css("left","73%");
	$(".title-nav-top-unit-5").css("left","82%");
	$(".title-nav-top-unit-6").css("left","91%");
	$(".title-nav-top-big-unit-1").css("left","43.6%");
	title_showMainMenu();
	title_isCloudAnimating = true;
	title_isSnakeAnimating = true;
	title_playClouds();
	title_playSnake();

}
/**
 * title_initUnit2() Función que inicia la navegación de la unidad 2
 */
function title_initUnit2() {
	title_stopAllAnimations();
	title_hideDropDown();
	title_dropDownAnimating = false;
	title_dropDownOpen = false;
	currentUnit = 2;
	hide_Home();
	title_hideBigButtons();
	title_hideAllScreens();
	title_showAllButtons();
	title_hideUnitButton(2);
	title_showUnitScreen(2);
	title_showUnitBigButton(2);
	$(".title-nav-top-unit-1").css("left","43.6%");
	$(".title-nav-top-unit-3").css("left",'64%');
	$(".title-nav-top-unit-4").css("left","73%");
	$(".title-nav-top-unit-5").css("left","82%");
	$(".title-nav-top-unit-6").css("left","91%");
	$(".title-nav-top-big-unit-2").css("left","52.6%");
	title_showMainMenu();
	title_isStarAnimating = true;
	title_isShootingStarAnimating = true;
	title_startStar1();
	title_startShootingStar();
}
/**
 * title_initUnit3() Función que inicia la navegación de la unidad 3
 */
function title_initUnit3() {
	title_stopAllAnimations();
	title_hideDropDown();
	title_dropDownAnimating = false;
	title_dropDownOpen = false;
	currentUnit = 3;
	hide_Home();
	$(".title-nav-top-unit-1").css("left","41.25%");
	$(".title-nav-top-unit-2").css("left","50.25%");
	title_hideBigButtons();
	title_hideAllScreens();
	title_showAllButtons();
	title_hideUnitButton(3);
	title_showUnitScreen(3);
	title_showUnitBigButton(3);
	$(".title-nav-top-unit-4").css("left","73%");
	$(".title-nav-top-unit-5").css("left","82%");
	$(".title-nav-top-unit-6").css("left","91%");
	$(".title-nav-top-big-unit-3").css("left","61.6%");
	title_showMainMenu();
	title_isFlashlightAnimating = true;
	title_isDropAnimating = true;
	title_startFlashlight();
	title_startDrop();
	$(".U3_P2_RDC7_ACT_1_Video").trigger("pause");
}
/**
 * title_initUnit4() Función que inicia la navegación de la unidad 4
 */
function title_initUnit4() {
	title_stopAllAnimations();
	title_hideDropDown();
	title_dropDownAnimating = false;
	title_dropDownOpen = false;
	currentUnit = 4;
	hide_Home();
	$(".title-nav-top-unit-1").css("left","41.25%");
	$(".title-nav-top-unit-2").css("left","50.25%");
	$(".title-nav-top-unit-3").css("left","59.25%");
	title_hideBigButtons();
	title_hideAllScreens();
	title_showAllButtons();
	title_hideUnitButton(4);
	title_showUnitScreen(4);
	title_showUnitBigButton(4);
	//$(".title-nav-top-unit-1").css("left","43.6%");
	//$(".title-nav-top-unit-2").css("left","52.6%");
	
	$(".title-nav-top-unit-5").css("left","82%");
	$(".title-nav-top-unit-6").css("left","91%");
	$(".title-nav-top-big-unit-4").css("left","70.6%");
	title_isFireAnimating = true;
	title_startFire();
	title_showMainMenu();
	U4_setAudioEndText();
}
/**
 * title_initUnit5() Función que inicia la navegación de la unidad 5
 */
function title_initUnit5() {
	title_stopAllAnimations();
	title_hideDropDown();
	title_dropDownAnimating = false;
	title_dropDownOpen = false;
	currentUnit = 5;
	hide_Home();
	$(".title-nav-top-unit-1").css("left","41.25%");
	$(".title-nav-top-unit-2").css("left","50.25%");
	$(".title-nav-top-unit-3").css("left","59.25%");
	$(".title-nav-top-unit-4").css("left","68.25%");
	title_hideBigButtons();
	title_hideAllScreens();
	title_showAllButtons();
	title_hideUnitButton(5);
	title_showUnitScreen(5);
	title_showUnitBigButton(5);
	
	$(".title-nav-top-unit-6").css("left","90.9%");
	$(".title-nav-top-big-unit-5").css("left","79.6%");
	title_isHandAnimating = true;
	title_isLeavesAnimating = true;
	title_isLeafAnimating = true;
	title_startHand();
	title_startLeaves();
	title_startLeaf();
	setTimeout(function(){title_startLeaf2()}, 3000);
	setTimeout(function(){title_startLeaf3()}, 9000);
	setTimeout(function(){title_startLeaf4()}, 12000);
	setTimeout(function(){title_startLeaf5()}, 15000);
	setTimeout(function(){title_startLeaf6()}, 18000);
	setTimeout(function(){title_startLeaf7()}, 21000);
	setTimeout(function(){title_startLeaf8()}, 24000);
	setTimeout(function(){title_startLeaf9()}, 27000);
	setTimeout(function(){title_startLeaf10()}, 30000);
	title_showMainMenu();
}
/**
 * title_initUnit6() Función que inicia la navegación de la unidad 6
 */
function title_initUnit6() {
	title_stopAllAnimations();
	title_hideDropDown();
	title_dropDownAnimating = false;
	title_dropDownOpen = false;
	currentUnit = 6
	hide_Home();
	$(".title-nav-top-unit-1").css("left","41.25%");
	$(".title-nav-top-unit-2").css("left","50.25%");
	$(".title-nav-top-unit-3").css("left","59.25%");
	$(".title-nav-top-unit-4").css("left","68.25%");
	$(".title-nav-top-unit-5").css("left","77.25%");
	title_hideBigButtons();
	title_hideAllScreens();
	title_showAllButtons();
	title_hideUnitButton(6);
	title_showUnitScreen(6);
	title_showUnitBigButton(6);
	
	$(".title-nav-top-big-unit-5").css("left","88.6%");
	//title_isPopAnimating = true;
	title_startPop();
	title_showMainMenu();
	U6_setAudioEndText();
}
/**
 * NAVIGATE TO RDC 1
 */
$("#title-rdc1_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(1);
	title_hideMainMenu();
	hide_Nav();
	$("#U1_RDC1_P0").show();
	U1_RDC1_P1();
});
/**
 * NAVIGATE TO RDC 2
 */
$("#title-rdc2_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(1);
	title_hideMainMenu();
	hide_Nav();
	$("#U1_B7_RDC2").show();
	nav_current = "U1_B7_RDC2";
	show_Home();
	U1_RDC2_GoIndexActivitiesRDC2();
});
/**
 * NAVIGATE TO RDC 3
 */
$("#title-rdc3_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(1);
	title_hideMainMenu();
	hide_Nav();
	$("#U1_RDC3_P0").show();
	U1_RDC3_P1();
});
/**
 * NAVIGATE TO RDC 5
 */
$("#title-rdc5_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(2);
	title_hideMainMenu();
	hide_Nav();
	$("#U2_RDC5_P0").show();
	nav_current = "U2_RDC5_P0";
	show_Home();
	RDC5();
});
/**
 * NAVIGATE TO RDC 7
 */
$("#title-rdc7_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(2);
	title_hideMainMenu();
	hide_Nav();
	$("#U3_RDC7_P0").show();
	U3_RDC7_GoIndexActivitiesRDC7();

});
/**
 * NAVIGATE TO RDC 8
 */
$("#title-rdc8_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(2);
	title_hideMainMenu();
	hide_Nav();
	$("#U3_RDC8_P0_").show();
	U3_RDC8_GoIndexActivitiesRDC8();
});
/**
 * NAVIGATE TO RDC 9
 */
$("#title-rdc9_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(3);
	title_hideMainMenu();
	hide_Nav();
	$("#U3_RDC9_P0_id").show();
	$(".U3_RDC9").show();
	U3_RDC9_GoIndexActivitiesRDC9();
});
/**
 * NAVIGATE TO RDC 10 
 */
$( "#title-rdc10_id" ).bind( "click", function( ){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(4);
	title_hideMainMenu();
	hide_Nav();
	$("#U4_RDC10_P0").show();
	nav_current = "U4_RDC10_P0";
	show_Home();
	startRdc10( );
} );
/**
 *NAVIGAT TO RDC 11
 */
$( "#title-rdc11_id" ).bind( "click" , function( ){ 
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(4);
	title_hideMainMenu();
	hide_Nav( );
	$( "#U4_RDC11_P0" ).show( );
	init_rdc11( );
	nav_current = "U4_RDC11_P0";
} );
/**
 *NAVIGAT TO RDC 12
 */
$( "#title-rdc12_id" ).bind( "click" , function( ){ 
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(4);
	title_hideMainMenu();
	hide_Nav();
	$( "#U4_RDC12_P0" ).show( );
	initRdc12( );
	nav_current = "U4_RDC12_P0";
} );
/**
 * NAVIGATE TO RDC 13
 */
$("#title-rdc13_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(5);
	title_hideMainMenu();
	hide_Nav();
	$("#U5_RDC13_P0").show();
	show_Home();
	showRDC13();
});
/**
 * NAVIGATE TO RDC 15
 */
$("#title-rdc15_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(5);
	title_hideMainMenu();
	hide_Nav();
	$("#U5_RDC15_P0").show();
	show_Home();
	U5_RDC15();
});
/**
 * NAVIGATE TO RDC 16
 */
$("#title-rdc16_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(6);
	title_hideMainMenu();
	hide_Nav();
	$("#U6_RDC16_P0").show();
	show_Home();
	U6_RDC16_P0_loading();
});

/**
 * NAVIGATE TO RDC 17
 */
$("#title-rdc17_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(6);
	title_hideMainMenu();
	hide_Nav();
	$("#U6_RDC17_P0").show();
	show_Home();
	U6_RDC17();
});

/**
 * NAVIGATE TO RDC 18 */
$("#title-rdc18_id").bind("click",function(){
	title_stopAllAnimations();
	title_hideAllScreens();
	title_set_nav_buttons_bg_img(6);
	title_hideMainMenu();
	hide_Nav();
	$("#U6_RDC18_P0").show();
	show_Home();
	U6_RDC18_P0_loading();
});
/**
 * HIDE DROPDOWNS
 */
function title_hideDropDown(){
	$("#title-unit1-rdc_id").hide();
	$("#title-unit2-rdc_id").hide();
	$("#title-unit3-rdc_id").hide();
	$("#title-unit4-rdc_id").hide();
	$("#title-unit5-rdc_id").hide();
	$("#title-unit6-rdc_id").hide();
}
/**
 * HIDE MAIN MENU
 */
function title_hideMainMenu(){
	$("#title-nav_id").hide();
	$("#title-cover-container_id").hide();
}
/**
 * SHOW MAIN MENU
 */
function title_showMainMenu(){
	$("#title-nav_id").show();
	$("#title-cover-container_id").show();
}
/**
 * title_hideBigButtons() Función que esconde todos los botones grandes
 */
function title_hideBigButtons(){
	$("#title-nav-top-big_id").children().each(function(){
		$(this).hide();
	});
}
/**
 * title_hideAllScreens() Functión que esconde todas las páginas.
 */
function title_hideAllScreens(){
	$("#title-cover-container_id").children().each(function(){
		$(this).hide();
	});
	$("#title-TITLE-container_id").children().each(function(){
		$(this).hide();
	});
}
/**
 * title_showAllButtons() Función que muestra todos los motones
 */
function title_showAllButtons(){
	$("#title-nav-top_id").children().each(function(){
		$(this).show();
	});
}
/**
 * title_hideUnitButton() Función que esconde el botón de una unidad dado su número
 */
function title_hideUnitButton(unitNumber){
	$(".title-nav-top-unit-"+unitNumber).hide();
}
/**
 * title_showUnitScreen() Función que muestra la portada de la unidad dado el número
 */
function title_showUnitScreen(unitNumber){
	$("#title-cover-container-unit"+unitNumber+"_id").show();
	$(".title-nav-top-title-"+unitNumber).show()
}
function U4_setAudioEndText(){
	if(U4_title_RDC1_ACT_1_complete && U4_title_RDC1_ACT_2_complete){
		if(U4_title_RDC2_ACT_1_complete && U4_title_RDC2_ACT_2_complete){
			if(U4_title_RDC3_ACT_1_complete && U4_title_RDC3_ACT_2_complete){
				U4_title_RDC1_ACT_1_complete = false;
				U4_title_RDC1_ACT_2_complete = false;
				U4_title_RDC2_ACT_1_complete = false;
				U4_title_RDC2_ACT_2_complete = false;
				U4_title_RDC3_ACT_1_complete = false;
				U4_title_RDC3_ACT_2_complete = false;
				$("#U4_title_dialogue_1_id").html("Bienvenido a los Recursos Digitales Complementarios de la Unidad 4 de tu libro de Lengua y Literatura 7° básico. Yo soy el Dr. Jekyll. Te invito a adentrarte en el mundo de las identidades. Haz clic sobre el botón RDC 10 para comenzar.");
				U4_title_audio = new Audio();
				U4_title_audio.src="audio/unidad4/title/U4_title_instruccionesp1.mp3";
			}else{
				$("#U4_title_dialogue_1_id").html("Haz clic sobre el botón RDC 12 para continuar.");
				U4_title_audio = new Audio();
				U4_title_audio.src="audio/unidad4/title/U4_title_instruccionesp3.mp3";
			}
		}else{
			$("#U4_title_dialogue_1_id").html("Haz clic sobre el botón RDC 11 para continuar.");
			U4_title_audio = new Audio();
			U4_title_audio.src="audio/unidad4/title/U4_title_instruccionesp2.mp3";
		}
	}else{
		$("#U4_title_dialogue_1_id").html("Bienvenido a los Recursos Digitales Complementarios de la Unidad 4 de tu libro de Lengua y Literatura 7° básico. Yo soy el Dr. Jekyll. Te invito a adentrarte en el mundo de las identidades. Haz clic sobre el botón RDC 10 para comenzar.");
		U4_title_audio = new Audio();
		U4_title_audio.src="audio/unidad4/title/U4_title_instruccionesp1.mp3";
	}
	U4_title_audio.click(function(){
		utils.blinkElement(U4_title_audio.attr('id'),false);
		if(!U4_title_audio.paused) {
			U4_title_audio.pause();
		}
		else{
			U4_title_audio.play();
		}
	});
}
function U6_setAudioEndText(){
	if(U6_title_RDC1_ACT_1_complete){
		if(U6_title_RDC2_ACT_1_complete && U6_title_RDC2_ACT_2_complete){
			if(U6_title_RDC3_ACT_1_complete && U6_title_RDC3_ACT_2_complete){
				U6_title_RDC1_ACT_1_complete = false;
				U6_title_RDC1_ACT_2_complete = false;
				U6_title_RDC2_ACT_1_complete = false;
				U6_title_RDC2_ACT_2_complete = false;
				U6_title_RDC3_ACT_1_complete = false;
				U6_title_RDC3_ACT_2_complete = false;
				$("#U6_title_dialogue_1_id").html("Bienvenido a los Recursos Digitales Complementarios de la Unidad 4 de tu libro de Lengua y Literatura 7° básico. Yo soy el Dr. Jekyll. Te invito a adentrarte en el mundo de las identidades. Haz clic sobre el botón RDC 10 para comenzar.");
				U6_title_audio = new Audio();
				U6_title_audio.src="audio/unidad6/title/U6_title_instruccionesp1.mp3";
			}else{
				$("#U6_title_dialogue_1_id").html("Haz clic sobre el botón RDC 12 para continuar.");
				U6_title_audio = new Audio();
				U6_title_audio.src="audio/unidad6/title/U6_title_instruccionesp3.mp3";
			}
		}else{
			$("#U6_title_dialogue_1_id").html("Haz clic sobre el botón RDC 11 para continuar.");
			U6_title_audio = new Audio();
			U6_title_audio.src="audio/unidad6/title/U6_title_instruccionesp2.mp3";
		}
	}else{
		$("#U6_title_dialogue_1_id").html("Bienvenido a los Recursos Digitales Complementarios de la Unidad 4 de tu libro de Lengua y Literatura 7° básico. Yo soy el Dr. Jekyll. Te invito a adentrarte en el mundo de las identidades. Haz clic sobre el botón RDC 10 para comenzar.");
		U6_title_audio = new Audio();
		U6_title_audio.src="audio/unidad6/title/U6_title_instruccionesp1.mp3";
	}
	U6_title_audio.click(function(){
		utils.blinkElement(U6_title_audio.attr('id'),false);
		if(!U6_title_audio.paused) {
			U6_title_audio.pause();
		}
		else{
			U6_title_audio.play();
		}
	});
}

/**
 * title_showUnitBigButton() Función que muestra el botón de la unidad actual.
 */
function title_showUnitBigButton(unitNumber){
	$(".title-nav-top-big-unit-"+unitNumber).show();
}
/**
 * CHANGE THE IMAGE USED FOR NAV BUTTONS SO IT HAS THE COLOR OF THE UNIT
 */
function title_set_nav_buttons_bg_img(unitNumber){
	switch(unitNumber){
		case 1:
			$("#forward_id img").attr("src","img/unidad1/forward.png");
			$("#back_id img").attr("src","img/unidad1/back.png");
			$("#home_id img").attr("src","img/unidad1/home.png");
			break;
		case 2:
			$("#forward_id img").attr("src","img/unidad2/forward.png");
			$("#back_id img").attr("src","img/unidad2/back.png");
			$("#home_id img").attr("src","img/unidad2/home.png");
			
			break;
		case 3:
			$("#forward_id img").attr("src","img/unidad3/RDC7/BN.png");
			$("#back_id img").attr("src","img/unidad3/RDC7/BB.png");
			$("#home_id img").attr("src","img/unidad3/RDC7/Home.png");
			break;
		case 4:
			$("#forward_id img").attr("src","img/unidad4/btnNext.png");
			$("#back_id img").attr("src","img/unidad4/btnBack.png");
			$("#home_id img").attr("src","img/unidad4/btnHome.png");
			break;
		case 5:
			$("#forward_id img").attr("src","img/unidad5/next.png");
			$("#back_id img").attr("src","img/unidad5/back.png");
			$("#home_id img").attr("src","img/unidad5/home.png");	
			break;
		case 6:
			$("#forward_id img").attr("src","img/unidad6/next.png");
			$("#back_id img").attr("src","img/unidad6/back.png");
			$("#home_id img").attr("src","img/unidad6/home.png");
			break;
		default:
			
	}
}
/**
 * FUNCION THAT SETS THE title_dropDownAnimating VARIABLE TO FALSE
*/
function title_doneDropDownAnimating(){
	title_dropDownAnimating = false;
}

/**
 * Eventos para navegación entre unidades
 */
$(".title-nav-top-unit-1").on("click", function(){
	title_initUnit1();
});
$(".title-nav-top-unit-2").on("click", function(){
	title_initUnit2();
});
$(".title-nav-top-unit-3").on("click", function(){
	title_initUnit3();
	$("#title-nav-top-unit-2").css("left","52.6%");
});
$(".title-nav-top-unit-4").on("click", function(){
	title_initUnit4();
	$("#title-nav-top-unit-2").css("left","50.6%");
});
$(".title-nav-top-unit-5").on("click", function(){
	title_initUnit5();
	$("#title-nav-top-unit-2").css("left","50.6%");
});
$(".title-nav-top-unit-6").on("click", function(){
	title_initUnit6();
	$("#title-nav-top-unit-2").css("left","50.6%");
});
/**
 * Eventos que manejan el dropdown de los botones RDC
 */
$(".title-nav-top-big-unit-1").mouseenter(function(){
	
	if(!$("#title-unit1-rdc_id").is(":visible") && !title_dropDownAnimating){
		title_dropDownAnimating = true;
		title_dropDownOpen = true;
		$("#title-unit1-rdc_id").slideToggle("slow", title_doneDropDownAnimating());
	}
});
$(".title-nav-top-big-unit-1").mouseleave(function(){
	if($("#title-unit1-rdc_id").is(":visible") && title_dropDownOpen){
		title_dropDownOpen = false;
		$("#title-unit1-rdc_id").slideToggle("slow");
	}
});
$(".title-nav-top-big-unit-2").mouseenter(function(){
	
	if(!$("#title-unit2-rdc_id").is(":visible") && !title_dropDownAnimating){
		title_dropDownAnimating = true;
		title_dropDownOpen = true;
		$("#title-unit2-rdc_id").slideToggle("slow", title_doneDropDownAnimating());
	}
});
$(".title-nav-top-big-unit-2").mouseleave(function(){
	if($("#title-unit2-rdc_id").is(":visible") && title_dropDownOpen){
		title_dropDownOpen = false;
		$("#title-unit2-rdc_id").slideToggle("slow");
	}
});
$(".title-nav-top-big-unit-3").mouseenter(function(){
	
	if(!$("#title-unit3-rdc_id").is(":visible") && !title_dropDownAnimating){
		title_dropDownAnimating = true;
		title_dropDownOpen = true;
		$("#title-unit3-rdc_id").slideToggle("slow", title_doneDropDownAnimating());
	}
});
$(".title-nav-top-big-unit-3").mouseleave(function(){
	if($("#title-unit3-rdc_id").is(":visible") && title_dropDownOpen){
		title_dropDownOpen = false;
		$("#title-unit3-rdc_id").slideToggle("slow");
	}
});
$(".title-nav-top-big-unit-4").mouseenter(function(){
	
	if(!$("#title-unit4-rdc_id").is(":visible") && !title_dropDownAnimating){
		title_dropDownAnimating = true;
		title_dropDownOpen = true;
		$("#title-unit4-rdc_id").slideToggle("slow", title_doneDropDownAnimating());
	}
});
$(".title-nav-top-big-unit-4").mouseleave(function(){
	if($("#title-unit4-rdc_id").is(":visible") && title_dropDownOpen){
		title_dropDownOpen = false;
		$("#title-unit4-rdc_id").slideToggle("slow");
	}
});
$(".title-nav-top-big-unit-5").mouseenter(function(){
	
	if(!$("#title-unit5-rdc_id").is(":visible") && !title_dropDownAnimating){
		title_dropDownAnimating = true;
		title_dropDownOpen = true;
		$("#title-unit5-rdc_id").slideToggle("slow", title_doneDropDownAnimating());
	}
});
$(".title-nav-top-big-unit-5").mouseleave(function(){
	if($("#title-unit5-rdc_id").is(":visible") && title_dropDownOpen){
		title_dropDownOpen = false;
		$("#title-unit5-rdc_id").slideToggle("slow");
	}
});
$(".title-nav-top-big-unit-6").mouseenter(function(){
	
	if(!$("#title-unit6-rdc_id").is(":visible") && !title_dropDownAnimating){
		title_dropDownAnimating = true;
		title_dropDownOpen = true;
		$("#title-unit6-rdc_id").slideToggle("slow", title_doneDropDownAnimating());
	}
});
$(".title-nav-top-big-unit-6").mouseleave(function(){
	if($("#title-unit6-rdc_id").is(":visible") && title_dropDownOpen){
		title_dropDownOpen = false;
		$("#title-unit6-rdc_id").slideToggle("slow");
	}
});
/**
 * Eventos para mouse over de botones
 */
$(".title-nav-top-unit-6").mouseenter(function(){
	unit6left = $(".title-nav-top-unit-6")[0].style.left;
	unit6left = parseFloat(unit6left.substring(0, unit6left.length - 1))-2.35;
	$(".title-nav-top-unit-6").css("left",unit6left + "%");
	//MOVE SMALL-1
	unit1left = $(".title-nav-top-unit-1")[0].style.left;
	unit1left = parseFloat(unit1left.substring(0, unit1left.length - 1))-2.35;
	$(".title-nav-top-unit-1").css("left",unit1left + "%");
	//MOVE SMALL-2
	unit2left = $(".title-nav-top-unit-2")[0].style.left;
	unit2left = parseFloat(unit2left.substring(0, unit2left.length - 1))-2.35;
	$(".title-nav-top-unit-2").css("left",unit2left + "%");
	//MOVE SMALL-3
	unit3left = $(".title-nav-top-unit-3")[0].style.left;
	unit3left = parseFloat(unit3left.substring(0, unit3left.length - 1))-2.35;
	$(".title-nav-top-unit-3").css("left",unit3left + "%");
	//MOVE SMALL-4
	unit4left = $(".title-nav-top-unit-4")[0].style.left;
	unit4left = parseFloat(unit4left.substring(0, unit4left.length - 1))-2.35;
	$(".title-nav-top-unit-4").css("left",unit4left + "%");
	//MOVE SMALL-5
	unit5left = $(".title-nav-top-unit-5")[0].style.left;
	unit5left = parseFloat(unit5left.substring(0, unit5left.length - 1))-2.35;
	$(".title-nav-top-unit-5").css("left",unit5left + "%");
	
	// MOVE THE BIG-1
	unit1Bigleft = $(".title-nav-top-big-unit-1")[0].style.left;
	unit1Bigleft = parseFloat(unit1Bigleft.substring(0, unit1Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-1").css("left",unit1Bigleft + "%");
	// MOVE THE BIG-2
	unit2Bigleft = $(".title-nav-top-big-unit-2")[0].style.left;
	unit2Bigleft = parseFloat(unit2Bigleft.substring(0, unit2Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-2").css("left",unit2Bigleft + "%");
	// MOVE THE BIG-3
	unit3Bigleft = $(".title-nav-top-big-unit-3")[0].style.left;
	unit3Bigleft = parseFloat(unit3Bigleft.substring(0, unit3Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-3").css("left",unit3Bigleft + "%");
	// MOVE THE BIG-4
	unit4Bigleft = $(".title-nav-top-big-unit-4")[0].style.left;
	unit4Bigleft = parseFloat(unit4Bigleft.substring(0, unit4Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-4").css("left",unit4Bigleft + "%");
	// MOVE THE BIG-5
	unit5Bigleft = $(".title-nav-top-big-unit-5")[0].style.left;
	unit5Bigleft = parseFloat(unit5Bigleft.substring(0, unit5Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-5").css("left",unit5Bigleft + "%");
});
$(".title-nav-top-unit-6").mouseleave(function(){
	unit6left = $(".title-nav-top-unit-6")[0].style.left;
	unit6left = parseFloat(unit6left.substring(0, unit6left.length - 1))+2.30;
	$(".title-nav-top-unit-6").css("left",unit6left + "%");
	//MOVE SMALL-1
	unit1left = $(".title-nav-top-unit-1")[0].style.left;
	unit1left = parseFloat(unit1left.substring(0, unit1left.length - 1))+2.35;
	$(".title-nav-top-unit-1").css("left",unit1left + "%");
	//MOVE SMALL-2
	unit2left = $(".title-nav-top-unit-2")[0].style.left;
	unit2left = parseFloat(unit2left.substring(0, unit2left.length - 1))+2.35;
	$(".title-nav-top-unit-2").css("left",unit2left + "%");
	//MOVE SMALL-3
	unit3left = $(".title-nav-top-unit-3")[0].style.left;
	unit3left = parseFloat(unit3left.substring(0, unit3left.length - 1))+2.35;
	$(".title-nav-top-unit-3").css("left",unit3left + "%");
	//MOVE SMALL-4
	unit4left = $(".title-nav-top-unit-4")[0].style.left;
	unit4left = parseFloat(unit4left.substring(0, unit4left.length - 1))+2.35;
	$(".title-nav-top-unit-4").css("left",unit4left + "%");
	//MOVE SMALL-5
	unit5left = $(".title-nav-top-unit-5")[0].style.left;
	unit5left = parseFloat(unit5left.substring(0, unit5left.length - 1))+2.35;
	$(".title-nav-top-unit-5").css("left",unit5left + "%");

	// MOVE THE BIG-1
	unit1Bigleft = $(".title-nav-top-big-unit-1")[0].style.left;
	unit1Bigleft = parseFloat(unit1Bigleft.substring(0, unit1Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-1").css("left",unit1Bigleft + "%");
	// MOVE THE BIG-2
	unit2Bigleft = $(".title-nav-top-big-unit-2")[0].style.left;
	unit2Bigleft = parseFloat(unit2Bigleft.substring(0, unit2Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-2").css("left",unit2Bigleft + "%");
	// MOVE THE BIG-3
	unit3Bigleft = $(".title-nav-top-big-unit-3")[0].style.left;
	unit3Bigleft = parseFloat(unit3Bigleft.substring(0, unit3Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-3").css("left",unit3Bigleft + "%");
	// MOVE THE BIG-4
	unit4Bigleft = $(".title-nav-top-big-unit-4")[0].style.left;
	unit4Bigleft = parseFloat(unit4Bigleft.substring(0, unit4Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-4").css("left",unit4Bigleft + "%");
	// MOVE THE BIG-5
	unit5Bigleft = $(".title-nav-top-big-unit-5")[0].style.left;
	unit5Bigleft = parseFloat(unit5Bigleft.substring(0, unit5Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-5").css("left",unit5Bigleft + "%");
});
$(".title-nav-top-unit-5").mouseenter(function(){
	unit5left = $(".title-nav-top-unit-5")[0].style.left;
	unit5left = parseFloat(unit5left.substring(0, unit5left.length - 1))-2.35;
	$(".title-nav-top-unit-5").css("left",unit5left + "%");
	//MOVE SMALL-1
	unit1left = $(".title-nav-top-unit-1")[0].style.left;
	unit1left = parseFloat(unit1left.substring(0, unit1left.length - 1))-2.35;
	$(".title-nav-top-unit-1").css("left",unit1left + "%");
	//MOVE SMALL-2
	unit2left = $(".title-nav-top-unit-2")[0].style.left;
	unit2left = parseFloat(unit2left.substring(0, unit2left.length - 1))-2.35;
	$(".title-nav-top-unit-2").css("left",unit2left + "%");
	//MOVE SMALL-3
	unit3left = $(".title-nav-top-unit-3")[0].style.left;
	unit3left = parseFloat(unit3left.substring(0, unit3left.length - 1))-2.35;
	$(".title-nav-top-unit-3").css("left",unit3left + "%");
	//MOVE SMALL-4
	unit4left = $(".title-nav-top-unit-4")[0].style.left;
	unit4left = parseFloat(unit4left.substring(0, unit4left.length - 1))-2.35;
	$(".title-nav-top-unit-4").css("left",unit4left + "%");
	
	// MOVE THE BIG-1
	unit1Bigleft = $(".title-nav-top-big-unit-1")[0].style.left;
	unit1Bigleft = parseFloat(unit1Bigleft.substring(0, unit1Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-1").css("left",unit1Bigleft + "%");
	// MOVE THE BIG-2
	unit2Bigleft = $(".title-nav-top-big-unit-2")[0].style.left;
	unit2Bigleft = parseFloat(unit2Bigleft.substring(0, unit2Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-2").css("left",unit2Bigleft + "%");
	// MOVE THE BIG-3
	unit3Bigleft = $(".title-nav-top-big-unit-3")[0].style.left;
	unit3Bigleft = parseFloat(unit3Bigleft.substring(0, unit3Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-3").css("left",unit3Bigleft + "%");
	// MOVE THE BIG-4
	unit4Bigleft = $(".title-nav-top-big-unit-4")[0].style.left;
	unit4Bigleft = parseFloat(unit4Bigleft.substring(0, unit4Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-4").css("left",unit4Bigleft + "%");
});
$(".title-nav-top-unit-5").mouseleave(function(){
	unit5left = $(".title-nav-top-unit-5")[0].style.left;
	unit5left = parseFloat(unit5left.substring(0, unit5left.length - 1))+2.35;
	$(".title-nav-top-unit-5").css("left",unit5left + "%");
	//MOVE SMALL-1
	unit1left = $(".title-nav-top-unit-1")[0].style.left;
	unit1left = parseFloat(unit1left.substring(0, unit1left.length - 1))+2.35;
	$(".title-nav-top-unit-1").css("left",unit1left + "%");
	//MOVE SMALL-2
	unit2left = $(".title-nav-top-unit-2")[0].style.left;
	unit2left = parseFloat(unit2left.substring(0, unit2left.length - 1))+2.35;
	$(".title-nav-top-unit-2").css("left",unit2left + "%");
	//MOVE SMALL-3
	unit3left = $(".title-nav-top-unit-3")[0].style.left;
	unit3left = parseFloat(unit3left.substring(0, unit3left.length - 1))+2.35;
	$(".title-nav-top-unit-3").css("left",unit3left + "%");
	//MOVE SMALL-4
	unit4left = $(".title-nav-top-unit-4")[0].style.left;
	unit4left = parseFloat(unit4left.substring(0, unit4left.length - 1))+2.35;
	$(".title-nav-top-unit-4").css("left",unit4left + "%");

	// MOVE THE BIG-1
	unit1Bigleft = $(".title-nav-top-big-unit-1")[0].style.left;
	unit1Bigleft = parseFloat(unit1Bigleft.substring(0, unit1Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-1").css("left",unit1Bigleft + "%");
	// MOVE THE BIG-2
	unit2Bigleft = $(".title-nav-top-big-unit-2")[0].style.left;
	unit2Bigleft = parseFloat(unit2Bigleft.substring(0, unit2Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-2").css("left",unit2Bigleft + "%");
	// MOVE THE BIG-3
	unit3Bigleft = $(".title-nav-top-big-unit-3")[0].style.left;
	unit3Bigleft = parseFloat(unit3Bigleft.substring(0, unit3Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-3").css("left",unit3Bigleft + "%");
	// MOVE THE BIG-4
	unit4Bigleft = $(".title-nav-top-big-unit-4")[0].style.left;
	unit4Bigleft = parseFloat(unit4Bigleft.substring(0, unit4Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-4").css("left",unit4Bigleft + "%");
});
$(".title-nav-top-unit-4").mouseenter(function(){
	unit4left = $(".title-nav-top-unit-4")[0].style.left;
	unit4left = parseFloat(unit4left.substring(0, unit4left.length - 1))-2.35;
	$(".title-nav-top-unit-4").css("left",unit4left + "%");
	//MOVE SMALL-1
	unit1left = $(".title-nav-top-unit-1")[0].style.left;
	unit1left = parseFloat(unit1left.substring(0, unit1left.length - 1))-2.35;
	$(".title-nav-top-unit-1").css("left",unit1left + "%");
	//MOVE SMALL-2
	unit2left = $(".title-nav-top-unit-2")[0].style.left;
	unit2left = parseFloat(unit2left.substring(0, unit2left.length - 1))-2.35;
	$(".title-nav-top-unit-2").css("left",unit2left + "%");
	//MOVE SMALL-3
	unit3left = $(".title-nav-top-unit-3")[0].style.left;
	unit3left = parseFloat(unit3left.substring(0, unit3left.length - 1))-2.35;
	$(".title-nav-top-unit-3").css("left",unit3left + "%");
	
	// MOVE THE BIG-1
	unit1Bigleft = $(".title-nav-top-big-unit-1")[0].style.left;
	unit1Bigleft = parseFloat(unit1Bigleft.substring(0, unit1Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-1").css("left",unit1Bigleft + "%");
	// MOVE THE BIG-2
	unit2Bigleft = $(".title-nav-top-big-unit-2")[0].style.left;
	unit2Bigleft = parseFloat(unit2Bigleft.substring(0, unit2Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-2").css("left",unit2Bigleft + "%");
	// MOVE THE BIG-3
	unit3Bigleft = $(".title-nav-top-big-unit-3")[0].style.left;
	unit3Bigleft = parseFloat(unit3Bigleft.substring(0, unit3Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-3").css("left",unit3Bigleft + "%");
});
$(".title-nav-top-unit-4").mouseleave(function(){
	unit4left = $(".title-nav-top-unit-4")[0].style.left;
	unit4left = parseFloat(unit4left.substring(0, unit4left.length - 1))+2.35;
	$(".title-nav-top-unit-4").css("left",unit4left + "%");
	//MOVE SMALL-1
	unit1left = $(".title-nav-top-unit-1")[0].style.left;
	unit1left = parseFloat(unit1left.substring(0, unit1left.length - 1))+2.35;
	$(".title-nav-top-unit-1").css("left",unit1left + "%");
	//MOVE SMALL-2
	unit2left = $(".title-nav-top-unit-2")[0].style.left;
	unit2left = parseFloat(unit2left.substring(0, unit2left.length - 1))+2.35;
	$(".title-nav-top-unit-2").css("left",unit2left + "%");
	//MOVE SMALL-3
	unit3left = $(".title-nav-top-unit-3")[0].style.left;
	unit3left = parseFloat(unit3left.substring(0, unit3left.length - 1))+2.35;
	$(".title-nav-top-unit-3").css("left",unit3left + "%");

	// MOVE THE BIG-1
	unit1Bigleft = $(".title-nav-top-big-unit-1")[0].style.left;
	unit1Bigleft = parseFloat(unit1Bigleft.substring(0, unit1Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-1").css("left",unit1Bigleft + "%");
	// MOVE THE BIG-2
	unit2Bigleft = $(".title-nav-top-big-unit-2")[0].style.left;
	unit2Bigleft = parseFloat(unit2Bigleft.substring(0, unit2Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-2").css("left",unit2Bigleft + "%");
	// MOVE THE BIG-3
	unit3Bigleft = $(".title-nav-top-big-unit-3")[0].style.left;
	unit3Bigleft = parseFloat(unit3Bigleft.substring(0, unit3Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-3").css("left",unit3Bigleft + "%");
});
$(".title-nav-top-unit-3").mouseenter(function(){
	unit3left = $(".title-nav-top-unit-3")[0].style.left;
	unit3left = parseFloat(unit3left.substring(0, unit3left.length - 1))-2.35;
	$(".title-nav-top-unit-3").css("left",unit3left + "%");
	//MOVE SMALL-1
	unit1left = $(".title-nav-top-unit-1")[0].style.left;
	unit1left = parseFloat(unit1left.substring(0, unit1left.length - 1))-2.35;
	$(".title-nav-top-unit-1").css("left",unit1left + "%");
	//MOVE SMALL-2
	unit2left = $(".title-nav-top-unit-2")[0].style.left;
	unit2left = parseFloat(unit2left.substring(0, unit2left.length - 1))-2.35;
	$(".title-nav-top-unit-2").css("left",unit2left + "%");

	// MOVE THE BIG-1
	unit1Bigleft = $(".title-nav-top-big-unit-1")[0].style.left;
	unit1Bigleft = parseFloat(unit1Bigleft.substring(0, unit1Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-1").css("left",unit1Bigleft + "%");
	// MOVE THE BIG-2
	unit2Bigleft = $(".title-nav-top-big-unit-2")[0].style.left;
	unit2Bigleft = parseFloat(unit2Bigleft.substring(0, unit2Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-2").css("left",unit2Bigleft + "%");
});
$(".title-nav-top-unit-3").mouseleave(function(){
	unit3left = $(".title-nav-top-unit-3")[0].style.left;
	unit3left = parseFloat(unit3left.substring(0, unit3left.length - 1))+2.35;
	$(".title-nav-top-unit-3").css("left",unit3left + "%");
	//MOVE SMALL-1
	unit1left = $(".title-nav-top-unit-1")[0].style.left;
	unit1left = parseFloat(unit1left.substring(0, unit1left.length - 1))+2.35;
	$(".title-nav-top-unit-1").css("left",unit1left + "%");
	//MOVE SMALL-2
	unit2left = $(".title-nav-top-unit-2")[0].style.left;
	unit2left = parseFloat(unit2left.substring(0, unit2left.length - 1))+2.35;
	$(".title-nav-top-unit-2").css("left",unit2left + "%");

	// MOVE THE BIG-1
	unit1Bigleft = $(".title-nav-top-big-unit-1")[0].style.left;
	unit1Bigleft = parseFloat(unit1Bigleft.substring(0, unit1Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-1").css("left",unit1Bigleft + "%");
	// MOVE THE BIG-2
	unit2Bigleft = $(".title-nav-top-big-unit-2")[0].style.left;
	unit2Bigleft = parseFloat(unit2Bigleft.substring(0, unit2Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-2").css("left",unit2Bigleft + "%");
});
$(".title-nav-top-unit-2").mouseenter(function(){
	unit2left = $(".title-nav-top-unit-2")[0].style.left;
	unit2left = parseFloat(unit2left.substring(0, unit2left.length - 1))-2.35;
	$(".title-nav-top-unit-2").css("left",unit2left + "%");
	// MOVE THE BIG-1
	unit1Bigleft = $(".title-nav-top-big-unit-1")[0].style.left;
	unit1Bigleft = parseFloat(unit1Bigleft.substring(0, unit1Bigleft.length - 1))-2.35;
	$(".title-nav-top-big-unit-1").css("left",unit1Bigleft + "%");
});
$(".title-nav-top-unit-2").mouseleave(function(){
	unit2left = $(".title-nav-top-unit-2")[0].style.left;
	unit2left = parseFloat(unit2left.substring(0, unit2left.length - 1))+2.35;
	$(".title-nav-top-unit-2").css("left",unit2left + "%");
	// MOVE THE BIG-1
	unit1Bigleft = $(".title-nav-top-big-unit-1")[0].style.left;
	unit1Bigleft = parseFloat(unit1Bigleft.substring(0, unit1Bigleft.length - 1))+2.35;
	$(".title-nav-top-big-unit-1").css("left",unit1Bigleft + "%");
	
});
$(".title-nav-top-unit-1").mouseenter(function(){
	unit1left = $(".title-nav-top-unit-1")[0].style.left;
	unit1left = parseFloat(unit1left.substring(0, unit1left.length - 1))-2.35;
	$(".title-nav-top-unit-1").css("left",unit1left + "%");
});
$(".title-nav-top-unit-1").mouseleave(function(){
	unit1left = $(".title-nav-top-unit-1")[0].style.left;
	unit1left = parseFloat(unit1left.substring(0, unit1left.length - 1))+2.35;
	$(".title-nav-top-unit-1").css("left",unit1left + "%");
});

title_hideMainMenu();
//U3_RDC7_Inicialize();
title_initUnit1();
$("#title-main-container_id").show();