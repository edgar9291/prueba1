var U3_RDC9_SoundReproducing;
var video = "video/unidad3/RDC9/Big_Bang.mp4";
var U3_RDC9_audio1;
var U3_RDC9_audio2;
var U3_RDC9_audio3;
var U3_RDC9_audio4;
var U3_RDC9_audio5;
var U3_RDC9_audio6;
var U3_RDC9_audio7;
var U3_RDC9_audio8;
var U3_RDC9_askPass1=false;
var U3_RDC9_askPass2=false;
var U3_RDC9_askPass3=false;
var U3_RDC9_askPass4=false;
var U3_RDC9_askPass5=false;




$(document).ready(function(){
    U3_RDC9_Inicialize();
	U3_RDC9_GoActivities();
    U3_RDC9_ButtonAudio();
    U3_RDC9_ButtonNext();
    U3_RDC9_GoQuestions();
    U3_RDC9_ButtonHome();
    U3_RDC9_ButtonBack();
    //U3_RDC9_textEditor();
});

function U3_RDC9_ButtonHome() {
    $(".U3_RDC9_ButtonHome").on("click", function (e) {
        $("#U3_RDC9_ACT1_P2_video_id").trigger("pause");
        blinkElement2("U3_RDC9_ButtonNext", false);
        if ($("#U3_RDC9_P0_id").is(":visible")) {//Ir a Unidad 3
            $(".U3_RDC9").hide();
            $(".U3_B7").hide();
            $("#U3_RDC9_ACT1_P4_RetCorr_id").hide();
            $("#U3_RDC9_ACT1_P4_RetInco_id").hide();
            U3_RDC9_GoQuestions();
            title_initUnit3();
            U3_RDC9_askPass1=false;
            U3_RDC9_askPass2=false;
            U3_RDC9_askPass3=false;
            U3_RDC9_askPass4=false;
            U3_RDC9_askPass5=false;

        } else {
            U3_RDC9_GoIndexActivitiesRDC9();
        }
    });
}

function U3_RDC9_GoIndexActivitiesRDC9() {
    U3_RDC9_Inicialize();
    $(".U3_RDC9_P0_ButtonActivity2").css("pointer-events","none");
    blinkElement2("U3_RDC9_P0_ButtonActivity1", true);
    blinkElement2("U3_RDC9_P0_ButtonActivity2", false);
    $(".U3_RDC9_ButtonAudio").css("top","");
    $(".U3_RDC9_ButtonAudio").css("left","");
    blinkElement2("U3_RDC9_ButtonAudio", true);
    $(".U3_B7").show();
    $("#U3_RDC9_id").show();
    $("#U3_RDC9_P0_id").show();
    $(".U3_RDC9_ButtonNext").hide();
    $(".U3_RDC9_ButtonBack").hide();
}

function U3_RDC9_InicializeHtml() {
    //Aqui inicializaras tu HTML si da tiempo lo hacemos
}

function U3_RDC9_Inicialize() {
    $(".U3_B7").hide();
    $(".U3_RDC9").hide();
    $("#U3_RDC9_P0_id").hide();
    $("#U3_RDC9_id").hide();
    $("#U3_RDC9_ACT1_P1_id").hide();
    $("#U3_RDC9_ACT1_P2_id").hide();
    $("#U3_RDC9_ACT1_P3_id").hide();
    $("#U3_RDC9_ACT1_P4_id").hide();
    $("#U3_RDC9_ACT1_P5_id").hide();
    $("#U3_RDC9_ACT1_P6_id").hide();
    $("#U3_RDC9_ACT1_P7_id").hide();
    $("#U3_RDC9_ACT1_P8_id").hide();
    $("#U3_RDC9_ACT1_P9_id").hide();
    $("#U3_RDC9_ACT1_P10_id").hide();
    $("#U3_RDC9_ACT1_P11_id").hide();
    $("#U3_RDC9_ACT2_P1_id").hide();
    $("#U3_RDC9_ACT2_P2_id").hide();
    $("#U3_RDC9_ACT2_P3_id").hide();
    $("#U3_RDC9_ACT2_P4_id").hide();
    $("#U3_RDC9_ACT2_P5_id").hide();
    $("#U3_RDC9_ACT2_P6_id").hide();
    $("#U3_RDC9_ACT2_P7_id").hide();
    U3_RDC9_audio1 = document.createElement('audio');
    U3_RDC9_audio2 = document.createElement('audio');
    U3_RDC9_audio3 = document.createElement('audio');
    U3_RDC9_audio4 = document.createElement('audio');
    U3_RDC9_audio5 = document.createElement('audio');
    U3_RDC9_audio6 = document.createElement('audio');
    U3_RDC9_audio7 = document.createElement('audio');
    U3_RDC9_audio8 = document.createElement('audio');
    U3_RDC9_audio9 = document.createElement('audio');
    U3_RDC9_audio1.setAttribute('src', 'audio/unidad3/RDC9/9_2.mp3');
    U3_RDC9_audio2.setAttribute('src', 'audio/unidad3/RDC9/9_3.mp3');
    U3_RDC9_audio3.setAttribute('src', 'audio/unidad3/RDC9/9_4.mp3');
    U3_RDC9_audio4.setAttribute('src', 'audio/unidad3/RDC9/9_5.mp3');
    U3_RDC9_audio5.setAttribute('src', 'audio/unidad3/RDC9/9_6.mp3');
    U3_RDC9_audio6.setAttribute('src', 'audio/unidad3/RDC9/9_7.mp3');
    U3_RDC9_audio7.setAttribute('src', 'audio/unidad3/RDC9/8_11.mp3');
    U3_RDC9_audio8.setAttribute('src', 'audio/unidad3/RDC9/9_8.mp3');
    U3_RDC9_audio9.setAttribute('src', 'audio/unidad3/RDC9/9_9.mp3');
    $(".U3_B7_Header").html("&nbsp;Unidad 3 RDC 9");
}

//Funcion de mis botones Actividad1, Actividad 2, Comenzar, Guardar y Corregir y Reescribr
function U3_RDC9_GoActivities() {
    $("#U3_RDC9_P0_ButtonActivity1_id").on("click", function (e) {
        $(".U3_RDC9_ButtonNext").show();
        $(".U3_RDC9_ButtonBack").show();
        $("#U3_RDC9_P0_id").hide();
        $("#U3_RDC9_ACT1_P1_id").show();
        $(".U3_RDC9_ButtonAudio").show();
        $(".U3_RDC9_ButtonAudio").css("left","60%");
        blinkElement2("U3_RDC9_ButtonAudio", true);
    });
    $("#U3_RDC9_P0_ButtonActivity2_id").on("click", function (e) {
        $(".U3_RDC9_ButtonNext").show();
        $(".U3_RDC9_ButtonBack").show();
        $("#U3_RDC9_P0_id").hide();
        $("#U3_RDC9_ACT2_P1_id").show();
        $(".U3_RDC9_ButtonAudio").css("top","36%");
        $(".U3_RDC9_ButtonAudio").css("left","68%");
        $(".U3_RDC9_ButtonAudio").show();
        blinkElement2("U3_RDC9_ButtonAudio", true);
    });
    $("#U3_RDC9_ACT2_P2_buttonStart_id").on("click", function (e) {
        $("#U3_RDC9_ACT2_P1_id").hide();
        $("#U3_RDC9_ACT2_P3_id").show();

    });
    $("#save").on("click", function (e) {
       $("#U3_RDC9_ACT2_P2_id").hide();
        $("#U3_RDC9_ACT2_P3_id").show();
    });

    $("#U3_RDC9_ACT2_P2_buttonRewrite_id").on("click", function(e){
        $("#U3_RDC9_ACT2_P4_id").hide();
        $(".U3_RDC9_ButtonAudio").hide();
        $("#U3_RDC9_ACT2_P3_id").show();
        blinkElement2("U3_RDC9_ButtonAudio", false);
        $(".U3_RDC9_ButtonNext").show();
        $(".U3_RDC9_ButtonBack").show();
    });
}

function U3_RDC9_GoQuestions() {
    //Drag Pregunta 1
    boxDragQuestion( {
                    droppableDiv: "U3_RDC9_ACT1_P4_Respuestas_id",
                    draggablesDiv: "U3_RDC9_ACT1_P4_Opciones_id",
                    correctFeedback: "U3_RDC9_ACT1_P4_RetCorr_id",
                    wrongFeedback: "U3_RDC9_ACT1_P4_RetInco_id",
                    correctPosition: 0,
                    waitCorrectButton: true,
                    checkButtonId: "U3_RDC9_ACT1_P4_Comprobar_id",
                    //resetButtonId: "reset",
                    onPassActivity: function( isCorrect ){
                        console.debug( "Me ha pasado " + isCorrect );
                        if(isCorrect==false||isCorrect==true){console.debug("terminada");$(".U3_RDC9_ButtonNext").show(); U3_RDC9_askPass1=true;}
                        $( "#options" ).find( "div" ).css( "cursor", "default" );
                    },
                    onEnter: function( ){

                        $( "#correctBox" ).css( "background-color", "blue" );
                    },

                    onLeave: function( ){
                        $( "#correctBox" ).css( "background-color", "" );
                    }
                } );
    //Drag Pregunta 2
    boxDragQuestion( {
                    droppableDiv: "U3_RDC9_ACT1_P5_Respuestas_id",
                    draggablesDiv: "U3_RDC9_ACT1_P5_Opciones_id",
                    correctFeedback: "U3_RDC9_ACT1_P5_RetCorr_id",
                    wrongFeedback: "U3_RDC9_ACT1_P5_RetInco_id",
                    correctPosition: 1,
                    waitCorrectButton: true,
                    checkButtonId: "U3_RDC9_ACT1_P5_Comprobar_id",
                    //resetButtonId: "reset",
                    onPassActivity: function( isCorrect ){
                        console.debug( "Me ha pasado " + isCorrect );
                        if(isCorrect==false||isCorrect==true){console.debug("terminada");$(".U3_RDC9_ButtonNext").show(); U3_RDC9_askPass2=true;}
                        $( "#options" ).find( "div" ).css( "cursor", "default" );
                    },
                    onEnter: function( ){
                        $( "#correctBox" ).css( "background-color", "blue" );
                    },
                    onLeave: function( ){
                        $( "#correctBox" ).css( "background-color", "" );
                    }
                } );

    //Drag Pregunta 3
    boxDragQuestion( {
                    droppableDiv: "U3_RDC9_ACT1_P6_Respuestas_id",
                    draggablesDiv: "U3_RDC9_ACT1_P6_Opciones_id",
                    correctFeedback: "U3_RDC9_ACT1_P6_RetCorr_id",
                    wrongFeedback: "U3_RDC9_ACT1_P6_RetInco_id",
                    correctPosition: 0,
                    waitCorrectButton: true,
                    checkButtonId: "U3_RDC9_ACT1_P6_Comprobar_id",
                    //resetButtonId: "reset",
                    onPassActivity: function( isCorrect ){
                        console.debug( "Me ha pasado " + isCorrect );
                        if(isCorrect==false||isCorrect==true){console.debug("terminada");$(".U3_RDC9_ButtonNext").show(); U3_RDC9_askPass3=true;}
                        $( "#options" ).find( "div" ).css( "cursor", "default" );
                    },
                    onEnter: function( ){
                        $( "#correctBox" ).css( "background-color", "blue" );
                    },
                    onLeave: function( ){
                        $( "#correctBox" ).css( "background-color", "" );
                    }
                } );

    //Drag Pregunta 4
    boxDragQuestion( {
                    droppableDiv: "U3_RDC9_ACT1_P7_Respuestas_id",
                    draggablesDiv: "U3_RDC9_ACT1_P7_Opciones_id",
                    correctFeedback: "U3_RDC9_ACT1_P7_RetCorr_id",
                    wrongFeedback: "U3_RDC9_ACT1_P7_RetInco_id",
                    correctPosition: 3,
                    waitCorrectButton: true,
                    checkButtonId: "U3_RDC9_ACT1_P7_Comprobar_id",
                    //resetButtonId: "reset",
                    onPassActivity: function( isCorrect ){
                        if(isCorrect==false||isCorrect==true){console.debug("terminada");$(".U3_RDC9_ButtonNext").show();U3_RDC9_askPass4=true;}
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

    //Drag Pregunta 5
        boxDragQuestion( {
            droppableDiv: "U3_RDC9_ACT1_P8_Respuestas_id",
            draggablesDiv: "U3_RDC9_ACT1_P8_Opciones_id",
            correctFeedback: "U3_RDC9_ACT1_P8_RetCorr_id",
            wrongFeedback: "U3_RDC9_ACT1_P8_RetInco_id",
            correctPosition: 1,
            waitCorrectButton: true,
            checkButtonId: "U3_RDC9_ACT1_P8_Comprobar_id",
            //resetButtonId: "reset",
            onPassActivity: function( isCorrect ){
                if(isCorrect==false||isCorrect==true){console.debug("terminada");$(".U3_RDC9_ButtonNext").show();U3_RDC9_askPass5=true;}
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


function U3_RDC9_ButtonAudio(){
    var U3_RDC9_clickInAudio = 0;
    $(".U3_RDC9_ButtonAudio").on("click", function (e) {
        U3_RDC9_clickInAudio++;
        if (U3_RDC9_clickInAudio == 1 || U3_RDC9_clickInAudio == 3) {
            blinkElement2("U3_RDC9_ButtonAudio", false);
            if ($("#U3_RDC9_P0_id").is(":visible")) { //Audio Index Actividades
                U3_RDC9_audio1.play();
            } else if ($("#U3_RDC9_ACT1_P1_id").is(":visible")) { //Audio Actividad 1 Pagina 1
                U3_RDC9_audio2.play();
            } else if ($("#U3_RDC9_ACT1_P3_id").is(":visible")) { //Audio Actividad 1 Pagina 2
                U3_RDC9_audio3.play();
            } else if ($("#U3_RDC9_ACT1_P9_id").is(":visible")) { //Audio Actividad 1 Pagina 3
                U3_RDC9_audio7.play();
            } else if ($("#U3_RDC9_ACT1_P11_id").is(":visible")) { //Audio Actividad 2 Pagina 1
                U3_RDC9_audio4.play();
            } else if ($("#U3_RDC9_ACT2_P1_id").is(":visible")) { //Audio Actividad 2 Pagina 2
                U3_RDC9_audio5.play();
            } else if ($("#U3_RDC9_ACT2_P4_id").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC9_audio6.play();
            } else if ($("#U3_RDC9_ACT2_P5_id").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC9_audio8.play();
            } else if ($("#U3_RDC9_ACT2_P7_id").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC9_audio9.play();
            }

            U3_RDC9_clickInAudio = 1;
        } else if (U3_RDC9_clickInAudio == 2) {
            blinkElement2("U3_RDC9_ButtonAudio", false);
            if ($("#U3_RDC9_P0_id").is(":visible")) { //Audio Index Actividades
                U3_RDC9_audio1.pause();
            } else if ($("#U3_RDC9_ACT1_P1_id").is(":visible")) { //Audio Actividad 1 Pagina 1
                U3_RDC9_audio2.pause();
            } else if ($("#U3_RDC9_ACT1_P3_id").is(":visible")) { //Audio Actividad 1 Pagina 2
                U3_RDC9_audio3.pause();
            } else if ($("#U3_RDC9_ACT1_P9_id").is(":visible")) { //Audio Actividad 1 Pagina 3
                U3_RDC9_audio7.pause();
            } else if ($("#U3_RDC9_ACT1_P11_id").is(":visible")) { //Audio Actividad 2 Pagina 1
                U3_RDC9_audio4.pause();
            } else if ($("#U3_RDC9_ACT2_P1_id").is(":visible")) { //Audio Actividad 2 Pagina 2
                U3_RDC9_audio5.pause();
            } else if ($("#U3_RDC9_ACT2_P4_id").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC9_audio6.pause();
            } else if ($("#U3_RDC9_ACT2_P5_id").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC9_audio8.pause();
            } else if ($("#U3_RDC9_ACT2_P7_id").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC9_audio9.pause();
            }
        }

        U3_RDC9_audio1.addEventListener("ended", function () {
            U3_RDC9_clickInAudio = 0;
        }, true);
        U3_RDC9_audio2.addEventListener("ended", function () {
            U3_RDC9_clickInAudio = 0;
            blinkElement2("U3_RDC9_ButtonNext", true);
        }, true);
        U3_RDC9_audio3.addEventListener("ended", function () {
            U3_RDC9_clickInAudio = 0;
        }, true);
        U3_RDC9_audio4.addEventListener("ended", function () {
            U3_RDC9_clickInAudio = 0;
        }, true);
        U3_RDC9_audio5.addEventListener("ended", function () {
            U3_RDC9_clickInAudio = 0;
        }, true);
        U3_RDC9_audio6.addEventListener("ended", function () {
            U3_RDC9_clickInAudio = 0;
            blinkElement2("U3_RDC9_ButtonNext", true);
        }, true);
        U3_RDC9_audio7.addEventListener("ended", function () {
            U3_RDC9_clickInAudio = 0;
            blinkElement2("U3_RDC9_ButtonNext", true);
        }, true);
        U3_RDC9_audio8.addEventListener("ended", function () {
            U3_RDC9_clickInAudio = 0;
        }, true);
        U3_RDC9_audio9.addEventListener("ended", function () {
            U3_RDC9_clickInAudio = 0;
            blinkElement2("U3_RDC9_ButtonNext", true);
        }, true);

    });

    $(".U3_RDC9_ButtonNext, .U3_RDC9_ButtonBack, .U3_RDC9_P0_ButtonActivity2, .U3_RDC9_P0_ButtonActivity1 ,.U3_RDC9_ButtonHome, #U3_RDC9_ACT2_P2_buttonRewrite_id ").on("click", function (e) {
        U3_RDC9_clickInAudio = 0;
        U3_RDC9_audio1.pause();
        U3_RDC9_audio1.currentTime = 0;
        U3_RDC9_audio2.pause();
        U3_RDC9_audio2.currentTime = 0;
        U3_RDC9_audio3.pause();
        U3_RDC9_audio3.currentTime = 0;
        U3_RDC9_audio4.pause();
        U3_RDC9_audio4.currentTime = 0;
        U3_RDC9_audio5.pause();
        U3_RDC9_audio5.currentTime = 0;
        U3_RDC9_audio6.pause();
        U3_RDC9_audio6.currentTime = 0;
        U3_RDC9_audio7.pause();
        U3_RDC9_audio7.currentTime = 0;
        U3_RDC9_audio8.pause();
        U3_RDC9_audio8.currentTime = 0;
        U3_RDC9_audio9.pause();
        U3_RDC9_audio9.currentTime = 0;
    });

}

function U3_RDC9_ButtonNext() {
    $(".U3_RDC9_ButtonNext").on("click", function (e) {
        $(".U3_RDC9_ButtonAudio").css("top","");
        $(".U3_RDC9_ButtonAudio").css("left","");
        blinkElement2("U3_RDC9_ButtonAudio", false);
        blinkElement2("U3_RDC9_ButtonNext", false);
        $(".U3_RDC9_ButtonAudio").hide();
        //Actividad 1
        if ($("#U3_RDC9_P0_id").is(":visible")) {//Ir a P2 A1
            $("#U3_RDC9_P0_id").hide();
            $("#U3_RDC9_ACT1_P1_id").show();
            $(".U3_RDC9_ButtonAudio").css("left","60%");
        } else if ($("#U3_RDC9_ACT1_P1_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT1_P1_id").hide();
            $(".U3_RDC9_ButtonAudio").hide();
            //$(".U3_RDC9_ButtonNext").hide();
            $("#U3_RDC9_ACT1_P2_id").show();
            $(".U3_RDC9_ACT1_P2_video").attr("src",video);
            setTimeout(function(){ $(".U3_RDC9_ButtonNext").show(); blinkElement2("U3_RDC9_ButtonNext", true);}, 318000);
        } else if ($("#U3_RDC9_ACT1_P2_id").is(":visible")) {//Ir a ACTIVIDADES
            $(".U3_RDC9_ButtonAudio").css("left","60%");
            $("#U3_RDC9_ACT1_P2_id").hide();
            $(".U3_RDC9_ACT1_P2_video").trigger("pause");
            $(".U3_RDC9_ButtonAudio").show();
            $("#U3_RDC9_ACT1_P3_id").show();
            blinkElement2("U3_RDC9_ButtonAudio", true);
            blinkElement2("U3_RDC9_ButtonNext", true);
        } else if ($("#U3_RDC9_ACT1_P3_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT1_P3_id").hide();
            $(".U3_RDC9_ButtonAudio").hide();
            $(".U3_RDC9_ButtonNext").hide()
            $("#U3_RDC9_ACT1_P4_id").show();
            if(U3_RDC9_askPass1==true) $(".U3_RDC9_ButtonNext").show();
        }else if ($("#U3_RDC9_ACT1_P4_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT1_P4_id").hide();
            $(".U3_RDC9_ButtonNext").hide()
            $("#U3_RDC9_ACT1_P5_id").show();
            $(".U3_RDC9_ButtonAudio").hide();
            if(U3_RDC9_askPass2==true) $(".U3_RDC9_ButtonNext").show();
        }
        else if ($("#U3_RDC9_ACT1_P5_id").is(":visible")) {//Ir a ACTIVIDADES
            $(".U3_RDC9_ButtonAudio").hide();
            $("#U3_RDC9_ACT1_P5_id").hide();
            $(".U3_RDC9_ButtonNext").hide()
            $("#U3_RDC9_ACT1_P6_id").show();
            if(U3_RDC9_askPass3==true) $(".U3_RDC9_ButtonNext").show();
        }else if ($("#U3_RDC9_ACT1_P6_id").is(":visible")) {//Ir a ACTIVIDADES
            $(".U3_RDC9_ButtonAudio").hide();
            $("#U3_RDC9_ACT1_P6_id").hide();
            $(".U3_RDC9_ButtonNext").hide();
            $("#U3_RDC9_ACT1_P7_id").show();
            if(U3_RDC9_askPass4==true) $(".U3_RDC9_ButtonNext").show();
        }else if ($("#U3_RDC9_ACT1_P7_id").is(":visible")) {//Ir a ACTIVIDADES
            $(".U3_RDC9_ButtonAudio").hide();
            $("#U3_RDC9_ACT1_P7_id").hide();
            $(".U3_RDC9_ButtonNext").hide();
            $("#U3_RDC9_ACT1_P8_id").show();
            if(U3_RDC9_askPass5==true) $(".U3_RDC9_ButtonNext").show();
        }else if ($("#U3_RDC9_ACT1_P8_id").is(":visible")) {//Ir a ACTIVIDADES
            $(".U3_RDC9_ButtonAudio").show();
            $("#U3_RDC9_ACT1_P8_id").hide();
            $("#U3_RDC9_ACT1_P9_id").show();
            blinkElement2("U3_RDC9_ButtonNext", true);
            $(".U3_RDC9_ButtonAudio").css("left","");
            blinkElement2("U3_RDC9_ButtonAudio", true);
        }else if ($("#U3_RDC9_ACT1_P9_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT1_P9_id").hide();
            $(".U3_RDC9_ButtonAudio").hide();
            $("#U3_RDC9_ACT1_P10_id").show();
        }else if ($("#U3_RDC9_ACT1_P10_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT1_P10_id").hide();
            $(".U3_RDC9_ButtonAudio").show();
            blinkElement2("U3_RDC9_ButtonAudio", true);
            $("#U3_RDC9_ACT1_P11_id").show();
            blinkElement2("U3_RDC9_ButtonNext", true);
            $(".U3_RDC9_ButtonAudio").css("left","");
            $(".U3_RDC9_ButtonAudio").hide();
        }else if ($("#U3_RDC9_ACT1_P11_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT1_P11_id").hide();
            $("#U3_RDC9_P0_id").show();
            $(".U3_RDC9_ButtonAudio").show();
            $(".U3_RDC9_ButtonBack").hide();
            $(".U3_RDC9_ButtonAudio").css("left","");
            blinkElement2("U3_RDC9_ButtonAudio", true);
            blinkElement2("U3_RDC9_ButtonNext", false);
            $(".U3_RDC9_ButtonNext").hide();
            blinkElement2("U3_RDC9_P0_ButtonActivity1", false);
            blinkElement2("U3_RDC9_P0_ButtonActivity2", true);
            $(".U3_RDC9_P0_ButtonActivity2").css("pointer-events","visible");
        }
        //Actividad 2
        else if ($("#U3_RDC9_ACT2_P1_id").is(":visible")) {//Ir a P2 A1
            $("#U3_RDC9_ACT2_P1_id").hide();
            $(".U3_RDC9_ButtonAudio").hide();
            $("#U3_RDC9_ACT2_P2_id").show();
        } else if ($("#U3_RDC9_ACT2_P2_id").is(":visible")) {//Ir a P3 A1
            $("#U3_RDC9_ACT2_P2_id").hide();
            $(".U3_RDC9_ButtonAudio").hide();
            $("#U3_RDC9_ACT2_P3_id").show();
            //blinkElement2("U3_RDC9_ButtonNext", true);
        } else if ($("#U3_RDC9_ACT2_P3_id").is(":visible")) {//Ir a P4 A1
            $("#U3_RDC9_ACT2_P3_id").hide();
            $(".U3_RDC9_ButtonAudio").show();
            $("#U3_RDC9_ACT2_P4_id").show();
            $(".U3_RDC9_ButtonAudio").css("left","");
            blinkElement2("U3_RDC9_ButtonAudio", true);
            blinkElement2("U3_RDC9_ButtonNext", true);
        } else if ($("#U3_RDC9_ACT2_P4_id").is(":visible")) {//Ir a Actividades
            $("#U3_RDC9_ACT2_P4_id").hide();
            $("#U3_RDC9_ACT2_P5_id").show();
            $(".U3_RDC9_ButtonAudio").css("top","40%");
            $(".U3_RDC9_ButtonAudio").css("left","65%");
            $(".U3_RDC9_ButtonAudio").show();
            blinkElement2("U3_RDC9_ButtonNext", true);
            blinkElement2("U3_RDC9_ButtonAudio", true);
            //blinkElement2("U3_RDC9_ButtonNext", true);
        } else if ($("#U3_RDC9_ACT2_P5_id").is(":visible")) {//Ir a Actividades
            $("#U3_RDC9_ACT2_P5_id").hide();
            $("#U3_RDC9_ACT2_P6_id").show();
            $(".U3_RDC9_ButtonAudio").hide();
            //blinkElement2("U3_RDC9_ButtonNext", true);
        } else if ($("#U3_RDC9_ACT2_P6_id").is(":visible")) {//Ir a Actividades
            $("#U3_RDC9_ACT2_P6_id").hide();
            blinkElement2("U3_RDC9_ButtonAudio", true);
            $(".U3_RDC9_ButtonAudio").show();
            $("#U3_RDC9_ACT2_P7_id").show();
            $(".U3_RDC9_ButtonAudio").css("left","60%");
        } else if ($("#U3_RDC9_ACT2_P7_id").is(":visible")) {//Ir a Actividades
            $("#U3_RDC9_ACT2_P7_id").hide();
            $("#U3_RDC9_P0_id").show();
            $(".U3_RDC9_ButtonAudio").show();
            $(".U3_RDC9_ButtonBack").hide();
            blinkElement2("U3_RDC9_ButtonAudio", true);
            blinkElement2("U3_RDC9_ButtonNext", false);
            $(".U3_RDC9_ButtonNext").hide();
            blinkElement2("U3_RDC9_P0_ButtonActivity2", false);
        }
    });
}
function U3_RDC9_ButtonBack() {
    $(".U3_RDC9_ButtonBack").on("click", function (e) {
        $(".U3_RDC9_ButtonAudio").css("top","");
        $(".U3_RDC9_ButtonAudio").css("left","");
        blinkElement2("U3_RDC9_ButtonAudio", false);
        blinkElement2("U3_RDC9_ButtonNext", false);
        $(".U3_RDC9_ButtonAudio").hide();
        //Actividad 1
        if ($("#U3_RDC9_ACT1_P1_id").is(":visible")) {//Ir a Actividades
            $("#U3_RDC9_P0_id").show();
            $("#U3_RDC9_ACT1_P1_id").hide();
            $(".U3_RDC9_ButtonNext").hide();
            $(".U3_RDC9_ButtonBack").hide();
            $(".U3_RDC9_ButtonAudio").show();
            $(".U3_RDC9_ButtonAudio").css("left","");
            blinkElement2("U3_RDC9_ButtonAudio", true);
        } else if ($("#U3_RDC9_ACT1_P2_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT1_P2_id").hide();
            $(".U3_RDC9_ButtonAudio").css("left","60%");
            $(".U3_RDC9_ACT1_P2_video").trigger("pause");
            $("#U3_RDC9_ACT1_P1_id").show();
            $(".U3_RDC9_ButtonAudio").show();
            $("#U3_RDC9_ACT1_P2_video_id").trigger("pause");
            blinkElement2("U3_RDC9_ButtonAudio", true);
            blinkElement2("U3_RDC9_ButtonNext", true);
        } else if ($("#U3_RDC9_ACT1_P3_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT1_P3_id").hide();
            $(".U3_RDC9_ButtonNext").hide();
            $("#U3_RDC9_ACT1_P2_id").show();
            //$(".U3_RDC9_ACT1_P2_video").attr("src",video);
            $(".U3_RDC9_ButtonNext").show();
              // blinkElement2("U3_RDC9_ButtonNext", true);}, 318000);
        } else if ($("#U3_RDC9_ACT1_P4_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT1_P4_id").hide();
            $("#U3_RDC9_ACT1_P3_id").show();
            $(".U3_RDC9_ButtonAudio").show();
            $(".U3_RDC9_ButtonAudio").css("left","60%");
            blinkElement2("U3_RDC9_ButtonAudio", true);
            blinkElement2("U3_RDC9_ButtonNext", true);
        }else if ($("#U3_RDC9_ACT1_P5_id").is(":visible")) {//Ir a ACTIVIDADES
            if(U3_RDC9_askPass1==true) $(".U3_RDC9_ButtonNext").show();
            $("#U3_RDC9_ACT1_P5_id").hide();
            $("#U3_RDC9_ACT1_P4_RetInco_id").hide();
            $(".U3_RDC9_ButtonNext").show;
            $("#U3_RDC9_ACT1_P4_id").show();
        }else if ($("#U3_RDC9_ACT1_P6_id").is(":visible")) {//Ir a ACTIVIDADES
            if(U3_RDC9_askPass2==true) $(".U3_RDC9_ButtonNext").show();
            $("#U3_RDC9_ACT1_P6_id").hide();
            $("#U3_RDC9_ACT1_P4_RetInco_id").hide();
            $(".U3_RDC9_ButtonNext").show;
            $("#U3_RDC9_ACT1_P5_id").show();
        }else if ($("#U3_RDC9_ACT1_P7_id").is(":visible")) {//Ir a ACTIVIDADES
            if(U3_RDC9_askPass3==true) $(".U3_RDC9_ButtonNext").show();
            $("#U3_RDC9_ACT1_P7_id").hide();
            $("#U3_RDC9_ACT1_P4_RetInco_id").hide();
            $(".U3_RDC9_ButtonNext").show;
            $("#U3_RDC9_ACT1_P6_id").show();
        }else if ($("#U3_RDC9_ACT1_P8_id").is(":visible")) {//Ir a ACTIVIDADES
            if(U3_RDC9_askPass4==true) $(".U3_RDC9_ButtonNext").show();
            $("#U3_RDC9_ACT1_P8_id").hide();
            $("#U3_RDC9_ACT1_P4_RetInco_id").hide();
            $(".U3_RDC9_ButtonNext").show;
            $("#U3_RDC9_ACT1_P7_id").show();
        }else if ($("#U3_RDC9_ACT1_P9_id").is(":visible")) {//Ir a ACTIVIDADES
            if(U3_RDC9_askPass5==true) $(".U3_RDC9_ButtonNext").show();
            $("#U3_RDC9_ACT1_P9_id").hide();
            $("#U3_RDC9_ACT1_P4_RetInco_id").hide();
            $(".U3_RDC9_ButtonNext").show;
            $("#U3_RDC9_ACT1_P8_id").show();
        }else if ($("#U3_RDC9_ACT1_P10_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT1_P10_id").hide();
            $("#U3_RDC9_ACT1_P9_id").show();
            $(".U3_RDC9_ButtonAudio").css("left","");
            $(".U3_RDC9_ButtonAudio").show();
            blinkElement2("U3_RDC9_ButtonAudio", true);
            blinkElement2("U3_RDC9_ButtonNext", true);
        }else if ($("#U3_RDC9_ACT1_P11_id").is(":visible")) {//Ir a Actividades
            $("#U3_RDC9_ACT1_P11_id").hide();
            $("#U3_RDC9_ACT1_P10_id").show();
            $(".U3_RDC9_ButtonAudio").hide();
        }
        //Actividad 2
        else if ($("#U3_RDC9_ACT2_P1_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT2_P1_id").hide();
            $(".U3_RDC9_ButtonAudio").show();
            blinkElement2("U3_RDC9_ButtonAudio", true);
            $("#U3_RDC9_P0_id").show();
            $(".U3_RDC9_ButtonNext").hide();
            $(".U3_RDC9_ButtonBack").hide();
        }else if ($("#U3_RDC9_ACT2_P2_id").is(":visible")) {//Ir a ACTIVIDADES
            $("#U3_RDC9_ACT2_P2_id").hide();
            $("#U3_RDC9_ACT2_P1_id").show();
            $(".U3_RDC9_ButtonAudio").css("top","36%");
            $(".U3_RDC9_ButtonAudio").css("left","68%");
            $(".U3_RDC9_ButtonAudio").show();
            blinkElement2("U3_RDC9_ButtonAudio", true);
            blinkElement2("U3_RDC9_ButtonNext", true);
            // $(".U3_RDC9_ButtonAudio").hide();
        } else if ($("#U3_RDC9_ACT2_P3_id").is(":visible")) {//Ir a P2 A1
            $("#U3_RDC9_ACT2_P3_id").hide();
            $("#U3_RDC9_ACT2_P2_id").show();
            $(".U3_RDC9_ButtonAudio").hide();
        } else if ($("#U3_RDC9_ACT2_P4_id").is(":visible")) {//Ir a P3 A1
            $("#U3_RDC9_ACT2_P4_id").hide();
            $(".U3_RDC9_ButtonAudio").hide()
            $("#U3_RDC9_ACT2_P3_id").show();
            $(".U3_RDC9_ButtonNext").show();
            $(".U3_RDC9_ButtonAudio").hide();
        } else if ($("#U3_RDC9_ACT2_P5_id").is(":visible")) {//Ir a P4 A1
            $("#U3_RDC9_ACT2_P5_id").hide();
            $(".U3_RDC9_ButtonAudio").show();
            $("#U3_RDC9_ACT2_P4_id").show();
            blinkElement2("U3_RDC9_ButtonAudio", true);
            blinkElement2("U3_RDC9_ButtonNext", true);
            // $(".U3_RDC9_ButtonAudio").hide();
        } else if ($("#U3_RDC9_ACT2_P5_id").is(":visible")) {//Ir a Actividades
            $("#U3_RDC9_ACT2_P5_id").hide();
            $("#U3_RDC9_ACT2_P4_id").show();
            $(".U3_RDC9_ButtonAudio").show();
            blinkElement2("U3_RDC9_ButtonAudio", true);
            blinkElement2("U3_RDC9_ButtonNext", true);
        } else if ($("#U3_RDC9_ACT2_P6_id").is(":visible")) {//Ir a Actividades
            $("#U3_RDC9_ACT2_P6_id").hide();
            $("#U3_RDC9_ACT2_P5_id").show();
            $(".U3_RDC9_ButtonAudio").css("top","40%");
            $(".U3_RDC9_ButtonAudio").css("left","67%");
            $(".U3_RDC9_ButtonAudio").show();
            blinkElement2("U3_RDC9_ButtonAudio", true);
            blinkElement2("U3_RDC9_ButtonNext", true);
        } else if ($("#U3_RDC9_ACT2_P7_id").is(":visible")) {//Ir a Actividades
            $("#U3_RDC9_ACT2_P7_id").hide();
            $("#U3_RDC9_ACT2_P6_id").show();
            $(".U3_RDC9_ButtonAudio").hide();
        }
    });
}
