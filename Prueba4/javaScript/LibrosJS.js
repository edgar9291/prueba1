// JavaScript Document
var contadorx = 0;
var contadorx2 = 0;

$(document).ready(function () {
});
function iniciar2() {
    if (contadorx == 0) {
        $("#figure1").css("pointer-events", "visible");
        $("#figure2").css("pointer-events", "visible");
        $("#figure3").css("pointer-events", "visible");
        $("#figure4").css("pointer-events", "visible");
        $("#figure5").css("pointer-events", "visible");
        $("#start").css("visibility", "hidden");
        $("#letras").empty();
        $("#letras").html("1.- ¿Qué libro está en posición  horizontal y  detrás del resto de los libros");
        contadorx++;
        contadorx2 = 0;
    }
}

function logica(idFigura) {
    if (idFigura == "1" && contadorx == 1) {
        reproducirSonido(1);
        $("#logica1").css("visibility", "visible");
        $("#cierto").css("visibility", "visible");
        $("#frameTransparent3").css("visibility", "visible");
        contadorx++;
        contadorx2 = 0;
        setTimeout(function logica() {
            $("#logica1").css("visibility", "hidden");
            $("#cierto").css("visibility", "hidden");
            $("#frameTransparent3").css("visibility", "hidden");
            $("#letras").empty();
            $("#letras").html("2.- ¿Qué libro está a la derecha del libro verde y delante de un libro");
        }, 4000);

    }
    else if (idFigura == "2" && contadorx == 2) {
        reproducirSonido(1);
        $("#logica2").css("visibility", "visible");
        $("#cierto").css("visibility", "visible");
        $("#frameTransparent3").css("visibility", "visible");
        contadorx++;
        contadorx2 = 0;
        setTimeout(function logica() {
            $("#cierto").css("visibility", "hidden");
            $("#logica2").css("visibility", "hidden");
            $("#frameTransparent3").css("visibility", "hidden");
            $("#letras").empty();
            $("#letras").html("3.-¿Qué libro está a la izquierda del libro naranjo y delante de un libro");
        }, 4000);

    }
    else if (idFigura == "3" && contadorx == 3) {
        reproducirSonido(1);
        $("#logica3").css("visibility", "visible");
        $("#cierto").css("visibility", "visible");
        $("#frameTransparent3").css("visibility", "visible");
        contadorx++;
        contadorx2 = 0;
        setTimeout(function logica() {
            $("#cierto").css("visibility", "hidden");
            $("#logica3").css("visibility", "hidden");
            $("#frameTransparent3").css("visibility", "hidden");
            $("#letras").empty();
            $("#letras").html("4.- ¿Que libro está a la atrás de un libro verde y de posición vertical");
        }, 4000);

    }

    else if (idFigura == "4" && contadorx == 4) {
        reproducirSonido(1);
        $("#logica4").css("visibility", "visible");
        $("#cierto").css("visibility", "visible");
        $("#frameTransparent3").css("visibility", "visible");
        contadorx=0;
        contadorx2 = 0;
        setTimeout(function logica() {
            $("#letras").empty();
            $("#frameTransparent3").css("visibility", "hidden");
            $("#cierto").css("visibility", "hidden");
            $("#logica4").css("visibility", "hidden");
            $("#siguen").css("visibility", "visible");
        }, 2000);

    }

    else {
        reproducirSonido(0);
        contadorx2++;
        if (contadorx2 < 2) {
            $("#dime").css("visibility", "visible");
            setTimeout(function logica() {
                $("#dime").css("visibility", "hidden");
            }, 2000);
        }
        else {
            if (contadorx == 1) {
                $("#logica1").css("visibility", "visible");
                $("#ResponseCorrect").css("visibility", "visible");
                $("#frameTransparent3").css("visibility", "visible");
                setTimeout(function logica() {
                    $("#logica1").css("visibility", "hidden");
                    $("#ResponseCorrect").css("visibility", "hidden");
                    $("#frameTransparent3").css("visibility", "hidden");
                    $("#letras").empty();
                    $("#letras").html("2.- ¿Qué libro está a la derecha del libro verde y delante de un libro");
                }, 4000);
                contadorx++;
                contadorx2 = 0;
            }
            else if (contadorx == 2) {
                $("#logica2").css("visibility", "visible");
                $("#ResponseCorrect").css("visibility", "visible");
                $("#frameTransparent3").css("visibility", "visible");
                setTimeout(function logica() {
                    $("#ResponseCorrect").css("visibility", "hidden");
                    $("#logica2").css("visibility", "hidden");
                    $("#frameTransparent3").css("visibility", "hidden");
                    $("#letras").empty();
                    $("#letras").html("3.-¿Qué libro está a la izquierda del libro naranjo y delante de un libro");
                }, 4000);
                contadorx++;
                contadorx2 = 0;

            }
            else if (contadorx == 3) {
                $("#logica3").css("visibility", "visible");
                $("#ResponseCorrect").css("visibility", "visible");
                $("#frameTransparent3").css("visibility", "visible");
                setTimeout(function logica() {
                    $("#ResponseCorrect").css("visibility", "hidden");
                    $("#logica3").css("visibility", "hidden");
                    $("#frameTransparent3").css("visibility", "hidden");
                    $("#letras").empty();
                    $("#letras").html("4.- ¿Que libro está a la atrás de un libro verde y de posición vertical");
                }, 4000);
                contadorx++;
                contadorx2 = 0;


            }
            else if (contadorx == 4) {
                $("#logica4").css("visibility", "visible");
                $("#ResponseCorrect").css("visibility", "visible");
                $("#frameTransparent3").css("visibility", "visible");
                setTimeout(function logica() {
                    $("#letras").empty();
                    $("#frameTransparent3").css("visibility", "hidden");
                    $("#ResponseCorrect").css("visibility", "hidden");
                    $("#logica4").css("visibility", "hidden");
                    $("#siguen").css("visibility", "visible");
                }, 2000);
                contadorx=0;
                contadorx2 = 0;

            }
        }


    }
}

