$(document).ready(function () {
    var swiper = new Swiper(".visualSwiper", {
        pagination: {
        el: ".swiper-pagination",
        },
        autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
      });

    var swiper = new Swiper(".newSwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });

    var swiper = new Swiper(".shirtSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });

     var swiper = new Swiper(".beagleSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });

    var swiper = new Swiper(".joggerSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });

    var swiper = new Swiper(".mentomenSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    var swiper = new Swiper(".colorviewSwiper", {
        slidesPerView: "4",
        spaceBetween: 2,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });

     var swiper = new Swiper(".recommendSwiper", {
        slidesPerView: "3",
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });


//popup

   $('.top_bar .menu').on('click', function(){
      $('.dimmed').fadeIn();
      $('.popup').animate({
         left:0 
      });
      $('body').css('overflow',"hidden");
   });
    
   $('.close').on('click', function(){
      $('.dimmed').fadeOut();
      $('.popup').animate({
         left: '-' + 80 + '%'
      });
      $('body').css('overflow','auto');
   });
    
   $('.category > li > button').on('click', function(){
       $(this).next('.subMenu').slideToggle();
       $(this).parents('li').siblings('li').children('.subMenu').slideUp();
   });  
    
   $('.subMenu > li > button').on('click',function(){
      $(this).next('.sub2dep').slideToggle();
       $(this).parent('li').siblings('li').children('.sub2dep').slideUp();
      
    });
    
    $('.up').on('click',function(){
        $('html').animate({
           scrollTop:0 
        }); 
    });





});









