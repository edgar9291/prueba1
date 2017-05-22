/*
 *javaScript Unidad 7, pagina 8
 */
/*
 $("#unity7").click(function(){
 $('.u3_b7').hide();
 $('.u3_b7_p2').show();
 });
 $("#u3_b7_p2").click(function(){
 $('.u3_b7_p2').hide();
 $('.u3_b7_p3').show();
 });

 }*/
var vid = "video/unidad3/RDC8/exploradoresdelahistoria.mp4 ";
var U3_RDC8_SoundReproducing1;
var U3_RDC8_SoundReproducing2;
var U3_RDC8_SoundReproducing3;
var U3_RDC8_SoundReproducing4;
var U3_RDC8_SoundReproducing5;
var U3_RDC8_SoundReproducing6;
var U3_RDC8_SoundReproducing7;
var U3_RDC8_SoundReproducing8;
var U3_RDC8_SoundReproducing9;
var U3_RDC8_SoundReproducing10;
var U3_RDC8_SoundReproducing11;

$(document).ready(function () {
    U3_RDC8_Inicialize();
    U3_RDC8_ButtonNext();
    U3_RDC8_ButtonHome();
    U3_RDC8_GoActivities();
    U3_RDC8_Question();
    U3_RDC8_BoxQuestion();
    U3_RDC8_DragQuestion();
    U3_RDC8_Drag();
    U3_RDC8_ButtonBack();
    Showpv();
    EditTexU3_RDC8();
    U3_RDC8__Button_Radio();
    U3_RDC8_ButtonAudio();
});
function U3_RDC8_Inicialize() {
    $(".U3_B7_Header").html("&nbsp;Unidad 3 RDC 8");
    $(".U3_RDC8_P0_").hide();
    $(".U3_RDC8_Activities").hide();
    $(".U3_RDC8_ACT1_P1").hide();
    $(".U3_RDC8_ACT1_P2").hide();
    $(".U3_RDC8_ACT1_P3").hide();
    $(".U3_RDC8_ACT1_P4").hide();
    $(".U3_RDC8_ACT1_P5").hide();
    $(".U3_RDC8_ACT1_P6").hide();
    $(".U3_RDC8_ACT1_P7").hide();
    $(".U3_RDC8_ACT1_P8").hide();
    $(".U3_RDC8_ACT2_P1").hide();
    $(".U3_RDC8_ACT2_P2").hide();
    $(".U3_RDC8_ACT2_P3").hide();
    $(".U3_RDC8_ACT2_P4").hide();
    $(".U3_RDC8_ACT2_P5").hide();
    $(".U3_RDC8_ACT2_P6").hide();
    $(".U3_RDC8_ACT2_P7").hide();
    $(".U3_RDC8_ACT2_P8").hide();
    $(".U3_RDC8_ACT2_P9").hide();
    $(".U3_RDC8_ACT2_P10").hide();
    $("#U3_RDC8_ACT3_P1").hide();
    $("#U3_RDC8_ACT3_P2").hide();
    $("#U3_RDC8_ACT3_P3").hide();
    $("#U3_RDC8_ACT3_P4").hide();
    $("#U3_RDC8_ACT3_P5").hide();
    U3_RDC8_infoView = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    U3_RDC8_SoundReproducing1 = document.createElement('audio');
    U3_RDC8_SoundReproducing2 = document.createElement('audio');
    U3_RDC8_SoundReproducing3 = document.createElement('audio');
    U3_RDC8_SoundReproducing4 = document.createElement('audio');
    U3_RDC8_SoundReproducing5 = document.createElement('audio');
    U3_RDC8_SoundReproducing6 = document.createElement('audio');
    U3_RDC8_SoundReproducing7 = document.createElement('audio');
    U3_RDC8_SoundReproducing8 = document.createElement('audio');
    U3_RDC8_SoundReproducing9 = document.createElement('audio');
    U3_RDC8_SoundReproducing10 = document.createElement('audio');
    U3_RDC8_SoundReproducing11 = document.createElement('audio');
    U3_RDC8_SoundReproducing1.setAttribute('src', 'audio/unidad3/RDC8/8_A1_P1.mp3');
    U3_RDC8_SoundReproducing2.setAttribute('src', 'audio/unidad3/RDC8/8_A1_P2.mp3');
    U3_RDC8_SoundReproducing3.setAttribute('src', 'audio/unidad3/RDC8/8_A1_P3.mp3');
    U3_RDC8_SoundReproducing4.setAttribute('src', 'audio/unidad3/RDC8/8_A1_P8.mp3');
    U3_RDC8_SoundReproducing5.setAttribute('src', 'audio/unidad3/RDC8/8_A2_P1.mp3');
    U3_RDC8_SoundReproducing6.setAttribute('src', 'audio/unidad3/RDC8/8_A2_P3.mp3');
    U3_RDC8_SoundReproducing7.setAttribute('src', 'audio/unidad3/RDC8/8_A2_P9.mp3');
    U3_RDC8_SoundReproducing8.setAttribute('src', 'audio/unidad3/RDC8/8_A3_P1.mp3');
    U3_RDC8_SoundReproducing9.setAttribute('src', 'audio/unidad3/RDC8/8_A3_P3.mp3');
    U3_RDC8_SoundReproducing10.setAttribute('src', 'audio/unidad3/RDC8/8_A3_P4.mp3');
    U3_RDC8_SoundReproducing11.setAttribute('src', 'audio/unidad3/RDC8/8_A3_P5.mp3');
    U3_RDC8_SoundReproducing1.load();
    U3_RDC8_SoundReproducing2.load();
    U3_RDC8_SoundReproducing3.load();
    U3_RDC8_SoundReproducing4.load();
    U3_RDC8_SoundReproducing5.load();
    U3_RDC8_SoundReproducing6.load();
    U3_RDC8_SoundReproducing7.load();
    U3_RDC8_SoundReproducing8.load();
    U3_RDC8_SoundReproducing9.load();
    U3_RDC8_SoundReproducing10.load();
    U3_RDC8_SoundReproducing11.load();
}
function U3_RDC8_GoIndexActivitiesRDC8() {
    U3_RDC8_Inicialize();
    $(".U3_B7").show();
    $(".U3_RDC8_P0_").show();
    $(".U3_RDC8_Activities").show();


}

function U3_RDC8_ButtonNext() {
    $(".U3_RDC8_ButtonNext").on("click", function (e) {
        $(".U3_RDC8_ButtonAudio").css("top", "");
        $(".U3_RDC8_ButtonAudio").css("left", "")
        $(".U3_RDC8_ACT1_Activities_Text1").css("left", "");
        $(".U3_RDC8_ACT1_Activities_Text1").css("top", "");
        $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "");
        $(".U3_RDC8_ACT1_Activities_Text1").css("width", "");
        $(".U3_RDC8_ACT1_Activities_Text1").css("height", "");
        $(".U3_RDC8_ACT2_P10_Text1").css("left", "");
        $(".U3_RDC8_ACT2_P10_Text1").css("top", "");
        $(".U3_RDC8_ACT2_P10_Text1").css("width", "");
        $(".U3_RDC8_ACT2_P10_Text1").css("height", "");
        $(".U3_RDC8_Activities_Horn").show();
        $(".U3_RDC8_ButtonNext").show();
        blinkElement2("U3_RDC8_ButtonNext", false);
        blinkElement2("U3_RDC8_ButtonAudio", false);


        //Actividad 1
        if ($(".U3_RDC8_ACT1_P1").is(":visible")) {//Ir a P2 A1
            $(".U3_RDC8_ACT1_P1").hide();
            $(".U3_RDC8_ACT1_P2").show();
            $(".U3_RDC8_ButtonAudio").css("top", "79%");
            $(".U3_RDC8_ButtonAudio").css("left", "48%");
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT1_P2").is(":visible")) {//Popol vuh
            $(".U3_RDC8_ACT1_P2").hide();
            $(".U3_RDC8_ACT1_P3").show();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".U3_RDC8_ACT1_Activities_Text1").css("left", "31%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "46%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "23%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "4vh");
            $(".U3_RDC8_ButtonAudio").css("top", "27%");
            $(".U3_RDC8_ButtonAudio").css("left", "53%");
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT1_P3").is(":visible")) {//
            $(".U3_RDC8_ACT1_P3").hide();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".U3_RDC8_ButtonNext").hide();
            $(".U3_RDC8_ACT1_P4").show();
        
        } else if ($(".U3_RDC8_ACT1_P4").is(":visible")) {//
            $(".U3_RDC8_ACT1_P4").hide();
            $(".U3_RDC8_ACT1_P5").show();
            $(".U3_RDC8_ButtonAudio").hide();
           
        } else if ($(".U3_RDC8_ACT1_P5").is(":visible")) {//
            $(".U3_RDC8_ACT1_P5").hide();
            $(".U3_RDC8_ACT1_P6").show();
            $(".U3_RDC8_ButtonAudio").hide();
        
        } else if ($(".U3_RDC8_ACT1_P6").is(":visible")) {//
            $(".U3_RDC8_ACT1_P6").hide();
            $(".U3_RDC8_ACT1_P7").show();
            $(".U3_RDC8_ButtonAudio").hide();
           
        } else if ($(".U3_RDC8_ACT1_P7").is(":visible")) {//
            $(".U3_RDC8_ACT1_P7").hide();
            $(".U3_RDC8_ACT1_P8").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "41%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "22%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "5vh");
            $(".U3_RDC8_ButtonAudio").css("top", "27%");
            $(".U3_RDC8_ButtonAudio").css("left", "60%");
            
        } else if ($(".U3_RDC8_ACT1_P8").is(":visible")) {//
            $(".U3_RDC8_ACT1_P8").hide();
            $(".U3_RDC8_Activities").show();
           
        }

        //Actividad 2
        if ($(".U3_RDC8_ACT2_P1").is(":visible")) {//Ir a P2 A1
            $(".U3_RDC8_ACT2_P1").hide();
            $(".U3_RDC8_ACT2_P2").show();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".video").attr("src", vid);

            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT2_P2").is(":visible")) {//Popol vuh
            $(".U3_RDC8_ACT2_P2").hide();
            $(".U3_RDC8_ACT2_P3").show();
            $(".U3_RDC8_ButtonAudio").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "46%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "23%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "4vh");
            $(".U3_RDC8_ButtonAudio").css("top", "27%");
            $(".U3_RDC8_ButtonAudio").css("left", "62%");
            $(".video").attr("src","");
            
        } else if ($(".U3_RDC8_ACT2_P3").is(":visible")) {//
            $(".U3_RDC8_ACT2_P3").hide();
            $(".U3_RDC8_ACT2_P4").show();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".U3_RDC8_ButtonNext").hide();
        
        } else if ($(".U3_RDC8_ACT2_P4").is(":visible")) {//
            $(".U3_RDC8_ACT2_P4").hide();
            $(".U3_RDC8_ACT2_P5").show();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".U3_RDC8_ButtonNext").hide();
            
        } else if ($(".U3_RDC8_ACT2_P5").is(":visible")) {//
            $(".U3_RDC8_ACT2_P5").hide();
            $(".U3_RDC8_ACT2_P6").show();
            $(".U3_RDC8_ButtonAudio").hide();

          
        } else if ($(".U3_RDC8_ACT2_P6").is(":visible")) {//
            $(".U3_RDC8_ACT2_P6").hide();
            $(".U3_RDC8_ACT2_P7").show();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".U3_RDC8_ButtonNext").hide();
           
        } else if ($(".U3_RDC8_ACT2_P7").is(":visible")) {//
            $(".U3_RDC8_ACT2_P7").hide();
            $(".U3_RDC8_ACT2_P8").show();
            $(".U3_RDC8_ButtonAudio").hide();
           
        } else if ($(".U3_RDC8_ACT2_P8").is(":visible")) {//
            $(".U3_RDC8_ACT2_P8").hide();
            $(".U3_RDC8_ACT2_P9").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("top", "17%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "46%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "22%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "4vh");
            $(".U3_RDC8_ButtonAudio").css("top", "37%");
            $(".U3_RDC8_ButtonAudio").css("left", "62%");
          
        } else if ($(".U3_RDC8_ACT2_P9").is(":visible")) {//
            $(".U3_RDC8_ACT2_P9").hide();
            $(".U3_RDC8_ACT2_P10").show();
            $(".U3_RDC8_ButtonAudio").css("top", "80%");
            $(".U3_RDC8_ButtonAudio").css("left", "64%");
          
        } else if ($(".U3_RDC8_ACT2_P10").is(":visible")) {//
            $(".U3_RDC8_ACT2_P10").hide();
            $(".U3_RDC8_Activities").show();
           
            //actividad 3
        } else if ($(".U3_RDC8_ACT3_P1").is(":visible")) {//
            $(".U3_RDC8_ACT3_P1").hide();
            $(".U3_RDC8_ACT3_P2").show();
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT3_P2").is(":visible")) {//
            $(".U3_RDC8_ACT3_P2").hide();
            $(".U3_RDC8_ACT3_P3").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("top", "15%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "42%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "24%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "3vh");
            $(".U3_RDC8_ButtonAudio").css("top", "37%");
            $(".U3_RDC8_ButtonAudio").css("left", "60%");
        
        } else if ($(".U3_RDC8_ACT3_P3").is(":visible")) {//
            $(".U3_RDC8_ACT3_P3").hide();
            $(".U3_RDC8_ACT3_P4").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("left", "31%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "24%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "27%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "3vh");
            $(".U3_RDC8_ButtonAudio").css("top", "30%");
            $(".U3_RDC8_ButtonAudio").css("left", "43%");
            $(".U3_RDC8_ACT2_P10_Text1").css("left", "55%");
            $(".U3_RDC8_ACT2_P10_Text1").css("top", "37%");
            $(".U3_RDC8_ACT2_P10_Text1").css("width", "35%");
            $(".U3_RDC8_ACT2_P10_Text1").css("height", "52%");
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT3_P4").is(":visible")) {//
            $(".U3_RDC8_ACT3_P4").hide();
            $(".U3_RDC8_ACT3_P5").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("left", "30%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "60%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "27%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "3vh");
            $(".U3_RDC8_ButtonAudio").css("top", "32%");
            $(".U3_RDC8_ButtonAudio").css("left", "65%");
            $(".U3_RDC8_ACT2_P10_Text1").css("left", "30%");
            $(".U3_RDC8_ACT2_P10_Text1").css("top", "50%");
            $(".U3_RDC8_ACT2_P10_Text1").css("width", "60%");
            $(".U3_RDC8_ACT2_P10_Text1").css("height", "27%");
            $(".U3_RDC8_ACT1_P10_Text1").css("font-size", "4vh");
            $(".U3_RDC8_Activities_Horn").hide();
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT3_P5").is(":visible")) {//
            $(".U3_RDC8_ACT3_P5").hide();
            $(".U3_RDC8_Activities").show();
            blinkElement2("U3_RDC8_ButtonAudio", true);
        }

    });
}


/* Aqui joven*/
function U3_RDC8_ButtonBack(){
    $(".U3_RDC8_ButtonBack").on("click", function (e) {
        $(".U3_RDC8_ButtonAudio").css("top", "");
        $(".U3_RDC8_ButtonAudio").css("left", "")
        $(".U3_RDC8_ACT1_Activities_Text1").css("left", "");
        $(".U3_RDC8_ACT1_Activities_Text1").css("top", "");
        $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "");
        $(".U3_RDC8_ACT1_Activities_Text1").css("width", "");
        $(".U3_RDC8_ACT1_Activities_Text1").css("height", "");
        $(".U3_RDC8_ACT2_P10_Text1").css("left", "");
        $(".U3_RDC8_ACT2_P10_Text1").css("top", "");
        $(".U3_RDC8_ACT2_P10_Text1").css("width", "");
        $(".U3_RDC8_ACT2_P10_Text1").css("height", "");
        $(".U3_RDC8_Activities_Horn").show();
        $(".U3_RDC8_ButtonNext").show();
        $(".U3_RDC8_ButtonBack").show();
        blinkElement2("U3_RDC8_ButtonAudio", true);
         //Actividad 1
        if ($(".U3_RDC8_ACT1_P1").is(":visible")) {//Ir a P2 A1
            $(".U3_RDC8_ACT1_P1").hide();
            $(".U3_RDC8_Activities").show();

            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT1_P2").is(":visible")) {//Popol vuh
            $(".U3_RDC8_ACT1_P2").hide();
            $(".U3_RDC8_ACT1_P1").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("top", "2%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("left", "40%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "33%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "26%");

            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT1_P3").is(":visible")) {//
            $(".U3_RDC8_ACT1_P3").hide();
            $(".U3_RDC8_ACT1_P2").show();
            $(".U3_RDC8_ButtonAudio").css("top", "79%");
            $(".U3_RDC8_ButtonAudio").css("left", "48%");
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT1_P4").is(":visible")) {//
            $(".U3_RDC8_ACT1_P4").hide();
            $(".U3_RDC8_ACT1_P3").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("left", "31%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "46%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "23%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "4vh");
            $(".U3_RDC8_ButtonAudio").css("top", "36%");
            $(".U3_RDC8_ButtonAudio").css("left", "51%");
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT1_P5").is(":visible")) {//
            $(".U3_RDC8_ACT1_P5").hide();
            $(".U3_RDC8_ACT1_P4").show();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".U3_RDC8_ButtonNext").hide();
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT1_P6").is(":visible")) {//
            $(".U3_RDC8_ACT1_P6").hide();
            $(".U3_RDC8_ACT1_P5").show();
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT1_P7").is(":visible")) {//
            $(".U3_RDC8_ACT1_P7").hide();
            $(".U3_RDC8_ACT1_P6").show();
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT1_P8").is(":visible")) {//
            $(".U3_RDC8_ACT1_P8").hide();
            $(".U3_RDC8_ACT1_P7").show();
            blinkElement2("U3_RDC8_ButtonAudio", true);
        }

        //Actividad 2
        if ($(".U3_RDC8_ACT2_P1").is(":visible")) {//Ir a P2 A1
            $(".U3_RDC8_ACT2_P1").hide();
            $(".U3_RDC8_Activities").show();


            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT2_P2").is(":visible")) {//Popol vuh
            $(".U3_RDC8_ACT2_P2").hide();
            $(".U3_RDC8_ACT2_P1").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("top", "2%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("left", "40%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "33%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "26%");
            $(".U3_RDC8_ButtonNext").show();
            $(".video").attr("src","");

            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT2_P3").is(":visible")) {//
            $(".U3_RDC8_ACT2_P3").hide();
            $(".U3_RDC8_ACT2_P2").show();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".video").attr("src", vid);

            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT2_P4").is(":visible")) {//
            $(".U3_RDC8_ACT2_P4").hide();
            $(".U3_RDC8_ACT2_P3").show();
            $(".U3_RDC8_ButtonAudio").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "46%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "23%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "4vh");
            $(".U3_RDC8_ButtonAudio").css("top", "35%");
            $(".U3_RDC8_ButtonAudio").css("left", "52%");

            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT2_P5").is(":visible")) {//
            $(".U3_RDC8_ACT2_P5").hide();
            $(".U3_RDC8_ACT2_P4").show();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".U3_RDC8_ButtonNext").hide();

            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT2_P6").is(":visible")) {//
            $(".U3_RDC8_ACT2_P6").hide();
            $(".U3_RDC8_ACT2_P5").show();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".U3_RDC8_ButtonNext").hide();

            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT2_P7").is(":visible")) {//
            $(".U3_RDC8_ACT2_P7").hide();
            $(".U3_RDC8_ACT2_P6").show();
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT2_P8").is(":visible")) {//
            $(".U3_RDC8_ACT2_P8").hide();
            $(".U3_RDC8_ACT2_P7").show();
            $(".U3_RDC8_ButtonAudio").hide();
            $(".U3_RDC8_ButtonNext").hide();
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT2_P9").is(":visible")) {//
            $(".U3_RDC8_ACT2_P9").hide();
            $(".U3_RDC8_ACT2_P8").show();

            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT2_P10").is(":visible")) {//
            $(".U3_RDC8_ACT2_10").hide();
            $(".U3_RDC8_ACT2_P9").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("top", "17%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "46%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "22%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "4vh");
            $(".U3_RDC8_ButtonAudio").css("top", "37%");
            $(".U3_RDC8_ButtonAudio").css("left", "52%");
            blinkElement2("U3_RDC8_ButtonAudio", true);

            //Actividad3
        } else if ($(".U3_RDC8_ACT3_P1").is(":visible")) {//
            $(".U3_RDC8_ACT3_P1").hide();
            $(".U3_RDC8_Activities").show();
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT3_P2").is(":visible")) {//
            $(".U3_RDC8_ACT3_P2").hide();
            $(".U3_RDC8_ACT3_P1").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("top", "2%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("left", "40%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "33%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "26%");
            $(".U3_RDC8_ButtonNext").show();
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT3_P3").is(":visible")) {//
            $(".U3_RDC8_ACT3_P3").hide();
            $(".U3_RDC8_ACT3_P2").show();

            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT3_P4").is(":visible")) {//
            $(".U3_RDC8_ACT3_P4").hide();
            $(".U3_RDC8_ACT3_P3").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("top", "15%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "42%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "24%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "3vh");
            $(".U3_RDC8_ButtonAudio").css("top", "37%");
            $(".U3_RDC8_ButtonAudio").css("left", "50%");
            blinkElement2("U3_RDC8_ButtonAudio", true);
        } else if ($(".U3_RDC8_ACT3_P5").is(":visible")) {//
            $(".U3_RDC8_ACT3_P5").hide();
            $(".U3_RDC8_ACT3_P4").show();
            $(".U3_RDC8_ACT1_Activities_Text1").css("left", "31%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("width", "24%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("height", "27%");
            $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "3vh");
            $(".U3_RDC8_ButtonAudio").css("top", "39%");
            $(".U3_RDC8_ButtonAudio").css("left", "41%");
            $(".U3_RDC8_ACT2_P10_Text1").css("left", "62%");
            $(".U3_RDC8_ACT2_P10_Text1").css("top", "13%");
            $(".U3_RDC8_ACT2_P10_Text1").css("width", "35%");
            $(".U3_RDC8_ACT2_P10_Text1").css("height", "66%");
            blinkElement2("U3_RDC8_ButtonAudio", true);
        }

    });

}

function U3_RDC8_ButtonHome() {
    $(".U3_RDC8_ButtonHome").on("click", function (e) {
        $(".U3_RDC8_ButtonAudio").css("top", "");
        $(".U3_RDC8_ButtonAudio").css("left", "")
        $(".U3_RDC8_ACT1_Activities_Text1").css("left", "");
        $(".U3_RDC8_ACT1_Activities_Text1").css("font-size", "");
        $(".U3_RDC8_ACT1_Activities_Text1").css("width", "");
        $(".U3_RDC8_ACT1_Activities_Text1").css("height", "");
        $(".U3_RDC8_Activities_Horn").show();
        $(".U3_RDC8_ButtonNext").show();
         $(".video").attr("src","");
        $(".U3_RDC8_ButtonAudio").show();
        if ($(".U3_RDC8_Activities").is(":visible")) {//Ir a Unidad 3
            $(".U3_RDC8_Activities").hide();
            $(".U3_RDC8_P0_").hide();
            $(".U3_B7").hide();
            title_initUnit3();
        } else {
            U3_RDC8_Inicialize();
            $(".U3_RDC8_P0_").show();
            $(".U3_RDC8_Activities").show();
            $(".U3_RDC8_ButtonAudio").show();
        }
    });
}

function U3_RDC8_GoActivities() {
    $(".U3_RDC8_ButtonActivity1").on("click", function (e) {
        $(".U3_RDC8_Activities").hide();
        $(".U3_RDC8_ACT1_P1").show();
        $(".U3_RDC8_ACT1_Activities_Text1").css("top", "2%");
        $(".U3_RDC8_ACT1_Activities_Text1").css("left", "40%");
        $(".U3_RDC8_ACT1_Activities_Text1").css("width", "33%");
        $(".U3_RDC8_ACT1_Activities_Text1").css("height", "26%");
        //blinkElement2(".U3_RDC8_ButtonAudio", true); //Yo lo puse quitarlo


    });
    $(".U3_RDC8_ButtonActivity2").on("click", function (e) {
        $(".U3_RDC8_Activities").hide();
        $(".U3_RDC8_ACT2_P1").show();
        $(".U3_RDC8_ACT1_Activities_Text1").css("top", "2%");
        $(".U3_RDC8_ACT1_Activities_Text1").css("left", "40%");
        $(".U3_RDC8_ACT1_Activities_Text1").css("width", "33%");
        $(".U3_RDC8_ACT1_Activities_Text1").css("height", "26%");
        $(".U3_RDC8_ButtonNext").show();
        //blinkElement2("U3_RDC8_ButtonAudio", true); //Yo lo puse quitarlo
    });
    $(".U3_RDC8_ButtonActivity3").on("click", function (e) {
        $(".U3_RDC8_Activities").hide();
        $(".U3_RDC8_ACT3_P1").show();
        $(".U3_RDC8_ACT1_Activities_Text1").css("top", "2%");
        $(".U3_RDC8_ACT1_Activities_Text1").css("left", "40%");
        $(".U3_RDC8_ACT1_Activities_Text1").css("width", "33%");
        $(".U3_RDC8_ACT1_Activities_Text1").css("height", "26%");
        $(".U3_RDC8_ButtonNext").show();
        //blinkElement2("U3_RDC8_ButtonAudio", true); //Yo lo puse quitarlo
    });
}

function U3_RDC8_Question() {
    //Pregunta U3 RDC8 ACT1 P4
    boxDragQuestion({
        droppableDiv: "U3_RDC8_ACT1_P4_Respuestas_id",
        draggablesDiv: "U3_RDC8_ACT1_P4_Opciones_id",
        correctFeedback: "U3_RDC8_ACT1_P4_RetCorr_id",
        wrongFeedback: "U3_RDC8_ACT1_P4_RetInco_id",
        correctPosition: 3,
        waitCorrectButton: true,
        checkButtonId: "U3_RDC8_ACT1_P4_Comprobar_id",
        //resetButtonId: "reset",
        onPassActivity: function (isCorrect) {
            console.debug("Me ha pasado " + isCorrect);
            if (isCorrect == false || isCorrect == true) {
                console.debug("terminada");
                $(".U3_RDC8_ButtonNext").show();
            }
            $("#options").find("div").css("cursor", "default");
        },
        onEnter: function () {
            $("#correctBox").css("background-color", "blue");
        },
        onLeave: function () {
            $("#correctBox").css("background-color", "");
        }
    });

    //Pregunta U3 RDC8 ACT2 P4
    boxDragQuestion({
        droppableDiv: "U3_RDC8_ACT2_P4_Respuestas_id",
        draggablesDiv: "U3_RDC8_ACT2_P4_Opciones_id",
        correctFeedback: "U3_RDC8_ACT2_P4_RetCorr_id",
        wrongFeedback: "U3_RDC8_ACT2_P4_RetInco_id",
        correctPosition: 2,
        waitCorrectButton: true,
        checkButtonId: "U3_RDC8_ACT2_P4_Comprobar_id",
        //resetButtonId: "reset",
        onPassActivity: function (isCorrect) {
            console.debug("Me ha pasado " + isCorrect);
            if (isCorrect == false || isCorrect == true) {
                console.debug("terminada");
                $(".U3_RDC8_ButtonNext").show();
            }
            $("#options").find("div").css("cursor", "default");
        },
        onEnter: function () {
            $("#correctBox").css("background-color", "blue");
        },
        onLeave: function () {
            $("#correctBox").css("background-color", "");
        }
    });

    //Pregunta U3 RDC8 ACT2 P7
    boxDragQuestion({
        droppableDiv: "U3_RDC8_ACT2_P7_Respuestas_id",
        draggablesDiv: "U3_RDC8_ACT2_P7_Opciones_id",
        correctFeedback: "U3_RDC8_ACT2_P7_RetCorr_id",
        wrongFeedback: "U3_RDC8_ACT2_P7_RetInco_id",
        correctPosition: 0,
        waitCorrectButton: true,
        checkButtonId: "U3_RDC8_ACT2_P7_Comprobar_id",
        //resetButtonId: "reset",
        onPassActivity: function (isCorrect) {
            console.debug("Me ha pasado " + isCorrect);
            if (isCorrect == false || isCorrect == true) {
                console.debug("terminada");
                $(".U3_RDC8_ButtonNext").show();
            }
            $("#options").find("div").css("cursor", "default");
        },
        onEnter: function () {
            $("#correctBox").css("background-color", "blue");
        },
        onLeave: function () {
            $("#correctBox").css("background-color", "");
        }
    });


    boxDragQuestion({
        droppableDiv: "U3_RDC9_ACT1_P7_Respuestas_id",
        draggablesDiv: "U3_RDC9_ACT1_P7_Opciones_id",
        correctFeedback: "U3_RDC9_ACT1_P7_RetCorr_id",
        wrongFeedback: "U3_RDC9_ACT1_P7_RetInco_id",
        correctPosition: 1,
        waitCorrectButton: true,
        checkButtonId: "U3_RDC9_ACT1_P7_Comprobar_id",
        //resetButtonId: "reset",
        onPassActivity: function (isCorrect) {
            if (isCorrect == false || isCorrect == true) {
                console.debug("terminada");
                $(".U3_RDC8_ButtonNext").show();
            }
            console.debug("Me ha pasado " + isCorrect);
            $("#options").find("div").css("cursor", "default");
        },
        onEnter: function () {
            $("#correctBox").css("background-color", "blue");
        },
        onLeave: function () {
            $("#correctBox").css("background-color", "");
        }
    });


}

function U3_RDC8_BoxQuestion() {
    $(".U3_RDC8_ACT2_P5_Msg").hide();
    $(".U3_RDC8_ACT2_P5_Text7").hide();
    $(".U3_RDC8_ACT2_P5_Msg2").hide();
    $(".U3_RDC8_ACT2_P8_Msg").hide();
    $(".U3_RDC8_ACT2_P8_Text7").hide();
    $(".U3_RDC8_ACT2_P8_Msg2").hide();
    $(".U3_RDC8_ACT2_P5_Text3").on("click", function () {
        $(".U3_RDC8_ACT2_P5_Msg2").show();
        $(".U3_RDC8_ACT2_P5_Text7").show();
    });
    $(".U3_RDC8_ACT2_P5_Text4").on("click", function (e) {
        $(".U3_RDC8_ACT2_P5_Msg2").show();
        $(".U3_RDC8_ACT2_P5_Text7").show();
    });
    $(".U3_RDC8_ACT2_P5_Text5").on("click", function (e) {
        $(".U3_RDC8_ACT2_P5_Msg2").show();
        $(".U3_RDC8_ACT2_P5_Text7").show();
    });
    $(".U3_RDC8_ACT2_P5_Text6").on("click", function (e) {
        $(".U3_RDC8_ACT2_P5_Msg").show();
        $(".U3_RDC8_ButtonNext").show();
    });
    $(".U3_RDC8_ACT2_P5_Text7").on("click", function (e) {
        $(".U3_RDC8_ACT2_P5_Msg2").hide();
        $(".U3_RDC8_ACT2_P5_Text7").hide();

    });


    $(".U3_RDC8_ACT2_P8_Text3").on("click", function () {
        $(".U3_RDC8_ACT2_P8_Msg2").show();
        $(".U3_RDC8_ACT2_P8_Text7").show();
    });
    $(".U3_RDC8_ACT2_P8_Text4").on("click", function (e) {
        $(".U3_RDC8_ACT2_P8_Msg2").show();
        $(".U3_RDC8_ACT2_P8_Text7").show();
    });
    $(".U3_RDC8_ACT2_P8_Text5").on("click", function (e) {
        $(".U3_RDC8_ACT2_P8_Msg2").show();
        $(".U3_RDC8_ACT2_P8_Text7").show();
    });
    $(".U3_RDC8_ACT2_P8_Text6").on("click", function (e) {
        $(".U3_RDC8_ACT2_P8_Msg").show();
        $(".U3_RDC8_ButtonNext").show();
    });
    $(".U3_RDC8_ACT2_P8_Text7").on("click", function (e) {
        $(".U3_RDC8_ACT2_P8_Msg2").hide();
        $(".U3_RDC8_ACT2_P8_Text7").hide();

    });

}
function U3_RDC8_DragQuestion() {
    //Pregunta U3 RDC8 ACT1 P4
    boxDragQuestion({
        droppableDiv: "U3_RDC8_ACT2_P6_Respuestas_id",
        draggablesDiv: "U3_RDC8_ACT2_P6_Opciones_id",
        correctFeedback: "U3_RDC8_ACT2_P6_RetCorr_id",
        wrongFeedback: "U3_RDC8_ACT2_P6_RetInco_id",
        correctPosition: 1,
        waitCorrectButton: false,
        //resetButtonId: "reset",
        onPassActivity: function (isCorrect) {
            console.debug("Me ha pasado " + isCorrect);
            if (isCorrect == false || isCorrect == true) {
                console.debug("terminada");
                $(".U3_RDC8_ButtonNext").show();
            }
            $("#options").find("div").css("cursor", "default");
        },
        onEnter: function () {
            $("#correctBox").css("background-color", "blue");
        },
        onLeave: function () {
            $("#correctBox").css("background-color", "");
        }
    });

}
function U3_RDC8_Drag() {
    $("#U3_RDC8_ACT1_P5_Text1").draggable();
    $("#U3_RDC8_ACT1_P5_Text2").draggable();
    $("#U3_RDC8_ACT1_P5_Text3").draggable();
    $("#U3_RDC8_ACT1_P5_Text4").draggable();
    $("#U3_RDC8_ACT1_P5_Bar").droppable({
        drop: function (event, ui) {
            $(this)
            $(".U3_RDC8_ButtonNext").show();

        }
    });
}
function Showpv() {
    $("#U3_RDC8_ACT1_P2_showPV1").hide();
    $("#U3_RDC8_ACT1_P2_showPV2").hide();
    $("#U3_RDC8_ACT1_P2_showPV3").hide();
    $("#U3_RDC8_ACT1_P2_showPV4").hide();
    $("#U3_RDC8_ACT1_P2_showPV5").hide();
    $("#U3_RDC8_ACT1_P2_showPV6").hide();
    $("#U3_RDC8_ACT1_P2_showPV7").hide();
    $("#U3_RDC8_ACT1_P2_showPV8").hide();
    $("#U3_RDC8_ACT1_P2_showPV9").hide();
    $("#U3_RDC8_ACT1_P2_showPV10").hide();

    $("#PV1").mouseenter(function () {
        $("#U3_RDC8_ACT1_P2_showPV1").show();
    });
    $("#PV2").mouseenter(function () {
        $("#U3_RDC8_ACT1_P2_showPV2").show();
    });
    $("#PV3").mouseenter(function () {
        $("#U3_RDC8_ACT1_P2_showPV3").show();
    });
    $("#PV4").mouseenter(function () {
        $("#U3_RDC8_ACT1_P2_showPV4").show();
    });
    $("#PV5").mouseenter(function () {
        $("#U3_RDC8_ACT1_P2_showPV5").show();
    });
    $("#PV6").mouseenter(function () {
        $("#U3_RDC8_ACT1_P2_showPV6").show();
    });
    $("#PV7").mouseenter(function () {
        $("#U3_RDC8_ACT1_P2_showPV7").show();
    });
    $("#PV8").mouseenter(function () {
        $("#U3_RDC8_ACT1_P2_showPV8").show();
    });
    $("#PV9").mouseenter(function () {
        $("#U3_RDC8_ACT1_P2_showPV9").show();
    });
    $("#PV10").mouseenter(function () {
        $("#U3_RDC8_ACT1_P2_showPV10").show();
    });
    $(".U3_RDC8_ACT1_P2_Container").mouseenter(function () {
        $("#U3_RDC8_ACT1_P2_showPV1").hide();
        $("#U3_RDC8_ACT1_P2_showPV2").hide();
        $("#U3_RDC8_ACT1_P2_showPV3").hide();
        $("#U3_RDC8_ACT1_P2_showPV4").hide();
        $("#U3_RDC8_ACT1_P2_showPV5").hide();
        $("#U3_RDC8_ACT1_P2_showPV6").hide();
        $("#U3_RDC8_ACT1_P2_showPV7").hide();
        $("#U3_RDC8_ACT1_P2_showPV8").hide();
        $("#U3_RDC8_ACT1_P2_showPV9").hide();
        $("#U3_RDC8_ACT1_P2_showPV10").hide();

    });
    $("#U3_RDC8_ACT1_P2_showPV1").click(function () {
        $("#U3_RDC8_ACT1_P2_showPV1").hide();
    });
    $("#U3_RDC8_ACT1_P2_showPV2").click(function () {
        $("#U3_RDC8_ACT1_P2_showPV2").hide();
    });
    $("#U3_RDC8_ACT1_P2_showPV3").click(function () {
        $("#U3_RDC8_ACT1_P2_showPV3").hide();
    });
    $("#U3_RDC8_ACT1_P2_showPV4").click(function () {
        $("#U3_RDC8_ACT1_P2_showPV4").hide();
    });
    $("#U3_RDC8_ACT1_P2_showPV5").click(function () {
        $("#U3_RDC8_ACT1_P2_showPV5").hide();
    });
    $("#U3_RDC8_ACT1_P2_showPV6").click(function () {
        $("#U3_RDC8_ACT1_P2_showPV6").hide();
    });
    $("#U3_RDC8_ACT1_P2_showPV7").click(function () {
        $("#U3_RDC8_ACT1_P2_showPV7").hide();
    });
    $("#U3_RDC8_ACT1_P2_showPV8").click(function () {
        $("#U3_RDC8_ACT1_P2_showPV8").hide();
    });
    $("#U3_RDC8_ACT1_P2_showPV9").click(function () {
        $("#U3_RDC8_ACT1_P2_showPV9").hide();
    });
    $("#U3_RDC8_ACT1_P2_showPV10").click(function () {
        $("#U3_RDC8_ACT1_P2_showPV10").hide();
    });

}
/*
 texto editor
 */

function EditTexU3_RDC8() {
    $("#U3_RDC8_ACT1_P6_textDiv").hide();
    $("#U3_RDC8_ACT1_P7_textDiv").hide();
    $("#U3_RDC8_ACT1_P7_Button_Radio").hide();
    new EditTextQuestion({
        parentDiv: "U3_RDC8_ACT1_P6_textDiv2",
        saveButtonId: "U3_RDC8_ACT1_P6_save",
        writeDocx: false,
        afterSubmit: function (text) {
            $("#U3_RDC8_ACT1_P6_textDiv").show();
            $("#U3_RDC8_ACT1_P6_textDiv2").hide();
            $("#U3_RDC8_ACT1_P6_textDiv").html(text);
            $("#U3_RDC8_ACT1_P7_Button_Radio").show();

        }
    });
    new EditTextQuestion({
        parentDiv: "U3_RDC8_ACT1_P7_textDiv2",
        saveButtonId: "U3_RDC8_ACT1_P7_save",
        writeDocx: false,
        afterSubmit: function (text) {
            $("#U3_RDC8_ACT1_P7_textDiv").show();
            $("#U3_RDC8_ACT1_P7_textDiv2").hide();
            $("#U3_RDC8_ACT1_P7_textDiv").html(text);
        }
    });
}
function blinkElement2(idObject, Status) {
    if (Status == true) {
        $('.' + idObject).fadeTo("slow", 1, function () {
            $('.' + idObject).fadeTo("slow", .3, blinkElement2(idObject, Status));
        });
    }
    else if (Status == false) {
        $('.' + idObject).stop(true, true);
        $('.' + idObject).stop().fadeTo("fast", 1);
    }
}
/*
 Radio Button

 $("#radio2").prop("checked",true);

 $("#comprobar_RadioButton").click(function(){
 var seleccion = $("input[name ='opciones']:checked").val();
 alert("La opcion que eligio es: "+ seleccion);
 });

 */


function U3_RDC8__Button_Radio() {
    $("#radio2").on("click", function (e) {
        alert("asi lo es");
    });
}

/**
 *
 * Sonido
 */
function U3_RDC8_ButtonAudio() {
    var U3_RDC8_clickInAudio = 0;
    $(".U3_RDC8_ButtonAudio").on("click", function (e) {
        U3_RDC8_clickInAudio++;
        if (U3_RDC8_clickInAudio == 1 || U3_RDC8_clickInAudio == 3) {
            //blinkElement2("U3_RDC8_ButtonAudio", false);
            if ($(".U3_RDC8_Activities").is(":visible")) { //Audio Index Actividades
                U3_RDC8_SoundReproducing1.play();
            } else if ($(".U3_RDC8_ACT1_P1").is(":visible")) { //Audio Actividad 1 Pagina 1
                U3_RDC8_SoundReproducing2.play();
            } else if ($(".U3_RDC8_ACT1_P2").is(":visible")) { //Audio Actividad 1 Pagina 2
                U3_RDC8_SoundReproducing3.play();
            } else if ($(".U3_RDC8_ACT1_P3").is(":visible")) { //Audio Actividad 1 Pagina 3
                U3_RDC8_SoundReproducing4.play();
            } else if ($(".U3_RDC8_ACT1_P8").is(":visible")) { //Audio Actividad 1 Pagina 3
                U3_RDC8_SoundReproducing5.play();
            } else if ($(".U3_RDC8_ACT2_P1").is(":visible")) { //Audio Actividad 2 Pagina 1
                U3_RDC8_SoundReproducing5.play();
            } else if ($(".U3_RDC8_ACT2_P3").is(":visible")) { //Audio Actividad 2 Pagina 2
                U3_RDC8_SoundReproducing6.play();
            } else if ($(".U3_RDC8_ACT2_P9").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC8_SoundReproducing7.play();
            } else if ($(".U3_RDC8_ACT3_P1").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC8_SoundReproducing8.play();
            } else if ($(".U3_RDC8_ACT3_P3").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC8_SoundReproducing9.play();
            } else if ($(".U3_RDC8_ACT3_P4").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC8_SoundReproducing10.play();
            } else if ($(".U3_RDC8_ACT3_P5").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC8_SoundReproducing11.play();
            }

        } else if (U3_RDC8_clickInAudio == 2) {
            blinkElement2("U3_RDC8_ButtonAudio", true);
            if ($(".U3_RDC8_Activities").is(":visible")) { //Audio Index Actividades
                U3_RDC8_SoundReproducing1.pause();
            } else if ($(".U3_RDC8_ACT1_P1").is(":visible")) { //Audio Actividad 1 Pagina 1
                U3_RDC8_SoundReproducing2.pause();
            } else if ($(".U3_RDC8_ACT1_P2").is(":visible")) { //Audio Actividad 1 Pagina 2
                U3_RDC8_SoundReproducing3.pause();
            } else if ($(".U3_RDC8_ACT1_P3").is(":visible")) { //Audio Actividad 1 Pagina 3
                U3_RDC8_SoundReproducing4.pause();
            } else if ($(".U3_RDC8_ACT1_P8").is(":visible")) { //Audio Actividad 1 Pagina 3
                U3_RDC8_SoundReproducing5.pause();
            } else if ($(".U3_RDC8_ACT2_P1").is(":visible")) { //Audio Actividad 2 Pagina 1
                U3_RDC8_SoundReproducing5.pause();
            } else if ($(".U3_RDC8_ACT2_P3").is(":visible")) { //Audio Actividad 2 Pagina 2
                U3_RDC8_SoundReproducing6.pause();
            } else if ($(".U3_RDC8_ACT2_P9").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC8_SoundReproducing7.pause();
            } else if ($(".U3_RDC8_ACT3_P1").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC8_SoundReproducing8.pause();
            } else if ($(".U3_RDC8_ACT3_P3").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC8_SoundReproducing9.pause();
            } else if ($(".U3_RDC8_ACT3_P4").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC8_SoundReproducing10.pause();
            } else if ($(".U3_RDC8_ACT3_P5").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC8_SoundReproducing11.pause();
            }
        }

        U3_RDC8_SoundReproducing1.addEventListener("ended", function () {
            U3_RDC8_clickInAudio = 0;
        }, true);
        U3_RDC8_SoundReproducing2.addEventListener("ended", function () {
            U3_RDC8_clickInAudio = 0;
        }, true);
        U3_RDC8_SoundReproducing3.addEventListener("ended", function () {
            U3_RDC8_clickInAudio = 0;
        }, true);
        U3_RDC8_SoundReproducing4.addEventListener("ended", function () {
            U3_RDC8_clickInAudio = 0;
        }, true);
        U3_RDC8_SoundReproducing5.addEventListener("ended", function () {
            U3_RDC8_clickInAudio = 0;
        }, true);
        U3_RDC8_SoundReproducing6.addEventListener("ended", function () {
            U3_RDC8_clickInAudio = 0;
        }, true);
        U3_RDC8_SoundReproducing7.addEventListener("ended", function () {
            U3_RDC8_clickInAudio = 0;
        }, true);
        U3_RDC8_SoundReproducing8.addEventListener("ended", function () {
            U3_RDC8_clickInAudio = 0;
        }, true);
        U3_RDC8_SoundReproducing9.addEventListener("ended", function () {
            U3_RDC8_clickInAudio = 0;
        }, true);
        U3_RDC8_SoundReproducing10.addEventListener("ended", function () {
            U3_RDC8_clickInAudio = 0;
        }, true);
        U3_RDC8_SoundReproducing11.addEventListener("ended", function () {
            U3_RDC8_clickInAudio = 0;
        }, true);

    });
    $(".U3_RDC8_ButtonNext, .U3_RDC8_ButtonBack, .U3_RDC8_ButtonActivity3, .U3_RDC8_ButtonActivity2, .U3_RDC8_ButtonActivity1, .U3_RDC8_ButtonHome").on("click", function (e) {
        U3_RDC8_clickInAudio = 0;
        U3_RDC8_SoundReproducing2.pause();
        U3_RDC8_SoundReproducing2.currentTime = 0;
        U3_RDC8_SoundReproducing1.pause();
        U3_RDC8_SoundReproducing1.currentTime = 0;
        U3_RDC8_SoundReproducing3.pause();
        U3_RDC8_SoundReproducing3.currentTime = 0;
        U3_RDC8_SoundReproducing4.pause();
        U3_RDC8_SoundReproducing4.currentTime = 0;
        U3_RDC8_SoundReproducing5.pause();
        U3_RDC8_SoundReproducing5.currentTime = 0;
        U3_RDC8_SoundReproducing6.pause();
        U3_RDC8_SoundReproducing6.currentTime = 0;
        U3_RDC8_SoundReproducing7.pause();
        U3_RDC8_SoundReproducing7.currentTime = 0;
        U3_RDC8_SoundReproducing8.pause();
        U3_RDC8_SoundReproducing8.currentTime = 0;
        U3_RDC8_SoundReproducing9.pause();
        U3_RDC8_SoundReproducing9.currentTime = 0;
        U3_RDC8_SoundReproducing10.pause();
        U3_RDC8_SoundReproducing10.currentTime = 0;
        U3_RDC8_SoundReproducing11.pause();
        U3_RDC8_SoundReproducing11.currentTime = 0;
    });
}