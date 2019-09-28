function init() {

    function c(cs) {
        return document.getElementsByClassName(cs);
    }
    for (var i = 0; i < c('placeBoxPic').length; i++) {
        if (i % 2 == 0) {
            c('placeBoxPic')[i].style.left = `100%`;
        } else {
            c('placeBoxPic')[i].style.left = `-100%`;
        }
    }
    var nowY = 0;
    var finY = 0;
    var value = c('placeBoxPic')[0].style.left.replace('%', '') * 1;
    var padding = window.getComputedStyle(c('placeIntroductionTxt')[0], null).padding.replace('px', '') * 1;
    var height = window.getComputedStyle(c('placeIntroductionTxt')[0], null).width.replace('px', '') * 1;
    var minusHeight = height/95;
    console.log(minusHeight)
    function move() {
        var txtTop = c('placeIntroduction')[0].offsetTop + c('full')[0].offsetTop;
        var picTop = c('placeBoxPic')[2].offsetTop + c('placeBox')[0].offsetTop;
        nowY = window.scrollY;
        // ============txt=================
        if (nowY > txtTop) {
            c('placeIntroductionTxt')[0].classList.add('placeMove');
        } else {
            c('placeIntroductionTxt')[0].classList.remove('placeMove');
        }

        console.log(height);
        if (nowY > c('placeBigPic')[0].offsetTop + c('full')[0].offsetTop) {
            // c('placeIntroductionTxt')[0].style.height = `${height - minusHeight}px`;
            // height = window.getComputedStyle(c('placeIntroductionTxt')[0], null).height.replace('px', '') * 1;
            // c('placeIntroductionTxt')[0].style.padding = `${padding - 5}px`;
            // padding = window.getComputedStyle(c('placeIntroductionTxt')[0], null).padding.replace('px', '') * 1;
            c('placeIntroductionTxt')[0].classList.add('placeIntroductionTxtFade');
        } else {
            c('placeIntroductionTxt')[0].classList.remove('placeIntroductionTxtFade');
        }
        // =============pic=============
        if (nowY > finY) {
            if (value > 25 && nowY > c('placeBox')[0].offsetTop + c('full')[0].offsetTop)
                for (var i = 0; i < c('placeBoxPic').length; i++) {
                    if (i % 2 == 0) {
                        c('placeBoxPic')[i].style.left = `${value - 2}%`;
                    } else {
                        c('placeBoxPic')[i].style.left = `${value * -1 + 2}%`;
                    }
                }
        } else {
            if (value < 100 && nowY < c('placeBox')[0].offsetTop + c('full')[0].offsetTop)
                for (var i = 0; i < c('placeBoxPic').length; i++) {
                    if (i % 2 == 0) {
                        c('placeBoxPic')[i].style.left = `${value + 2}%`;
                    } else {
                        c('placeBoxPic')[i].style.left = `${value * -1 - 2}%`;
                    }
                }
        }
        value = c('placeBoxPic')[0].style.left.replace('%', '') * 1;
        finY = window.scrollY;
    }
    window.addEventListener('scroll', move, false);
}
window.addEventListener('load', init, false)