
//Variables
var scrollBtn = document.getElementById('scroll-top');
var nav = document.getElementById('nav');
var fade = false;
var lastScrollTop = 0;

// Event Listeners
scrollBtn.addEventListener("click", scrollBackToTop);
window.addEventListener('scroll', checkScrollToBottom);



//Function to check if the user has scrolled the page
function checkScrollToBottom(){
    var st = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (st > 64) {
        scrollBtn.style.display = "block";
        nav.classList.add("fade-out");

    } else {
        scrollBtn.style.display = "none";
    }

    //Check if user is scrolling to top
    if(st < lastScrollTop){
        nav.classList.remove("fade-out");
    }
    lastScrollTop = st;
}


//Function to make the page go to the top again
function scrollBackToTop() {
    $('html, body').animate({
        scrollTop: 0
      }, 500, function(){
 
      });
}

// Smooth scrolling function for options in the menu
$("#nav ul li a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();
 
    // store hash
    var hash = this.hash;
 
    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      });
 });