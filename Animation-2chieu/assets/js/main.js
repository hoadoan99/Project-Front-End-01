document.addEventListener("DOMContentLoaded", function() {
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var status = 'click1';
    btn1.onclick = function() {
        if (status == 'click1') {
            console.log('Click lan 1 !');
            status = 'click2'
            btn2.classList.add('moveChieu1');
        } else if (status == 'click2') {
            console.log('Click lan 2 !');
            status = 'click1'
            btn2.classList.add('moveChieu2');
        }
    }
}, false);