window.onscroll = function () {scrollfunction()};

function scrollfunction () {
    if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        $('nav').addClass('bg-dark')
        $('.nav-link').addClass('jsover')
        
    }
    else {
        $('nav').removeClass('bg-dark') 
        $('.nav-link').removeClass('jsover')   }
}

