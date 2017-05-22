/* 
 *En este archivo solo se encuentran funciones para las pantallas de RDC3
 */

var U1_RDC3_next="";
var U1_RDC3_back="";
var U1_RDC3_now ="";
var U1_RDC3_ACT1aud=true;
/*$(document).ready(function () {
    
    U1_RDC3_P1();
    //U1_RDC3_ACT2_P1_ID();
    $("#U1_RDC3_btn_back").click(function() {
        backp();
    });
    $("#U1_RDC3_btn_forward").click(function() {
        nextp();
    });
    
});*/
function RDC3_CLEAR_ALL(){
    
    $("#U1_RDC3_P0").hide();
    $("#U1_RDC3_ACT1_P1").hide();
    $("#U1_RDC3_ACT1_P2").hide();
    
    $("#U1_RDC3_ACT1_P2_popUp_activismo").hide();
    $("#U1_RDC3_ACT1_P2_popUp_erosion").hide();
    $("#U1_RDC3_ACT1_P2_popUp_simposio").hide();
    $("#U1_RDC3_ACT1_P2_popUp_mermar").hide();
    $("#U1_RDC3_ACT1_P2_popUp_arraigar").hide();
    $("#U1_RDC3_ACT1_P2_popUp_degradar").hide();
    $("#U1_RDC3_ACT1_P2_popUp_deforestar").hide();
    $("#U1_RDC3_ACT1_P2_popUp_beneplacito").hide();
    
    $("#U1_RDC3_ACT1_P3").hide();
    $("#U1_RDC3_ACT1_P4").hide();
    $("#U1_RDC3_ACT1_P5").hide();
    $("#U1_RDC3_ACT1_P6").hide();
    $("#U1_RDC3_ACT1_P7").hide();
    $("#U1_RDC3_ACT1_P8").hide();
    $("#U1_RDC3_ACT1_P9").hide();
    $("#U1_RDC3_ACT1_P10").hide();
    
    
    $("#U1_RDC3_ACT2_P1").hide();
    $("#U1_RDC3_ACT2_P2").hide();
    $("#U1_RDC3_ACT2_P3").hide();
    
    
    
    
    
}
//pantallas de la rdc1
function U1_RDC3_P1(){
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_btn_bocina").show();
    $("#U1_RDC3_P0").show();
    
    $("#U1_RDC3_P1_btn_1_id").click(function() {
    
        U1_RDC3_ACT1_P1_ID();
    });
    
    $("#U1_RDC3_P1_btn_2_id").click(function() {
        U1_RDC3_ACT2_P1_ID();
    });
    $("#U1_RDC3_btn_bocina").unbind('click');
    $("#U1_RDC3_btn_bocina").click(function() {
        if(U1_RDC3_ACT1aud){
            U1_RDC3_ACT1aud=false;
            $("#RDC3_P1_1").trigger("play");
        }
    });
    $("#RDC3_P1_1").bind("ended",function(){
        U1_RDC3_ACT1aud=true;
    });
    
    
}
function rdc3_nextp(){
    
    $('audio').each(function() {
     
        this.pause();
        this.currentTime=0;
     
    });
    U1_RDC3_ACT1aud=true;
    eval( U1_RDC3_next );  
   
}
function rdc3_backp(){
    $('audio').each(function() {
        this.pause();
        this.currentTime=0;
    });
    U1_RDC3_ACT1aud=true;
    eval( U1_RDC3_back );
    
}