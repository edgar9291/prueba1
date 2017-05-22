/**
 * Created by EDBE on 19/12/2015.
 */
$(document).ready(function(){
    var valNew=$("#idVarGlobal2").text().split(',');
    for(var i=0;i<valNew.length;i++){
        if (valNew[i]=="1") { //Roma
            $(".ClickRomaExerciseFont1").css( 'pointer-events', 'none' );
        }else if (valNew[i]=="2") { //Roma
            $(".ClickRomaExerciseFont2").css( 'pointer-events', 'none' );
        }else if (valNew[i]=="3") { //Roma
            $(".ClickGreciaExerciseFont1").css( 'pointer-events', 'none' );
        }else if (valNew[i]=="4") { //Roma
            $(".ClickGreciaExerciseFont2").css( 'pointer-events', 'none' );
        }else if (valNew[i]=="5") { //Roma
            $(".ClickMediterraneoExerciseFont1").css( 'pointer-events', 'none' );
        }else if (valNew[i]=="6") { //Roma
            $(".ClickMediterraneoExerciseFont2").css( 'pointer-events', 'none' );
        }
    }
});