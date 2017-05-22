/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    $(".dropdown_element").click( function(){
        //alert("ele");        
		var item = $(this).attr("id");  
                var papa=$(this).parents().parents().attr("id");
                $( "#"+papa ).data( "index", $(this).index());
                             
      //console.log( papa);
        
	} );
    

