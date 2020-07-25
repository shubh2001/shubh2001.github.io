window.onscroll = function () {scrollfunction()};

function scrollfunction () {
    if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        $('nav').addClass('bg-dark')
        
        
    }
    else {
        $('nav').removeClass('bg-dark') 
          }
}

