// JavaScript Document
var audio;
var isplay;
var act1=false;
var act2=false;

function over (id){

$("#"+id).show();
//document.getElementById(id).style.display = 'block !important';

}

function out (id){

$("#"+id).hide();
//document.getElementById(id).style.display = 'none !important';


}





function U6_RDC16_P0_loading(){ //*Función carga P0 
    play('U6_RDC16_ACT1_wtspp');
    blinkElement("forward_id",false);
    hide_Nav();
	nav_current = "U6_RDC16_P0";
    if(isplay==true){audio.pause();}
	blinkElement("U6_RDC16_ACT1_P13_hornButton_id",false);
	$('#U6_RDC16_ACT1_textDiv').hide(); 
        
//P0
	$('#U6_RDC16_P0').show(); 
//ACT 1 P1
	$('#U6_RDC16_ACT1_P1').hide(); 
//ACT 1 P2
	$('#U6_RDC16_ACT1_P2').hide(); 
//ACT 1 P3
	$('#U6_RDC16_ACT1_P3').hide(); 
//ACT 1 P4
	$('#U6_RDC16_ACT1_P4').hide(); 
//ACT 1 P5
	$('#U6_RDC16_ACT1_P5').hide(); 
//ACT 1 P6
	$('#U6_RDC16_ACT1_P6').hide(); 
//ACT 1 P7
	$('#U6_RDC16_ACT1_P7').hide();
//ACT 1 P8
	$('#U6_RDC16_ACT1_P8').hide(); 
//ACT 1 P9
	$('#U6_RDC16_ACT1_P9').hide(); 
//ACT 1 P10
	$('#U6_RDC16_ACT1_P10').hide();  
//ACT 1 P11
	$('#U6_RDC16_ACT1_P11').hide();
	$('#U6_RDC16_ACT1_P12').hide();
	$('#U6_RDC16_ACT1_P13').hide();
	////
	hide_Nav();
	
	blinkElement("U6_RDC16_P0_ButtonACT1_id",true);
	blinkElement("U6_RDC16_P0_botton_horn_id",true);
}

function U6_RDC16_ACT1_P1_loading(){ //*Función envia y carga a ACT1P1
	nav_current = $("#U6_RDC16_ACT1_P1").attr('id');
	play('U6_RDC16_ACT1_wtspp');
	$('#U6_RDC16_P0').hide();
	$('#U6_RDC16_ACT1_P1').show();
	show_Nav();
	blinkElement("forward_id",true);
	if(isplay==true){audio.pause();}
	blinkElement("U6_RDC16_ACT1_P1_hornButton_id",true);
	blinkElement("U6_RDC16_P0_ButtonACT1_id",false);
	blinkElement("U6_RDC16_P0_ButtonACT2_id",false);
	blinkElement("U6_RDC16_P0_botton_horn_id",false);
	
	show_Nav();
        
	fun = U6_RDC16_ACT1_P2_loading;
	fun2 = U6_RDC16_P0_loading;
	
}
//Función ACTP2 Video 
function U6_RDC16_ACT1_P2_loading(){
	nav_current = $("#U6_RDC16_ACT1_P2").attr('id');
    if(isplay==true){audio.pause();}
    show_Nav();
    fun = U6_RDC16_ACT1_P3_loading;
    fun2 = U6_RDC16_ACT1_P1_loading;
}

function U6_RDC16_ACT1_P3_loading(){
	nav_current = $("#U6_RDC16_ACT1_P3").attr('id');
     blinkElement("forward_id",false);
     hide_Nav();
    //if(isplay==true){audio.pause();}
    blinkElement("U6_RDC16_ACT1_P3_hornButton_id",true);
    fun = U6_RDC16_ACT1_P4_loading;
    fun2 = U6_RDC16_ACT1_P2_loading;
}

function U6_RDC16_ACT1_P4_loading(){
    play('U6_RDC16_ACT1_wtspp');
     blinkElement("forward_id",true);
     show_Nav();
    if(isplay==true){audio.pause();}
    //pausar video
	blinkElement("U6_RDC16_ACT1_P3_hornButton_id",false);
        blinkElement("U6_RDC16_ACT1_P4_hornButton_id",true);
	fun = U6_RDC16_ACT1_P5_loading;
	fun2 = U6_RDC16_ACT1_P3_loading;
}
function U6_RDC16_ACT1_P5_loading(){
    play('U6_RDC16_ACT1_wtspp');
    if(isplay==true){audio.pause();}
    blinkElement("U6_RDC16_ACT1_P5_hornButton_id",true);
    blinkElement("U6_RDC16_ACT1_P4_hornButton_id",false);
    fun = U6_RDC16_ACT1_P6_loading;
    fun2 = U6_RDC16_ACT1_P4_loading;
}



function U6_RDC16_ACT1_P6_loading(){
    blinkElement("forward_id",false);
    hide_Nav();
    
    if(isplay==true){audio.pause();}
    blinkElement("U6_RDC16_ACT1_P5_hornButton_id",false);
    $('#U6_RDC16_ACT1_P6_correcto_id').hide();
    $('#U6_RDC16_ACT1_P6_incorrecto_id').hide();	
        $( "#U6_RDC16_ACT1_P6_carpeta4_id" ).click(function() {
            //correcta
            show_Nav();
            blinkElement("forward_id",true);
            $('#U6_RDC16_ACT1_P6_correcto_id').show();
            $('#U6_RDC16_ACT1_P6_incorrecto_id').hide();
            //movimiento
        });
        $( "#U6_RDC16_ACT1_P6_carpeta1_id" ).click(function() {
            $('#U6_RDC16_ACT1_P6_correcto_id').hide();     
            $('#U6_RDC16_ACT1_P6_incorrecto_id').show();
        });
        $( "#U6_RDC16_ACT1_P6_carpeta2_id" ).click(function() {
            $('#U6_RDC16_ACT1_P6_correcto_id').hide();      
            $('#U6_RDC16_ACT1_P6_incorrecto_id').show();
        });
        $( "#U6_RDC16_ACT1_P6_carpeta3_id" ).click(function() {
            $('#U6_RDC16_ACT1_P6_correcto_id').hide(); 
            $('#U6_RDC16_ACT1_P6_incorrecto_id').show();
        });
	fun = U6_RDC16_ACT1_P7_loading;
	fun2 = U6_RDC16_ACT1_P5_loading;
}
function U6_RDC16_ACT1_P7_loading(){
    blinkElement("forward_id",false);
    hide_Nav();
    $('#U6_RDC16_ACT1_P7_correcto_id').hide();
    $('#U6_RDC16_ACT1_P7_incorrecto_id').hide();	
        $( "#U6_RDC16_ACT1_P7_carpeta4_id" ).click(function() {
            show_Nav();
            blinkElement("forward_id",true);
            $('#U6_RDC16_ACT1_P7_correcto_id').show();
            $('#U6_RDC16_ACT1_P7_incorrecto_id').hide();
            //movimiento
        });
        $( "#U6_RDC16_ACT1_P7_carpeta1_id" ).click(function() {
            $('#U6_RDC16_ACT1_P7_correcto_id').hide();   
            $('#U6_RDC16_ACT1_P7_incorrecto_id').show();
        });
        $( "#U6_RDC16_ACT1_P7_carpeta2_id" ).click(function() {
            $('#U6_RDC16_ACT1_P7_correcto_id').hide();        
            $('#U6_RDC16_ACT1_P7_incorrecto_id').show();
        });
        $( "#U6_RDC16_ACT1_P7_carpeta3_id" ).click(function() {
            $('#U6_RDC16_ACT1_P7_correcto_id').hide(); 
            $('#U6_RDC16_ACT1_P7_incorrecto_id').show();
        });
	fun = U6_RDC16_ACT1_P8_loading;
	fun2 = U6_RDC16_ACT1_P6_loading;
}
function U6_RDC16_ACT1_P8_loading(){
    blinkElement("forward_id",false);
    hide_Nav();
    $('#U6_RDC16_ACT1_P8_correcto_id').hide();
    $('#U6_RDC16_ACT1_P8_incorrecto_id').hide();	
        $( "#U6_RDC16_ACT1_P8_carpeta2_id" ).click(function() {
            show_Nav();
            blinkElement("forward_id",true);
            $('#U6_RDC16_ACT1_P8_correcto_id').show();
            $('#U6_RDC16_ACT1_P8_incorrecto_id').hide();
            //movimiento
        });
        $( "#U6_RDC16_ACT1_P8_carpeta1_id" ).click(function() {
            $('#U6_RDC16_ACT1_P8_correcto_id').hide(); 
            $('#U6_RDC16_ACT1_P8_incorrecto_id').show();
        });
        $( "#U6_RDC16_ACT1_P8_carpeta3_id" ).click(function() {
            $('#U6_RDC16_ACT1_P8_correcto_id').hide();  
            $('#U6_RDC16_ACT1_P8_incorrecto_id').show();
        });
        $( "#U6_RDC16_ACT1_P8_carpeta4_id" ).click(function() {
            $('#U6_RDC16_ACT1_P8_correcto_id').hide(); 
            $('#U6_RDC16_ACT1_P8_incorrecto_id').show();
        });
	fun = U6_RDC16_ACT1_P9_loading;
	fun2 = U6_RDC16_ACT1_P7_loading;
}
function U6_RDC16_ACT1_P9_loading(){
    blinkElement("forward_id",false);
    hide_Nav();
    $('#U6_RDC16_ACT1_P9_correcto_id').hide();
    $('#U6_RDC16_ACT1_P9_incorrecto_id').hide();	
        $( "#U6_RDC16_ACT1_P9_carpeta1_id" ).click(function() {
            show_Nav();
            blinkElement("forward_id",true);
            $('#U6_RDC16_ACT1_P9_correcto_id').show();
            $('#U6_RDC16_ACT1_P9_incorrecto_id').hide();
            //movimiento
        });
        $( "#U6_RDC16_ACT1_P9_carpeta4_id" ).click(function() {
            //incorrecta     
            $('#U6_RDC16_ACT1_P9_incorrecto_id').show();
            $('#U6_RDC16_ACT1_P9_correcto_id').hide();
        });
        $( "#U6_RDC16_ACT1_P9_carpeta2_id" ).click(function() {
            $('#U6_RDC16_ACT1_P9_correcto_id').hide();         
            $('#U6_RDC16_ACT1_P9_incorrecto_id').show();
        });
        $( "#U6_RDC16_ACT1_P9_carpeta3_id" ).click(function() {
            $('#U6_RDC16_ACT1_P9_correcto_id').hide();
            $('#U6_RDC16_ACT1_P9_incorrecto_id').show();
        });
	fun = U6_RDC16_ACT1_P10_loading;
	fun2 = U6_RDC16_ACT1_P8_loading;
}
function U6_RDC16_ACT1_P10_loading(){
    blinkElement("forward_id",false);
    hide_Nav();
	$('#U6_RDC16_ACT1_P10_correcto_id').hide();
    $('#U6_RDC16_ACT1_P10_incorrecto_id').hide();	
        $( "#U6_RDC16_ACT1_P10_carpeta1_id" ).click(function() {
            show_Nav();
            blinkElement("forward_id",true);
            $('#U6_RDC16_ACT1_P10_correcto_id').show();
            $('#U6_RDC16_ACT1_P10_incorrecto_id').hide();
            //movimiento
        });
        $( "#U6_RDC16_ACT1_P10_carpeta4_id" ).click(function() {
            $('#U6_RDC16_ACT1_P10_correcto_id').hide();   
            $('#U6_RDC16_ACT1_P10_incorrecto_id').show();
        });
        $( "#U6_RDC16_ACT1_P10_carpeta2_id" ).click(function() {
            $('#U6_RDC16_ACT1_P10_correcto_id').hide();         
            $('#U6_RDC16_ACT1_P10_incorrecto_id').show();
        });
        $( "#U6_RDC16_ACT1_P10_carpeta3_id" ).click(function() {
            $('#U6_RDC16_ACT1_P10_correcto_id').hide(); 
            $('#U6_RDC16_ACT1_P10_incorrecto_id').show();
        });
	fun = U6_RDC16_ACT1_P11_loading;
	fun2 = U6_RDC16_ACT1_P9_loading;
}
function U6_RDC16_ACT1_P11_loading(){
	play('U6_RDC16_ACT1_wtspp');
        blinkElement("U6_RDC16_ACT1_P11_hornButton_id",true);
	fun = U6_RDC16_ACT1_P12_loading;
	fun2 = U6_RDC16_ACT1_P10_loading;
}

function U6_RDC16_ACT1_P12_loading(){
	if(isplay==true){audio.pause();}
	fun = U6_RDC16_ACT1_P13_loading;
	fun2 = U6_RDC16_ACT1_P11_loading;
	
	
}

function U6_RDC16_ACT1_P13_loading(){
	blinkElement("U6_RDC16_ACT1_P13_hornButton_id",true);
    U6_title_RDC1_ACT_1_complete = true;
	fun = U6_RDC16_P0_loading;
	fun2 = U6_RDC16_ACT1_P12_loading;
	//act2=true;
	
}
// Dragable

function blinkElement(idObject,Status){
	if(Status==true){
		$('#'+idObject).fadeTo("slow",1,function() {
			$('#'+idObject).fadeTo("slow",.3,blinkElement(idObject,Status));
  		});
	}
	else if(Status==false){
		$('#'+idObject).stop(true,true);
		$('#'+idObject).stop().fadeTo("fast",1);
	}
}
function play(name){
	audio = document.getElementById(name);
    if(audio.paused){audio = document.getElementById(name);
      audio.play();
      isplay=true;
     }
     else{
      audio.pause();
      isplay=false;
     }
    }
///////////*********************************************
function clickForward (fun) {
	
	var last =parseInt( nav_current.charAt(nav_current.length-1));
	last+=1;
	next = nav_current.replace(/.$/,last.toString());
	if($("#"+next).length){
		$("#"+nav_current).hide();
		nav_current = next;
		$("#"+nav_current).show();
		setTimeout(fun, 0);
	}else{
		$("#"+nav_current).hide();
		var n = nav_current.indexOf("ACT");
		var temp = nav_current.substring(0,n);
		next= temp + "P0";
		nav_current=next;
		$("#"+nav_current).show();
		hide_Nav();
		setTimeout(fun, 0);
	}
	
	
}

function clickBack (fun2) {

	var last =parseInt( nav_current.charAt(nav_current.length-1));
	last-=1;
	next = nav_current.replace(/.$/,last.toString());
	if($("#"+next).length){
		$("#"+nav_current).hide();
		nav_current = next;
		$("#"+nav_current).show();
		setTimeout(fun2, 0);
	}else{
		$("#"+nav_current).hide();
		var n = nav_current.indexOf("ACT");
		var temp = nav_current.substring(0,n);
		next= temp + "P0";
		nav_current=next;
		$("#"+nav_current).show();
		hide_Nav();
		setTimeout(fun2, 0);
	}
}
	function show_Nav () {
		$("#forward_id").show();
		$("#back_id").show();
	}
	function hide_Nav () {
		$("#forward_id").hide();
		$("#back_id").hide();
	}

