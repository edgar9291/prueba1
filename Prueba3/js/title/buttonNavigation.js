$("#forward_id").bind("click",function(){
	clickForward(fun);
});
$("#back_id").bind("click",function(){
	clickBack(fun2);
});
$("#home_id").bind("click", function(){
	go_Home(currentUnit);
});
/*Show and Hide Nav*/
function show_Nav () {
	$("#forward_id").show();
	$("#back_id").show();
}
function hide_Nav () {
	$("#forward_id").hide();
	$("#back_id").hide();
}
/*nav*/
function clickForward (fun) {
	blinkElement("forward_id",false);
	blinkElement("back_id",false);
	hide_Nav();

	var position = nav_current.indexOf("_P")+2;
	var last =parseInt( nav_current.substring(position, nav_current.length));
	console.log(last);
	last+=1;
	next = nav_current.substring(0, position)+last;
	if($("#"+next).length){
		$("#"+nav_current).hide();
		nav_current = next;
		$("#"+nav_current).show();
		show_Nav();
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
	blinkElement("forward_id",false);
	blinkElement("back_id",false);
	hide_Nav();
	var position = nav_current.indexOf("_P")+2;
	var last =parseInt( nav_current.substring(position, nav_current.length));
	console.log(last);
	last-=1;
	next = nav_current.substring(0, position)+last;
	if($("#"+next).length){
		show_Nav();
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
function show_Home () {
	$("#home_id").show();
}
function hide_Home () {
	$("#home_id").hide();
}
function go_Home(unitNumber){
	blinkElement("forward_id",false);
	blinkElement("back_id",false);
	if(typeof(nav_current) != "undefined"){
		$("#"+nav_current).hide();
	}	
	$("audio").each(function(){
		$(this)[0].pause();
		$(this)[0].currentTime = 0;
	});
	$("video").each(function(){
		$(this)[0].pause();
		$(this)[0].currentTime = 0;
	});
	hide_Nav ();
	switch(unitNumber){
		case 1:
			title_initUnit1();
			break;
		case 2:
			title_initUnit2();
			$(".title-nav-top-unit-1").css("left","43.6%");
			break;
		case 3:
			title_initUnit3();
			$(".title-nav-top-unit-2").css("left","52.6%");
			$(".title-nav-top-unit-1").css("left","43.6%");
			break;
		case 4:

			title_initUnit4();
			$(".title-nav-top-unit-2").css("left","52.6%");
			$(".title-nav-top-unit-1").css("left","43.6%");
			$(".title-nav-top-unit-3").css("left","61.6%");
			break;
		case 5:
			title_initUnit5();
			$(".title-nav-top-unit-2").css("left","52.6%");
			$(".title-nav-top-unit-1").css("left","43.6%");
			$(".title-nav-top-unit-3").css("left","61.6%");
			$(".title-nav-top-unit-4").css("left","70.6%");
			break;
		case 6:
			title_initUnit6();
			$(".title-nav-top-unit-2").css("left","52.6%");
			$(".title-nav-top-unit-1").css("left","43.6%");
			$(".title-nav-top-unit-3").css("left","61.6%");
			$(".title-nav-top-unit-4").css("left","70.6%");
			$(".title-nav-top-unit-5").css("left","79.6%");
			break;
		default:
			title_initUnit1();
	}
}
