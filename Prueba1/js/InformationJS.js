$(document).ready(function(){
numberImage = $('.bxslider').bxSlider({
   mode: 'fade',
   auto: true,
   autoControls: true,
   pause: 600000,

 onSlideNext: function(){
  if( numberImage.getCurrentSlide()=="0"){
   $("#idInformationImage").empty();
   $("#idInformationImage").append(informationImage1);
  }else if( numberImage.getCurrentSlide()=="1"){
   $("#idInformationImage").empty();
   $("#idInformationImage").append(informationImage2);
  }else if( numberImage.getCurrentSlide()=="2"){
   $("#idInformationImage").empty();
   $("#idInformationImage").append(informationImage3);
  }
 },

onSlidePrev:function(){
    if( numberImage.getCurrentSlide()=="0"){
        $("#idInformationImage").empty();
        $("#idInformationImage").append(informationImage1);
    }else if( numberImage.getCurrentSlide()=="1"){
        $("#idInformationImage").empty();
        $("#idInformationImage").append(informationImage2);
    }else if( numberImage.getCurrentSlide()=="2"){
        $("#idInformationImage").empty();
        $("#idInformationImage").append(informationImage3);
    }
}
});

    $("#idInformationImage").empty();
});