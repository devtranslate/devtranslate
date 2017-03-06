$(document).ready(function () {
    $("body").on("click", ".nav-toggle", function () {
        $(".nav-menu").slideToggle();
    });

    $("body").on("click", ".nav-item", function () {
        $(".nav-menu").slideToggle();
    });

    $("body").on("click", ".go-footer", function () {
        $('html, body').animate({ scrollTop: $('#footer').offset().top }, 'slow');
    });
});