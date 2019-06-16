window.onload = function () {
    sleep(400); // Midpage reload fade fix
    portfolioToggle(); // Portfolio icon fix
};

// Simple sleep function.
function sleep(ms) {
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > ms) {
            break;
        }
    }
}

// Navbar change script
jQuery(document).ready(function () {
    let windowHeight = $(window).height()-60;

    jQuery(window).scroll(function () {
        let scrollPos = jQuery(window).scrollTop();
        if (scrollPos >= windowHeight){
            $("#LandingPageNav").fadeOut("fast");
        } else {
            $("#LandingPageNav").fadeIn("fast")
        }
    });

});


let isPortfolioToggled = true; // Global for portfolioToggle()

// Global toggler for the interactive list in the portfolio section.
function portfolioToggle() {
    let btnObjs = document.getElementsByClassName("btn port-header-btn text-left");
    for (let i = 0; i < btnObjs.length; i++) {
        let classStr = document.getElementById(btnObjs[i].id.toString().slice(1,)).className.toString();
        if (isPortfolioToggled
            && (classStr === "collapse portfolioBody show" || classStr === "portfolioBody collapse show")) {
            btnObjs[i].click();
        } else if (!isPortfolioToggled
            && (classStr === "collapse portfolioBody" || classStr === "portfolioBody collapse")) {
            btnObjs[i].click();
        }
    }
    isPortfolioToggled = !isPortfolioToggled;
}

// Add fading when elements come in/out of view.
$(window).on("load", function () {
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
            if ($(this).offset().top < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(300, 1);
                }
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity") == 1) {
                    $(this).fadeTo(0, 0);
                }
            }
        });
    }).scroll();
});

// Add smooth scrolling to all links
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });
});