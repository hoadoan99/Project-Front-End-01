// POPUP
var allImages = document.querySelectorAll('.fb-block__images img'),
    layer = document.querySelector('.popup__layer'),
    popupDetails = document.querySelector('.popup__details'),
    popupItems = document.querySelectorAll('.popup__details-images ul li');
var buttonNext = document.querySelector('.popup__details-button--left');
var buttonNext = document.querySelector('.popup__details-button--right');
var thuTuActive = 0;


// console.log(allImages);
for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('click', function() {
        // console.log(layer);
        layer.classList.add('visibleLayer');
        popupDetails.classList.add('visibleLayer');

        var allImageClicked = this;
        // console.log(allImageClicked.previousElementSibling);
        for (var numberIndex = 0; allImageClicked = allImageClicked.previousElementSibling; numberIndex++) {

        }
        thuTuActive = numberIndex;
        popupItems[numberIndex].classList.add('popup__details-item--active');
    });

}
layer.onclick = function() {
    layer.classList.remove('visibleLayer');
    popupDetails.classList.remove('visibleLayer');
    var imageActive = document.querySelector('.popup__details-images ul li.popup__details-item--active');
    // console.log(imageActive);
    imageActive.classList.remove('popup__details-item--active');
}
buttonNext.addEventListener('click', function() {
    var thuTuCuaPhanTuTiepTheo = 0,
        soLuongAnh = popupItems.length;
    var hienTai2 = thuTuActive;

    if (thuTuActive < soLuongAnh - 1) {
        thuTuCuaPhanTuTiepTheo = thuTuActive + 1;
    } else {
        thuTuCuaPhanTuTiepTheo = 0;
    }
    // thuTuCuaPhanTuTiepTheo = (thuTuActive < (soLuongAnh - 1)) ? (thuTuActive + 1) : 0;

    popupItems[thuTuActive].classList.remove('popup__details-item--active');
    popupItems[thuTuCuaPhanTuTiepTheo].classList.add('popup__details-item--active');
});