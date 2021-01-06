
/*----------------scrollspy------------------ */
$('body').scrollspy({ target: '#navbarNav' });


/*----------------navbar background ---------------*/
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
});

/*-------------num Scroller-----------------*/
