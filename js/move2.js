$(document).ready(function () {
    $(".sub_boutique").click(function () {
        $("html, body").animate({
            scrollTop: $(".coffee_move01").offset().top - 240
        }, { duration: 300, easing: "swing" });
        return false;
    });

    $(".sub_tiny").click(function () {
        $("html, body").animate({
            scrollTop: $(".coffee_move02").offset().top - 240
        }, { duration: 300, easing: "swing" });
        return false;
    });

    $(".sub_style").click(function () {
        $("html, body").animate({
            scrollTop: $(".coffee_move03").offset().top - 240
        }, { duration: 300, easing: "swing" });
        return false;
    });

    $(".sub_qa").click(function () {
        $("html, body").animate({
            scrollTop: $(".coffee_move04").offset().top - 240
        }, { duration: 300, easing: "swing" });
        return false;
    });

});