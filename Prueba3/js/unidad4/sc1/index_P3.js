/*******************  Variables **********************/
var flagVincent = false;
var flagFrida = false;


/*******************  Funciones propias **********************/
function validaActividadP3() {
	if (flagFrida == true && flagVincent == true) {
		$("#forward_id").show();
		$("#back_id").show();
		$( "#home_id" ).show( );
	}
	else
		console.log("Aun no es tiempo de avanzar");
}



function show_popUp_Vincent( shadow, inner, onClossing ){
    
    shadow.show();

    $(".U4_RDC10_ACT1_P2_innertxt_Vincent" ).show( {
        effect: "scale",
        duration: 100
    } );
    
    $("#U4_RDC10_ACT1_P2_containerErrorVincent1_id").click( function( ){
        var inner = $( ".U4_RDC10_ACT1_P2_innertxt_Vincent" );
        var sizes = inner.css( ["width", "height"] );
        
        onClossing( );

        $( ".U4_RDC10_ACT1_P2_shadowtxt_Vincent" ).hide({
            effect: "scale",
            duration: 150
        });
        
    } );
    
}

function show_popUp_Frida( shadow, inner, onClossing ){
    shadow.show( );
    $( ".U4_RDC10_ACT1_P2_innertxt_Frida" ).show( {
        effect: "scale",
        duration: 100
    } );
    
    inner.click( function( event ){
        event.stopPropagation( );
    } );
    
    $("#U4_RDC10_ACT1_P2_containerErrorFrida1_id").click( function( ){
        var inner = $( ".U4_RDC10_ACT1_P2_innertxt_Frida" );
        var sizes = inner.css( ["width", "height"] );
        
        onClossing( );
        
        shadow.hide({
            effect: "scale",
            duration: 100,
        });
    } ); 
}


function show_zoom_Frida( shadow, inner, onClossing ){
    shadow.show( );
    $( ".U4_RDC10_ACT1_P2_innerimg_Frida" ).show( {
        effect: "scale",
        duration: 100
    } );
    
    inner.click( function( event ){
        event.stopPropagation( );
    } );
    
    $("#U4_RDC10_ACT1_P2_containerErrorFrida2_id").click( function( ){
        var inner = $( ".U4_RDC10_ACT1_P2_innerimg_Frida" );
        var sizes = inner.css( ["width", "height"] );
        
        onClossing( );
        
        shadow.hide({
            effect: "scale",
            duration: 100,
        });
    } ); 
}

function show_zoom_Vincent( shadow, inner, onClossing ){
    shadow.show( );
    $( ".U4_RDC10_ACT1_P2_innerimg_Vincent" ).show( {
        effect: "scale",
        duration: 100
    } );
    
    inner.click( function( event ){
        event.stopPropagation( );
    } );
    
    $("#U4_RDC10_ACT1_P2_containerErrorVincent2_id").click( function( ){
        var inner = $( ".U4_RDC10_ACT1_P2_innerimg_Vincent" );
        var sizes = inner.css( ["width", "height"] );
        
        onClossing( );
        
        shadow.hide({
            effect: "scale",
            duration: 100,
        });
    } ); 
}

function iniciaP3() {
    utils.blinkElement("forward_id",true);
	$(".U4_RDC10_btn").addClass("U4_RDC10_cursor");
	$("#forward_id").show();
	$( "#home_id" ).show( );
	$("#back_id").show();
	
	nav_current = "U4_RDC10_ACT1_P2";
	fun = goNextRDC10_P3;
	fun2 = goBackRDC10_P3;
}

function reset_P3() {
    flagVincent = false;
    flagFrida = false;
    utils.blinkElement("forward_id",false);
}

function goNextRDC10_P3( ){
	reset_P3();
	iniciaP4();
}

function goBackRDC10_P3( ){
	reset_P3();
	iniciaP2();
}

/*#####################################################################



######################################################################*/

$( document ).ready( function() {


$("#U4_RDC10_ACT1_P2_popUp_shadowtxt_Vincent_id").hide();
$("#U4_RDC10_ACT1_P2_popUp_shadowtxt_Frida_id").hide();
$("#U4_RDC10_ACT1_P2_popUp_shadowimg_Frida_id").hide();
$("#U4_RDC10_ACT1_P2_popUp_shadowimg_Vincent_id").hide();


$("#U4_RDC10_ACT1_P2_ImgFridaKahlo_id").addClass("U4_RDC10_cursor");
$("#U4_RDC10_ACT1_P2_ImgvanGogh_id").addClass("U4_RDC10_cursor");




$("#U4_RDC10_ACT1_P2_txtvanGogh_id").click(function(){

	$("#U4_RDC10_ACT1_P2_Title_id").hide();
	$("#U4_RDC10_ACT1_P2_ImgvanGogh_id").hide();
	$("#U4_RDC10_ACT1_P2_ImgFridaKahlo_id").hide();
	$("#U4_RDC10_ACT1_P2_txtvanGogh_id").hide();
	$("#U4_RDC10_ACT1_P2_txtFridaKahlo_id").hide();
    $("#U4_RDC10_ACT1_P2_ContainerWhite1_id").hide();
    $("#U4_RDC10_ACT1_P2_ContainerWhite2_id").hide();

  show_popUp_Vincent( $( "#U4_RDC10_ACT1_P2_popUp_shadowtxt_Vincent_id" ), $( "#U4_RDC10_ACT1_P2_popUp_innertxt_Vincent_id" ), function( ){
    $("#U4_RDC10_ACT1_P2_Title_id").show();
	$("#U4_RDC10_ACT1_P2_ImgvanGogh_id").show();
	$("#U4_RDC10_ACT1_P2_ImgFridaKahlo_id").show();
	$("#U4_RDC10_ACT1_P2_txtvanGogh_id").show();
	$("#U4_RDC10_ACT1_P2_txtFridaKahlo_id").show();
    $("#U4_RDC10_ACT1_P2_ContainerWhite1_id").show();
    $("#U4_RDC10_ACT1_P2_ContainerWhite2_id").show();

  });

  flagVincent = true;
  validaActividadP3();

});


$("#U4_RDC10_ACT1_P2_txtFridaKahlo_id").click(function() {

	$("#U4_RDC10_ACT1_P2_Title_id").hide();
	$("#U4_RDC10_ACT1_P2_ImgvanGogh_id").hide();
	$("#U4_RDC10_ACT1_P2_ImgFridaKahlo_id").hide();
	$("#U4_RDC10_ACT1_P2_txtvanGogh_id").hide();
	$("#U4_RDC10_ACT1_P2_txtFridaKahlo_id").hide();
    $("#U4_RDC10_ACT1_P2_ContainerWhite1_id").hide();
    $("#U4_RDC10_ACT1_P2_ContainerWhite2_id").hide();

  show_popUp_Frida( $( "#U4_RDC10_ACT1_P2_popUp_shadowtxt_Frida_id" ), $( "#U4_RDC10_ACT1_P2_popUp_innertxt_Frida_id" ), function( ){
    $("#U4_RDC10_ACT1_P2_Title_id").show();
	$("#U4_RDC10_ACT1_P2_ImgvanGogh_id").show();
	$("#U4_RDC10_ACT1_P2_ImgFridaKahlo_id").show();
	$("#U4_RDC10_ACT1_P2_txtvanGogh_id").show();
	$("#U4_RDC10_ACT1_P2_txtFridaKahlo_id").show();
    $("#U4_RDC10_ACT1_P2_ContainerWhite1_id").show();
    $("#U4_RDC10_ACT1_P2_ContainerWhite2_id").show();
  });

  flagFrida = true;
  validaActividadP3();

});

$("#U4_RDC10_ACT1_P2_ImgFridaKahlo_id").click(function(){

	$("#U4_RDC10_ACT1_P2_Title_id").hide();
	$("#U4_RDC10_ACT1_P2_ImgvanGogh_id").hide();
	$("#U4_RDC10_ACT1_P2_ImgFridaKahlo_id").hide();
	$("#U4_RDC10_ACT1_P2_txtvanGogh_id").hide();
	$("#U4_RDC10_ACT1_P2_txtFridaKahlo_id").hide();
    $("#U4_RDC10_ACT1_P2_ContainerWhite1_id").hide();
    $("#U4_RDC10_ACT1_P2_ContainerWhite2_id").hide();

  show_zoom_Frida( $( "#U4_RDC10_ACT1_P2_popUp_shadowimg_Frida_id" ), $( "#U4_RDC10_ACT1_P2_popUp_innerimg_Frida_id" ), function( ){
    $("#U4_RDC10_ACT1_P2_Title_id").show();
	$("#U4_RDC10_ACT1_P2_ImgvanGogh_id").show();
	$("#U4_RDC10_ACT1_P2_ImgFridaKahlo_id").show();
	$("#U4_RDC10_ACT1_P2_txtvanGogh_id").show();
	$("#U4_RDC10_ACT1_P2_txtFridaKahlo_id").show();
    $("#U4_RDC10_ACT1_P2_ContainerWhite1_id").show();
    $("#U4_RDC10_ACT1_P2_ContainerWhite2_id").show();

  });

});

$("#U4_RDC10_ACT1_P2_ImgvanGogh_id").click(function(){

	$("#U4_RDC10_ACT1_P2_Title_id").hide();
	$("#U4_RDC10_ACT1_P2_ImgvanGogh_id").hide();
	$("#U4_RDC10_ACT1_P2_ImgFridaKahlo_id").hide();
	$("#U4_RDC10_ACT1_P2_txtvanGogh_id").hide();
	$("#U4_RDC10_ACT1_P2_txtFridaKahlo_id").hide();
    $("#U4_RDC10_ACT1_P2_ContainerWhite1_id").hide();
    $("#U4_RDC10_ACT1_P2_ContainerWhite2_id").hide();

  show_zoom_Vincent( $( "#U4_RDC10_ACT1_P2_popUp_shadowimg_Vincent_id" ), $( "#U4_RDC10_ACT1_P2_popUp_innerimg_Vincent_id" ), function( ){
    $("#U4_RDC10_ACT1_P2_Title_id").show();
	$("#U4_RDC10_ACT1_P2_ImgvanGogh_id").show();
	$("#U4_RDC10_ACT1_P2_ImgFridaKahlo_id").show();
	$("#U4_RDC10_ACT1_P2_txtvanGogh_id").show();
	$("#U4_RDC10_ACT1_P2_txtFridaKahlo_id").show();
    $("#U4_RDC10_ACT1_P2_ContainerWhite1_id").show();
    $("#U4_RDC10_ACT1_P2_ContainerWhite2_id").show();

  });

});



$('#U4_RDC10_ACT1_P2_containerFridaZoom_id').zoom();
$('#U4_RDC10_ACT1_P2_containerVincentZoom_id').zoom();



});