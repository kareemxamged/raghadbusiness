(function ($) {
    "use strict";

    jQuery(window).on('scroll', function() {
        if (jQuery(window).scrollTop() > 250) {
            jQuery('.cando-default-sticky').addClass('sticky-on')
        } else {
            jQuery('.cando-default-sticky').removeClass('sticky-on')
        }
    });
    
        var CandoGlobal = function ($scope, $) {
    
            // Js Start
                $('[data-background]').each(function() {
                    $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
                });
    
                if($('.wow').length){
                    new WOW({
                        offset: 100,
                        mobile: true
                    }).init()
                }
            jQuery(window).on('scroll', function() {
                if (jQuery(window).scrollTop() > 250) {
                    jQuery('.cando-sticky-header').addClass('sticky-on')
                } else {
                    jQuery('.cando-sticky-header').removeClass('sticky-on')
                }
            });
            if ( $('.cando-icon-lightbox').length ) {
                jQuery('.cando-icon-lightbox .elementor-icon').addClass('video-popup');
            }
            jQuery('.video-popup').magnificPopup({
                disableOn: 200,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
            });
            jQuery('.popup-id').magnificPopup({
                type: 'image'
            });
            // Js End
    
        };
    
        var CDNavMenu = function ($scope, $) {
    
            $scope.find('.cando-nav-builder').each(function () {
                var settings = $(this).data('cando');
    
            // Js Start
                var mobilemenu = $('.open_mobile_menu');
                mobilemenu.on("click", function() {
                    $('.mobile_menu_wrap').toggleClass("mobile_menu_on");
                });
                mobilemenu.on('click', function () {
                    $('body').toggleClass('mobile_menu_overlay_on');
                });
                if($('.mobile_menu li.dropdown ul').length){
                    $('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
                    $('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
                        $(this).prev('ul').slideToggle(500);
                    });
                }
                $(".dropdown-btn").on("click", function () {
                    $(this).toggleClass("toggle-open");
                });
            // Js End
            });
    
        };
    
        var CnadoCases = function ($scope, $) {
    
            $scope.find('.case-page-area-section').each(function () {
                var settings = $(this).data('cando');
    
            // Js Start
                var grid = jQuery('.grid').imagesLoaded( function() {
                    grid.masonry({
                        itemSelector: '.grid-item',
                        percentPosition: true,
                        columnWidth: '.grid-sizer'
                    });
                });
            // Js End
            });
    
        };
    
        var CnadoTest1 = function ($scope, $) {
    
            $scope.find('.can-testimonial-section').each(function () {
    
                var settings = $(this).data('cando');
    
                // Js Start
                jQuery('.testimonial-slider-wrap').owlCarousel({
                    items: 1,
                    loop: true,
                    nav: false,
                    dots: true,
                    autoplay: false,
                    navSpeed: 800,
                    smartSpeed: 1000,
                });
                // Js End
            });
    
        };
        var CnadoTest3 = function ($scope, $) {
    
            $scope.find('.testimonial-section-3').each(function () {
    
                var settings = $(this).data('cando');
    
                // Js Start
                $('.testimonial-slider-id').owlCarousel({
                    margin:45,
                    responsiveClass:true,
                    nav: true,
                    dots: false,
                    navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
                    loop:true,
                    responsive:{
                        0:{
                            items:1,
                        },
                        400:{
                            items:1,
                        },
                        600:{
                            items:1,
                        },
                        700:{
                            items:2,
                        },
                        1000:{
                            items:3,
    
                        },
                        1300:{
                            items:3,
    
                        },
                        1900:{
                            items:3,
                        },
                    },
                })
                // Js End
            });
    
        };
    
        var CnadoMap = function ($scope, $) {
    
            $scope.find('.cando-map').each(function () {
    
                var settings = $(this).data('cando');
    
                // Js Start
                var mapselector = $('#cando_map');
                if ( mapselector.length ){
                    var lat = mapselector.data('lat');
                    var lon = mapselector.data('lon');
                    var zoom = mapselector.data('zoom');
                    var marker = mapselector.data('marker');
                    var info = mapselector.data('info');
                    var markerLat = mapselector.data('mlat');
                    var markerLon = mapselector.data('mlon');
                    var map = new GMaps({
                        el: '#cando_map',
                        lat: lat,
                        lng: lon,
                        scrollwheel: true,
                        scaleControl: true,
                        streetViewControl: true,
                        panControl: true,
                        disableDoubleClickZoom: true,
                        mapTypeControl: true,
                        zoom: zoom,
                    });
                    map.addMarker({
                        lat: markerLat,
                        lng: markerLon,
                        icon: marker,
                        infoWindow: {
                            content: info
                        }
                    })
                }
                // Js End
            });
    
        };
        $('.servcie-slider-2').owlCarousel({
            margin:45,
            responsiveClass:true,
            nav: true,
            dots: false,
            navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
            loop:true,
            responsive:{
                0:{
                    items:1,
                },
                400:{
                    items:1,
                },
                600:{
                    items:1,
                },
                700:{
                    items:2,
                },
                1000:{
                    items:3,

                },
                1300:{
                    items:3,

                },
                1900:{
                    items:3,
                },
            },
        })
        var CanServ2 = function ($scope, $) {
    
            $scope.find('.servcie-section-2').each(function () {
    
                var settings = $(this).data('cando');
    
                // Js Start
                $('.servcie-slider-2').owlCarousel({
                    margin:45,
                    responsiveClass:true,
                    nav: true,
                    dots: false,
                    navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
                    loop:true,
                    responsive:{
                        0:{
                            items:1,
                        },
                        400:{
                            items:1,
                        },
                        600:{
                            items:1,
                        },
                        700:{
                            items:2,
                        },
                        1000:{
                            items:3,
    
                        },
                        1300:{
                            items:3,
    
                        },
                        1900:{
                            items:3,
                        },
                    },
                })
                // Js End
            });
    
        };
        var CanCase2 = function ($scope, $) {
    
            $scope.find('.portfolio-section').each(function () {
    
                var settings = $(this).data('cando');
    
                // Js Start
                $('.portfolio-content-slider').owlCarousel({
                    margin:120,
                    responsiveClass:true,
                    nav: true,
                    dots: false,
                    loop:true,
                    center: true,
                    autoplay: false,
                    navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
                    smartSpeed: 1000,
                    responsive:{
                        0:{
                            items:1,
                        },
                        400:{
                            items:1,
                        },
                        600:{
                            items:1,
                        },
                        700:{
                            items:2,
                        },
                        1000:{
                            items:2,
    
                        }
                    },
                })
                // Js End
            });
    
        };
    
        $(window).on('elementor/frontend/init', function () {
            if (elementorFrontend.isEditMode()) {
                console.log('Elementor editor mod loaded');
                elementorFrontend.hooks.addAction('frontend/element_ready/global', CandoGlobal);
                elementorFrontend.hooks.addAction('frontend/element_ready/nav-builder.default', CDNavMenu);
                elementorFrontend.hooks.addAction('frontend/element_ready/cando-cases.default.default', CnadoCases);
                elementorFrontend.hooks.addAction('frontend/element_ready/cando-testimonial1.default', CnadoTest1);
                elementorFrontend.hooks.addAction('frontend/element_ready/cando-testimonial3.default', CnadoTest3);
                elementorFrontend.hooks.addAction('frontend/element_ready/cando-map.default', CnadoMap);
                elementorFrontend.hooks.addAction('frontend/element_ready/hos-service-5-id.default', CanServ2);
                elementorFrontend.hooks.addAction('frontend/element_ready/cando-cases2.default', CanCase2);
            }
            else {
                console.log('Elementor frontend mod loaded');
                elementorFrontend.hooks.addAction('frontend/element_ready/global', CandoGlobal);
                elementorFrontend.hooks.addAction('frontend/element_ready/cando-cases.default', CnadoCases);
                elementorFrontend.hooks.addAction('frontend/element_ready/cando-testimonial1.default', CnadoTest1);
                elementorFrontend.hooks.addAction('frontend/element_ready/cando-testimonial3.default', CnadoTest3);
                elementorFrontend.hooks.addAction('frontend/element_ready/cando-map.default', CnadoMap);
                elementorFrontend.hooks.addAction('frontend/element_ready/cando-services2.default', CanServ2);
                elementorFrontend.hooks.addAction('frontend/element_ready/cando-cases2.default', CanCase2);
            }
        });
    
    console.log('addon js loaded');
    })(jQuery);
    
    