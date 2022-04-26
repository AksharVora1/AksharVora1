$(document).ready(function(){
	marketingSlider();
  mainSliderfunction();
	testimonialSlider();
	cultureSlider();
	testimonialSliderv2();
	aboutSlider()
	logoSlider();
	quoteSlider();
	specialSlider();
	qtestiSlider();
});
$(document).ready(function() {
	$(".sidebar-widget h3").on("click" , function(){
		$(this).next("div").slideToggle('slow');
	})
	$(".more-box > a ").on("click" , function(){
		$(this).parents(".more-box").toggleClass("active");
	})
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
  $("body").on("click" , ".nav-item .fas" , function(){
    $(this).next(".sub-nav").slideToggle();
  })
});

 
$(window).on("load" , function(){
  
	if($(window).width() < 980){
		$('.nav-wrap .nav-tabs li').hide();
		$('.nav-wrap .nav-tabs  .active').parents("li").show();
	}
	$('body').on("click" , ".next-step" , function(){
	$('.nav-wrap .nav-tabs  .active').parents('li').next('li').find('a').trigger('click');
	if($(window).width() < 980){
		$('.nav-wrap .nav-tabs li').hide();
		$('.nav-wrap .nav-tabs  .active').parents("li").show();
	}
	});


	$('body').on("click" , ".prev-step" , function(){
	$('.nav-wrap .nav-tabs  .active').parents('li').prev('li').find('a').trigger('click');
	if($(window).width() < 980){
		$('.nav-wrap .nav-tabs li').hide();
		$('.nav-wrap .nav-tabs  .active').parents("li").show();
	}
	});
})


function mainSliderfunction(){


	var navs = ['01', '02', '03']
	var mySwiper = new Swiper ('.hero-slider', 
		
	{
			loop: true,
			speed: 1500,
			autoplay: {
			  delay: 5000,
			},

	    pagination: {
	      el: '.hero-slider .swiper-pagination',
				clickable: true,
	        renderBullet: function (index, className) {
	          return '<span class="' + className + '">' + (navs[index]) + '</span>';
	        },
	    },

	    navigation: {nextEl: '.hero-slider  .swiper-button-next',prevEl: '.hero-slider  .swiper-button-prev',
	    },
	     
	     
  })
}
jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 520) < offset) {
        $animatable.removeClass('animatable').addClass('animate__animated ');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

function qtestiSlider(){
	var swiper = new Swiper(".testi-sliders", {
		slidesPerView: 1,
		speed: 2500,
		loop: true,
		autoplay: false,
        navigation: {
	        nextEl: '.testi-sliders .swiper-button-next',
	        prevEl: '.testi-sliders .swiper-button-prev',
	      },
      });
}
function quoteSlider(){
	var swiper = new Swiper(".quote-slider", {
		slidesPerView: 1,
		speed: 2500,
		loop: true,
		effect: 'fade',
		autoplay: false,
        navigation: {
	        nextEl: '.why-choose-us .swiper-button-next',
	        prevEl: '.why-choose-us .swiper-button-prev',
	      },
      });
}
function logoSlider(){
	var logoSwiper = new Swiper('.logo-slider', {
			effect: '',
			loop: true,
			speed: 1000,
			slidesPerView: 5,
			spaceBetween: 30,
			autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }
	 });
}

function testimonialSlider(){
	var mySwiper2 = new Swiper('.clients-slider', {
			effect: '',
			loop: true,
			speed: 100,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".clients-testimonial .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }
	 });
}

function specialSlider(){
	var kaSwiper1 = new Swiper ('#ka-swiper1', {
	  pagination: '.swiper-pagination',
	  loop:true,
		  paginationClickable: true,
		  centeredSlides: true,
		  slidesPerView: 1.5,
		  spaceBetween : 50,
		  autoHeight: true,
		  effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        },
		  breakpoints :{
		    768:{
		      spaceBetweenSlides: 10
		    }
		  },
		   pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		  onSlideChangeEnd:function(e){
		    kaSwiper1.update(true);
		  }
		 
	});

}
function portfolioSlider(){
	var mySwiper3 = new Swiper('.porfolio-slider', {
			effect: '',
			loop: true,
			speed: 100,
			slidesPerView: 3,
			spaceBetween: 0,
			autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".portfolio-section .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }
	 });
}
function portfolioSlider2(){
	var mySwiper3 = new Swiper('.porfolio-slider', {
			effect: '',
			loop: true,
			speed: 100,
			slidesPerView: 3,
			spaceBetween: 0,
			watchSlidesVisibility: true,
			autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },  
        breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }
	 });
}

function cultureSlider(){
	var mySwiper3 = new Swiper('.culture-slider', {
			effect: '',
			loop: true,
			speed: 100,
			slidesPerView: 4,
			spaceBetween: 30,
			navigation: {
        nextEl: '.our-culture .swiper-button-next',
        prevEl: '.our-culture .swiper-button-prev',
      },
			autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
        520: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        820: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1250: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
	 });

	$(".culture-slider").mouseenter(function() {
    mySwiper3.autoplay.stop();
    console.log('slider stopped');
  });

  $(".culture-slider").mouseleave(function() {
    mySwiper3.autoplay.start();
    console.log('slider started again');
  });
}

function testimonialSliderv2(){
	var testimonialSliderv2 = new Swiper('.testimonial-v2-slider', {
			effect: '',
			loop: true,
			speed: 100,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".testimonial-v2-slider .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }
	 });
}
function marketingSlider(){
	var swiper = new Swiper(".marketSwiper", {
		speed: 1500,
		loop: true,
		autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".marketSwiper .swiper-pagination",
           clickable: true,
        },
      });
}

function aboutSlider(){
	var aboutswiper = new Swiper(".aboutSwiper", {
		speed: 1500,
		loop: true,
		slidesToShow: 1,
	  slidesToScroll: 1,
		autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      });
}
// function wwdSliders(){
// 	 $('.slick-wwd').slick({
	  
// 	  arrows: false,
// 	  fade: false,
// 	   autoplay: false,
//   	autoplaySpeed: 4000,
// 	});
// }
function testimonialSliders(){
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: false,
	  asNavFor: '.slider-nav',
	   autoplay: true,
  	autoplaySpeed: 4000,
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  infinite: true,
	  autoplay: true,
  	autoplaySpeed: 4000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
	});
}