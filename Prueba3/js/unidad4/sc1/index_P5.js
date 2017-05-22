/*******************  Variables **********************/
var flagCount = 0;
var draggable; 
var name;


/*******************  Funciones propias **********************/

function onIncorrectDrop( event, ui ){
  console.debug( "¿Estas seguro de tu respuesta?");
}

function onStopDragging( event, ui ){
  var value = ui.helper.data( "correct" );
  console.debug( ui.helper.data( "correct" ) );
  if( value == undefined  || !value ){
    onIncorrectDrop( event, ui );
  }
}

function validaActividadP5() {
    if(flagCount == 8){
        return true;
    }
    else 
        false;
}

function reset_P5() {
	  flagCount = 0;
    $( ".U4_RDC10_ACT1_P5_drg" ).draggable( "destroy" );
    $(".U4_RDC10_ACT1_P4_drg").attr("style", "").data( "correct", false );
    $(".U4_RDC10_ACT1_P4_tagAfter").hide();
    $("#U4_RDC10_ACT1_P4_Title_id").show();
    $("#U4_RDC10_P4_mark_id").hide();
    utils.blinkElement("forward_id",false);
}


function iniciaP5() {


  $("#U4_RDC10_ACT1_P4_Title_id").show();
  $(".U4_RDC10_ACT1_P4_tagAfter").hide();
  $("#U4_RDC10_P4_mark_id").hide();
  utils.blinkElement("forward_id",true);
	$(".U4_RDC10_btn").addClass("U4_RDC10_cursor");
  $("#U4_RDC10_ACT1_P4_boxRetroalimen").hide();

    $( ".U4_RDC10_ACT1_P4_drg" ).draggable({
      cursor: "move",
      revert: "invalid",
      opacity: 0.7,
      stop: onStopDragging
    });

    $("#U4_RDC10_ACT1_P4_BoxvanGoghDrop_id").droppable({
      accept:".U4_RDC10_ACT1_P4_drg",
      greedy: false,
      drop:function( event, ui ) {
        ui.helper.data( "correct", true );
        $(ui.draggable).hide();
        draggable = $( ui.helper );
        name = draggable.attr( "id" );
        $( "#" + name + "_After1" ).show( );
        //$(".U4_RDC10_ACT1_P6_tagAfter").show();
        flagCount++;
        if(validaActividadP5()) {
            $("#forward_id").show();
            $("#back_id").show();
            $( "#home_id" ).show( );
            $("#U4_RDC10_ACT1_P4_boxRetroalimen").show();
            $("#U4_RDC10_P4_mark_id").show(); 
            $("#U4_RDC10_ACT1_P4_Title_id").hide();
        }
      }
    });

    $("#U4_RDC10_ACT1_P4_BoxFridaKahloDrop_id").droppable({
      accept:".U4_RDC10_ACT1_P4_drg",
      greedy: false,
      drop:function( event, ui ) {
        ui.helper.data( "correct", true );
        $(ui.draggable).hide();
        draggable = $( ui.helper );
        name = draggable.attr( "id" );
        $( "#" + name + "_After2" ).show( );
        flagCount++;
        if(validaActividadP5()) {
            $("#forward_id").show();
            $("#back_id").show();
            $( "#home_id" ).show( );
            $("#U4_RDC10_ACT1_P4_boxRetroalimen").show(); 
            $("#U4_RDC10_P4_mark_id").show();  
            $("#U4_RDC10_ACT1_P4_Title_id").hide();         
        }
      }
    });
    
    nav_current = "U4_RDC10_ACT1_P4";
	fun = goNextRDC10_P5;
	fun2 = goBackRDC10_P5;
    
}

function goNextRDC10_P5( ){
	reset_P5();
	iniciaP6();
}

function goBackRDC10_P5( ){
	reset_P5();
	iniciaP4();
}