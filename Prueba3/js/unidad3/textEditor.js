$( document ).ready( function( ){
			//Instanciamos a la clase EditTextQuestion.
			//Se hace de esta forma para despues poder llamar
			//al metodo reset( ).
			
			//FORMA 1: con un JSON
			var textEditor = new EditTextQuestion( {
				parentDiv: "textDiv",
				saveButtonId: "save",
				//afterSubmit es una funcion que es ejecutada
				//despues de haber generado el word.
				afterSubmit: function( text ){
					alert( "Se ha exportado el archivo" );
					setTimeout( function( ){
						//para ejemplificar su uso, despues de un segundo
						//de generado el word, llamamos a la funcion
						//reset( )
						//textEditor.reset( );
						alert( "Funcion 'reset()' llamada" );
					}, 1000 );
				},
				//onError es una funcion que es ejecutada cuando sucede
				//un error al momento de generar el word.
				onError: function( ){
					console.debug( "oh, no! Me han pillado" );
				}
			} );
			
			//FORMA 2: con dos parametros.
			//Esta forma es mas simple, pero restringe la funcionalidad aplicable.
			new EditTextQuestion( "editor2", "save2" );
			
			//Notese que en ambas formas se puede llamar a la funcion reset( ),
			//solo debemos asignar el resultado de "new EditTextQuestion( )" a una variable (var).
			//Para mas informacion, consulte el archivo editTextQuestion.js
		} );