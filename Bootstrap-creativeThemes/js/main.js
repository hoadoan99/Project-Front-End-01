$(function() {
    $(window).scroll(function() {

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $('.logo').addClass('color-black');
            $('.navbar').addClass('white-bg')
                .removeClass('navbar-dark')
                .addClass('navbar-light');
        } else {
            $('.logo').removeClass('color-black');
            $('.navbar').removeClass('white-bg')
                .addClass('navbar-dark')
                .removeClass('navbar-light');
        }




    })
})