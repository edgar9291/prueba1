/* 
 *En este archivo solo se encuentran funciones para las pantallas de actividad1 del RDC3
 */
var U1_RDC3_ACT1_P8_band1=false;
var U1_RDC3_ACT1_P8_band2=false;

function U1_RDC3_ACT1_P1_ID(){
     U1_RDC3_next="U1_RDC3_ACT1_P2_ID()";
     U1_RDC3_back="U1_RDC3_P1_ID()";
     U1_RDC3_now ="U1_RDC3_ACT1_P1_ID()";
	 $("#forward_id").show();
	 $("#back_id").show();
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_btn_bocina").show();
    $("#U1_RDC3_ACT1_P1").show();
    $("#U1_RDC3_ACT1_P1_txtGlobo_id").hide();//ocultamos texto del globo
    
    $("#U1_RDC3_btn_bocina").unbind('click');
    $("#U1_RDC3_btn_bocina").click(function() {
        if(U1_RDC3_ACT1aud){
            U1_RDC3_ACT1aud=false;
            $("#U1_RDC3_ACT1_P1_txtGlobo_id").show();
            $("#U1_RDC3_ACT1_P1_imgGlobo_id").show();
            $("#RDC3_P2_1").trigger("play");
        }
    });
    $("#RDC3_P2_1").bind("ended",function(){
        U1_RDC3_ACT1aud=true;
    });
	nav_current="U1_RDC3_ACT1_P1";
    fun="rdc3_nextp()";
	fun2="rdc3_back()";
    
}

function U1_RDC3_ACT1_P2_ID(){
    U1_RDC3_next="U1_RDC3_ACT1_P3_ID()";
    U1_RDC3_back="U1_RDC3_ACT1_P1_ID()";
    U1_RDC3_now ="U1_RDC3_ACT1_P2_ID()";
    
    var U1_RDC3_ACT1_P2_pause=false;
	$("#forward_id").show();
	 $("#back_id").show();
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_btn_bocina").hide();
    $("#U1_RDC3_ACT1_P2").show();  
    
    $("#U1_RDC3_ACT1_P2_txtGlobo_id").hide();//ocultamos el globo
    $("#U1_RDC3_ACT1_P2_imgGlobo_id").hide();
    
    
    
    //click sobre las palabras
    $("#U1_RDC3_ACT1_P2_word_activista").mouseenter(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_activismo").show();
    });
    $("#U1_RDC3_ACT1_P2_word_activista").mouseleave(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_activismo").hide();
    });
    
    
    $("#U1_RDC3_ACT1_P2_word_arraigada").mouseenter(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_arraigar").show();
    });
    $("#U1_RDC3_ACT1_P2_word_arraigada").mouseleave(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_arraigar").hide();
    });
    
    
    $("#U1_RDC3_ACT1_P2_word_beneplacito").mouseenter(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_beneplacito").show();
    });
    $("#U1_RDC3_ACT1_P2_word_beneplacito").mouseleave(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_beneplacito").hide();
    });
    
    
    $("#U1_RDC3_ACT1_P2_word_deforestacion").mouseenter(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_deforestar").show();
    });
    $("#U1_RDC3_ACT1_P2_word_deforestacion").mouseleave(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_deforestar").hide();
    });
    
    $("#U1_RDC3_ACT1_P2_word_degrade").mouseenter(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_degradar").show();
    });
    $("#U1_RDC3_ACT1_P2_word_degrade").mouseleave(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_degradar").hide();
    });
    
    $("#U1_RDC3_ACT1_P2_word_erosion").mouseenter(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_erosion").show();
    });
    $("#U1_RDC3_ACT1_P2_word_erosion").mouseleave(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_erosion").hide();
    });
    
    $("#U1_RDC3_ACT1_P2_word_merman").mouseenter(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_mermar").show();
    });
    $("#U1_RDC3_ACT1_P2_word_merman").mouseleave(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_mermar").hide();
    });
    
    $("#U1_RDC3_ACT1_P2_word_simposio").mouseenter(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_simposio").show();
    });
    $("#U1_RDC3_ACT1_P2_word_simposio").mouseleave(function() {
         
         $("#U1_RDC3_ACT1_P2_popUp_simposio").hide();
    });
    fun="rdc3_nextp()";
	fun2="rdc3_back()";
    
}

function U1_RDC3_ACT1_P3_ID(){
    U1_RDC3_next="U1_RDC3_ACT1_P4_ID()";
    U1_RDC3_back="U1_RDC3_ACT1_P2_ID()";
    U1_RDC3_now ="U1_RDC3_ACT1_P3_ID()";
	$("#forward_id").show();
	 $("#back_id").show();
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_btn_bocina").show();
    $("#U1_RDC3_ACT1_P3").show();  
            
    $("#U1_RDC3_btn_bocina").css('top','38%');
    $("#U1_RDC3_btn_bocina").css('left','50%');
    $("#U1_RDC3_btn_bocina").unbind('click');
    $("#U1_RDC3_btn_bocina").click(function() {
        if(U1_RDC3_ACT1aud){
            U1_RDC3_ACT1aud=false;
            $("#U1_RDC3_ACT1_P3_txtGlobo_id").show();
            $("#U1_RDC3_ACT1_P3_imgGlobo_id").show();
            $("#RDC3_P3_1").trigger("play");
        }else{
            if(U1_RDC3_ACT1_P2_pause){
                U1_RDC3_ACT1_P2_pause=false;
                $("#RDC3_P3_1").trigger('play');
            }else{
                U1_RDC3_ACT1_P2_pause = true;
                $("#RDC3_P3_1").trigger('pause');
                
            }
                
        }
    });
    $("#RDC3_P4_1").bind("ended",function(){
        U1_RDC3_ACT1aud=true;
    });
	fun="rdc3_nextp()";
	fun2="rdc3_back()";
}

function U1_RDC3_ACT1_P4_ID (){
    
    U1_RDC3_next="U1_RDC3_ACT1_P5_ID()";
    U1_RDC3_back="U1_RDC3_ACT1_P3_ID()";
    U1_RDC3_now ="U1_RDC3_ACT1_P4_ID()";
	$("#forward_id").show();
	 $("#back_id").show();
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_btn_bocina").hide();
    $("#U1_RDC3_ACT1_P4").show();  
    
 
    multipleChoiceQuestion("U1_RDC3_ACT1_P3_q1_R_id", "U1_RDC3_ACT1_P3_q1_comprobar_id", 1, "U1_RDC3_ACT1_P3_q1_retroOkpapa_id", "U1_RDC3_ACT1_P3_q1_retroBadpapa_id",  U1_RDC3_ACT1_P4_received);
    
    fun="rdc3_nextp()";
	fun2="rdc3_back()";
    
    
}
function  U1_RDC3_ACT1_P4_received() {
    //alert("Call function \"received\"");
}

function U1_RDC3_ACT1_P5_ID (){
    
    U1_RDC3_next="U1_RDC3_ACT1_P6_ID()";
    U1_RDC3_back="U1_RDC3_ACT1_P4_ID()";
    U1_RDC3_now ="U1_RDC3_ACT1_P5_ID()";
	$("#forward_id").show();
	$("#back_id").show();
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_btn_bocina").hide();
    $("#U1_RDC3_ACT1_P5").show(); 
    ////////////////////////////////
    multipleChoiceQuestion("U1_RDC3_ACT1_P3_q3_R_id", "U1_RDC3_ACT1_P3_q3_comprobar_id", 1, "U1_RDC3_ACT1_P3_q3_retroOkpapa_id", "U1_RDC3_ACT1_P3_q3_retroBadpapa_id",  "");
    
    fun="rdc3_nextp()";
	fun2="rdc3_back()";
}

function U1_RDC3_ACT1_P6_ID (){
    
    U1_RDC3_next="U1_RDC3_ACT1_P7_ID()";
    U1_RDC3_back="U1_RDC3_ACT1_P5_ID()";
    U1_RDC3_now ="U1_RDC3_ACT1_P6_ID()";
	$("#forward_id").show();
	$("#back_id").show();
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_btn_bocina").hide();
    $("#U1_RDC3_ACT1_P6").show();
    //////////////////////////////////////
    multipleChoiceQuestion("U1_RDC3_ACT1_P3_q3_R_id", "U1_RDC3_ACT1_P3_q3_comprobar_id", 0, "U1_RDC3_ACT1_P3_q3_retroOkpapa_id", "U1_RDC3_ACT1_P3_q3_retroBadpapa_id",  "");
    
    fun="rdc3_nextp()";
	fun2="rdc3_back()";
}

function U1_RDC3_ACT1_P7_ID (){
    
    U1_RDC3_next="U1_RDC3_ACT1_P8_ID()";
    U1_RDC3_back="U1_RDC3_ACT1_P6_ID()";
    U1_RDC3_now ="U1_RDC3_ACT1_P7_ID()";
	$("#forward_id").show();
	$("#back_id").show();
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_btn_bocina").hide();
    $("#U1_RDC3_ACT1_P7").show();    
    $("#U1_RDC3_ACT1_P7_PU").hide(); 
    
    $("#U1_RDC3_ACT1_P3_q4_retroOk_id").hide(); 
    $("#U1_RDC3_ACT1_P3_q4_retroBad_id").hide(); 
    
    
    boxDragQuestion( {
        droppableDiv: "U1_RDC3_ACT1_P3_q4_drop_id",
        draggablesDiv: "U1_RDC3_ACT1_P3_q4_options-container_id",
        correctFeedback: "U1_RDC3_ACT1_P3_q4_retroOk_id",
        wrongFeedback: "U1_RDC3_ACT1_P3_q4_retroBad_id",
        correctPosition: 3,
        waitCorrectButton: true,
        checkButtonId: "U1_RDC3_ACT1_P3_q4_comprobar_id",
        resetButtonId: "reset",
        onPassActivity: function( isCorrect ){
                console.debug( "Me ha pasado " + isCorrect );
                $( "#options" ).find( "div" ).css( "cursor", "default" );
        },
        onEnter: function( ){
                $( "#correctBox" ).css( "background-color", "blue" );
        },
        onLeave: function( ){
                $( "#correctBox" ).css( "background-color", "" );
        }
    } );
    
    
    fun="rdc3_nextp()";
	fun2="rdc3_back()";
}
function U1_RDC3_ACT1_P7_PU(){
    
   
}

function U1_RDC3_ACT1_P8_ID (){
    U1_RDC3_ACT1_P8_band1=false;
    U1_RDC3_ACT1_P8_band2=false;
    U1_RDC3_next="U1_RDC3_ACT1_P9_ID()";
    U1_RDC3_back="U1_RDC3_ACT1_P7_ID()";
    U1_RDC3_now ="U1_RDC3_ACT1_P8_ID()";
	$("#forward_id").show();
	$("#back_id").show();
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_btn_bocina").hide();
    $("#U1_RDC3_ACT1_P8").show();
    
     multipleChoiceQuestion("U1_RDC3_ACT1_P3_q5_R_id", "U1_RDC3_ACT1_P3_q5_comprobar_id", 3, "U1_RDC3_ACT1_P3_q5_retroOkpapa_id", "U1_RDC3_ACT1_P3_q5_retroBadpapa_id",  "");
    fun="rdc3_nextp()";
	fun2="rdc3_back()";
}
function U1_RDC3_ACT1_P8_ID_band1 (){
    
}

function U1_RDC3_ACT1_P8_ID_band2 (){
    
    
}

function U1_RDC3_ACT1_P9_ID (){
    
    U1_RDC3_next="U1_RDC3_ACT1_P10_ID()";
    U1_RDC3_back="U1_RDC3_ACT1_P8_ID()";
    U1_RDC3_now ="U1_RDC3_ACT1_P9_ID()";
	$("#forward_id").show();
	 $("#back_id").show();
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_btn_bocina").show();
    $("#U1_RDC3_ACT1_P9").show();      
     $("#U1_RDC3_btn_bocina").unbind('click');
    $("#U1_RDC3_btn_bocina").click(function() {
        if(U1_RDC3_ACT1aud){
            U1_RDC3_ACT1aud=false;
            $("#U1_RDC3_ACT1_P1_txtGlobo_id").show();
            $("#U1_RDC3_ACT1_P1_imgGlobo_id").show();
            $("#RDC3_P9_1").trigger("play");
        }
    });
    $("#RDC3_P9_1").bind("ended",function(){
        U1_RDC3_ACT1aud=true;
    });
	fun="rdc3_nextp()";
	fun2="rdc3_back()";
}


function U1_RDC3_ACT1_P10_ID (){
    
    U1_RDC3_next="U1_RDC3_P1()";
    U1_RDC3_back="U1_RDC3_ACT1_P9_ID()";
    U1_RDC3_now ="U1_RDC3_ACT1_P10_ID()";
	$("#forward_id").show();
	 $("#back_id").show();
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_btn_bocina").hide();
    $("#U1_RDC3_ACT1_P10").show();      
    
    fun="rdc3_nextp()";
	fun2="rdc3_back()";
}


