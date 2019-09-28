function init() {
    //===============word======================
    var amount = 0;
    function c(cs) {
        return document.getElementsByClassName(cs);
    }
    function ch(e) {
        adultAmount = c('reserveNotebox_short')[0].value;
        childAmount = c('reserveNotebox_short')[1].value;
        if (adultAmount.search(/\D/) == -1 && childAmount.search(/\D/) == -1) {
            e.target.style.borderColor = "";
            c('amount')[0].innerHTML = adultAmount;
            c('amount')[1].innerHTML = childAmount;
            c('price')[0].innerHTML = adultAmount * 399;
            c('price')[1].innerHTML = childAmount * 250;
            c('price')[2].innerHTML = c('price')[0].innerHTML * 1 + c('price')[1].innerHTML * 1;
        } else {
            e.target.style.borderColor = "red";
        }
    }
    function nb(e) {
        var value = e.target.value;
        value = value.replace(/\D/, '');
        e.target.value = value;
        console.log(123, value);
    }
    for (var i = 0; i < c('reserveNotebox_short').length - 2; i++) {
        c('reserveNotebox_short')[i].addEventListener('change', ch, false);
        c('reserveNotebox_short')[i].addEventListener('keydown', nb, false);
    }
    //===============word-end======================
    function totalPrice() {
        var scroll = window.scrollY;
        if(scroll > 1438){
            c('reservePrice')[0].style.right = '1px';
            c('reservePrice')[0].style.position = 'absolute';
        }else if(scroll > 500){
            c('reservePrice')[0].style.display = 'block';
            c('reservePrice')[0].style.position = 'fixed';
            c('reservePrice')[0].style.right = '20px';
        }else{
            c('reservePrice')[0].style.display = 'none';
        }
        console.log(window.scrollY);
    }
    if(window.innerWidth < 768)
    window.addEventListener("scroll", totalPrice, false);
    console.log(1)
}
window.addEventListener('load', init, false);
