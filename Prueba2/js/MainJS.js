var exerciseDone = new Array(10);
var informationView = new Array(5);
var validateAskMediterraneo1 = new Array(2);
var errorResponse;
var correctResponse;
var exerciseSelected;
var exerciseSelected1;

$(document).ready(function(){
    errorResponse = document.createElement('audio');
    errorResponse.setAttribute('src', 'sound/Error.mp3');
    correctResponse = document.createElement('audio');
    correctResponse.setAttribute('src', 'sound/Correct.mp3');
    informationView[0]=0;
    informationView[1]=0;
    informationView[2]=0;
    informationView[3]=0;
    informationView[4]=0;

    $("#divMainIndex").append("<div id=\"idTitle\" class=\"h1Main\"><br><br>Los nuevos principios <br> del mundo occidental</div>");
    $("#divMainIndex").append("<div id=\"idClickPlay\" class=\"ClickPlay click-effect\" onclick=\"goDescription()\"></div>");

    //goIndexIntroductionExercise(1);
    //goExercise();
    //goInformation(1);
    //goMap();
    /*restartExercise();
    exerciseSelected=1;
    goIndexIntroductionExercise(5);*/
    //goExerciseStudent(6);
    //goIndexEndExercise();
    //goIndexExercise();

});

function goFollowingExerciseStudent(){
    if (validateEndExercise()=="false") {
        var followingExercise;
        for (var i = 1; i <= 7; i++) {
            followingExercise = exerciseSelected + i;
            if (followingExercise > 6) {
                followingExercise = exerciseSelected + 1 - "6";
            }
            if ((exerciseDone[followingExercise - "1"][0] == "0") || (exerciseDone[followingExercise - "1"][1] == "0") || (exerciseDone[followingExercise - "1"][2] == "0") || (exerciseDone[followingExercise - "1"][3] == "0")) {
                goExercise()
                goIntroductionExercise(followingExercise);
                break;
            }
        }
    }else{
        goExercise();
    }
}

function goDescription(){
    $("#idDivEnd").css("visibility","hidden");
    $("#divMap").css("visibility","hidden");
    $("#idTitle").remove();
    $("#idClickPlay").remove();
    $("#divMainIndex").append("<p id=\"idDescriptionTitle\" class=\"DescriptionTitle\" >¿Qué procesos externos habrán influidos en <br> que las colonias americanas se independizaran de <br> la Corona española? ¿Cuáles habrán sido las <br> experiencias revolucionarias que los criollos <br> americanos tomaron como ejemplo? <br> ¿Qué ideales los habrán inspirado?<br></p>");
    $("#divMainIndex").append("<p id=\"idDescription\" class=\"Description\" >Realizar este recurso para responder estas preguntas.</p>");
    $("#divMainIndex").append("<p id=\"idClickFollowingD\" class=\"ClickFollowingI click-effect\" onclick=\"goMap()\"></p>");
}

function goMap(){
    restartExercise();
    $("#idDivEnd").css("visibility","hidden");
    $("#idDivExerciseStudent").css("visibility","hidden");
    $("#idDescriptionTitle").remove();
    $("#idDescription").remove();
    $("#idClickFollowingD").remove();
    $(".force-overflow").empty();
    goIndexMap(); //$("#divMainIndex").load(indexMap);
    return false;
}

function validateEndExercise(){
    var cont="";
    for (var j=0; j<6; j++){
        if((exerciseDone[j][0]=="1") && (exerciseDone[j][1]=="1") && (exerciseDone[j][2]=="1") && (exerciseDone[j][3]=="1")){
            cont=cont+"1";
        }
    }
    if(cont=="111111"){
        return "true";
    }else{
        return "false";
    }
}

function restartExercise(){
    exerciseDone[0] = new Array(0,0,0,0);
    exerciseDone[1] = new Array(0,0,0,0);
    exerciseDone[2] = new Array(0,0,0,0);
    exerciseDone[3] = new Array(0,0,0,0);
    exerciseDone[4] = new Array(0,0,0,0);
    exerciseDone[5] = new Array(0,0,0,0);
    exerciseDone[6] = new Array(0,0,0,0);
    exerciseDone[7] = new Array(0,0,0,0);
    exerciseDone[8] = new Array(0,0,0,0);
    exerciseDone[9] = new Array(0,0,0,0);
    exerciseSelected="";
    exerciseSelected1="";
    validateAskMediterraneo1[0]="";
    validateAskMediterraneo1[1]="";
    $("#idDER1").css( 'pointer-events', 'visible' );
    $("#idDER1").css( 'opacity', '' );
    $("#idDER2").css( 'pointer-events', 'visible' );
    $("#idDER2").css( 'opacity', '' );
    $("#idDEG1").css( 'pointer-events', 'visible' );
    $("#idDEG1").css( 'opacity', '' );
    $("#idDEG2").css( 'pointer-events', 'visible' );
    $("#idDEG2").css( 'opacity', '' );
    $("#idDEM1").css( 'pointer-events', 'visible' );
    $("#idDEM1").css( 'opacity', '' );
    $("#idDEM2").css( 'pointer-events', 'visible' );
    $("#idDEM2").css( 'opacity', '' );
    if(informationView[0]==0 && informationView[1]==0 && informationView[2]==0 && informationView[3]==0 && informationView[4]==0){
        $(".ClickFollowing").css( 'pointer-events', 'visible' );
        $(".ClickFollowing").css( 'opacity', '1' );
    }
}


function goInformation(idInformation) {
    informationView[idInformation-1]=1;
    goIndexInormation(idInformation);
}

function closeInformation(){
    $("#idInformationImage").empty();
    $("#divTransparent").remove();
    $("#idInformationTitle").empty();
    $("#idInformation").empty();
    $("#idInformationImage").empty();
    $("#idDivInformation").css("visibility","hidden");
    goMap();
}

function goExercise(){

    $("#divMap").css("visibility","hidden");
    $("#idDivExerciseStudent").css("visibility","hidden");
    $(".force-overflow").empty();
    if (validateEndExercise()=="false"){
        goIndexExercise(); //$("#divMainIndex").load("indexExercise.html");
        disableExercises();
    }else{
        goIndexEndExercise();
    }

}

function disableExercises(){
    for (var j=0; j<6; j++){
        if((exerciseDone[j][0]=="1") && (exerciseDone[j][1]=="1") && (exerciseDone[j][2]=="1") && (exerciseDone[j][3]=="1")){
            if(j==0){
                $("#idDER1").css( 'pointer-events', 'none' );
                $("#idDER1").css("opacity",.4);
            }else if(j==1){
                $("#idDER2").css( 'pointer-events', 'none' );
                $("#idDER2").css("opacity",.4);
            }else if(j==2){
                $("#idDEG1").css( 'pointer-events', 'none' );
                $("#idDEG1").css("opacity",.4);
            }else if(j==3){
                $("#idDEG2").css( 'pointer-events', 'none' );
                $("#idDEG2").css("opacity",.4);
            }else if(j==4){
                $("#idDEM1").css( 'pointer-events', 'none' );
                $("#idDEM1").css("opacity",.4);
            }else if(j==5){
                $("#idDEM2").css( 'pointer-events', 'none' );
                $("#idDEM2").css("opacity",.4);
            }
        }
    }
}

function goIntroductionExercise(idExercice){
    $("#idDivExercise").css("visibility","hidden");
    exerciseSelected = idExercice;
    goIndexIntroductionExercise(idExercice);
}

function goExerciseStudent(idAsk){
    var OptionCorrect="ClickResponse click-effect4";
    var OptionIncorrect="ClickResponse click-effect4";

    exerciseSelected1 = idAsk;
    $("#divTransparentExercise1").css("visibility","visible");
    $("#idDivInformationStudentAsk").css("visibility","visible");
    if(idAsk=="1"){
        $("#idDivInformationStudentAsk").css("top",".3%");
        $("#idDivInformationStudentAsk").css("left","23%");
        $("#idDivInformationStudentAsk").css("width","60%");
        $("#idDivInformationStudentAsk").css("height","62%");
    }else{
        $("#idDivInformationStudentAsk").css("top","3%");
        $("#idDivInformationStudentAsk").css("left","14%");
        $("#idDivInformationStudentAsk").css("width","75%");
        $("#idDivInformationStudentAsk").css("height","55%");
    }

    if ((exerciseDone[exerciseSelected-"1"][idAsk-"1"]=="1") && idAsk>1) {
        actualizeResponseCorrectScreen(idAsk-"1");
    }else{
        if(idAsk=="1"){
            $("#idClickSpaceExercise").css("zIndex",4);
            $("#idClickSpaceExercise").css( 'pointer-events', 'none' );
            $("#idInformationStudentAsk1").css("visibility","visible");
            $("#idClickSpaceExercise").css("top","54%");
            $("#idClickSpaceExercise").css("left","9%");
            $("#idClickSpaceExercise").css("width","24.3%");
            $("#idClickSpaceExercise").css("height","17.6%");
            if (exerciseSelected=="1") {
                $("#ider11").css("pointer-events","visible");
                $("#ider12").css( 'opacity', '0' );
                $("#ider12").css( 'pointer-events', 'visible' );
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpaceSelected.png)");
                $("#idDivExerciseSpaceMap").css("background-image", "url(css/images/ImageSantillana/MapRoma1.jpg)");
                $("#idDivExerciseRoma1").css("visibility","visible");
                $("#idInformationStudentAsk1").html("Marca la ciudad o zona territorial a la cual se refiere la fuente.");
            }else if (exerciseSelected=="2") {
                $("#ider21").css("pointer-events","visible");
                $("#ider22").css("pointer-events","visible");
                $("#ider22").css("width","2.2%");
                $("#ider22").css("height","3.3%");
                $("#ider23").css("pointer-events","visible");
                $("#ider24").css("pointer-events","visible");
                $("#ider25").css("pointer-events","visible");
                $("#ider26").css("pointer-events","visible");
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpaceSelected.png)");
                $("#idDivExerciseSpaceMap").css("background-image", "url(css/images/ImageSantillana/MapRoma2.jpg)");
                $("#idDivExerciseRoma2").css("visibility","visible");
                $("#idInformationStudentAsk1").html("Marca en este mapa actual la ciudad o zona territorial donde se originó la fuente.");
            }else if (exerciseSelected=="3") {
                $("#ideg11").css("pointer-events","visible");
                $("#ideg12").css("pointer-events","visible");
                $("#ideg12").css("width","2%");
                $("#ideg12").css("height","2%");
                $("#ideg13").css("pointer-events","visible");
                $("#ideg14").css("pointer-events","visible");
                $("#ideg15").css("pointer-events","visible");
                $("#ideg16").css("pointer-events","visible");
                $("#ideg17").css("pointer-events","visible");
                $("#ideg18").css("pointer-events","visible");
                $("#ideg19").css("pointer-events","visible");
                $("#ideg110").css("pointer-events","visible");
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpaceSelected.png)");
                $("#idDivExerciseSpaceMap").css("background-image", "url(css/images/ImageSantillana/MapMediterraneo2.jpg)");
                $("#idDivExerciseGrecia1").css("visibility","visible");
                $("#idInformationStudentAsk1").html("Marca la ciudad del padre del narrador en el texto.");
            }else if (exerciseSelected=="4") {
                $("#ideg21").css("pointer-events","visible");
                $("#ideg22").css( 'opacity', '0' );
                $("#ideg22").css( 'pointer-events', 'visible' );
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpaceSelected.png)");
                $("#idDivExerciseSpaceMap").css("background-image", "url(css/images/ImageSantillana/MapGrecia1.jpg)");
                $("#idDivExerciseGrecia2").css("visibility","visible");
                $("#idInformationStudentAsk1").html("¿Dónde habitaba el autor de la fuente cuando la creó?");
            }else if (exerciseSelected=="5") {
                $("#idem11").css( 'pointer-events', 'visible' );
                $("#idem11").css("width","2.2%");
                $("#idem11").css("height","3.3%");
                $("#idem12").css( 'pointer-events', 'visible' );
                $("#idem12").css("width","2.2%");
                $("#idem12").css("height","3.3%");
                $("#idem13").css( 'pointer-events', 'visible' );
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpaceSelected.png)");
                $("#idDivExerciseSpaceMap").css("background-image", "url(css/images/ImageSantillana/MapMediterraneo1.jpg)");
                $("#idDivExerciseMediterraneo1").css("visibility","visible");
                $("#idInformationStudentAsk1").html("Indica el origen geográfico de los dos pueblos mencionados en la fuente.");
            }else if (exerciseSelected=="6") {
                $("#idem21").css("pointer-events","visible");
                $("#idem22").css("pointer-events","visible");
                $("#idem23").css("pointer-events","visible");
                $("#idem24").css("pointer-events","visible");
                $("#idem24").css("width","2%");
                $("#idem24").css("height","2%");
                $("#idem25").css("pointer-events","visible");
                $("#idem26").css("pointer-events","visible");
                $("#idem27").css("pointer-events","visible");
                $("#idem28").css("pointer-events","visible");
                $("#idem29").css("pointer-events","visible");
                $("#idem210").css("pointer-events","visible");
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpaceSelected.png)");
                $("#idDivExerciseSpaceMap").css("background-image", "url(css/images/ImageSantillana/MapMediterraneo2.jpg)");
                $("#idDivExerciseMediterraneo2").css("visibility","visible");
                $("#idInformationStudentAsk1").html("Indica la zona en que se habría encontrado la Esfinge de la mitología griega.");
            }
            $("#idDivExerciseSpaceMap").css("visibility","visible");
            if ((exerciseDone[exerciseSelected-"1"][idAsk-"1"]=="1") && idAsk==1) {
                actualizeResponseCorrectScreen(idAsk-"1");
            }
        }else if(idAsk=="2"){
            $("#idClickTimeExercise").css("zIndex",4);
            $("#idClickTimeExercise").css( 'pointer-events', 'none' );
            $("#idClickTimeExercise").css("top","52.3%");
            $("#idClickTimeExercise").css("left","22%");
            $("#idClickTimeExercise").css("width","20.7%");
            $("#idClickTimeExercise").css("height","18.3%");
            if (exerciseSelected=="1") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").html("¿En qué edad histórica fue escrita esta fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Edad Media.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) Edad Antigua.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c)	Edad Moderna.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	Edad Contemporánea. </p>");
            }else if (exerciseSelected=="2") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿Entre qué años se creó la fuente anterior?<br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">a)	1750 – 1800</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)    1700 – 1750</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c)    1800 – 1850</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionCorrect+"\">d)	1650 – 1700 </p>");
            }else if (exerciseSelected=="3") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿En qué siglo fue escrita la fuente anterior?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo XX</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">b) Siglo XIX</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) Siglo XVII</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d) Siglo XVIII</p>");
            }else if (exerciseSelected=="4") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿Entre qué años fue elaborada esta fuente?<br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">a)	1800 – 1850</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	1750 – 1800</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c)	1700 – 1750</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	1650 – 1700 </p>");
            }else if (exerciseSelected=="5") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿En qué siglo fue escrita la fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a)	Siglo XV.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	Siglo XVI.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c)	Siglo XVII.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	Siglo XVIII.</p>");
            }else if (exerciseSelected=="6") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿En qué siglo se escribió la fuente anterior?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a)	Siglo XX.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	Siglo XIX.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c)	Siglo XVII.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">d)	Siglo XVIII.</p>");
            }else if (exerciseSelected=="7") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿En qué año fue realizada la pintura?<br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">a)	1793.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	1798.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c)	1789.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	1790.</p>");
            }else if (exerciseSelected=="8") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿En qué siglo fue elaborada la fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo XX.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) Siglo XIX.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) Siglo XVII.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">d) Siglo XVIII.</p>");
            }else if (exerciseSelected=="9") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿En qué siglo fue elaborada la fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a)	Siglo XVIII.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	Siglo XVII.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c)	Siglo XIX.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	Siglo XX.</p>");
            }else if (exerciseSelected=="10") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿En qué año se escribió la fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a)	1810</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	1815</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c)	1818</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	1823</p>");
            }
        }else if(idAsk=="3"){
            $("#idClickUnderstending1").css("zIndex",4);
            $("#idClickUnderstending1").css( 'pointer-events', 'none' );
            $("#idClickUnderstending1").css("top","48.6%");
            $("#idClickUnderstending1").css("left","39.7%");
            $("#idClickUnderstending1").css("width","27.8%");
            $("#idClickUnderstending1").css("height","22.5%");
            if (exerciseSelected=="1") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué aspecto de la independencia de los Estados Unidos nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a)	Política. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b)	Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c)	Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d)	Economía.</p>");
            }else if (exerciseSelected=="2") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué aspecto de la independencia de los Estados Unidos nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a)	Política. </p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">b)	Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c)	Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d)	Economía.</p>");
            }else if (exerciseSelected=="3") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué aspecto de las independencias hispanoamericanas nos permite conocer la fuente? <br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a) Politica. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía.</p>");
            }else if (exerciseSelected=="4") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué aspecto de las independencias hispanoamericanas nos permite conocer esta fuente? <br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Politica. </p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">b) Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía.</p>");
            }else if (exerciseSelected=="5") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué aspecto de la Ilustración nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a) Politica. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía.</p>");
            }else if (exerciseSelected=="6") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué aspecto de la Ilustración nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a) Politica. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía.</p>");
            }else if (exerciseSelected=="7") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué concepto principal refleja está obra?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Poder. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Alianza.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Victoria.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">d) Violencia.</p>");
            }else if (exerciseSelected=="8") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué principio fundamental está describiendo el autor?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Derecho a voto. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Protección estatal.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Igualdad ante la ley.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">d) Libertad de expresión.</p>");
            }else if (exerciseSelected=="9") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué aspectos de la independencia de Chile nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a)	Social y cultural. </p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">b)	Cultural y político.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c)	Político y religioso.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d)	Geográfico y cultural.</p>");
            }else if (exerciseSelected=="10") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué aspecto de la independencia de Chile nos permiten conocer esta fuente?<br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a) Politica. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía.</p>");
            }
        }else if(idAsk=="4"){
            $("#idClickUnderstending2").css("zIndex",4);
            $("#idClickUnderstending2").css( 'pointer-events', 'none' );
            $("#idClickUnderstending2").css("top","49.3%");
            $("#idClickUnderstending2").css("left","55.5%");
            $("#idClickUnderstending2").css("width","37.6%");
            $("#idClickUnderstending2").css("height","22.9%");
            if (exerciseSelected=="1") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("A partir de la fuente, ¿qué razón justifica la independencia de los Estados Unidos?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Que los colonos norteamericanos vivían en un permanente estado de infelicidad.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	Que la monarquía inglesa habría atentado contra los derechos inalienables de sus gobernados.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Que la política inglesa daba demasiadas libertades al pueblo norteamericano provocando caos.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Que los súbditos de su majestad británica en Norteamérica habrían sido agredidos por el ejército real. </p>");
            }else if (exerciseSelected=="2") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("A partir de la fuente, ¿quiénes serían los tiranos representados?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Los grandes empresarios.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	Los monarcas absolutistas.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Los soldados revolucionarios.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Los ciudadanos democráticos.</p>");
            }else if (exerciseSelected=="3") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("Según Simón Bolívar, ¿qué elementos llevan a la felicidad del hombre?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Justicia, libertad y gloria.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b)	Riqueza libertad y gloria.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">c)	Justicia, libertad e igualdad.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Igualdad, libertad y fraternidad.</p>");
            }else if (exerciseSelected=="4") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("¿Interpretando la fuente, ¿qué representa el Inca en la fuente?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	La oposición a la religión católica en favor de las creencias indígenas.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b) La ayuda brindada por las comunidades indígenas al ejército realista.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	El primer grupo de santos indígenas aprobados por la iglesia católica.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">d)	Una especie de justicia histórica a favor de las víctimas de la tiranía española.</p>");
            }else if (exerciseSelected=="5") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("A partir de la fuente, ¿qué elemento se menciona en contra del “príncipe absoluto”?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Su falta de manejo político.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	La concentración de poderes.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Su forma de acceder al poder.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	El carácter hereditario del cargo.</p>");
            }else if (exerciseSelected=="6") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué condición establece el pacto social entre los ciudadanos?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Libertad.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	Igualdad.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Soberanía.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Diferencia.</p>");
            }else if (exerciseSelected=="7") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué grupos sociales se representan en la imagen?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Militares.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	Militares y civiles.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Militares y mujeres.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Hombres y mujeres.</p>");
            }else if (exerciseSelected=="8") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué grupos sociales se representan en la imagen?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Tomar el poder.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b)	Abusar de los pobres.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">c)	Silenciar a los descontentos.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Apoyar la monarquía absoluta.</p>");
            }else if (exerciseSelected=="9") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("A partir de la fuente, ¿a qué se refiere el lema con “las tinieblas<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Al pasado indígena de Chile.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	Al período colonial de Chile.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	A las batallas por la independencia.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Al pasado rural de la república de Chile.</p>");
            }else if (exerciseSelected=="10") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("A partir de la fuente es posible inferir que:<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	En 1810 los chilenos lograron independizarse.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	La idea de independizarse creció gradualmente.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Los chilenos de 1818 eran leales al rey de España. </p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	El desengaño político bajo los deseos de independencia.</p>");
            }
        }
    }
}//<p onclick=\"validateResponse(1,0)\" class=\"ClickResponse click-effect4\">a) </p><p onclick=\"validateResponse(1,0)\" class=\"ClickResponse click-effect4\">b) </p><p onclick=\"validateResponse(1,0)\" class=\"ClickResponse click-effect4\">c) </p><p onclick=\"validateResponse(1,1)\" class=\"ClickResponse click-effect4\">d) </p>

function validateResponse(idResponse, correct){
    if((correct=="2" || correct=="3") && exerciseSelected=="5" && exerciseSelected1=="1"){
        if(validateAskMediterraneo1[0]!="1" && correct=="2"){
            correctResponse.load();
            correctResponse.play();
            validateAskMediterraneo1[correct-"2"]="1";
        }else if(validateAskMediterraneo1[1]!="1" && correct=="3"){
            correctResponse.load();
            correctResponse.play();
            validateAskMediterraneo1[correct-"2"]="1";
        }
        if(validateAskMediterraneo1[0]=="1" && validateAskMediterraneo1[1]=="1"){
            exerciseDone[exerciseSelected-"1"][idResponse]=1;
            actualizeResponseCorrectScreen(idResponse);
        }
    }else if(correct=="1"){
        correctResponse.load();
        correctResponse.play();
        exerciseDone[exerciseSelected-"1"][idResponse]=1;
        actualizeResponseCorrectScreen(idResponse);
    }else{
        errorResponse.load();
        errorResponse.play();
    }
}

function actualizeResponseCorrectScreen(idAsk){
    var OptionCorrect="ClickResponse click-effect4 optionLockedCorrect";
    var OptionIncorrect="ClickResponse click-effect4 optionLockedIncorrect";
    $("#idInformationStudentAsk").empty();
    if(idAsk=="0"){
        if (exerciseSelected=="1") {
            $("#ider11").css("pointer-events","none");
            $("#ider12").css( 'opacity', '.3' );
            $("#ider12").css( 'pointer-events', 'none' );
        }else if (exerciseSelected=="2") {
            $("#ider21").css("pointer-events","none");
            $("#ider22").css("pointer-events","none");
            $("#ider22").css("width","5%");
            $("#ider22").css("height","6.7%");
            $("#ider23").css("pointer-events","none");
            $("#ider24").css("pointer-events","none");
            $("#ider25").css("pointer-events","none");
            $("#ider26").css("pointer-events","none");
            $("#idInformationStudentAsk1").append(" Respuesta: Judea.");
        }else if (exerciseSelected=="3") {
            $("#ideg11").css("pointer-events","none");
            $("#ideg12").css("pointer-events","none");
            $("#ideg12").css("width","5%");
            $("#ideg12").css("height","6.7%");
            $("#ideg13").css("pointer-events","none");
            $("#ideg14").css("pointer-events","none");
            $("#ideg15").css("pointer-events","none");
            $("#ideg16").css("pointer-events","none");
            $("#ideg17").css("pointer-events","none");
            $("#ideg18").css("pointer-events","none");
            $("#ideg19").css("pointer-events","none");
            $("#ideg110").css("pointer-events","none");
            $("#idInformationStudentAsk1").append(" Respuesta: Atenas.");
        }else if (exerciseSelected=="4") {
            $("#ideg21").css("pointer-events","none");
            $("#ideg22").css( 'opacity', '.3' );
            $("#ideg22").css( 'pointer-events', 'none' );
            $("#idInformationStudentAsk1").append(" Respuesta: Atenas.");
        }else if (exerciseSelected=="5") {
            $("#idem11").css( 'pointer-events', 'none' );
            $("#idem11").css("width","3%");
            $("#idem11").css("height","4.2%");
            $("#idem12").css( 'pointer-events', 'none' );
            $("#idem12").css("width","3%");
            $("#idem12").css("height","4.2%");
            $("#idem13").css( 'pointer-events', 'none' );
        }else if (exerciseSelected=="6") {
            $("#idem21").css("pointer-events","none");
            $("#idem22").css("pointer-events","none");
            $("#idem23").css("pointer-events","none");
            $("#idem24").css("pointer-events","none");
            $("#idem24").css("width","5%");
            $("#idem24").css("height","6.7%");
            $("#idem25").css("pointer-events","none");
            $("#idem26").css("pointer-events","none");
            $("#idem27").css("pointer-events","none");
            $("#idem28").css("pointer-events","none");
            $("#idem29").css("pointer-events","none");
            $("#idem210").css("pointer-events","none");
            $("#idInformationStudentAsk1").append(" Respuesta: Tebas.");
        }

    }else if(idAsk=="1"){
        if (exerciseSelected=="1") {
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
            $("#idInformationStudentAsk").html("¿En qué edad histórica fue escrita esta fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Edad Media.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) Edad Antigua.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c)	Edad Moderna.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	Edad Contemporánea. </p>");
        }else if (exerciseSelected=="2") {
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
            $("#idInformationStudentAsk").append("¿Entre qué años se creó la fuente anterior?<br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">a)	1750 – 1800</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)    1700 – 1750</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c)    1800 – 1850</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionCorrect+"\">d)	1650 – 1700 </p>");
        }else if (exerciseSelected=="3") {
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
            $("#idInformationStudentAsk").append("¿En qué siglo fue escrita la fuente anterior?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo XX</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">b) Siglo XIX</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) Siglo XVII</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d) Siglo XVIII</p>");
        }else if (exerciseSelected=="4") {
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
            $("#idInformationStudentAsk").append("¿Entre qué años fue elaborada esta fuente?<br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">a)	1800 – 1850</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	1750 – 1800</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c)	1700 – 1750</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	1650 – 1700 </p>");
        }else if (exerciseSelected=="5") {
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
            $("#idInformationStudentAsk").append("¿En qué siglo fue escrita la fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a)	Siglo XV.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	Siglo XVI.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c)	Siglo XVII.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	Siglo XVIII.</p>");
        }else if (exerciseSelected=="6") {
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
            $("#idInformationStudentAsk").append("¿En qué siglo se escribió la fuente anterior?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a)	Siglo XX.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	Siglo XIX.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c)	Siglo XVII.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">d)	Siglo XVIII.</p>");
        }else if (exerciseSelected=="7") {
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
            $("#idInformationStudentAsk").append("¿En qué año fue realizada la pintura?<br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">a)	1793.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	1798.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c)	1789.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	1790.</p>");
        }else if (exerciseSelected=="8") {
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
            $("#idInformationStudentAsk").append("¿En qué siglo fue elaborada la fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo XX.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) Siglo XIX.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) Siglo XVII.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">d) Siglo XVIII.</p>");
        }else if (exerciseSelected=="9") {
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
            $("#idInformationStudentAsk").append("¿En qué siglo fue elaborada la fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a)	Siglo XVIII.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	Siglo XVII.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c)	Siglo XIX.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	Siglo XX.</p>");
        }else if (exerciseSelected=="10") {
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTimeSelected.png)");
            $("#idInformationStudentAsk").append("¿En qué año se escribió la fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a)	1810</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b)	1815</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c)	1818</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d)	1823</p>");
        }
    }else if(idAsk=="2"){
        if (exerciseSelected=="1") {
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué aspecto de la independencia de los Estados Unidos nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a)	Política. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b)	Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c)	Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d)	Economía.</p>");
        }else if (exerciseSelected=="2") {
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué aspecto de la independencia de los Estados Unidos nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a)	Política. </p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">b)	Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c)	Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d)	Economía.</p>");
        }else if (exerciseSelected=="3") {
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué aspecto de las independencias hispanoamericanas nos permite conocer la fuente? <br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a) Politica. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía.</p>");
        }else if (exerciseSelected=="4") {
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué aspecto de las independencias hispanoamericanas nos permite conocer esta fuente? <br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Politica. </p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">b) Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía.</p>");
        }else if (exerciseSelected=="5") {
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué aspecto de la Ilustración nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a) Politica. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía.</p>");
        }else if (exerciseSelected=="6") {
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué aspecto de la Ilustración nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a) Politica. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía.</p>");
        }else if (exerciseSelected=="7") {
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué concepto principal refleja está obra?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Poder. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Alianza.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Victoria.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">d) Violencia.</p>");
        }else if (exerciseSelected=="8") {
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué principio fundamental está describiendo el autor?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Derecho a voto. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Protección estatal.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Igualdad ante la ley.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">d) Libertad de expresión.</p>");
        }else if (exerciseSelected=="9") {
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué aspectos de la independencia de Chile nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a)	Social y cultural. </p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">b)	Cultural y político.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c)	Político y religioso.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d)	Geográfico y cultural.</p>");
        }else if (exerciseSelected=="10") {
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué aspecto de la independencia de Chile nos permiten conocer esta fuente?<br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a) Politica. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Sociedad.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía.</p>");
        }
    }else if(idAsk=="3"){
        if (exerciseSelected=="1") {
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
            $("#idInformationStudentAsk").append("A partir de la fuente, ¿qué razón justifica la independencia de los Estados Unidos?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Que los colonos norteamericanos vivían en un permanente estado de infelicidad.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	Que la monarquía inglesa habría atentado contra los derechos inalienables de sus gobernados.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Que la política inglesa daba demasiadas libertades al pueblo norteamericano provocando caos.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Que los súbditos de su majestad británica en Norteamérica habrían sido agredidos por el ejército real. </p>");
        }else if (exerciseSelected=="2") {
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
            $("#idInformationStudentAsk").append("A partir de la fuente, ¿quiénes serían los tiranos representados?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Los grandes empresarios.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	Los monarcas absolutistas.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Los soldados revolucionarios.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Los ciudadanos democráticos.</p>");
        }else if (exerciseSelected=="3") {
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
            $("#idInformationStudentAsk").append("Según Simón Bolívar, ¿qué elementos llevan a la felicidad del hombre?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Justicia, libertad y gloria.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b)	Riqueza libertad y gloria.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">c)	Justicia, libertad e igualdad.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Igualdad, libertad y fraternidad.</p>");
        }else if (exerciseSelected=="4") {
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
            $("#idInformationStudentAsk").append("¿Interpretando la fuente, ¿qué representa el Inca en la fuente?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	La oposición a la religión católica en favor de las creencias indígenas.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b) La ayuda brindada por las comunidades indígenas al ejército realista.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	El primer grupo de santos indígenas aprobados por la iglesia católica.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">d)	Una especie de justicia histórica a favor de las víctimas de la tiranía española.</p>");
        }else if (exerciseSelected=="5") {
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
            $("#idInformationStudentAsk").append("A partir de la fuente, ¿qué elemento se menciona en contra del “príncipe absoluto”?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Su falta de manejo político.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	La concentración de poderes.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Su forma de acceder al poder.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	El carácter hereditario del cargo.</p>");
        }else if (exerciseSelected=="6") {
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué condición establece el pacto social entre los ciudadanos?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Libertad.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	Igualdad.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Soberanía.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Diferencia.</p>");
        }else if (exerciseSelected=="7") {
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué grupos sociales se representan en la imagen?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Militares.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	Militares y civiles.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Militares y mujeres.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Hombres y mujeres.</p>");
        }else if (exerciseSelected=="8") {
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
            $("#idInformationStudentAsk").append("¿Qué grupos sociales se representan en la imagen?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Tomar el poder.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b)	Abusar de los pobres.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">c)	Silenciar a los descontentos.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Apoyar la monarquía absoluta.</p>");
        }else if (exerciseSelected=="9") {
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
            $("#idInformationStudentAsk").append("A partir de la fuente, ¿a qué se refiere el lema con “las tinieblas<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	Al pasado indígena de Chile.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	Al período colonial de Chile.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	A las batallas por la independencia.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	Al pasado rural de la república de Chile.</p>");
        }else if (exerciseSelected=="10") {
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2Selected.png)");
            $("#idInformationStudentAsk").append("A partir de la fuente es posible inferir que:<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a)	En 1810 los chilenos lograron independizarse.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b)	La idea de independizarse creció gradualmente.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c)	Los chilenos de 1818 eran leales al rey de España. </p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d)	El desengaño político bajo los deseos de independencia.</p>");
        }
    }
}

function closeExerciseStudent(){
    if(exerciseSelected1=="1"){
        $("#idClickSpaceExercise").css("zIndex",0);
        $("#idClickSpaceExercise").css("top","63.9%");
        $("#idClickSpaceExercise").css("left","9%");
        $("#idClickSpaceExercise").css("width","17%");
        $("#idClickSpaceExercise").css("height","7%");
        $("#idClickSpaceExercise").css( 'pointer-events', 'visible' );
        if(exerciseSelected=="1" || exerciseSelected=="2" || exerciseSelected=="3" || exerciseSelected=="4" || exerciseSelected=="5" || exerciseSelected=="6" || exerciseSelected=="7" || exerciseSelected=="8" || exerciseSelected=="9" || exerciseSelected=="10"){
            $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpace.png)");
        }
    }else if(exerciseSelected1=="2"){
        $("#idClickTimeExercise").css("zIndex",0);
        $("#idClickTimeExercise").css("top","64%");
        $("#idClickTimeExercise").css("left","27%");
        $("#idClickTimeExercise").css("width","17%");
        $("#idClickTimeExercise").css("height","7%");
        $("#idClickTimeExercise").css( 'pointer-events', 'visible' );
        if(exerciseSelected=="1" || exerciseSelected=="2" || exerciseSelected=="3" || exerciseSelected=="4" || exerciseSelected=="5" || exerciseSelected=="6" || exerciseSelected=="7" || exerciseSelected=="8" || exerciseSelected=="9" || exerciseSelected=="10"){
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTime.png)");
        }
    }else if(exerciseSelected1=="3"){
        $("#idClickUnderstending1").css("zIndex",0);
        $("#idClickUnderstending1").css( 'pointer-events', 'visible' );
        $("#idClickUnderstending1").css("top","63.4%");
        $("#idClickUnderstending1").css("left","46%");
        $("#idClickUnderstending1").css("width","22%");
        $("#idClickUnderstending1").css("height","8%");
        if(exerciseSelected=="1" || exerciseSelected=="2" || exerciseSelected=="3" || exerciseSelected=="4" || exerciseSelected=="5" || exerciseSelected=="6" || exerciseSelected=="7" || exerciseSelected=="8" || exerciseSelected=="9" || exerciseSelected=="10"){
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1.png)");
        }
    }else if(exerciseSelected1=="4"){
        $("#idClickUnderstending2").css("zIndex",0);
        $("#idClickUnderstending2").css( 'pointer-events', 'visible' );
        $("#idClickUnderstending2").css("top","63.8%");
        $("#idClickUnderstending2").css("left","70%");
        $("#idClickUnderstending2").css("width","22%");
        $("#idClickUnderstending2").css("height","7.9%");
        if(exerciseSelected=="1" || exerciseSelected=="2" || exerciseSelected=="3" || exerciseSelected=="4" || exerciseSelected=="5" || exerciseSelected=="6" || exerciseSelected=="7" || exerciseSelected=="8" || exerciseSelected=="9" || exerciseSelected=="10"){
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2.png)");
        }
    }

    $("#divTransparentExercise").remove();
    $("#idDivInformationStudentAsk").css("visibility","hidden");
    $("#idDivExerciseMediterraneo1").css("visibility","hidden");
    $("#idDivExerciseMediterraneo2").css("visibility","hidden");
    $("#idDivExerciseSpaceMap").css("visibility","hidden");
    $("#idDivExerciseGrecia1").css("visibility","hidden");
    $("#idDivExerciseGrecia2").css("visibility","hidden");
    $("#idDivExerciseRoma1").css("visibility","hidden");
    $("#idDivExerciseRoma2").css("visibility","hidden");
    $("#idInformationStudentAsk1").css("visibility","hidden");
    $("#idInformationStudentAsk1").empty();
    $("#divTransparentExercise1").css("visibility","hidden");
    $("#idInformationStudentAsk").empty();

}

function goIndexMap(){
    $("#divMap").css("visibility","visible");
}

function goIndexInormation(idInformation){
    $("#divMainIndex").append("<div  id=\"divTransparent\" class=\"frameTransparent\"> </div>");
    $("#idDivInformation").css("visibility","visible");
    if (idInformation=="1"){ //Ilustracion
        $("#idInformationImage").css("WebkitTransform","rotate(355.8deg)");
        $("#idDivDialogImagesInformation").css("background-image","url(css/images/ImageSantillana/FrameInformationImagesIlustracion.png)");
        $("#idDivInformation").css("background-color", "#a6a18d");
        $("#idInformationTitle").text("La Ilustración");
        $("#idInformation").append("La Ilustración es una corriente de pensamiento que defiende el uso de la razón humana como medio para alcanzar el conocimiento. Nace en el Reino Unido del siglo XVII, con autores como Isaac Newton y John Locke. Se desarrolla en Francia, y desde ahí se expande durante el siglo XVIII por el resto de Europa y América. Esta corriente de pensamiento generó una ruptura con la tradición, cuestionando las bases de las estructuras políticas, económicas y sociales imperantes hasta ese momento.");
        informationImage1 = "<p class=\"ReferenceInformationImage\">Blake, W. (1804). Newton [Ilustración] Recuperado de https://commons.wikimedia.org</p>";
        $("#idInformationImage").append(informationImage1);
        $("#imageInformation1").attr("src", "css/images/Ilustracion1.jpg");
    }else if (idInformation=="2"){ //Hispano
        $("#idInformationImage").css("WebkitTransform","rotate(355.8deg)");
        $("#idDivDialogImagesInformation").css("background-image","url(css/images/ImageSantillana/FrameInformationImagesIlustracion.png)");
        $("#idDivInformation").css("background-color", "#859E9C");
        $("#idInformationTitle").text("Las Independencias Hispanoamericanas");
        $("#idInformation").append("Las independencias hispanoamericanas se inician en el transcurso del gobierno imperial de Napoleón en Europa. El descontento de los criollos hispanoamericanos contra el gobierno de la monarquía española aprovechó la captura del rey a manos de Napoleón en 1808: en ausencia del monarca los criollos organizaron juntas nacionales de gobierno, tomando por primera vez el mando de las colonias españolas en América. Pero este primer ensayo se vería interrumpido por el retorno del rey al trono de España desatándose una guerra entre realistas (llamados así porque representaban el poder del monarca) y patriotas, que acabaría en 1830 con la independencia y nacimiento de nuevas repúblicas americanas.");
        informationImage1 = "<p class=\"ReferenceInformationImage\">Vila y Prades. (1909) El paso del Ejército Libertador por la cordillera de los Andes [Pintura]. Santiago. Museo Histórico y Militar de Chile,</p>";
        $("#idInformationImage").append(informationImage1);
        $("#imageInformation1").attr("src", "css/images/IndependenciaHispanoamericana.jpg");
    }else if (idInformation=="3") { //Mediterraneo
        $("#idInformationImage").css("WebkitTransform", "rotate(355.8deg)");
        $("#idDivDialogImagesInformation").css("background-image", "url(css/images/ImageSantillana/FrameInformationImagesIlustracion.png)");
        $("#idDivInformation").css("background-color", "#a6a18d");
        $("#idInformationTitle").text("La Revolución francesa");
        $("#idInformation").append("Tal fue el peso de las ideas ilustradas en Francia, que esta apoyó a las colonias norteamericanas en su proceso de independencia. Así también la influencia de la Ilustración, y las condiciones impuestas por la monarquía francesa durante el siglo XVIII llevaron a Francia a iniciar su propia revolución la que buscó poner fin al absolutismo y establecer un sistema más justo y acorde a los ideales ilustrados, todo lo cual se plasmó en su Declaración de los Derechos del Hombre y del Ciudadano.");
        informationImage1 = "<p class=\"ReferenceInformationImage\">Autor Desconocido. La toma de la bastilla y arresto del gobernante M. de Launay, el 14 de julio de 1789. Museo Nacional del Castillo de Versalles.</p>";
        $("#idInformationImage").append(informationImage1);
        $("#imageInformation1").attr("src", "css/images/RevolucionFrancesa.jpg");
    }else if (idInformation=="4"){
            $("#idInformationImage").css("WebkitTransform","rotate(355.8deg)");
            $("#idDivDialogImagesInformation").css("background-image","url(css/images/ImageSantillana/FrameInformationImagesIlustracion.png)");
            $("#idDivInformation").css("background-color", "#a6a18d");
            $("#idInformationTitle").text("La Independencia de Chile");
            $("#idInformation").append("En Chile, al igual que en otras colonias hispanoamericanas, la ausencia de Fernando VII generó inquietudes, especialmente, en el sector que se encontraba descontento frente a la monarquía. Así, las autoridades decidieron organizar una Junta Nacional de Gobierno, hasta el retorno del rey. Esta junta no sólo sentó las bases del proceso de independencia sino que también permitió delinear los cambios que  la sociedad chilena de la época requería.");
            informationImage1 = "<p class=\"ReferenceInformationImage\">Subercaseux, P. (1904) Batalla de Maipú [Pintura] Santiago, Museo Histórico Nacional.</p>";
            $("#idInformationImage").append(informationImage1);
            $("#imageInformation1").attr("src", "css/images/IndependenciaChile.jpg");
    }else if (idInformation=="5"){
        $("#idInformationImage").css("WebkitTransform","rotate(355.8deg)");
        $("#idDivDialogImagesInformation").css("background-image","url(css/images/ImageSantillana/FrameInformationImagesIlustracion.png)");
        $("#idDivInformation").css("background-color", "#A698A6");
        $("#idInformationTitle").text("La Independencia de los Estados Unidos");
        $("#idInformation").append("Las duras imposiciones de la monarquía inglesa sobre las Trece Colonias especialmente las alzas de impuestos y el monopolio, junto con otras limitaciones políticas y sociales, llevaron a un desgaste de las relaciones lo que desató una revolución de las colonias y una guerra por la independencia. El 4 de julio de 1776, y con el apoyo de Francia, las Trece Colonias declaran su independencia, venciendo al ejército inglés en 1777.");
        informationImage1 = "<p class=\"ReferenceInformationImage\">Trumbull, J. (1819) Declaración de la Independencia [Pintura]. Washington, UnitedStatesCapitol.</p>";
        $("#idInformationImage").append(informationImage1);
        $("#imageInformation1").attr("src", "css/images/IndependenciaEUA.jpg");
    }else{
        console.log("Seleccionado una opcion incorrecta");
    }
}

function goIndexExercise(){
    $("#idDivExercise").css("visibility","visible");
}

function goIndexEndExercise(){
    $("#idDivEnd").css("visibility","visible");
}

function goIndexIntroductionExercise(idExercice){
    $("#idDivExerciseStudent").css("visibility","visible");
    if((idExercice=="1") || (idExercice=="2")){ //Roma
        $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpace.png)");
        $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTime.png)");
        $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1.png)");
        $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2.png)");
        $("#idDivInformationStudentAsk").css("background-color", "#A6A18D");
        if(idExercice=="1"){
            $(".force-overflow").append("La Independencia de los Estados Unidos: <br><br> Declaración de Independencia  <p class=\"scrollbar1\">Sostenemos como evidentes estas verdades: que todos los hombres son creados en la igualdad, y dotados por su Creador  de ciertos derechos inalienables entre los que se encuentran la vida, la libertad y el derecho a la felicidad. Que, para asegurar estos derechos, los hombres crean gobiernos que derivan sus justos poderes del consentimiento de los gobernados. Que cualquier otra forma de gobierno que atente a estos fines puede el pueblo alterarla o abolirla para instituir un nuevo gobierno, que tenga su fundamento en tales principios y organice sus poderes de tal forma que parezca más seguro alcanzar mediante él la seguridad y la felicidad […].<p class=\"ReferenceInformationExercise\">Jefferson, T. Et al (1776). Declaración de Independencia de los Estados Unidos, Filadelfia. <br> Recuperado de <br> https://es.wikipedia.org/wiki/Declaraci%C3%B3n_de_Independencia_de_los_Estados_Unidos</p></p>");
        }else{
            $(".force-overflow").append("La Independencia de los Estados Unidos: Lema de Virginia<img class=\"imageExercise\" src=\"css/images/IndependenciaEUAExercise1.jpg\"/></img> <p class=\"scrollbar1\">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAsí les pasa siempre a los tiranos.<p class=\"ReferenceInformationExercise\">Mitchell, Henry (1876) The State Arms of the Union, Boston <br> Recuperado de <br> https://commons.wikimedia.org/wiki/File:Virginia_state_coat_of_arms_(illustrated,_1876).jpg</p></p>");
        }
    }else if((idExercice=="3") || (idExercice=="4")){//Grecia
        $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpace.png)");
        $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTime.png)");
        $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1.png)");
        $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2.png)");
        $("#idDivInformationStudentAsk").css("background-color", "#A6A18D");
        if(idExercice=="3"){
            $(".force-overflow").append("Las independencias hispanoamericanas: Simón Bolívar<p class=\"scrollbar1\">Todavía es más dificil presentir la suerte futura del Nuevo Mundo, establecer principios sobre su política, y casi profetizar la naturaleza del gobierno que llegará a adoptar […] Nosotros somos un pequeño género humano; poseemos un mundo aparte, cercado por dilatados mares, nuevos en casi todas las artes y ciencias aunque en cierto modo viejos, en los usos de la sociedad civil. Yo considero el estado actual de América, como, cuando desplomado el Imperio Romano, cada desmembración formó un sistema político conforme a sus intereses y situaciones o siguiendo la ambición particular de algunos jefes, familias o corporaciones […]. <br><br> Los meridionales de este continente han manifestado el conato de conseguir instituciones liberales, y aun perfectas; sin duda, por efecto del instinto que tienen todos los hombres de apirar a su mejor felicidad posible, que se alcanza infaliblemente en las sociedades civiles, cuando ellas están fundadas sobre las bases de la justicia, de la libertad y de la igualdad […]. <br><br> Yo deseo más que otro alguno ver formar en América la más grande nación del mundo, menor por su extensión y riqueza que por su libertad y gloria. <p class=\"ReferenceInformationExercise\">Bolívar, S. (1815) Carta de Jamaica. <br> Recuperado de http://www.cpihts.com/PDF/Simon%20Bolivar.pdf</p></p>");
        }else{
            $(".force-overflow").append("Las independencias hispanoamericanas: La batalla final contra España en América del Sur <br><img class=\"imageExercise\" src=\"css/images/IndependenciaHispanoExercise1.jpg\"/></img> <p class=\"scrollbar1\">HuaynaCápac, uno de los últimos emperadores incas que luchó y murió peleando contra los españoles, es representado en los cielos de Junín (Perú) alentando a las tropas revolucionarias de Simón Bolívar en la batalla definitiva contra España en 1824.<p class=\"ReferenceInformationExercise\">De Olmedo, J. (1826) Venganza y gloria nos darán los cielos [Grabado].  <br> Recuperado de <br> http://www.bl.uk/onlinegallery/features/spanishamericanind/homepage.html</p></p>");
        }
    }else if((idExercice=="5") || (idExercice=="6")){//Mediterraneo
        $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpace.png");
        $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTime.png)");
        $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1.png)");
        $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2.png)");
        $("#idDivInformationStudentAsk").css("background-color", "#A6A18D");
        if(idExercice=="5"){
            $(".force-overflow").append("La Ilustración: Crítica al absolutismo<p class=\"scrollbar1\">Y es por ello evidente que la monarquía absoluta, que algunos tienen por único gobierno en el mundo, es en realidad incompatible con la sociedad civil, y así no puede ser forma de gobierno civil alguno. <br><br> Porque siendo el fin de la sociedad civil educar y remediar los inconvenientes del estado de naturaleza […] mediante el establecimiento de una autoridad conocida, a quien cualquiera de dicha sociedad pueda apelar a propósito de todo agravio recibido o contienda surgida, y a la que todos en tal sociedad deban obedecer […] se hallarán todavía en el estado de naturaleza: y en él se halla todo príncipe absoluto con relación a quienes se encontraren bajo su dominio.Porque entendiéndose que él reúne en sí todos los poderes, el legislativo y el ejecutivo, en su persona sola, no es posible hallar juez, ni está abierta la apelación a otro ninguno que pueda justa, imparcialmente y con autoridad decidir, y de quien alivio y enderezamiento pueda resultar a cualquier agravio o inconveniencia causada por el príncipe, o por su orden sufrida. De modo que tal hombre, como queráis que se le tilde, Zar o Gran Señor, o como gustareis [...]<p class=\"ReferenceInformationExercise\">Locke, J. (1690). Segundo tratado sobre el Gobierno civil. Inglaterra <br> Recuperado de <br><small> http://historia-derecho.com.ar/PDF/Segundo_Tratado_sobre_el_Gobierno_Civil.pdf</small></p></p>");
        }else{
            $(".force-overflow").append("La Ilustración: Los principios de las democracias contemporáneas<p class=\"scrollbar1\">Desde cualquier punto de vista que se examine la cuestión, llegamos siempre a la misma conclusión, a saber: que el pacto social establece entre los ciudadanos una igualdad tal, que todos se obligan bajo las mismas condiciones y todos gozan de idénticos derechos. Así, por la naturaleza del pacto, todo acto de soberanía, es decir, todo acto auténtico de la voluntad general, obliga o favorece igualmente a todos los ciudadanos […]. <br><br> De esto se deduce que el poder soberano, con todo y ser absoluto, sagrado e inviolable, no traspasa ni traspasar puede los límites de las convenciones generales, y que todo hombre puede disponer plenamente de lo que le ha sido dejado de sus bienes y de su libertad por ellas; de suerte que el soberano no está jamás en el derecho de recargar a un súbdito más que a otro, porque entonces la cuestión conviértese en particular y cesa de hecho la competencia del poder. <p class=\"ReferenceInformationExercise\">Rousseau, J. (1762)El Contrato Social, Francia. </p></p>");
        }
    }else if((idExercice=="7") || (idExercice=="8")){//Mediterraneo
        $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpace.png");
        $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTime.png)");
        $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1.png)");
        $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2.png)");
        $("#idDivInformationStudentAsk").css("background-color", "#A6A18D");
        if(idExercice=="7"){
            $(".force-overflow").append("La revolución francesa: el costo de una revolución<br><img class=\"imageExercise\" src=\"css/images/RevolucionFrancesaExercise1.jpg\"/></img<p class=\"scrollbar1\"><p class=\"ReferenceInformationExercise\">Duplessis-Bertaux, J. (1793) Toma de las Tullerías en agosto 10. Durante la Revolución Francesa [Pintura].  <br> Recuperado de <br><small> https://commons.wikimedia.org/wiki/File:Jacques_Bertaux_-_Prise_du_palais_des_Tuileries_-_1793.jpg</small></p></p>");
        }else{
            $(".force-overflow").append("La Revolución francesa<p class=\"scrollbar1\">Todos estos ridículos autores que se consideran bastiones de la libertad, únicamente son capaces de lastimar sus propios intereses: sus languidecentes escritos no agitan los ánimos ajenos, ni persuaden ni conmueven al lector […]. <br><br> El silenciamiento de los descontentos evita que el pueblo despierte de su letargo. Sumir a las gentes en ese estado es el mayor anhelo de los opresores y tiranos. El modo más sencillo de erradicar cualquier atisbo de protesta es coartar la división tripartita del Estado, además de obstaculizar con gran esmero la libertad de prensa. <p class=\"ReferenceInformationExercise\">Marat. J. (1774) Las cadenas de la esclavitud.<br> Recuperado de <br><small> www.epdlp.com/texto.php?id2=10276</small></p></p>");
        }
    }else if((idExercice=="9") || (idExercice=="10")){ //Roma
        $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseSpace.png)");
        $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseTime.png)");
        $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding1.png)");
        $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGeneralExerciseUnderstanding2.png)");
        $("#idDivInformationStudentAsk").css("background-color", "#A6A18D");
        if(idExercice=="9"){
            $(".force-overflow").append("La independencia de Chile: Lema de José Miguel Carrera<img class=\"imageExercise\" src=\"css/images/IndependenciaChileExercise1.jpg\"/></img> <p class=\"scrollbar1\">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp“Después de las tinieblas la luz”    “O por consejo o por espada”<p class=\"ReferenceInformationExercise\">Carrera, J. (1812)Escudo de la bandera de la Patria Vieja. [Ilustración].</p></p>");
        }else{
            $(".force-overflow").append("La independencia de Chile: Proclamación de O’Higgins <p class=\"scrollbar1\">La revolución del 18 de septiembre de 1810 fue el primer esfuerzo que hizo Chile para cumplir esos altos destinos a lo que lo llamaban el tiempo y la naturaleza: sus habitantes han probado desde entonces la energía y firmeza de su voluntad, arrostrando las vicisitudes de una guerra en que el gobierno español ha querido hacer ver que su política con respecto a la América sobrevivirá al trastorno de todos los abusos. Este último desengaño les ha inspirado naturalmente la resolución de separarse para siempre de la Monarquía Española, y proclamar su independencia a la faz del mundo […].<p class=\"ReferenceInformationExercise\">O’Higgins, B. Et al. (1818) Proclamación de Independencia de Chile. <br> Recuperado de <br> https://es.wikipedia.org/wiki/Acta_de_Independencia_de_Chile</p></p>");
        }
    }
}

function NextImageSlide(){
    numberImage.goToNextSlide();
    return false;
}

function PreviouImageSlide(){
    numberImage.goToPrevSlide()
    return false;
}
