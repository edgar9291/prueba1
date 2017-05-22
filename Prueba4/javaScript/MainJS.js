var contador = 0;
var contadorEjercicio = 1;
var correctoYa = 0;
var errorResponse;
var correctResponse;
var sonidoInicio;
var sonidoPerro;
var sonidoCono;
var sonidoFiguras;
var audio5;

function goFollowing(){
    $("#siguen").css("visibility", "hidden");
    $("#figura1").css("visibility", "hidden");
    $("#figura2").css("visibility", "hidden");
    $("#figura3").css("visibility", "hidden");
    $("#figura4").css("visibility", "hidden");
    $("#figura5").css("visibility", "hidden");
    $("#figura6").css("visibility", "hidden");
    $("#divMainGeometria").css("visibility", "hidden");
    $("#divMainPosiciones").css("visibility", "hidden");
    $("#divMainGeometria2").css("visibility", "hidden");
    $("#divMainPosiciones2").css("visibility", "hidden");
    $("#start").css("visibility","hidden");
    $("#siguiente1").css("visibility","hidden");
    $("#siguienteButt").css("visibility","hidden");
    $("#siguiente12").css("visibility","hidden");
    $("#siguiente").css("visibility","hidden");
    $("#pie").css("visibility","hidden");
}

function inicioIndex(){
    goFollowing();
    $("#divMainIndex").css("visibility", "visible");
}

function goPosicionesFiguras() {
    goFollowing();
    $("#iniciar").css("visibility", "visible");
    $("#iniciar").css("pointer-events", "none");
    sonidoFiguras.load();
    sonidoFiguras.play();
    setTimeout(function () {
        $("#iniciar").css("pointer-events", "visible");
    }, 4200);
    $("#iniciar").css("visibility", "visible");
    $("#figura1").css("visibility", "visible");
    $("#figura2").css("visibility", "visible");
    $("#figura3").css("visibility", "visible");
    $("#figura4").css("visibility", "visible");
    $("#figura5").css("visibility", "visible");
    $("#figura6").css("visibility", "visible");
    $("#divMainIndex").css("visibility", "hidden");
    $("#divMainGeometria").css("visibility", "visible");
    $("#divMainPosiciones").css("visibility", "hidden");
    $("#divMainGeometria2").css("visibility", "hidden");
    $("#divMainPosiciones2").css("visibility", "hidden");
    contador1 = 0;
    contadorError = 0;
}

function goPerros() {
    goFollowing();
    sonidoPerro.load();
    sonidoPerro.play();
    $("#pie").css("visibility","visible");
    $("#divMainIndex").css("visibility", "hidden");
    $("#divMainPosiciones").css("visibility", "visible");
    $("#divMainGeometria").css("visibility", "hidden");
    $("#").css("visibility", "hidden");
    $("#divMainGeometria2").css("visibility", "hidden");
    $("#divMainPosiciones2").css("visibility", "hidden");
    $("#pelota").css("top","");
    $("#pelota").css("left","");
    $("#perro").css("top","");
    $("#perro").css("left","");
    $("#faro").css("top","");
    $("#faro").css("left","");
    $("#roca").css("top","");
    $("#roca").css("left","");
    $("#pregunta").empty();
    $("#pregunta").append("Arrastra el perro a la derecha del banco");
    $("#pregunta").css("visibility", "visible");
    contador=0;
    contadorEjercicio = 1;
    setTimeout(function inicio() {
        $("#pelota").css("pointer-events", "visible");
        $("#perro").css("pointer-events", "visible");
        $("#faro").css("pointer-events", "visible");
        $("#roca").css("pointer-events", "visible");
    }, 7000)
}

function goPosicionesMesa() {
    goFollowing();
    audio5.load();
    audio5.play();
    $("#start").css("visibility", "visible");
    $("#start").css("pointer-events", "none");
    $("#figure1").css("pointer-events", "none");
    $("#figure2").css("pointer-events", "none");
    $("#figure3").css("pointer-events", "none");
    $("#figure4").css("pointer-events", "none");
    $("#figure5").css("pointer-events", "none");
    setTimeout(function () {
        $("#start").css("pointer-events", "visible");
    }, 4000);
    $("#divMainPosiciones2").css("visibility", "visible");
    $("#divMainIndex").css("visibility", "hidden");
    $("#divMainGeometria").css("visibility", "hidden");
    $("#divMainPosiciones").css("visibility", "hidden");
    $("#divMainGeometria2").css("visibility", "hidden");
}

function goFigurasCasa() {
    goFollowing();
    sonidoCono.load();
    sonidoCono.play();
    contador2 = 1;
    contadorError = 0;
    $("#cono").css("pointer-events", "none");
    $("#piramide").css("pointer-events", "none");
    $("#cilindro").css("pointer-events", "none");
    $("#cubo").css("pointer-events", "none");
    $("#divMainIndex").css("visibility", "hidden");
    $("#siguienteButt").css("visibility", "hidden");
    $("#divMainGeometria2").css("visibility", "visible");
    $("#divMainGeometria").css("visibility", "hidden");
    $("#divMainPosiciones").css("visibility", "hidden");
    $("#divMainPosiciones2").css("visibility", "hidden");
    $("#pregunta1").html("1.- ¿Dónde está el cono?");
    setTimeout(function inicio() {
        $("#cono").css("pointer-events", "visible");
        $("#piramide").css("pointer-events", "visible");
        $("#cubo").css("pointer-events", "visible");
        $("#cilindro").css("pointer-events", "visible");

    }, 6700)
}

function desbloquearOpciones(idOpcion) {
    if (idOpcion == 1) {
        $("#posicionesEjercicio").css("pointer-events", "visible");
        $("#geometriaEjercicio").css("pointer-events", "visible");
        $("#start").css("visibility", "hidden");
    }
}


$(document).ready(inicio);

function inicio() {
    errorResponse = document.createElement('audio');
    errorResponse.setAttribute('src', 'sound/Error.mp3');
    correctResponse = document.createElement('audio');
    correctResponse.setAttribute('src', 'sound/Correct.mp3');
    sonidoInicio = document.createElement('audio');
    sonidoInicio.setAttribute('src', 'sound/1.mp3');
    sonidoPerro = document.createElement('audio');
    sonidoPerro.setAttribute('src', 'sound/perro.mp3');
    sonidoCono = document.createElement('audio');
    sonidoCono.setAttribute('src', 'sound/pinoP.mp3');
    sonidoFiguras = document.createElement('audio');
    sonidoFiguras.setAttribute('src', 'sound/figuras.mp3');
    audio5 = document.createElement('audio');
    audio5.setAttribute('src', 'sound/354.mp3');
    sonidoInicio.load();
    sonidoInicio.play();
    $("#start").css("visibility", "hidden");
    setTimeout(function inicio() {
        desbloquearOpciones(1)
    }, 4000)

    $("#faro").draggable();
    $("#pelota").draggable();
    $("#perro").draggable();
    $("#roca").draggable();

    /*$("#sueltame").droppable({
     drop: onSuelta, accept: "#pelota", drop: function (event, ui) {
     alert("error");
     }
     });*/

    $("#sueltame").droppable({
        drop: onSuelta, accept: "#perro", drop: function (event, ui) {
            $("#muybien").css("visibility", "visible");
            if (contadorEjercicio == 1) {
                $("#perro").css("pointer-events", "none");
                correctoYa = 1;
                correctResponse.load();
                correctResponse.play();
                setTimeout(function inicio() {
                    if (contadorEjercicio == 1) {
                        $("#muybien").css("visibility", "hidden");
                        $("#pregunta").empty();
                        $("#pregunta").append("Arrastra la pelota amarilla a la izquierda del árbol");
                        correctoYa = 0;
                        contador = 0;
                        contadorEjercicio++;
                    }
                }, 1000)
            } else {
                $("#perro").animate({top: "62%", left: "5%"}, 'slow');
                errorResponse.load();
                errorResponse.play();
                contadorError++;
                if (contador == 2) {
                    error();
                }
            }

        }
    });

    $("#sueltame2").droppable({
        drop: onSuelta2, accept: "#pelota", drop: function (event, ui) {
            if (contadorEjercicio == 2) {
                $("#pelota").css("pointer-events", "none");
                correctoYa = 1;
                $("#muybien").css("visibility", "visible");
                correctResponse.load();
                correctResponse.play();
                setTimeout(function inicio() {
                    if (contadorEjercicio == 2) {
                        $("#muybien").css("visibility", "hidden");
                        $("#pregunta").empty();
                        $("#pregunta").append("Arrastra el faro a la izquierda del niño");
                        correctoYa = 0;
                        contador = 0;
                        contadorEjercicio++;
                    }
                }, 1000)
            } else {
                $("#pelota").animate({top: "75%", left: "85%"}, 'slow');//O
                errorResponse.load();
                errorResponse.play();
                contadorError++;
                if (contador == 2) {
                    error();
                }
            }
        }
    });

    $("#sueltame3").droppable({
        drop: onSuelta3, accept: "#faro", drop: function (event, ui) {
            if (contadorEjercicio == 3) {
                $("#faro").css("pointer-events", "none");
                correctoYa = 1;
                $("#muybien").css("visibility", "visible");
                correctResponse.load();
                correctResponse.play();
                setTimeout(function inicio() {
                    if (contadorEjercicio == 3) {
                        $("#muybien").css("visibility", "hidden");
                        $("#pregunta").empty();
                        $("#pregunta").append("Arrastra la roca a la derecha de la niña");
                        correctoYa = 0;
                        contador = 0;
                        contadorEjercicio++;
                    }
                }, 1000)
            } else {
                $("#faro").animate({top: "14%", left: "25%"}, 'slow');//0
                errorResponse.load();
                errorResponse.play();
                contadorError++;
                if (contador == 2) {
                    error();
                }
            }
        }
    });

    $("#sueltame4").droppable({
        drop: onSuelta4, accept: "#roca", drop: function (event, ui) {
            if (contadorEjercicio == 4) {
                $("#roca").css("pointer-events", "none");
                correctoYa = 1;
                $("#muybien").css("visibility", "visible");
                correctResponse.load();
                correctResponse.play();
                setTimeout(function inicio() {
                    if (contadorEjercicio == 4) {
                        $("#muybien").css("visibility", "hidden");
                        $("#pregunta").empty();
                        $("#pregunta").append("Vamos al siguiente modulo");
                        correctoYa = 0;
                        contador = 0;
                        contadorEjercicio++;
                        $("#pie").css("visibility", "visible");
                        $("#pregunta").css("visibility", "hidden");
                        $("#siguiente").css("visibility", "visible");
                    }
                }, 1000)
            } else {
                $("#roca").animate({top: "63%", left: "70%"}, 'slow');//0
                errorResponse.load();
                errorResponse.play();
                contadorError++;
                if (contador == 2) {
                    error();
                }
            }
        }
    });

    $("#divMainPosiciones").droppable({
        drop: onSuelta, accept: "#perro, #pelota, #faro, #roca", drop: function (event, ui) {
            if (correctoYa == 0) {
                $("#intenta").css("visibility", "visible");
                contador++;

                if (contador == 2 && correctoYa == 0) {
                    errorResponse.load();
                    errorResponse.play();
                    contador = 0;
                    if (contadorEjercicio == 1) { //Perro
                        $("#perro").animate({top: "67%", left: "70%"}, 'slow');
                        $("#perro").css("pointer-events", "none");
                        $("#pregunta").empty();
                        $("#pregunta").append("Arrastra la pelota amarilla a la izquierda del árbol");
                        $("#pelota").animate({top: "75%", left: "85%"}, 'slow');//O
                        $("#roca").animate({top: "63%", left: "70%"}, 'slow');//0
                        $("#faro").animate({top: "14%", left: "25%"}, 'slow');//0
                        contadorEjercicio++;
                    } else if (contadorEjercicio == 2) { //Pelota
                        $("#pelota").animate({top: "70%", left: "3%"}, 'slow');
                        $("#pelota").css("pointer-events", "none");
                        $("#pregunta").empty();
                        $("#pregunta").html("Arrastra el faro a la izquierda del niño");
                        $("#roca").animate({top: "63%", left: "70%"}, 'slow');//0
                        $("#faro").animate({top: "14%", left: "25%"}, 'slow');//0
                        contadorEjercicio++;
                    } else if (contadorEjercicio == 3) {//Faro
                        $("#faro").animate({top: "18%", left: "40%"}, 'slow');
                        $("#faro").css("pointer-events", "none");
                        $("#pregunta").empty();
                        $("#pregunta").html("Arrastra la roca a la derecha de la niña");
                        $("#roca").animate({top: "63%", left: "70%"}, 'slow');//0
                        contadorEjercicio++;
                    } else if (contadorEjercicio == 4) {//Roca
                        $("#roca").animate({top: "47%", left: "70%"}, 'slow');
                        $("#roca").css("pointer-events", "none");
                        $("#pregunta").empty();
                        $("#pie").css("visibility", "visible");
                        $("#siguiente").css("visibility", "visible");
                        contadorEjercicio++;
                    }
                }

                if (contadorEjercicio == 1 && contador != 0 && correctoYa == 0) {//Perro
                    errorResponse.load();
                    errorResponse.play();
                    $("#pelota").animate({top: "75%", left: "85%"}, 'slow');//O
                    $("#roca").animate({top: "63%", left: "70%"}, 'slow');//0
                    $("#faro").animate({top: "14%", left: "25%"}, 'slow');//0
                } else if (contadorEjercicio == 2 && contador != 0 && correctoYa == 0) {//Pelota
                    errorResponse.load();
                    errorResponse.play();
                    $("#roca").animate({top: "63%", left: "70%"}, 'slow');//0
                    $("#faro").animate({top: "14%", left: "25%"}, 'slow');//0
                } else if (contadorEjercicio == 3 && contador != 0 && correctoYa == 0) {//Faro
                    errorResponse.load();
                    errorResponse.play();
                    $("#roca").animate({top: "63%", left: "70%"}, 'slow');//0
                } else if (contadorEjercicio == 4 && contador != 0 && correctoYa == 0) {//Roca
                    errorResponse.load();
                    errorResponse.play();
                }

                setTimeout(function inicio() {
                    $("#intenta").css("visibility", "hidden");
                }, 1000)
            }
        }
    });

    function onSueltaBasura() {
        $("#basura").css("background-color", "#CF0");
        $("#pelota").draggable({revert: "valid"});
    }

    function onSuelta() {
        $("#sueltame").css("background-color", "#CF0");
        $("#sueltame").text("Eso es ");
        $("#pelota").draggable({revert: "valid"});
    }

    function onSuelta2() {
        $("#sueltame2").css("background-color", "#CF0");
        $("#sueltame2").text("Eso es ");
    }

    function onSuelta3() {
        $("#sueltame3").css("background-color", "#CF0");
        $("#sueltame3").text("Eso es ");
    }

    function onSuelta4() {
        $("#sueltame4").css("background-color", "#CF0");
        $("#sueltame4").text("Eso es ");
    }

    function error() {
        if (contador == 2 && correctoYa == 0) {
            contador = 0;
            if (contadorEjercicio == 1) { //Perro
                $("#perro").animate({top: "67%", left: "70%"}, 'slow');
                $("#perro").css("pointer-events", "none");
                $("#pregunta").empty();
                $("#pregunta").append("Arrastra la pelota amarilla a la izquierda del árbol");
                $("#pelota").animate({top: "75%", left: "85%"}, 'slow');//O
                $("#roca").animate({top: "63%", left: "70%"}, 'slow');//0
                $("#faro").animate({top: "14%", left: "25%"}, 'slow');//0
                contadorEjercicio++;
            } else if (contadorEjercicio == 2) { //Pelota
                $("#pelota").animate({top: "70%", left: "3%"}, 'slow');
                $("#pelota").css("pointer-events", "none");
                $("#pregunta").empty();
                $("#pregunta").html("Arrastra el faro a la izquierda del niño");
                $("#roca").animate({top: "63%", left: "70%"}, 'slow');//0
                $("#faro").animate({top: "14%", left: "25%"}, 'slow');//0
                contadorEjercicio++;
            } else if (contadorEjercicio == 3) {//Faro
                $("#faro").animate({top: "18%", left: "40%"}, 'slow');
                $("#faro").css("pointer-events", "none");
                $("#pregunta").empty();
                $("#pregunta").html("Arrastra la roca a la derecha de la niña");
                $("#roca").animate({top: "63%", left: "70%"}, 'slow');//0
                contadorEjercicio++;
            } else if (contadorEjercicio == 4) {//Roca
                $("#roca").animate({top: "47%", left: "70%"}, 'slow');
                $("#roca").css("pointer-events", "none");
                $("#pregunta").empty();
                $("#pie").css("visibility", "visible");
                $("#siguiente").css("visibility", "visible");
                contadorEjercicio++;
            }
        }
    }
}

