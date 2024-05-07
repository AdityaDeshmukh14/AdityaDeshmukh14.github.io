// Typed text script
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

// Reload skills section
function reloadSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.innerHTML = section.innerHTML;
}

// Compose email - Click on Contact Me button
function composeEmail() {
    var senderName = document.getElementById("senderName").value;
    var senderEmail = document.getElementById("senderEmail").value;
    var subject = document.getElementById("senderSubject").value;
    var message = document.getElementById("comment").value;

    var mailtoLink = 
        "mailto:adideshmukh17@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(message + "\n\nFrom, \n" + senderName + "\nEmail: " + senderEmail);

    window.location.href = mailtoLink;
}