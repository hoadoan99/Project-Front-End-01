/*document.addEventListener("DOMContentLoaded", function() {
    // Bắt sự kiện để biết ng dùng đang scroll
    var status = 'under300'
    window.addEventListener('scroll', function() {
        // console.log("Scrolling....!");
        // Biết ng dùng đang scroll đến vị trí nào
        // console.log(window.pageYOffset);
        if (window.pageYOffset > 300) {
            if (status == 'under300') {
                console.log("STOP........You have been scolling over 300px!");
                status = "over300";
            }
        }
    });
}, false);*/

document.addEventListener("DOMContentLoaded",function(){
    var status = 'under300';
    window.addEventListener('scroll',function(){
        if (window.pageYOffset > 300) {
            if (status == 'under300') {
                console.log("STOP........You have been scolling over 300px!");
                status = 'over300';
            }
        }

    });
},false);


