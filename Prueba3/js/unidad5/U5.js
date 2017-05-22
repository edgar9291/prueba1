var dropable=undefined;
var dragable=undefined;
var chek=0;
var cont=0;
var oportunity=0;
var U5_regresando = false;

var audioP0 = new Audio('audio/unidad5/RDC_13_AUDIO_3.mp3');
var audioP1 = new Audio('audio/unidad5/RDC_13_AUDIO_4.mp3');
var audioP2 = new Audio('audio/unidad5/RDC_13_AUDIO_5.mp3');
var audioP3 = new Audio('audio/unidad5/RDC_13_AUDIO_6.mp3');
var audioP6 = new Audio('audio/unidad5/RDC_13_AUDIO_3.mp3');
var audioP7 = new Audio('audio/unidad5/RDC_13_AUDIO_7.mp3');
var audioVirgen = new Audio('audio/unidad5/RDC13_AUDIO_8-versos a la vrigen de andocollo.mp3');
var audioMonopolio = new Audio('audio/unidad5/RDC_13_AUDIO_12_Un monopolio en perspectiva.mp3');
var audioP9 = new Audio('audio/unidad5/RDC_13_AUDIO_9.mp3');
var audioP14 = new Audio('audio/unidad5/RDC_13_AUDIO_10.mp3');
var audioP16 = new Audio('audio/unidad5/RDC_13_AUDIO_5.mp3');
var audioP17 = new Audio('audio/unidad5/RDC_13_AUDIO_11.mp3');
var audioP20 = new Audio('audio/unidad5/RDC_13_AUDIO_3.mp3');
var audioP21 = new Audio('audio/unidad5/RDC_13_AUDIO_7.mp3');
var audioP23 = new Audio('audio/unidad5/RDC_13_AUDIO_9.mp3');
var audioP28 = new Audio('audio/unidad5/RDC_13_AUDIO_10.mp3');
var audioP30 = new Audio('audio/unidad5/RDC_13_AUDIO_13.mp3');
var audioP31 = new Audio('audio/unidad5/RDC_13_AUDIO_14.mp3');


function showRDC13 () {
	$("#U5_RDC13_ACT1_P31").hide();
	$("#U5_RDC13_P0").show();
	$("#U5_RDC13_P0_act1_id").bind("click",showP1);
	$("#U5_RDC13_P0_siguiente_id").hide();
	nav_current	= "U5_RDC13_P0";
	hide_Nav();
	audioP1.pause();
	blinkElement("U5_RDC13_P0_bocina_id",true);
}

function showP1 () {
	$("#U5_RDC13_P0").hide();
	$("#U5_RDC13_ACT1_P1").show();
	nav_current	= "U5_RDC13_ACT1_P1";
	fun = showP2;
	fun2 = showRDC13;
	show_Nav();
	audioP0.pause();
	audioP2.pause();
	blinkElement("U5_RDC13_P1_audiopayadoratoc_id",true);
	blinkElement("forward_id",true);

}

function showP2 () {
	nav_current	= "U5_RDC13_ACT1_P2";
	hide_Nav();
	fun = showP3;
	fun2 = showP1;
	audioP1.pause();
	audioP3.pause();
	blinkElement("U5_RDC13_P2_bocina_id",true);

}
function showP3 () {
	nav_current	= "U5_RDC13_ACT1_P3";
	show_Nav();
	$("#U5_RDC13_ACT1_P2").hide();
	$("#U5_RDC13_ACT1_P3").show();
	fun = showP4;
	fun2 = showP2;
	audioP2.pause();
	blinkElement("U5_RDC13_P3_bocina_id",true);
	blinkElement("forward_id",true);


}

function showP4 () {
	nav_current	= "U5_RDC13_ACT1_P4";
	fun = showP5;
	fun2 = showP3;
	hide_Nav();
	audioP3.pause();
	$("#U5_RDC13_P4_listo_id").hide();

	var clases = ["U5_RDC13_P4_lira1","U5_RDC13_P4_lira2","U5_RDC13_P4_lira3","U5_RDC13_P4_lira4","U5_RDC13_P4_lira5","U5_RDC13_P4_lira6","U5_RDC13_P4_lira7"];

	clases=_.shuffle(clases);


	for (var i = 1; i <= 7; i++) {
		
		$("#U5_RDC13_P4_lira"+[i]+"_id").removeAttr('style');
		
	};


	for (var i = 0; i <= 7; i++) {
		
		$("#U5_RDC13_P4_lira"+[i+1]+"_id").removeClass();
		$("#U5_RDC13_P4_lira"+[i+1]+"_id").addClass(clases[i]);
		
	};

	for (var i = 1; i <= 7; i++) {
		
		$("#U5_RDC13_P4_lira"+[i]+"_id").draggable(

				regresa()

		);
	};

	for (var i = 1; i <= 7; i++) {
		
		$("#U5_RDC13_P4_cont"+[i]+"_id").droppable({accept:"#U5_RDC13_P4_lira1_id,#U5_RDC13_P4_lira2_id,#U5_RDC13_P4_lira3_id,#U5_RDC13_P4_lira4_id,#U5_RDC13_P4_lira5_id,#U5_RDC13_P4_lira6_id,#U5_RDC13_P4_lira7_id",
	drop:function(event,ui){
		dropable=$(this).attr('id');
		dropevent(event,ui);
		ocultar();
	}});
	
};





}
function regresa(){
	U5_regresando = true;
	setTimeout(U5_termineRegresar(), 300);
	return {
		revert:"invalid",
		opacity:0.7
	};
	
}
function U5_termineRegresar(){
	U5_regresando = false;
}
function dropevent(event,ui){
	dragable=ui.draggable.attr('id');
	var d1=dropable.charAt(16);
	var d2=dragable.charAt(16);

	chek++;
	if (d1==d2) {
		cont++
	};
	if (chek==7) {

		$("#U5_RDC13_P4_listo_id").show();
		chek=0;
	};
}

function chekdrop(){
	if (cont==7) {
		$("#U5_RDC13_P4_listo_id").hide();
		cont=0;
		show_Nav();
	}
	else{
	$("#U5_RDC13_P4_revisar_id").hide();
	oportunity++;
	cont=0;
	if (oportunity<2) {
		showP4();

	}
	else{
		oportunity=0;
        show_Nav();

	};	
	};
}



function showP5 () {
	nav_current	= "U5_RDC13_ACT1_P5";
	hide_Nav();
	fun = showP6;
	fun2 = showP4;
	document.getElementById("U5_RDC13_P5_TextBoxResp1_id").value="Responde aqui!!!";
	$("#U5_RDC13_P5_listo_id").bind("click",show_Nav);
	audioP6.pause();
}



function showP6 () {
	console.log("Pantalla 6");
	nav_current	= "U5_RDC13_ACT1_P6";
	hide_Nav();
	fun = showP7;
	fun2 = showP5;
	$("#U5_RDC13_P6_act2_id").bind("click",showP7);
	audioP7.pause();
	blinkElement("U5_RDC13_P6_bocina_id",true);
}


function showP7() {
	nav_current	= "U5_RDC13_ACT1_P7";
	$("#U5_RDC13_ACT1_P6").hide();
	$("#U5_RDC13_ACT1_P7").show();
	show_Nav();
	fun = showP8;
	fun2 = showP6;
	audioVirgen.pause();
	audioP6.pause();
	blinkElement("U5_RDC13_P7_bocina_id",true);
}

function showP8 () {
	nav_current	= "U5_RDC13_ACT1_P8";
	show_Nav();
	fun = showP9;
	fun2 = showP7;
	audioP9.pause();
	audioP7.pause();
	blinkElement("U5_RDC13_P8_audiopoemaP8_id",true);
}

function showP9 () {
	nav_current	= "U5_RDC13_ACT1_P9";
	show_Nav();
	fun = showP10;
	fun2 = showP8;
	audioVirgen.pause();
	blinkElement("U5_RDC13_P9_bocina_id",true);
}

function showP10 () {
	nav_current	= "U5_RDC13_ACT1_P10";
	hide_Nav();
	fun = showP11;
	fun2 = showP9;
	document.getElementById("U5_RDC13_P10_TextBoxResp1_id").value="Responde aqui!!!";

	audioP9.pause();
}

function showP11 () {
	nav_current	= "U5_RDC13_ACT1_P11";
	hide_Nav();
	fun = showP12;
	fun2 = showP10;

	/*$("#U5_RDC13_P0_act2_id").bind("click",showA2);*/


	var clases = ["U5_RDC13_P11_opc1","U5_RDC13_P11_opc2","U5_RDC13_P11_opc3","U5_RDC13_P11_opc4"];

	clases=_.shuffle(clases);


	for (var i = 1; i <= 4; i++) {
		
		$("#U5_RDC13_P11_opc"+[i]+"_id").removeAttr('style');
		
	};


	for (var i = 0; i <= 4; i++) {
		
		$("#U5_RDC13_P11_opc"+[i+1]+"_id").removeClass();
		$("#U5_RDC13_P11_opc"+[i+1]+"_id").addClass(clases[i]);
		
	};

	for (var i = 1; i <= 4; i++) {
		
		$("#U5_RDC13_P11_opc"+[i]+"_id").draggable(

				regresa3()

		);
	};

	for (var i = 1; i <= 1; i++) {
		
		$("#U5_RDC13_P11_pregunta2_id").droppable({accept:"#U5_RDC13_P11_opc1_id,#U5_RDC13_P11_opc2_id,#U5_RDC13_P11_opc3_id,#U5_RDC13_P11_opc4_id",
	drop:function(event,ui){
		dropable=$(this).attr('id');
		dropevent3(event,ui);
		ocultar();
	}});
		
	};
}
function regresa3(){
	U5_regresando = true;
	setTimeout(U5_termineRegresar(), 300);
	return {
		revert:"invalid",
		opacity:0.7
	};
	
}
function U5_termineRegresar3(){
	U5_regresando = false;
}
function dropevent3(event,ui){
	dragable=ui.draggable.attr('id');
	var d1=dropable.charAt(21);
	var d2=dragable.charAt(16);

	
	if (d1==d2) {
		$("#U5_RDC13_P11_listo_id").show();
		cont++;
	};
	if (d1!=d2) {
		$("#U5_RDC13_P11_listo_id").show();
	};
}

function chekdrop3(){
	if (cont==1) {
		$("#U5_RDC13_P11_listo_id").hide();
		cont=0;
		show_Nav();
	}
	else{
	$("#U5_RDC13_P11_revisar_id").hide();
	oportunity++;
	cont=0;
	if (oportunity<1000000) {

		$("#U5_RDC13_P11_retromal_id").show();
		$("#U5_RDC13_P11_retromaltxt_id").show();
		$("#U5_RDC13_P11_retromal_id").bind("click",showP11());
		
		

	}
	else{
		oportunity=0;
        $("#U5_RDC13_P11_siguiente_id").show();

	};	
	};
}


function showP12 () {
	nav_current	= "U5_RDC13_ACT1_P12";
	hide_Nav();
	fun = showP13;
	fun2 = showP11;
	document.getElementById("U5_RDC13_P12_TextBoxResp1_id").value="Responde aqui!!!";
}

function showP13 () {

	nav_current	= "U5_RDC13_ACT1_P13";
	hide_Nav();
	fun = showP14;
	fun2 = showP12;
	$("#U5_RDC13_P13_listo_id").hide();
	$("#U5_RDC13_P13_listo_id").bind("click",showP14);
	audioP14.pause();
}


function showP14 () {
	$("#U5_RDC13_ACT1_P13").hide();
	$("#U5_RDC13_ACT1_P14").show();
	nav_current	= "U5_RDC13_ACT1_P14";
	show_Nav();
	fun = showP15;
	fun2 = showP13;
	blinkElement("U5_RDC13_P14_bocina_id",true);

}



function showP15 () {
	nav_current	= "U5_RDC13_ACT1_P15";
	show_Nav();
	fun = showP16;
	fun2 = showP14;
	audioP14.pause();
	audioP16.pause();
}

function showP16 () {
	nav_current	= "U5_RDC13_ACT1_P16";
	fun = showP17;
	fun2 = showP15;
	hide_Nav();
	$("#U5_RDC13_P16_cantohum_id").bind("click",showP17);
	/*$("#U5_RDC13_P0_act2_id").bind("click",showA2);*/

	audioP17.pause();
	blinkElement("U5_RDC13_P16_bocina_id",true);

}



function showP17 () {
	nav_current	= "U5_RDC13_ACT1_P17";
	fun = showP18;
	fun2 = showP16;
	$("#U5_RDC13_ACT1_P17").show();
	$("#U5_RDC13_ACT1_P16").hide();
	show_Nav();
	$("#U5_RDC13_P17_home_id").bind("click",showhome);
	/*$("#U5_RDC13_P0_act2_id").bind("click",showA2);*/

	audioP16.pause();
	blinkElement("U5_RDC13_P17_bocina_id",true);

}

function showP18 () {

	nav_current	= "U5_RDC13_ACT1_P18";
	fun = showP19;
	fun2 = showP17;
	hide_Nav();
	$("#index").hide();
	$("#U5_RDC13_ACT1_P18").show();
	$("#U5_RDC13_ACT1_P17").hide();
	$("#U5_RDC13_P18_listo_id").hide();
	$("#U5_RDC13_ACT1_P19").hide();


	audioP17.pause();

	var clases = ["U5_RDC13_P4_lira1","U5_RDC13_P4_lira2","U5_RDC13_P4_lira3","U5_RDC13_P4_lira4","U5_RDC13_P4_lira5","U5_RDC13_P4_lira6","U5_RDC13_P4_lira7"];

	clases=_.shuffle(clases);


	for (var i = 1; i <= 7; i++) {
		
		$("#U5_RDC13_P18_lira"+[i]+"_id").removeAttr('style');
		
	};


	for (var i = 0; i <= 7; i++) {
		
		$("#U5_RDC13_P18_lira"+[i+1]+"_id").removeClass();
		$("#U5_RDC13_P18_lira"+[i+1]+"_id").addClass(clases[i]);
		
	};

	for (var i = 1; i <= 7; i++) {
		
		$("#U5_RDC13_P18_lira"+[i]+"_id").draggable(

				regresa2()

		);
	};

	for (var i = 1; i <= 7; i++) {
		
		$("#U5_RDC13_P18_cont"+[i]+"_id").droppable({accept:"#U5_RDC13_P18_lira1_id,#U5_RDC13_P18_lira2_id,#U5_RDC13_P18_lira3_id,#U5_RDC13_P18_lira4_id,#U5_RDC13_P18_lira5_id,#U5_RDC13_P18_lira6_id,#U5_RDC13_P18_lira7_id",
	drop:function(event,ui){
		dropable=$(this).attr('id');
		dropevent2(event,ui);
		ocultar18();
	}});
	
};





}
function regresa2(){
	U5_regresando = true;
	setTimeout(U5_termineRegresar2(), 300);
	return {
		revert:"invalid",
		opacity:0.7
	};
	
}
function U5_termineRegresar2(){
	U5_regresando = false;
}
function dropevent2(event,ui){
	dragable=ui.draggable.attr('id');
	var d1=dropable.charAt(17);
	var d2=dragable.charAt(17);

	chek++;
	if (d1==d2) {
		cont++
	};
	if (chek==7) {

		$("#U5_RDC13_P18_listo_id").show();
		show_Nav();
		chek=0;
	};
}

function chekdrop2(){
	if (cont==7) {
		$("#U5_RDC13_P18_listo_id").hide();
		cont=0;
		$("#U5_RDC13_P18_siguiente_id").show();
	}
	else{
	$("#U5_RDC13_P18_revisar_id").hide();
	oportunity++;
	cont=0;
	if (oportunity<2) {
		showP18();

	}
	else{
		oportunity=0;
        $("#U5_RDC13_P18_siguiente_id").show();

	};	
	};
}

function showP19 () {
	nav_current	= "U5_RDC13_ACT1_P19";
	fun = showP20;
	fun2 = showP18;
	show_Nav();
	$("#U5_RDC13_ACT1_P19").show();
	$("#U5_RDC13_ACT1_P18").hide();
	$("#U5_RDC13_ACT1_P20").hide();
	document.getElementById("U5_RDC13_P19_TextBoxResp1_id").value="Responde aqui!!!";
	$("#U5_RDC13_P19_listo_id").bind("click",showP20);
	/*$("#U5_RDC13_P0_act2_id").bind("click",showA2);*/
	audioP20.pause();

}



function showP20 () {
	nav_current	= "U5_RDC13_ACT1_P20";
	fun = showP21;
	fun2 = showP19;
	$("#U5_RDC13_ACT1_P20").show();
	$("#U5_RDC13_ACT1_P19").hide();
	$("#U5_RDC13_ACT1_P21").hide();
	hide_Nav();
	$("#U5_RDC13_P20_act2_id").bind("click",showP21);
	/*$("#U5_RDC13_P0_act2_id").bind("click",showA2);*/


	audioP21.pause();
	blinkElement("U5_RDC13_P20_bocina_id",true);


}

function showP21 () {
	nav_current	= "U5_RDC13_ACT1_P21";
	$("#U5_RDC13_ACT1_P21").show();
	$("#U5_RDC13_ACT1_P20").hide();
	$("#U5_RDC13_ACT1_P22").hide();
	fun = showP22;
	fun2 = showP20;
	show_Nav();
	audioMonopolio.pause();
	/*$("#U5_RDC13_P0_act2_id").bind("click",showA2);*/
	audioP20.pause();
	blinkElement("U5_RDC13_P21_bocina_id",true);
}

function showP22 () {
	nav_current	= "U5_RDC13_ACT1_P22";
	fun = showP23;
	fun2 = showP21;
	show_Nav();
	/*$("#U5_RDC13_P0_act2_id").bind("click",showA2);*/

	audioP21.pause();
	audioP23.pause();
	$("#U5_RDC13_ACT1_P23").hide();
	blinkElement("U5_RDC13_P22_audiopoemaP8_id",true);
}

function showP23 () {
	nav_current	= "U5_RDC13_ACT1_P23";
	fun = showP24;
	fun2 = showP22;

	show_Nav();
	$("#U5_RDC13_ACT1_P24").hide();
	/*$("#U5_RDC13_P0_act2_id").bind("click",showA2);*/
	audioMonopolio.pause();
	blinkElement("U5_RDC13_P23_bocina_id",true);


}
function showP24 () {
	nav_current	= "U5_RDC13_ACT1_P24";
	fun = showP25;
	fun2 = showP23;
	$("#U5_RDC13_ACT1_P25").hide();
	show_Nav();
	document.getElementById("U5_RDC13_P24_TextBoxResp1_id").value="Responde aqui!!!";

	audioP23.pause();

}

function showP25 () {
	nav_current	= "U5_RDC13_ACT1_P25";
	fun = showP26;
	fun2 = showP24;
	hide_Nav();
	$("#U5_RDC13_P0").hide();
	$("#U5_RDC13_ACT1_P26").hide();
	$("#U5_RDC13_P25_listo_id").hide();
	$("#U5_RDC13_P25_listo_id").bind("click",showP26);

}



function showP26 () {

	nav_current	= "U5_RDC13_ACT1_P26";
	fun = showP27;
	fun2 = showP25;
	show_Nav();
	$("#U5_RDC13_ACT1_P26").show();
	$("#U5_RDC13_ACT1_P27").hide();
	$("#U5_RDC13_ACT1_P25").hide();
	$("#U5_RDC13_P26_listo_id").hide();

	var clases = ["U5_RDC13_P11_opc1","U5_RDC13_P11_opc2","U5_RDC13_P11_opc3","U5_RDC13_P11_opc4"];

	clases=_.shuffle(clases);


	for (var i = 1; i <= 4; i++) {
		
		$("#U5_RDC13_P26_opc"+[i]+"_id").removeAttr('style');
		
	};


	for (var i = 0; i <= 4; i++) {
		
		$("#U5_RDC13_P26_opc"+[i+1]+"_id").removeClass();
		$("#U5_RDC13_P26_opc"+[i+1]+"_id").addClass(clases[i]);
		
	};

	for (var i = 1; i <= 4; i++) {
		
		$("#U5_RDC13_P26_opc"+[i]+"_id").draggable(

				regresa4()

		);
	};

	for (var i = 1; i <= 1; i++) {
		
		$("#U5_RDC13_P26_pregunta2_id").droppable({accept:"#U5_RDC13_P26_opc1_id,#U5_RDC13_P26_opc2_id,#U5_RDC13_P26_opc3_id,#U5_RDC13_P26_opc4_id",
	drop:function(event,ui){
		dropable=$(this).attr('id');
		dropevent4(event,ui);
		ocultar();
	}});
	
};





}
function regresa4(){
	U5_regresando = true;
	setTimeout(U5_termineRegresar(), 300);
	return {
		revert:"invalid",
		opacity:0.7
	};
	
}
function U5_termineRegresar3(){
	U5_regresando = false;
}
function dropevent4(event,ui){
	dragable=ui.draggable.attr('id');
	var d1=dropable.charAt(21);
	var d2=dragable.charAt(16);

	
	if (d1==d2) {
		$("#U5_RDC13_P26_listo_id").show();
		cont++;
	};
	if (d1!=d2) {
		$("#U5_RDC13_P26_listo_id").show();
	};
}

function chekdrop4(){
	if (cont==1) {
		$("#U5_RDC13_P26_listo_id").hide();
		cont=0;
		$("#U5_RDC13_P26_siguiente_id").show();
	}
	else{
	$("#U5_RDC13_P26_revisar_id").hide();
	oportunity++;
	cont=0;
	if (oportunity<1000000) {

		$("#U5_RDC13_P26_retromal_id").show();
		$("#U5_RDC13_P26_retromaltxt_id").show();
		$("#U5_RDC13_P26_retromal_id").bind("click",showP26());
		
		

	}
	else{
		oportunity=0;
        $("#U5_RDC13_P26_siguiente_id").show();

	};	
	};
}




function showP27 () {
	nav_current	= "U5_RDC13_ACT1_P27";
	fun = showP28;
	fun2 = showP26;
	show_Nav();
	$("#U5_RDC13_P27_listo_id").hide();
	$("#U5_RDC13_P27_listo_id").bind("click",showP28);
	$("#U5_RDC13_ACT1_P28").hide();


	audioP28.pause();

}



function showP28 () {
	nav_current	= "U5_RDC13_ACT1_P28";
	fun = showP29;
	fun2 = showP27;
	$("#U5_RDC13_ACT1_P28").show();
	$("#U5_RDC13_ACT1_P27").hide();
	$("#U5_RDC13_ACT1_P29").hide();
	show_Nav();



	blinkElement("U5_RDC13_P28_bocina_id",true);

}

function showP29 () {
	nav_current	= "U5_RDC13_ACT1_P29";
	fun = showP30;
	fun2 = showP28;
	show_Nav();
	$("#U5_RDC13_ACT1_P30").hide();
	$("#U5_RDC13_ACT1_P29").show();
	$("#U5_RDC13_ACT1_P28").hide();

	audioP28.pause();
	audioP30.pause();


}


function showP30 () {
	nav_current	= "U5_RDC13_ACT1_P30";
	fun = showP31;
	fun2 = showP29;
	$("#U5_RDC13_ACT1_P30").show();
	$("#U5_RDC13_ACT1_P29").hide();
	
	$("#U5_RDC13_P30_act1_id").hide();
	$("#U5_RDC13_P30_act1_id").bind("click",showP30);
	/*$("#U5_RDC13_P0_act2_id").bind("click",showA2);*/


	blinkElement("U5_RDC13_P30_bocina_id",true);
	audioP31.pause();


}


function showP31 () {
	nav_current	= "U5_RDC13_ACT1_P30";
	fun = showRDC13;
	fun2 = showP30;
	$("#U5_RDC13_ACT1_P31").show();
	$("#U5_RDC13_ACT1_P30").hide();
	show_Nav();
	/*$("#U5_RDC13_P0_act2_id").bind("click",showA2);*/

	audioP30.pause();

	blinkElement("U5_RDC13_P31_bocina_id",true);



}




function showhome () {

$("#U5_RDC13_P0").hide();
$("#U5_RDC13_P1").hide();
$("#U5_RDC13_P2").hide();
$("#U5_RDC13_P3").hide();
$("#U5_RDC13_P4").hide();
$("#U5_RDC13_P5").hide();
$("#U5_RDC13_P6").hide();
$("#U5_RDC13_P7").hide();
$("#U5_RDC13_P8").hide();
$("#U5_RDC13_P9").hide();
$("#U5_RDC13_P14").hide();
$("#U5_RDC13_P15").hide();
$("#U5_RDC13_P16").hide();
$("#U5_RDC13_P17").hide();
$("#U5_RDC13_P18").hide();
$("#U5_RDC13_P19").hide();
$("#U5_RDC13_P20").hide();
$("#U5_RDC13_P21").hide();
$("#U5_RDC13_P22").hide();
$("#U5_RDC13_P23").hide();
$("#U5_RDC13_P24").hide();
$("#U5_RDC13_P25").hide();
$("#U5_RDC13_P26").hide();
$("#U5_RDC13_P27").hide();
$("#U5_RDC13_P28").hide();
$("#U5_RDC13_P29").hide();
$("#U5_RDC13_P30").hide();
$("#U5_RDC13_P31").hide();

$("#index").show();
}




function over (id){

      $("#"+id).show();
}

function out (id){

      $("#"+id).hide();
}


function over2 (id, id2){

    document.getElementById("U5_RDC13_P4_POPlira1_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira2_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira3_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira4_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira5_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira6_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira7_id").style.display = 'none';

	$("#"+id).show();
	

//document.getElementById(id).style.display = 'none !important';


}



var pepe;
var pepes;
var pepe29;
var panta5;

function cambiar2(id) 
{ 
      panta5=document.getElementById(id).value 
} 

function cambiar(id) 
{ 
      pepe=document.getElementById(id).value 
} 

function cambiar1(id) 
{ 
     pepes=document.getElementById(id).value 
} 

function cambiar29(id) 
{ 
     pepe29=document.getElementById(id).value 
} 


function mostrarResp(){
     var resp = document.getElementById("U5_RDC13_resp1_id");
     resp.value = pepe;
     resp.style.display = 'block';
     document.getElementById("cerrar1").style.display = 'block';
}

function mostrarResp1(){
     var resp = document.getElementById("U5_RDC13_resp2_id");
     resp.value = pepes;
     resp.style.display = 'block';
     document.getElementById("cerrar2").style.display = 'block';
}

function mostrarResp2(){
     var resp = document.getElementById("U5_RDC13_resp29_id");
     resp.value = pepe29;
     resp.style.display = 'block';
     document.getElementById("cerrar29").style.display = 'block';
}



$("#U5_RDC13_P4_listo_id").bind("click",chekdrop);

$("#U5_RDC13_P11_listo_id").bind("click",chekdrop3);

$("#U5_RDC13_P18_listo_id").bind("click",chekdrop2);

$("#U5_RDC13_P26_listo_id").bind("click",chekdrop4);












$(document).ready(inicio());

function inicio(){
     $(document).ready(function(){
     $("#btnRDC13").bind("click",showRDC13);
        });
}













function ocultar(){
	document.getElementById("U5_RDC13_P4_POPlira1_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira2_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira3_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira4_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira5_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira6_id").style.display = 'none';
	document.getElementById("U5_RDC13_P4_POPlira7_id").style.display = 'none';
}

function ocultar18(){
	document.getElementById("U5_RDC13_P18_POPlira1_id").style.display = 'none';
	document.getElementById("U5_RDC13_P18_POPlira2_id").style.display = 'none';
	document.getElementById("U5_RDC13_P18_POPlira3_id").style.display = 'none';
	document.getElementById("U5_RDC13_P18_POPlira4_id").style.display = 'none';
	document.getElementById("U5_RDC13_P18_POPlira5_id").style.display = 'none';
	document.getElementById("U5_RDC13_P18_POPlira6_id").style.display = 'none';
	document.getElementById("U5_RDC13_P18_POPlira7_id").style.display = 'none';
}









var flag = 0;


var element = document.getElementById("U5_RDC13_P4_lira1_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P4_POPlira1_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);


var element = document.getElementById("U5_RDC13_P4_lira2_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P4_POPlira2_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);

var element = document.getElementById("U5_RDC13_P4_lira3_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P4_POPlira3_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);

var element = document.getElementById("U5_RDC13_P4_lira4_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P4_POPlira4_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);

var element = document.getElementById("U5_RDC13_P4_lira5_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P4_POPlira5_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);

var element = document.getElementById("U5_RDC13_P4_lira6_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P4_POPlira6_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);

var element = document.getElementById("U5_RDC13_P4_lira7_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        //console.log("click");
         ocultar2();
        $("#U5_RDC13_P4_POPlira7_id").show();
    }
    else if(flag === 1){
        //console.log("drag");
        ocultar2();
    }
}, false);






var element = document.getElementById("U5_RDC13_P18_lira1_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P18_POPlira1_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);


var element = document.getElementById("U5_RDC13_P18_lira2_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P18_POPlira2_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);

var element = document.getElementById("U5_RDC13_P18_lira3_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P18_POPlira3_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);

var element = document.getElementById("U5_RDC13_P18_lira4_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P18_POPlira4_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);

var element = document.getElementById("U5_RDC13_P18_lira5_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P18_POPlira5_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);

var element = document.getElementById("U5_RDC13_P18_lira6_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P18_POPlira6_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);

var element = document.getElementById("U5_RDC13_P18_lira7_id");
element.addEventListener("mousedown", function(){
    flag = 0;
}, false);
element.addEventListener("mousemove", function(){
    flag = 1;
}, false);
element.addEventListener("mouseup", function(){
    if(flag === 0){
        console.log("click");
         ocultar2();
        $("#U5_RDC13_P18_POPlira7_id").show();
    }
    else if(flag === 1){
        console.log("drag");
        ocultar2();
    }
}, false);









function ocultar2(){
			document.getElementById("U5_RDC13_P4_POPlira1_id").style.display = 'none';
	        document.getElementById("U5_RDC13_P4_POPlira2_id").style.display = 'none';
	        document.getElementById("U5_RDC13_P4_POPlira3_id").style.display = 'none';
	        document.getElementById("U5_RDC13_P4_POPlira4_id").style.display = 'none';
	        document.getElementById("U5_RDC13_P4_POPlira5_id").style.display = 'none';
	        document.getElementById("U5_RDC13_P4_POPlira6_id").style.display = 'none';
	        document.getElementById("U5_RDC13_P4_POPlira7_id").style.display = 'none';
}

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

function U5_rdc13_ReproducirAudioDos(){
	blinkElement("U5_RDC13_P1_audiopayadoratoc_id",false);
	$("#U5_RDC13_P1_siguiente_id").show();
	blinkElement("U5_RDC13_P1_siguiente_id",true);

	if(audioP1.paused){
		audioP1.play();			
	}else{
		audioP1.pause();
	}
}

function U5_rdc13_ReproducirAudioTres(){
	blinkElement("U5_RDC13_P2_bocina_id",false);
	blinkElement("U5_RDC13_P2_cantodiv_id",true);
	$("#U5_RDC13_P2_siguiente_id").show();
	blinkElement("U5_RDC13_P2_siguiente_id",true);
	if(audioP2.paused){
		audioP2.play();			
	}else{
		audioP2.pause();
	}
	
}

function U5_Rdc13_ReproducirAudioCuatro(){
	blinkElement("U5_RDC13_P3_bocina_id",false);
		$("#U5_RDC13_P3_siguiente_id").show();
	blinkElement("U5_RDC13_P3_siguiente_id",true);
	if(audioP3.paused){
		audioP3.play();			
	}else{
		audioP3.pause();
	}
}

function U5_Rdc13_ReproducirAudioSeis(){
	blinkElement("U5_RDC13_P6_bocina_id",false);
	blinkElement("U5_RDC13_P6_act2_id",true);
	$("#U5_RDC13_P6_siguiente_id").show();
	blinkElement("U5_RDC13_P6_siguiente_id",true);
	if(audioP6.paused){
		audioP6.play();			
	}else{
		audioP6.pause();
	}
}

function U5_Rdc13_ReproducirAudioSiete(){
	blinkElement("U5_RDC13_P7_bocina_id",false);
	$("#U5_RDC13_P7_siguiente_id").show();
	blinkElement("U5_RDC13_P7_siguiente_id",true);
	if(audioP7.paused){
	audioP7.play();			
	}else{
		audioP7.pause();
	}
}

function U5_Rdc13_ReproducirAudioOcho(){
	blinkElement("U5_RDC13_P9_bocina_id",false);
	$("#U5_RDC13_P9_siguiente_id").show();
	blinkElement("U5_RDC13_P9_siguiente_id",true);
	if(audioP9.paused){
		audioP9.play();			
	}else{
		audioP9.pause();
	}
}

function U5_RDC13_ReproducirAudioNueve(){
	blinkElement("U5_RDC13_P14_bocina_id",false);
		$("#U5_RDC13_P14_siguiente_id").show();
	blinkElement("U5_RDC13_P14_siguiente_id",true);
	if(audioP14.paused){
		audioP14.play();			
	}else{
		audioP14.pause();
	}
}

function U5_RDC13_ReproducirAudioDiez(){
	blinkElement("U5_RDC13_P16_bocina_id",false);
	blinkElement("U5_RDC13_P16_cantohum_id",true);
	$("#U5_RDC13_P16_siguiente_id").show();
	blinkElement("U5_RDC13_P16_siguiente_id",true);
	if(audioP16.paused){
		audioP16.play();			
	}else{
		audioP16.pause();
	}
}

function U5_RDC13_ReproducirAudioOnce(){
	blinkElement("U5_RDC13_P17_bocina_id",false);
	$("#U5_RDC13_P17_siguiente_id").show();
	blinkElement("U5_RDC13_P17_siguiente_id",true);
	if(audioP17.paused){
		audioP17.play();			
	}else{
		audioP17.pause();
	}
}



function pregP10(){

   document.getElementsByTagName('U5_RDC13_P10_retro_id').style.display = 'block';

   document.getElementsByTagName('U5_RDC13_P10_SIp1_id').style.display = 'block';
   document.getElementsByTagName('U5_RDC13_P10_NOp1_id').style.display = 'block';
   document.getElementsByTagName('U5_RDC13_P10_SIp2_id').style.display = 'block';   
   document.getElementsByTagName('U5_RDC13_P10_NOp2_id').style.display = 'block';

   

}





function U5_cambiarOpacityNOp1(){
var kgb = 1.5;  
     $("#U5_RDC13_P10_NOp1_id").css("opacity",kgb);
     

}
function U5_cambiarOpacitySIp1(){
var kgb = 1.5;  
     $("#U5_RDC13_P10_SIp1_id").css("opacity",kgb);
     $("#U5_RDC13_P10_NOp1_id").hide();
    

}
function U5_cambiarOpacityNOp2(){
var kgb = 1.5;  
     $("#U5_RDC13_P10_NOp2_id").css("opacity",kgb);
    


}
function U5_cambiarOpacitySIp2(){
var kgb = 1.5;  
     $("#U5_RDC13_P10_SIp2_id").css("opacity",kgb);
      $("#U5_RDC13_P10_NOp2_id").hide();
    

}



function U5_cambiarOpacityNOp1_P12(){
var kgb = 1.5;  
    
     $("#U5_RDC13_P12_NOp1_id").css("opacity",kgb);

}
function U5_cambiarOpacitySIp1_P12(){
var kgb = 1.5;  
     
     $("#U5_RDC13_P12_SIp1_id").css("opacity",kgb);
     $("#U5_RDC13_P12_NOp1_id").hide();

}
function U5_cambiarOpacityNOp2_P12(){
var kgb = 1.5;  
     
     $("#U5_RDC13_P12_NOp2_id").css("opacity",kgb);


}
function U5_cambiarOpacitySIp2_P12(){
var kgb = 1.5;  
    
      $("#U5_RDC13_P12_SIp2_id").css("opacity",kgb);
      $("#U5_RDC13_P12_NOp2_id").hide();

}


function U5_cambiarOpacityNOp1_P24(){
var kgb = 1.5;  
    
     $("#U5_RDC13_P24_NOp1_id").css("opacity",kgb);

}
function U5_cambiarOpacitySIp1_P24(){
var kgb = 1.5;  
     
     $("#U5_RDC13_P24_SIp1_id").css("opacity",kgb);
     $("#U5_RDC13_P24_NOp1_id").hide();

}
function U5_cambiarOpacityNOp2_P24(){
var kgb = 1.5;  
     
     $("#U5_RDC13_P24_NOp2_id").css("opacity",kgb);


}
function U5_cambiarOpacitySIp2_P24(){
var kgb = 1.5;  
    
      $("#U5_RDC13_P24_SIp2_id").css("opacity",kgb);
      $("#U5_RDC13_P24_NOp2_id").hide();

}

function U5_rdc13_reproducirAudioUno(){
	blinkElement("U5_RDC13_P0_bocina_id",false);
	$("#U5_RDC13_P0_siguiente_id").show();
	blinkElement("U5_RDC13_P0_act1_id",true);

	blinkElement("U5_RDC13_P0_siguiente_id",true);
	if(audioP0.paused){
		audioP0.play();			
	}else{
		audioP0.pause();
	}
}

$(document).ready(function(e) {
	$("#U5_RDC13_P20_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC13_P20_bocina_id",false);
	blinkElement("U5_RDC13_P20_act2_id",true);
	$("#U5_RDC13_P20_siguiente_id").show();
	blinkElement("U5_RDC13_P20_siguiente_id",true);
	if(audioP20.paused){
		audioP20.play();			
		}else{
			audioP20.pause();
		}
	});


$("#U5_RDC13_P21_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC13_P21_bocina_id",false);
	$("#U5_RDC13_P21_siguiente_id").show();
	blinkElement("U5_RDC13_P21_siguiente_id",true);
	if(audioP21.paused){
		audioP21.play();			
		}else{
			audioP21.pause();
		}
	});

$("#U5_RDC13_P23_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC13_P23_bocina_id",false);
		$("#U5_RDC13_P23_siguiente_id").show();
	blinkElement("U5_RDC13_P23_siguiente_id",true);
	if(audioP23.paused){
		audioP23.play();			
		}else{
			audioP23.pause();
		}
	});


$("#U5_RDC13_P28_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC13_P28_bocina_id",false);
	$("#U5_RDC13_P28_siguiente_id").show();
	blinkElement("U5_RDC13_P28_siguiente_id",true);
	if(audioP28.paused){
		audioP28.play();			
		}else{
			audioP28.pause();
		}
	});

$("#U5_RDC13_P30_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC13_P30_bocina_id",false);
	$("#U5_RDC13_P30_siguiente_id").show();
	blinkElement("U5_RDC13_P30_siguiente_id",true);
	if(audioP30.paused){
		audioP30.play();			
		}else{
			audioP30.pause();
		}
	});

$("#U5_RDC13_P31_bocina_id").bind("click",function  () {
	blinkElement("U5_RDC13_P31_bocina_id",false);
	$("#U5_RDC13_P31_siguiente_id").show();
	blinkElement("U5_RDC13_P31_siguiente_id",true);
	if(audioP31.paused){
		audioP31.play();			
		}else{
			audioP31.pause();
		}
	});
	
function U5_Rdc13_ReproducirAudioPoema(){
	blinkElement("U5_RDC13_P8_audiopoemaP8_id",false);
		$("#U5_RDC13_P8_siguiente_id").show();
		blinkElement("U5_RDC13_P8_siguiente_id",true);

	if(audioVirgen.paused){
		audioVirgen.play();			
	}else{
		audioVirgen.pause();
	}
}



$("#U5_RDC13_P22_audiopoemaP8_id").bind("click",function  () {
	blinkElement("U5_RDC13_P22_audiopoemaP8_id",false);
	$("#U5_RDC13_P22_siguiente_id").show();
		blinkElement("U5_RDC13_P22_siguiente_id",true);
	if(audioMonopolio.paused){
		audioMonopolio.play();			
		}else{
			audioMonopolio.pause();
		}
	});
});