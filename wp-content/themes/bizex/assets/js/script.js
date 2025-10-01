/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function($) {
	
	"use strict";

	var bizex = {
		init: function() {
			this.Basic.init();
		},

		Basic: {
			init: function() {
				this.BackgroundImage();
				this.Animation();
				this.StickyHeader();
				this.MobileMenu();
				this.searchPopUp();
				this.TwinMax();
				this.MainSlider();
				this.scrollTop();
				this.counterUp();
				this.CircleProgress();
				this.SkillProgress();
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			TwinMax: function (){
				var $circleCursor = $(".cursor");

				function moveCursor(e) {
					var t = e.clientX + "px",
					a = e.clientY + "px";
					TweenMax.to($circleCursor, .2, {
						left: t,
						top: a,
						ease: "Power1.easeOut"
					})
				}

				function zoomCursor(e) {
					TweenMax.to($circleCursor, .1, {
						scale: 3,
						ease: "Power1.easeOut"
					}), $($circleCursor).removeClass("cursor-close")
				}

				function closeCursor(e) {
					TweenMax.to($circleCursor, .1, {
						scale: 3,
						ease: "Power1.easeOut"
					}), $($circleCursor).addClass("cursor-close")
				}

				function defaultCursor(e) {
					TweenLite.to($circleCursor, .1, {
						scale: 1,
						ease: "Power1.easeOut"
					}), $($circleCursor).removeClass("cursor-close")
				}
				$(window).on("mousemove", moveCursor),
				$("a, button, .zoom-cursor").on("mouseenter", zoomCursor),
				$(".trigger-close").on("mouseenter", closeCursor),
				$("a, button, .zoom-cursor, .trigger-close, .trigger-plus").on("mouseleave", defaultCursor);
			},

			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.bz-header-section, .bizx-header-section').addClass('sticky-on')
					} else {
						jQuery('.bz-header-section, .bizx-header-section').removeClass('sticky-on')
					}
				});
				jQuery(document).ready(function (o) {
					0 < o(".navSidebar-button").length &&
					o(".navSidebar-button").on("click", function (e) {
						e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
					}),
					0 < o(".close-side-widget").length &&
					o(".close-side-widget").on("click", function (e) {
						e.preventDefault(), o(".info-group").removeClass("isActive");
					}),
					o(".xs-sidebar-widget").on("click", function (e) {
						e.stopPropagation();
					})
				});

				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.bzx-header-section').addClass('sticky-on')
					} else {
						jQuery('.bzx-header-section').removeClass('sticky-on')
					}
				});
				jQuery(document).ready(function (o) {
					0 < o(".navSidebar-button").length &&
					o(".navSidebar-button").on("click", function (e) {
						e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
					}),
					0 < o(".close-side-widget").length &&
					o(".close-side-widget").on("click", function (e) {
						e.preventDefault(), o(".info-group").removeClass("isActive");
					}),
					o(".xs-sidebar-widget").on("click", function (e) {
						e.stopPropagation();
					})
				});
				
			},
			MobileMenu: function (){
				$('.open_mobile_menu').on("click", function() {
					$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.mobile_menu li.dropdown ul').length){
					$('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="far fa-arrow-right"></span></div>');
					$('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
				$('.zoom-gallery').magnificPopup({
					delegate: 'a',
					type: 'image',
					closeOnContentClick: false,
					closeBtnInside: false,
					mainClass: 'mfp-with-zoom mfp-img-mobile',
					gallery: {
						enabled: true
					},
					zoom: {
						enabled: true,
						duration: 300, 
						opener: function(element) {
							return element.find('img');
						}
					}
				});
			},
			counterUp: function (){
				$('.counter').counterUp({
					delay: 15,
					time: 1500,
				});
			},
			searchPopUp: function (){
				$('.search-btn').on('click', function() {
					$('.search-body').toggleClass('search-open');
				});
			},
			MainSlider: function (){
				var	tpj = jQuery;
				if(window.RS_MODULES === undefined) window.RS_MODULES = {};
				if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
				RS_MODULES.modules["revslider251"] = {once: RS_MODULES.modules["revslider251"]!==undefined ? RS_MODULES.modules["revslider251"].once : undefined, init:function() {
					window.revapi25 = window.revapi25===undefined || window.revapi25===null || window.revapi25.length===0  ? document.getElementById("rev_slider_25_1") : window.revapi25;
					if(window.revapi25 === null || window.revapi25 === undefined || window.revapi25.length==0) { window.revapi25initTry = window.revapi25initTry ===undefined ? 0 : window.revapi25initTry+1; if (window.revapi25initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider251"].init()}); return;}
					window.revapi25 = jQuery(window.revapi25);
					if(window.revapi25.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_25_1"); return;}
					revapi25.revolutionInit({
						revapi:"revapi25",
						DPR:"dpr",
						sliderLayout:"fullwidth",
						visibilityLevels:"1240,1024,778,480",
						gridwidth:"1350,1024,778,480",
						gridheight:"980,768,600,550",
						perspective:600,
						perspectiveType:"global",
						editorheight:"980,768,600,550",
						responsiveLevels:"1240,1024,778,480",
						progressBar:{disableProgressBar:true},
						navigation: {
							wheelCallDelay:1000,
							onHoverStop:false,
							arrows: {
								enable:true,
								style:"hesperiden",
								left: {
									h_align:"right",
									v_align:"bottom",
									h_offset:180,
									v_offset:50
								},
								right: {
									v_align:"bottom",
									h_offset:120,
									v_offset:50
								}
							}
						},
						viewPort: {
							global:false,
							globalDist:"-200px",
							enable:false
						},
						fallbacks: {
							allowHTML5AutoPlayOnAndroid:true
						},
					});

				}} 
				if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
			},
			CircleProgress: function (){
				if($('.count-box').length){
					$('.count-box').appear_c(function(){
						var $t = $(this),
						n = $t.find(".count-text").attr("data-stop"),
						r = parseInt($t.find(".count-text").attr("data-speed"), 10);
						if (!$t.hasClass("counted")) {
							$t.addClass("counted");
							$({
								countNum: $t.find(".count-text").text()
							}).animate({
								countNum: n
							}, {
								duration: r,
								easing: "linear",
								step: function() {
									$t.find(".count-text").text(Math.floor(this.countNum));
								},
								complete: function() {
									$t.find(".count-text").text(this.countNum);
								}
							});
						}
					},{accY: 0});
				};
				if($('.dial').length){
					$('.dial').appear_c(function(){
						var elm = $(this);
						var color = elm.attr('data-fgColor');  
						var perc = elm.attr('value'); 
						var thickness = elm.attr('thickness');  
						elm.knob({ 
							'value': 0, 
							'min':0,
							'max':100,
							'skin':'tron',
							'readOnly':true,
							'thickness':.10,
							'dynamicDraw': true,
							'displayInput':false
						});
						$({value: 0}).animate({ value: perc }, {
							duration: 4500,
							easing: 'swing',
							progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
						}
					});
					},{accY: 0});
				}
			},
			SkillProgress: function (){
				if ($(".progress-bar").length) {
					var $progress_bar = $('.progress-bar');
					$progress_bar.appear();
					$(document.body).on('appear', '.progress-bar', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');
							current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
						}
						
					});
				};
			},
		}
	}
	var $grid = $('.grid').imagesLoaded( function() {
		$grid.masonry({
			percentPosition: true,
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer'
		}); 
	});
	var $grid = $(".grid").isotope({
		itemSelector: ".grid-item",
		layoutMode: "fitRows"
	});
	var filterFns = {
		numberGreaterThan50: function() {
			var number = $(this)
			.find(".number")
			.text();
			return parseInt(number, 10) > 50;
		},
		ium: function() {
			var name = $(this)
			.find(".name")
			.text();
			return name.match(/ium$/);
		}
	};
	$(".button-group").on("click", "button", function() {
		var filterValue = $(this).attr("data-filter");
		filterValue = filterFns[filterValue] || filterValue;
		$grid.isotope({ filter: filterValue });
	});

	$(".button-group").each(function(i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on("click", "button", function() {
			$buttonGroup.find(".is-checked").removeClass("is-checked");
			$(this).addClass("is-checked");
		});
	});
	function testimonialTwoActive($scope, $) {
		$('.bz-testimonial-slider-2').slick({
			arrow: false,
			dots: false,
			loop: false,
			infinite: false,
			slidesToShow: 3,
			autoplay: true,
			slidesToScroll: 1,
			variableWidth: true,
			prevArrow: ".testi-left_arrow",
			nextArrow: ".testi-right_arrow",
			responsive: [
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					variableWidth: false,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					variableWidth: false,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					variableWidth: false,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: false,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					variableWidth: false,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				}
			}

			]
		});
	}

	function journeyCarouselActive($scope, $) {
		$('.bz-journey-slider').slick({
			arrow: false,
			dots: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,	
			focusOnSelect: true,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}

			]
		});
	}
	function bizxSponsroScollBar($scope, $) {
		$('.bizx-sponsor-scroller').marquee({
			speed: 50,
			gap: 20,
			delayBeforeStart: 0,
			direction: 'left',
			duplicated: true,
			pauseOnHover: true,
			startVisible:true,
		});
	}
	function sponsorSliderTwoActive($scope, $) {
		$('.bzx-sponsor-slider').slick({
			arrow: false,
			dots: false,
			loop: true,
			infinite: true,
			slidesToShow: 5,
			autoplay: true,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
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
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

			]
		});
	}
	function mainSliderTwo($scope, $) {
		$('.bz-main-slider-2').slick({
			arrow: false,
			dots: true,
			loop: true,
			fade: true,
			infinite: true,
			slidesToShow: 1,
			autoplay: true,
			slidesToScroll: 1,
			prevArrow: ".bz_main_left_arrow",
			nextArrow: ".bz_main_right_arrow",
		});
	}

	function testimonialOneActive($scope, $) {
		$('.bz-testimonial-slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.bz-testimonial-slider-nav'
		});
		$('.bz-testimonial-slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.bz-testimonial-slider-for',
			dots: true,
			centerMode: true,
			focusOnSelect: true,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

			]
		});
	}

	function sponsorSliderActive($scope, $) {
		$('.bz-sponsor-slider').slick({
			arrow: false,
			dots: false,
			loop: true,
			infinite: true,
			slidesToShow: 5,
			autoplay: true,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}

			]
		});
	}
	function teamSliderActive($scope, $) {
		$('.bz-team-slider').slick({
			arrow: false,
			dots: false,
			loop: false,
			infinite: false,
			slidesToShow: 3,
			autoplay: true,
			slidesToScroll: 1,
			variableWidth: true,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

			]
		});
	}
	function blogSliderThreeActive($scope, $) {
		$('.bzx-blog-slider').slick({
			arrow: true,
			dots: false,
			loop: false,
			infinite: false,
			slidesToShow: 3,
			autoplay: false,
			slidesToScroll: 1,
			variableWidth: true,
			prevArrow: ".bzx_blg_left_arrow",
			nextArrow: ".bzx_blg_right_arrow",
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

			]
		});
	}
	function testimonialThreeActive($scope, $) {
		$('.bzx-testimonial-slider').slick({
			arrow: true,
			dots: false,
			loop: false,
			infinite: false,
			slidesToShow: 3,
			autoplay: false,
			slidesToScroll: 1,
			prevArrow: ".bzx_testi_left_arrow",
			nextArrow: ".bzx_testi_right_arrow",
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

			]
		});
	}

	function projectSlideActive($scope, $) {
		$('.bzx-project-slider').slick({
			arrow: true,
			dots: false,
			loop: false,
			infinite: false,
			slidesToShow: 4,
			autoplay: false,
			slidesToScroll: 1,
			variableWidth: true,
			prevArrow: ".bzx_project_left_arrow",
			nextArrow: ".bzx_project_right_arrow",
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

			]
		});
	}

	function bizexSponsorSliderThree($scope, $) {
		$('.bizx-sponsor-slider').slick({
			arrow: false,
			dots: false,
			loop: true,
			speed: 1000,
			infinite: true,
			slidesToShow: 5,
			autoplay: true,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}

			]
		});
	}

	function teamCarouselTwoActive($scope, $) {
		$('.bizx-team-slider').slick({
			arrow: true,
			dots: false,
			loop: false,
			infinite: true,
			slidesToShow: 3,
			autoplay: false,
			slidesToScroll: 1,
			variableWidth: true,
			speed: 1000,
			prevArrow: ".team_left_arrow",
			nextArrow: ".team_right_arrow",
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

			]
		});
	}

	function testimonialFourActive($scope, $) {
		$('.bizx-testimonial-slider').slick({
			arrow: false,
			dots: true,
			loop: false,
			infinite: false,
			slidesToShow: 1,
			speed: 1000,
			autoplay: false,
			slidesToScroll: 1,
		});
	}


	jQuery(document).ready(function (){		
		bizex.init();
	});

	jQuery(window).on('load', function(){
		jQuery('.bizex-preloader').fadeOut('slow',function(){jQuery(this).remove();});
	})

	$(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-jurney-id.default', journeyCarouselActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-testimonial-id.default', testimonialOneActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-hero-slider-id.default', mainSliderTwo);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-sponsor-slider-id.default', sponsorSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-team-carousel-id.default', teamSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-testimonial-v2-id.default', testimonialTwoActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-sponsor-slider-two-id.default', sponsorSliderTwoActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/bizex-post-3-id.default', blogSliderThreeActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-testimonial-v3-id.default', testimonialThreeActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-project-id.default', projectSlideActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-sponsor-slider-three-id.default', bizexSponsorSliderThree);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-team-carousel-tw-id.default', teamCarouselTwoActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-testimonial-v4-id.default', testimonialFourActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/hos-sponsor-slider-four-id.default', bizxSponsroScollBar);
	});

	
	Splitting();
	ScrollOut({
		targets: '[data-splitting]'
	});

})(window.jQuery);