var utils = new Utils( );
var onScreen2 = false;
var U4_RDC11_P0_audio = null;
var U4_RDC11_ACT1_P1_audio = null;
var U4_RDC11_ACT2_P1_audio = null;
var U4_RDC11_ACT2_P4_audio = null;
var U4_RDC11_ACT2_P5_audio = null;
var U4_RDC11_ACT1_finishACT = false;

var aux, aux2 = false;
var id1 = false;
var id2 = false;
var sex = undefined; //false is equal to male and true is equal to female
var padre;
var textEditor = undefined;

var U4_characterSettings = {
	sex: undefined,
	identity1: {
		hair: "",
		clotheColor: "",
		eyeColor: "",
		accessories: "",
		beard: ""
	},
	identity2: {
		hair: "",
		clotheColor: "",
		eyeColor: "",
		accessories: "",
		beard: ""
	}
};

function resetFace(){

	textEditor.reset();
	$(".U4_RDC11_OptionLeft1").remove(  );
	$(".U4_RDC11_OptionRight1").remove(  );
	$(".U4_RDC11_OptionLeft").hide();
	$(".U4_RDC11_OptionRight").hide();
	$(".copym").hide();
	$(".copyw").hide();

	$(".words").removeClass("selectedtag");
	$(".U4_RDC11_ACT1_P2_optionsL").hide();
	$(".U4_RDC11_ACT1_P2_optionsR").hide();
	$(".cont").hide();
	$(".rdc11_arrow").hide();
	$(".rdc11_arrow").css("opacity","1");
	$(".dd").css("background","#652F61");
	$(".down").show();
	id1=false;
	id2=false;
	sex= undefined;

	//if(sex){
		$("#U4_RDC11_ACT1_P2_hairstyle1_LidW").show();
		$("#U4_RDC11_ACT1_P2_acc1_LidW").show();
		$("#U4_RDC11_ACT1_P2_clothes1_LidW").show();
		$("#U4_RDC11_ACT1_P2_eyes1_LidW").show();
		$("#U4_RDC11_ACT1_P2_hairstyle1_RidW").show();
		$("#U4_RDC11_ACT1_P2_acc1_RidW").show();
		$("#U4_RDC11_ACT1_P2_clothes1_RidW").show();
		$("#U4_RDC11_ACT1_P2_eyes1_RidW").show();
	//}else{
		$("#U4_RDC11_ACT1_P2_hairstyle1_LidM").show();
		$("#U4_RDC11_ACT1_P2_acc1_LidM").show();
		$("#U4_RDC11_ACT1_P2_clothes1_LidM").show();
		$("#U4_RDC11_ACT1_P2_eyes1_LidM").show();
		$("#U4_RDC11_ACT1_P2_beard1_LidM").show();
		$("#U4_RDC11_ACT1_P2_hairstyle1_RidM").show();
		$("#U4_RDC11_ACT1_P2_acc1_RidM").show();
		$("#U4_RDC11_ACT1_P2_clothes1_RidM").show();
		$("#U4_RDC11_ACT1_P2_eyes1_RidM").show();
		$("#U4_RDC11_ACT1_P2_beard1_RidM").show();
	//}
}

function stopIfPlaying( audio ){
	if( audio == null || audio == undefined ){
		return;
	}
	if( !audio.paused ){
		audio.pause( );
		audio.currentTime = 0;
	}
}

//auxiliary functions
function playIntro( audio ){
	if( audio == null || audio == undefined ){
		console.warn( "Audio is undefined " );
		return;
	}
	if( !audio.paused ){
		audio.pause( );
	}	
	else {
		audio.play();
	}
}

function rdc11_stopAllAudios( ){
	
}

//************************************* SCREEN 1 ************************************************
function Screen1( ){
	/*U4_RDC11_P0_audio.onended = U4_RDC11_P0_onEndAudio;

	function U4_RDC11_P0_onEndAudio(){
		U4_RDC11_P0_audio.currentTime = 0;
	}*/
	$( "#home_id" ).show( );
		
		
	function reset( ){
		
	}

	
	
	this.init = function( isReset ){
		U4_RDC11_ACT1_P1_audio = $("#U4_RD11_ACT1_P1_audio")[0];
		U4_RDC11_ACT2_P1_audio = $("#U4_RDC11_ACT2_P1_audio")[0];
		U4_RDC11_ACT2_P4_audio = $("#U4_RDC11_ACT2_P4_audio")[0];
		U4_RDC11_ACT2_P5_audio = $("#U4_RDC11_ACT2_P5_audio")[0];
		//var stop = undefined;
	  	//utils.attachRezise( $( "#U4_RDC11_P0" ), 960, 720 );
		$(".U4_RDC11_P0_activities").bind("click");
		utils.blinkElement("U4_RDC11_P0_speaker_id",true);
		if(U4_RDC11_ACT1_finishACT){
			utils.blinkElement("U4_RDC11_P0_activity2_id",true);
		}else{
			utils.blinkElement("U4_RDC11_P0_activity1_id",true);
		}
		$("#U4_RDC11_P0_txt_id").show();  	

	  	if( isReset ){
	  		reset( );
	  	}
		var aux = true;
		
	};

		$( "#U4_RDC11_P0_speaker_id" ).click( function(){
			utils.blinkElement("U4_RDC11_P0_speaker_id",false);

			if( U4_RDC11_P0_audio == undefined ){
				U4_RDC11_P0_audio = $("#U4_RDC11_P0_audio")[0];
			}	
			playIntro( U4_RDC11_P0_audio );
		} );
}//end screen1( )

//************************************* ACTIVITY 1 SCREEN 1 ************************************************
function Screen2( ){
	/*U4_RDC11_ACT1_P1_audio.onended = U4_RDC11_ACT1_P1_onEndAudio;

	function U4_RDC11_ACT1_P1_onEndAudio(){
		U4_RDC11_ACT1_P1_audio.currentTime = 0;
		  	
	}*/

	function reset( ){
	}

	$( "#U4_RDC11_ACT1_P1_speaker_id" ).click( function( ){
		utils.blinkElement("U4_RDC11_ACT1_P1_speaker_id",false);  	
			if( U4_RDC11_ACT1_P1_audio == undefined || U4_RDC11_ACT1_P1_audio == null ){
				U4_RDC11_ACT1_P1_audio = $("#U4_RDC11_ACT1_P1_audio")[0];
				console.warn( "audio is undefined " );
			}
			playIntro( U4_RDC11_ACT1_P1_audio );
		} );
	
	this.init = function( isReset ){
		$( "#forward_id" ).show( );
		$( "#back_id" ).show( );
	  	//utils.attachRezise( $( "#U4_RDC11_ACT1_P1" ), 960, 720 );
	  	utils.blinkElement("forward_id",true);
		utils.blinkElement("U4_RDC11_ACT1_P1_speaker_id",true);  	
		$("#U4_RDC11_ACT1_P1_txt_id").show();
	  	if( isReset ){
	  		reset( );
	  	}
		
		
	};
}//end screen2( )
//************************************* ACTIVITY 1 SCREEN 2 ************************************************

function Screen3( ){

	function reset( ){
	}
	
	function option_selected(item){
			if(sex){
				if(id1){
					if(item!=undefined){
						$(".hairL").hide();
						$("#" + item + "_LidW").show();
						U4_characterSettings.identity1.hair = $( "#" + item + "_LidW" ).attr( "src" ) ;
					}
				}
				if(id2){
					if(item!=undefined){
						$(".hairR").hide();
						$("#" + item + "_RidW").show();
						U4_characterSettings.identity2.hair = $( "#" + item + "_RidW" ).attr( "src" ) ;
					}
				}
			} else{
				if(id1){
					if(item!=undefined){
						$(".hairL").hide();
						$("#" + item + "_LidM").show();
						U4_characterSettings.identity1.hair = $( "#" + item + "_LidM" ).attr( "src" ) ;
					}
				}
				if(id2){
					if(item!=undefined){
						$(".hairR").hide();
						$("#" + item + "_RidM").show();
						U4_characterSettings.identity2.hair = $( "#" + item + "_RidM" ).attr( "src" ) ;
					}
				}
			}
		}

		function option_selected2(item){
			if(sex){
				if(id1){
					if(item!=undefined){
						$(".cloL").hide();
						$("#" + item + "_LidW").show();
						U4_characterSettings.identity1.clotheColor = $( "#" + item + "_LidW" ).attr( "src" ) ;
					}
				}
				if(id2){
					if(item!=undefined){
						$(".cloR").hide();
						$("#" + item + "_RidW").show();
						U4_characterSettings.identity2.clotheColor =  $( "#" + item + "_RidW" ).attr( "src" ) ;
					}
				}
			}else{
				if(id1){
					if(item!=undefined){
						$(".cloL").hide();
						$("#" + item + "_LidM").show();
						U4_characterSettings.identity1.clotheColor =  $( "#" + item + "_LidM" ).attr( "src" ) ;
					}
				}
				if(id2){
					if(item!=undefined){
						$(".cloR").hide();
						$("#" + item + "_RidM").show();
						U4_characterSettings.identity2.clotheColor =  $( "#" + item + "_RidM" ).attr( "src" ) ;
					}
				}
			}
		}

		function option_selected3(item){
			if(sex){
				if(id1){	
					if(item!=undefined){
						$(".eyeL").hide();
						$("#" + item + "_LidW").show();
						U4_characterSettings.identity1.eyeColor = $( "#" + item + "_LidW" ).attr( "src" ) ;
					}
				}
				if(id2){	
					if(item!=undefined){
						$(".eyeR").hide();
						$("#" + item + "_RidW").show();
						U4_characterSettings.identity2.eyeColor = $( "#" + item + "_RidW" ).attr( "src" ) ;
					}
				}
			}else{
				if(id1){	
					if(item!=undefined){
						$(".eyeL").hide();
						$("#" + item + "_LidM").show();
						U4_characterSettings.identity1.eyeColor = $( "#" + item + "_LidM" ).attr( "src" ) ;
					}
				}
				if(id2){	
					if(item!=undefined){
						$(".eyeR").hide();
						$("#" + item + "_RidM").show();
						U4_characterSettings.identity2 .eyeColor = $( "#" + item + "_RidM" ).attr( "src" ) ;
					}
				}
			}
		}

		function option_selected4(item){
			if(sex){
				if(id1){ 	
					if(item!=undefined){
						$(".accL").hide();
						$("#" + item + "_LidW").show( );
						U4_characterSettings.identity1.accessories = $( "#" + item + "_LidW" ).attr( "src" ) ;
					}
				}
				if(id2){	
					if(item!=undefined){
						$(".accR").hide();
						$("#" + item + "_RidW").show();
						U4_characterSettings.identity2.accessories = $( "#" + item + "_RidW" ).attr( "src" ) ;
					}
				}
			}else{
				if(id1){	
					if(item!=undefined){
						$(".accL").hide();
						$("#" + item + "_LidM").show();
						U4_characterSettings.identity1.accessories = $( "#" + item + "_LidM" ).attr( "src" ) ;
					}
				}
				if(id2){	
					if(item!=undefined){
						$(".accR").hide();
						$("#" + item + "_RidM").show();
						U4_characterSettings.identity2.accessories = $( "#" + item + "_RidM" ).attr( "src" ) ;
					}
				}
			}
		}

		function option_selected5(item){
			clase = $("."+item).attr("class").split(' ')[2];
			if(sex){	
				if(id1){
					if(clase==undefined){
						$("."+item).addClass("selectedtag");
						$("#" + item + "_LidW").show();
					}else if(clase == "selectedtag"){
						$("."+item).removeClass("selectedtag");
						$("#" + item + "_LidW").hide();
					}
				}
				if(id2){
					if(clase==undefined){
						$("."+item).addClass("selectedtag");
						$("#" + item + "_RidW").show();
					}else if(clase == "selectedtag"){
						$("."+item).removeClass("selectedtag");
						$("#" + item + "_RidW").hide();
					}
				}
			}else{	
				if(id1){
					if(clase==undefined){
						$("."+item).addClass("selectedtag");
						$("#" + item + "_LidM").show();
					}else if(clase == "selectedtag"){
						$("."+item).removeClass("selectedtag");
						$("#" + item + "_LidM").hide();
					}
				}
				if(id2){
					if(clase==undefined){
						$("."+item).addClass("selectedtag");
						$("#" + item + "_RidM").show();
					}else if(clase == "selectedtag"){
						$("."+item).removeClass("selectedtag");
						$("#" + item + "_RidM").hide();
					}
				}
			}
		}

		function option_selected6(item){
			if(sex){
				if(id1){
					if(item!=undefined){
						$(".beardL").hide();
						$(".minib").show();
						$("#" + item + "_LidW").show();
						U4_characterSettings.identity1.beard = $( "#" + item + "_LidW" ).attr( "src" ) ;
					}
				}
				if(id2){	
					if(item!=undefined){
						$(".beardR").hide();
						$("#" + item + "_RidW").show();
						U4_characterSettings.identity2.beard = $( "#" + item + "_RidW" ).attr( "src" ) ;
					}
				}
			}else{
				if(id1){	
					if(item!=undefined){
						$(".beardL").hide();
						$("#" + item + "_LidM").show();
						U4_characterSettings.identity1.beard = $( "#" + item + "_LidM" ).attr( "src" ) ;
					}
				}
				if(id2){	
					if(item!=undefined){
						$(".beardR").hide();
						$("#" + item + "_RidM").show();
						U4_characterSettings.identity2.beard = $( "#" + item + "_RidM" ).attr( "src" ) ;
					}
				}
			}
		}

	//	this.initdropdown = function(){
			$(".arrowselection").click( function(){
				U4_RDC11_ACT1_finishACT = true;

				var item = $(this).attr("id");
				padre = $(this).parent();
				var	clase = $(this).attr("class").split(' ')[0];
				if (clase!="up") {
					$(".dd").css("background","rgba(98, 47, 94, 0.6)");
					padre.css("background","#652F61");
					$(".cont").hide(200);
					$(".rdc11_arrow").hide();
					$(".down").show();
					$(".rdc11_arrow").css("opacity","0.6");
					aux=item;
					$(this).hide();
					$("#"+item+"_up").show();
					$("#"+item+"_up").css("opacity","1");
					$("."+item+"-content").show(200);
				}else{
					$(".dd").css("background","#652F61");
					$("#"+aux).show();
					$("#"+aux+"_up").hide();
					$("."+aux+"-content").hide(200);	
				}
			} );

			$(".U4_RDC11_ACT1_P2_option").click( function(){
				var item = $(this).attr("id");
				option_selected(item);
			} );

			$(".U4_RDC11_ACT1_P2_optionc").click( function(){
				var item = $(this).attr("id");
				option_selected2(item);
			} );

			$(".U4_RDC11_ACT1_P2_optione").click( function(){
				var item = $(this).attr("id");
				option_selected3(item);
			} );

			$(".U4_RDC11_ACT1_P2_optiona").click( function(){
				var item = $(this).attr("id");
				option_selected4(item);
			} );

			$(".U4_RDC11_ACT1_P2_options").click( function(){
				var item = $(this).attr("id");
				option_selected5(item);
			} );

			$(".U4_RDC11_ACT1_P2_optionb").click( function(){
				var item = $(this).attr("id");
				option_selected6(item);
			} );

			$("#id1select").click( function(){
				id1=true;
				id2=false;
			});

			$("#id2select").click( function(){
				id2=true;
				id1=false;
			});
			$("#U4_RDC11_ACT1_P3_containerError_character_id").click( function(){
				$("#U4_RDC11_ACT1_P3_popUp_character_id").hide();
			});
			
			$("#U4_RDC11_ACT1_P3_ready_id").click( function(){
				U4_title_RDC2_ACT_1_complete = true;
			$(".cont").hide();
			$(".rdc11_arrow").hide();
			$(".rdc11_arrow").css("opacity","1");
			$(".dd").css("background","#652F61");
			$(".down").show();
			$("#U4_RDC11_ACT1_P3_popUp_character_id").show();
			$(".U4_RDC11_OptionLeft1f").remove(  );
			$(".U4_RDC11_OptionRight1f").remove(  );
			if (sex!=undefined) {
		  	if( sex == true ){
		  		$(".copywf").show();
		  		$(".copymf").hide();

		  	}else if(sex == false){
		  		//es hombre
				$(".copymf").show();
				$(".copywf").hide();
				$("#U4_RDC11_ACT1_P2_side_Lcopyf").append( "<img src =  '" + U4_characterSettings.identity1.beard + "' class= 'U4_RDC11_OptionLeft1f'/>");
		  		$("#U4_RDC11_ACT1_P2_side_Rcopyf").append( "<img src =  '" + U4_characterSettings.identity2.beard + "' class= 'U4_RDC11_OptionRight1f'/>"); 
			}	 		
		  
		  	$("#U4_RDC11_ACT1_P2_side_Lcopyf").append( "<img src =  '" + U4_characterSettings.identity1.hair + "' class= 'U4_RDC11_OptionLeft1f'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Rcopyf").append( "<img src =  '" + U4_characterSettings.identity2.hair + "' class= 'U4_RDC11_OptionRight1f'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Lcopyf").append( "<img src =  '" + U4_characterSettings.identity1.clotheColor + "' class= 'U4_RDC11_OptionLeft1f'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Rcopyf").append( "<img src =  '" + U4_characterSettings.identity2.clotheColor + "' class= 'U4_RDC11_OptionRight1f'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Lcopyf").append( "<img src =  '" + U4_characterSettings.identity1.accessories + "' class= 'U4_RDC11_OptionLeft1f'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Rcopyf").append( "<img src =  '" + U4_characterSettings.identity2.accessories + "' class= 'U4_RDC11_OptionRight1f'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Lcopyf").append( "<img src =  '" + U4_characterSettings.identity1.eyeColor + "' class= 'U4_RDC11_OptionLeft1f'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Rcopyf").append( "<img src =  '" + U4_characterSettings.identity2.eyeColor + "' class= 'U4_RDC11_OptionRight1f'/>");

		  	$(".U4_RDC11_OptionLeft1f").show();
		  	$(".U4_RDC11_OptionRight1f").show();
		}
			});
		//}

		$(".U4_RDC11_ACT1_P2_playersex").click(function () {
			aux2 = false;
			$(".words").removeClass("selectedtag");

			$(".U4_RDC11_ACT1_P2_optionsL").hide();
			$(".U4_RDC11_ACT1_P2_optionsR").hide();
			$(".U4_RDC11_OptionLeft").hide();
			$(".U4_RDC11_OptionRight").hide();
			$(".cont").hide();
			$(".rdc11_arrow").hide();
			$(".rdc11_arrow").css("opacity","1");
			$(".dd").css("background","#652F61");
			$(".down").show();
			var idps = $(this).attr("id");
			if (idps=="U4_RDC11_ACT1_P2_female_id") {
				$(".women").show();
				$("#U4_RDC11_ACT1_P2_hairstyle1_LidW").show();
				$("#U4_RDC11_ACT1_P2_acc1_LidW").show();
				$("#U4_RDC11_ACT1_P2_clothes1_LidW").show();
				$("#U4_RDC11_ACT1_P2_eyes1_LidW").show();
				$("#U4_RDC11_ACT1_P2_hairstyle1_RidW").show();
				$("#U4_RDC11_ACT1_P2_acc1_RidW").show();
				$("#U4_RDC11_ACT1_P2_clothes1_RidW").show();
				$("#U4_RDC11_ACT1_P2_eyes1_RidW").show();
				$(".men").hide();
				sex = true;
			}else{
				$(".women").hide();
				$(".men").show();
				$("#U4_RDC11_ACT1_P2_hairstyle1_LidM").show();
				$("#U4_RDC11_ACT1_P2_acc1_LidM").show();
				$("#U4_RDC11_ACT1_P2_clothes1_LidM").show();
				$("#U4_RDC11_ACT1_P2_eyes1_LidM").show();
				$("#U4_RDC11_ACT1_P2_beard1_LidM").show();
				$("#U4_RDC11_ACT1_P2_hairstyle1_RidM").show();
				$("#U4_RDC11_ACT1_P2_acc1_RidM").show();
				$("#U4_RDC11_ACT1_P2_clothes1_RidM").show();
				$("#U4_RDC11_ACT1_P2_eyes1_RidM").show();
				$("#U4_RDC11_ACT1_P2_beard1_RidM").show();
				sex = false;
			}
			U4_characterSettings.sex = sex;
			$( "#forward_id" ).show( );
			utils.blinkElement("forward_id",true);

		});

	this.init = function( isReset ){
		$( "#forward_id" ).hide( );
		$("#U4_RDC11_ACT1_P2_header_id").show();
		//utils.blinkElement("U4_RDC11_ACT1_P2_next_id",true);

	  	if( isReset ){
	  		reset( );
	  	}
	};

}//end screen3( )

//************************************* ACTIVITY 2 SCREEN 1 ************************************************
function Screen4( ){
	/*U4_RDC11_ACT2_P1_audio.onended = U4_RDC11_ACT2_P1_onEndAudio;

	function U4_RDC11_ACT2_P1_onEndAudio(){
		U4_RDC11_ACT2_P1_audio.currentTime = 0;
		//utils.blinkElement("U4_RDC11_ACT2_P1_next_id",true);  	
	}*/

	function reset( ){
	}

	$( "#U4_RDC11_ACT2_P1_speaker_id" ).click( function( ){
			utils.blinkElement("U4_RDC11_ACT2_P1_speaker_id",false); 
			playIntro( U4_RDC11_ACT2_P1_audio);
		} );
	
	this.init = function( isReset ){
	  	//utils.attachRezise( $( "#U4_RDC11_ACT2_P1" ), 960, 720 );
		utils.blinkElement("forward_id",true); 
		utils.blinkElement("U4_RDC11_ACT2_P1_speaker_id",true);  	
		$("#U4_RDC11_ACT2_P1_txt_id").show();
	  	if( isReset ){
	  		reset( );
	  	}
	  	$( "#forward_id" ).show( );
		$( "#back_id" ).show( );
		console.debug( "New screen" );
	  	
	};
}//end screen4( )

function Screen5( ){

	this.reset = function ( ){
		$(".U4_RDC11_OptionLeft1").remove(  );
		$(".U4_RDC11_OptionRight1").remove(  );
	};
	
	this.init = function( isReset ){
	  	//utils.attachRezise( $( "#U4_RDC11_ACT2_P2" ), 960, 720 );
	  	utils.blinkElement("U4_RDC11_ACT2_P2_start_id",true);

		 if (sex!=undefined) {
		  	if( sex == true ){
		  		$(".copyw").show();
		  		$(".copym").hide();

		  	}else if(sex == false){
		  		//es hombre
		  		$( ".copym" ).css( "display", "block" );
				$(".copym").show();
				$(".copyw").hide();
				$("#U4_RDC11_ACT1_P2_side_Lcopy").append( "<img src =  '" + U4_characterSettings.identity1.beard + "' class= 'U4_RDC11_OptionLeft1'/>");
		  		$("#U4_RDC11_ACT1_P2_side_Rcopy").append( "<img src =  '" + U4_characterSettings.identity2.beard + "' class= 'U4_RDC11_OptionRight1'/>"); 
			}	 		
		  
		  	$("#U4_RDC11_ACT1_P2_side_Lcopy").append( "<img src =  '" + U4_characterSettings.identity1.hair + "' class= 'U4_RDC11_OptionLeft1'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Rcopy").append( "<img src =  '" + U4_characterSettings.identity2.hair + "' class= 'U4_RDC11_OptionRight1'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Lcopy").append( "<img src =  '" + U4_characterSettings.identity1.clotheColor + "' class= 'U4_RDC11_OptionLeft1'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Rcopy").append( "<img src =  '" + U4_characterSettings.identity2.clotheColor + "' class= 'U4_RDC11_OptionRight1'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Lcopy").append( "<img src =  '" + U4_characterSettings.identity1.accessories + "' class= 'U4_RDC11_OptionLeft1'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Rcopy").append( "<img src =  '" + U4_characterSettings.identity2.accessories + "' class= 'U4_RDC11_OptionRight1'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Lcopy").append( "<img src =  '" + U4_characterSettings.identity1.eyeColor + "' class= 'U4_RDC11_OptionLeft1'/>");
		  	$("#U4_RDC11_ACT1_P2_side_Rcopy").append( "<img src =  '" + U4_characterSettings.identity2.eyeColor + "' class= 'U4_RDC11_OptionRight1'/>");

		  	$(".U4_RDC11_OptionLeft1").show();
		  	$(".U4_RDC11_OptionRight1").show();
		}

	  	if( isReset ){
	  		this.reset( );
	  	}
	};
}//end screen5( )

function Screen6( ){
	//var textEditor = undefined;
	function reset( ){
	}
	
	this.init = function( isReset ){
	  	//utils.attachRezise( $( "#U4_RDC11_ACT2_P3" ), 960, 720 );
	  	//utils.blinkElement("U4_RDC11_ACT2_P3_next_id",true);
	  	$( "#U4_RDC11_ACT2_P3_save_id" ).unbind( "click" );
	  	if( isReset ){
	  		reset( );
	  	}
		textEditor = new EditTextQuestion( {
			parentDiv: "U4_RDC11_ACT2_P3_text-container_id",
			saveButtonId: "U4_RDC11_ACT2_P3_save_id"
		} );
	};
}//end screen6( )

function Screen7( ){
	
	/*U4_RDC11_ACT2_P4_audio.onended = U4_RDC11_ACT2_P4_onEndAudio;

	function U4_RDC11_ACT2_P4_onEndAudio(){
		U4_RDC11_ACT2_P4_audio.currentTime = 0;
		//utils.blinkElement("U4_RDC11_ACT2_P4_next_id",true);
	}*/
		
	function reset( ){
	}
	
	$( "#U4_RDC11_ACT2_P4_speaker_id" ).click( function(){
		utils.blinkElement("U4_RDC11_ACT2_P4_speaker_id",false);
			playIntro( U4_RDC11_ACT2_P4_audio );
		} );

	this.init = function( isReset ){
		//var stop = undefined;
	  	//utils.attachRezise( $( "#U4_RDC11_ACT2_P4" ), 960, 720 );
		$(".U4_RDC11_ACT2_P4_activities").bind("click");
		utils.blinkElement("forward_id",true);
		utils.blinkElement("U4_RDC11_ACT2_P4_speaker_id",true);

	  	if( isReset ){
	  		reset( );
	  	}
	};
}//end screen7( )

function Screen8( ){
	
	/*U4_RDC11_ACT2_P5_audio.onended = U4_RDC11_ACT2_P5_onEndAudio;

	function U4_RDC11_ACT2_P5_onEndAudio(){
		U4_RDC11_ACT2_P5_audio.currentTime = 0;
		//utils.blinkElement("U4_RDC11_ACT2_P5_next_id",true);
	}*/
		
	function reset( ){
	}

	$( "#U4_RDC11_ACT2_P5_speaker_id" ).click( function(){
		utils.blinkElement("U4_RDC11_ACT2_P5_speaker_id",false);
			playIntro( U4_RDC11_ACT2_P5_audio );
		} );
	
	this.init = function( isReset ){
		//var stop = undefined;
	  	//utils.attachRezise( $( "#U4_RDC11_ACT2_P5" ), 960, 720 );
		$(".U4_RDC11_ACT2_P5_activities").bind("click");
		utils.blinkElement("forward_id",true);
		utils.blinkElement("U4_RDC11_ACT2_P5_speaker_id",true);

	  	if( isReset ){
	  		reset( );
	  	}
	};
}//end screen7( )

//jquery stuff
function init_rdc11( ){
	var screen1 = new Screen1( );
	var screen2 = new Screen2( );
	var screen3 = new Screen3( );
	var screen4 = new Screen4( );
	var screen5 = new Screen5( );
	var screen6 = new Screen6( );
	var screen7 = new Screen7( );
	var screen8 = new Screen8( );
	U4_title_RDC2_ACT_2_complete = true;
	var reset = false;
	$(".copyw").hide();
	$(".copym").hide();
	
	//$( "#U4_RDC11_P0_main-container_id" ).hide( );
	//$( "#U4_RDC11_ACT1_P1" ).hide();
	//$( "#U4_RDC11_ACT1_P2" ).hide();
	//$( "#U4_RDC11_ACT2_P1" ).hide();
	//$( "#U4_RDC11_ACT2_P2" ).hide();
	//$( "#U4_RDC11_ACT2_P3" ).hide();
	//$( "#U4_RDC11_ACT2_P4" ).hide();
	//$( "#U4_RDC11_ACT2_P5" ).hide( );

	screen1.init( false );
	//screen6.init( false );

	//********Change screen handlers*****
	$( "#U4_RDC11_ACT2_P2_start_id" ).click( function( ){
		utils.blinkElement("U4_RDC11_ACT2_P2_start_id",false);
		utils.blinkElement("forward_id",true);
		$( "#U4_RDC11_ACT2_P2" ).hide( 0 );
		$( "#U4_RDC11_ACT2_P3" ).show( 0, function( ){
		screen6.init( reset );
		} );
	});//end

	//start activity 1
	$( "#U4_RDC11_P0_activity1_id" ).click( function( ){
		utils.blinkElement("U4_RDC11_P0_activity1_id",false);
		utils.blinkElement("U4_RDC11_P0_activity2_id",true);
		stopIfPlaying( U4_RDC11_P0_audio );
		onScreen2 = true;
		screen2.init( reset );
		
		$( "#U4_RDC11_P0" ).hide( 0 );
		$( "#U4_RDC11_ACT1_P1" ).show( 0);
		
		//asign goNext functions
		fun = act11Next;
		fun2 = act11Back;
		nav_current = "U4_RDC11_ACT1_P1";
		
	});//end click activity 1
	//start activity 2
	$( "#U4_RDC11_P0_activity2_id" ).click( function( ){
		utils.blinkElement("U4_RDC11_P0_activity1_id",false);
		utils.blinkElement("U4_RDC11_P0_activity2_id",true);
		stopIfPlaying( U4_RDC11_P0_audio );
		screen4.init( reset );
		
		$( "#U4_RDC11_P0" ).hide( 0 );
		$( "#U4_RDC11_ACT2_P1").show( 0);
		fun = act21Next;
		fun2 = act21Back;
		nav_current = "U4_RDC11_ACT2_P1";
	});//end click activity 2
	
	//act1_p1 -> act1_p2
	function act11Next( ){
		stopIfPlaying( U4_RDC11_ACT1_P1_audio );
		onScreen2 = undefined;
		screen3.init( reset );
		fun = act12Next;
		fun2 = act12Back;
	}//end
	
	function act11Back( ){
		screen1.init( true );
		stopIfPlaying( U4_RDC11_ACT1_P1_audio );
		onScreen2 = undefined;
		fun = undefined;
		fun2 = undefined;
	}

	//act1_p2 -> act1_p3
	function act12Next( ){
		if (sex!=undefined && aux2 ==false){
			aux2=true;
			if (sex) {
				U4_characterSettings.identity1.hair = "././img/unidad4/HairW/hair1.png";
				U4_characterSettings.identity2.hair = "././img/unidad4/HairW/hair1.png";
				U4_characterSettings.identity1.clotheColor = "././img/unidad4/ClothesW/green.png";
				U4_characterSettings.identity2.clotheColor = "././img/unidad4/ClothesW/green.png";
				U4_characterSettings.identity1.eyeColor = "././img/unidad4/EyesW/Eyebrown.png";
				U4_characterSettings.identity2.eyeColor = "././img/unidad4/EyesW/Eyebrown.png";
				U4_characterSettings.identity1.accessories = "././img/unidad4/AccW/acc1.png";
				U4_characterSettings.identity2.accessories = "././img/unidad4/AccW/acc1.png";
			}else{
				U4_characterSettings.identity1.hair = "././img/unidad4/HairM/hair1.png";
				U4_characterSettings.identity2.hair = "././img/unidad4/HairM/hair1.png";
				U4_characterSettings.identity1.clotheColor = "././img/unidad4/ClothesM/blue.png";
				U4_characterSettings.identity2.clotheColor = "././img/unidad4/ClothesM/blue.png";
				U4_characterSettings.identity1.eyeColor = "././img/unidad4/EyesM/Eyebrown.png";
				U4_characterSettings.identity2.eyeColor = "././img/unidad4/EyesM/Eyebrown.png";
				U4_characterSettings.identity1.accessories = "././img/unidad4/AccM/acc1.png";
				U4_characterSettings.identity2.accessories = "././img/unidad4/AccM/acc1.png";
				U4_characterSettings.identity1.beard = "././img/unidad4/Beard/beard1.png";
				U4_characterSettings.identity2.beard = "././img/unidad4/Beard/beard1.png";
			}
		}
		fun = act13Next;
		fun2 = act13Back;
	}//end
	
	function act12Back( ){
		screen1.init( true );
		$( "#forward_id" ).show( );
		fun = act11Next;
		fun2 = act11Back;
	}
	
	//act1_p3 -> main
	function act13Next( ){
		id1=false;
		id2=false;
		$(".cont").hide();
		$(".rdc11_arrow").hide();
		$(".rdc11_arrow").css("opacity","1");
		$(".dd").css("background","#652F61");
		$(".down").show();
		screen1.init( true );
		fun = undefined;
		fun2 = undefined;
	}//end
	
	function act13Back( ){
		screen2.init( false );
		fun = act12Next;
		fun2 = act12Back;
	}
	
	//act2_p1 -> act2_p2
	function act21Next( ){
		stopIfPlaying( U4_RDC11_ACT2_P1_audio );
		screen5.init( reset );
		fun = act22Next;
		fun2 = act22Back;
	}//end
	
	function act21Back( ){
		stopIfPlaying( U4_RDC11_ACT2_P1_audio );
		screen1.init( false );
		console.debug( "act 2.1" );
		fun = undefined;
		fun2 = undefined;
	}

	//act2_p2 -> act2_p3
	function act22Next( ){
		screen6.init( reset );
		screen5.reset( );
		fun = act23Next;
		fun2 = act23Back;
	}//end
	
	function act22Back( ){
		screen3.init( false );
		screen5.reset( );
		fun = act21Next;
		fun2 = act21Back;
	}

	//act2_p3 -> act2_p4
	function act23Next( ){
		screen7.init( reset );
		fun = act24Next;
		fun2 = act24Back;
	}//end
	
	function act23Back( ){
		screen4.init( false );
		fun = act22Next;
		fun2 = act22Back;
	}

	$( "#U4_RDC11_ACT2_P3_rewrite_id" ).click( function( ){
		nav_current = "U4_RDC11_ACT2_P3";
		stopIfPlaying( U4_RDC11_ACT2_P4_audio );
		$( "#U4_RDC11_ACT2_P4" ).hide( 0 );
		$( "#U4_RDC11_ACT2_P3" ).show( 0, function( ){
			screen6.init( reset );
		} );
	} );//end
	
	//act2_p4 -> act2_p5
	function act24Next( ){
		stopIfPlaying( U4_RDC11_ACT2_P4_audio );
		screen8.init( reset );
		fun = act25Next;
		fun2 = act25Back;
	}
	
	function act24Back( ){
		stopIfPlaying( U4_RDC11_ACT2_P4_audio );
		screen5.init( false );
		fun = act22Next;
		fun2 = act22Back;
	}

	//act2_p5 -> main
	function act25Next( ){
		stopIfPlaying( U4_RDC11_ACT2_P5_audio );
		resetFace();
		screen1.init( true );
		fun = undefined;
		fun2 = undefined;

	}
	
	function act25Back( ){
		stopIfPlaying( U4_RDC11_ACT2_P5_audio );
		screen6.init( false );
		fun = act24Next;
		fun2 = act24Back;
	}

}//end ready
