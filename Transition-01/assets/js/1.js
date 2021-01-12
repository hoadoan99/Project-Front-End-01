// Truy xuat vao phan tu button
// Truoc khi truy xuat phai document ready
document.addEventListener("DOMContentLoaded", function() {
    var btn1 = document.getElementById('nut1');
    var block1 = document.getElementsByClassName('card');
    // console.log(block1[0]);
    // console.log(btn1);
    //goi event click
    btn1.onclick = function() {
        block1[0].classList.toggle('moveRight')
    }

}, false);




// animation - keyframe