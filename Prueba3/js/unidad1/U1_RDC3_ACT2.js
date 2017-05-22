
function U1_RDC3_ACT2_P1_ID(){
     U1_RDC3_next="U1_RDC3_ACT2_P2_ID()";
     U1_RDC3_back="U1_RDC3_P1_ID()";
     U1_RDC3_now ="U1_RDC3_ACT2_P1_ID()";
	 $("#forward_id").show();
	 $("#back_id").show();
    RDC3_CLEAR_ALL();
    var U1_RDC3_ACT2_P1_pause=false;
    $("#U1_RDC3_ACT2_P1").show();
    $("#U1_RDC3_btn_bocina").show();
    $("#U1_RDC3_btn_bocina").unbind('click');
    $("#U1_RDC3_btn_bocina").click(function() {
        if(U1_RDC3_ACT1aud){
            U1_RDC3_ACT1aud=false;
//            $("#U1_RDC3_ACT1_P3_txtGlobo_id").show();
//            $("#U1_RDC3_ACT1_P3_imgGlobo_id").show();
            $("#RDC3_P8_1").trigger("play");
        }else{
            if(U1_RDC3_ACT2_P1_pause){
                U1_RDC3_ACT2_P1_pause=false;
                $("#RDC3_P8_1").trigger('play');
            }else{
                U1_RDC3_ACT2_P1_pause = true;
                $("#RDC3_P8_1").trigger('pause');
                
            }
                
        }
    });
    $("#RDC3_P8_1").bind("ended",function(){
        U1_RDC3_ACT1aud=true;
    });
	nav_current="U1_RDC3_ACT2_P1";
    fun="rdc3_nextp()";
	fun2="rdc3_back()";
    
}
function U1_RDC3_ACT2_P2_ID(){
    U1_RDC3_next="U1_RDC3_ACT2_P3_ID()";
    U1_RDC3_back="U1_RDC3_ACT2_P1_ID()";
    U1_RDC3_now ="U1_RDC3_ACT2_P2_ID()";    
	$("#forward_id").show();
	 $("#back_id").show();
    RDC3_CLEAR_ALL();
    $("#U1_RDC3_ACT2_P2").show();  
    $("#U1_RDC3_btn_bocina").hide();
    ///////////////
	fun="rdc3_nextp()";
	fun2="rdc3_back()";
  
  }
function U1_RDC3_ACT2_P3_ID()
{
    U1_RDC3_next="U1_RDC3_ACT2_P4_ID()";
    U1_RDC3_back="U1_RDC3_ACT2_P2_ID()";
    U1_RDC3_now ="U1_RDC3_ACT2_P3_ID()";
	$("#forward_id").show();
	 $("#back_id").show();
    RDC3_CLEAR_ALL();
    var U1_RDC3_ACT2_P3_pause=false;
    $("#U1_RDC3_ACT2_P3").show();
    $("#U1_RDC3_btn_bocina").show();
    $("#U1_RDC3_btn_bocina").unbind('click');
    $("#U1_RDC3_btn_bocina").click(function() {
        if(U1_RDC3_ACT1aud){
            U1_RDC3_ACT1aud=false;
//            $("#U1_RDC3_ACT1_P3_txtGlobo_id").show();
//            $("#U1_RDC3_ACT1_P3_imgGlobo_id").show();
            $("#RDC3_P10_1").trigger("play");
        }else{
            if(U1_RDC3_ACT2_P3_pause){
                U1_RDC3_ACT2_P3_pause=false;
                $("#RDC3_P10_1").trigger('play');
            }else{
                U1_RDC3_ACT2_P3_pause = true;
                $("#RDC3_P10_1").trigger('pause');
                
            }
                
        }
    });
    $("#RDC3_P10_1").bind("ended",function(){
        U1_RDC3_ACT1aud=true;
    });
	fun="rdc3_nextp()";
	fun2="rdc3_back()";
}
