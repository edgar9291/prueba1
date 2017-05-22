

var fun =undefined;
var fun2= undefined;
var draggable = undefined;
var droppable = undefined;
var dropclas=undefined;
var droptop= undefined;
var dropleft=undefined;
var fincheck=false;
var checkc=false;
var choses= undefined;
var video_p4,video_p4src;
var cont = 0;
var check = 0;
var oportunity=0;
var text_temp_p7="";
var intro_principito = new Audio('audio/unidad2/intro_principito.mp3');
var principito_p1 = new Audio('audio/unidad2/principito_p1.mp3');
var principito_p3 = new Audio('audio/unidad2/principito_p3.mp3');
var principito_intro2 = new Audio('audio/unidad2/principito_intro2.mp3');
var principito_ACT2_P1 = new Audio('audio/unidad2/principito_ACT2_P1.mp3');
var principito_ACT2_P6 = new Audio('audio/unidad2/principito_ACT2_P6.mp3');
var principito_ACT2_P8 = new Audio('audio/unidad2/principito_ACT2_P8.mp3');
var next="";
var U2_RDC5_ACT1_finish = false;

function RDC5 () {
var texta1 = "Actividad 1: Ordenemos las partes de una secuencia narrativa ";
var texta2 = "Actividad 2: Analicemos e interpretemos  un cortometraje sobre la amistad";
show_Home();
principito_p1.pause();
principito_p1.currentTime=0;
$("#U2_RDC5_P02_speaker_id").hide();
$("#U2_RDC5_P02_text").hide();
$("#U2_RDC5_P0_spantext").html("");
$("#U2_RDC5_P0_act1text").html(texta1);
$("#U2_RDC5_P0_act2text").html(texta2);
var text = "En esta oportunidad quiero que acompañes para analizar una historia de amistad. Haz clic en el botón correspondiente para comenzar.";
$("#U2_RDC5_P0_spantext").html(text);
$("#U2_RDC5_P0").show();
blinkElement("U2_RDC5_P0_speaker_id",true);
if(U2_RDC5_ACT1_finish){
	blinkElement("U2_RDC5_P0_buttonA2",true);
}else{
	blinkElement("U2_RDC5_P0_buttonA1",true);
}
}

function A1P1 () {
	intro_principito.pause();
	intro_principito.currentTime=0;
	nav_current = $("#U2_RDC5_ACT1_P1").attr('id');
	$("#U2_RDC5_P1_spantext").html("");
	show_Nav();
	fun=A1P2;
	fun2=RDC5;
var text = "Me han recomendado un cortometraje para que entienda qué es la amistad, pero sus partes se han desordenado. Según me explicaron, los cortometrajes tienen una estructura similar a los microcuentos y presentan una situación inicial, un desarrollo y un desenlace. Ayúdame a ordenar sus partes arrastrando los fotogramas al lugar que les corresponde.";
	$("#U2_RDC5_P1_spantext").html(text);
	blinkElement("U2_RDC5_P1_speaker_id",true);
	blinkElement("forward_id",true);

	
}

var A1P2_showNav = false;
function A1P2() {
	fun=A1P3;
	fun2=A1P1;
	if(!A1P2_showNav){
	hide_Nav();}

principito_p1.pause();
principito_p1.currentTime=0;
principito_p3.pause();
principito_p3.currentTime=0;
$("#U2_RDC5_ACT1_P2_checktext").html("Comprobar");
var texta2 = ["La niña llega a la tienda a comprar una casa para su monstruo.",
			  "El anciano y la niña comienzan a hacerse amigos.",
			  "La niña vuelve a la tienda con más monstruos, que rompen algunas cosas",
			  "El anciano expulsa a los monstruos y a la niña de su tienda.",
			  "El anciano y la niña se reconcilian."];

var text_temp ="";

for (var i = 0; i <= 5; i++) {
	 text_temp = "<span id='U2_RDC5_P2_textD"+[i]+"'>"+texta2[i]+"</span>";
  	 $("#U2_RDC5_ACT1_P2_Drop"+[i+1]+"_id").html(text_temp);
};

var clases = ["U2_RDC5_ACT1_P2_Drag1","U2_RDC5_ACT1_P2_Drag2",
			  "U2_RDC5_ACT1_P2_Drag3","U2_RDC5_ACT1_P2_Drag4",
			  "U2_RDC5_ACT1_P2_Drag5"];

/*Remove Style*/
for (var i = 1; i <= 5; i++) {
	$("#U2_RDC5_ACT1_P2_Drag"+[i]+"_id").removeAttr('style');
	$("#U2_RDC5_ACT1_P2_Drag"+[i]+"_id").appendTo('#U2_RDC5_ACT1_P2_ContainerDrag_id');

};
/*shuffle clases*/
	clases = _.shuffle(clases);
	//console.log(clases);

for (var i = 0; i <= 5; i++) {
	$("#U2_RDC5_ACT1_P2_Drag"+[i+1]+"_id").removeClass();
	$("#U2_RDC5_ACT1_P2_Drag"+[i+1]+"_id").addClass(clases[i]);
	

};

	mouseover();
/*activate draggable */
for (var i = 1; i <= 5; i++) {

	$("#U2_RDC5_ACT1_P2_Drag"+[i]+"_id").draggable(regresa());
	$("#U2_RDC5_ACT1_P2_Drag"+[i]+"_id").draggable('enable');
};


	/*activate droppable*/
for (var i = 1; i <= 5; i++) {
	
	$("#U2_RDC5_ACT1_P2_Dropp"+[i]+"_id").droppable({
	accept: "#U2_RDC5_ACT1_P2_Drag1_id,#U2_RDC5_ACT1_P2_Drag2_id,#U2_RDC5_ACT1_P2_Drag3_id,"
			+"#U2_RDC5_ACT1_P2_Drag4_id,#U2_RDC5_ACT1_P2_Drag5_id",
	drop: function  (event, ui) {
				draggable=ui.draggable.attr('id');
				droppable= $(this).attr('id');
				dropclas=$(this).attr('Class');
				$("#"+draggable).appendTo(this);
				DropEventRDC5(event,ui);
			}
	});
};

}


function DropEventRDC5 (event, ui) {

$("#"+draggable).removeClass();
$("#"+draggable).removeAttr('style');
//$("#"+draggable).addClass(dropclas);

	$("#"+draggable).unbind("mouseover");
	$("#"+draggable).draggable('disable');
	var d1 = droppable.charAt(21);
	var d2 = draggable.charAt(20);
	
	
var	check1 = $("#U2_RDC5_ACT1_P2_Dropp1_id").children().length;
var	check2 = $("#U2_RDC5_ACT1_P2_Dropp2_id").children().length;
var	check3 = $("#U2_RDC5_ACT1_P2_Dropp3_id").children().length;
var	check4 = $("#U2_RDC5_ACT1_P2_Dropp4_id").children().length;
var	check5 = $("#U2_RDC5_ACT1_P2_Dropp5_id").children().length;

 check= check1+check2+check3+check4+check5;
	if (d1==d2) {
		cont++;
		};

	if(check==5){
		$("#U2_RDC5_ACT1_P2_check_id").show();
		check=0;
	};

}
function check_dropRDC5 () {
	if(cont==5){
		$("#U2_RDC5_ACT1_P2_check_id").hide();
		show_Nav();
		cont=0;
	}else{
		$("#U2_RDC5_ACT1_P2_check_id").hide();
		oportunity++;
		cont=0;
		if (oportunity<2) {
			setTimeout(A1P2,0);
		}else{
			A1P2_showNAV = true;
			oportunity=0;
			show_Nav();
			setTimeout(A1P2,0);
			blinkElement("forward_id",true);
		};

	};

}

function regresa(){
	return{
  		revert: "invalid",
  		opacity: 0.7
		};
  	}


function mouseover () {

	$("#U2_RDC5_ACT1_P2_Drag1_id").on("mouseover",function  () {
		$("#U2_RDC5_ACT1_P2_POP1_ID").show();
	});
	$("#U2_RDC5_ACT1_P2_Drag1_id").on("mouseout",function  () {
		$("#U2_RDC5_ACT1_P2_POP1_ID").hide();
	});
	$("#U2_RDC5_ACT1_P2_Drag1_id").on("drag",function  () {
		disable_popdrag ();
	});
	$("#U2_RDC5_ACT1_P2_Drag2_id").on("mouseover",function  () {
		$("#U2_RDC5_ACT1_P2_POP2_ID").show();
	});
	$("#U2_RDC5_ACT1_P2_Drag2_id").on("mouseout",function  () {
		$("#U2_RDC5_ACT1_P2_POP2_ID").hide();
	});
	$("#U2_RDC5_ACT1_P2_Drag2_id").on("drag",function  () {
		disable_popdrag ();
	});
	$("#U2_RDC5_ACT1_P2_Drag3_id").on("mouseover",function  () {
		$("#U2_RDC5_ACT1_P2_POP3_ID").show();
	});
	$("#U2_RDC5_ACT1_P2_Drag3_id").on("mouseout",function  () {
		$("#U2_RDC5_ACT1_P2_POP3_ID").hide();
	});
	$("#U2_RDC5_ACT1_P2_Drag3_id").on("drag",function  () {
		disable_popdrag ();
	});
	$("#U2_RDC5_ACT1_P2_Drag4_id").on("mouseover",function  () {
		$("#U2_RDC5_ACT1_P2_POP4_ID").show();
	});
	$("#U2_RDC5_ACT1_P2_Drag4_id").on("mouseout",function  () {
		$("#U2_RDC5_ACT1_P2_POP4_ID").hide();
	});
	$("#U2_RDC5_ACT1_P2_Drag4_id").on("drag",function  () {
		disable_popdrag ();
	});
	$("#U2_RDC5_ACT1_P2_Drag5_id").on("mouseover",function  () {
		$("#U2_RDC5_ACT1_P2_POP5_ID").show();
	});
	$("#U2_RDC5_ACT1_P2_Drag5_id").on("mouseout",function  () {
		$("#U2_RDC5_ACT1_P2_POP5_ID").hide();
	});
	$("#U2_RDC5_ACT1_P2_Drag5_id").on("drag",function  () {
		disable_popdrag ();
	});

}

function disable_popdrag () {
$("#U2_RDC5_ACT1_P2_POP1_ID").hide();
$("#U2_RDC5_ACT1_P2_POP2_ID").hide();
$("#U2_RDC5_ACT1_P2_POP3_ID").hide();
$("#U2_RDC5_ACT1_P2_POP4_ID").hide();
$("#U2_RDC5_ACT1_P2_POP5_ID").hide();
}

function A1P3 () {
	if(video_p4){
		video_p4.pause();
		video_p4.currentTime=0;
	}
	fun2=A1P2;
	fun=A1P4;
	$("#U2_RDC5_P3_spantext").html("");
	var text ="¡Muy bien! Has completado la tarea. Ahora, ¡veamos el cortometraje!";
	$("#U2_RDC5_P3_spantext").html(text);
	blinkElement("U2_RDC5_P3_speaker_id",true);
	blinkElement("forward_id",true);


}

function A1P4 () {
	principito_p3.pause();
	principito_p3.currentTime=0;
	principito_intro2.pause();
	principito_intro2.currentTime=0;
	fun=A2P0;
	fun2=A1P3;
	if(!video_p4){
	video_p4 =  document.createElement('video');
	video_p4src= document.createElement('source');
	$(video_p4).attr('controls','');
	$(video_p4).attr('preload','auto');

	$(video_p4).addClass('U2_RDC5_ACT1_p4_video_S');
	U2_RDC5_ACT1_finish = true;
	$(video_p4src).attr('type','video/mp4');
	$(video_p4src).attr('src','video/unidad2/mosterbox.mp4');
	$("#U2_RDC5_ACT1_p4_video_id").append(video_p4);
	$(video_p4).append(video_p4src);
	}


}

function A2P0 () {
	if(video_p4){
		video_p4.pause();
		video_p4.currentTime=0;
	}
$("#U2_RDC5_P02_speaker_id").show();
$("#U2_RDC5_P02_text").show();
$("#U2_RDC5_P0_spantext").html("");
$("#U2_RDC5_P02_spantext").html("");
var text = "Haz clic en el botón de la Actividad 2 para continuar analizando el cortometraje sobre la amistad.";
$("#U2_RDC5_P02_spantext").html(text);



}

function A2P1 () {
	principito_intro2.pause();
	principito_intro2.currentTime=0;
	principito_ACT2_P1.pause();
	principito_ACT2_P1.currentTime=0;
	$("#U2_RDC5_ACT2_P1_1").hide();
		if(video_p4){
		video_p4.pause();
		video_p4.currentTime=0;
	};
	nav_current = $("#U2_RDC5_ACT2_P1").attr('id');
	show_Nav();
	fun=A2P2;
	fun2=A2P0;
	$("#U2_RDC5_act2_P1_spantext").html("");
var text = "En esta actividad responderás una serie de preguntas sobre el cortometraje que viste en la actividad anterior. Si necesitas volver a verlo, puedes hacer clic sobre el ícono. ¡Buena suerte!";
	$("#U2_RDC5_act2_P1_spantext").html(text);
	blinkElement("U2_RDC5_ACT2_P1_speaker_id",true);
	blinkElement("forward_id",true);




}

function A2P1_1 () {
	fun=A2P2;
	fun2=A2P1;
	principito_ACT2_P1.pause();
	principito_ACT2_P1.currentTime=0;
	if(!video_p4){
	video_p4 =  document.createElement('video');
	video_p4src= document.createElement('source');
	$(video_p4).attr('controls','');
	$(video_p4).attr('preload','auto');
	$(video_p4).addClass('U2_RDC5_ACT1_p4_video_S');
	$(video_p4src).attr('type','video/mp4');
	$(video_p4src).attr('src','video/unidad2/mosterbox.mp4');
	$("#U2_RDC5_ACT1_p1_1_video_id").append(video_p4);
	$(video_p4).append(video_p4src);
	}else{
	$("#U2_RDC5_ACT1_p1_1_video_id").append(video_p4);
	$(video_p4).append(video_p4src);
	}

}
var A2P2_showNAV = false;
function A2P2 () {
	if(!A2P2_showNAV){
	hide_Nav();
	}
	hidearrow();
	principito_ACT2_P1.pause();
	principito_ACT2_P1.currentTime=0;
	$("#U2_RDC5_ACT2_P2_correct").hide();
	$("#U2_RDC5_ACT2_P2_incorrect").hide();
	if(video_p4){
		video_p4.pause();
		video_p4.currentTime=0;
	};
	$("#U2_RDC5_ACT2_P1_1").hide();
	fun=A2P3;
	fun2=A2P1;
var texta2 = ["Entre un anciano y una niña",
			  "Imaginada por una niña",
			  "De siempre",
			  "Entre monstruos que se ayudan",
			  "Nueva, que no existía",
			  "Que se expresa al final con el amor y preocupación del anciano "];



var textcorrect = "¡Muy bien! Lo que caracteriza a esta amistad es que nace entre un anciano y una niña, la que se refleja en acciones al final del cortometraje.";
var textincorrect = "¡Intenta otra vez! La pregunta apunta al tema que aborda el cortometraje, que es general y se mantiene desde que comienza hasta que termina.";
$("#U2_RDC5_ACT2_P2_checktext").html("Comprobar");
$("#U2_RDC5_ACT2_P2_correcttext").html(textcorrect);
$("#U2_RDC5_ACT2_P2_incorrecttext").html(textincorrect);

var text_temp ="";
for (var i = 0; i <= 5; i++) {
	 text_temp = texta2[i];
  	 $("#U2_RDC5_ACT2_P2_spantext"+[i+1]).html(text_temp);
};
$("#U2_RDC5_ACT2_P2_spantext").html("Amistad");
var clases = ["U2_RDC5_ACT2_P2_text1","U2_RDC5_ACT2_P2_text2",
			  "U2_RDC5_ACT2_P2_text3","U2_RDC5_ACT2_P2_text4",
			  "U2_RDC5_ACT2_P2_text5","U2_RDC5_ACT2_P2_text6"];


/*shuffle clases*/
	clases = _.shuffle(clases);



for (var i = 0; i <= 6; i++) {
	$("#U2_RDC5_ACT2_P2_text"+[i+1]+"_id").removeClass();
	$("#U2_RDC5_ACT2_P2_text"+[i+1]+"_id").addClass(clases[i]);
	$("#U2_RDC5_ACT2_P2_text"+[i+1]+"_id").attr('alt',[i]);
};



$("#U2_RDC5_ACT2_P2_arrow").draggable({
	revert:"invalid",
	helper: "clone",
	stop: function  () {
		$(".U2_RDC5_ACT2_P2_Clone").remove();
	},
}).on('drag', function  (event, ui) {
	$(ui.helper).css('z-index','3');
	$(ui.helper).addClass('U2_RDC5_ACT2_P2_Clone');
	$(ui.helper).attr('id','1');
	$(this).after($(ui.helper).clone());

});


	/*activate droppable*/
for (var i = 1; i <= 6; i++) {
	
	$("#U2_RDC5_ACT2_P2_text"+[i]+"_id").droppable({
			accept: "#U2_RDC5_ACT2_P2_arrow",
			tolerance: 'pointer',
			drop: function(event,ui){
				droppable= $(this).attr('id');
				dropclas=$(this).attr('Class');
				check_drag(event, ui);
				}
	});
};


}

function check_drag (event, ui) {

	draggable= ui.helper.attr('id');
	var d1 = droppable.charAt(20);
	var d2 = draggable;
	var d3 = dropclas.charAt(20);
	showarrow(d3);
	$(".U2_RDC5_ACT2_P2_Clone").remove();
	check ++;
	if ((d2=='1'&&d1=='1')||(d2=='1'&& d1=='5')||(d2=='1'&&d1=='6')) {
		cont++;
		};
	if(check==3){
		$("#U2_RDC5_ACT2_P2_check").show();	
	};

}
function showarrow (chose) {
if(chose==5){
	$("#U2_RDC5_ACT2_P2_arrow2").show();
}else if(chose==2){
	$("#U2_RDC5_ACT2_P2_arrow5").show();
}else if(chose==1){
	$("#U2_RDC5_ACT2_P2_arrow6").show();
}else if(chose==3){
	$("#U2_RDC5_ACT2_P2_arrow4").show();
}else if(chose==6){
	$("#U2_RDC5_ACT2_P2_arrow1").show();	
}else if(chose==4){
	$("#U2_RDC5_ACT2_P2_arrow3").show();
}

}
function hidearrow () {
	
	$("#U2_RDC5_ACT2_P2_arrow1").hide();
	$("#U2_RDC5_ACT2_P2_arrow2").hide();
	$("#U2_RDC5_ACT2_P2_arrow3").hide();
	$("#U2_RDC5_ACT2_P2_arrow4").hide();
	$("#U2_RDC5_ACT2_P2_arrow5").hide();
	$("#U2_RDC5_ACT2_P2_arrow6").hide();
}
function check_drag2 () {

		if(cont==3){
		$("#U2_RDC5_ACT2_P2_check").hide();
		$("#U2_RDC5_ACT2_P2_correct").show();
		show_Nav();
		blinkElement("forward_id",true);
		cont=0;
	}else{
		$("#U2_RDC5_ACT2_P2_check").hide();
		$("#U2_RDC5_ACT2_P2_incorrect").show();
		oportunity++;
		cont=0;
		if (oportunity<2) {
			setTimeout(A2P2,2000);
		}else{
			oportunity= 0;
			A2P2_showNAV = true;
			setTimeout(A2P2,2000);
			show_Nav();
		};

	};
}
var A2P3_showNAV = false;
function A2P3 () {
	fun=A2P4;
	fun2=A2P2;

	if(!A2P3_showNAV){
	hide_Nav();
}
	$("#U2_RDC5_ACT2_P3_correct").hide();
	$("#U2_RDC5_ACT2_P3_incorrect").hide();
	$("#U2_RDC5_ACT2_P4_check_id").hide();
var texta2 = ["Crean una atmósfera alegre ",
			  "Cálidos","Fríos","Opacos",
			  "Demuestran la tristeza y soledad del anciano",
			  "Distraen la atención del espectador"];
var textcorrect = "¡Exacto! Los colores cortometraje ayudan a crear un ambiente acogedor, que acompaña la historia entre el anciano y la niña.";
var textincorrect = "¡Prueba de nuevo! Lee nuevamente y con cuidado cada alternativa, relacionando los colores con la historia.";
var text_temp ="";
for (var i = 0; i <= 6; i++) {
	 text_temp = texta2[i];
  	 $("#U2_RDC5_ACT2_P3_spantext"+[i+1]).html(text_temp);
};

$("#U2_RDC5_ACT2_P4_checktext").html("Comprobar");
$("#U2_RDC5_ACT2_P3_correcttext").html(textcorrect);

$("#U2_RDC5_ACT2_P3_incorrecttext").html(textincorrect);



var clases = ["U2_RDC5_ACT2_P3_text1","U2_RDC5_ACT2_P3_text2",
			  "U2_RDC5_ACT2_P3_text3","U2_RDC5_ACT2_P3_text4",
			  "U2_RDC5_ACT2_P3_text5","U2_RDC5_ACT2_P3_text6"];

/*Remove Style*/
for (var i = 1; i <= 6; i++) {
	$("#U2_RDC5_ACT2_P3_text"+[i]).removeAttr('style');
	$("#U2_RDC5_ACT2_P3_text"+[i]).appendTo('#U2_RDC5_ACT2_P3');
};
/*shuffle clases*/
	clases = _.shuffle(clases);

for (var i = 0; i <= 6; i++) {
	$("#U2_RDC5_ACT2_P3_text"+[i+1]).removeClass();
	$("#U2_RDC5_ACT2_P3_text"+[i+1]).addClass(clases[i]);
	$("#U2_RDC5_ACT2_P3_text"+[i+1]).addClass('U2_RDC5_ACT2_P3_butons');

};
/*activate draggable */
for (var i = 1; i <= 6; i++) {
	$("#U2_RDC5_ACT2_P3_text"+[i]).draggable(regresa());
};

	$("#U2_RDC5_ACT2_P3_drop").droppable({
				
	drop: function  (event, ui) {
				droppable= $(this).attr('id');
				draggable=ui.draggable.attr('id');
				$("#"+draggable).appendTo('#U2_RDC5_ACT2_P3_drop');
				$("#"+draggable).removeAttr('style');

		 		DropEvent2_ACT2_P3(event,ui);
			}

	});
$("#U2_RDC5_ACT2_P3_drop").droppable('enable');
}
function DropEvent2_ACT2_P3 (event, ui) {
				
		
	var d1 = draggable.charAt(draggable.length-1);
	check = $("#U2_RDC5_ACT2_P3_drop").children().length;
	
	if (d1=='1'||d1=='2') {
		cont++;
		};
	if(check==3){
$("#"+droppable).droppable('disable');
$("#U2_RDC5_ACT2_P4_check_id").show();
	};

}
function check_drop2_ACT2_P3 () {

	if(cont==2){
		$("#U2_RDC5_ACT1_P2_check_id").hide();
		$("#U2_RDC5_ACT2_P3_correct").show();
		show_Nav();
		blinkElement("forward_id",true);
		cont=0;
	}else{
		$("#U2_RDC5_ACT1_P2_check_id").hide();
		$("#U2_RDC5_ACT2_P3_incorrect").show();
		oportunity++;
		cont=0;
		if (oportunity<2) {
			setTimeout(A2P3,2000);
		}else{
			oportunity=0;
			A2P3_showNAV = true;
			show_Nav();
			setTimeout(A2P3,2000);
		};

	};

}

var A2P3_showNAV = false;
function A2P4 () {
	
	fun=A2P5;
	fun2=A2P3;
	if(!A2P3_showNAV){
hide_Nav();
}
$("#U2_RDC5_ACT2_P3_incorrect").hide();
$("#U2_RDC5_ACT2_P3_correct").hide();
$("#U2_RDC5_ACT2_P4_correct").hide();
$("#U2_RDC5_ACT2_P4_incorrect").hide();
var texta2 = ["La melodía: son dos canciones distintas.",
			  "El tipo: una es música clásica y la otra es moderna.",
			  "El mensaje: una comunica alegría y la otra, tristeza.",
			  "La potencia: una es más suave y la otra más potente."];
var textcorrect = "¡Excelente! Al inicio y al final del cortometraje se presenta la misma melodía, pero al final esta es más intensa.";
var textincorrect = "Vuelve a escuchar la música del inicio y del final del cortometraje. ¡Intenta de nuevo!";
var text_temp ="";
for (var i = 0; i <= 4; i++) {
	 text_temp = texta2[i];
  	 $("#U2_RDC5_ACT2_P4_spantext"+[i+1]).html(text_temp);
};

$("#U2_RDC5_ACT2_P4_correcttext").html(textcorrect);
$("#U2_RDC5_ACT2_P4_incorrecttext").html(textincorrect);

var clases = ["U2_RDC5_ACT2_P4_text1","U2_RDC5_ACT2_P4_text2",
			  "U2_RDC5_ACT2_P4_text3","U2_RDC5_ACT2_P4_text4",];


/*shuffle clases*/
	clases = _.shuffle(clases);

for (var i = 0; i <= 4; i++) {
	$("#U2_RDC5_ACT2_P4_text"+[i+1]).removeClass();
	$("#U2_RDC5_ACT2_P4_text"+[i+1]).addClass(clases[i]);
	$("#U2_RDC5_ACT2_P4_text"+[i+1]).addClass('buttonRDC5 click-effect');

	
};

}

function checkclick () {
	if(cont==2){
		$("#U2_RDC5_ACT2_P4_correct").show();
		cont=0;

		show_Nav();
		blinkElement("forward_id",true);

	}else{
		$("#U2_RDC5_ACT2_P4_incorrect").show();
		oportunity++;
		cont=0;
		if (oportunity<2) {
			setTimeout(A2P4,2000);
		}else{
			A2P3_showNAV = true;
			oportunity=0;
			show_Nav();
			setTimeout(A2P4,2000);
			blinkElement("forward_id",true);
		};

	};
	

}



function A2P5 () {
	fun=A2P6;
	fun2=A2P4;
	hide_Nav();
	text_temp_p7="";
$("#U2_RDC5_ACT2_P5_textedit").val(text_temp_p7);
$("#U2_RDC5_ACT2_P4_incorrect").hide();
$("#U2_RDC5_ACT2_P4_correct").hide();
$("#U2_RDC5_ACT2_P5_yes").removeClass('colorwhite');
$("#U2_RDC5_ACT2_P5_yes2").removeClass('colorwhite');
$("#U2_RDC5_ACT2_P5_no").removeClass('colorred');
$("#U2_RDC5_ACT2_P5_no2").removeClass('colorred');		
$("#U2_RDC5_ACT2_P5_fintext").html("Finalizar");
    
    var text_max = 250;
    $('#U2_RDC5_ACT2_P5_last').html(text_max);

    $('#U2_RDC5_ACT2_P5_textedit').keyup(function() {
        var text_length = $('#U2_RDC5_ACT2_P5_textedit').val().length;
        var text_remaining = text_max - text_length;
        $('#U2_RDC5_ACT2_P5_last').html(text_remaining);
    });

}

function popP5 () {

	$("#U2_RDC5_ACT2_P5_pop_id").show();
	$("#U2_RDC5_ACT2_P5_text").hide();
	$("#U2_RDC5_ACT2_P5_title2").hide();
	$("#U2_RDC5_ACT2_P5_fin_id").hide();
	$("#home_id").hide();
	hide_Nav();


$("#U2_RDC5_ACT2_P5_poptext1").html("Tu respuesta…");
$("#U2_RDC5_ACT2_P5_poptext2").html("Considera que la amistad se construye a partir de buenas y malas experiencias.");
$("#U2_RDC5_ACT2_P5_poptext3").html("Toma en cuenta los elementos audiovisuales usados para expresar sentimientos y emociones, al no contar con diálogos entre los personajes.");





}

function pop2P5 () {
	
	if(choses==true){
		
		
		document.getElementById('U2_RDC5_ACT2_P5_pop_id').style.opacity=0.5;
		$("#U2_RDC5_ACT2_P5_popno").html("Pon atención en la relación entre los personajes y las situaciones que viven a lo largo de la historia.");
		$("#U2_RDC5_ACT2_P5_pop2_id").show();
	}else if(choses==false){
		document.getElementById('U2_RDC5_ACT2_P5_pop_id').style.opacity=0.5;

		$("#U2_RDC5_ACT2_P5_popno").html("Vuelve a ver el cortometraje fijándote en los elementos usados para expresar sin palabras.");
				$("#U2_RDC5_ACT2_P5_pop2_id").show();


	}
	
}

function A2P6 () {
	fun=A2P7;
	fun2=A2P5;
	$("#U2_RDC5_act2_P6_spantext").html("");
var text = "Has terminado de responder las preguntas. Revisa cómo lo hiciste.";
	$("#U2_RDC5_act2_P6_spantext").html(text);
	blinkElement("U2_RDC5_Act2P6_speaker_id",true);
	blinkElement("forward_id",true);


}
function A2P7 () {
	fun=A2P8;
	fun2=A2P6;
	principito_ACT2_P6.pause();
	principito_ACT2_P6.currentTime=0;
	$("#U2_RDC5_act2_P7_spantext").html("");
	var text = "1. Elementos relacionados con la idea de amistad en el cortometraje.<br>"+
			   "• Entre un anciano y una niña<br>"+"• Nueva, que no existía<br>"+
			   "• Que se expresa al final con el amor y preocupación del anciano<br>"+
			   "2. ¿Qué caracteriza a los colores empleados en el corto?<br>"+
			   "• Son cálidos <br>"+"• Crean una atmósfera alegre<br>"+
			   "3. ¿Qué diferencia a la música del inicio y del final del cortometraje?<br>"+
			   "• La potencia: una es más suave y la otra más potente. <br>"+
			   "4. ¿Qué mensaje comunica el cortometraje?<br>"+"Revisa tu respuesta"+ "<a href ='#' onclick='showpopp7();'> aquí.</a>";


	$("#U2_RDC5_act2_P7_spantext").html(text);
	blinkElement("forward_id",true);

}
function showpopp7 () {
$("#U2_RDC5_ACT2_P7_pop").html(text_temp_p7);
$("#U2_RDC5_ACT2_P7_pop_id").show();
$("#U2_RDC5_ACT2_P7_principito_id").hide();
$("#U2_RDC5_ACT2_P7_text").hide();
$("#home_id").hide();
hide_Nav();
document.getElementById('U2_RDC5_ACT2_P7').style.opacity=0.5;
		$("#U2_RDC5_ACT2_P7_closepop_id").bind("click",function  () {
			$("#U2_RDC5_ACT2_P7_pop_id").hide();
			$("#U2_RDC5_ACT2_P7_principito_id").show();
			$("#U2_RDC5_ACT2_P7_text").show();
			$("#home_id").show();
			show_Nav();
			document.getElementById('U2_RDC5_ACT2_P7').style.opacity=1;
		});

}

function A2P8 () {
	fun=RDC5;
	fun2=A2P7;
	$("#U2_RDC5_ACT2_P7_pop_id").hide();
	document.getElementById('U2_RDC5_ACT2_P7').style.opacity=1;
				$("#U2_RDC5_ACT2_P7_principito_id").show();
			$("#U2_RDC5_ACT2_P7_text").show();
			$("#home_id").show();
$("#U2_RDC5_act2_P8box_spantext").html("");
$("#U2_RDC5_act2_P8_spantext").html("");
var text="• ¿Cuánto tiempo te demoraste en ordenar los fotogramas?<br>• ¿Qué dificultades tuviste?<br>• ¿Cómo crees que podrías mejorar tu desempeño?";
var text2="Has terminado las actividades del RDC 5.<br>Te invito a comentar con tus compañeros las siguientes preguntas. <br>¡Nos vemos en el próximo!";
$("#U2_RDC5_act2_P8box_spantext").html(text);
$("#U2_RDC5_act2_P8_spantext").html(text2);
blinkElement("U2_RDC5_Act2P8_speaker_id",true);
blinkElement("forward_id",true);



}

/*
/*nav
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
/*Show and Hide Nav
function show_Nav () {
	$("#forward_id").show();
	$("#back_id").show();
}
function hide_Nav () {
	$("#forward_id").hide();
	$("#back_id").hide();
}

function show_Home () {
	$("#home_id").show();
}

/*Bind Clicks*/
	$("#U2_RDC5_ACT2_P5_closepop_id").bind("click",function  () {
if(!fincheck){
	$("#U2_RDC5_ACT2_P5_pop_id").hide();
	document.getElementById('U2_RDC5_ACT2_P5').style.opacity=1;
	$("#U2_RDC5_ACT2_P5_text").show();
	$("#U2_RDC5_ACT2_P5_title2").show();
	$("#U2_RDC5_ACT2_P5_fin_id").show();
	}
	else{
	$("#U2_RDC5_ACT2_P5_pop_id").hide();
	document.getElementById('U2_RDC5_ACT2_P5').style.opacity=1;
		show_Nav();
		blinkElement("forward_id",true);
	text_temp_p7 = $('#U2_RDC5_ACT2_P5_textedit').val();
	$("#U2_RDC5_ACT2_P5_text").show();
	$("#U2_RDC5_ACT2_P5_title2").show();
	$("#U2_RDC5_ACT2_P5_fin_id").show();
	$("#home_id").show();
	}

	});

			$("#U2_RDC5_ACT2_P5_closepop2_id").bind("click",function  () {
			$("#U2_RDC5_ACT2_P5_pop2_id").hide();
			document.getElementById('U2_RDC5_ACT2_P5_pop_id').style.opacity=1;
		});
	$("#U2_RDC5_ACT2_P5_yes").bind("click",function  () {
		$("#U2_RDC5_ACT2_P5_yes").addClass('colorwhite');
		$("#U2_RDC5_ACT2_P5_no").removeClass('colorred');
	});
	$("#U2_RDC5_ACT2_P5_yes2").bind("click",function  () {
		$("#U2_RDC5_ACT2_P5_yes2").addClass('colorwhite');
		$("#U2_RDC5_ACT2_P5_no2").removeClass('colorred');
		fincheck=true;
	});
	$("#U2_RDC5_ACT2_P5_no").bind("click",function  () {
		$("#U2_RDC5_ACT2_P5_no").addClass('colorred');
		$("#U2_RDC5_ACT2_P5_yes").removeClass('colorwhite');
		choses=true;
		pop2P5();

	});
	$("#U2_RDC5_ACT2_P5_no2").bind("click",function  () {
		$("#U2_RDC5_ACT2_P5_no2").addClass('colorred');
		$("#U2_RDC5_ACT2_P5_yes2").removeClass('colorwhite');
		choses=false;
		pop2P5();
		fincheck=true;
	});
		$("#U2_RDC5_ACT2_P5_closepop2_id").bind("click",function  () {
		$("#U2_RDC5_ACT2_P5_pop2_id").hide();
		$("#U2_RDC5_ACT2_P5_popno").html("");
			document.getElementById('U2_RDC5_ACT2_P5_pop_id').style.opacity=1;
		});
$("#U2_RDC5_Act2P8_speaker_id").bind("click",function  () {
	blinkElement("U2_RDC5_Act2P8_speaker_id",false);
			if(principito_ACT2_P8.paused){
			principito_ACT2_P8.play();	
		}else{
			principito_ACT2_P8.pause();
			}
});
	$("#U2_RDC5_Act2P6_speaker_id").bind("click",function  () {
		blinkElement("U2_RDC5_Act2P6_speaker_id",false);
		if(principito_ACT2_P6.paused){
			principito_ACT2_P6.play();	
		}else{
			principito_ACT2_P6.pause();
			}
});
	$("#U2_RDC5_P3_speaker_id").bind("click",function  () {	
		blinkElement("U2_RDC5_P3_speaker_id",false);
		if(principito_p3.paused){
			principito_p3.play();
		}else{
			principito_p3.pause();
			}
});
$("#U2_RDC5_P0_speaker_id").bind("click",function  () {
	blinkElement("U2_RDC5_P0_speaker_id",false);
	if(intro_principito.paused){
		intro_principito.play();			
		}else{
			intro_principito.pause();
		}

});
	$("#U2_RDC5_P1_speaker_id").bind("click",function  () {	
		blinkElement("U2_RDC5_P1_speaker_id",false);
		if(principito_p1.paused){
		principito_p1.play();			
		}else{
			principito_p1.pause();
		}
		principito_p1.onended=function  () {
		 clickForward(fun);
		}
	});
$("#U2_RDC5_ACT2_P5_fintext").bind("click",function  () {

	document.getElementById('U2_RDC5_ACT2_P5').style.opacity=0.9;
	popP5();
	
});
	$("#U2_RDC5_ACT2_P4_text1").bind("click",function  () {
		checkclick();
	});
	$("#U2_RDC5_ACT2_P4_text2").bind("click",function  () {
		checkclick();
	});
	$("#U2_RDC5_ACT2_P4_text3").bind("click",function  () {
		checkclick();
	});
	$("#U2_RDC5_ACT2_P4_text4").bind("click",function  () {
		cont=2;
		checkclick();
	});
$("#U2_RDC5_ACT2_P4_check_id").bind("click",function  () {
	check=0;
	check_drop2_ACT2_P3();
});
$("#U2_RDC5_ACT2_P2_check").bind("click",function  () {
	check=0;
	check_drag2();
});

$("#U2_RDC5_P02_speaker_id").bind("click",function  () {	
		if(principito_intro2.paused){
			principito_intro2.play();
		}else{
			principito_intro2.pause();
			}
});
$("#U2_RDC5_ACT1_P2_check_id").bind("click", function  () {
	check_dropRDC5();
});
$("#U2_RDC5_ACT1_P3_playvideo_id").bind("click",function() {	
	clickForward(fun);
});

$("#U2_RDC5_P0_buttonA1").bind("click",function(){
	blinkElement("U2_RDC5_P0_buttonA2",false);
	blinkElement("U2_RDC5_P0_buttonA1",false);
	$("#U2_RDC5_P0").hide();
	$("#U2_RDC5_ACT1_P1").show();
	A1P1();
});
$("#U2_RDC5_P0_buttonA2").bind("click",function  () {
	blinkElement("U2_RDC5_P0_buttonA2",false);
	blinkElement("U2_RDC5_P0_buttonA1",false);
	$("#U2_RDC5_P0").hide();
	$("#U2_RDC5_ACT2_P1").show();
	A2P1();
});
	$("#U2_RDC5_ACT2_P1_speaker_id").bind("click",function  () {
	blinkElement("U2_RDC5_ACT2_P1_speaker_id",false);	
				if(principito_ACT2_P1.paused){
				principito_ACT2_P1.play();	
		}else{
			principito_ACT2_P1.pause();
			}
	
	});
	$("#U2_RDC5_ACT2_P1_play_id").bind("click",function  () {
		$("#U2_RDC5_ACT2_P1").hide();
		$("#U2_RDC5_ACT2_P1_1").show();
		A2P1_1();
	})



$(document).ready(startindex());

function startindex () {
	$(function  () {
$(document).ready(function(){


$("#arrow").bind("click",function(){
	$("#index").hide();
	$("#U2_RDC5_P0").show();
	RDC5();
		});
		});
});
}
