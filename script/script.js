document.addEventListener('DOMContentLoaded', function(){
    var typed = new Typed('.typed-text-output', {
        strings: ['Data Scientist', 'Software Developer', 'Tech Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        smartBackspace: true,
        loop: true
    });
});

// Add smooth scrolling to all links
$(".navbar-nav a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});

// Add active class to navbar links on scroll
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('.section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navbar-nav a.active').removeClass('active');
            $('.navbar-nav a').eq(i).addClass('active');
        }
    });
}).scroll();

function reloadSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.innerHTML = section.innerHTML;
}