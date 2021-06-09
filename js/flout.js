$(window).scroll(function(){
    var a = $(".footer_bg")[0].offsetHeight;
    var b = $(window).height();
    var c = $(".nav_coffee")[0];
    var f = $(".shopping_flout")[0];
    var d = a + f.offsetHeight + 290 - b;
    var myh = a + 100 + 90 - b;
    myh = (myh > 0) ? myh: 0 ;
    last1 = $("body").height() - b - d;
    last2 = $("body").height() - b - myh;
    if($(window).scrollTop()>=last1){
        f.style.top = (240 - ($(window).scrollTop() - last1)) + 'px' ;
    }else{
        f.style.top = '240px';
    }
    if($(window).scrollTop()>=last2){
        c.style.top = (100 - ($(window).scrollTop() - last2)) + 'px' ;
    }else{
        c.style.top = '100px';
    }
})