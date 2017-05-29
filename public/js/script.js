/*
$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});*/
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

$(document).ready(function(){
    var collapseWrapper = $('#collapse-wrapper');
    $('#offcanvas-button').click(function(){
        $('#hide-button').show();
        $('#page-content-wrapper').addClass('sidebar-push');
        collapseWrapper.addClass('push');
        $('#sidebar').show();
        $(this).hide();
        /*var toggleWidth = $("#sidebar").width() == 220 ? "0px" : "300px";
        $('#sidebar').animate(function(){
            width: toggleWidth
        },1000);*/
    });
    $('#hide-button').click(function(){
        $('#offcanvas-button').show();
        $(this).hide();
        $('#sidebar').hide();
        $('#page-content-wrapper').removeClass('sidebar-push');
        collapseWrapper.removeClass('push');
    });
    $('#show-diacritics-button').click(function(){
        $('.diacritic-row').collapse('show');
        $('#hide-diacritics-button').show();
        $(this).hide();
    });
    $('#hide-diacritics-button').click(function(){
        $('.diacritic-row').collapse('hide');
        $('#show-diacritics-button').show();
        $(this).hide();
    })
});