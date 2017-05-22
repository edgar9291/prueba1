// JavaScript Document
var RDC14act1=false;
var RDC14act2=false;
var draggable = undefined;
var droppable = undefined;
var dropclas=undefined;
var fincheck=false;
var checkc=false;
var cont = 0;
var check = 0;
var oportunity=0;
var text_temp_p7="";
var next="";
sound_counter=0;
var x="";
var y="";
var z="";
var songtext;
var sound=false;
function U5_RDC14_P0_loading(){
	reproduciendo();
    if(RDC14act2==true){
        blinkElement('U5_RDC14_P0_cuadrotxt2_id',true); 
    }else{blinkElement('U5_RDC14_P0_cuadrotxt1_id',true); }
           
          blinkElement('U5_RDC14_P0_bocina_id',true);
          blinkElement('forward_id',false);
          hide_Nav();
          $("#U5_RDC14_P0").show();
          $("#U5_RDC14_ACT1_P1").hide();
	  $("#U5_RDC14_ACT1_P2").hide();
	  $("#U5_RDC14_ACT2_P1").hide();
	  $("#U5_RDC14_ACT2_P2").hide();
	  $("#U5_RDC14_ACT2_P3").hide();
	  $("#U5_RDC14_ACT2_P4").hide();
	  $("#U5_RDC14_ACT2_P5").hide();
	  $("#U5_RDC14_ACT2_P6").hide();
	  $("#U5_RDC14_ACT2_P7").hide();
	  $("#U5_RDC14_ACT2_P8").hide();
	  $("#U5_RDC14_ACT2_P9").hide();
	  $("#U5_RDC14_ACT2_P10").hide();
	  $("#U5_RDC14_ACT2_P11").hide();
	  $("#U5_RDC14_ACT2_P12").hide();
	  $("#U5_RDC14_ACT2_P13").hide();
	  $("#U5_RDC14_ACT2_P14").hide();
          
          
                
     
	  
             
         }
function U5_RDC14_ACT1_P1_loading(){
	reproduciendo()
    show_Nav();
    blinkElement('forward_id',true);
    blinkElement('U5_RDC14_ACT1_P1_bocinap0_id',true);
    $('#U5_RDC14_P0').hide();
    $('#U5_RDC14_ACT1_P1').show();
    nav_current = $("#U5_RDC14_ACT1_P1").attr('id');
    fun = U5_RDC14_ACT1_P2_loading;
    fun2 = U5_RDC14_P0_loading;
    
}
function U5_RDC14_ACT1_P2_loading(){
    show_Nav();
    RDC14act2=true;
    fun = U5_RDC14_P0_loading;
    fun2 = U5_RDC14_ACT1_P1_loading;
}

function U5_RDC14_ACT2_P1_loading(){ // nos saltamo esta porque es igual a la p0 ! 
   
   if(RDC14act2==true){
    $("#U5_RDC14_P0").hide();
    $("#U5_RDC14_ACT2_P1").show();
    nav_current = $("#U5_RDC14_ACT2_P1").attr('id');
    show_Nav();
    blinkElement('forward_id',false);
    fun = U5_RDC14_ACT2_P2_loading;
    fun2 = U5_RDC14_P0_loading;
   }
}

function U5_RDC14_ACT2_P2_loading(){
    $("#U5_RDC14_ACT2_P1").hide();
    $("#U5_RDC14_P0").hide();
    $("#U5_RDC14_ACT2_P2").show();
    fun = U5_RDC14_ACT2_P3_loading;
    fun2 = U5_RDC14_ACT2_P1_loading;
    
}

function U5_RDC14_ACT2_P3_loading(){ // nos saltamo esta porque es igual a la p0 ! 
     $("#U5_RDC14_ACT1_P6_bocina_id").click(function(){
   songtext = [ // [text, duration]
["",7000*2],

["Membrún se",300*2],
["fue a la guerra",660*2],
["no sé",275*2], 
["cuando",235*2], 
["vendrá",425*2], 
["si será",485*2], 
["por",140*2],
["la pascua",560*2],
["o por la",365*2], 
["trinidad",535*2], 
["jajaja",570*2], 
["jajaja",645*2],
["o",220*2],
["por",130*2],
["la trinidad",630*2],

["",2150*2],


["la trinidad",550*2],
["se pasa",545*2],
["Membrún",230*2],
["no vuelve",415*2],
["más",120*2],
["la reina",610*2],
["que lo espera",640*2],
["muy",85*2],
["impaciente está",765*2],
["jajaja",490*2],
["jajaja",455*2],
["muy",260*2],
["impaciente",560*2],
["está.",295*2],

["",2230*2],

["A la torre",470*2],
["más",140*2],
["alta se",510*2],
["sube a",305*2],
["divisar",415*2],
["y mientras que",720*2],
["miraba un",570*2],
["paje",330*2],
["vio llegar",520*2],
["jajaja",445*2],
["jajaja",545*2],
["un paje",515*2],
["vio llegar",450*2],

["",2120*2],

["de banda",525*2],
["negra",190*2],
["y lacre",410*2],
["señal de",385*2],
["funeral",600*2],
["las noticias",590*2],
["que traigo",475*2],
["no",110*2],
["las quisiera",605*2],
["dar",180*2],
["jajaja",455*2],
["jajaja",530*2],
["no las",470*2],
["quisiera",330*2],
["dar",385*2],

["",2080*2],

["de que",305*2],
["Membrún es",400*2],
["muerto",365*2],
["y yo",165*2],
["lo fui a",260*2],
["enterrar",310*2],
["una cosa",690*2],
["me dijo",58*20],
["poco",200*2],
["antes de",320*2],
["expirar",350*2],
["jajaja",445*2],
["jajaja",555*2],
["poco",345*2],
["antes de",325*2],
["expirar",495*2],

["",2095*2],

["que a orillas",445*2],
["de su",390*2],
["tumba",390*2],
["plantase un",455*2],
["olivar",450*2],
["y de las",550*2],
["aceitunas",675*2],
["hiciese una",390*2],
["ensalá",445*2],
["jajaja",450*2],
["jajaja",51*20],
["hiciese",505*2],
["una ensalá",655*2],

["",2090*2],

["la reina",400*2],
["se desmaya",725*2],
["y se",190*2],
["pone a",245*2],
["llorar",425*2],
["luego",300*2],
["entre",235*2],
["cuatro",180*2],
["pajes",450*2],
["la llevan",340*2],
["a enterrar",455*2],
["jajaja",470*2],
["jajaja",495*2],
["la llevan",595*2],
["a enterrar",710*2],

    ];
    var text="";
    $.each(songtext, function(a, b) {
        text += "<span id='p"+a+"' style='color:blue'>" + b[0] + "</span> ";
    });
    
    $('#U5_RDC14_ACT1_P6_romance_id').html(text);
    
    cc=0;
    
    nextWord();
});
	  
    
    fun = U5_RDC14_ACT2_P4_loading;
    fun2 = U5_RDC14_ACT2_P2_loading;
}
function U5_RDC14_ACT2_P4_loading(){  
 
var num=0;
    
    $("#U5_RDC14_P8_BCom_id").click(function(){
				 $("#Evaluacion1").show();	 
	  });
	  
	  	  	 $("#U5_RDC14_P8_closepp_id").click(function(){
				 $("#Evaluacion1").hide();	 
	  });
	  
	  
	  
	  
	  
	  //Pop-Up Pantalla 8
	  $("#U5_RDC14_ACT2_P8_no").bind("click",function  () {
		$("#U5_RDC14_ACT2_P8_no").addClass('colorred');
		$("#U5_RDC14_ACT2_P8_yes").removeClass('colorwhite');
		$("#popups1").show();
		$("#U5_RDC14_ACT2_P8_ptxt1_id").show();
	  $("#U5_RDC14_P8_closeV_id").click(function(){
		  	$("#popups1").hide();
			$("#U5_RDC14_ACT2_P8_ptxt1_id").hide();

	  });
		
		
	});
	$("#U5_RDC14_ACT2_P8_no2").bind("click",function  () {
		$("#U5_RDC14_ACT2_P8_no2").addClass('colorred');
		$("#U5_RDC14_ACT2_P8_yes2").removeClass('colorwhite');
		$("#popups1").show();
		$("#U5_RDC14_ACT2_P8_ptxt2_id").show();
	  $("#U5_RDC14_P8_closeV_id").click(function(){
		  	$("#popups1").hide();
			$("#U5_RDC14_ACT2_P8_ptxt2_id").hide();
				
	  });

	});
	$("#U5_RDC14_ACT2_P8_yes").bind("click",function  () {
		$("#U5_RDC14_ACT2_P8_yes").addClass('colorwhite');
		$("#U5_RDC14_ACT2_P8_no").removeClass('colorred');
		num++;
	});
	$("#U5_RDC14_ACT2_P8_yes2").bind("click",function  () {
		$("#U5_RDC14_ACT2_P8_yes2").addClass('colorwhite');
		$("#U5_RDC14_ACT2_P8_no2").removeClass('colorred');
		num++;
	});
	
	if(num>2){
		show_Nav();
	}
    
    fun = U5_RDC14_ACT2_P5_loading;
    fun2 = U5_RDC14_ACT2_P3_loading;
}
function U5_RDC14_ACT2_P5_loading(){  
    
    fun = U5_RDC14_ACT2_P6_loading;
    fun2 = U5_RDC14_ACT2_P4_loading;
}
function U5_RDC14_ACT2_P6_loading(){  
   
	hide_Nav ();
	
     boxDragQuestion( {
				droppableDiv: "U5_RDC14_P9_contR_id",
				draggablesDiv: "U5_RDC14_opciones1_id",
				correctFeedback: "U5_RDC14_P9_RetroAP_id",
				wrongFeedback: "U5_RDC14_P9_RetroAN_id",
				correctPosition: 0,
				waitCorrectButton: true,
				checkButtonId: "U5_RDC14_P9_BCom_id",
				resetButtonId: "reset",
				onPassActivity: function( isCorrect ){
					show_Nav ();
					console.debug( "Me ha pasado " + isCorrect );
					$( "#U5_RDC14_P9_opc1_id, #U5_RDC14_P9_opc2_id,#U5_RDC14_P9_opc3_id, #U5_RDC14_P9_opc4_id" ).find( "div" ).css( "cursor", "default" );
				},
				onEnter: function( ){
					$( "#U5_RDC14_P9_contR_id" ).css( "background-color", "blue" );
				},
				onLeave: function( ){
					$( "#U5_RDC14_P9_contR_id" ).css( "background-color", "" );
				}
			} );
    fun = U5_RDC14_ACT2_P7_loading;
    fun2 = U5_RDC14_ACT2_P5_loading;
}
function U5_RDC14_ACT2_P7_loading(){  
    $("#U5_RDC14_P10_BCom_id").click(function(){
				 $("#Evaluacion2").show();	 
	  });
	  
	  	  	 $("#U5_RDC14_P10_closepp_id").click(function(){
				 $("#Evaluacion2").hide();	 
	  });
	  
	  //Pop-Up Pantalla 10
	  $("#U5_RDC14_ACT2_P10_no").bind("click",function  () {
		$("#U5_RDC14_ACT2_P10_no").addClass('colorred');
		$("#U5_RDC14_ACT2_P10_yes").removeClass('colorwhite');
		$("#popups2").show();
		$("#U5_RDC14_ACT2_P10_ptxt1_id").show();
	  $("#U5_RDC14_P10_closeV_id").click(function(){
		  	$("#popups2").hide();
			$("#U5_RDC14_ACT2_P10_ptxt1_id").hide();

	  });
		
		
	});
	$("#U5_RDC14_ACT2_P10_no2").bind("click",function  () {
		$("#U5_RDC14_ACT2_P10_no2").addClass('colorred');
		$("#U5_RDC14_ACT2_P10_yes2").removeClass('colorwhite');
		$("#popups2").show();
		$("#U5_RDC14_ACT2_P10_ptxt2_id").show();
	  $("#U5_RDC14_P10_closeV_id").click(function(){
		  	$("#popups2").hide();
			$("#U5_RDC14_ACT2_P10_ptxt2_id").hide();

	  });

	});
	$("#U5_RDC14_ACT2_P10_yes").bind("click",function  () {
		$("#U5_RDC14_ACT2_P10_yes").addClass('colorwhite');
		$("#U5_RDC14_ACT2_P10_no").removeClass('colorred');
	});
	$("#U5_RDC14_ACT2_P10_yes2").bind("click",function  () {
		$("#U5_RDC14_ACT2_P10_yes2").addClass('colorwhite');
		$("#U5_RDC14_ACT2_P10_no2").removeClass('colorred');
	
	});
	
    
    
    
    fun = U5_RDC14_ACT2_P8_loading;
    fun2 = U5_RDC14_ACT2_P6_loading;
}
function U5_RDC14_ACT2_P8_loading(){  
hide_Nav ();
    boxDragQuestion( {
				droppableDiv: "U5_RDC14_P11_contR_id",
				draggablesDiv: "U5_RDC14_O2",
				correctFeedback: "U5_RDC14_P11_RetroAP_id",
				wrongFeedback: "U5_RDC14_P11_RetroAN_id",
				correctPosition: 0,
				waitCorrectButton: true,
				checkButtonId: "U5_RDC14_P11_BCom_id",
				resetButtonId: "reset",
				onPassActivity: function( isCorrect ){
					show_Nav ();
					console.debug( "Me ha pasado " + isCorrect );
					$( "#U5_RDC14_P9_opc1_id, #U5_RDC14_P9_opc2_id,#U5_RDC14_P9_opc3_id, #U5_RDC14_P9_opc4_id" ).find( "div" ).css( "cursor", "default" );
				},
				onEnter: function( ){
					$( "#U5_RDC14_P11_contR_id" ).css( "background-color", "blue" );
				},
				onLeave: function( ){
					$( "#U5_RDC14_P11_contR_id" ).css( "background-color", "" );
				}
			} );
    fun = U5_RDC14_ACT2_P9_loading;
    fun2 = U5_RDC14_ACT2_P7_loading;
}


///**************************************************************************************************************************
function U5_RDC14_ACT2_P9_loading(){   // lineas !!!   //////////////////////////*********************************************
    //aqui pones el codigo de lo que falta :) jajaja 
    $("#U5_RDC14_ACT2_P12_correct").hide();
$("#U5_RDC14_ACT2_P12_incorrect").hide();
hidearrow();
hide_Nav();


var texta2 = ["Narra una historia",
			  "Expresa Sentimientos",
			  "Se compone de estrofas largas",
			  "Manifiesta el sentir popular",
			  "Describe hazañas de un héroe",
			  " "];



var textcorrect = "¡Muy bien! El romance es un poema narrativo compuesto por una larga estrofa, en la que se relata una historia.";
var textincorrect = "¿Estás seguro? Intenta justificar tu elección basándote en algunos versos del romance.";

$("#U5_RDC14_ACT2_P12_checktext").html("Comprobar");
$("#U5_RDC14_ACT2_P12_correcttext").html(textcorrect);
$("#U5_RDC14_ACT2_P12_incorrecttext").html(textincorrect);

var text_temp ="";
for (var i = 0; i <= 5; i++) {
	 text_temp = texta2[i];
  	 $("#U5_RDC14_ACT2_P12_spantext"+[i+1]).html(text_temp);
};
$("#U5_RDC14_ACT2_P12_spantext").html("Romance");
var clases = ["U5_RDC14_ACT2_P12_text1","U5_RDC14_ACT2_P12_text2",
			  "U5_RDC14_ACT2_P12_text3","U5_RDC14_ACT2_P12_text4",
			  "U5_RDC14_ACT2_P12_text5",];


/*shuffle clases*/
	clases = _.shuffle(clases);



for (var i = 0; i <= 5; i++) {
	$("#U5_RDC14_ACT2_P12_text"+[i+1]+"_id").removeClass();
	$("#U5_RDC14_ACT2_P12_text"+[i+1]+"_id").addClass(clases[i]);
	$("#U5_RDC14_ACT2_P12_text"+[i+1]+"_id").attr('alt',[i]);
};



$("#U5_RDC14_ACT2_P12_arrow").draggable({
	revert:"invalid",
	helper: "clone",
	stop: function  () {
		$(".U5_RDC14_ACT2_P12_Clone").remove();
	},
}).on('drag', function  (event, ui) {
	$(ui.helper).css('z-index','3');
	$(ui.helper).addClass('U5_RDC14_ACT2_P12_Clone');
	$(ui.helper).attr('id','1');
	$(this).after($(ui.helper).clone());

});


	/*activate droppable*/
for (var i = 1; i <= 5; i++) {
	$("#U5_RDC14_ACT2_P12_text"+[i]+"_id").droppable({
			accept: "#U5_RDC14_ACT2_P12_arrow",
			drop: function(event,ui){
				droppable= $(this).attr('id');
				dropclas=$(this).attr('Class');
				check_drag(event, ui);
				}
	});
};




function check_drag (event, ui) {

	draggable= ui.helper.attr('id');
	var d1 = droppable.charAt(22);
	var d2 = draggable;
	var d3 = dropclas.charAt(22);
	showarrow(d3);
	$(".U5_RDC14_ACT2_P12_Clone").remove();
	check ++;
	if ((d2=='1'&&d1=='1')||(d2=='1'&& d1=='3')) {
		cont++;
		};
	if(check==2){
		$("#U5_RDC14_ACT2_P12_check").show();	
	};

}
function showarrow (chose) {
if(chose==4){
	$("#U5_RDC14_ACT2_P12_arrow2").show();
}else if(chose==1){
	$("#U5_RDC14_ACT2_P12_arrow5").show();
}else if(chose==2){
	$("#U5_RDC14_ACT2_P12_arrow4").show();
}else if(chose==5){
	$("#U5_RDC14_ACT2_P12_arrow1").show();	
}else if(chose==3){
	$("#U5_RDC14_ACT2_P12_arrow3").show();
}

}
function hidearrow () {
	
	$("#U5_RDC14_ACT2_P12_arrow1").hide();
	$("#U5_RDC14_ACT2_P12_arrow2").hide();
	$("#U5_RDC14_ACT2_P12_arrow3").hide();
	$("#U5_RDC14_ACT2_P12_arrow4").hide();
	$("#U5_RDC14_ACT2_P12_arrow5").hide();
	$("#U5_RDC14_ACT2_P12_arrow6").hide();
}

function check_drag2 () {

	
	if(cont==2){
		$("#U5_RDC14_ACT2_P12_check").hide();
		$("#U5_RDC14_ACT2_P12_correct").show();
		
		show_Nav();
		blinkElement("forward_id",true);
		cont=0;
	}else{
		$("#U5_RDC14_ACT2_P12_check").hide();
		$("#U5_RDC14_ACT2_P12_incorrect").show();
		oportunity++;
		cont=0;
		if (oportunity<2) {
			setTimeout(U5_RDC14_ACT2_P9_loading,2000);
		}else{
			oportunity= 0;
			A2P2_showNAV = true;
			show_Nav();
			setTimeout(U5_RDC14_ACT2_P9_loading,2000);
			
		};
		

	};
	
}
if(oportunity=1)
		{
			show_Nav();
			}
$("#U5_RDC14_ACT2_P12_check").bind("click",function  () {
	check=0;
	check_drag2();
});
    //
    fun = U5_RDC14_ACT2_P10_loading;
    fun2 = U5_RDC14_ACT2_P8_loading;
}
//******************************************************************************************************************************
//######################################################################################################################
function U5_RDC14_ACT2_P10_loading(){  
    $("#U5_RDC14_P13_BCom_id").click(function(){
				 $("#Evaluacion3").show();	 
	  });
	  
	  	  	 $("#U5_RDC14_P13_closepp_id").click(function(){
				 $("#Evaluacion3").hide();	 
	  });
	  
	  
	  //Pop-Up Pantalla 13
	  $("#U5_RDC14_ACT2_P13_no").bind("click",function  () {
		$("#U5_RDC14_ACT2_P13_no").addClass('colorred');
		$("#U5_RDC14_ACT2_P13_yes").removeClass('colorwhite');
		$("#popups3").show();
		$("#U5_RDC14_ACT2_P13_ptxt1_id").show();
	  $("#U5_RDC14_P13_closeV_id").click(function(){
		  	$("#popups3").hide();
			$("#U5_RDC14_ACT2_P13_ptxt1_id").hide();

	  });
		
		
	});

	$("#U5_RDC14_ACT2_P13_yes").bind("click",function  () {
		$("#U5_RDC14_ACT2_P13_yes").addClass('colorwhite');
		$("#U5_RDC14_ACT2_P13_no").removeClass('colorred');
	});
    fun = U5_RDC14_ACT2_P11_loading;
    fun2 = U5_RDC14_ACT2_P9_loading;
}
function U5_RDC14_ACT2_P11_loading(){  
    
    fun = U5_RDC14_ACT2_P12_loading;
    fun2 = U5_RDC14_ACT2_P10_loading;
}
function U5_RDC14_ACT2_P12_loading(){  
    
    fun = U5_RDC14_ACT2_P13_loading;
    fun2 = U5_RDC14_ACT2_P11_loading;
}
function U5_RDC14_ACT2_P13_loading(){  
    
    fun = U5_RDC14_P0_loading;
    fun2 = U5_RDC14_ACT2_P12_loading;
}

$(document).ready(function(){
    
    U5_RDC14_P0_loading();
    $("#forward_id").bind("click",function(){
			clickForward(fun);
		});
	$("#back_id").bind("click",function(){
			clickBack(fun2);
		});
	
        

}); 



/////TERMINA READY

var cc = 0;
function nextWord() {
    $('#p'+cc).css("color", "red");
    cc++;
    if(cc> songtext.length-1) return;
    window.setTimeout(nextWord, songtext[cc-1][1]);
}

var sound=false;

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


function playAudio(name){
	
	audio = document.getElementById(name);
    if(audio.paused){audio = document.getElementById(name);
  audio.play();
  sound=true;
	}
 
 else{
  audio.pause();
  sound=false;
 }}

function endaudio1(){
	sound=false;
	 blinkElement('U5_RDC14_P0_texto1_id',true);
	 blinkElement('U5_RDC14_P0_cuadrotxt1_id',true);
	 sound_counter= sound_counter+1;	
}

function endaudio2(){
	sound=false;
	$("#U5_RDC14_ACT1_P1_FP1_id").show();
	$("#U5_RDC14_ACT1_P1_trom_id").show();
	$("#U5_RDC14_ACT1_P1_trom2_id").show();
	$("#U5_RDC14_ACT1_P1_romance_id").show();
	$("#U5_RDC14_ACT1_P1_romancetxt_id").show();
	 sound_counter= sound_counter+1;	
}

function endaudio3(){
	sound=false;
	 $("#U5_RDC14_ACT1_P2_romance_id").show();
	 $("#U5_RDC14_ACT1_P2_romancetxt_id").show();
	 sound_counter= sound_counter+1;	
}

function endaudio4(){
	sound=false;
		  blinkElement('U5_RDC14_ACT2_P3_cuadrotxt2_id',true);
		  blinkElement('U5_RDC14_ACT2_P3_texto2_id',true);
	 sound_counter= sound_counter+1;	
}

function endmam(){
	sound=false;
	blinkElement('U5_RDC14_ACT2_P4_sig_id',true);

	 sound_counter= sound_counter+1;	
}

function aparecerPopup(id1,id2,id3,id4){
	$('#'+id1).show();
	$('#'+id2).show();
	$('#'+id3).show();
	$('#'+id4).show();
}

function desaparecerPopup(id1,id2,id3,id4){
	$('#'+id1).hide();
	$('#'+id2).hide();
	$('#'+id3).hide();
	$('#'+id4).hide();
}

function aparecerPopup2(id1,id2,id3,id4,id5){
	$('#'+id1).show();
	$('#'+id2).show();
	$('#'+id3).show();
	$('#'+id4).show();
	$('#'+id5).show();
}

function desaparecerPopup2(id1,id2,id3,id4,id5){
	$('#'+id1).hide();
	$('#'+id2).hide();
	$('#'+id3).hide();
	$('#'+id4).hide();
	$('#'+id5).hide();
}

function guardarresp1(id){
	x = document.getElementById(id).value
}

function guardarresp2(id){
	y = document.getElementById(id).value
}

function guardarresp3(id){
	z = document.getElementById(id).value
}



function mostrarResp1(){
var resp1 = document.getElementById("U5_RDC14_resp1_id");

resp1.value = x;

resp1.style.display = 'block';
document.getElementById("cerrar1").style.display = 'block';

}

function mostrarResp2(){
var resp2 = document.getElementById("U5_RDC14_resp2_id");

resp2.value = y;

resp2.style.display = 'block';
document.getElementById("cerrar2").style.display = 'block';

}

function mostrarResp3(){
var resp3 = document.getElementById("U5_RDC14_resp3_id");

resp3.value = z;

resp3.style.display = 'block';
document.getElementById("cerrar3").style.display = 'block';

}

function out (id){

$("#"+id).hide();

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
	
	function reproduciendo()
	{
		if(sound=true)
		hide_Nav();
	}