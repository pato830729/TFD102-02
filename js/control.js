document.querySelectorAll('.scene').forEach((elem) => {

    const modifier = elem.getAttribute('data-modifier')

    basicScroll.create({
        elem: elem,
        from: 0,
        to: 519,
        direct: true,
        props: {
            '--translateY': {
                from: '0',
                to: `${10 * modifier}px`,
            }
        }
    }).start()

})

$(window).scroll(function(){
    var a = $(".footer_bg")[0].offsetHeight;
    var b = $(window).height();
    var c = $(".nav_coffee")[0];
    var myh = a + 100 + 90 - b;
    myh = (myh > 0) ? myh: 0 ;
    last2 = $("body").height() - b - myh;
    var f = $(".shopping_flout")[0];
    if(f != undefined){
        var d = a + f.offsetHeight + 290 - b;
        last1 = $("body").height() - b - d;
        if($(window).scrollTop()>=last1){
            f.style.top = (240 - ($(window).scrollTop() - last1)) + 'px' ;
        }else{
            f.style.top = '240px';
        }
    }
    if($(window).scrollTop()>=last2){
        c.style.top = (100 - ($(window).scrollTop() - last2)) + 'px' ;
    }else{
        c.style.top = '100px';
    }
})