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

    /* Mobile Nav */

    $('.jsNavIcon').click(function() {
       var nav = $('.jsMainNav');
       var icon = $('.jsNavIcon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon')) {
           icon.addClass('ion-close');
           icon.removeClass('ion-navicon');
       }
       else {
           icon.addClass('ion-navicon');
           icon.removeClass('ion-close');
       }

    });

    $(window).resize(function(){

        var nav = $('.jsMainNav');

        var icon = $('.jsNavIcon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close');
            icon.removeClass('ion-navicon');
        }
        else {
            nav.css("display", "none");
            icon.addClass('ion-navicon');
            icon.removeClass('ion-close');
        }

    });

});