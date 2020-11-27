$(document).ready(function () {

// Sticky navigation
        $('.js--section-about').waypoint(function(direction) {
            if (direction == "down") {
                $('#stickynav').removeClass('no-display')
            } else {
                $('#stickynav').addClass('no-display');
            }
        }, {
            offset: '60px;'
        }); 

// Scroll on button selection
$('.js--scroll-to-about').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
})
$('.js--scroll-to-mission').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-mission').offset().top}, 2000);
})
$('.js--scroll-to-projects').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-projects').offset().top}, 2000);
})

// Navigation Scroll
    
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

// Animations on Scroll

var $ethos__header = $('.js--ethos-header');
var $ethos__content = $('.js--ethos-content');
var $gallery__header = $('.js--gallery-header');
var $gallery__background = $('.js--gallery-background');
var $projects__content = $('.js--projects-content');
var $mission__content = $('.js--mission-content');

    
    $ethos__header.waypoint(function(direction) {
        $ethos__header.addClass('animate__fadeInUp');
    }, {
        offset: '80%'
    });

    $ethos__content.waypoint(function(direction) {
        $ethos__content.addClass('animate__fadeInUp')
    }, {
        offset: '80%'
    });

    $gallery__header.waypoint(function(direction){
        $gallery__header.addClass('animate__fadeInUp')
        $gallery__background.addClass('gallery-filter')
    }, {
        offset: '50%'
    });

    $mission__content.waypoint(function(direction){
        $mission__content.addClass('animate__fadeInUp')
    }, {
        offset: '80%'
    });

    $projects__content.waypoint(function(direction){
        $projects__content.addClass('animate__fadeInUp')
    }, {
        offset: '80%'
    });

}) 