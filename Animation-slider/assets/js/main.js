document.addEventListener("DOMContentLoaded",()=>{
	// declare object
	var btn = document.querySelectorAll('.button-slider ul li');
	var slides = document.querySelectorAll('.slide-items')
	// console.log(btn);
	// btn return a array -> nodelist
	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click',function(){// catch event either btn
			// console.log(this);
			// bo tat ca btn mau den
			for (var i = 0; i < btn.length; i++) {
				btn[i].classList.remove('button--active');
			}
			this.classList.add('button--active');
			// het hieu ung chuyen mau slide

			//tinh vi tri
			// console.log(this.previousElementSibling);
			var btnActive = this;
			var positionbtn = 0;
			for (positionbtn = 0;btnActive = btnActive.previousElementSibling; positionbtn++) {
			}
			// console.log('Position button : ' + positionbtn);
			// hien thi slide theo thu tu click
			//buoc 1 - cho tat ca slide an di = remove
			// console.log(slides);
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('slide-items--active');
				slides[positionbtn].classList.add('slide-items--active');
			}
		});
	}
});