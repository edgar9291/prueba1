/******************************************************
 *        EditTextQuestion.js    
 * Clase para generar interacciones con el editor 
 * web de texto (rich text) solicitado para los RDC.
 *          Version: 1.2
 *******************************************************/
 /** 
  * Este es el constructor basico. Recibe los siguientes parametros:
  * @param textareaId   ID del textarea sobre el cual se aplicaran los estilos,
  *                     u objeto en formato JSON (ver metodo "initJson").
  *                     Para mas informacion, vea la documentacion de "initJson"
  * @param saveButtonId ID del elemento sobre el cual se hara "click".
  *                     Notese que si el parametro "textareaId" es un JSON, 
  *                     "saveButtonId" es ignorado.
  *                     Para mas informacion, vea la documentacion de "initJson"
  */
 function EditTextQuestion( textareaId, saveButtonId ){
	if( EditTextQuestion.prototype.isObject.call( this, textareaId ) ){
		EditTextQuestion.prototype.initJson.call( this, textareaId );
	}
	else{
		EditTextQuestion.prototype.initParams.call( this, textareaId, saveButtonId );
	}
	
}

 /**
  * Metodo para recibir las configuraciones disponibles
  * cuando se emplea un JSON para inicializar la funcion.
  * Enseguida se enlistan todos los parametros disponibles.
  ******************************
  * @param textareaId {String}   [Requerido] El identificador del textarea en el cual
  *                                se pondra el editor de texto.
  * @param saveButtonId {String} [Requerido] El identificador del elemento sobre el cual
  *                                se añadirá el evento "click" para guardar el
  *                                texto ingresado.
  * @param height {String}       El alto deseado para el editor resultante. No se admiten porcentajes.
  * @param width {String}        El ancho del editor resultante. Se admiten porcentajes.
  * @param parentDiv {String}    El ID del div que es padre directo del textarea.
  * @param afterSubmit {Function( text )} Funcion que será ejecutada cuando la exportación se haya
  *                                realizado correctamente. En el parametro se envia el texto ingresado
  *                                por el usuario.
  * @param onError {Function( )} Función que será ejecutada cuando haya ocurrido algún error.
  * @param {boolean} writeDocx   [default=true] Define si el boton de "guardar" deberia comenzar con la exportacion
  *                              del texto, o simplemente llamar a la funcion "afterSubmit".
  */
EditTextQuestion.prototype.initJson = function( json ){
	this.textareaId = json.textareaId;
	this.saveButtonId = json.saveButtonId;
	this.height = json.height;
	this.width = json.width;
	this.parentDiv = json.parentDiv;
	this.afterSubmit = json.afterSubmit;
	this.onError = json.onError;
	this.writeDocx = json.writeDocx;
	
	EditTextQuestion.prototype.init.call( this );
};

EditTextQuestion.prototype.initParams = function( textareaId, saveButtonId ){
	this.textareaId = textareaId;
	this.saveButtonId = saveButtonId;
	EditTextQuestion.prototype.init.call( this );
};

EditTextQuestion.prototype.init = function( ){
	this.target = undefined;
	this.cktext = undefined;
	this.word = undefined;
	this.textArea = undefined;
	this.targetTextId = "editTextQuestion-text";
	this.aux = { DOM: {} };
	//******
	var context = this;
	var textSelector = undefined;
	
	if( this.height == undefined ){
		this.height = "";
	}
	if( this.width == undefined ){
		this.width = "100%";
	}
	
	if( this.parentDiv == undefined ){
		textSelector = "#" + this.textareaId;
	}
	else{
		textSelector = "#" + this.parentDiv + " > textarea";
		this.height = $( "#" + this.parentDiv ).css( "height" );
	}
	
	if( this.writeDocx == undefined ){
		this.writeDocx = true;
	}
	
	
	this.textArea = $( textSelector ).ckeditor( {
		"language": "es",
		"width": this.width,
		"height": this.height
	} );
	
	
	$( "#" + this.saveButtonId ).click( function( event ){
		EditTextQuestion.prototype.save.call( context );
	} );
};

EditTextQuestion.prototype.save = function( ){
	$( "body" ).append( "<div id='" + this.targetTextId + "'></div>" );
	this.cktext = this.textArea.val( );
	
	if( this.cktext == null || this.cktext == undefined || this.cktext.length == 0 ){
		console.warn( "No se puede generar el word, porque no se tiene nigun contenido" );
		if( this.onError != undefined ){
			this.onError( );
		}
	}
	
	if( this.writeDocx ){
		this.target = $( "#" + this.targetTextId )
			.hide( )
			.html( this.cktext );
	
		this.aux.DOM = document.getElementById( this.targetTextId );
		this.word = docx( this.aux );
		window.open( this.word.href( ), "_blank" );
		this.target.remove( );
	}
	
	
	if( this.afterSubmit != undefined ){
		this.afterSubmit( this.cktext );
	}
};

EditTextQuestion.prototype.reset = function( ){
	this.textArea.val( "" );
};

EditTextQuestion.prototype.isObject = function( testObject ){
	return EditTextQuestion.prototype.getType.call( this, testObject ) == "Object";
};

EditTextQuestion.prototype.getType = function( object ){
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
};