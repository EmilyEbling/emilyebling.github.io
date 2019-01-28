$(document).ready(function () {

    /* Sticky Navigation */

    $('.jsAbout').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '70px;'
    });

    /* Animations on Scrolls */

    $('.jswp1').waypoint(function (direction) {
        $('.jswp1').addClass('animated fadeInLeft');
    }, {
        offset: '65%'
    });

    $('.jswp2').waypoint(function (direction) {
        $('.jswp2').addClass('animated pulse');
    }, {
        offset: '95%'
    });

});