/**
 * utils.js
 * General methods to help in the process of creating
 * and animating the elements.
 * @version 1.8
 * @author SmartDreams
 */
function Utils( ){ }//Class name. No properties declared.

//**********************Public functions******************
  /** Funcion resize screen
* Funcion que ajusta el tamaño del ODE al tamaño del vertical de la pantalla
*/
Utils.prototype.resizeScreen = function( mainDiv, targetWidth, targetHeight ){
	var width, height, left, todo, screenWidth;
	
	if( mainDiv == undefined || mainDiv == null ){
		console.error( "the main div is null" );
		return;
	}
	
	screenWidth = window.innerWidth;
	height = window.innerHeight;
	width  = (height * targetWidth) /targetHeight;
	
	if( width > screenWidth ){
		left = 0;
	} else {
		left = (screenWidth - width) / 2;
	}
	
	mainDiv.css( {
		"width": width,
		"height": height,
		"left": left
	} );
};

Utils.prototype.attachRezise = function( mainDiv, targetWidth, targetHeight ){
	Utils.prototype.resizeScreen.call( this, mainDiv, targetWidth, targetHeight );
	window.onresize = function( ){
		Utils.prototype.resizeScreen.call(  this, mainDiv, targetWidth, targetHeight );
	};
};

Utils.prototype.attachResize = function( mainDiv, targetWidth, targetHeight ){
	Utils.prototype.attachRezise.call( this, mainDiv, targetWidth, targetHeight );
};

/**
 * Function to smoothly increase the size of
 * an element.
 * @param {jQuery} element The jQuery with the element to increase
 * @param {Integer} rate The amount of pixels that the element will be increased
 */
Utils.prototype.increase = function( element, rate ){
	var width =  parseInt( ( rate * element.width( ) ) / ( element.parent().width() + 10 ),10);
	element.animate({
		"width": "+="+ width+"%",
		//"height": "+=" + width + "%"
		"height": "auto"
	}, "slow");
};

/**
 * Function to smoothly decrease the size of
 * an element.
 * @param {jQuery} element The jQuery with the element to decrease
 * @param {Integer} rate The amount of pixels that the element will be decreased
 */
Utils.prototype.decrease = function( element, rate ){
	var width =  parseInt( ( rate * element.width( ) ) / ( element.parent().width() + 10 ),10);
	element.animate({
		"width": "-="+ width + "%" ,
		//"height": "-=" + width + "%"
		"height": "auto"
	}, "slow");
};

/**
 * Generates an animation to increase and decrease
 * the size of an image.
 * @param {jQuery} element the jQuery object associated with
 * the image
 * @param {Integer} rate The amount of pixels to increase/decrease
 * the image
 * @param {Integer} times [Optional, default=1] The number of 
 * times to generate the animation. Not compatible with "repeatRate" param
 * @param {Integer} offset [Optional] The elapsed time (in milis) 
 * before the function is called.
 * @param {Integer} repeatRate [Optional, default=Not implemented] The intervals 
 * (in milliseconds) on how often to execute the code. Note that if set, the
 * "times" param will be set to 0.
 */
Utils.prototype.pointAt = function( element, rate, times, offset, repeatRate ){
	var number;
	if( times == undefined ){
		times = 1;
	}
	else if( repeatRate != undefined ){
		times = 1;
	}

	
	if( offset == undefined ){
		offset = 0;
	}
	
	setTimeout( function( ){
		Utils.prototype._pointAtSimple.call( this, element, rate, times );
		if( repeatRate != undefined ){
			setInterval( function( ){
				Utils.prototype._pointAtSimple.call( this, element, rate, 1 );
			}, repeatRate );
		}
	}, offset );
};

/**
 * Generates an animation to increase and decrease
 * the size of an image.
 * @param {jQuery} element the jQuery object associated with
 * the image
 * @param {Integer} rate The amount of pixels to increase/decrease
 * the image
 * @param {Integer} repeatRate [Optional, default = 2000] . The intervals 
 * (in milliseconds) on how often to execute the code.
 * @return {Function( )} Function that if executed, will
 * stop the animation.
 */
Utils.prototype.pointAtListener = function( element, rate, repeatRate ){
	var stop = undefined;
	var number = undefined;
	
	if( repeatRate == undefined ){
		repeatRate = 2000;
	}
	
	
	number = setInterval( function( ){
		Utils.prototype._pointAtSimple.call( this, element, rate, 1 );
	}, repeatRate );
	
	stop = function( ){
		clearTimeout( number );
	};
	
	return stop;
};

/**
  * Generates a highlight to a given element, adding
  * a shadow to it edges.
  * @param {jQuery} element The element to give the animation
  * @param {Integer} duration The duration of the animation
  * @param {Integer} The number of times to repeat the animation
  */
Utils.prototype.highlight = function( element, duration, repeatNumber ){
	if( repeatNumber == undefined ){
		repeatNumber = 1;
	}
	if( duration == undefined ){
		duration = 1000;
	}
	
	duration = duration / 2;
	for(i = 0; i < repeatNumber; i++ ){
		element.animate( {
			boxShadow: '0px 0px 46px 6px #8E2F98'
		}, duration );
		
		element.animate( {
			boxShadow: '0px'
		}, duration );
	}//end for
};//end method

/**
  * Function to add draggable properties to a given
  * element.
  * @param {jQuery} element The element to add the draggable properties
  * @param {Function( element, ui )} onIncorrectDrop The function to call when the
  * user dropped the {element} on an incorrect zone. the ui parameter is only used to
  * compability with previous versions of this method, and should not be used on new methods.
  * @param {JSON} extraProperties [Optional] Properties to append to the
  * draggable method (see http://api.jqueryui.com/draggable/ for more info)
  * @param {Boolean} alwaysRevert [Optional] Decides whether the draggable should ignore the droppable 
  * areas and revert to its original position.
  */
Utils.prototype.addDraggableBehaviour = function( element, onIncorrectDrop, extraProperties, alwaysRevert ){
	var value = undefined;
	var json = {
		cursor: "move",
  		//revert: "invalid",
		revert: function( socket ){
			if( socket == false ){
				value = onIncorrectDrop( element, { helper: element } );
				if( value == undefined )
					return true;
				else{
					return value;
				}
			}
			if( alwaysRevert != undefined )
				return alwaysRevert;
			return false;
		},
  		opacity: 0.7,
  		scroll: false
	};//end var json
	if( extraProperties != undefined ){
		$.extend( json, extraProperties );
	}
	element.draggable( json );
};

/**
  * Function to add the droppable properties to a given element.
  * @param {jQuery} element The element to add the droppable propeties
  * @param {string} target The CSS selector to match, to know which elements dropped
  * are correct.
  * @param {Function(event, ui)} onCorrectDrop Function to be excecuted when the user drops
  * an droppable into the zone.
  * @param {JSON} [Optional] extraProperties Properties to append to the droppable
  * method (see http://api.jqueryui.com/droppable/ for more info)
  */
Utils.prototype.addDroppableBehaviour = function( element, target, onCorrectDrop, extraProperties ){
	var json = {
		accept: target,
  		drop: function( event, ui ){
			onCorrectDrop( event, ui );
  		}
	};
	
	if( extraProperties != undefined ){
		$.extend( json, extraProperties );
	}
	
	element.droppable( json );
};

/*
 * Funcion desarrollada por SIMIO
 */
Utils.prototype.blinkElement = function(idObject,Status){
	if(Status==true){
		$('#'+idObject).fadeTo("slow",1,function() {
			$('#'+idObject).fadeTo("slow",.3,Utils.prototype.blinkElement.call(this,idObject,Status));
  		});
	}
	else if(Status==false){
		$('#'+idObject).stop(true,true);
		$('#'+idObject).stop().fadeTo("fast",1);
	}
}

/*
 * Function developed by por SIA.
 * Handles the navigation of all pages (Moves to the next page).
 * @param {String} currentPage The id of the current page
 * @param {String} navBackId The ID of the "back" button.
 * @param {String} navForwardId The ID of the "forward" button.
 * @param {Function( )} initNextPage function to be called in order
 *                      to initialize the behaviour of the next page.
 */
Utils.prototype.clickForward = function( currentPage, navBackId, navForwardId, initNextPage ){
	Utils.prototype._moveNavigationBehaviour.call( this, true, currentPage, navBackId, navForwardId, initNextPage );
};

/*
 * Function developed by por SIA.
 * Handles the navigation of all pages (Moves to the previous page).
 * @param {String} currentPage The id of the current page
 * @param {String} navBackId The ID of the "back" button.
 * @param {String} navForwardId The ID of the "forward" button.
 * @param {Function( )} initNextPage function to be called in order
 *                      to initialize the behaviour of the next page.
 */
Utils.prototype.clickBack = function( currentPage, navBackId, navForwardId, initNextPage ){
	Utils.prototype._moveNavigationBehaviour.call( this, false, currentPage, navBackId, navForwardId, initNextPage );
};

//****************Private functions*********************************

Utils.prototype._moveNavigationBehaviour = function( moveForward, currentPage, navBackId, navForwardId, initNextPage ){
	var last = parseInt( currentPage.charAt( currentPage.length - 1 ) );
	if( moveForward ){
		last += 1;
	}
	else{
		last -= 1;
	}
	var next = currentPage.replace( /.$/, last.toString( ) );
	
	var $current = $( "#" + currentPage );
	var $next = $( "#" + next );
	
	$current.hide( );
	initNextPage( );
	if( $next.length ){
		$next.show( );
	}
	else{
		var n = currentPage.indexOf( "ACT" );
		var temp = currentPage.substring( 0, n );
		next = temp + "P0";
		$( "#" + next ).show( );
		$( "#" + navBackId ).hide( );
		$( "#" + navForwardId ).hide( );
	}
};

/**
 * @deprecated Do not call this function! Use pointAt( ) instead.
 * Generate calls to increase( ) and decrease( ) functions for "times"
 * @param {jQuery} element the jQuery element associated with the image
 * @param {Integer} rate The amount of pixels to increase/decrease
 * @param {Integer} times The number of times to increase and decrease 
 * the image
 */
Utils.prototype._pointAtSimple = function( element, rate, times ){
	rate = rate / 4;
	for( i = 0; i < times; i++ ){
		Utils.prototype.increase.call(this, element, rate );
		Utils.prototype.decrease.call(this, element, rate );
	}
};