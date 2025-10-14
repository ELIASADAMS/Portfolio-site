document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = '../index.html';
});

const galleryItems = document.querySelectorAll('.gallery-item');
const fullscreenOverlay = document.getElementById('fullscreen-overlay');
const fullscreenImg = fullscreenOverlay.querySelector('img');
const closeBtn = document.getElementById('fullscreen-close-btn');

galleryItems.forEach(item => {
    item.addEventListener('click', () => openFullscreen(item.querySelector('img')));
    item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openFullscreen(item.querySelector('img'));
        }
    });
});

function openFullscreen(imgElement) {
    fullscreenImg.src = imgElement.src;
    fullscreenImg.alt = imgElement.alt;
    fullscreenOverlay.hidden = false;

    requestAnimationFrame(() => {
        fullscreenOverlay.classList.add('active');
    });

    closeBtn.focus();
}

function closeFullscreen() {
    fullscreenOverlay.classList.remove('active');
    fullscreenOverlay.addEventListener('transitionend', function handler() {
        fullscreenOverlay.hidden = true;
        fullscreenImg.src = '';
        fullscreenImg.alt = '';
        fullscreenOverlay.removeEventListener('transitionend', handler);
    });
}

closeBtn.addEventListener('click', closeFullscreen);

fullscreenOverlay.addEventListener('click', e => {
    if (e.target === fullscreenOverlay) {
        closeFullscreen();
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !fullscreenOverlay.hidden) {
        closeFullscreen();
    }
});
