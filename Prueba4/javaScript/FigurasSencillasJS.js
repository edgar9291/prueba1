// JavaScript Document}
var contador1 = 0;
var contadorError = 0;
$(document).ready(function () {

});

function reproducirSonido(valido) {
    if (valido == 0) {
        errorResponse.load();
        errorResponse.play();
    } else {
        correctResponse.load();
        correctResponse.play();
    }
}

function iniciar() {
    if (contador1 == 0) {
        $("#iniciar").css("visibility", "hidden");
        $("#figura1").css("pointer-events", "visible");
        $("#figura2").css("pointer-events", "visible");
        $("#figura3").css("pointer-events", "visible");
        $("#figura4").css("pointer-events", "visible");
        $("#figura5").css("pointer-events", "visible");
        $("#figura6").css("pointer-events", "visible");
        $("#texto").empty();
        $("#texto").html("1.- ¿Cuerpo geométrico con 6 vértices?")
        contador1++;
    }
}
function respuesta(idFigura) {
    if (idFigura == "1" && contador1 == 3) {
        reproducirSonido(1);
        $("#frameTransparent1").css("visibility", "visible");
        $("#respuesta3").css("visibility", "visible");
        $("#correct2").css("visibility", "visible");
        contador1++;
        contadorError = 0;
    }
    else if (idFigura == "2" && contador1 == 2) {
        reproducirSonido(1);
        $("#frameTransparent1").css("visibility", "visible");
        $("#respuesta2").css("visibility", "visible");
        $("#correct2").css("visibility", "visible");
        contador1++;
        contadorError = 0;
    }
    else if (idFigura == "3" && contador1 == 4) {
        reproducirSonido(1);
        $("#frameTransparent1").css("visibility", "visible");
        $("#respuesta4").css("visibility", "visible");
        $("#correct2").css("visibility", "visible");
        contador1++;
        contadorError = 0;
        $("#figura1").css("pointer-events", "none");
        $("#figura2").css("pointer-events", "none");
        $("#figura3").css("pointer-events", "none");
        $("#figura4").css("pointer-events", "none");
        $("#figura5").css("pointer-events", "none");
        $("#figura6").css("pointer-events", "none");
    }

    else if (idFigura == "5" && contador1 == 1) {
        reproducirSonido(1);
        $("#frameTransparent1").css("visibility", "visible");
        $("#respuesta1").css("visibility", "visible");
        $("#correct2").css("visibility", "visible");
        contador1++;
        contadorError = 0;
    }
    else {
        reproducirSonido(0);
        contadorError++;
        if (contadorError == 2) {
            $("#intenta2").css("visibility", "visible");
            if (contador1 == 1) {
                $("#frameTransparent1").css("visibility", "visible");
                $("#respuesta1").css("visibility", "visible");

                contador1++;
                contadorError = 0;
            } else if (contador1 == 2) {
                $("#frameTransparent1").css("visibility", "visible");
                $("#respuesta2").css("visibility", "visible");

                contador1++;
                contadorError = 0;
            } else if (contador1 == 3) {
                $("#frameTransparent1").css("visibility", "visible");
                $("#respuesta3").css("visibility", "visible");

                contador1++;
                contadorError = 0;
            } else if (contador1 == 4) {
                $("#frameTransparent1").css("visibility", "visible");
                $("#respuesta4").css("visibility", "visible");
                contador1++;
                contadorError = 0;

            }
        } else {
            $("#intenta1").css("visibility", "visible");
            setTimeout(function inicio() {
                $("#intenta1").css("visibility", "hidden");
            }, 1500)
        }

        if (contador1 == 5) {
            $("#figura1").css("pointer-events", "none");
            $("#figura2").css("pointer-events", "none");
            $("#figura3").css("pointer-events", "none");
            $("#figura4").css("pointer-events", "none");
            $("#figura5").css("pointer-events", "none");
            $("#figura6").css("pointer-events", "none");
        }

    }
}
function cerrar() {
    $("#respuesta2").css("visibility", "hidden");
    $("#respuesta1").css("visibility", "hidden");
    $("#respuesta3").css("visibility", "hidden");
    $("#respuesta4").css("visibility", "hidden");
    $("#cerrar1").css("visibility", "hidden");
    $("#intenta").css("visibility", "hidden");
    $("#figura1").css("visibility", "visible");
    $("#figura2").css("visibility", "visible");
    $("#figura3").css("visibility", "visible");
    $("#figura4").css("visibility", "visible");
    $("#figura5").css("visibility", "visible");
    $("#figura6").css("visibility", "visible");
}

function closeInformation() {
    $("#frameTransparent1").css("visibility", "hidden");
    $("#respuesta1").css("visibility", "hidden");
    $("#respuesta2").css("visibility", "hidden");
    $("#respuesta3").css("visibility", "hidden");
    $("#respuesta4").css("visibility", "hidden");
    $("#intenta2").css("visibility", "hidden");
    $("#correct2").css("visibility", "hidden");
    if (contador1 == 2) {
        $("#texto").append("<br><br>2.-¿Cuerpo geométrico con 5 caras?");
    } else if (contador1 == 3) {
        $("#texto").append("<br><br>3.-¿cuerpo geométrico con 6 aristas?");
    } else if (contador1 == 4) {
        $("#texto").append("<br><br>4.-¿cuerpo geométrico con 3 caras?");
    }else if (contador1 == 5) {
        $("#siguiente1").css("visibility", "visible");
        $("#texto").empty();
    }

}
