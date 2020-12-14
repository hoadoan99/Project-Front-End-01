// $(function() {
//     $(window).scroll(function() {
//         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//             $('.header__logo').addClass('color-primary');
//             $('.navbar').addClass('bg-light').removeClass('bg-faded');
//         } else {
//             $('.header__logo').removeClass('color-primary');
//         }
//     })
// })

// scrollTop
$(function() {
    $(window).scroll(function() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                $('.header__logo').addClass('color-primary');
                $('.navbar').addClass('bg-light').removeClass('bg-faded');
                // scroll hide  
                $('.btn-scroll').addClass('fade-scroll');
                $('.navbar-nav.header__menu .nav-item a').css('color', '#000');
            } else if (document.body.scrollTop <= 100 || document.documentElement.scrollTop <= 100) {
                $('.header__logo').removeClass('color-primary');
                $('.navbar').removeClass('bg-light').addClass('bg-faded');
                $('.btn-scroll').removeClass('fade-scroll');
                $('.navbar-nav.header__menu .nav-item a').css('color', 'var(--white-color)');
            }

        })
        // scroll click
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


})