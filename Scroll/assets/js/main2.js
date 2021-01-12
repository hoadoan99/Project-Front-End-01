

document.addEventListener("DOMContentLoaded",function(){
	var status = 'duoi300';
	var menu = document.querySelector('.menu');
	window.addEventListener('scroll',function(){
		if (window.pageYOffset > 300) {
			if (status == 'duoi300')
			{
				status == 'tren300';
				menu.classList.add('menusmall');
			}
		}else if (pageYOffset <= 300) {
			if (status == 'tren300') {
				menu.classList.remov('menusmall');
			}
		}{

		}
	})
})
// 62