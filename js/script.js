$(document).ready(function () {
    $(".burger-menu").click(function () {
        $(".burger-menu").toggleClass("burger-menu__active");
        $(".nav-bar__list").toggle(500);
        // $(".nav-bar__list").toggleClass("_active");
    })
})