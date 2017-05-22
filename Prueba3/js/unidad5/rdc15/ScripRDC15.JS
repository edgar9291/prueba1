//Código para la rdc 15 de u5 por kádima
var audioRDC15P0 = new Audio('audio/unidad5/RDC_15_AUDIO_2.mp3');
var audioRDC15P1 = new Audio('audio/unidad5/RDC_15_AUDIO_3.mp3');
var audioRDC15P2 = new Audio('audio/unidad5/RDC_15_CHOFER_AUDIO_1.mp3');
var audioRDC15P3 = new Audio('audio/unidad5/RDC_15_CHOFER_AUDIO_2.mp3');
var audioRDC15P4 = new Audio('audio/unidad5/RDC_15_CHIOFER_AUDIO_3.mp3');
var audioRDC15P5 = new Audio('audio/unidad5/RDC_15_CHOFER_AUDIO_4.mp3');
var audioRDC15P6 = new Audio('audio/unidad5/RDC_15_CHOFER_AUDIO_5.mp3');
var audioRDC15P7 = new Audio('audio/unidad5/RDC_15_CHOFER_AUDIO_6.mp3');
var audioRDC15P8 = new Audio('audio/unidad5/RDC_15_CHOFER_AUDIO_7.mp3');
var audioRDC15P9 = new Audio('audio/unidad5/RDC_15_AUDIO_4.mp3');
var audioRDC15P9_contrapunto = new Audio('audio/unidad5/RDC_15_AUDIO_contrapunto1.mp3');
var audioRDC15P10 = new Audio('audio/unidad5/RDC_15_AUDIO_2.mp3');
var audioRDC15P11 = new Audio('audio/unidad5/RDC_15_AUDIO_11.mp3');
var audioRDC15P18 = new Audio('audio/unidad5/RDC_15_AUDIO_12.mp3');
var audioRDC15P20 = new Audio('audio/unidad5/RDC_15_AUDIO_13.mp3');
var audioRDC15P21 = new Audio('audio/unidad5/RDC_15_AUDIO_14.mp3');


var dropable=undefined;
var dragable=undefined;
var chek=0;
var cont=0;
var oportunity=0;
var U5_regresando15 = false;
var sonando;


function U5_RDC15(){

    if(sonando===true){audioRDC15P21.pause();}
    nav_current = "U5_RDC15_P0";
    fun = RDC15showP1;
	hide_Nav();
	audioRDC15P21.pause();
	audioRDC15P21.pause();

    audioRDC15P0.currentTime = 0;
    $("#U5_RDC15_P0").show();
    $("#U5_RDC15_P0_act1_id").bind("click",RDC15showP1);
  
    blinkElement("U5_RDC15_P0_bocina_id",true);
    blinkElement("U5_RDC15_P0_act1_id",false);

}


function RDC15showP1 () {
    
	nav_current = "U5_RDC15_ACT1_P1";
    fun = RDC15showP2;
    fun2 = U5_RDC15;
    hide_Nav();
    audioRDC15P0.pause();
    audioRDC15P1.currentTime = 0;

    $("#U5_RDC15_P0").hide();
    $("#U5_RDC15_ACT1_P1").show();
    blinkElement("U5_RDC15_P1_bocina_id",true);




}

function RDC15showP2(){

   	nav_current = "U5_RDC15_ACT1_P2";
    fun = RDC15showP3;
    fun2 = RDC15showP1;
    hide_Nav();
    audioRDC15P1.pause();
    audioRDC15P2.currentTime = 0;
    
    $("#U5_RDC15_ACT1_P1").hide();
    $("#U5_RDC15_ACT1_P2").show();
    $("#U5_RDC15_P2_opc1_id").hide();
	$("#U5_RDC15_P2_opc2_id").hide();

    $("#U5_RDC15_P2_opc2_id").bind("click", function (){

    $("#U5_RDC15_P2_opc1_id").hide();
    $("#U5_RDC15_P2_opc2_id").hide(); 
    $("#U5_RDC15_P2_POPerror_id").hide(); 
    $("#U5_RDC15_P2_POPerrorTXT_id").hide();
    RDC15showP3();

    });

    blinkElement("U5_RDC15_P2_bocina_id",true);

    $("#U5_RDC15_P2_opc1_id").bind("click",function  () {
	$("#U5_RDC15_P2_POPerror_id").show();
	$("#U5_RDC15_P2_POPerrorTXT_id").show();
	});
}

function RDC15showP3(){

   	nav_current = "U5_RDC15_ACT1_P3";
    fun = RDC15showP4;
    fun2 = RDC15showP2;
    hide_Nav();

    audioRDC15P2.pause();
    audioRDC15P3.currentTime = 0;

     $("#U5_RDC15_ACT1_P2").hide();
    $("#U5_RDC15_ACT1_P3").show();
    $("#U5_RDC15_P3_opc1_id").hide();
	$("#U5_RDC15_P3_opc2_id").hide();
    $("#U5_RDC15_P3_opc1_id").bind("click", function (){

    $("#U5_RDC15_P3_opc1_id").hide();
    $("#U5_RDC15_P3_opc2_id").hide(); 
    $("#U5_RDC15_P3_POPerror_id").hide(); 
    $("#U5_RDC15_P3_POPerrorTXT_id").hide();
    RDC15showP4();

    });
    blinkElement("U5_RDC15_P3_bocina_id",true);

    $("#U5_RDC15_P3_opc2_id").bind("click",function  () {
	$("#U5_RDC15_P3_POPerror_id").show();
	$("#U5_RDC15_P3_POPerrorTXT_id").show();
	});
}

function RDC15showP4(){

   	nav_current = "U5_RDC15_ACT1_P4";
    fun = RDC15showP5;
    fun2 = RDC15showP3;
    hide_Nav();

    audioRDC15P3.pause();
    audioRDC15P4.currentTime = 0;
 
     $("#U5_RDC15_ACT1_P3").hide();
    $("#U5_RDC15_ACT1_P4").show();
    $("#U5_RDC15_P4_opc1_id").hide();
	$("#U5_RDC15_P4_opc2_id").hide();
    $("#U5_RDC15_P4_opc1_id").bind("click", function (){

    $("#U5_RDC15_P4_opc1_id").hide();
    $("#U5_RDC15_P4_opc2_id").hide(); 
    $("#U5_RDC15_P4_POPerror_id").hide(); 
    $("#U5_RDC15_P4_POPerrorTXT_id").hide();
    RDC15showP5();

    });
    blinkElement("U5_RDC15_P4_bocina_id",true);

    $("#U5_RDC15_P4_opc2_id").bind("click",function  () {
	$("#U5_RDC15_P4_POPerror_id").show();
	$("#U5_RDC15_P4_POPerrorTXT_id").show();
	});
}


function RDC15showP5(){

   	nav_current = "U5_RDC15_ACT1_P5";
    fun = RDC15showP6;
    fun2 = RDC15showP4;
    hide_Nav();

    audioRDC15P4.pause();
    audioRDC15P5.currentTime = 0;
 
     $("#U5_RDC15_ACT1_P4").hide();
    $("#U5_RDC15_ACT1_P5").show();
    $("#U5_RDC15_P5_opc1_id").hide();
	$("#U5_RDC15_P5_opc2_id").hide();
    $("#U5_RDC15_P5_opc2_id").bind("click", function (){

    $("#U5_RDC15_P5_opc1_id").hide();
    $("#U5_RDC15_P5_opc2_id").hide(); 
    $("#U5_RDC15_P5_POPerror_id").hide(); 
    $("#U5_RDC15_P5_POPerrorTXT_id").hide();
    RDC15showP6();

    });
    blinkElement("U5_RDC15_P5_bocina_id",true);

    $("#U5_RDC15_P5_opc1_id").bind("click",function  () {
	$("#U5_RDC15_P5_POPerror_id").show();
	$("#U5_RDC15_P5_POPerrorTXT_id").show();
	});
}


function RDC15showP6(){

   	nav_current = "U5_RDC15_ACT1_P6";
    fun = RDC15showP7;
    fun2 = RDC15showP5;
    hide_Nav();

    audioRDC15P5.pause();
    audioRDC15P6.currentTime = 0;
 
     $("#U5_RDC15_ACT1_P5").hide();
    $("#U5_RDC15_ACT1_P6").show();
    $("#U5_RDC15_P6_opc1_id").hide();
	$("#U5_RDC15_P6_opc2_id").hide();
    $("#U5_RDC15_P6_opc2_id").bind("click", function (){

    $("#U5_RDC15_P6_opc1_id").hide();
    $("#U5_RDC15_P6_opc2_id").hide(); 
    $("#U5_RDC15_P6_POPerror_id").hide(); 
    $("#U5_RDC15_P6_POPerrorTXT_id").hide();
    RDC15showP7();

    });
    blinkElement("U5_RDC15_P6_bocina_id",true);

    $("#U5_RDC15_P6_opc1_id").bind("click",function  () {
	$("#U5_RDC15_P6_POPerror_id").show();
	$("#U5_RDC15_P6_POPerrorTXT_id").show();
	});
}

function RDC15showP7(){

   	nav_current = "U5_RDC15_ACT1_P7";
    fun = RDC15showP8;
    fun2 = RDC15showP6;
    hide_Nav();

    audioRDC15P6.pause();
    audioRDC15P7.currentTime = 0;
 
     $("#U5_RDC15_ACT1_P6").hide();
    $("#U5_RDC15_ACT1_P7").show();
    $("#U5_RDC15_P7_opc1_id").hide();
	$("#U5_RDC15_P7_opc2_id").hide();
    $("#U5_RDC15_P7_opc1_id").bind("click", function (){

    $("#U5_RDC15_P7_opc1_id").hide();
    $("#U5_RDC15_P7_opc2_id").hide(); 
    $("#U5_RDC15_P7_POPerror_id").hide(); 
    $("#U5_RDC15_P7_POPerrorTXT_id").hide();
    RDC15showP8();

    });
    blinkElement("U5_RDC15_P7_bocina_id",true);

    $("#U5_RDC15_P7_opc2_id").bind("click",function  () {
	$("#U5_RDC15_P7_POPerror_id").show();
	$("#U5_RDC15_P7_POPerrorTXT_id").show();
	});
}

function RDC15showP8(){

   	nav_current = "U5_RDC15_ACT1_P8";
    fun = RDC15showP9;
    fun2 = RDC15showP7;
    hide_Nav();

    audioRDC15P7.pause();
    audioRDC15P8.currentTime = 0;
 
     $("#U5_RDC15_ACT1_P7").hide();
    $("#U5_RDC15_ACT1_P8").show();
    blinkElement("U5_RDC15_P8_bocina_id",true);
}

function RDC15showP9(){


    nav_current = "U5_RDC15_ACT1_P9";
    fun = RDC15showP10;
    fun2 = RDC15showP8;
	hide_Nav();
    audioRDC15P8.pause();
    audioRDC15P9.currentTime = 0;
    audioRDC15P9_contrapunto.currentTime = 0;
    
    $("#U5_RDC15_ACT1_P8").hide();
    $("#U5_RDC15_ACT1_P9").show();
  
    blinkElement("U5_RDC15_P9_bocina_id",true);

}

function RDC15showP10(){


    nav_current = "U5_RDC15_ACT1_P10";
    fun = RDC15showP11;
    fun2 = RDC15showP9;
	hide_Nav();
    
    audioRDC15P9_contrapunto.pause();
    audioRDC15P9.pause();
    audioRDC15P10.currentTime = 0;


    $("#U5_RDC15_ACT1_P9").hide();
    $("#U5_RDC15_ACT1_P10").show();
    $("#U5_RDC15_P10_act2_id").bind("click",RDC15showP11);
  
    blinkElement("U5_RDC15_P10_bocina_id",true);
    blinkElement("U5_RDC15_P10_act2_id",false);

}

function RDC15showP11 () {
    
	nav_current = "U5_RDC15_ACT1_P11";
    fun = RDC15showP12;
    fun2 = RDC15showP10;
    hide_Nav();
    audioRDC15P10.pause();
    audioRDC15P11.currentTime = 0;

    $("#U5_RDC15_ACT1_P10").hide();
    $("#U5_RDC15_ACT1_P11").show();
    blinkElement("U5_RDC15_P11_bocina_id",true);




}
function RDC15showP12 () {
    
	nav_current = "U5_RDC15_ACT1_P12";
    fun = RDC15showP13;
    fun2 = RDC15showP11;
    show_Nav();
    audioRDC15P11.pause();

    $("#U5_RDC15_ACT1_P11").hide();
    $("#U5_RDC15_ACT1_P12").show();

}

function RDC15showP13 () {
    
	nav_current = "U5_RDC15_ACT1_P13";
    fun = RDC15showP14;
    fun2 = RDC15showP12;
    hide_Nav();
    audioRDC15P11.pause();


    $("#U5_RDC15_P13_PopTxt1_id").hide();
    $("#U5_RDC15_P13_PopTxt2_id").hide();
    $("#U5_RDC15_P13_Fedbac1_id").hide();
    $("#U5_RDC15_P13_Fedbac2_id").hide();

    $("#U5_RDC15_ACT1_P12").hide();
    $("#U5_RDC15_ACT1_P13").show();
    $("#U5_RDC15_P13_opc4_id").bind("click",show_Nav);
    $("#U5_RDC15_P13_opc3_id").bind("click",function (){setTimeout(RDC15showP13, 2000);});
    $("#U5_RDC15_P13_opc2_id").bind("click",function (){setTimeout(RDC15showP13, 2000);});
    $("#U5_RDC15_P13_opc1_id").bind("click",function (){setTimeout(RDC15showP13, 2000);});


var clases15 = ["U5_RDC15_P13_opc1","U5_RDC15_P13_opc2","U5_RDC15_P13_opc3","U5_RDC15_P13_opc4"];

clases15=_.shuffle(clases15);


for (var i = 1; i <= 4; i++) {
	
	$("#U5_RDC15_P13_opc"+[i]+"_id").removeAttr('style');
	
};


for (var i = 0; i <= 4; i++) {
	
	$("#U5_RDC15_P13_opc"+[i+1]+"_id").removeClass();
	$("#U5_RDC15_P13_opc"+[i+1]+"_id").addClass(clases15[i]);
	
};


}


function RDC15showP14 () {
    
	nav_current = "U5_RDC15_ACT1_P14";
    fun = RDC15showP15;
    fun2 = RDC15showP13;
    hide_Nav();
    audioRDC15P11.pause();


    $("#U5_RDC15_P14_retromal_id").hide();
    $("#U5_RDC15_P14_retrobien_id").hide();
    $("#U5_RDC15_P14_retromaltxt_id").hide();
    $("#U5_RDC15_P14_retrobientxt_id").hide();

    $("#U5_RDC15_ACT1_P13").hide();
    $("#U5_RDC15_ACT1_P14").show();
    $("#U5_RDC15_P14_opc4_id").bind("click",show_Nav);


var clases15 = ["U5_RDC15_P14_opc1","U5_RDC15_P14_opc2","U5_RDC15_P14_opc3","U5_RDC15_P14_opc4"];

clases15=_.shuffle(clases15);


for (var i = 1; i <= 4; i++) {
	
	$("#U5_RDC15_P14_opc"+[i]+"_id").removeAttr('style');
	
};


for (var i = 0; i <= 4; i++) {
	
	$("#U5_RDC15_P14_opc"+[i+1]+"_id").removeClass();
	$("#U5_RDC15_P14_opc"+[i+1]+"_id").addClass(clases15[i]);
	
};

for (var i = 1; i <= 4; i++) {
	
	$("#U5_RDC15_P14_opc"+[i]+"_id").draggable(

        	regresa15()

	);
};

for (var i = 1; i <= 1; i++) {
	
	$("#U5_RDC15_P14_pregunta1_id").droppable({accept:"#U5_RDC15_P14_opc1_id,#U5_RDC15_P14_opc2_id,#U5_RDC15_P14_opc3_id,#U5_RDC15_P14_opc4_id",
drop:function(event,ui){
	dropable=$(this).attr('id');
	dropevent15(event,ui);
	
}});
	
};




}

function RDC15showP15 () {
    
	nav_current = "U5_RDC15_ACT1_P15";
    fun = RDC15showP16;
    fun2 = RDC15showP14;
    hide_Nav();
    audioRDC15P11.pause();


    $("#U5_RDC15_P15_PopTxt1_id").hide();
    $("#U5_RDC15_P15_PopTxt2_id").hide();
    $("#U5_RDC15_P15_Fedbac1_id").hide();
    $("#U5_RDC15_P15_Fedbac2_id").hide();

    $("#U5_RDC15_ACT1_P14").hide();
    $("#U5_RDC15_ACT1_P15").show();
    $("#U5_RDC15_P15_opc4_id").bind("click",show_Nav)
    $("#U5_RDC15_P15_opc3_id").bind("click",function (){setTimeout(RDC15showP15, 2000);});
    $("#U5_RDC15_P15_opc2_id").bind("click",function (){setTimeout(RDC15showP15, 2000);});
    $("#U5_RDC15_P15_opc1_id").bind("click",function (){setTimeout(RDC15showP15, 2000);});


var clases15 = ["U5_RDC15_P13_opc1","U5_RDC15_P13_opc2","U5_RDC15_P13_opc3","U5_RDC15_P13_opc4"];

clases15=_.shuffle(clases15);


for (var i = 1; i <= 4; i++) {
    
    $("#U5_RDC15_P15_opc"+[i]+"_id").removeAttr('style');
    
};


for (var i = 0; i <= 4; i++) {
    
    $("#U5_RDC15_P15_opc"+[i+1]+"_id").removeClass();
    $("#U5_RDC15_P15_opc"+[i+1]+"_id").addClass(clases15[i]);
    
};


}

function RDC15showP16 () {
    
	nav_current = "U5_RDC15_ACT1_P16";
    fun = RDC15showP17;
    fun2 = RDC15showP15;
    hide_Nav();
    audioRDC15P11.pause();


    $("#U5_RDC15_P16_PopTxt1_id").hide();
    $("#U5_RDC15_P16_PopTxt2_id").hide();
    $("#U5_RDC15_P16_Fedbac1_id").hide();
    $("#U5_RDC15_P16_Fedbac2_id").hide();

    $("#U5_RDC15_ACT1_P15").hide();
    $("#U5_RDC15_ACT1_P16").show();
    $("#U5_RDC15_P16_opc4_id").bind("click",show_Nav)
    $("#U5_RDC15_P16_opc3_id").bind("click",function (){setTimeout(RDC15showP16, 2000);});
    $("#U5_RDC15_P16_opc2_id").bind("click",function (){setTimeout(RDC15showP16, 2000);});
    $("#U5_RDC15_P16_opc1_id").bind("click",function (){setTimeout(RDC15showP16, 2000);});


var clases15 = ["U5_RDC15_P13_opc1","U5_RDC15_P13_opc2","U5_RDC15_P13_opc3","U5_RDC15_P13_opc4"];

clases15=_.shuffle(clases15);


for (var i = 1; i <= 4; i++) {
    
    $("#U5_RDC15_P16_opc"+[i]+"_id").removeAttr('style');
    
};


for (var i = 0; i <= 4; i++) {
    
    $("#U5_RDC15_P16_opc"+[i+1]+"_id").removeClass();
    $("#U5_RDC15_P16_opc"+[i+1]+"_id").addClass(clases15[i]);
    
};


}

function RDC15showP17 () {
    
	nav_current = "U5_RDC15_ACT1_P17";
    fun = RDC15showP18;
    fun2 = RDC15showP16;
    hide_Nav();
    audioRDC15P11.pause();


    $("#U5_RDC15_P17_PopTxt1_id").hide();
    $("#U5_RDC15_P17_PopTxt2_id").hide();
    $("#U5_RDC15_P17_Fedbac1_id").hide();
    $("#U5_RDC15_P17_Fedbac2_id").hide();

    $("#U5_RDC15_ACT1_P16").hide();
    $("#U5_RDC15_ACT1_P17").show();
    
}
function RDC15showP18 () {
    
	nav_current = "U5_RDC15_ACT1_P18";
    fun = RDC15showP19;
    fun2 = RDC15showP17;
    hide_Nav();
    


    
}
function RDC15showP19 () {
    
	nav_current = "U5_RDC15_ACT1_P19";
    fun = RDC15showP20;
    fun2 = RDC15showP18;
    show_Nav();
    audioRDC15P18.pause();
     
}
function RDC15showP20 () {
    
	nav_current = "U5_RDC15_ACT1_P20";
    fun = RDC15showP21;
    fun2 = RDC15showP19;
    hide_Nav();
    


    
}
function RDC15showP21 () {
    
	nav_current = "U5_RDC15_ACT1_P21";
	fun= U5_RDC15;
    fun2 = RDC15showP20;
    hide_Nav();
    audioRDC15P20.pause();
    


    
}



function regresa15(){
	U5_regresando15 = true;
	setTimeout(U5_termineRegresar15(), 300);
	return {
		revert:"invalid",
		opacity:0.7
	};
	
}
function U5_termineRegresar15(){
	U5_regresando = false;
}
function dropevent15(event,ui){
	dragable=ui.draggable.attr('id');
	var d1=dropable.charAt(21);
	var d2=dragable.charAt(16);

	
	if (d1==d2) {
		$("#U5_RDC15_P14_retrobien_id").show();
		$("#U5_RDC15_P14_retrobientxt_id").show();
		show_Nav();
		cont++;
	};
	if (d1!=d2) {
		$("#U5_RDC15_P14_retromal_id").show();
		$("#U5_RDC15_P14_retromaltxt_id").show();
		hide_Nav();
		setTimeout(RDC15showP14, 2000);
		
	};
}






$("#U5_RDC15_P0_bocina_id").bind("click",function  () {

	blinkElement("U5_RDC15_P0_bocina_id",false);
	blinkElement("U5_RDC15_P0_act1_id",true);

	if(audioRDC15P0.paused){
		audioRDC15P0.play();			
		}else{
			audioRDC15P0.pause();
		}
	});





$("#U5_RDC15_P1_bocina_id").bind("click",function  () {

	show_Nav();
	blinkElement("U5_RDC15_P1_bocina_id",false);
	blinkElement("U5_RDC15_P1_act1_id",true);
    blinkElement("forward_id",true);

	if(audioRDC15P1.paused){
		audioRDC15P1.play();			
		}else{
			audioRDC15P1.pause();
		}
	});


$("#U5_RDC15_P2_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC15_P2_bocina_id",false);
	$("#U5_RDC15_P2_opc1_id").show();
	$("#U5_RDC15_P2_opc2_id").show();
	
	if(audioRDC15P2.paused){
		audioRDC15P2.play();			
		}else{
			audioRDC15P2.pause();
		}
	});



$("#U5_RDC15_P3_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC15_P3_bocina_id",false);
	$("#U5_RDC15_P3_opc1_id").show();
	$("#U5_RDC15_P3_opc2_id").show();

	if(audioRDC15P3.paused){
		audioRDC15P3.play();			
		}else{
			audioRDC15P3.pause();
		}
	});



$("#U5_RDC15_P4_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC15_P4_bocina_id",false);
	$("#U5_RDC15_P4_opc1_id").show();
	$("#U5_RDC15_P4_opc2_id").show();

	if(audioRDC15P4.paused){
		audioRDC15P4.play();			
		}else{
			audioRDC15P4.pause();
		}
	});

$("#U5_RDC15_P5_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC15_P5_bocina_id",false);
	$("#U5_RDC15_P5_opc1_id").show();
	$("#U5_RDC15_P5_opc2_id").show();

	if(audioRDC15P5.paused){
		audioRDC15P5.play();			
		}else{
			audioRDC15P5.pause();
		}
	});


$("#U5_RDC15_P6_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC15_P6_bocina_id",false);
	$("#U5_RDC15_P6_opc1_id").show();
	$("#U5_RDC15_P6_opc2_id").show();

	if(audioRDC15P6.paused){
		audioRDC15P6.play();			
		}else{
			audioRDC15P6.pause();
		}
	});


$("#U5_RDC15_P7_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC15_P7_bocina_id",false);
	$("#U5_RDC15_P7_opc1_id").show();
	$("#U5_RDC15_P7_opc2_id").show();

	if(audioRDC15P7.paused){
		audioRDC15P7.play();			
		}else{
			audioRDC15P7.pause();
		}
	});
$("#U5_RDC15_P8_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC15_P8_bocina_id",false);
	show_Nav();
	blinkElement("forward_id",true);

	if(audioRDC15P8.paused){
		audioRDC15P8.play();			
		}else{
			audioRDC15P8.pause();
		}
	});

$("#U5_RDC15_P9_bocina_id").bind("click",function  () {

	show_Nav();
	blinkElement("U5_RDC15_P9_bocina_id",false);
	blinkElement("U5_RDC15_P9_act1_id",true);
	blinkElement("forward_id",true);
	if(audioRDC15P9_contrapunto.play){
		
			audioRDC15P9_contrapunto.pause();
		
	}
	if(audioRDC15P9.paused){
		audioRDC15P9.play();			
		}else{
			audioRDC15P9.pause();
		}
	});


$("#U5_RDC15_P9_act1_id").bind("click",function  () {
    
    blinkElement("U5_RDC15_P9_act1_id",false);
    if(audioRDC15P9.play){

			audioRDC15P9.pause();
		
	}
	if(audioRDC15P9_contrapunto.paused){
		audioRDC15P9_contrapunto.play();			
		}else{
			audioRDC15P9_contrapunto.pause();
		}
	});


$("#U5_RDC15_P10_bocina_id").bind("click",function  () {

	show_Nav();
	blinkElement("U5_RDC15_P10_bocina_id",false);
	blinkElement("U5_RDC15_P10_act2_id",true);

	blinkElement("forward_id",true);
	if(audioRDC15P10.paused){
		audioRDC15P10.play();			
		}else{
			audioRDC15P10.pause();
		}
	});


$("#U5_RDC15_P11_bocina_id").bind("click",function  () {

	show_Nav();
	blinkElement("U5_RDC15_P11_bocina_id",false);
    blinkElement("forward_id",true);

	if(audioRDC15P11.paused){
		audioRDC15P11.play();			
		}else{
			audioRDC15P11.pause();
		}
	});
$("#U5_RDC15_P18_bocina_id").bind("click",function  () {

	show_Nav();
	blinkElement("U5_RDC15_P18_bocina_id",false);
    blinkElement("forward_id",true);

	if(audioRDC15P18.paused){
		audioRDC15P18.play();			
		}else{
			audioRDC15P18.pause();
		}
	});

$("#U5_RDC15_P20_bocina_id").bind("click",function  () {

	show_Nav();
	blinkElement("U5_RDC15_P20_bocina_id",false);
    blinkElement("forward_id",true);

	if(audioRDC15P20.paused){
		audioRDC15P20.play();			
		}else{
			audioRDC15P20.pause();
		}
	});

$("#U5_RDC15_P21_bocina_id").bind("click",function  () {

	show_Nav();
	blinkElement("U5_RDC15_P21_bocina_id",false);
    blinkElement("forward_id",true);
    sonando=true;

	if(audioRDC15P21.paused){
		audioRDC15P21.play();			
		}else{
			audioRDC15P21.pause();
		}
	});





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



function over15 (id){

      $("#"+id).show();
}

function out15 (id){

      $("#"+id).hide();
}

function cambiar15(id) 
{ 
      pepe=document.getElementById(id).value 

      if (pepe==8) {
      	$("#U5_RDC15_P17_Fedbac2_id").show();
		$("#U5_RDC15_P17_PopTxt2_id").show();
		$("#U5_RDC15_P17_Fedbac1_id").hide();
		$("#U5_RDC15_P17_PopTxt1_id").hide();
      	show_Nav();
      }
      if (pepe!=8) {
      	$("#U5_RDC15_P17_Fedbac1_id").show();
		$("#U5_RDC15_P17_PopTxt1_id").show();
		$("#U5_RDC15_P17_Fedbac2_id").hide();
		$("#U5_RDC15_P17_PopTxt2_id").hide();
      	hide_Nav();

      }
      

} 