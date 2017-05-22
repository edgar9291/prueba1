// JavaScript Document
var audio;
var isplay;
var act1=false;
var act2=false;
var u6_rdc18_textoNota = null;
var correct= false;

function U6_RDC18_P0_loading(){ //*Función carga P0
    
    $("#U6_RDC18_ACT1_textDiv").attr("contenteditable","true");
    
	if(isplay==true){audio.pause();}
	blinkElement("U6_RDC18_ACT2_P3_hornButton_id",false);
	blinkElement("U6_RDC18_ACT1_P11_hornButton_id",false);
	$('#U6_RDC18_ACT1_textDiv').hide();
	nav_current	= "U6_RDC18_P0";
	
//P0
	$('#U6_RDC18_P0').show(); 
//ACT 1 P1
	$('#U6_RDC18_ACT1_P1').hide(); 
//ACT 1 P2
	$('#U6_RDC18_ACT1_P2').hide(); 
//ACT 1 P3
	$('#U6_RDC18_ACT1_P3').hide(); 
//ACT 1 P4
	$('#U6_RDC18_ACT1_P4').hide(); 
//ACT 1 P5
	$('#U6_RDC18_ACT1_P5').hide(); 
//ACT 1 P6
	$('#U6_RDC18_ACT1_P6').hide(); 
//ACT 1 P7
	$('#U6_RDC18_ACT1_P7').hide();
//ACT 1 P8
	$('#U6_RDC18_ACT1_P8').hide(); 
//ACT 1 P9
	$('#U6_RDC18_ACT1_P9').hide(); 
//ACT 1 P10
	$('#U6_RDC18_ACT1_P10').hide();  
//ACT 1 P11
	$('#U6_RDC18_ACT1_P11').hide();
//ACT 2 P1
	$('#U6_RDC18_ACT2_P1').hide(); 
	$('#U6_RDC18_ACT2_P2').hide(); 
	
	$('#U6_RDC18_ACT2_P3').hide(); 
	////
	$('#forward_id').hide();
	$('#back_id').hide();//oculta navegadores
	if(act2==true){
		blinkElement("U6_RDC18_P0_botton_horn_id",true);
		blinkElement("U6_RDC18_P0_ButtonACT2_id",true);
		blinkElement("U6_RDC18_P0_ButtonACT1_id",false);}
	else{
		blinkElement("U6_RDC18_P0_ButtonACT1_id",true);
		blinkElement("U6_RDC18_P0_ButtonACT2_id",false);
		blinkElement("U6_RDC18_P0_botton_horn_id",true);
		}
	
	//fun = U6_RDC18_ACT1_P1_loading;
}

function U6_RDC18_ACT1_P1_loading(){ //*Función envia y carga a ACT1P1
    if(isplay==true){audio.pause();}
	$('#U6_RDC18_P0').hide();
         $('#U6_RDC18_ACT1_textDiv').hide();
	blinkElement("U6_RDC18_ACT1_P1_hornButton_id",true);
	blinkElement("U6_RDC18_P0_ButtonACT1_id",false);
	blinkElement("U6_RDC18_P0_ButtonACT2_id",false);
	blinkElement("U6_RDC18_P0_botton_horn_id",false);
	$('#U6_RDC18_ACT1_P1').show();
	blinkElement("forward_id",true);
	nav_current = $("#U6_RDC18_ACT1_P1").attr('id');
	$('#forward_id').show();
	$('#back_id').show();
	fun = U6_RDC18_ACT1_P2_loading;
	fun2 = U6_RDC18_P0_loading;
	
}
//Función ACTP2 Video 
function U6_RDC18_ACT1_P2_loading(){
     $('#U6_RDC18_ACT1_textDiv').hide();
    if(isplay==true){audio.pause();}
	hide_Nav();
	
	fun = U6_RDC18_ACT1_P3_loading;
	fun2 = U6_RDC18_ACT1_P1_loading;
	
}

function U6_RDC18_GuardarCosa(texto){
    
	localStorage.setItem("textoDiv" , $("#" + texto.id).text());
}

function U6_RDC18_RecuperarCosa(){
	
	return localStorage.getItem("textoDiv");
}

function U6_RDC18_MuestraNote(){
	//var boton = $( "#U6_RDC18_ACT1_P2_notepadBotton_id");
	var divTexto = $("#U6_RDC18_ACT1_textDiv");
	if(divTexto.css("display") == "block"){
		divTexto.hide();
	}
	else
	{
		divTexto.show();
	}
	
}

function U6_RDC18_ACT1_P3_loading(){
    $('#U6_RDC18_ACT1_textDiv').hide();
    blinkElement('forward_id',true);
    if(isplay==true){audio.pause();}
	$('#U6_RDC18_ACT1_textDiv').hide();
	// guardar texto
	blinkElement("U6_RDC18_ACT1_P3_hornButton_id",true);
	fun = U6_RDC18_ACT1_P4_loading;
	fun2 = U6_RDC18_ACT1_P2_loading;
}
// p4 - p8 computer drag /////////////////////
	
//////////////////////////////////////////
function U6_RDC18_ACT1_P4_loading(){
    if(isplay==true){audio.pause();}
	blinkElement("U6_RDC18_ACT1_P3_hornButton_id",false);
        correct= false;
	carpetas('4');
	fun = U6_RDC18_ACT1_P5_loading;
	fun2 = U6_RDC18_ACT1_P3_loading;
}
function U6_RDC18_ACT1_P5_loading(){
    correct= false;
	carpetas('5');
	fun = U6_RDC18_ACT1_P6_loading;
	fun2 = U6_RDC18_ACT1_P4_loading;
}
function U6_RDC18_ACT1_P6_loading(){
    correct= false;
	carpetas('6');
	fun = U6_RDC18_ACT1_P7_loading;
	fun2 = U6_RDC18_ACT1_P5_loading;
}
function U6_RDC18_ACT1_P7_loading(){
    correct= false;
	carpetas('7');
	fun = U6_RDC18_ACT1_P8_loading;
	fun2 = U6_RDC18_ACT1_P6_loading;
}
function U6_RDC18_ACT1_P8_loading(){
    correct= false;
	carpetas('8');
	fun = U6_RDC18_ACT1_P9_loading;
	fun2 = U6_RDC18_ACT1_P7_loading;
}
function U6_RDC18_ACT1_P9_loading(){
	blinkElement('forward_id',true);
	blinkElement("U6_RDC18_ACT1_P9_hornButton_id",true);
	fun = U6_RDC18_ACT1_P10_loading;
	fun2 = U6_RDC18_ACT1_P8_loading;
}
function U6_RDC18_ACT1_P10_loading(){
	blinkElement('forward_id',true);
	blinkElement("U6_RDC18_ACT1_P9_hornButton_id",false);
	fun = U6_RDC18_ACT1_P11_loading;
	fun2 = U6_RDC18_ACT1_P9_loading;
}
function U6_RDC18_ACT1_P11_loading(){
	U6_title_RDC3_ACT_1_complete = true;
	blinkElement('forward_id',true);
	fun = U6_RDC18_P0_loading;
	fun2 = U6_RDC18_ACT1_P10_loading;
	act2=true;
	blinkElement("U6_RDC18_ACT1_P11_hornButton_id",true);
}
function carpetas(ventana){
    
	 blinkElement('forward_id',false);
         hide_Nav();
       
	var clases=["U6_RDC18_ACT1_P4_carpeta1 U6_RDC18_ACT1_imagenCarpeta",
					"U6_RDC18_ACT1_P4_carpeta2 U6_RDC18_ACT1_imagenCarpeta",
					"U6_RDC18_ACT1_P4_carpeta3 U6_RDC18_ACT1_imagenCarpeta",
					"U6_RDC18_ACT1_P4_carpeta4 U6_RDC18_ACT1_imagenCarpeta"];
					
	
	var intentos=0;
	
	for (i= 1;i<5;i++){
				$("#U6_RDC18_ACT1_P"+ventana+"_carpeta"+i+"_id").removeAttr('style');
			}
		
			clases = _.shuffle(clases);
		
			for(i=1;i<6;i++){
				$("#U6_RDC18_ACT1_P"+ventana+"_carpeta"+[i]+"_id").removeClass();
				$("#U6_RDC18_ACT1_P"+ventana+"_carpeta"+[i]+"_id").addClass(clases[i-1]);
			}
	
	$('#U6_RDC18_ACT1_P'+ventana+'_correcto_id').hide(); 
	$('#U6_RDC18_ACT1_P'+ventana+'_incorrecto_id').hide(); 
	var nu;
			if(ventana=='4'){nu='4';
				}
			if(ventana=='5'){nu='4';
				}
			if(ventana=='6'){nu='4';
				}
			if(ventana=='7'){nu='3';
				}
			if(ventana=='8'){nu='1';
				}
	
	$('#U6_RDC18_ACT1_P'+ventana+'_carpeta1_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}});
	$('#U6_RDC18_ACT1_P'+ventana+'_carpeta2_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}});
	$('#U6_RDC18_ACT1_P'+ventana+'_carpeta3_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}});
	$('#U6_RDC18_ACT1_P'+ventana+'_carpeta4_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}});
				
				$( "#U6_RDC18_ACT1_P"+ventana+"_computerContainer_id" ).droppable({
		activeClass: "ui-state-hover",
    	hoverClass: "ui-state-active",
      	drop: function( event, ui ) {
			if(ventana=='4'){if(ui.draggable.is("#U6_RDC18_ACT1_P"+ventana+"_carpeta4_id"))	
					correct=true;
				}
			if(ventana=='5'){if(ui.draggable.is("#U6_RDC18_ACT1_P"+ventana+"_carpeta4_id"))	
					correct=true;
				}
			if(ventana=='6'){if(ui.draggable.is("#U6_RDC18_ACT1_P"+ventana+"_carpeta4_id"))	
					correct=true;
				}
			if(ventana=='7'){if(ui.draggable.is("#U6_RDC18_ACT1_P"+ventana+"_carpeta3_id"))	
					correct=true;
				}
			if(ventana=='8'){if(ui.draggable.is("#U6_RDC18_ACT1_P"+ventana+"_carpeta1_id"))	
					correct=true;
				}
			/*if(ui.draggable.is("#U6_RDC18_ACT1_P"+ventana+"_carpeta1_id")){	
			correct=true;
			}
    		else{
				//ui.draggable.animate(ui.draggable.data("origPosition"),"slow");
    		}*/
			
      	}
		});
		
		$( "#U6_RDC18_ACT1_P"+ventana+"_checkButton_id" ).click(function( event ) { 
		if(correct == true){	
			$('#U6_RDC18_ACT1_P'+ventana+'_correcto_id').show();
			$('#U6_RDC18_ACT1_P'+ventana+'_incorrecto_id').hide();  
			show_Nav();
                        blinkElement('forward_id',true);
			$("#U6_RDC18_ACT1_P"+ventana+"_carpeta"+nu+"_id").removeAttr('style');
			$("#U6_RDC18_ACT1_P"+ventana+"_carpeta"+nu+"_id").removeClass();
			$("#U6_RDC18_ACT1_P"+ventana+"_carpeta"+nu+"_id").addClass("U6_RDC18_ACT1_carpetaCorrecta U6_RDC18_ACT1_imagenCarpeta");
			}
		else{
				$('#U6_RDC18_ACT1_P'+ventana+'_incorrecto_id').show();
				$('#U6_RDC18_ACT1_P'+ventana+'_correcto_id').hide();  
			///

			for (i= 1;i<5;i++){
				$("#U6_RDC18_ACT1_P"+ventana+"_carpeta"+i+"_id").removeAttr('style');
			}
		
			clases = _.shuffle(clases);
		
			for(i=1;i<6;i++){
				$("#U6_RDC18_ACT1_P"+ventana+"_carpeta"+[i]+"_id").removeClass();
				$("#U6_RDC18_ACT1_P"+ventana+"_carpeta"+[i]+"_id").addClass(clases[i-1]);
			}
			}
		  	});
	
	}


// ACT 2 p1

function U6_RDC18_ACT2_P1_loading(){
        
	if(act2==true){
        blinkElement('forward_id',true);
	blinkElement("U6_RDC18_P0_ButtonACT1_id",false);
	blinkElement("U6_RDC18_P0_ButtonACT2_id",false);
	blinkElement("U6_RDC18_P0_botton_horn_id",false);
	blinkElement("U6_RDC18_ACT2_P1_hornButton_id",true);
	$('#U6_RDC18_P0').hide();
	$('#U6_RDC18_ACT2_P1').show();
	nav_current = $("#U6_RDC18_ACT2_P1").attr('id');
	$('#forward_id').show();
	$('#back_id').show();
	fun = U6_RDC18_ACT2_P2_loading;
	fun2 = U6_RDC18_P0_loading;
	}
} 
function U6_RDC18_ACT2_P2_loading(){
	var aciertos=0;
        blinkElement('forward_id',false);
	hide_Nav();
        
        $('#U6_RDC18_ACT2_P2_opera_id').show();
        $('#U6_RDC18_ACT2_P2_facebook_id').show();
        $('#U6_RDC18_ACT2_P2_google_id').show();
        $('#U6_RDC18_ACT2_P2_explorer_id').show();
        $('#U6_RDC18_ACT2_P2_outlook_id').show();
        $('#U6_RDC18_ACT2_P2_wiki_id').show();
        $('#U6_RDC18_ACT2_P2_fire_id').show();
        $('#U6_RDC18_ACT2_P2_gmail_id').show();
        $('#U6_RDC18_ACT2_P2_twitter_id').show();
        $('#U6_RDC18_ACT2_P2_crome_id').show();
        
	$("#U6_RDC18_ACT2_textDiv").text(U6_RDC18_RecuperarCosa());
	$('#U6_RDC18_ACT2_P2_correcto_id').hide();
	$('#U6_RDC18_ACT2_P2_incorrectoNavegadores_id').hide();
	$('#U6_RDC18_ACT2_P2_incorrectoBuscadores_id').hide();
	$('#U6_RDC18_ACT2_P2_incorrectoRedes_id').hide();
	$('#U6_RDC18_ACT2_P2_incorrectoCorreos_id').hide();
	$('#U6_RDC18_ACT2_P2_incorrectoPaginas_id').hide();
	
	blinkElement("U6_RDC18_ACT2_P1_hornButton_id",false);
	fun = U6_RDC18_ACT2_P3_loading;
	fun2 = U6_RDC18_ACT1_P1_loading;
	$('#U6_RDC18_ACT2_P2_imgcrome_id').hide();
	$('#U6_RDC18_ACT2_P2_imgopera_id').hide();
	$('#U6_RDC18_ACT2_P2_imgexplorer_id').hide();
	$('#U6_RDC18_ACT2_P2_imgwiki_id').hide();
	$('#U6_RDC18_ACT2_P2_imggmail_id').hide();
	$('#U6_RDC18_ACT2_P2_imggoogle_id').hide();
	$('#U6_RDC18_ACT2_P2_imgtwitter_id').hide();
	$('#U6_RDC18_ACT2_P2_imgfacebook_id').hide();
	$('#U6_RDC18_ACT2_P2_imgoutlook_id').hide();
	$('#U6_RDC18_ACT2_P2_imgfire_id').hide();
	
        
        
        
        
		$('#U6_RDC18_ACT2_P2_opera_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}
			
			});
		$('#U6_RDC18_ACT2_P2_facebook_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}
			
			});
		$('#U6_RDC18_ACT2_P2_google_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}
			
			});
		$('#U6_RDC18_ACT2_P2_explorer_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}
			
			});
		$('#U6_RDC18_ACT2_P2_outlook_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}
			
			});
		$('#U6_RDC18_ACT2_P2_wiki_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}
			
			});
		$('#U6_RDC18_ACT2_P2_fire_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}
			
			});
		$('#U6_RDC18_ACT2_P2_gmail_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}
			
			});
		$('#U6_RDC18_ACT2_P2_twitter_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}
			
			});
		$('#U6_RDC18_ACT2_P2_crome_id').draggable({
			start: function(){
				$(this).data("origPosition", $(this).position());
				}
			
			});
		
		
		$( "#U6_RDC18_ACT2_P2_Navegadores_id" ).droppable({
		activeClass: "ui-state-hover",
    	hoverClass: "ui-state-active",
      	drop: function( event, ui ) {
			$('#U6_RDC18_ACT2_P2_correcto_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoNavegadores_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoBuscadores_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoRedes_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoCorreos_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoPaginas_id').hide();
			if(ui.draggable.is("#U6_RDC18_ACT2_P2_opera_id")){
				$('#U6_RDC18_ACT2_P2_imgopera_id').show();
				$('#U6_RDC18_ACT2_P2_opera_id').hide();
				aciertos++;
			}else{if(ui.draggable.is("#U6_RDC18_ACT2_P2_explorer_id")){
				$('#U6_RDC18_ACT2_P2_imgexplorer_id').show();
				$('#U6_RDC18_ACT2_P2_explorer_id').hide();
				aciertos++;
				}else{if(ui.draggable.is("#U6_RDC18_ACT2_P2_fire_id")){
				$('#U6_RDC18_ACT2_P2_imgfire_id').show();
				$('#U6_RDC18_ACT2_P2_fire_id').hide();
				aciertos++;
			}else{if(ui.draggable.is("#U6_RDC18_ACT2_P2_crome_id")){
				$('#U6_RDC18_ACT2_P2_imgcrome_id').show();
				$('#U6_RDC18_ACT2_P2_crome_id').hide();
				aciertos++;
			}else{
					$('#U6_RDC18_ACT2_P2_incorrectoNavegadores_id').show();
					}}}}
			ui.draggable.animate(ui.draggable.data("origPosition"),"slow");
			if(aciertos===10){
                            blinkElement('forward_id',true);
                               show_Nav();
                                $('#U6_RDC18_ACT2_P2_correcto_id').show();}
      	}
		});
		
		$( "#U6_RDC18_ACT2_P2_Correos_id" ).droppable({
		activeClass: "ui-state-hover",
    	hoverClass: "ui-state-active",
      	drop: function( event, ui ) {
			$('#U6_RDC18_ACT2_P2_correcto_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoNavegadores_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoBuscadores_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoRedes_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoCorreos_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoPaginas_id').hide();
			if(ui.draggable.is("#U6_RDC18_ACT2_P2_gmail_id")){
				$('#U6_RDC18_ACT2_P2_imggmail_id').show();
				$('#U6_RDC18_ACT2_P2_gmail_id').hide();
				aciertos++;
			}else{if(ui.draggable.is("#U6_RDC18_ACT2_P2_outlook_id")){
				$('#U6_RDC18_ACT2_P2_imgoutlook_id').show();
				$('#U6_RDC18_ACT2_P2_outlook_id').hide();
				aciertos++;
			}else{
				$('#U6_RDC18_ACT2_P2_incorrectoCorreos_id').show();
				}}
			
			ui.draggable.animate(ui.draggable.data("origPosition"),"slow");
			if(aciertos==10){
                            blinkElement('forward_id',true);
                                show_Nav();
                                $('#U6_RDC18_ACT2_P2_correcto_id').show();}
      	}
		});
		
		$( "#U6_RDC18_ACT2_P2_Buscadores_id" ).droppable({
		activeClass: "ui-state-hover",
    	hoverClass: "ui-state-active",
      	drop: function( event, ui ) {
			$('#U6_RDC18_ACT2_P2_correcto_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoNavegadores_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoBuscadores_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoRedes_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoCorreos_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoPaginas_id').hide();
			if(ui.draggable.is("#U6_RDC18_ACT2_P2_google_id")){
				$('#U6_RDC18_ACT2_P2_imggoogle_id').show();
				$('#U6_RDC18_ACT2_P2_google_id').hide();
				aciertos++;
			}else{
				$('#U6_RDC18_ACT2_P2_incorrectoBuscadores_id').show();
				}
			ui.draggable.animate(ui.draggable.data("origPosition"),"slow");
			if(aciertos===10){
                            blinkElement('forward_id',true);
                                show_Nav();
                                $('#U6_RDC18_ACT2_P2_correcto_id').show();}
      	}
		});
		
		$( "#U6_RDC18_ACT2_P2_RedesSociales_id" ).droppable({
		activeClass: "ui-state-hover",
    	hoverClass: "ui-state-active",
      	drop: function( event, ui ) {
			$('#U6_RDC18_ACT2_P2_correcto_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoNavegadores_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoBuscadores_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoRedes_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoCorreos_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoPaginas_id').hide();
			if(ui.draggable.is("#U6_RDC18_ACT2_P2_facebook_id")){
				$('#U6_RDC18_ACT2_P2_imgfacebook_id').show();
				$('#U6_RDC18_ACT2_P2_facebook_id').hide();
				aciertos++;
			}else{if(ui.draggable.is("#U6_RDC18_ACT2_P2_twitter_id")){
				$('#U6_RDC18_ACT2_P2_imgtwitter_id').show();
				$('#U6_RDC18_ACT2_P2_twitter_id').hide();
				aciertos++;
			}else{
				$('#U6_RDC18_ACT2_P2_incorrectoRedes_id').show();
				}}	
			ui.draggable.animate(ui.draggable.data("origPosition"),"slow");
			if(aciertos===10){$('#U6_RDC18_ACT2_P2_correcto_id').show();
                        blinkElement('forward_id',true);
                        show_Nav();           
            }
      	}
		});
		
		$( "#U6_RDC18_ACT2_P2_PaginasWeb_id" ).droppable({
		activeClass: "ui-state-hover",
    	hoverClass: "ui-state-active",
      	drop: function( event, ui ) {
			$('#U6_RDC18_ACT2_P2_correcto_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoNavegadores_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoBuscadores_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoRedes_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoCorreos_id').hide();
			$('#U6_RDC18_ACT2_P2_incorrectoPaginas_id').hide();
			if(ui.draggable.is("#U6_RDC18_ACT2_P2_wiki_id")){
				$('#U6_RDC18_ACT2_P2_imgwiki_id').show();
				$('#U6_RDC18_ACT2_P2_wiki_id').hide();
				aciertos++;
			}else{
				$('#U6_RDC18_ACT2_P2_incorrectoPaginas_id').show();}
			ui.draggable.animate(ui.draggable.data("origPosition"),"slow");
			
			if(aciertos===10){
				$('#U6_RDC18_ACT2_P2_correcto_id').show();
                                blinkElement('forward_id',true);
                                show_Nav();
				}
      	}
		});
		
		
		
} 
function U6_RDC18_ACT2_P3_loading(){
	U6_title_RDC3_ACT_2_complete = true;
    blinkElement('forward_id',true);
	blinkElement("U6_RDC18_ACT2_P3_hornButton_id",true);
	fun = U6_RDC18_P0_loading;
	fun2 = U6_RDC18_ACT2_P2_loading;
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
	if(isplay===true){audio.pause();}
	audio = document.getElementById(name);
	if(audio.paused){audio.currentTime = 0;}
	isplay=true;
	audio.play();
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

