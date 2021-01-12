document.addEventListener("DOMContentLoaded",function(){
	// khai bao mot so bien can dung
	var redmenu = document.querySelector('.menu');
	var content = document.querySelector('.content');
	// console.log(redMenu);
	var statusRedMenu = "lower100";

	// call Event
	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);
		if (window.pageYOffset > 100) {
			if (statusRedMenu == "lower100") {
				var statusRedMenu = "higher100";
				redmenu.classList.add('black');
				content.classList.add('contenthight');
			}
		}
	});
});