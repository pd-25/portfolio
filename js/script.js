document.addEventListener('DOMContentLoaded', () => {
    // Typing Text Effect
    const typeStrings = ["Software Development Engineer", "Full-Stack Developer", "Database Expert", "Fitness Enthusiast"];
    const typeElement = document.querySelector('.hero-description');
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        if (!typeElement) return;

        const currentString = typeStrings[stringIndex];

        if (isDeleting) {
            typeElement.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typeElement.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentString.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % typeStrings.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    type();

    // Mobile Menu Toggle (Disabled/Removed for new layout)
    // const menuToggle = document.querySelector('.menu-toggle');
    // const navLinks = document.querySelector('.nav-links');

    // if (menuToggle) {
    //     menuToggle.addEventListener('click', () => {
    //         navLinks.classList.toggle('active');
    //         const icon = menuToggle.querySelector('i');
    //         if (navLinks.classList.contains('active')) {
    //             icon.classList.remove('fa-bars');
    //             icon.classList.add('fa-times');
    //         } else {
    //             icon.classList.remove('fa-times');
    //             icon.classList.add('fa-bars');
    //         }
    //     });
    // }



    // Hero Image Slideshow
    const heroImages = document.querySelectorAll('.img-container img');
    let currentImageIndex = 0;

    if (heroImages.length > 0) {
        heroImages[0].classList.add('active'); // Ensure first is visible

        setInterval(() => {
            heroImages[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            heroImages[currentImageIndex].classList.add('active');
        }, 2000); // Change every 2 seconds
    }

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .stat-item, .project-card, .timeline-item, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add class for animation
    const style = document.createElement('style');
    style.innerHTML = `
        .animate-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
