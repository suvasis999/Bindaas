/*==================================
Template Name: KHANA 
Description: KHANA is One Page Restaurant HTML5 Template
Author: Mohammad Saifur Rahman
Version: 1.0
====================================*/ 

/* INDEX
--------------------------------------
0. Home Slider
1. Menu List Slider
2. Video Testimonial Slider
3. Owl Filter
4. Magnific Popup
5. Masonry
6. Date Picker
7. Slick Nav
8. Preloader
9. Google Map
10. BOTTOM SCROLL TOP BUTTON
11. Smooth Scroll Down 
12. ScrollIT - Menu Color Change
---------------------------------------- */

;(function($){
	"use strict";
	
	jQuery(document).ready(function($){
        
        /*==============================
          Home Slider
        ================================*/
        var $main_slider = $('.slider-area');
        $main_slider.owlCarousel({
            loop:true,
            nav:true,
            items:1,
            autoplay:false,
            dots: false,
            navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        });
        
        
        /*==============================
          Menu List Slider
        ================================*/
        var owl = $('.menu-slider').owlCarousel({
            loop    :true,
            margin  :15,
            items   : 3,
            nav     :true,
            autoplay:true,
            dots: false,
            navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                768:{
                    items: 2
                },
                992:{
                    items: 2
                },
                1200:{
                    items: 3
                }

            }
            
        }); 

        /*==============================
          Video Testimonial Slider
        ================================*/
        var $testimonial_slider = $('.video-testimonial-slider');
        $testimonial_slider.owlCarousel({
            loop    :true,
            margin  :15,
            items   : 1,
            nav     :true,
            autoplay:true,
            dots: false,
            navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        }); 
        
        
        /*==============================
          Owl Filter
        ================================*/
        var owlAnimateFilter = function(even) {
            $(this)
            .addClass('__loading')
            .delay(70 * $(this).parent().index())
            .queue(function() {
                $(this).dequeue().removeClass('__loading')
            })
        };

        $('.menu-item-list').on('click', '.filter-btn', function(e) {
            var filter_data = $(this).data('filter');

            /* return if current */
            if($(this).hasClass('btn-active')) return;

            /* active current */
            $(this).addClass('btn-active').siblings().removeClass('btn-active');

            /* Filter */
            owl.owlFilter(filter_data, function(_owl) { 
                $(_owl).find('.item').each(owlAnimateFilter); 
            });
        });
        
        /*==============================
          Magnific Popup
        ================================*/
        var $mgpopup = $('.play-btn');
        $mgpopup.magnificPopup({
            type:'video'
        });
        
        /*==============================
          Masonry
        ================================*/
        var $f_gallary = $('.food-gallery');
        $f_gallary.masonry({
            itemSelector: '.single-food',
            percentPosition: true
        });
        
        
        /*==============================
          Date Picker
        ================================*/
        var $datePicker = $('#datepicker');
        $datePicker.datepicker();
        
        
        /*==============================
        Slick Nav
        ================================*/
        var $ourmenu = $('#ourmenu');
        $ourmenu.slicknav();
        
        
        
        
        /*==============================
            BOTTOM SCROLL TOP BUTTON
        ================================*/ 
        var scrollTop = $(".scrollTop");
        $(window).scroll(function() {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
              $(scrollTop).css("opacity", "1");

            } else {
              $(scrollTop).css("opacity", "0");
            }

        });
        $(scrollTop).on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        
        
        /*==============================
            Smooth Scroll Down
        ================================*/ 
        $("a").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();

              var hash = this.hash;

              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
                window.location.hash = hash;
              });
            }
        });
        
        
        /*==============================
            ScrollIT - Menu Color Change
        ================================*/ 
        $.scrollIt({
            easing: 'swing',      
            scrollTime: 900,       
            activeClass: 'active',
            onPageChange: null,  
            topOffset: -70,
            upKey: 38,              
            downKey: 40
          });
        
        $(window).scroll(function() {
          var sticky = $('.header-area'),
            scroll = $(window).scrollTop();

          if (scroll >= 100) sticky.addClass('fixed');
          else sticky.removeClass('fixed');
        });
        
	});
        
        
    /*==============================
        Preloader
    ================================*/ 
	jQuery(window).on('load', function() { 
      $('#status').fadeOut(); 
      $('#preloader').delay(350).fadeOut('slow'); 
      $('body').delay(350).css({'overflow':'visible'});
    })
	
	
}(jQuery));
