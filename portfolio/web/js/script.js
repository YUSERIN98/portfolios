$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})

$(document).ready(function () {
    var swiper = new Swiper(".storySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})


$(document).ready(function () {
      var swiper = new Swiper(".modelSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
//        autoplay: {delay: 2500,
//                  disableOnInteraction: false,
//                  },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})



//header
$(document).ready(function(){
     $('.gnb li').on('mouseenter',function(){
         $(this).children('.subMenu').stop().slideDown(300);
         $(this).siblings('li').children('.subMenu').stop().slideUp(300);
     });
    
    $('.gnb li').on('mouseleave',function(){
         $(this).children('.subMenu').stop().slideUp(300);
     }); 
 
});



//sub_FAQ
//FAQ-list
$(document).ready(function(){
   $('.question').on('click',function(){
       $(this).parents('li').children('.answer').slideToggle().css('background','rgba(237, 237, 237, 0.84)');
   });
   
 
    $('.question').on('click',function() {
        $(this).parents('li').siblings('li').children('.answer').slideUp();
    }); 
    

    });






















