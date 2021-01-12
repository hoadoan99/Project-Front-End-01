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


		});//window

},false);//domLoaded


//66