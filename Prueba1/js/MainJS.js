var exerciseDone = new Array(6);
var informationView = new Array(3);
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

    $("#divMainIndex").append("<div id=\"idTitle\" class=\"h1Main\"><br>EL MUNDO<br>GRECORROMANO</div>");
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
    $("#divMainIndex").append("<p id=\"idDescriptionTitle\" class=\"DescriptionTitle\" >¿QUÉ SABES DE LAS CIVILIZACIONES <br> GRIEGA Y ROMANA?<br></p>");
    $("#divMainIndex").append("<p id=\"idDescription\" class=\"Description\" >En esta actividad tendrás un primer acercamiento <br> al mar Mediterráneo, la Grecia y la Roma de la Antigüedad.</p>");
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
    if(informationView[0]==1 && informationView[1]==1 && informationView[2]==1){
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
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseSpaceSelected.png)");
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
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseSpaceSelected.png)");
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
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseSpaceSelected.png)");
                $("#idDivExerciseSpaceMap").css("background-image", "url(css/images/ImageSantillana/MapMediterraneo2.jpg)");
                $("#idDivExerciseGrecia1").css("visibility","visible");
                $("#idInformationStudentAsk1").html("Marca la ciudad del padre del narrador en el texto.");
            }else if (exerciseSelected=="4") {
                $("#ideg21").css("pointer-events","visible");
                $("#ideg22").css( 'opacity', '0' );
                $("#ideg22").css( 'pointer-events', 'visible' );
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseSpaceSelected.png)");
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
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseSpaceSelected.png)");
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
                $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseSpaceSelected.png)");
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
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").html("¿A qué siglo hace referencia la fuente leída?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo I a.C.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">b) Siglo I d.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) Siglo IX a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d) Siglo IX d.C. </p>");
            }else if (exerciseSelected=="2") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿Entre qué siglos fue elaborada esta fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo I- II a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) Siglo I-II d.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) Siglo III-IV a.C.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">d) Siglo III-IV d.C.</p>");
            }else if (exerciseSelected=="3") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿En qué siglo se escribió esta fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo V a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) Siglo II a.C.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c) Siglo IV a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d) Siglo III a.C.</p>");
            }else if (exerciseSelected=="4") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿En qué siglo se habría elaborado esta vasija?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) S. II a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) S. III a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) S. IV a.C.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">d) S. VI a.C.</p>");
            }else if (exerciseSelected=="5") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿En qué siglo se habrían comenzado a fundar las colonias griegas en el mediterráneo?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) S. VI a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) S. VII a.C.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c) S. VIII a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d) S. VII d.C.</p>");
            }else if (exerciseSelected=="6") {
                $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseTimeSelected.png)");
                $("#idInformationStudentAsk").append("¿Hasta qué siglo habría llegado la influencia de la configuración cultural que surgió durante la Antigüedad en el Mediterráneo?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo XVII.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) Siglo XVIII.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) Siglo XIX.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">d) Siglo XXI.</p>");
            }
        }else if(idAsk=="3"){
            $("#idClickUnderstending1").css("zIndex",4);
            $("#idClickUnderstending1").css( 'pointer-events', 'none' );
            $("#idClickUnderstending1").css("top","48.6%");
            $("#idClickUnderstending1").css("left","39.7%");
            $("#idClickUnderstending1").css("width","27.8%");
            $("#idClickUnderstending1").css("height","22.5%");
            if (exerciseSelected=="1") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué aspecto de la vida en la Roma antigua nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Social. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Político.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Cultural.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">d) Económico.</p>");
            }else if (exerciseSelected=="2") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué aspectos de los romanos nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Política y cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Filosofía y religión.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">c) Cultura y economía.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía y política.</p>");
            }else if (exerciseSelected=="3") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué ámbito de la vida  en la Grecia antigua nos permite conocer esta fuente? <br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Social. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Político.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Cultural.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">d) Económico.</p>");
            }else if (exerciseSelected=="4") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué producto agrícola fundamental en la dieta mediterránea aparece representado en la vasija?<br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a) La uva.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) El trigo.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) El olivo.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Las legumbres.</p>");
            }else if (exerciseSelected=="5") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("Según la fuente, ¿qué actividades podría facilitar la cercanía al Mar Mediterráneo?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Vías de comunicación, transporte y riquezas.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Ricos paisajes, sustento y vías de comunicación.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">c) Sustento, transporte y una vía de comunicación.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Sustento, vías de comunicación y amenazas militares.</p>");
            }else if (exerciseSelected=="6") {
                $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseUnderstanding1Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué herramienta fundamental debía usarse para derrotar a la Esfinge?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) La fe.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) La astucia.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) La palabra.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">d) El pensamiento.</p>");
            }
        }else if(idAsk=="4"){
            $("#idClickUnderstending2").css("zIndex",4);
            $("#idClickUnderstending2").css( 'pointer-events', 'none' );
            $("#idClickUnderstending2").css("top","49.3%");
            $("#idClickUnderstending2").css("left","55.5%");
            $("#idClickUnderstending2").css("width","37.6%");
            $("#idClickUnderstending2").css("height","22.9%");
            if (exerciseSelected=="1") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué productos lograba importar Roma gracias al comercio mediterráneo?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) Minerales y madera.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b) Trigo y bienes de lujo.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c) Bienes de lujo y aceites.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d) Trigo y minerales preciosos.</p>");
            }else if (exerciseSelected=="2") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("A partir de la fuente, ¿qué rol podríamos pensar que jugaba la presencia del mar en la cotidianeidad de una villa romana cercana al Mediterráneo?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) No tenía ningún rol.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b) Era un elemento extraño.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">c) Parecía un elemento cercano.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d) Se representaba desde la fantasía.</p>");
            }else if (exerciseSelected=="3") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("Considerando lo señalado por  la fuente, ¿por qué los comerciantes griegos se toman su tiempo antes de vender el trigo?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) Porque esperan que el trigo esté maduro.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b) Porque es el último producto que venden.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">c) Porque buscan el mercado que mejor les pague.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d) Porque prefieren venderlo en caravanas terrestres.</p>");
            }else if (exerciseSelected=="4") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué podría representar la presencia de Dionisio en una nave?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) Nexo entre comercio y política.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b) Conexión entre política y religiosidad.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c) La unión entre la expansión territorial y la fe.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">d) La presencia del mar en la mitología y cultura.</p>");
            }else if (exerciseSelected=="5") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("¿Qué caracterizó al Imperio Romano respecto de su relación con el Mediterráneo?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) Utilizó la fuerza como recurso principal de unificación.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b) Gastó tanto como pudo para mantener sus dominios.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c) No logró imponerse en todo el espacio Mediterráneo.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">d) Unificó todo el espacio en un solo régimen político.</p>");
            }else if (exerciseSelected=="6") {
                $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseUnderstanding2Selected.png)");
                $("#idInformationStudentAsk").append("Según el texto, ¿qué elementos del Mediterráneo extienden su influencia universal hasta hoy?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) Política y religión.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b) El paisaje y la cultura.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c) La economía y religión.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d) La economía y política.</p>");
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
            $("#idInformationStudentAsk").html("¿A qué siglo hace referencia la fuente leída?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo I a.C.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">b) Siglo I d.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) Siglo IX a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d) Siglo IX d.C. </p>");
        }else if (exerciseSelected=="2") {
            $("#idInformationStudentAsk").append("¿Entre qué siglos fue elaborada esta fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo I- II a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) Siglo I-II d.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) Siglo III-IV a.C.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">d) Siglo III-IV d.C.</p>");
        }else if (exerciseSelected=="3") {
            $("#idInformationStudentAsk").append("¿En qué siglo se escribió esta fuente?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo V a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) Siglo II a.C.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c) Siglo IV a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d) Siglo III a.C.</p>");
        }else if (exerciseSelected=="4") {
            $("#idInformationStudentAsk").append("¿En qué siglo se habría elaborado esta vasija?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) S. II a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) S. III a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) S. IV a.C.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">d) S. VI a.C.</p>");
        }else if (exerciseSelected=="5") {
            $("#idInformationStudentAsk").append("¿En qué siglo se habrían comenzado a fundar las colonias griegas en el mediterráneo?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) S. VI a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) S. VII a.C.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">c) S. VIII a.C.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">d) S. VII d.C.</p>");
        }else if (exerciseSelected=="6") {
            $("#idInformationStudentAsk").append("¿Hasta qué siglo habría llegado la influencia de la configuración cultural que surgió durante la Antigüedad en el Mediterráneo?<br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">a) Siglo XVII.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">b) Siglo XVIII.</p><br><br><p onclick=\"validateResponse(1,0)\" class=\""+OptionIncorrect+"\">c) Siglo XIX.</p><br><br><p onclick=\"validateResponse(1,1)\" class=\""+OptionCorrect+"\">d) Siglo XXI.</p>");
        }
    }else if(idAsk=="2"){
        if (exerciseSelected=="1") {
            $("#idInformationStudentAsk").append("¿Qué aspecto de la vida en la Roma antigua nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Social. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Político.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Cultural.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">d) Económico.</p>");
        }else if (exerciseSelected=="2") {
            $("#idInformationStudentAsk").append("¿Qué aspectos de los romanos nos permite conocer esta fuente?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Política y cultura.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Filosofía y religión.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">c) Cultura y economía.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Economía y política.</p>");
        }else if (exerciseSelected=="3") {
            $("#idInformationStudentAsk").append("¿Qué ámbito de la vida  en la Grecia antigua nos permite conocer esta fuente? <br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Social. </p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Político.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) Cultural.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">d) Económico.</p>");
        }else if (exerciseSelected=="4") {
            $("#idInformationStudentAsk").append("¿Qué producto agrícola fundamental en la dieta mediterránea aparece representado en la vasija?<br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">a) La uva.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) El trigo.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) El olivo.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Las legumbres.</p>");
        }else if (exerciseSelected=="5") {
            $("#idInformationStudentAsk").append("Según la fuente, ¿qué actividades podría facilitar la cercanía al Mar Mediterráneo?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) Vías de comunicación, transporte y riquezas.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) Ricos paisajes, sustento y vías de comunicación.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">c) Sustento, transporte y una vía de comunicación.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">d) Sustento, vías de comunicación y amenazas militares.</p>");
        }else if (exerciseSelected=="6") {
            $("#idInformationStudentAsk").append("¿Qué herramienta fundamental debía usarse para derrotar a la Esfinge?<br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">a) La fe.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">b) La astucia.</p><br><br><p onclick=\"validateResponse(2,0)\" class=\""+OptionIncorrect+"\">c) La palabra.</p><br><br><p onclick=\"validateResponse(2,1)\" class=\""+OptionCorrect+"\">d) El pensamiento.</p>");
        }
    }else if(idAsk=="3"){
        if (exerciseSelected=="1") {
            $("#idInformationStudentAsk").append("¿Qué productos lograba importar Roma gracias al comercio mediterráneo?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) Minerales y madera.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b) Trigo y bienes de lujo.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c) Bienes de lujo y aceites.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d) Trigo y minerales preciosos.</p>");
        }else if (exerciseSelected=="2") {
            $("#idInformationStudentAsk").append("A partir de la fuente, ¿qué rol podríamos pensar que jugaba la presencia del mar en la cotidianeidad de una villa romana cercana al Mediterráneo?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) No tenía ningún rol.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b) Era un elemento extraño.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">c) Parecía un elemento cercano.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d) Se representaba desde la fantasía.</p>");
        }else if (exerciseSelected=="3") {
            $("#idInformationStudentAsk").append("Considerando lo señalado por  la fuente, ¿por qué los comerciantes griegos se toman su tiempo antes de vender el trigo?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) Porque esperan que el trigo esté maduro.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b) Porque es el último producto que venden.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">c) Porque buscan el mercado que mejor les pague.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d) Porque prefieren venderlo en caravanas terrestres.</p>");
        }else if (exerciseSelected=="4") {
            $("#idInformationStudentAsk").append("¿Qué podría representar la presencia de Dionisio en una nave?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) Nexo entre comercio y política.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b) Conexión entre política y religiosidad.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c) La unión entre la expansión territorial y la fe.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">d) La presencia del mar en la mitología y cultura.</p>");
        }else if (exerciseSelected=="5") {
            $("#idInformationStudentAsk").append("¿Qué caracterizó al Imperio Romano respecto de su relación con el Mediterráneo?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) Utilizó la fuerza como recurso principal de unificación.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">b) Gastó tanto como pudo para mantener sus dominios.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c) No logró imponerse en todo el espacio Mediterráneo.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">d) Unificó todo el espacio en un solo régimen político.</p>");
        }else if (exerciseSelected=="6") {
            $("#idInformationStudentAsk").append("Según el texto, ¿qué elementos del Mediterráneo extienden su influencia universal hasta hoy?<br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">a) Política y religión.</p><br><br><p onclick=\"validateResponse(3,1)\" class=\""+OptionCorrect+"\">b) El paisaje y la cultura.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">c) La economía y religión.</p><br><br><p onclick=\"validateResponse(3,0)\" class=\""+OptionIncorrect+"\">d) La economía y política.</p>");
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
        if(exerciseSelected=="1" || exerciseSelected=="2"){
            $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseSpace.png)");
        }else if(exerciseSelected=="3" || exerciseSelected=="4"){
            $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseSpace.png)");
        }else if(exerciseSelected=="5" || exerciseSelected=="6"){
            $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseSpace.png)");
        }
    }else if(exerciseSelected1=="2"){
        $("#idClickTimeExercise").css("zIndex",0);
        $("#idClickTimeExercise").css("top","64%");
        $("#idClickTimeExercise").css("left","27%");
        $("#idClickTimeExercise").css("width","17%");
        $("#idClickTimeExercise").css("height","7%");
        $("#idClickTimeExercise").css( 'pointer-events', 'visible' );
        if(exerciseSelected=="1" || exerciseSelected=="2"){
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseTime.png)");
        }else if(exerciseSelected=="3" || exerciseSelected=="4"){
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseTime.png)");
        }else if(exerciseSelected=="5" || exerciseSelected=="6"){
            $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseTime.png)");
        }
    }else if(exerciseSelected1=="3"){
        $("#idClickUnderstending1").css("zIndex",0);
        $("#idClickUnderstending1").css( 'pointer-events', 'visible' );
        $("#idClickUnderstending1").css("top","63.4%");
        $("#idClickUnderstending1").css("left","46%");
        $("#idClickUnderstending1").css("width","22%");
        $("#idClickUnderstending1").css("height","8%");
        if(exerciseSelected=="1" || exerciseSelected=="2"){
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseUnderstanding1.png)");
        }else if(exerciseSelected=="3" || exerciseSelected=="4"){
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseUnderstanding1.png)");
        }else if(exerciseSelected=="5" || exerciseSelected=="6"){
            $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseUnderstanding1.png)");
        }
    }else if(exerciseSelected1=="4"){
        $("#idClickUnderstending2").css("zIndex",0);
        $("#idClickUnderstending2").css( 'pointer-events', 'visible' );
        $("#idClickUnderstending2").css("top","63.8%");
        $("#idClickUnderstending2").css("left","70%");
        $("#idClickUnderstending2").css("width","22%");
        $("#idClickUnderstending2").css("height","7.9%");
        if(exerciseSelected=="1" || exerciseSelected=="2"){
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseUnderstanding2.png)");
        }else if(exerciseSelected=="3" || exerciseSelected=="4"){
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseUnderstanding2.png)");
        }else if(exerciseSelected=="5" || exerciseSelected=="6"){
            $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseUnderstanding2.png)");
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
    if (idInformation=="1"){ //Roma
        $("#idInformationImage").css("WebkitTransform","rotate(357.8deg)");
        $("#idDivDialogImagesInformation").css("background-image","url(css/images/ImageSantillana/FrameInformationImagesRoma.png)");
        $("#idDivInformation").css("background-color", "#506E3F");
        $("#idInformationTitle").text("La Roma de la Antigüedad");
        $("#idInformation").append("Los romanos se ubicaban en la península Itálica, al centro del mar Mediterráneo, desde el 753 a.C. al 476 d.C. Estos lograron desarrollar una unidad política y cultural estableciendo un imperio que dominó las costas de todo el  mar Mediterráneo y Europa Occidental. Tal fue la conexión de los romanos con el espacio mediterráneo, que llegaron a llamarle Mare Nostrum, que significa \“el mar nuestro\”, siendo pieza fundamental de su proceso de expansión Imperial. <br><br> Algunos de sus legados son: la continuación del pensamiento racionalista y antropocéntrico, el desarrollo de grandes obras arquitectónicas y de ingeniería, el establecimiento de la República, el derecho, y la costumbre de asistir a grandes espectáculos públicos.");
        informationImage1 = "Coliseo Romano. <p class=\"ReferenceInformationImage\">Pixabay.</p>";
        informationImage2 = "Hombres de mar romanos. <p class=\"ReferenceInformationImage\">Wikimedia Commons.</p>"
        informationImage3 = "Equipo soldado romano";
        $("#idInformationImage").append(informationImage1);
        $("#imageInformation1").attr("src", "css/images/RomaImage1.png");
        $("#imageInformation2").attr("src", "css/images/RomaImage2.png");
        $("#imageInformation3").attr("src", "css/images/RomaImage3.png");
    }else if (idInformation=="2"){ //Grecia
        $("#idInformationImage").css("WebkitTransform","rotate(360deg)");
        $("#idDivDialogImagesInformation").css("background-image","url(css/images/ImageSantillana/FrameInformationImagesGrecia.png)");
        $("#idDivInformation").css("background-color", "#9C3535");
        $("#idInformationTitle").text("La Grecia de la Antigüedad");
        $("#idInformation").append("Los antiguos griegos se ubicaban en la península de Los Balcanes y las costas del mar Egeo, aproximadamente desde el año 1900 a.C. hasta el año 148 a.C. Se organizaron en ciudades-Estados, que eran independientes unas de las otras, por lo que nunca lograron formar una unidad política. Destacaron en diversos áreas del conocimiento, como en filosofía, política y arte. Siendo sus ideas sobre estas disciplinas valoradas hasta el día de hoy. <br><br> Además, los griegos de la Antigüedad fueron grandes navegantes. Surcaron el mar Mediterráneo en búsqueda de conexiones comerciales y de tierras donde expandirse y formar colonias.");
        informationImage1 = "Dracma, moneda griega. <p class=\"ReferenceInformationImage\">Fundamental para el comercio.</p>";
        informationImage2 = "Lámpara en bronce con forma de nave griega. <p class=\"ReferenceInformationImage\">Wikimedia Commons.</p>"
        informationImage3 = "Bustos romanos que representan filósofos griegos.";
        $("#idInformationImage").append(informationImage1);
        $("#imageInformation1").attr("src", "css/images/GreciaImage1.png");
        $("#imageInformation2").attr("src", "css/images/GreciaImage2.png");
        $("#imageInformation3").attr("src", "css/images/GreciaImage3.png");
    }else if (idInformation=="3"){ //Mediterraneo
        $("#idInformationImage").css("WebkitTransform","rotate(357deg)");
        $("#idDivDialogImagesInformation").css("background-image","url(css/images/ImageSantillana/FrameInformationImagesMediterraneo.png)");
        $("#idDivInformation").css("background-color", "#426482");
        $("#idInformationTitle").text("El mar Mediterráneo en la Antigüedad");
        $("#idInformation").append("Difícil se hace entender a la Grecia y Roma de la Antigüedad si no comprendemos su relación con el espacio en que se desarrollaron. De especial importancia es el rol que jugó el mar Mediterráneo en el desarrollo político, económico y cultural de estas sociedades. A través del tráfico marítimo, griegos y romanos, pudieron acceder a nuevos productos  y costumbres, al mismo tiempo que expandieron su dominio sobre los territorios que circundaban el mar Mediterráneo.");
        informationImage1 = "Templo a Júpiter en las Costas del Mediterráneo. <p class=\"ReferenceInformationImage\">Wikimedia Commons.</p>";
        informationImage2 = "Comercio mercante en Roma.  <p class=\"ReferenceInformationImage\">Wikimedia Commons.</p>"
        informationImage3 = "Ruinas ciudad grecorromana de Gádara, a orillas del Mediterráneo.";
        $("#idInformationImage").append(informationImage1);
        idDivDialogImagesInformation
        $("#imageInformation1").attr("src", "css/images/MediterraneoImage1.png");
        $("#imageInformation2").attr("src", "css/images/MediterraneoImage2.png");
        $("#imageInformation3").attr("src", "css/images/MediterraneoImage3.png");
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
        $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseSpace.png)");
        $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseTime.png)");
        $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseUnderstanding1.png)");
        $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseUnderstanding2.png)");
        $("#idDivInformationStudentAsk").css("background-color", "#506E3F");
        if(idExercice=="1"){
            $(".force-overflow").append("Comercio romano  <p class=\"scrollbar1\">A fines del siglo primero después de Cristo Roma controlaba varias de las más importantes fuentes de grano en el Mediterráneo [...] Roma ya no tenía que depender de la variancia del clima italiano para obtener su suministro de alimento [...] Sistemas de intercambio más y más elaborados se desarrollaron para asegurar que el grano y otros bienes circularan hacia Roma. Mientras Augusto transformaba la ciudad, y grandes palacios se erguían desde el monte Palatino, la demanda por artículos de lujo -sedas, perfumes, marfil del Océano Indico, finas esculturas de Grecia, cristalería, codiciados trabajos en metal provenientes del Mediterráneo oriental - floreció. <p class=\"ReferenceInformationExercise\">Abulafia, D. (2011) The Great Sea: A Human History of the Mediterranean. New York, Oxford University <br> Press. Traducción Propia.</p></p>");
        }else{
            $(".force-overflow").append("Roma y el mar Mediterráneo <br><img class=\"imageExercise\" src=\"css/images/RomaImageExercise.png\"/>  <p class=\"scrollbar1\"> <p class=\"ReferenceInformationExerciseImage\">Detalle del mosaico romano de Lod, Israel. (S. III-S.IV d. C.). Carole Raddato. Flickr</p><p class=\"scrollbar1\">Se cree que este mosaico pertenecería a la pared de una casa romana, ubicada en la provincia romana de Judea.</p></p>");
        }
    }else if((idExercice=="3") || (idExercice=="4")){//Grecia
        $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseSpace.png)");
        $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseTime.png)");
        $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseUnderstanding1.png)");
        $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseUnderstanding2.png)");
        $("#idDivInformationStudentAsk").css("background-color", "#9C3535");
        if(idExercice=="3"){
            $(".force-overflow").append("Comerciantes y navegantes<p class=\"scrollbar1\">Por otra parte, mi propio padre puso en práctica y me enseñó a mí el método más eficaz para ganar dinero con la agricultura, si se es capaz de poner interés y de trabajar la tierra con empeño [...] Porque mi padre, Sócrates, era en mi opinión un apasionado por la agricultura, más que ningún otro ateniense […] <br><br> Los comerciantes, en efecto, por su intensa pasión por el trigo, dondequiera que oyen que hay más, allí navegan en su busca, surcando el mar Egeo, el Ponto Euxino y el mar de Sicilia. A continuación se hacen con la mayor cantidad posible y lo llevan a través del mar, cargándolo incluso en el mismo barco en el que ellos navegan. Y cuando necesitan dinero, no se deshacen de él a la buena de dios y en cualquier lugar en que se encuentres, sino donde oyen que el trigo tiene un valor mayor y goza de más estima, allí lo llevan y se lo entregan a sus habitantes. <p class=\"ReferenceInformationExercise\">Jenofonte. (S. IV a.C.) Económico. Madrid, España. Gredos.</p></p>");
        }else{
            $(".force-overflow").append("La presencia del mar <br><img class=\"imageExercise\" src=\"css/images/GreciaImageExercise.png\"/>  <p class=\"scrollbar1\"> <p class=\"ReferenceInformationExerciseImage\">Exekias. (540-530 a.C.) El vaso de Dionisio [Cerámica]. Munich. Antikensammlungen.</p><p class=\"scrollbar1\">Kylix o vasija para beber vino, representa el viaje mítico de Dionisio, dios de la embriaguez, en una típica nave griega, rodeado de delfines y parras. Su autor, Exekias, vivió en Antenas entre los años 550 a. C. y 525 a. C.</p></p>");
        }
    }else if((idExercice=="5") || (idExercice=="6")){//Mediterraneo
        $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseSpace.png");
        $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseTime.png)");
        $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseUnderstanding1.png)");
        $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseUnderstanding2.png)");
        $("#idDivInformationStudentAsk").css("background-color", "#426482");
        if(idExercice=="5"){
            $(".force-overflow").append("Griegos, romanos y el Mediterráneo I<p class=\"scrollbar1\">El mar se convierte en determinante, es protagonista de todo lo que ocurre, es medio de vida, transporte y comunicación de las comunidades del entorno. Establece el contacto entre unos puntos y otros del Mediterráneo de tal manera que quedan todos interrelacionados. Es como el gran catalizador de todo lo que ocurre, de una u otra forma siempre está presente […] <br><br> Parece que fue a partir del 760 a.C. cuando comenzaron a fundarse las primeras colonias griegas en el sur de la Península Itálica y Sicilia […] La materialización de estas relaciones fue el inicio de la creación de vías terrestres y marítimas […] Las corrientes marítimas y los vientos favorecieron el contacto en diversas direcciones […] <br><br> El Imperio romano es la única experiencia política que unifica todo el Mediterráneo, por tanto su significado histórico es inmenso. Como tal imperio utiliza como último recurso la fuerza para lograr su objetivo de mantener la unidad política que, en definitiva, garantiza el control de los recursos por la aristocracia gobernante. Pero otros elementos tales como la diplomacia, los intercambios y la interculturalidad son esenciales, nos atreveríamos a decir que imprescindibles, para mantener la unidad con el menor gasto posible […]<p class=\"ReferenceInformationExercise\">Muñoz, F. (2006) La trama mediterránea. Sobre los orígenes históricos del Mediterráneo (y de Europa). <br> Recuperado de <br><small> http://www.ugr.es/~fmunoz/documentos/EuropaMu%C3%B1oz2a.pdf</small></p></p>");
        }else{
            $(".force-overflow").append("Griegos, romanos y el Mediterráneo II<p class=\"scrollbar1\">El cosmos, el orden latente en el universo, era un enigma para la mitología griega; un lugar sometido a las veleidades de los dioses omnipotentes. El Mediterráneo estaba repleto de monstruos marinos y dioses furibundos que desencadenaban tormentas. El mar era un lugar de perdición, pero la invitación al viaje resultaba irresistible para muchos, especialmente para los pueblos ribereños. La Esfinge, un demonio con rostro de mujer y cuerpo de león alado, fue enviada a los humanos por los dioses. Encaramada en un monte frente a Tebas, planteaba un enigma al caminante cuya solución sólo se podía hallar mediante la reflexión. El pensamiento constituía la herramienta para enfrentarse sin miedo a los misterios del mundo y del ser humano […] <br><br> Del Próximo Oriente a Egipto y de allí a Grecia y más tarde a Roma, el Mediterráneo fue la vía de comunicación de creencias, ideas, conocimientos y formas culturales cuya influencia se extiende hasta nuestros días. El paisaje y la cultura del Mediterráneo siguen siendo hoy una referencia universal […]<p class=\"ReferenceInformationExercise\">Pasado, presente y futuro del Mare Nostrum. (26 de noviembre de 2015) National Geographic. <br> Recuperado de<br><small> http://www.nationalgeographic.com.es/articulo/historia/actualidad/9090/pasado_presente_futuro_del_mare_nostrum.html</small></p></p>");
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
