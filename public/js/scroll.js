var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    if (window.innerWidth >= 1400) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById('header').style.top = '0';
        } else {
            document.getElementById('header').style.top = '-130px';
        }
        prevScrollpos = currentScrollPos;
    }
}