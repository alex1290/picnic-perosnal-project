function init() {
    function c(cs) {
        return document.getElementsByClassName(cs);
    }
    var x = 2;
    var i = 2;
    function ap(e) {
        if(x<6){

        console.log(window.scrollY);
        var scroll = window.scrollY;
        var delta = c('traceBox')[x].offsetTop;
        var top = document.body.clientHeight;
        if (scroll > delta - window.screen.height+300) {
            c('traceBox')[x].style.opacity = 1;
            c('traceMonth')[x].style.opacity = 1;
            x++;
        }
    }
        console.log(scroll, delta, top);
    }
    window.addEventListener('scroll', ap, false)
    for (var a = 0; a < c('traceBox').length; a++) {
        c('traceBox')[a].addEventListener('scroll', ap, false)

    }
}
window.addEventListener('load', init, false)