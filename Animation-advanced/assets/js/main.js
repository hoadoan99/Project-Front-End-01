document.addEventListener("DOMContentLoaded", function() {
    // Declare Variable 
    var buttonNextSlide = document.querySelector('.carousel__control b.carousel__control-right'),
        buttonPrevSlide = document.querySelector('.carousel__control b.carousel__control-left'),
        allSlides = document.querySelectorAll('.carousel__slides-item');
    var sumSlides = allSlides.length,
        numberCurrentSlide = 0;
    var statusClick = 'noClick';
    // declare function event 
    var clickSlideNext = function() {
        if (statusClick == 'clicking') { return false; }
        statusClick = 'clicking';
        var countClick = 0;
        var currentSlideActive = allSlides[numberCurrentSlide];
        if (numberCurrentSlide < sumSlides - 1) {
            numberCurrentSlide++;
        } else {
            numberCurrentSlide = 0;
        }
        var nextSlideActive = allSlides[numberCurrentSlide];
        //    processing Event after end animation 
        currentSlideActive.addEventListener('webkitAnimationEnd', function() {
            this.classList.remove('itemHiddenAfterClickNext');
            this.classList.remove('carousel__slides-item--active');
            countClick++;
            if (countClick == 2) { statusClick = 'noClick' }
        });
        nextSlideActive.addEventListener('webkitAnimationEnd', function() {
            this.classList.add('carousel__slides-item--active');
            this.classList.remove('itemVisibleAfterClickNext');
            countClick++;
            if (countClick == 2) { statusClick = 'noClick' }
        });
        // add class 
        currentSlideActive.classList.add('itemHiddenAfterClickNext');
        nextSlideActive.classList.add('itemVisibleAfterClickNext');
    }

    var clickSlidePrev = function() {
            if (statusClick == 'clicking') { return false; }
            statusClick = 'clicking';
            var countClick = 0;
            var currentSlideActive = allSlides[numberCurrentSlide];
            if (numberCurrentSlide > 0) {
                numberCurrentSlide--;
            } else {
                numberCurrentSlide = sumSlides - 1;
            }
            var prevSlideActive = allSlides[numberCurrentSlide];
            //    processing Event after end animation 
            currentSlideActive.addEventListener('webkitAnimationEnd', function() {
                this.classList.remove('itemHiddenAfterClickPrev');
                this.classList.remove('carousel__slides-item--active');
                countClick++;
                if (countClick == 2) { statusClick = 'noClick' }
            });
            prevSlideActive.addEventListener('webkitAnimationEnd', function() {
                this.classList.add('carousel__slides-item--active');
                this.classList.remove('itemVisibleAfterClickPrev');
                countClick++;
                if (countClick == 2) { statusClick = 'noClick' }
            });
            // add class 
            currentSlideActive.classList.add('itemHiddenAfterClickPrev');
            prevSlideActive.classList.add('itemVisibleAfterClickPrev');
        }
        // call event 
    buttonNextSlide.addEventListener('click', clickSlideNext);
    buttonPrevSlide.addEventListener('click', clickSlidePrev);
});