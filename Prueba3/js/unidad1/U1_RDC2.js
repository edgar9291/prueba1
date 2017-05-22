var U1_RDC2_SoundReproducing;
$(document).ready(function () {
    $(".U1_B7_RDC2").hide();
    U1_RDC2_ButtonNext();
    U1_RDC2_ButtonBack();
    U1_RDC2_GoActivities();
    U1_RDC2_ButtonHome();
    U1_RDC2_ButtonAudio();
    boxDragQuestion( {
                droppableDiv: "U1_RDC2_ACT1_P4_Pregunta2_container_ID",
                draggablesDiv: "U1_RDC2_ACT1_P4_Pregutna2_options",
                correctFeedback: "U1_RDC2_ACT1_P4_Pregutna2_correctFeedback_ID",
                wrongFeedback: "U1_RDC2_ACT1_P4_Pregutna2_wrongFeedback_ID",
                correctPosition: 1,
                maximumTries: 2,
                waitCorrectButton: true,
                checkButtonId: "U1_RDC2_ACT1_P4_Pregutna2_check_ID",
                onPassActivity: function( isCorrect ){
                    console.debug( "Me ha pasado " + isCorrect );
                    blinkElement("U1_P1_RDC2_ButtonNext",true);
                },
                onEnter: function( ){
                    $( "#U1_RDC2_ACT1_P4_Pregunta2_container_ID" ).css( "background-color", "blue" );
                },
                onLeave: function( ){
                    $( "#U1_RDC2_ACT1_P4_Pregunta2_container_ID" ).css( "background-color", "" );
                }
            } );
            multipleChoiceQuestion("U1_RDC2_ACT1_P4_Pregutna1_options", "U1_RDC2_ACT1_P4_Pregutna1_check_ID",1,"U1_RDC2_ACT1_P4_Pregutna1_correctFeedback_Padre_ID", "U1_RDC2_ACT1_P4_Pregutna1_wrongFeedback_Padre_ID", function(){blinkElement("U1_P1_RDC2_ButtonNext",true)},"");
            multipleChoiceQuestion("U1_RDC2_ACT1_P4_Pregutna4_options", "U1_RDC2_ACT1_P4_Pregutna4_check_ID",1,"U1_RDC2_ACT1_P4_Pregutna4_correctFeedback_Padre_ID", "U1_RDC2_ACT1_P4_Pregutna4_wrongFeedback_Padre_ID", function(){blinkElement("U1_P1_RDC2_ButtonNext",true)},"");
            sentenceDropdownQuestion("U1_RDC2_ACT1_P4_Pregutna3_options_ID","U1_RDC2_ACT1_P4_Pregutna3_correctFeedback_ID","U1_RDC2_ACT1_P4_Pregutna3_wrongFeedback_ID","U1_RDC2_ACT1_P4_Pregutna3_check_ID","U1_RDC2_ACT1_P4_Pregutna3_Respuesta_ID",20,"");
    //$(".U1_RDC2_ACT_1_P2").show();
});
function U1_RDC2_ACT1_checar(){

    }
    function U1_RDC2_ACT1_popupVideo (){
        $("#U1_RDC2_ACT1_P4_Pregutna1_Video_ID").get(0).load();
        $("#U1_RDC2_ACT1_P4_Pregutna1_Video_ID").fadeIn("slow");
        $("#U1_RDC2_ACT1_P4_Pregutna1_Video_ID").get(0).play();
        $("#U1_RDC2_ACT1_P4_Pregutna1_AuxVideo_ID").show();
    }
    function U1_RDC2_ACT1_ocultarVideo (){
        $("#U1_RDC2_ACT1_P4_Pregutna1_Video_ID").fadeOut("slow");
        $("#U1_RDC2_ACT1_P4_Pregutna1_Video_ID").get(0).pause();
        $("#U1_RDC2_ACT1_P4_Pregutna1_AuxVideo_ID").hide();
    }



function U1_RDC2_ButtonAudio() {
    var U1_RDC2_clickInAudio=0;
    $(".U1_P1_RDC2_ButtonAudio").on("click", function (e) {
        U1_RDC2_clickInAudio++;
        
        if(U1_RDC2_clickInAudio==1){
            blinkElement("U1_P1_RDC2_ButtonAudio", false);        
            if ($(".U1_RDC2_P1_Activities").is(":visible")) { //Audio Index Actividades
                U1_RDC2_SoundReproducing.setAttribute('src', 'audio/unidad1/RDC2/rdc2_p1_1.mp3');            
            } else if ($(".U1_RDC2_ACT_1_P1").is(":visible")) { //Audio Actividad 1 Pagina 1
                U1_RDC2_SoundReproducing.setAttribute('src', 'audio/unidad1/RDC2/rdc2_p2_1.mp3');                       
            } else if ($(".U1_RDC2_ACT_1_P3").is(":visible")) { //Audio Actividad 1 Pagina 3
                U1_RDC2_SoundReproducing.setAttribute('src', 'audio/unidad1/RDC2/rdc2_p3_1.mp3');            
            } else if ($(".U1_RDC2_ACT_1_P5").is(":visible")) { //Audio Actividad 2 Pagina 1
                U1_RDC2_SoundReproducing.setAttribute('src', 'audio/unidad1/RDC2/rdc2_p6_1.mp3');            
            } else if ($(".U1_RDC2_ACT_2_P9_Activities").is(":visible")) { //Audio Actividad 2 Pagina 2
                U1_RDC2_SoundReproducing.setAttribute('src', 'audio/unidad1/RDC2/rdc2_p9_1.mp3');            
            } else if ($(".U1_RDC2_ACT_2_P11_Activities").is(":visible")) { //Audio Actividad 2 Pagina 4
                U1_RDC2_SoundReproducing.setAttribute('src', 'audio/unidad1/RDC2/rdc2_p11_1.mp3');            
            }              
            U1_RDC2_SoundReproducing.load();
            U1_RDC2_SoundReproducing.play();      
        }
        U1_RDC2_SoundReproducing.onended = function() {
            if(!$(".U1_RDC2_P1_Activities").is(":visible"))
                blinkElement('U1_P1_RDC2_ButtonNext',true);
        };
        U1_RDC2_SoundReproducing.addEventListener("ended", function () {            
            U1_RDC2_clickInAudio=0;    
        }, true);

         U1_RDC2_SoundReproducing.addEventListener("pause", function () {
            $(".U1_P1_RDC2_ButtonAudio").on("click", function (e) {
                 
                U1_RDC2_clickInAudio=1;
                U1_RDC2_SoundReproducing.play(); 
            });
        }, true);

        U1_RDC2_SoundReproducing.addEventListener("playing", function () {
            $(".U1_P1_RDC2_ButtonAudio").on("click", function (e) {
                U1_RDC2_clickInAudio++;
                if(U1_RDC2_clickInAudio==3){    
                    U1_RDC2_SoundReproducing.pause();                                        
                }
            });
        }, true);       
    });

    $(".U1_P1_RDC2_ButtonNext, .U1_P1_RDC2_ButtonBack, .U1_P1_RDC2_ButtonHome, .U1_P1_RDC2_ButtonActivity1, .U1_P1_RDC2_ButtonActivity2, .U1_P1_RDC2_ACT_1_P1_ButtonActivity, U1_P9_RDC2_ACT_2_ButtonActivity1").on("click", function (e) {
        U1_RDC2_SoundReproducing.pause();   
        U1_RDC2_SoundReproducing.currentTime = 0;
        U1_RDC2_clickInAudio=0; 
    });
}

function U1_RDC2_Inicialize() {
    $(".U1_RDC2_ACT_1_P1").hide();    
    $(".U1_RDC2_ACT_1_P2").hide();
    $(".U1_RDC2_ACT_1_P3").hide();
    $(".U1_RDC2_ACT_1_P4").hide();    
    $(".U1_RDC2_ACT_1_P5").hide();
    $(".U1_RDC2_ACT_1_P6").hide();
    $(".U1_RDC2_ACT_2_P9_Activities").hide();
    $(".U1_RDC2_ACT_2_P10_Activities").hide();
    $(".U1_RDC2_ACT_2_P11_Activities").hide();
    $("#U1_RDC2_ACT1_P4_Pregutna1_Video_ID").hide();
    $(".U1_P1_RDC2_ButtonBack").hide();
    $(".U1_P1_RDC2_ButtonNext").hide();
    $(".U1_RDC2_P1_Activities").hide();
    $(".U1_B7_RDC9").hide();
    $(".U1_B7_RDC8").hide();
    $(".U1_B7_RDC2").hide();
    $(".U1_P1_RDC2_ButtonAudio").removeClass('U1_P9_RDC2_ButtonAudio');
    $(".U1_P1_RDC2_ButtonAudio").removeClass('U1_P11_RDC2_ButtonAudio');
    U1_RDC2_infoView= new Array(0,0,0,0,0,0,0);
    U1_RDC2_SoundReproducing = document.createElement('audio');                
}

function U1_RDC2_GoIndexActivitiesRDC2() {
    U1_RDC2_Inicialize();
    $(".U1_B7_RDC2").show();
    $(".U1_RDC2_P1_Activities").show();
    blinkElement("U1_P1_RDC2_ButtonAudio", true);
}

function U1_RDC2_GoActivities() {
    $(".U1_P1_RDC2_ButtonActivity1").on("click", function (e) {
        $(".U1_RDC2_P1_Activities").hide();
        $(".U1_P1_RDC2_ButtonBack").show();
        $(".U1_P1_RDC2_ButtonNext").show();
        $(".U1_RDC2_ACT_1_P1").show();
        blinkElement("U1_P1_RDC2_ButtonAudio", true);
    });
    $(".U1_P1_RDC2_ButtonActivity2").on("click", function (e) {
        $(".U1_RDC2_P1_Activities").hide();
        $(".U1_RDC2_ACT_2_P9_Activities").show();
        $(".U1_P1_RDC2_ButtonBack").show();
        $(".U1_P1_RDC2_ButtonNext").show();
        $(".U1_P1_RDC2_ButtonAudio").addClass('U1_P9_RDC2_ButtonAudio');
    });
    $(".U1_P9_RDC2_ACT_2_ButtonActivity1").on("click", function (e) {
            blinkElement("U1_P1_RDC2_ButtonNext",false);
            $(".U1_RDC2_ACT_2_P9_Activities").hide();
            $(".U1_RDC2_ACT_2_P10_Activities").show();
            blinkElement("U1_P1_RDC2_ButtonAudio", false);
            $(".U1_P1_RDC2_ButtonAudio").hide();
    });
    $(".U1_P1_RDC2_ACT_1_P1_ButtonActivity").on("click", function (e) {
        blinkElement("U1_P1_RDC2_ButtonAudio",false);
        $(".U1_RDC2_ACT_1_P1").hide();
        $(".U1_P1_RDC2_ButtonAudio").hide();
        $(".U1_RDC2_ACT_1_P2").show();
    });
}

function U1_RDC2_ButtonHome() {
    $(".U1_P1_RDC2_ButtonHome").on("click", function (e) {
            U1_RDC2_Inicialize();
            $(".U1_B7_RDC2").show();
            $(".U1_RDC2_P1_Activities").show();
    });
}


function U1_RDC2_ButtonNext() {
    $(".U1_P1_RDC2_ButtonNext").on("click", function (e) {
        //Actividad 1
            if ($(".U1_RDC2_ACT_1_P1").is(":visible")) {//Ir a P2 A1
                blinkElement("U1_P1_RDC2_ButtonNext",false);
                $(".U1_RDC2_ACT_1_P1").hide();
                blinkElement("U1_P1_RDC2_ButtonAudio", false);
                $(".U1_P1_RDC2_ButtonAudio").hide();
                $(".U1_RDC2_ACT_1_P2").show();
            } else if ($(".U1_RDC2_ACT_1_P2").is(":visible")) {//Ir a P3 A1
                blinkElement("U1_P1_RDC2_ButtonNext",false);
                $(".U1_RDC2_ACT_1_P2").hide();
                $(".U1_RDC2_ACT_1_P3").show();
                blinkElement("U1_P1_RDC2_ButtonAudio", true);
            } else if ($(".U1_RDC2_ACT_1_P3").is(":visible")) {//Ir a ACTIVIDADES
                blinkElement("U1_P1_RDC2_ButtonNext",false);
                $(".U1_RDC2_ACT_1_P3").hide();
                blinkElement("U1_P1_RDC2_ButtonAudio", false);
                $(".U1_P1_RDC2_ButtonAudio").hide();
                $(".U1_RDC2_ACT_1_P4").show();
                $(".U1_RDC2_ACT_1_P4_Pregunta1").show();
                $(".U1_RDC2_ACT_1_P4_Pregunta2").hide();
                $(".U1_RDC2_ACT_1_P4_Pregunta3").hide();
                $(".U1_RDC2_ACT_1_P4_Pregunta4").hide();
            } else if ($(".U1_RDC2_ACT_1_P4").is(":visible")) {//Ir a ACTIVIDADES
                if($(".U1_RDC2_ACT_1_P4_Pregunta1").is(":visible")){
                    blinkElement("U1_P1_RDC2_ButtonNext",false);
                    $(".U1_RDC2_ACT_1_P4_Pregunta1").hide();
                    $(".U1_RDC2_ACT_1_P4_Pregunta2").show();
                } else if($(".U1_RDC2_ACT_1_P4_Pregunta2").is(":visible")){
                    blinkElement("U1_P1_RDC2_ButtonNext",false);
                    $(".U1_RDC2_ACT_1_P4_Pregunta2").hide();
                    $(".U1_RDC2_ACT_1_P4_Pregunta3").show();
                } else if($(".U1_RDC2_ACT_1_P4_Pregunta3").is(":visible")){
                    blinkElement("U1_P1_RDC2_ButtonNext",false);
                    $(".U1_RDC2_ACT_1_P4_Pregunta3").hide();
                    $(".U1_RDC2_ACT_1_P4_Pregunta4").show();
                } else if($(".U1_RDC2_ACT_1_P4_Pregunta4").is(":visible")){                    
                    blinkElement("U1_P1_RDC2_ButtonNext",false);
                    $(".U1_RDC2_ACT_1_P4_Pregunta4").hide();
                    $(".U1_RDC2_ACT_1_P4").hide();
                    $(".U1_RDC2_ACT_1_P5").show();
                    blinkElement("U1_P1_RDC2_ButtonAudio", true);
                }
            } else if ($(".U1_RDC2_ACT_1_P5").is(":visible")) {//Ir a ACTIVIDADES
                blinkElement("U1_P1_RDC2_ButtonNext",false);
                $(".U1_RDC2_ACT_1_P5").hide();
                $(".U1_RDC2_ACT_1_P6").show();
                blinkElement("U1_P1_RDC2_ButtonAudio", false);
                $(".U1_P1_RDC2_ButtonAudio").hide();
            } else if ($(".U1_RDC2_ACT_1_P6").is(":visible")) {//Ir a ACTIVIDADES
                U1_RDC2_Inicialize();
                $(".U1_B7_RDC2").show();
                $(".U1_RDC2_P1_Activities").show();
            } 
        //Actividad 2
        else if ($(".U1_RDC2_ACT_2_P9_Activities").is(":visible")) {//Ir a P2 A1
            blinkElement("U1_P1_RDC2_ButtonNext",false);
            $(".U1_RDC2_ACT_2_P9_Activities").hide();
            $(".U1_RDC2_ACT_2_P10_Activities").show();
            blinkElement("U1_P1_RDC2_ButtonAudio", false);
            $(".U1_P1_RDC2_ButtonAudio").hide();
        } else if ($(".U1_RDC2_ACT_2_P10_Activities").is(":visible")) {//Ir a P3 A1
            blinkElement("U1_P1_RDC2_ButtonNext",false);
            $(".U1_RDC2_ACT_2_P10_Activities").hide();
            $(".U1_RDC2_ACT_2_P11_Activities").show();
            blinkElement("U1_P1_RDC2_ButtonAudio", true);
            $(".U1_P1_RDC2_ButtonAudio").removeClass('U1_P9_RDC2_ButtonAudio');
            $(".U1_P1_RDC2_ButtonAudio").addClass('U1_P11_RDC2_ButtonAudio');
        } else if ($(".U1_RDC2_ACT_2_P11_Activities").is(":visible")) {//Ir a P4 A1
            U1_RDC2_Inicialize();
            $(".U1_B7_RDC2").show();
            $(".U1_RDC2_P1_Activities").show();

        }
    });    
}

function U1_RDC2_ButtonBack() {
    $(".U1_P1_RDC2_ButtonBack").on("click", function (e) {
        //Actividad 1
        if ($(".U1_RDC2_ACT_1_P1").is(":visible")) {//Ir a Actividades
            U1_RDC2_Inicialize();
            $(".U1_B7_RDC2").show();
            $(".U1_RDC2_P1_Activities").show();
        } else if ($(".U1_RDC2_ACT_1_P2").is(":visible")) {//Ir a P1-A1
            blinkElement("U1_P1_RDC2_ButtonNext",false);
            $(".U1_RDC2_ACT_1_P1").show();
            $(".U1_RDC2_ACT_1_P2").hide();
            blinkElement("U1_P1_RDC2_ButtonAudio", true);
        } else if ($(".U1_RDC2_ACT_1_P3").is(":visible")) {//Ir a P2-A1
            blinkElement("U1_P1_RDC2_ButtonNext",false);
            $(".U1_RDC2_ACT_1_P2").show();
            $(".U1_RDC2_ACT_1_P3").hide();
            blinkElement("U1_P1_RDC2_ButtonAudio", false);
            $(".U1_P1_RDC2_ButtonAudio").hide();
        } else if ($(".U1_RDC2_ACT_1_P4").is(":visible")) {//Ir a ACTIVIDADES
                if($(".U1_RDC2_ACT_1_P4_Pregunta1").is(":visible")){
                    blinkElement("U1_P1_RDC2_ButtonNext",false);
                    $(".U1_RDC2_ACT_1_P3").show();
                    $(".U1_RDC2_ACT_1_P4").hide();
                    blinkElement("U1_P1_RDC2_ButtonAudio", true);
                } else if($(".U1_RDC2_ACT_1_P4_Pregunta2").is(":visible")){
                    blinkElement("U1_P1_RDC2_ButtonNext",false);
                    $(".U1_RDC2_ACT_1_P4_Pregunta1").show();
                    $(".U1_RDC2_ACT_1_P4_Pregunta2").hide();
                } else if($(".U1_RDC2_ACT_1_P4_Pregunta3").is(":visible")){
                    blinkElement("U1_P1_RDC2_ButtonNext",false);
                    $(".U1_RDC2_ACT_1_P4_Pregunta2").show();
                    $(".U1_RDC2_ACT_1_P4_Pregunta3").hide();
                } else if($(".U1_RDC2_ACT_1_P4_Pregunta4").is(":visible")){                    
                    blinkElement("U1_P1_RDC2_ButtonNext",false);
                    $(".U1_RDC2_ACT_1_P4_Pregunta3").show();
                    $(".U1_RDC2_ACT_1_P4_Pregunta4").hide();
                }
            }else if ($(".U1_RDC2_ACT_1_P5").is(":visible")) {//Ir a P2-A1
            blinkElement("U1_P1_RDC2_ButtonNext",false);
            $(".U1_RDC2_ACT_1_P4_Pregunta4").show();
            $(".U1_RDC2_ACT_1_P5").hide();
        } else if ($(".U1_RDC2_ACT_1_P6").is(":visible")) {//Ir a P2-A1
            blinkElement("U1_P1_RDC2_ButtonNext",false);
            $(".U1_RDC2_ACT_1_P5").show();
            $(".U1_RDC2_ACT_1_P6").hide();
        } 
        //Actividad 2
        else if ($(".U1_RDC2_ACT_2_P9_Activities").is(":visible")) {//Ir a Actividades
            blinkElement("U1_P1_RDC2_ButtonNext",false);
            U1_RDC2_Inicialize();
            $(".U1_B7_RDC2").show();
            $(".U1_RDC2_P1_Activities").show();
        } else if ($(".U1_RDC2_ACT_2_P10_Activities").is(":visible")) {//Ir a P1-A1
            blinkElement("U1_P1_RDC2_ButtonNext",false);
            $(".U1_RDC2_ACT_2_P9_Activities").show();
            $(".U1_RDC2_ACT_2_P10_Activities").hide();
            blinkElement("U1_P1_RDC2_ButtonAudio", true);
            $(".U1_P1_RDC2_ButtonAudio").addClass('U1_P9_RDC2_ButtonAudio');
            $(".U1_P1_RDC2_ButtonAudio").removeClass('U1_P11_RDC2_ButtonAudio');
        } else if ($(".U1_RDC2_ACT_2_P11_Activities").is(":visible")) {//Ir a P2-A1
            $(".U1_RDC2_ACT_2_P10_Activities").show();
            $(".U1_RDC2_ACT_2_P11_Activities").hide();
            blinkElement("U1_P1_RDC2_ButtonAudio", false);
            $(".U1_P1_RDC2_ButtonAudio").hide();
            
        }
    });
}