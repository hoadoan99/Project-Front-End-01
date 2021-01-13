document.addEventListener("DOMContentLoaded",function(){
        // Declare Variable
        var menu = document.querySelector('.menu');
        var statusMenu = true;
        // console.log(menu);
        var ads = document.querySelector('.ads');
        var adsLocalStart = ads.offsetTop;
        var adsLocalStop = ads.offsetTop + 600;
        var statusAds = true;
        // console.log(adsLocal); 514

        // loading content
        var loading = document.querySelectorAll('.loader')
        // console.log(loading);
        var statusLoad = true;
        var loadLocal = loading.offsetTop - 300;

        // Catch Event
        window.addEventListener('scroll',function(){
            // console.log(window.pageYOffset);
            // Menu
            if (window.pageYOffset > 300) {
                if (statusMenu == true) {
                    statusMenu = false;
                    menu.classList.add('blackmenu');
                }
            }else if (window.pageYOffset < 300) {
                if (statusMenu == false) {
                    statusMenu= true;
                    menu.classList.remove('blackmenu');
                }
            }
            // Ads
            if ((window.pageYOffset > adsLocalStart) && (window.pageYOffset < adsLocalStop)) {
                if (statusAds == true) {
                    statusAds = false;
                    ads.classList.add('contentStop');
                }
            }else if ((window.pageYOffset < adsLocalStart) || (window.pageYOffset > adsLocalStop))  {
                if (statusAds == false) {
                    statusAds = true;
                    ads.classList.remove('contentStop');
                }
            }

         // interactive loading

            for (let i = 0; i < loading.length; i++) {
                window.addEventListener('scroll', (e) => {
                    var positionY = loading[i].offsetTop - (window.innerHeight/2);
                    // console.log(loading[1].getBoundingClientRect().top);
                    loading[i].style.position = 'relative';
                    if (window.pageYOffset > positionY) {
                        loading[i].classList.add('loading');
                    } else {
                        loading[i].classList.remove('loading');
                    }
                })
            }
               /* if (window.pageYOffset > loadLocal) {
                    if (statusLoad == true) {
                        statusLoad = false;
                        loading.classList.add('loading');
                    }
                }*/

            });//window

},false);//domLoaded


//66