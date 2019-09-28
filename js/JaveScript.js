

function init() {
    function $(id) {
        return document.getElementById(id);
    }
    function c(cs) {
        return document.getElementsByClassName(cs);
    }
    var eqwidth = window.innerWidth;
    // =================sliderbar=====================
    var item = document.getElementsByClassName('item');
    var i = 0;
    var x = 0;
    var a = 0;
    for (var x = 0; x < item.length - 8; x++) {
        x < 4 ? item[x].style.left = `${x * 12.5}%` : item[x].style.left = `${(8 - x) * -12.5}%`
    }
    $('previous').addEventListener("click", pmove, false);
    $('next').addEventListener("click", nmove, false);
    function pmove() {
        i--;
        i > 0 ? x = i % 8 : x = (8 + i % 8) % 8;
        var a = (x + 4) % 8;
        $('foodSliderBar').style.right = `${i * 100}%`;
        item[a].style.left = `${(i - 4) * 12.5}%`;
        for (var a = 0; a < item.length - 8; a++) {
            item[a + 8].style.zIndex = 0;
            item[x + 8].style.zIndex = 1;
        }
        $('foodTxtTittle').innerHTML = c('itemTittle')[x].innerHTML;
        document.getElementsByClassName('foodDot')[x].checked = true;
    }
    function nmove() {
        i++;
        i > 0 ? x = i % 8 : x = (8 + i % 8) % 8;
        var a = (x + 3) % 8;
        $('foodSliderBar').style.right = `${i * 100}%`;
        item[a].style.left = `${(i + 3) * 12.5}%`;
        for (var a = 0; a < item.length - 8; a++) {
            item[a + 8].style.zIndex = 0;
            item[x + 8].style.zIndex = 1;
        }
        $('foodTxtTittle').innerHTML = c('itemTittle')[x].innerHTML;
        document.getElementsByClassName('foodDot')[x].checked = true;
    }
    // =============sliderbar-end=================
    // ===============drag==================
    var startX = 0;
    var delta = 0;
    var nowX = 0;
    var fin = 0;
    var pos = 0;
    var width = (window.getComputedStyle(c('eventLine')[0], null).width).match(/\d+/) * 1;
    var swidth = (window.getComputedStyle(c('eventSmallLine')[0], null).width).match(/\d+/) * 1;
    var sboxwidth = (window.getComputedStyle(c('eventSmallLineBox')[0], null).width).match(/\d+/) * 1;
    function start(e) {
        if (eqwidth < 768) {
            var touch = e.touches[0];
            startX = touch.clientX;
        } else {
            c('eventLine')[0].addEventListener("mousemove", move, false);
            startX = e.pageX;
            console.log(1)
        }

    }
    function move(e) {

        if (eqwidth < 768) {
            var touch = e.touches[0];
            var nowX = touch.pageX;
            delta = startX - nowX;
            fin = pos + delta;
            fin <= 0 ? fin = 0 : fin >= width - eqwidth * 9 / 10 ? fin = width - eqwidth * 9 / 10 : fin = fin;
            sfin = fin * (swidth - sboxwidth) / (width - eqwidth * 9 / 10);
            c('eventLine')[0].style.right = `${fin}px`;
            c('eventSmallLineBox')[0].style.left = `${sfin}px`;
        } else {
            //在事件中
            e = e || window.event;
            pauseEvent(e);

            function pauseEvent(e) {
                if (e.stopPropagation) e.stopPropagation();
                if (e.preventDefault) e.preventDefault();
                e.cancelBubble = true;
                e.returnValue = false;
                return false;
            }
            var nowX = e.pageX;
            delta = startX - nowX;
            fin = pos + delta;
            fin <= 0 ? fin = 0 : fin >= width - eqwidth * 9 / 10 * 8 / 10 ? fin = width - eqwidth * 9 / 10 * 8 / 10 : fin = fin;
            sfin = fin * (swidth - sboxwidth) / (width - eqwidth * 9 / 10 * 8 / 10);
            c('eventLine')[0].style.right = `${fin}px`;
            c('eventSmallLineBox')[0].style.left = `${sfin}px`;
            console.log(swidth)
        }
        console.log(fin, sfin);
    }
    function end(e) {
        c('eventLine')[0].removeEventListener('mousemove', move, false);
        pos = fin;
        console.log(3);
    }
    if (eqwidth < 768) {
        c('eventLine')[0].addEventListener("touchstart", start, false);
        c('eventLine')[0].addEventListener("touchmove", move, false);
        c('eventLine')[0].addEventListener("touchend", end, false);
    } else {
        c('eventLine')[0].addEventListener("mousedown", start, false);
        document.addEventListener("mouseup", end, false);

    }


    // =================drag-end============

}
window.addEventListener("load", init, false);