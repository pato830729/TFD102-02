$(document).ready(function () {
    $(".coffee_doubleEspresso").click(function () {
        $("html, body").animate({
            scrollTop: $(".coffee_move01").offset().top - 240
        }, { duration: 300, easing: "swing" });
        return false;
    });

    $(".coffee_americanCoffee").click(function () {
        $("html, body").animate({
            scrollTop: $(".coffee_move02").offset().top - 240
        }, { duration: 300, easing: "swing" });
        return false;
    });

    $(".coffee_flatWhite").click(function () {
        $("html, body").animate({
            scrollTop: $(".coffee_move03").offset().top - 240
        }, { duration: 300, easing: "swing" });
        return false;
    });

    $(".coffee_cappuccino").click(function () {
        $("html, body").animate({
            scrollTop: $(".coffee_move04").offset().top - 240
        }, { duration: 300, easing: "swing" });
        return false;
    });

    $(".coffee_latte").click(function () {
        $("html, body").animate({
            scrollTop: $(".coffee_move05").offset().top - 240
        }, { duration: 300, easing: "swing" });
        return false;
    });
});