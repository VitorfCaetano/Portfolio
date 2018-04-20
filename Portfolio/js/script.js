/*jshint esversion: 6 */

(() => {
    //Variables
    var lastScrollTop = 0;

    //Cache DOM
    const $scrollButton = $('#scroll-top');
    const $nav = $('#nav');
    const $navLink = $("#nav ul li a[href^='#']");

    //Bind Events
    window.addEventListener('scroll', checkScrollToBottom);
    $scrollButton.on('click', goBackToTop);
    $navLink.on('click', smoothScroll);

    //Function to make the page go to the top again
    function goBackToTop() {
        $('html, body').animate({
                scrollTop: 0
            }, 500, function(){}
        );
    }

    // Smooth scrolling function for options in the menu
    function smoothScroll(e) {
        // prevent default anchor click behavior
        e.preventDefault();
    
        // store hash
        var hash = this.hash;
    
        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        });
    }

    //Function to check if the user has scrolled the page
    function checkScrollToBottom(){
        var st = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (st > 64) {
            $scrollButton.show();
            $nav.addClass("fade-out");
    
        } else {
            $scrollButton.hide();
        }
    
        //Check if user is scrolling to top
        if(st < lastScrollTop){
            $nav.removeClass("fade-out");
        }
        lastScrollTop = st;
    }
})();