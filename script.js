function start() {
    const bgmusic = document.getElementById('bgmusic');
       bgmusic.play()
    ;

    bgmusic.addEventListener("play", function() {
        const elements = document.querySelectorAll("*");
        elements.forEach((element) => {
            element.style.animationPlayState = "running,running";  // start them animatins
        });
    });
}

function audiomute() {
    const bgmusic = document.getElementById('bgmusic');
    bgmusic.muted = !bgmusic.muted;
}


document.querySelector('.mute').addEventListener('click', function() {
    const button = this;
    if (button.style.backgroundImage == 'url("audio/muted.png")') {
        button.style.backgroundImage = 'url("audio/unmuted.png")';
    } else {
        button.style.backgroundImage = 'url("audio/muted.png")';
    }
});

let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth; // Get the width of a single slide

    // Update the slideIndex based on direction
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;

    // Move the slider by the calculated amount
    document.querySelector('.slider').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Optional: Automatically change slides every 3 seconds
setInterval(() => moveSlide(1), 3000);

document.querySelector('.start-button').addEventListener('click', function() {
    const tv = document.querySelector('.tv');
    const hm = document.querySelector('.home');
    tv.classList.add('play');
    hm.classList.add('sigma');
  });
  
  document.querySelectorAll('.heads, .home').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target ID
        const targetElement = document.getElementById(targetId); // Get the target element

        // Smoothly scroll to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});