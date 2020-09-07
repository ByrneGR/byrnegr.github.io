/*
   
    Template Name : Rolling - Freelancer Portfolio Template
    Author : UiPasta Team
    Website : http://www.uipasta.com/
    Support : http://www.uipasta.com/support/
	
	
*/



/*
   
   Table Of Content
   
   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Typed.js
   7. Parallax Background
   8. Portfolio Filtering
   9. Magnific Popup
  10. Testimonial Carousel/Slider
  11. Statistics Counter
  12. Google Map
 

*/


(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        
       /* Preloader */
		
        $(window).on('load', function() {
          $('body').addClass('loaded');
        });
		
		
		
       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
		
		
		
		
       /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });
		 
		
		
		
        /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });
		
		
		
		
        /* Typed.js */
		
        $(window).load(function(){
        $(".typing").typed({
            strings: ["I am A Freelancer.", "I Design Websites.", "I Live in New York."],    /* You can change the home section typing text from
	                                                                                            here and do not use "&" use "and" */
            typeSpeed: 50
          });
         });
        
		 
        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });

        
		
		
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();


       
        /* Magnific Popup */

        // $('.portfolio-popup').magnificPopup({
        //     type: 'image',
			
        //     gallery: { enabled: true },
		// 	zoom: { enabled: true,
		// 	        duration: 500
					
        //   },
		  
        //  image:{
        //        markup: '<div class="mfp-figure portfolio-pop-up">'+
        //        '<div class="mfp-close"></div>'+
        //        '<div class="mfp-img"></div>'+
        //        '<div class="mfp-bottom-bar portfolio_title">'+
        //        '<div class="mfp-title"></div>'+
        //        '<div class="mfp-counter"></div>'+
        //        '</div>'+
        //        '</div>',

        //        titleSrc:function(item){
        //         return item.el.attr('title');
        //       }
        //     }
		  
		  
        //   });

        //project popups
        $('.portfolio-popup-windygogo').magnificPopup({
            items: {
                src: '<div class="white-popup"><h1 class="portfolio-popup-title" id="chillsesion_title">Windygogo</h1><span>Clone of crowdfunding site, indiegogo.com, replicating its core features: <br></br> <ul id="windygogo_list"><li>Campaign creation</li><li>Campaign contributions</li><li>User profiles</li></ul></span><br><a target="_blank" href="https://aa-windygogo.herokuapp.com/#/home">Live Link </a><br><a target="_blank" href="https://github.com/ByrneGR/Full-Stack---WindyGoGo">Github</a><br></br><img src="../images/portfolio/windygogo1.png"></div>',
                type: 'inline'
            },
            closeBtnInside: true
        });

        $('.portfolio-popup-chillsession').magnificPopup({
            items: {
                src: '<div class="white-popup"><h1 class="portfolio-popup-title" id="chillsesion_title">ChillSession</h1><span>Audio visualizer and social network for music enthusiasts</span><br></br><a target="_blank" href="https://byrnegr.github.io/hotairballoons/">Live Link </a><span id="chromerec">(works best on Chrome)</span><br><a target="_blank" href="https://github.com/ByrneGR/hotairballoons">Github</a><br></br><img src="../images/portfolio/chillsession.png"></div>',
                type: 'inline'
            },
            closeBtnInside: true
        });

        $('.portfolio-popup-fmp').magnificPopup({
            items: {
                src: '<div class="white-popup"><h1 class="portfolio-popup-title" id="chillsesion_title">Find My Pawrents</h1><span>Backend Lead for MERN stack application that simplifies the adoption process for dog shelters and pet seekers</span><br></br><a target="_blank" href="http://www.findmypawrents.com/#/">Live Link </a><br><a target="_blank" href="https://github.com/DanielGuardado/Find-my-Pawrents">Github</a><br></br><img src="../images/portfolio/findmypawrents1.png"></div>',
                type: 'inline'
            },
            closeBtnInside: true
        });

        //work popups
        $('.work-popup-industrious').magnificPopup({
            items: {
                src: '<div class="white-popup"><a target="_blank" href="https://industriousoffice.com"><h1 class="portfolio-popup-title" id="chillsesion_title">Industrious</h1><p id="job-years">Aug 2018 - Apr 2020</p></a><span><ul id="windygogo_list"><li>Led company digital marketing strategy and execution, increasing paid digital leads by 56% HoH in 2019, resulting in a 118% increase in sales<br></br></li><li>Oversaw search engine optimization, managing initiatives related to website optimization, external link building and content strategy, resulting in a 28% increase in organic website traffic YoY</li><br><li>Collaborated with analytics team to build marketing attribution system and Tableau reporting infrastructure to measure ROI of campaign efforts</li></ul></span><br></div>',
                type: 'inline'
            },
            closeBtnInside: true
        });    

        $('.work-popup-ampush').magnificPopup({
            items: {
                src: '<div class="white-popup"><a target="_blank" href="https://ampush.com"><h1 class="portfolio-popup-title" id="chillsesion_title">Ampush</h1></a><p id="job-years">Aug 2015 - Oct 2017</p><span><ul id="windygogo_list"><li>Built, managed, and optimized media campaigns across paid digital channels for clients, which included: University of Phoenix, StubHub, TuneIn, DocuSign, Xoom (a Paypal company)<br></br></li><li>Managed $12MM in annual ad spend, performing Excel analyses to determine profitable budget allocations</li><br><li>Founded and led company product marketing group that partnered with the Ampush Product + Engineering teams to develop promotional initiatives and improve product adoption for internal and external stakeholders</li></ul></span><br></div>',
                type: 'inline'
            },
            closeBtnInside: true
        });     

        $('.work-popup-statestreet').magnificPopup({
            items: {
                src: '<div class="white-popup"><a target="_blank" href="https://www.statestreet.com/home.html"><h1 class="portfolio-popup-title" id="chillsesion_title">State Street</h1></a><p id="job-years">Jan 2013 - Jan 2014</p><span><ul id="windygogo_list"><li>Screened and processed 60-80 transactions daily, including securities, derivatives, and foreign exchange trades for large variety of banks and investment groups<br></br></li><li>Nominated to design and implement 3 day training program for new manager on department’s operations and procedures because of personal success rate and excellent communication skills</li><br></ul></span><br></div>',
                type: 'inline'
            },
            closeBtnInside: true
        });        




       
		 
        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: false,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "backSlide"
        });
		
		
		
		
        /* Statistics Counter */
		
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });
		   
		  
         
         /* Google Map */
		 
         $('#my-address').gMap({
            zoom: 5,
            scrollwheel: true,
            maptype: 'ROADMAP',
            markers:[
            {
            address: "New York",  /* You can change your address from here */
            html: "<b>Address</b>: <br> Area-2, Rose Area, New York, U.S.A.",   /* You can change display address text from here */
            popup: true
            }
            ]
            });
              
		   
            });

   })(jQuery);