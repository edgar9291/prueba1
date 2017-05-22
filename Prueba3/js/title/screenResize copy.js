/** Funcion resize screen
* Funcion que ajusta el tamaño del ODE al tamaño del vertical de la pantalla
*/
function resizeScreen()
{
	var width, height, left, todo, screenWidth;
	todo = document.getElementById('title-main-container_id');  /* id del DIV que contiene todo el contenido */
	screenWidth = window.innerWidth;
	height = window.innerHeight;
	width  = (height * 1024) /768;  /* 848 tamaño de la imagen de diseño ---- 720 tamaño de imagen de diseño */
	if(width > screenWidth)
	{
		left = 0;
	}
	else
	{
		left = (screenWidth - width) / 2;
	}
	todo.setAttribute("style", "width: "+width+"px; height: "+height+"px;left: "+left+"px;");
}
resizeScreen();
window.onresize = function()
	{
		resizeScreen();
		$("#title-main-container_id").show();
	}
