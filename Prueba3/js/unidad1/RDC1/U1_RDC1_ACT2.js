
function U1_RDC1_ACT2_P1_ID(){
      U1_RDC1_next="U1_RDC1_ACT2_P2_ID()";
     U1_RDC1_back="U1_RDC1_P1_ID()";
      U1_RDC1_now ="U1_RDC1_ACT2_P1_ID()";
    RDC1_CLEAR_ALL();
	$("#forward_id").show();
	 $("#back_id").show();
	 $("#home_id").show();
    var U1_RDC1_ACT2_P1_pause=false;
    $("#U1_RDC1_ACT2_P1").show();
    $("#U1_RDC1_btn_bocina").show();
    $("#U1_RDC1_btn_bocina").unbind('click');
    $("#U1_RDC1_btn_bocina").click(function() {
        if(U1_RDC1_ACT1aud){
            U1_RDC1_ACT1aud=false;
//            $("#U1_RDC1_ACT1_P3_txtGlobo_id").show();
//            $("#U1_RDC1_ACT1_P3_imgGlobo_id").show();
            $("#RDC1_P9_1").trigger("play");
        }else{
            if(U1_RDC1_ACT2_P1_pause){
                U1_RDC1_ACT2_P1_pause=false;
                $("#RDC1_P9_1").trigger('play');
            }else{
                U1_RDC1_ACT2_P1_pause = true;
                $("#RDC1_P9_1").trigger('pause');
                
            }
                
        }
    });
    $("#RDC1_P9_1").bind("ended",function(){
        U1_RDC1_ACT1aud=true;
    });
	
	nav_current="U1_RDC2_ACT1_P1";
    fun="nextp()";
	fun2="back()";
    
}
function U1_RDC1_ACT2_P2_ID(){
     U1_RDC1_next="U1_RDC1_ACT2_P3_ID()";
    U1_RDC1_back="U1_RDC1_ACT2_P1_ID()";
     U1_RDC1_now ="U1_RDC1_ACT2_P2_ID()";    
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
	$("#forward_id").show();
	 $("#back_id").show();
	 $("#home_id").show();
    $("#U1_RDC1_ACT2_P2").show();  
    $("#U1_RDC1_btn_bocina").hide();
    ///////////////
    var html = "";
html += '<video id="U1_RDC1_ACT2_P2_VIDEO" width="80%" controls >';
html += '<source src="video/unidad1/RDC1/VictorJaraCaiCaiVilu.mp4"  type="video/mp4" >';
html += '<source src="video/unidad1/RDC1/VictorJaraCaiCaiVilu.ogv"  type="video/ogg" >';
html += '</video>';
$("#U1_RDC1_ACT2_P2_video").html(html);
    
}

function U1_RDC1_ACT2_P3_ID(){
     U1_RDC1_next="U1_RDC1_ACT2_P4_ID()";
    U1_RDC1_back="U1_RDC1_ACT2_P2_ID()";
     U1_RDC1_now ="U1_RDC1_ACT2_P3_ID()";
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
	$("#forward_id").show();
	 $("#back_id").show();
	 $("#home_id").show();
    var U1_RDC1_ACT2_P3_pause=false;
    $("#U1_RDC1_ACT2_P3").show();
    $("#U1_RDC1_btn_bocina").show();
    $("#U1_RDC1_btn_bocina").unbind('click');
    $("#U1_RDC1_btn_bocina").click(function() {
        if(U1_RDC1_ACT1aud){
            U1_RDC1_ACT1aud=false;
//            $("#U1_RDC1_ACT1_P3_txtGlobo_id").show();
//            $("#U1_RDC1_ACT1_P3_imgGlobo_id").show();
            $("#RDC1_P11_1").trigger("play");
        }else{
            if(U1_RDC1_ACT2_P3_pause){
                U1_RDC1_ACT2_P3_pause=false;
                $("#RDC1_P11_1").trigger('play');
            }else{
                U1_RDC1_ACT2_P3_pause = true;
                $("#RDC1_P11_1").trigger('pause');
                
            }
                
        }
    });
    $("#RDC1_P11_1").bind("ended",function(){
        U1_RDC1_ACT1aud=true;
    });
}
function U1_RDC1_ACT2_P4_ID (){
    
     U1_RDC1_next="U1_RDC1_P1";//home
    U1_RDC1_back="U1_RDC1_ACT2_P3_ID()";
     U1_RDC1_now ="U1_RDC1_ACT2_P4_ID()";
    RDC1_CLEAR_ALL();
	fun="nextp()";
	fun2="back()";
	$("#forward_id").show();
	 $("#back_id").show();
	 $("#home_id").show();
    var U1_RDC1_ACT2_P4_pause=false;
    $("#U1_RDC1_btn_bocina").hide();
    $("#U1_RDC1_ACT2_P4").show(); 
    $("#U1_RDC1_btn_bocina").show();
    $("#U1_RDC1_btn_bocina").unbind('click');
    $("#U1_RDC1_btn_bocina").click(function() {
        if(U1_RDC1_ACT1aud){
            U1_RDC1_ACT1aud=false;
//            $("#U1_RDC1_ACT1_P3_txtGlobo_id").show();
//            $("#U1_RDC1_ACT1_P3_imgGlobo_id").show();
            $("#RDC1_P12_1").trigger("play");
        }else{
            if(U1_RDC1_ACT2_P4_pause){
                U1_RDC1_ACT2_P4_pause=false;
                $("#RDC1_P12_1").trigger('play');
            }else{
                U1_RDC1_ACT2_P4_pause = true;
                $("RDC1_P12_1").trigger('pause');
                
            }
                
        }
    });
    $("#RDC1_P12_1").bind("ended",function(){
        U1_RDC1_ACT1aud=true;
    });
        
}