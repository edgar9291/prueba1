/*
*javaScript Unidad 7, pagina 8
 */

/*function move() {
        $("#show").click(function () {
            $(".home").show(2000);
        });
        $("#hide").click(function () {
            $(".home").hide();
            $(".selector").hide();
            $(".screen1").show();
        });
    }
}*/



var banderita=0;


$(document).ready(function(){
    $("#unity7").click(function(){
        $('.u3_b7').hide();
        $('.u3_b7_p2').show();
    });
    $("#u3_b7_p2").click(function(){
        $('.u3_b7_p2').hide();
        $('.u3_b7_p3').show();
    });

});








    $(document).ready(function(){
      $("#r1").draggable({ revert: "invalid",helper:"clone",appendTo:"#esperar1"});
      $("#r2").draggable({ revert: "invalid",helper:"clone",appendTo:"#esperar2"});
      $("#r3").draggable({ revert: "invalid",helper:"clone",appendTo:"#esperar3"});
      $("#r4").draggable({ revert: "invalid",helper:"clone",appendTo:"#esperar1"});
      $("#r5").draggable({ revert: "invalid",helper:"clone",appendTo:"#esperar2"});
      $("#r6").draggable({ revert: "invalid",helper:"clone",appendTo:"#esperar3"});
      //Checar esto
      //$( "#droppable1" ).droppable({drop: soltado1, accept:"#draggable1"});
    $("#esperar1").droppable(
    {
        tolerance: "intersect", //Para que sea el 50% considerado azul
        drop: function( event, ui ) 
        {
if(  (ui.draggable.is("#r3"))||(ui.draggable.is("#r6"))    ){
banderita=banderita+1;
          ui.draggable.css({ 
            }).appendTo('#esperar1');
          ui.draggable.addClass("fill_mini");
          if((ui.draggable.is("#r3")) ){
                           document.getElementById("r3").style.color = "#005ce6";
                           ui.draggable.css("font-size", "2.3vh");
                           ui.draggable.css("font-family", "Myriad Pro");
                           $(".1").hide();




          }
if((ui.draggable.is("#r6")) ){
                           document.getElementById("r6").style.color = "#005ce6";
                           ui.draggable.css("font-size", "2.3vh");
                           ui.draggable.css("font-family", "Myriad Pro");
                           $(".6").hide();



          }
          $("#posx").text(ui.position.left);
          $("#posy").text(ui.position.top);
                            if(banderita==6)$(".U1_P10_RDC2_TextAudioActivities").show();
                                            $(".U1_P10_RDC2_ACT_2_Activitydg1 1").hide();


        }}
    });


    $("#esperar2").droppable(
    {
        tolerance: "intersect", //Para que sea el 50% considerado verde
        drop: function( event, ui ) 
        {
  if(  (ui.draggable.is("#r1"))||(ui.draggable.is("#r4"))    ){
          banderita=banderita+1;

          ui.draggable.css({ // set absolute position of dropped object
                top: ui.position.top, left: ui.position.left
            }).appendTo('#esperar2');
          ui.draggable.addClass("fill_mini");
          if((ui.draggable.is("#r1")) ){
                           document.getElementById("r1").style.color = "#00b300";
                            ui.draggable.css("font-size", "2.3vh");
                           ui.draggable.css("font-family", "Myriad Pro");
                           $(".2").hide();



          }
if((ui.draggable.is("#r4")) ){
                           document.getElementById("r4").style.color = "#00b300";
                            ui.draggable.css("font-size", "2.3vh");
                           ui.draggable.css("font-family", "Myriad Pro");
$(".4").hide();


          }
          $("#posx").text(ui.position.left);
          $("#posy").text(ui.position.top);
                                      if(banderita==6){$(".U1_P10_RDC2_TextAudioActivities").show();
                                                       $(".U1_P10_RDC2_ACT_2_Activitydg1 2").hide();
                                    }

        }}
    });
    $("#esperar3").droppable(
    {
        tolerance: "intersect", //Para que sea el 50% considerado en el rojo
        drop: function( event, ui ) 
        {
          if(  (ui.draggable.is("#r2"))||(ui.draggable.is("#r5"))    ){
         banderita=banderita+1;

          ui.draggable.css({ 
            }).appendTo('#esperar3');
          ui.draggable.addClass("fill_mini");
          if((ui.draggable.is("#r2")) ){
                           document.getElementById("r2").style.color = "#b30000";
                            ui.draggable.css("font-size", "2.3vh");
                           ui.draggable.css("font-family", "Myriad Pro");
$(".3").hide();


          }




if((ui.draggable.is("#r5")) ){
                           document.getElementById("r5").style.color = "#b30000";
                            ui.draggable.css("font-size", "2.3vh");
                           ui.draggable.css("font-family", "Myriad Pro");
                           $(".5").hide();



          }
          $("#posx").text(ui.position.left);
          $("#posy").text(ui.position.top);
                                      if(banderita==6)$(".U1_P10_RDC2_TextAudioActivities").show();

        }}
    });
    

    })









