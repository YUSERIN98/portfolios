$(document).ready(function(){
   $('.nav button').on('click',function(){
      var idx = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      if( idx == 0){
          $('.frame').css('width','100%');
      }else if( idx == 1){
          $('.frame').css('width','500px');
      }else if( idx == 2){
          $('.frame').css('width','1024px');
      }
       
   }); 


   $('header a').on('click',function(){
      $(this).addClass('turn_on').siblings().removeClass('turn_on'); 
   });


















});










