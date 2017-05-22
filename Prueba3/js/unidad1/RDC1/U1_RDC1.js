/* 
 *En este archivo solo se encuentran funciones para las pantallas de RDC1
 */

var U1_RDC1_next="";
var U1_RDC1_back="";
var U1_RDC1_now ="";
var U1_RDC1_ACT1aud=true;
/*$(document).ready(function () {
    
    //U1_RDC1_P1();
    U1_RDC1_ACT1_P7_ID();
    $("#back_id").click(function() {
        backp();
    });
    $("#forward_id").click(function() {
        nextp();
    });
    
});*/
function RDC1_CLEAR_ALL(){
    
    $("#U1_RDC1_P0").hide();
    $("#U1_RDC1_ACT1_P1").hide();
    $("#U1_RDC1_ACT1_P2").hide();
    $("#U1_RDC1_ACT1_P2_popUp_diluvio").hide();
    $("#U1_RDC1_ACT1_P2_popUp_formidable").hide();
    $("#U1_RDC1_ACT1_P2_popUp_hostilizar").hide();
    $("#U1_RDC1_ACT1_P2_popUp_penalidad").hide();
    $("#U1_RDC1_ACT1_P3").hide();
    $("#U1_RDC1_ACT1_P4").hide();
    $("#U1_RDC1_ACT1_P5").hide();
    $("#U1_RDC1_ACT1_P6").hide();
    $("#U1_RDC1_ACT1_P7").hide();
    $("#U1_RDC1_ACT1_P8").hide();
    $("#U1_RDC1_ACT1_P9").hide();
    $("#U1_RDC1_ACT1_P10").hide();
    $("#U1_RDC1_ACT1_P11").hide();
    $("#U1_RDC1_ACT1_P12").hide();
    
    $("#U1_RDC1_ACT2_P1").hide();
    $("#U1_RDC1_ACT2_P2").hide();
    $("#U1_RDC1_ACT2_P3").hide();
    $("#U1_RDC1_ACT2_P4").hide();
    
    $("#U1_RDC1_P2").hide();
    $("#U1_RDC1_ACT1_P2_Q4").hide();
    
    
}
//pantallas de la rdc1
function U1_RDC1_P1(){
    RDC1_CLEAR_ALL();
    $("#U1_RDC1_btn_bocina").show();
    $("#U1_RDC1_P0").show();
    
    $("#U1_RDC1_ACT1_P1_btn_1").click(function() {
    
        U1_RDC1_ACT1_P1_ID();
    });
    
    $("#U1_RDC1_ACT1_P1_btn_2").click(function() {
        U1_RDC1_ACT2_P1_ID();
    });
    $("#U1_RDC1_btn_bocina").click(function() {
        if(U1_RDC1_ACT1aud){
            U1_RDC1_ACT1aud=false;
            $("#RDC1_P1_1").trigger("play");
        }
    });
    $("#RDC1_P1_1").bind("ended",function(){
        U1_RDC1_ACT1aud=true;
    });
    
    
}
function nextp(){
    
    $('audio').each(function() {
     if(!this.paused){
        this.stop();
     }
    });
    U1_RDC1_ACT1aud=true;
    eval( U1_RDC1_next );  
   
}
function backp(){
    $('audio').each(function() {
     if(!this.paused){
        this.stop();
     }
    });
    U1_RDC1_ACT1aud=true;
    eval( U1_RDC1_back );
    
}