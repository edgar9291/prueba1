/**
 * Funcion para manejar las interacciones con las preguntas de
 * arrastrar y soltar.
 * Notese que cuando la funcion termina su funcionamiento (es decir, cuando 
 * "onPassActivity" es llamado), los componentes draggables y droppables son "destruidos",
 * por lo que llamadas posteriores a este metodo (por ejemplo, en el "reset" de la pagina) 
 * funcionaran sin ningun problema.
 *
 * @param {String}  droppableDiv Nombre del div en donde se soltaran las respuestas
 * @param {String}  draggablesDiv Nombre del div que contiene los elementos que se
 *                  arrastraran y soltaran.
 * @param {String}  correctFeedback Nombre del div que contiene la retroalimentacion
 *                  en caso de que el usuario haya elegido la respuesta correcta.
 * @param {String}  wrongFeedback Nombre del div que contiene la retroalimentacion
 *                  en caso de que el usuario haya elegido una respuesta incorrecta.
 * @param {Integer} correctPosition Indice del div hijo de draggablesDiv en el cual se situa
 *                  la respuesta correcta. Dicho indice comienza en 0(cero).
 * @param {Function( booolean isCorrect )} onPassActivity Funcion que es llamada cuando
 *                  la actividad se ha completado. El parametro enviado a la funcion (isCorrect)
 *                  es un boolean que indica si el usuario respondio correctamente (true), o el usuario
 *                  supero el limite de intentos (false).
 * @param {Function( )} onEnter [Opcional] Es llamada cuando alguno de los elementos draggables pasa por encima del cuadro droppableDiv
 * @param {Function( )} onLeave [Opcional] Es llamada cuando alguno de los elementos dragabbles sale del cuadro droppableDiv
 * @param {Boolean} areaSensitive [Opcional, default=true] Si es "true", se generara el evento de "incorrecto" solamente cuando el usuario
 *                  deje caer un draggable incorrecto en el area del droppableDiv. en caso contrario, el evento de "incorrecto" se
 *                  generara siempre que un draggable se suelte en cualquier area fuera del droppableDiv, y cuando un draggable incorrecto
 *                  se suelte dentro del droppableDiv
 * @param {Integer} maximumTries [Opcional] Numero maximo de intentos que el usuario tiene para jugar antes de que se llame al evento "onPassActivity", y se
 *                  deshabiliten los componentes draggables y droppables.
 * @require         jQuery y jQuery UI.
 * @version         1.0
 *
 */
function boxDragQuestion( droppableDiv, draggablesDiv, correctFeedback, wrongFeedback, correctPosition, onPassActivity, onEnter, onLeave, areaSensitive, maximumTries ){
	new BoxDragQuestion( droppableDiv, draggablesDiv, correctFeedback, wrongFeedback, correctPosition, onPassActivity, onEnter, onLeave, areaSensitive, maximumTries );
}

/**
 * Todos los parametros mencionados en la funcion anterior, mas....
 * @param {Boolean} waitCorrectButton Define si el draggable, una vez
 *                  soltado en la posicion correcta, deberia permanecer
 *                  ahi hasta que el usuario presione el boton de "Aceptar".
 * @param {String}  checkButtonId Identificador del boton que se usara para
 *                  verificar las respuestas del droppable (ignorado si waitCorrectButton = false).
 * @param {String}  resetButtonId Este boton sera usado para reestablecer los valores
 *                  que se hayan soltado en el droppable (ignorado si waitCorrectButton = false).
 */
BoxDragQuestion.prototype.initJson = function( json ){
	this.onEnter = json.onEnter;
	this.onLeave = json.onLeave;
	this.maximumTries = json.maximumTries;
	this.areaSensitive = json.areaSensitive;
	this.$droppable = $( "#" + json.droppableDiv );
	this.$draggables = $( "#" + json.draggablesDiv ).find( "div" );
	this.correctFeedback = json.correctFeedback;
	this.wrongFeedback = json.wrongFeedback;
	this.correctPosition = json.correctPosition;
	this.onPassActivity = json.onPassActivity;
	this.waitCorrectButton = json.waitCorrectButton;
	this.$checkButton = $( "#" + json.checkButtonId );
	this.$resetButton = $( "#" + json.resetButtonId );
}

function BoxDragQuestion( droppableDiv, draggablesDiv, correctFeedback, wrongFeedback, correctPosition, onPassActivity, onEnter, onLeave, areaSensitive, maximumTries ) {
	if( BoxDragQuestion.prototype.isObject.call( this, droppableDiv ) ){
		BoxDragQuestion.prototype.initJson.call( this, droppableDiv );
	}
	else{
		//Las variables con un signo de pesos ($) son variables
		//de tipo jQuery
		this.$droppable = $( "#" + droppableDiv );
		this.$draggables = $( "#" + draggablesDiv ).find( "div" );
		this.correctFeedback = correctFeedback;
		this.wrongFeedback = wrongFeedback;
		this.correctPosition = correctPosition;
		this.onPassActivity = onPassActivity;
		this.onEnter = onEnter;
		this.onLeave = onLeave;
		this.maximumTries = maximumTries;
		this.areaSensitive = areaSensitive;
	}
	if( this.areaSensitive == undefined ){
		this.areaSensitive = true;
	}
	
	if( this.maximumTries == undefined ){
		this.maximumTries = 2;
	}
	
	
	/*Quiza nunca se necesite hacer uso del div "wrongFeedback" 
	 *(Considerese el caso en el que el usuario acerto en el primer intento),
	 *Por lo que solo se inicializa si se necesitan*/
	this.$wrongFeedback = undefined;
	//Variable de uso interno para saber el numero de intentos del usuario.
	this.wrongCount = 0;
	/* Variable de uso interno.
	 * Para identificar todos los elementos que pueden ser soltados en el droppable
	 * se hace uso de este nombre de clase. Esto se hace para que los eventos de 
	 * "onEnter" y "onLeave" funcionen correctamente.
	 */
	this.className = "box-drag-question-accept";
	//Clase que se le pondra al div que contenga la respuesta correcta.
	this.correctClass = "box-drag-question-correct";
	//Variable para saber cual es el elemento que se esta arrastrando en cualquier instante.
	//Si es "undefined", indica que no se esta arrastrando nada
	this.draggingElement = undefined;
	//Variable para saber si el elemento que esta siendo arrastrado es el elemento correcto
	this.isCorrect = false;
	
	BoxDragQuestion.prototype.init.call( this );
}//class declaration



BoxDragQuestion.prototype.init = function( ){
	//Para siempre guardar una referencia al contexto de la clase BoxDragQuestion
	var root = this;
	//Agregamos la clase de "respuesta correcta" a la respuesta correcta.
	$( this.$draggables[this.correctPosition] ).addClass( this.correctClass );
	//Agregamos la otra clase clases a todas las respuestas
	this.$draggables.addClass( this.className );
	//Agregar comportamiento de draggable
	BoxDragQuestion.prototype.addDraggableBehaviour.call( this, this.$draggables, function( ){
		if( !root.areaSensitive ){
			BoxDragQuestion.prototype.handleWrong.call( root );
		}
	}, undefined, 
	function( stuff ){
		if( root.draggingElement.hasClass( root.correctClass ) ){
			root.isCorrect = true;				
			return false;
		}
		console.debug( root.waitCorrectButton );
		if( root.waitCorrectButton ){
			return false;
		}
		return true;
	});
	
	
	BoxDragQuestion.prototype.addDroppableBehaviour.call(this, this.$droppable, "." + this.className, function( event, ui ){
		setTimeout( function( ){ 
			if( root.onLeave != undefined ){
				root.onLeave( );
			}
			if( !root.isCorrect ){
				if( root.waitCorrectButton ){
					root.$draggables.draggable( "disable" );
					if( root.$wrongFeedback != undefined ){
						root.$wrongFeedback.hide( );
					}
				}
				else{
					BoxDragQuestion.prototype.handleWrong.call( root );
				}
				return;
			}
			
			if( root.$wrongFeedback != undefined ){
				root.$wrongFeedback.hide( );
			}
			
			if( root.waitCorrectButton ){
				root.$draggables.draggable( "disable" );
				return;
			}
			
			$( "#" + root.correctFeedback ).show( );
			BoxDragQuestion.prototype.destroyAll.call( root );
			root.onPassActivity( true );
		}, 10 );
	},{
		over: function( ){
			if( root.onEnter != undefined ){
				root.onEnter( );
			}
		},
		out: function( ){
			if( root.onLeave != undefined ){
				root.onLeave( );
			}
		},
		activate( event, ui ){
			root.draggingElement = ui.helper;
		},
		deactivate( event, ui ){
			setTimeout( function( ){
				root.draggingElement = undefined;
			}, 10 );
		}
	} );
	
	//check button listener
	if( this.$checkButton != undefined ){
		this.$checkButton.click( function( ){
			if( root.isCorrect ){
				$( "#" + root.correctFeedback ).show( );
				BoxDragQuestion.prototype.destroyAll.call( root );
				root.onPassActivity( true );
			}
			else{
				BoxDragQuestion.prototype.handleWrong.call( root );
				BoxDragQuestion.prototype.resetDraggables.call( root );
			}
		} );
	}//end verify listener
	
	//reset button listener
	if( this.$resetButton != undefined ){
		this.$resetButton.click( function( ){
			BoxDragQuestion.prototype.resetDraggables.call( root );
		} );
	}
	
}//end method

BoxDragQuestion.prototype.resetDraggables = function( ){
	this.$draggables.draggable( "enable" );
	this.$draggables.css( {
		width: "",
		height: "",
		right: "",
		bottom: "",
		left: "",
		top: ""
	} );
}

BoxDragQuestion.prototype.destroyAll = function ( ){
	this.$droppable.droppable( "destroy" );
	this.$draggables.draggable( "destroy" );
	this.$draggables.removeClass( this.className );
	this.$draggables.removeClass( this.correctClass );
};

BoxDragQuestion.prototype.handleWrong = function( ){
	this.wrongCount += 1;
	
	if( this.$wrongFeedback == undefined ){
		this.$wrongFeedback = $( "#" + this.wrongFeedback );
	}
	this.$wrongFeedback.show( );
	
	if( this.wrongCount >= this.maximumTries ){
		//BoxDragQuestion.prototype.destroyAll.call( this );
		this.onPassActivity( false );
		return;
	}
};



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
BoxDragQuestion.prototype.addDraggableBehaviour = function( element, onIncorrectDrop, extraProperties, alwaysRevert ){
	var value = undefined;
	var json = {
		cursor: "move",
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
				return alwaysRevert( socket );
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
BoxDragQuestion.prototype.addDroppableBehaviour = function( element, target, onCorrectDrop, extraProperties ){
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

BoxDragQuestion.prototype.isObject = function( testObject ){
	return BoxDragQuestion.prototype.getType.call( this, testObject ) == "Object";
}

BoxDragQuestion.prototype.getType = function( object ){
	var objectConstructor = {}.constructor;
	if (object === null) {
        return "null";
    }
    else if (object === undefined) {
        return "undefined";
    }
	else if (object.constructor === objectConstructor) {
        return "Object";
    }
    else {
        return "unknown";
    }
}
