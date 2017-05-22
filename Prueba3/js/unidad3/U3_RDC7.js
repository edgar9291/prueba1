var U3_RDC7_rotatingRulette = false;
var U3_RDC7_gradeRotate = 0;
var U3_RDC7_infoView = new Array(7);
var U3_RDC7_SoundReproducing1;
var U3_RDC7_SoundReproducing2;
var U3_RDC7_SoundReproducing3;
var U3_RDC7_SoundReproducing4;
var U3_RDC7_SoundReproducing5;
var U3_RDC7_SoundReproducing6;
var U3_RDC7_SoundReproducing7;
var U3_RDC7_indexInformationPopUp = 0;
var U3_RDC7_clickInRulette = 0;
$(document).ready(function () {
    U3_RDC7_InicializeHtml();
    U3_RDC7_Inicialize();
    //U3_P1_RDC7_ButtonActivity1();
    U3_RDC7_ButtonNext();
    U3_RDC7_ButtonBack();
    U3_RDC7_GoActivities();
    U3_RDC7_ButtonHome();
    U3_RDC7_ButtonAudio();
    U3_RDC7_rotateRulette();
});

function U3_RDC7_InicializeHtml() {
    $(".U3_B7").hide();
    $(".U3_B7_RDC7").hide();
    $(".U3_P1_RDC7_ButtonActivity1").html("<p>Actividad 1:<br> Reflexionemos sobre algunos inventos del ser humano.</p>");
    $(".U3_P1_RDC7_ButtonActivity2").html("<p>Actividad 2:<br> Conversemos sobre la visión de mundo.</p>");
    $(".U3_P1_RDC7_TextAudioActivities").html("<p>En el Recurso Digital Complementario 7 podrás realizar dos actividades relacionadas con importantes inventos del ser humano. Presiona el botón correspondiente para acceder a ellas.</p><div class=\"U3_P1_RDC7_DialogImage\"></div>");
    $(".U3_P1_RDC7_ACT_1_Text").html("<p>Actividad 1: Reflexionemos sobre algunos inventos del ser humano</p>");
    $(".U3_P1_RDC7_ACT_1_TextAudioActivity").html("<p>Te invito a conocer distintos inventos de la humanidad, que reflejan las preocupaciones e intereses del ser humano en distintos momentos de la historia. Observa y lee con detención la descripción de cada uno, y luego responde con tus compañeros las preguntas que se presentan.</p><div class=\"U3_P1_RDC7_DialogImage\"></div>");
    $(".U3_P3_RDC7_ACT_1_TextAudioEnd").html("<p>Has finalizado el trabajo con los inventos del ser humano. Para concluir la actividad, te invito a comentar las siguientes preguntas con tus compañeros y tu profesor:</p><div class=\"U3_P1_RDC7_DialogImage\"></div>");
    $(".U3_P3_RDC7_ACT_1_TextActivityEnd").html("<p>• ¿Cuál de los inventos revisados crees que tuvo un impacto más significativo para la humanidad?<br><br> • ¿Qué otro invento agregarías a los ya revisados?, ¿por qué?</p>");
    $(".U3_P1_RDC7_ACT_2_Text").html("<p>Actividad 2: Conversemos sobre la visión de mundo.</p>");
    $(".U3_P1_RDC7_ACT_2_TextAudioActivity").html("<p>En esta actividad te invito a reunirte en grupos de 4 a 6 integrantes para dialogar e intercambiar puntos de vista acerca de cómo se manifiesta la visión de mundo de una sociedad y cómo se puede caracterizar. Elige a tu grupo y luego haz clic en el botón de avance para continuar.</p><div class=\"U3_P1_RDC7_DialogImage\"></div>");
    $(".U3_P2_RDC7_ACT_2_TextAudioActivity").html("<p>Para comenzar la conversación, un integrante del grupo leerá en voz alta la siguiente definición de la visión de mundo, que el grupo comentará para luego responder una serie de preguntas. Cada integrante debe respetar sus turnos de habla, fundamentar sus opiniones, hacer preguntas a sus compañeros y reformular sus intervenciones si es necesario. ¡Que tengan una excelente conversación!</p><div class=\"U3_P1_RDC7_DialogImage\"></div>");
    $(".U3_P2_RDC7_ACT_2_Text").html("<p>Visión de mundo<br> Se conoce como visión de mundo a la forma en que una persona comprende y explica la realidad en que vive. La visión de mundo está compuesta, por ejemplo, por los valores de la persona, sus creencias religiosas, las opiniones que tiene acerca de su sociedad, las leyes científicas que considera verdaderas, sus ideales, aquello que cree correcto e incorrecto, etc. </p>");
    $(".U3_P3_RDC7_ACT_2_TextActivity").html("<p>Comenten y respondan las siguientes preguntas, considerando los inventos revisados en la actividad anterior y la definición de visión de mundo que acaban de conocer.</p>");
    $(".U3_P3_RDC7_ACT_2_Text1Activity").html("<p>• Elige uno de los inventos de la Actividad 1 e infiere un rasgo de la visión de mundo de su inventor que se desprenda de su creación. Para esto, pregúntate: ¿qué necesidad viene a suplir el invento?, ¿cuál habrá sido la motivación de su inventor?  <br><br>• ¿Qué diferencias en la visión de mundo del ser humano puedes identificar a partir de la comparación de la invención de los jeroglíficos y la invención del teléfono? Fundamenta.  <br><br>• ¿De qué manera crees que influye la tecnología actual en tu visión de mundo? Ejemplifica a partir del uso que haces del teléfono celular y de Internet. <br><br>• A partir de lo conversado, describe cómo es tu visión de mundo. Da ejemplos. </p>");
    $(".U3_P4_RDC7_ACT_2_TextAudioEnd").html("<p>Has llegado al final del RDC 7. Para concluir, te invito a reflexionar sobre tu desempeño, y luego a comentar con tus compañeros a partir de las siguientes preguntas.</p><div class=\"U3_P1_RDC7_DialogImage\"></div>");
    $(".U3_P4_RDC7_ACT_2_Text").html("<p>• ¿Qué sabías sobre los inventos revisados antes de trabajar en este RDC?<br><br> • ¿De qué manera te ayudaron las actividades desarrolladas a entender qué es y cómo se refleja la visión de mundo en las creaciones del ser humano?<br><br> • ¿Cuál crees que es el invento actual más representativo de tu época?, ¿por qué? </p>");
    $(".U3_P2_RDC7_ACT_1_TextAudioInstructionRoulette").html("<p>Haz clic sobre la ruleta para que comience a girar. Haz clic nuevamente sobre ella para que se detenga en un invento. Lee y observa con atención la información que se desplegará y luego comenta con tus compañeros la pregunta que aparecerá.</p><div class=\"U3_P1_RDC7_DialogImage\"></div>");
}

function U3_RDC7_rotateRulette() {
    $(".U3_P2_RDC7_ACT_1_ImageRoulette").on("click", function (e) {
        U3_RDC7_clickInRulette++;
        if ((U3_RDC7_infoView[0] == 0) || (U3_RDC7_infoView[1] == 0) || (U3_RDC7_infoView[2] == 0) || (U3_RDC7_infoView[3] == 0) || (U3_RDC7_infoView[4] == 0) || (U3_RDC7_infoView[5] == 0) || (U3_RDC7_infoView[6] == 0)) {
            if ((U3_RDC7_rotatingRulette == false) && (U3_RDC7_clickInRulette == 1)) {
                U3_RDC7_rotatingRulette = true;
                Concurrent.Thread.create(U3_RDC7_rotateRuletteProcesoThread, U3_RDC7_rotatingRulette);
            } else if ((U3_RDC7_rotatingRulette == true) && (U3_RDC7_clickInRulette == 2)) {
                U3_RDC7_rotatingRulette = false;
                Concurrent.Thread.create(U3_RDC7_rotateRuletteProcesoThread, U3_RDC7_rotatingRulette);
                Concurrent.Thread.create(U3_RDC7_rotateRuletteLevelProcesoThread, U3_RDC7_rotateRuletteLevel(), U3_RDC7_indexInformationPopUp);
            }
        }
    });
}

function U3_RDC7_rotateRuletteLevelProcesoThread(U3_RDC7_gradeRotateLevelEndThread, U3_RDC7_indexInformationPopUp) {
    for (var U3_RDC7_gradeRotateLevel = 0; U3_RDC7_gradeRotateLevel <= U3_RDC7_gradeRotateLevelEndThread; U3_RDC7_gradeRotateLevel++) {
        sleep(1);
        $(".U3_P2_RDC7_ACT_1_ImageRoulette").css("transform", "rotate(" + (U3_RDC7_gradeRotate + U3_RDC7_gradeRotateLevel) + "deg)");
    }
    U3_RDC7_gradeRotate = U3_RDC7_gradeRotate + U3_RDC7_gradeRotateLevel;
    sleep(200);
    U3_RDC7_setInformationPopUp(U3_RDC7_indexInformationPopUp);
    if ((U3_RDC7_infoView[0] == 1) && (U3_RDC7_infoView[1] == 1) && (U3_RDC7_infoView[2] == 1) && (U3_RDC7_infoView[3] == 1) && (U3_RDC7_infoView[4] == 1) && (U3_RDC7_infoView[5] == 1) && (U3_RDC7_infoView[6] == 1)) {
        $(".U3_P1_RDC7_ButtonActivity2").css("pointer-events", "visible");
        blinkElement2("U3_P1_RDC7_ButtonNext", true);
    }
    U3_RDC7_clickInRulette = 0;
    Concurrent.Thread.stop();
}

function U3_RDC7_rotateRuletteProcesoThread(U3_RDC7_rotatingRuletteThread) {
    while (true) {
        sleep(1);
        U3_RDC7_gradeRotate++;
        $(".U3_P2_RDC7_ACT_1_ImageRoulette").css("transform", "rotate(" + U3_RDC7_gradeRotate + "deg)");
        if (U3_RDC7_rotatingRulette == false) {
            Concurrent.Thread.stop();
        }
    }
}

function U3_RDC7_rotateRuletteLevel() {
    var U3_RDC7_randomRuletteLevel = Math.floor((Math.random() * 7) + 1);
    var U3_RDC7_randomRotateRulette = 0;
    if ((U3_RDC7_infoView[0] == 0) || (U3_RDC7_infoView[1] == 0) || (U3_RDC7_infoView[2] == 0) || (U3_RDC7_infoView[3] == 0) || (U3_RDC7_infoView[4] == 0) || (U3_RDC7_infoView[5] == 0) || (U3_RDC7_infoView[6] == 0)) {
        while (U3_RDC7_infoView[U3_RDC7_randomRuletteLevel - 1] == 1) {
            U3_RDC7_randomRuletteLevel = Math.floor((Math.random() * 7) + 1);
        }
        U3_RDC7_indexInformationPopUp = U3_RDC7_randomRuletteLevel;
        U3_RDC7_randomRotateRulette = parseInt(U3_RDC7_gradeRotate / 360);
        U3_RDC7_randomRotateRulette = U3_RDC7_gradeRotate - (360 * U3_RDC7_randomRotateRulette);
        U3_RDC7_randomRotateRulette = (51 * U3_RDC7_randomRuletteLevel) + (360 - U3_RDC7_randomRotateRulette);
        U3_RDC7_infoView[U3_RDC7_randomRuletteLevel - 1] = 1;
        return U3_RDC7_randomRotateRulette;
    } else {
        return -1;
    }
}

function U3_RDC7_setInformationPopUp(U3_RDC7_randomRuletteLevel) {
    var U3_RDC7_informationTitle;
    var U3_RDC7_information;
    var U3_RDC7_informationImage;
    var U3_RDC7_informationActivity;


    if (U3_RDC7_randomRuletteLevel == 1) {
        U3_RDC7_informationTitle="Cine";
        U3_RDC7_information="El cine es la técnica y el arte de reproducir fotogramas de forma rápida y sucesiva, creando una ilusión de movimiento. <br><br> Para muchos estudiosos, la historia del cine comienza el 28 de diciembre del año 1895 con los hermanos Lumière, quienes proyectaron en público una breve película que mostraba la salida de los obreros de una fábrica francesa.";
        U3_RDC7_informationActivity="<p>Comenta con tus compañeros:<br>¿Cómo crees que reaccionó el público que presenció la primera película proyectada por los hermanos Lumière? ¿Cómo habrías reaccionado tú?</p>";
    }else if (U3_RDC7_randomRuletteLevel == 2) {
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").css("top","");
        U3_RDC7_informationTitle = "Rueda";
        U3_RDC7_information = "La rueda es una pieza circular que gira alrededor de un eje. Corresponde a uno de los inventos más importantes de la humanidad, por su gran utilidad en el desarrollo de diversas actividades fundamentales para el progreso humano. <br><br> Su invención no tiene una fecha específica, ya que es imposible rastrear esa información. Sin embargo, los vestigios arqueológicos encontrados datan la rueda más antigua entre los años 3100 a 3350 a. C. En la imagen se muestra una rueda de carro encontrada cerca de Susa, actual Irán, y que data del segundo milenio antes de Cristo.";
        U3_RDC7_informationImage = "url(img/unidad3/RDC7/wheel.jpg)";
        U3_RDC7_informationActivity = "<p>Comenta con tus compañeros:<br>Imagina la sociedad antes de la invención de la rueda. ¿Cómo piensas que era? ¿Crees que la invención de la rueda fue algo azaroso o que fue inventada por necesidad?, ¿por qué?</p>"
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationFramePhoto").css("height", "50%");
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").css("height", "21%");
    } else if (U3_RDC7_randomRuletteLevel == 4) {
        U3_RDC7_informationTitle = "Teléfono";
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").css("top","69%");
        U3_RDC7_information = "El teléfono es un sistema de comunicación que transmite el sonido de la voz a larga distancia, por medios eléctricos o electromagnéticos. <br><br> Durante mucho tiempo, Alexander Graham Bell fue considerado el inventor del teléfono. Sin embargo, el año 2002 el Congreso de Estados Unidos reconoció que el inventor del teléfono había sido Antonio Meucci, un italiano que no pudo patentar su invento por no tener suficiente dinero para la inscripción. En la imagen se puede apreciar el primer teléfono patentado por Alexander Graham Bell. ";
        U3_RDC7_informationImage = "url(img/unidad3/RDC7/phone.png)";
        U3_RDC7_informationActivity = "<p>Comenta con tus compañeros:<br>¿Qué cambios en las relaciones interpersonales crees que produjo la invención del teléfono?</p>"
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationFramePhoto").css("height", "");
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").css("height", "16%");
    } else if (U3_RDC7_randomRuletteLevel == 6) {
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").css("top","71%");
        U3_RDC7_informationTitle = "Ampolleta (lámpara incandescente)";
        U3_RDC7_information = "Fue inventada por el físico y químico inglés Joseph Wilson Swan, quien la presentó en una conferencia el año 1870. Ese mismo año, comenzó a hacer instalaciones de ampolletas en los hogares. Anteriormente, varios inventores habían desarrollado modelos de ampolletas que funcionaban, pero solo en laboratorios. <br><br> La ampolleta es uno de los inventos más utilizados por el ser humano desde su creación hasta hoy. Sin embargo, la tecnología utilizada por Joseph Wilson Swan está actualmente obsoleta, por considerarse poco eficiente: el 85% de la electricidad que consumía su lámpara incandescente era transformada en calor, y solo el 15% restante, en luz.";
        U3_RDC7_informationImage = "url(img/unidad3/RDC7/focus.jpg)";
        U3_RDC7_informationActivity = "<p>Comenta con tus compañeros:<br>¿Cómo crees que influyó la invención de la ampolleta en la vida cotidiana de las personas? Da un ejemplo.</p>"
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationFramePhoto").css("height", "57%");
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").css("height", "16%");
    } else if (U3_RDC7_randomRuletteLevel == 7) {
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").css("top","64%");
        U3_RDC7_informationTitle = "Automóvil";
        U3_RDC7_information = "El primer automóvil con motor de combustión fue inventado por el ingeniero alemán Karl Benz en 1886. En la imagen, se ve a Karl Benz en su primer automóvil patentado.<br><br>El año 1908 el estadounidense Henry Ford, en su propia compañía, comenzó a producir el modelo de automóvil Ford T en serie. Esto fue completamente revolucionario para la época, ya que antes los automóviles se elaboraban mediante un proceso artesanal que requería de mucho tiempo.";
        U3_RDC7_informationImage = "url(img/unidad3/RDC7/car.jpg)";
        U3_RDC7_informationActivity = "<p>Comenta con tus compañeros:<br>¿Cuáles crees que son las principales diferencias entre los primeros automóviles y los actuales? ¿A qué necesidades de la sociedad crees que responden esos cambios?</p>"
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationFramePhoto").css("height", "50%");
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").css("height", "");
    } else if (U3_RDC7_randomRuletteLevel == 3) {
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad1").css("height","22%");
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad1").css("top","");
        U3_RDC7_informationTitle = "Agricultura";
        U3_RDC7_information = "Se llama agricultura al conjunto de prácticas de cultivo y explotación de la tierra con la intención de obtener productos de ella. <br><br>Se inicia en el período Neolítico, cuando la economía del ser humano evolucionó desde la pesca, la caza y la recolección, a la agricultura y la ganadería, lo que cambió de manera significativa su modo de vida. De ahí en adelante, su desarrollo se produjo en varias culturas y con muy diversas técnicas. ";
        U3_RDC7_informationActivity = "<p>Comenta con tus compañeros:<br>¿Cómo crees que influyó el desarrollo de la agricultura en la vida del ser humano? ¿Qué cambios importantes crees que se produjeron a partir de esta invención?</p>";
    } else if (U3_RDC7_randomRuletteLevel == 5) {
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad1").css("height","");
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad1").css("top","59%");
        U3_RDC7_informationTitle = "Jeroglíficos";
        U3_RDC7_information = "Sistema de escritura propio de algunas civilizaciones, como la egipcia o la maya, que se basa en la combinación de símbolos. Corresponde, probablemente, al primer sistema organizado de escritura de la historia. Los jeroglíficos más antiguos datan del siglo XXXIII a. C. En la civilización egipcia, los jeroglíficos eran utilizados para realizar inscripciones oficiales en las paredes de templos y tumbas. ";
        U3_RDC7_informationActivity = "<p>Comenta con tus compañeros:<br>Los jeroglíficos le permitieron al ser humano comunicarse a través de un medio distinto a la voz y los gestos. Considerando el uso que tú le das hoy a la escritura, ¿qué repercusiones tiene la invención de los jeroglíficos en tu vida?</p>";
    }

    if (U3_RDC7_randomRuletteLevel == 2 || U3_RDC7_randomRuletteLevel == 4 || U3_RDC7_randomRuletteLevel == 6 || U3_RDC7_randomRuletteLevel == 7) {
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationTitle").empty();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformation").empty();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationFramePhoto").empty();
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").empty();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationTitle").append(U3_RDC7_informationTitle);
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformation").append("<p>" + U3_RDC7_information + "</p>");
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationFramePhoto").css("background-image", U3_RDC7_informationImage);
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").append(U3_RDC7_informationActivity);
        $(".U3_P2_RDC7_ACT_1_PopUpRoulette").show();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteFrame").show();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteFrame1").hide();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteFrame2").hide();
    } else if (U3_RDC7_randomRuletteLevel == 3 || U3_RDC7_randomRuletteLevel == 5) {
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationTitle1").empty();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformation1").empty();
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad1").empty();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationTitle1").append(U3_RDC7_informationTitle);
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformation1").append("<p>" + U3_RDC7_information + "</p>");
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad1").append(U3_RDC7_informationActivity);
        $(".U3_P2_RDC7_ACT_1_PopUpRoulette").show();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteFrame").hide();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteFrame1").show();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteFrame2").hide();
    } else if (U3_RDC7_randomRuletteLevel == 1) {
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationTitle2").empty();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformation2").empty();
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad2").empty();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformationTitle2").append(U3_RDC7_informationTitle);
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteInformation2").append("<p>" + U3_RDC7_information + "</p>");
        $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad2").append(U3_RDC7_informationActivity);
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteFrame").hide();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteFrame1").hide();
        $(".U3_P2_RDC7_ACT_1_PopUpRouletteFrame2").show();
        $(".U3_P2_RDC7_ACT_1_PopUpRoulette").show();
        $(".U3_P2_RDC7_ACT_1_Video").trigger("play");
    }
}

function U3_RDC7_ButtonAudio() {
    var U3_RDC7_clickInAudio = 0;
    $(".U3_P1_RDC7_ButtonAudio").on("click", function (e) {
        U3_RDC7_clickInAudio++;
        if (U3_RDC7_clickInAudio == 1 || U3_RDC7_clickInAudio == 3) {
            blinkElement2("U3_P1_RDC7_ButtonAudio", false);
            if ($(".U3_RDC7_P1_Activities").is(":visible")) { //Audio Index Actividades
                U3_RDC7_SoundReproducing1.play();
            } else if ($(".U3_RDC7_ACT_1_P1").is(":visible")) { //Audio Actividad 1 Pagina 1
                U3_RDC7_SoundReproducing2.play();
            } else if ($(".U3_RDC7_ACT_1_P2").is(":visible")) { //Audio Actividad 1 Pagina 2
                U3_RDC7_SoundReproducing3.play();
            } else if ($(".U3_RDC7_ACT_1_P3").is(":visible")) { //Audio Actividad 1 Pagina 3
                U3_RDC7_SoundReproducing4.play();
            } else if ($(".U3_RDC7_ACT_2_P1").is(":visible")) { //Audio Actividad 2 Pagina 1
                U3_RDC7_SoundReproducing5.play();
            } else if ($(".U3_RDC7_ACT_2_P2").is(":visible")) { //Audio Actividad 2 Pagina 2
                U3_RDC7_SoundReproducing6.play();
            } else if ($(".U3_RDC7_ACT_2_P4").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC7_SoundReproducing7.play();
            }
            U3_RDC7_clickInAudio = 1;
        } else if (U3_RDC7_clickInAudio == 2) {
            if ($(".U3_RDC7_P1_Activities").is(":visible")) { //Audio Index Actividades
                U3_RDC7_SoundReproducing1.pause();
            } else if ($(".U3_RDC7_ACT_1_P1").is(":visible")) { //Audio Actividad 1 Pagina 1
                U3_RDC7_SoundReproducing2.pause();
            } else if ($(".U3_RDC7_ACT_1_P2").is(":visible")) { //Audio Actividad 1 Pagina 2
                U3_RDC7_SoundReproducing3.pause();
            } else if ($(".U3_RDC7_ACT_1_P3").is(":visible")) { //Audio Actividad 1 Pagina 3
                U3_RDC7_SoundReproducing4.pause();
            } else if ($(".U3_RDC7_ACT_2_P1").is(":visible")) { //Audio Actividad 2 Pagina 1
                U3_RDC7_SoundReproducing5.pause();
            } else if ($(".U3_RDC7_ACT_2_P2").is(":visible")) { //Audio Actividad 2 Pagina 2
                U3_RDC7_SoundReproducing6.pause();
            } else if ($(".U3_RDC7_ACT_2_P4").is(":visible")) { //Audio Actividad 2 Pagina 4
                U3_RDC7_SoundReproducing7.pause();				
            }
        }

        U3_RDC7_SoundReproducing1.addEventListener("ended", function () {
            U3_RDC7_clickInAudio = 0;
        }, true);
        U3_RDC7_SoundReproducing2.addEventListener("ended", function () {
            U3_RDC7_clickInAudio = 0;
        }, true);
        U3_RDC7_SoundReproducing3.addEventListener("ended", function () {
            U3_RDC7_clickInAudio = 0;
        }, true);
        U3_RDC7_SoundReproducing4.addEventListener("ended", function () {
            U3_RDC7_clickInAudio = 0;
			blinkElement2("U3_P1_RDC7_ButtonNext", true);
        }, true);
        U3_RDC7_SoundReproducing5.addEventListener("ended", function () {
            U3_RDC7_clickInAudio = 0;
        }, true);
        U3_RDC7_SoundReproducing6.addEventListener("ended", function () {
            U3_RDC7_clickInAudio = 0;
        }, true);
        U3_RDC7_SoundReproducing7.addEventListener("ended", function () {
            U3_RDC7_clickInAudio = 0;
			blinkElement2("U3_P1_RDC7_ButtonNext", true);
        }, true);

    });

    $(".U3_P1_RDC7_ButtonNext, .U3_P1_RDC7_ButtonBack, .U3_P1_RDC7_ButtonActivity1, .U3_P1_RDC7_ButtonHome").on("click", function (e) {
        U3_RDC7_clickInAudio = 0;
        U3_RDC7_SoundReproducing2.pause();
        U3_RDC7_SoundReproducing2.currentTime = 0;
        U3_RDC7_SoundReproducing1.pause();
        U3_RDC7_SoundReproducing1.currentTime = 0;
        U3_RDC7_SoundReproducing3.pause();
        U3_RDC7_SoundReproducing3.currentTime = 0;
        U3_RDC7_SoundReproducing4.pause();
        U3_RDC7_SoundReproducing4.currentTime = 0;
        U3_RDC7_SoundReproducing5.pause();
        U3_RDC7_SoundReproducing5.currentTime = 0;
        U3_RDC7_SoundReproducing6.pause();
        U3_RDC7_SoundReproducing6.currentTime = 0;
        U3_RDC7_SoundReproducing7.pause();
        U3_RDC7_SoundReproducing7.currentTime = 0;
    });

}

function U3_RDC7_Inicialize() {
    if ((U3_RDC7_infoView[0] == 0) || (U3_RDC7_infoView[1] == 0) || (U3_RDC7_infoView[2] == 0) || (U3_RDC7_infoView[3] == 0) || (U3_RDC7_infoView[4] == 0) || (U3_RDC7_infoView[5] == 0) || (U3_RDC7_infoView[6] == 0)) {
        //$(".U3_P1_RDC7_ButtonActivity2").css("pointer-events", "none");
    }
    $(".U3_P2_RDC7_ACT_1_Video").trigger("pause");
    $(".U3_B7_Header").html("&nbsp;Unidad 3 RDC 7");
    $(".U3_RDC7_ACT_1_P1").hide();
    $(".U3_RDC7_ACT_1_P2").hide();
    $(".U3_P2_RDC7_ACT_1_PopUpRoulette").hide();
    $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").hide();
    $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad1").hide();
    $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad2").hide();
    $(".U3_RDC7_ACT_1_P3").hide();
    $(".U3_RDC7_ACT_2_P1").hide();
    $(".U3_RDC7_ACT_2_P2").hide();
    $(".U3_RDC7_ACT_2_P3").hide();
    $(".U3_RDC7_ACT_2_P4").hide();
    $(".U3_RDC7_P1_Activities").hide();
    $(".U3_B7_RDC9").hide();
    $(".U3_B7_RDC8").hide();
    $(".U3_B7_RDC7").hide();
    $(".U3_B7").hide();
    U3_RDC7_infoView = new Array(0, 0, 0, 0, 0, 0, 0);
    U3_RDC7_SoundReproducing1 = document.createElement('audio');
    U3_RDC7_SoundReproducing2 = document.createElement('audio');
    U3_RDC7_SoundReproducing3 = document.createElement('audio');
    U3_RDC7_SoundReproducing4 = document.createElement('audio');
    U3_RDC7_SoundReproducing5 = document.createElement('audio');
    U3_RDC7_SoundReproducing6 = document.createElement('audio');
    U3_RDC7_SoundReproducing7 = document.createElement('audio');
    U3_RDC7_SoundReproducing1.setAttribute('src', 'audio/unidad3/RDC7/1.mp3');
    U3_RDC7_SoundReproducing2.setAttribute('src', 'audio/unidad3/RDC7/2.mp3');
    U3_RDC7_SoundReproducing3.setAttribute('src', 'audio/unidad3/RDC7/3.mp3');
    U3_RDC7_SoundReproducing4.setAttribute('src', 'audio/unidad3/RDC7/4.mp3');
    U3_RDC7_SoundReproducing5.setAttribute('src', 'audio/unidad3/RDC7/5.mp3');
    U3_RDC7_SoundReproducing6.setAttribute('src', 'audio/unidad3/RDC7/6.mp3');
    U3_RDC7_SoundReproducing7.setAttribute('src', 'audio/unidad3/RDC7/7.mp3');
    U3_RDC7_SoundReproducing1.load();
    U3_RDC7_SoundReproducing2.load();
    U3_RDC7_SoundReproducing3.load();
    U3_RDC7_SoundReproducing4.load();
    U3_RDC7_SoundReproducing5.load();
    U3_RDC7_SoundReproducing6.load();
    U3_RDC7_SoundReproducing7.load();
}

function U3_RDC7_GoIndexActivitiesRDC7() {
    U3_RDC7_Inicialize();
    $(".U3_B7").show();
    $(".U3_B7_RDC7").show();
    $(".U3_RDC7_P1_Activities").show();
    $(".U3_P1_RDC7_ButtonNext").hide();
    $(".U3_P1_RDC7_ButtonBack").hide();
    blinkElement2("U3_P1_RDC7_ButtonAudio", true);
    blinkElement2("U3_P1_RDC7_ButtonActivity1", true);
}

function U3_RDC7_GoActivities() {
    $(".U3_P1_RDC7_ButtonActivity1").on("click", function (e) {
        $(".U3_P1_RDC7_ButtonBack").show();
        $(".U3_P1_RDC7_ButtonNext").show();
        $(".U3_RDC7_P1_Activities").hide();
        $(".U3_RDC7_ACT_1_P1").show();
        blinkElement2("U3_P1_RDC7_ButtonAudio", true);
        blinkElement2("U3_P1_RDC7_ButtonNext", true);
    });
    $(".U3_P1_RDC7_ButtonActivity2").on("click", function (e) {
        blinkElement2("U3_P1_RDC7_ButtonNext", true);
        $(".U3_P1_RDC7_ButtonBack").show();
        $(".U3_P1_RDC7_ButtonNext").show();
        $(".U3_RDC7_P1_Activities").hide();
        $(".U3_RDC7_ACT_2_P1").show();
    });
}

function U3_RDC7_ButtonHome() {
    $(".U3_P1_RDC7_ButtonHome").on("click", function (e) {
        U3_RDC7_SoundReproducing2.pause();
        U3_RDC7_SoundReproducing2.currentTime = 0;
        U3_RDC7_SoundReproducing1.pause();
        U3_RDC7_SoundReproducing1.currentTime = 0;
        U3_RDC7_SoundReproducing3.pause();
        U3_RDC7_SoundReproducing3.currentTime = 0;
        U3_RDC7_SoundReproducing4.pause();
        U3_RDC7_SoundReproducing4.currentTime = 0;
        U3_RDC7_SoundReproducing5.pause();
        U3_RDC7_SoundReproducing5.currentTime = 0;
        U3_RDC7_SoundReproducing6.pause();
        U3_RDC7_SoundReproducing6.currentTime = 0;
        U3_RDC7_SoundReproducing7.pause();
        U3_RDC7_SoundReproducing7.currentTime = 0;
        $(".U3_P1_RDC7_ButtonNext").hide();
        $(".U3_P1_RDC7_ButtonBack").hide();
        if ($(".U3_RDC7_P1_Activities").is(":visible")) {//Ir a Unidad 3
            $(".U3_RDC7_P1_Activities").hide();
            $(".U3_B7_RDC7").hide();
            $(".U3_B7").hide();
            U3_RDC7_infoView=new Array(0,0,0,0,0,0,0);
            title_initUnit3();

        } else {
            U3_RDC7_Inicialize();
            $(".U3_B7").show();
            $(".U3_B7_RDC7").show();
            $(".U3_RDC7_P1_Activities").show();
        }
        $(".title-nav-top-unit-2").css("left","52.6%");
        $(".title-nav-top-unit-1").css("left","43.6%");
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

function U3_RDC7_ButtonNext() {
    $(".U3_P1_RDC7_ButtonNext").on("click", function (e) {
        blinkElement2("U3_P1_RDC7_ButtonNext", false);
        //Actividad 1
        if ($(".U3_RDC7_ACT_1_P1").is(":visible")) {//Ir a P2 A1
            $(".U3_RDC7_ACT_1_P1").hide();
            $(".U3_RDC7_ACT_1_P2").show();
            blinkElement2("U3_P1_RDC7_ButtonAudio", true);
        } else if ($(".U3_RDC7_ACT_1_P3").is(":visible")) {//Ir a ACTIVIDADES
            $(".U3_RDC7_ACT_1_P3").hide();
            $(".U3_RDC7_P1_Activities").show();
            $(".U3_P1_RDC7_ButtonNext").hide();
            $(".U3_P1_RDC7_ButtonBack").hide();
        } else if (($(".U3_RDC7_ACT_1_P2").is(":visible")) && ($(".U3_P2_RDC7_ACT_1_PopUpRoulette").is(":visible")) && (($(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").is(":hidden")) && ($(".U3_P2_RDC7_ACT_1_PopUpInformationActividad1").is(":hidden")) && ($(".U3_P2_RDC7_ACT_1_PopUpInformationActividad2").is(":hidden")))) {//Ir a Pop-Up
            $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").show();
            $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad1").show();
            $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad2").show();
        } else if (($(".U3_RDC7_ACT_1_P2").is(":visible")) && ($(".U3_P2_RDC7_ACT_1_PopUpRoulette").is(":visible")) && (($(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").is(":visible")) || ($(".U3_P2_RDC7_ACT_1_PopUpInformationActividad1").is(":visible")) || ($(".U3_P2_RDC7_ACT_1_PopUpInformationActividad2").is(":visible")))) {//Ir a Actividad Pop-Up
            $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad").hide();
            $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad1").hide();
            $(".U3_P2_RDC7_ACT_1_PopUpInformationActividad2").hide();
            $(".U3_P2_RDC7_ACT_1_Video").trigger("pause");
            $(".U3_P2_RDC7_ACT_1_PopUpRoulette").hide();
            if ((U3_RDC7_infoView[0] == 1) && (U3_RDC7_infoView[1] == 1) && (U3_RDC7_infoView[2] == 1) && (U3_RDC7_infoView[3] == 1) && (U3_RDC7_infoView[4] == 1) && (U3_RDC7_infoView[5] == 1) && (U3_RDC7_infoView[6] == 1)) {
                blinkElement2("U3_P1_RDC7_ButtonNext", true);
            }
        } else if ($(".U3_RDC7_ACT_1_P2").is(":visible")) {//Ir a P3 A1
            if ((U3_RDC7_infoView[0] == 1) && (U3_RDC7_infoView[1] == 1) && (U3_RDC7_infoView[2] == 1) && (U3_RDC7_infoView[3] == 1) && (U3_RDC7_infoView[4] == 1) && (U3_RDC7_infoView[5] == 1) && (U3_RDC7_infoView[6] == 1)) {
                $(".U3_RDC7_ACT_1_P2").hide();
                $(".U3_RDC7_ACT_1_P3").show();
                blinkElement2("U3_P1_RDC7_ButtonAudio", true);
                blinkElement2("U3_P1_RDC7_ButtonNext", true);
                blinkElement2("U3_P1_RDC7_ButtonActivity1", false);
                blinkElement2("U3_P1_RDC7_ButtonActivity2", true);
            }
        }
        //Actividad 2
        else if ($(".U3_RDC7_ACT_2_P1").is(":visible")) {//Ir a P2 A1
            $(".U3_RDC7_ACT_2_P1").hide();
            $(".U3_RDC7_ACT_2_P2").show();
        } else if ($(".U3_RDC7_ACT_2_P2").is(":visible")) {//Ir a P3 A1
            $(".U3_RDC7_ACT_2_P2").hide();
            $(".U3_RDC7_ACT_2_P3").show();
            $(".U3_P1_RDC7_ButtonAudio").hide();
        } else if ($(".U3_RDC7_ACT_2_P3").is(":visible")) {//Ir a P4 A1
            $(".U3_RDC7_ACT_2_P3").hide();
            $(".U3_RDC7_ACT_2_P4").show();
            $(".U3_P1_RDC7_ButtonAudio").show();
            blinkElement2("U3_P1_RDC7_ButtonAudio", true);
            blinkElement2("U3_P1_RDC7_ButtonNext", true);
        } else if ($(".U3_RDC7_ACT_2_P4").is(":visible")) {//Ir a Actividades
            $(".U3_RDC7_ACT_2_P4").hide();
            $(".U3_RDC7_P1_Activities").show();
            $(".U3_P1_RDC7_ButtonNext").hide();
            $(".U3_P1_RDC7_ButtonBack").hide();
            blinkElement2("U3_P1_RDC7_ButtonActivity1", false);
            blinkElement2("U3_P1_RDC7_ButtonActivity2", false);
            blinkElement2("U3_P1_RDC7_ButtonAudio", true);
        }
    });
}

function U3_RDC7_ButtonBack() {
    $(".U3_P1_RDC7_ButtonBack").on("click", function (e) {
        blinkElement2("U3_P1_RDC7_ButtonNext", false);
        //Actividad 1
        if ($(".U3_RDC7_ACT_1_P1").is(":visible")) {//Ir a Actividades
            $(".U3_RDC7_P1_Activities").show();
            $(".U3_RDC7_ACT_1_P1").hide();
            $(".U3_P1_RDC7_ButtonNext").hide();$(".U3_P1_RDC7_ButtonBack").hide();
        } else if ($(".U3_RDC7_ACT_1_P2").is(":visible")) {//Ir a P1-A1
            if (($(".U3_P2_RDC7_ACT_1_PopUpRoulette").is(":hidden"))) {
                $(".U3_RDC7_ACT_1_P1").show();
                $(".U3_RDC7_ACT_1_P2").hide();
                blinkElement2("U3_P1_RDC7_ButtonNext", true);
            }
        } else if ($(".U3_RDC7_ACT_1_P3").is(":visible")) {//Ir a P2-A1
            $(".U3_RDC7_ACT_1_P2").show();
            $(".U3_RDC7_ACT_1_P3").hide();
        }
        //Actividad 2
        else if ($(".U3_RDC7_ACT_2_P1").is(":visible")) {//Ir a Actividades
            $(".U3_RDC7_P1_Activities").show();
            $(".U3_RDC7_ACT_2_P1").hide();
            $(".U3_P1_RDC7_ButtonNext").hide();$(".U3_P1_RDC7_ButtonBack").hide();
        } else if ($(".U3_RDC7_ACT_2_P2").is(":visible")) {//Ir a P1-A1
            $(".U3_RDC7_ACT_2_P1").show();
            $(".U3_RDC7_ACT_2_P2").hide();
        } else if ($(".U3_RDC7_ACT_2_P3").is(":visible")) {//Ir a P2-A1
            blinkElement2("U3_P1_RDC7_ButtonAudio", true);
            blinkElement2("U3_P1_RDC7_ButtonNext", true);
            $(".U3_RDC7_ACT_2_P2").show();
            $(".U3_RDC7_ACT_2_P3").hide();
        } else if ($(".U3_RDC7_ACT_2_P4").is(":visible")) {//Ir a P3-A1
            $(".U3_RDC7_ACT_2_P3").show();
            $(".U3_RDC7_ACT_2_P4").hide();
            blinkElement2("U3_P1_RDC7_ButtonActivity1", false);
            blinkElement2("U3_P1_RDC7_ButtonActivity2", false);
        }
    });
}
