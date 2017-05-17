$(document).ready(function () {
    $(".dropdown-button").dropdown({

        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: ($('.side-nav').width() * 3) / 2.5 + 5, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of bu
    });
    $(".button-collapse").sideNav();

    $('.parallax').parallax();



});