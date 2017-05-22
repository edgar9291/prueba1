/* 
 *En este archivo solo se encuentran funciones para las pantallas de actividad1 del RDC1
 */
var U1_RDC1_ACT1_P8_band1=false;
var U1_RDC1_ACT1_P8_band2=false;

function U1_RDC1_ACT1_P1_ID(){
     U1_RDC1_next="U1_RDC1_ACT1_P2_ID()";
     U1_RDC1_back="U1_RDC1_P1_ID()";
     U1_RDC1_now ="U1_RDC1_ACT1_P1_ID()";
	 
	 $("#forward_id").show();
	 $("#back_id").show();
    RDC1_CLEAR_ALL();
    $("#U1_RDC1_btn_bocina").css('top','33%');
    $("#U1_RDC1_btn_bocina").css('left','50%');
    $("#U1_RDC1_ACT1_P1_txtGlobo_id").show();//ocultamos el globo
    $("#U1_RDC1_ACT1_P2_imgGlobo_id").show();
    $("#U1_RDC1_btn_bocina").show();
    $("#U1_RDC1_ACT1_P1").show();
   // blinkElement("U1_RDC1_btn_bocina",true);
    $("#U1_RDC1_btn_bocina").unbind('click');
    $("#U1_RDC1_btn_bocina").click(function() {
        blinkElement("U1_RDC1_btn_bocina",false);
        if(U1_RDC1_ACT1aud){
            U1_RDC1_ACT1aud=false;
            $("#U1_RDC1_ACT1_P1_txtGlobo_id").show();
            $("#U1_RDC1_ACT1_P1_imgGlobo_id").show();
            $("#RDC1_P2_1").trigger("play");
        }
    });
    $("#RDC1_P2_1").bind("ended",function(){
        U1_RDC1_ACT1aud=true;
    });
	nav_current="U1_RDC1_ACT1_P1";
    fun="nextp()";
	fun2="back()";
}

function U1_RDC1_ACT1_P2_ID(){
    U1_RDC1_next="U1_RDC1_ACT1_P3_ID()";
    U1_RDC1_back="U1_RDC1_ACT1_P1_ID()";
    U1_RDC1_now ="U1_RDC1_ACT1_P2_ID()";
    fun="nextp()";
	fun2="back()";
    var U1_RDC1_ACT1_P2_pause=false;
    RDC1_CLEAR_ALL();
    $("#U1_RDC1_btn_bocina").show();
    $("#U1_RDC1_ACT1_P2").show();  
    
    $("#U1_RDC1_ACT1_P2_txtGlobo_id").hide();//ocultamos el globo
    $("#U1_RDC1_ACT1_P2_imgGlobo_id").hide();
    
    $("#U1_RDC1_btn_bocina").css('top','15%');
    $("#U1_RDC1_btn_bocina").css('left','6%');
    $("#U1_RDC1_btn_bocina").unbind('click');
    $("#U1_RDC1_btn_bocina").click(function() {
        if(U1_RDC1_ACT1aud){
            U1_RDC1_ACT1aud=false;
            $("#U1_RDC1_ACT1_P1_txtGlobo_id").show();
            $("#U1_RDC1_ACT1_P1_imgGlobo_id").show();
            $("#RDC1_P3_1").trigger("play");
        }else{
            if(U1_RDC1_ACT1_P2_pause){
                U1_RDC1_ACT1_P2_pause=false;
                $("#RDC1_P3_1").trigger('play');
            }else{
                U1_RDC1_ACT1_P2_pause = true;
                $("#RDC1_P3_1").trigger('pause');
                
            }
                
        }
    });
    $("#RDC1_P2_1").bind("ended",function(){
        U1_RDC1_ACT1aud=true;
    });
    //click sobre las palabras
    $("#diluvio").mouseenter(function() {
         
         $("#U1_RDC1_ACT1_P2_popUp_diluvio").show();
    });
    $("#diluvio").mouseleave(function() {
         
         $("#U1_RDC1_ACT1_P2_popUp_diluvio").hide();
    });
    
    
    $("#formidables").mouseenter(function() {
         
         $("#U1_RDC1_ACT1_P2_popUp_formidable").show();
    });
    $("#formidables").mouseleave(function() {
         
         $("#U1_RDC1_ACT1_P2_popUp_formidable").hide();
    });
    
    
    $("#hostilizaba").mouseenter(function() {
         
         $("#U1_RDC1_ACT1_P2_popUp_hostilizar").show();
    });
    $("#hostilizaba").mouseleave(function() {
         
         $("#U1_RDC1_ACT1_P2_popUp_hostilizar").hide();
    });
    
    
    $("#panalidades").mouseenter(function() {
         
         $("#U1_RDC1_ACT1_P2_popUp_penalidad").show();
    });
    $("#panalidades").mouseleave(function() {
         
         $("#U1_RDC1_ACT1_P2_popUp_penalidad").hide();
    });
    
}

function U1_RDC1_ACT1_P3_ID(){
    U1_RDC1_next="U1_RDC1_ACT1_P4_ID()";
    U1_RDC1_back="U1_RDC1_ACT1_P2_ID()";
    U1_RDC1_now ="U1_RDC1_ACT1_P3_ID()";
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
    $("#U1_RDC1_btn_bocina").css('top','33%');
    $("#U1_RDC1_btn_bocina").css('left','50%');
    $("#U1_RDC1_btn_bocina").show();
    $("#U1_RDC1_ACT1_P3").show();  
    
    $("#U1_RDC1_ACT1_P3_txtGlobo_id").show();
    $("#U1_RDC1_ACT1_P3_imgGlobo_id").show();
    
    $("#U1_RDC1_btn_bocina").unbind('click');
    $("#U1_RDC1_btn_bocina").click(function() {
        if(U1_RDC1_ACT1aud){
            U1_RDC1_ACT1aud=false;
            $("#U1_RDC1_ACT1_P3_txtGlobo_id").show();
            $("#U1_RDC1_ACT1_P3_imgGlobo_id").show();
            $("#RDC1_P4_1").trigger("play");
        }else{
            if(U1_RDC1_ACT1_P2_pause){
                U1_RDC1_ACT1_P2_pause=false;
                $("#RDC1_P4_1").trigger('play');
            }else{
                U1_RDC1_ACT1_P2_pause = true;
                $("#RDC1_P4_1").trigger('pause');
                
            }
                
        }
    });
    $("#RDC1_P4_1").bind("ended",function(){
        U1_RDC1_ACT1aud=true;
    });
}

function U1_RDC1_ACT1_P4_ID (){
    
    U1_RDC1_next="U1_RDC1_ACT1_P5_ID()";
    U1_RDC1_back="U1_RDC1_ACT1_P3_ID()";
    U1_RDC1_now ="U1_RDC1_ACT1_P4_ID()";
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
    $("#U1_RDC1_btn_bocina").hide();
    $("#U1_RDC1_ACT1_P4").show();  
    
    $("#U1_RDC1_ACT1_P4_retBienpapa_id").hide();
    $("#U1_RDC1_ACT1_P4_retMalpapa_id").hide();
    
    multipleChoiceQuestion("U1_RDC1_ACT1_P4_R", "U1_RDC1_ACT1_P4_comprobar_id", 2, "U1_RDC1_ACT1_P4_retBienpapa_id", "U1_RDC1_ACT1_P4_retMalpapa_id",  U1_RDC1_ACT1_P4_received);
    
    
    
    
}
function  U1_RDC1_ACT1_P4_received() {
    //alert("Call function \"received\"");
}

function U1_RDC1_ACT1_P5_ID (){
    
    U1_RDC1_next="U1_RDC1_ACT1_P6_ID()";
    U1_RDC1_back="U1_RDC1_ACT1_P4_ID()";
    U1_RDC1_now ="U1_RDC1_ACT1_P5_ID()";
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
    $("#U1_RDC1_btn_bocina").hide();
    $("#U1_RDC1_ACT1_P5").show(); 
    ////////////////////////////////
    boxDragQuestion( {
        droppableDiv: "U1_RDC1_ACT1_P5_preg2_drop",
        draggablesDiv: "U1_RDC1_ACT1_P5_preg2_options_container",
        correctFeedback: "U1_RDC1_ACT1_P5_preg2_feedBok",
        wrongFeedback: "U1_RDC1_ACT1_P5_preg2_feedBad",
        correctPosition: 1,
        waitCorrectButton: true,
        checkButtonId: "U1_RDC1_ACT1_P5_comprobar_id",
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
    
    
}

function U1_RDC1_ACT1_P6_ID (){
    
    U1_RDC1_next="U1_RDC1_ACT1_P7_ID()";
    U1_RDC1_back="U1_RDC1_ACT1_P5_ID()";
    U1_RDC1_now ="U1_RDC1_ACT1_P6_ID()";
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
    $("#U1_RDC1_btn_bocina").hide();
    $("#U1_RDC1_ACT1_P6").show();
    //////////////////////////////////////
    boxDragQuestion( {
        droppableDiv: "U1_RDC1_ACT1_P6_preg2_drop",
        draggablesDiv: "U1_RDC1_ACT1_P6_preg2_options_container",
        correctFeedback: "U1_RDC1_ACT1_P6_preg2_feedBok",
        wrongFeedback: "U1_RDC1_ACT1_P6_preg2_feedBad",
        correctPosition: 3,
        waitCorrectButton: true,
        checkButtonId: "U1_RDC1_ACT1_P6_comprobar_id",
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
    
    
}

function U1_RDC1_ACT1_P7_ID (){
    
    U1_RDC1_next="U1_RDC1_ACT1_P8_ID()";
    U1_RDC1_back="U1_RDC1_ACT1_P6_ID()";
    U1_RDC1_now ="U1_RDC1_ACT1_P7_ID()";
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
    $("#U1_RDC1_btn_bocina").hide();
    $("#U1_RDC1_ACT1_P7").show();    
    $("#U1_RDC1_ACT1_P7_PU").hide(); 
    
    new EditTextQuestion( "U1_RDC1_ACT1_P7_q4_textBox", "save2" );
    
    $("#U1_RDC1_ACT1_P7_q4_check").click(function() {
        U1_RDC1_ACT1_P7_PU();
    });
    
    
    
}
function U1_RDC1_ACT1_P7_PU(){
    
    $("#U1_RDC1_ACT1_P7_PU").show();
    OpenQuestion('U1_RDC1_P11_Boton_Finalizar','U1_RDC1_P11_Pop_Ups_id','U1_RDC1_P11_Categorias_Feedback_id','U1_RDC1_P11_Feedback_id',"");
}

function U1_RDC1_ACT1_P8_ID (){
    U1_RDC1_ACT1_P8_band1=false;
    U1_RDC1_ACT1_P8_band2=false;
    U1_RDC1_next="U1_RDC1_ACT1_P9_ID()";
    back="U1_RDC1_ACT1_P7_ID()";
    U1_RDC1_now ="U1_RDC1_ACT1_P8_ID()";
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
    $("#U1_RDC1_btn_bocina").hide();
    $("#U1_RDC1_ACT1_P8").show();
    
    sentenceDropdownQuestion("U1_RDC1_ACT1_P8_dropnav1_id","U1_RDC1_ACT1_P8_q5_retrook","U1_RDC1_ACT1_P8_q5_retroba","U1_RDC1_ACT1_P8_comprobar_id","correcto",20,"U1_RDC1_ACT1_P8_ID_band1");
    
    $("#U1_RDC1_ACT1_P8_comprobar_id").click(function() {
        
        
    });
    
}
function U1_RDC1_ACT1_P8_ID_band1 (){
    
}

function U1_RDC1_ACT1_P8_ID_band2 (){
    
    
}

function U1_RDC1_ACT1_P9_ID (){
    
    U1_RDC1_next="U1_RDC1_ACT1_P10_ID()";
    U1_RDC1_back="U1_RDC1_ACT1_P8_ID()";
    U1_RDC1_now ="U1_RDC1_ACT1_P9_ID()";
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
    $("#U1_RDC1_btn_bocina").hide();
    $("#U1_RDC1_ACT1_P9").show();      
     //multipleChoiceQuestion("U1_RDC1_ACT1_P4_R", "U1_RDC1_ACT1_P4_comprobar_id", 2, "U1_RDC1_ACT1_P4_retBienpapa_id", "U1_RDC1_ACT1_P4_retMalpapa_id",  U1_RDC1_ACT1_P4_received);
     multipleChoiceQuestion("U1_RDC1_ACT1_P9_R", "U1_RDC1_ACT1_P9_comprobar_id", 1, "U1_RDC1_ACT1_P9_retBienpapa_id", "U1_RDC1_ACT1_P9_retMalpapa_id",  U1_RDC1_ACT1_P9_received);
    
}
function U1_RDC1_ACT1_P9_received (){
    
}

function U1_RDC1_ACT1_P10_ID (){
    
    U1_RDC1_next="U1_RDC1_ACT1_P11_ID()";
    U1_RDC1_back="U1_RDC1_ACT1_P9_ID()";
    U1_RDC1_now ="U1_RDC1_ACT1_P10_ID()";
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
    $("#U1_RDC1_btn_bocina").hide();
    $("#U1_RDC1_ACT1_P10").show();      
    
    
}

function U1_RDC1_ACT1_P11_ID (){
    
    U1_RDC1_next="U1_RDC1_P1()";
    U1_RDC1_back="U1_RDC1_ACT1_P10_ID()";
    U1_RDC1_now ="U1_RDC1_ACT1_P11_ID()";
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
    $("#U1_RDC1_btn_bocina").hide();
    $("#U1_RDC1_ACT1_P11").show();      
    
    
  
}
