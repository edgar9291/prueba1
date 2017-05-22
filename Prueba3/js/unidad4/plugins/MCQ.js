
   

function multipleChoiceQuestion(idResponses, idCheck, CorrectResponse, idFeedbackCorrect, idFeedbackIncorrect, functionFollowing, Flecha) {
    var responseSelected, nError = 0;
    $("#" + idFeedbackIncorrect).hide();
    $("#" + idFeedbackCorrect).hide();
	$("#" + idCheck).css("pointer-events","none");
    for (var i = 0; i < $("#" + idResponses).children().size(); i++) {
        $("#" + $("#" + idResponses).children().eq(i).attr("id")).click(function (e) {
			$("#" + idCheck).css("pointer-events","visible");
            for (var j = 0; j < $("#" + idResponses).children().size(); j++) {				
                $("#" + $("#" + idResponses).children().eq(j).attr("id")).removeClass("multipleChoiceQuestionShadow");
                if (e.target.id == ($("#" + idResponses).children().eq(j).attr("id"))) {
                    responseSelected = e.target.id;
                    $("#" + $("#" + idResponses).children().eq(j).attr("id")).addClass("multipleChoiceQuestionShadow");
                }
            }
        });
    }
    $("#" + idCheck).click(function () {
        if (responseSelected == ($("#" + idResponses).children().eq(CorrectResponse).attr("id"))) {
            $("#" + idFeedbackIncorrect).hide();
            $("#" + idFeedbackCorrect).show();
            $("#"+Flecha).show();

            nError++;
            $("#" + idFeedbackCorrect).click(function (e) {
                if((e.target.id == idFeedbackCorrect) && (nError!=0)) {
                    nError = 0;
                    $("#" + idFeedbackCorrect).hide();
                    setTimeout(functionFollowing, 0);
                }
            });
        } else {
            $("#" + idFeedbackCorrect).hide();
            $("#" + idFeedbackIncorrect).show();
            nError++;
            $("#" + idFeedbackIncorrect).on("click",function (e) {
                if(e.target.id == idFeedbackIncorrect) {
                    $("#" + idFeedbackIncorrect).hide();
                    if (nError == 2) {
                        nError = 0;
                        setTimeout(functionFollowing, 0);
                    }
                }
            });
        }
    });
}

//Funcion que se llamara al terminar la funcion multipleChoiceQuestion
function received() {
}

   
