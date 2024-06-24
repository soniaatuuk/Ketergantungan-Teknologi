var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const darkModeSwitch = document.getElementById('darkModeSwitch');

    darkModeSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', darkModeSwitch.checked);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');

    acceptCookies.addEventListener('click', function() {
        cookieConsent.style.display = 'none';
        // Set cookie or local storage to remember user's consent
        localStorage.setItem('cookiesAccepted', 'true');
    });

    // Check if user already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessageContainer = document.getElementById('feedbackMessageContainer');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        feedbackMessageContainer.textContent = 'Terima kasih atas umpan balik Anda!';
        feedbackForm.reset();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    backToTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Other JavaScript code...

    // Rating Bintang
    const stars = document.getElementsByClassName('fa-star');
    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener('click', function() {
            let rating = i + 1;
            for (let j = 0; j < stars.length; j++) {
                stars[j].classList.remove('checked');
            }
            for (let j = 0; j < rating; j++) {
                stars[j].classList.add('checked');
            }
            alert('Anda memberi rating ' + rating + ' bintang');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
// Countdown Timer
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});