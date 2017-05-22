/* 
 SIMIO
 */
/*
 * 
 */
function sentenceDropdownQuestion(question, correctFeedback, wrongFeedback, comprueba,correct , maximumTries,nextFuncion){
    question='#'+question;
    wrongFeedback='#'+wrongFeedback;
    correctFeedback='#'+correctFeedback;
    comprueba='#'+comprueba;
    var bien=false;
    var tries=0;
     $(question).bind('click', function(event) {
        if(event.target.id==correct){
            bien=true;
        } else{
            bien=false;
        }
        if($(question).find("li:first").is(event.target)){
            $(question).find("p:first").text("Selecciona una opcion");
        }else {
            $(question).find("p:first").text($(event.target).text());
        }
    });
    $(comprueba).bind('click', function(event) {
        tries++;
        if(bien||(tries>=maximumTries)){
            $(correctFeedback).fadeIn('fast');
            eval( nextFuncion );
        } else{
            $(wrongFeedback).fadeIn('fast').delay(5000).fadeOut('slow');
        }
    });
    }
