/**
 * Created by Benji on 31/12/2015.
 */
var contador2 = 1;
var contadorError = 0;

function cerrarCuadroDialogo(){
    $("#conooDestello").css("visibility", "hidden");
    $("#cuboDestello").css("visibility", "hidden");
    $("#piramideDestello").css("visibility", "hidden");
    $("#cilindroDestello").css("visibility", "hidden");
    $("#frameTransparent2").css("visibility", "hidden");
    $("#mostrarCono").css("visibility", "hidden");
    $("#mostrarCubo").css("visibility", "hidden");
    $("#mostrarCilindro").css("visibility", "hidden");
    $("#mostrarPiramide").css("visibility", "hidden");
    $("#respuestaCorrecta").css("visibility", "hidden");
    $("#correct").css("visibility", "hidden");
    if (contador2==2){
        $("#pregunta1").html("2.-¿Dónde está la pirámide?");
    }else if(contador2==3){
        $("#pregunta1").html("3.- ¿Dónde está el cubo?");
    }else if(contador2==4){
        $("#pregunta1").html("4.- ¿Dónde está el cilindro?");
    }else  if(contador2==5){
        $("#pregunta1").empty();
        $("#siguienteButt").css("visibility", "visible");
        $("#cono").css("pointer-events", "none");
        $("#piramide").css("pointer-events", "none");
        $("#cilindro").css("pointer-events", "none");
        $("#cubo").css("pointer-events", "none");
    }
}

function validarFiguras(idFigura) {
    if (contador2 == 1 && idFigura == 1) {
        $("#conooDestello").css("visibility", "visible");
        $("#frameTransparent2").css("visibility", "visible");
        $("#mostrarCono").css("visibility", "visible");
        $("#correct").css("visibility", "visible");
        $("#pregunta1").empty();
        contador2++;
        contadorError=0;
        reproducirSonido(1);
    } else if (contador2 == 2 && idFigura == 2) {
        $("#piramideDestello").css("visibility", "visible");
        $("#frameTransparent2").css("visibility", "visible");
        $("#mostrarPiramide").css("visibility", "visible");
        $("#correct").css("visibility", "visible");
        $("#pregunta1").empty();
        contador2++;
        contadorError=0;
        reproducirSonido(1);
    }
    else if (contador2 == 3 && idFigura == 3) {
        $("#cuboDestello").css("visibility", "visible");
        $("#frameTransparent2").css("visibility", "visible");
        $("#mostrarCubo").css("visibility", "visible");
        $("#correct").css("visibility", "visible");
        $("#pregunta1").empty();
        contador2++;
        contadorError=0;
        reproducirSonido(1);
    } else if (contador2 == 4 && idFigura == 4) {
        $("#cilindroDestello").css("visibility", "visible");
        $("#frameTransparent2").css("visibility", "visible");
        $("#mostrarCilindro").css("visibility", "visible");
        $("#correct").css("visibility", "visible");
        contador2++;
        contadorError=0;
        reproducirSonido(1);
    } else {
        contadorError++;
        reproducirSonido(0);
        if (contadorError == 2) {
            $("#respuestaCorrecta").css("visibility", "visible");
            if (contador2 == 1) {
                $("#frameTransparent2").css("visibility", "visible");
                $("#mostrarCono").css("visibility", "visible");
                $("#pregunta1").empty();
                $("#conooDestello").css("visibility", "visible");

            } else if (contador2 == 2) {
                $("#frameTransparent2").css("visibility", "visible");
                $("#mostrarPiramide").css("visibility", "visible");
                $("#pregunta1").empty();
                $("#piramideDestello").css("visibility", "visible");
            }
            else if (contador2 == 3) {
                $("#frameTransparent2").css("visibility", "visible");
                $("#mostrarCubo").css("visibility", "visible");
                $("#pregunta1").empty();
                $("#cuboDestello").css("visibility", "visible");
            } else if (contador2 == 4) {
                $("#frameTransparent2").css("visibility", "visible");
                $("#mostrarCilindro").css("visibility", "visible");
                $("#pregunta1").empty();
                $("#cilindroDestello").css("visibility", "visible");
            }
            contador2++;
            contadorError = 0;
        }else {
            $("#intentaNuevamente1").css("visibility", "visible");
            setTimeout(function inicio() {
                $("#intentaNuevamente1").css("visibility", "hidden");
            }, 2000)
        }
    }
}