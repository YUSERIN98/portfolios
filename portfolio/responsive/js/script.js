$(document).ready(function () {
   $('.menu_bar > li').on('mouseenter',function(){
      $(this).children('.subMenu').stop().slideDown(); 
   }); 
    
   $('.menu_bar > li').on('mouseleave',function () {
      $(this).children('.subMenu').stop().slideUp(); 
   });

    var swiper1 = new Swiper(".slide1", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop:true,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.slide1 .paging',
        clickable: true,
      },
      navigation: {
        nextEl: '.slide1 .next',
        prevEl: '.slide1 .prev',
      },


    });

     var swiper1 = new Swiper('.boardSwiper', {
      spaceBetween: 0,
        loop:true,
      centeredSlides: true,
        slidesPerView:'1',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.boardSwiper .paging',
        clickable: true,
      },
      navigation: {
        nextEl: '.slide1 .next',
        prevEl: '.slide1 .prev',
      },
    });
   

     var swiper1 = new Swiper('.bannerSwiper', {
      spaceBetween: 3,
        loop:true,
      centeredSlides: true,
        slidesPerView:'6',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.bannerSwiper .paging',
        clickable: true,
      },
      navigation: {
        nextEl: '.slide1 .next',
        prevEl: '.slide1 .prev',
      },
    });
   

/*sub_history*/
$('.tab li').on('click',function () {
    var idx = $(this).index();
    
  $(this).addClass('active').siblings().removeClass('active');
  $(this).parents('.tab-box').nextAll('.content').eq(idx).addClass('on');
  $(this).parents('.tab-box').nextAll('.content').eq(idx).siblings('.content').removeClass('on');
});


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    





});