// fx.js

// Fade-in of elements when scrolling
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in-section');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const particleCount = 30;
    const particles = [];
    const basePositions = [];

    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatUp {
        0%   { transform: translateY(0); opacity: 0.7; }
        50%  { opacity: 1; }
        100% { transform: translateY(-30px); opacity: 0.7; }
      }
      @keyframes floatDiagonal {
        0%   { transform: translate(0, 0); opacity: 0.7; }
        50%  { opacity: 1; }
        100% { transform: translate(20px, -20px); opacity: 0.7; }
      }
    `;
    document.head.appendChild(style);

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = 5 + Math.random() * 10;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.position = 'fixed';

        // Init position
        const startTop = Math.random() * 100;
        const startLeft = Math.random() * 100;

        particle.style.top = `${startTop}vh`;
        particle.style.left = `${startLeft}vw`;
        particle.style.animationDuration = (5 + Math.random() * 10) + 's';
        particle.style.animationName = i % 2 === 0 ? 'floatUp' : 'floatDiagonal';
        particle.style.animationIterationCount = 'infinite';
        particle.style.animationTimingFunction = 'linear';
        particle.style.opacity = 0.7;
        particle.style.transition = 'top 1.5s ease, left 1.5s ease';

        basePositions[i] = { top: startTop, left: startLeft };

        document.body.appendChild(particle);
        particles.push(particle);
    }

    let scrollTimeout;
    let isTransitioning = false;

    function scatterToRandomPositions() {
        isTransitioning = true;

        particles.forEach((p, i) => {
            p.style.animationName = 'none';
            const currTop = parseFloat(p.style.top);
            const currLeft = parseFloat(p.style.left);
            const newTop = Math.min(Math.max(currTop + (Math.random() * 40 - 20), 0), 100);
            const newLeft = Math.min(Math.max(currLeft + (Math.random() * 40 - 20), 0), 100);
            p.style.top = `${newTop}vh`;
            p.style.left = `${newLeft}vw`;
        });
    }

    function restoreFloatAnimation() {
        particles.forEach((p, i) => {
            basePositions[i].top = parseFloat(p.style.top);
            basePositions[i].left = parseFloat(p.style.left);

            p.style.animationName = i % 2 === 0 ? 'floatUp' : 'floatDiagonal';
        });

        isTransitioning = false;
    }

    // Scroll trigger logic and scroll end detection
    window.addEventListener('scroll', () => {
        if (!isTransitioning) {
            scatterToRandomPositions();
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            restoreFloatAnimation();
        }, 600);
    });
});
