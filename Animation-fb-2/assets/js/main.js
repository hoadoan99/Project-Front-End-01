document.addEventListener("DOMContentLoaded", function() {
    var click = document.getElementsByClassName('click');
    var show = document.getElementsByClassName('show');
    for (let i = 0; i < click.length; i++) {
        click[i].onclick = function() {
           var showData = this.getAttribute('data-show');
           var showContent = document.getElementById(showData);
            if (this.classList[1] == 'btn-white') {
                this.classList.remove('btn-white');
                showContent.classList.remove('showContent');
            } else {

                for (let j = 0; j < click.length; j++) {
                    click[j].classList.remove('btn-white');
                }
                this.classList.toggle('btn-white');
                for (let k = 0; k < show.length; k++) {
                    show[k].classList.remove('showContent');
                }
                showContent.classList.toggle('showContent');
            }

        }

    }

}, false);

// 52
/*document.addEventListener("DOMContentLoaded",function(){
    var click = document.getElementsByClassName('click');
    var show = document.getElementsByClassName('show');
    for (var i = 0; i < click.length; i++) {
        click[i].onclick = function(){
            for (var j = 0; j < click.length; j++) {
                  show[j].classList.remove('btn-white');
              }
            this.classList.toggle('btn-white');

              var showData = this.getAttribute('data-show');
              // console.log(showData);
              var  showContent = document.getElementById(showData);
              // console.log(showContent);
              for (var k = 0; k < show.length; k++) {
                  show[k].classList.remove('showContent');
              }
        }
    }
},false);*/