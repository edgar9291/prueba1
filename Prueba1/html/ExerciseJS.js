/**
 * Created by EDBE on 18/12/2015.
 */
$(document).ready(function(){
    if(($("#idVarGlobal").text()=="1") || ($("#idVarGlobal").text()=="2")){ //Roma
        $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseSpace.png)");
        $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseTime.png)");
        $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseUnderstanding1.png)");
        $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseUnderstanding2.png)");
        $("#idClickSpaceExerciseSelected").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseSpaceSelected.png)");
        $("#idClickTimeExerciseSelected").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseSpaceSelected.png)");
        $("#idClickUnderstending1Selected").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseTimeSelected.png)");
        $("#idClickUnderstending2Selected").css("background-image", "url(css/images/ImageSantillana/IconRomaExerciseUnderstanding2Selected.png)");
        $("#idDivInformationStudentAsk").css("background-color", "#506E3F");
        if($("#idVarGlobal").text()=="1"){
            $(".force-overflow").append("Comercio romano  <p class=\"scrollbar1\">A fines del siglo primero después de Cristo Roma controlaba varias de las más importantes fuentes de grano en el Mediterráneo [...] Roma ya no tenía que depender de la variancia del clima italiano para obtener su suministro de alimento [...] Sistemas de intercambio más y más elaborados se desarrollaron para asegurar que el grano y otros bienes circularan hacia Roma. Mientras Augusto transformaba la ciudad, y grandes palacios se erguían desde el monte Palatino, la demanda por artículos de lujo -sedas, perfumes, marfil del Océano Indico, finas esculturas de Grecia, cristalería, codiciados trabajos en metal provenientes del Mediterráneo oriental - floreció. <p class=\"ReferenceInformationExercise\">Abulafia, D. (2011) The Great Sea: A Human History of the Mediterranean. New York, Oxford University <br> Press. Traducción Propia.</p></p>");
        }else{
            $(".force-overflow").append("Roma y el mar Mediterráneo <br><img class=\"imageExercise\" src=\"css/images/RomaImageExercise.png\"/>  <p class=\"scrollbar1\"> <p class=\"ReferenceInformationExerciseImage\">Detalle del mosaico romano de Lod, Israel. (S. III-S.IV d. C.). Carole Raddato. Flickr</p><p class=\"scrollbar1\">Se cree que este mosaico pertenecería a la pared de una casa romana, ubicada en la provincia romana de Judea.</p></p>");
        }
    }else if(($("#idVarGlobal").text()=="3") || ($("#idVarGlobal").text()=="4")){//Grecia
        $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseSpace.png)");
        $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseTime.png)");
        $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseUnderstanding1.png)");
        $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseUnderstanding2.png)");
        $("#idClickSpaceExerciseSelected").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseSpaceSelected.png)");
        $("#idClickTimeExerciseSelected").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseSpaceSelected.png)");
        $("#idClickUnderstending1Selected").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseTimeSelected.png)");
        $("#idClickUnderstending2Selected").css("background-image", "url(css/images/ImageSantillana/IconGreciaExerciseUnderstanding2Selected.png)");
        $("#idDivInformationStudentAsk").css("background-color", "#9C3535");
        if($("#idVarGlobal").text()=="3"){
            $(".force-overflow").append("Comerciantes y navegantes<p class=\"scrollbar1\">Por otra parte, mi propio padre puso en práctica y me enseñó a mí el método más eficaz para ganar dinero con la agricultura, si se es capaz de poner interés y de trabajar la tierra con empeño [...] Porque mi padre, Sócrates, era en mi opinión un apasionado por la agricultura, más que ningún otro ateniense […] <br><br> Los comerciantes, en efecto, por su intensa pasión por el trigo, dondequiera que oyen que hay más, allí navegan en su busca, surcando el mar Egeo, el Ponto Euxino y el mar de Sicilia. A continuación se hacen con la mayor cantidad posible y lo llevan a través del mar, cargándolo incluso en el mismo barco en el que ellos navegan. Y cuando necesitan dinero, no se deshacen de él a la buena de dios y en cualquier lugar en que se encuentres, sino donde oyen que el trigo tiene un valor mayor y goza de más estima, allí lo llevan y se lo entregan a sus habitantes. <p class=\"ReferenceInformationExercise\">Jenofonte. (S. IV a.C.) Económico. Madrid, España. Gredos.</p></p>");
        }else{
            $(".force-overflow").append("La presencia del mar <br><img class=\"imageExercise\" src=\"css/images/GreciaImageExercise.png\"/>  <p class=\"scrollbar1\"> <p class=\"ReferenceInformationExerciseImage\">Exekias. (540-530 a.C.) El vaso de Dionisio [Cerámica]. Munich. Antikensammlungen.</p><p class=\"scrollbar1\">Kylix o vasija para beber vino, representa el viaje mítico de Dionisio, dios de la embriaguez, en una típica nave griega, rodeado de delfines y parras. Su autor, Exekias, vivió en Antenas entre los años 550 a. C. y 525 a. C.</p></p>");
        }
    }else if(($("#idVarGlobal").text()=="5") || ($("#idVarGlobal").text()=="6")){//Mediterraneo
        $("#idClickSpaceExercise").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseSpace.png");
        $("#idClickTimeExercise").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseTime.png)");
        $("#idClickUnderstending1").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseUnderstanding1.png)");
        $("#idClickUnderstending2").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseUnderstanding2.png)");
        $("#idClickSpaceExerciseSelected").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseSpaceSelected.png)");
        $("#idClickTimeExerciseSelected").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseSpaceSelected.png)");
        $("#idClickUnderstending1Selected").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseTimeSelected.png)");
        $("#idClickUnderstending2Selected").css("background-image", "url(css/images/ImageSantillana/IconMediterraneoExerciseUnderstanding2Selected.png)");
        $("#idDivInformationStudentAsk").css("background-color", "#426482");
        if($("#idVarGlobal").text()=="5"){
            $(".force-overflow").append("Griegos, romanos y el Mediterráneo I<p class=\"scrollbar1\">El mar se convierte en determinante, es protagonista de todo lo que ocurre, es medio de vida, transporte y comunicación de las comunidades del entorno. Establece el contacto entre unos puntos y otros del Mediterráneo de tal manera que quedan todos interrelacionados. Es como el gran catalizador de todo lo que ocurre, de una u otra forma siempre está presente […] <br><br> Parece que fue a partir del 760 a.C. cuando comenzaron a fundarse las primeras colonias griegas en el sur de la Península Itálica y Sicilia […] La materialización de estas relaciones fue el inicio de la creación de vías terrestres y marítimas […] Las corrientes marítimas y los vientos favorecieron el contacto en diversas direcciones […] <br><br> El Imperio romano es la única experiencia política que unifica todo el Mediterráneo, por tanto su significado histórico es inmenso. Como tal imperio utiliza como último recurso la fuerza para lograr su objetivo de mantener la unidad política que, en definitiva, garantiza el control de los recursos por la aristocracia gobernante. Pero otros elementos tales como la diplomacia, los intercambios y la interculturalidad son esenciales, nos atreveríamos a decir que imprescindibles, para mantener la unidad con el menor gasto posible […]<p class=\"ReferenceInformationExercise\">Muñoz, F. (2006) La trama mediterránea. Sobre los orígenes históricos del Mediterráneo (y de Europa). <br> Recuperado de <br><small> http://www.ugr.es/~fmunoz/documentos/EuropaMu%C3%B1oz2a.pdf</small></p></p>");
        }else{
            $(".force-overflow").append("Griegos, romanos y el Mediterráneo II<p class=\"scrollbar1\">El cosmos, el orden latente en el universo, era un enigma para la mitología griega; un lugar sometido a las veleidades de los dioses omnipotentes. El Mediterráneo estaba repleto de monstruos marinos y dioses furibundos que desencadenaban tormentas. El mar era un lugar de perdición, pero la invitación al viaje resultaba irresistible para muchos, especialmente para los pueblos ribereños. La Esfinge, un demonio con rostro de mujer y cuerpo de león alado, fue enviada a los humanos por los dioses. Encaramada en un monte frente a Tebas, planteaba un enigma al caminante cuya solución sólo se podía hallar mediante la reflexión. El pensamiento constituía la herramienta para enfrentarse sin miedo a los misterios del mundo y del ser humano […] <br><br> Del Próximo Oriente a Egipto y de allí a Grecia y más tarde a Roma, el Mediterráneo fue la vía de comunicación de creencias, ideas, conocimientos y formas culturales cuya influencia se extiende hasta nuestros días. El paisaje y la cultura del Mediterráneo siguen siendo hoy una referencia universal […]<p class=\"ReferenceInformationExercise\">Pasado, presente y futuro del Mare Nostrum. (26 de noviembre de 2015) National Geographic. <br> Recuperado de<br><small> http://www.nationalgeographic.com.es/articulo/historia/actualidad/9090/pasado_presente_futuro_del_mare_nostrum.html</small></p></p>");
        }
    }
});
