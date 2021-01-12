document.addEventListener("DOMContentLoaded", function() {
    // call DOM
    var tamgiac = document.getElementsByClassName('tamgiac');
    var tamgiac = tamgiac[0];
    var danhsach = document.getElementsByClassName('danhsach');
    var danhsach = danhsach[0];

    // event Onclick & Toggle cho tam giac doi mau
    tamgiac.onclick = function() {
        // console.log("Clickd!"); test
        this.classList.toggle('tamgiactrang');
        danhsach.classList.toggle('showdanhsach');
    }

}, false);