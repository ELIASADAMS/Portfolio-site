document.getElementById('back-button').addEventListener('click', () => {
  window.location.href = '../html/index.html';
});

const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
      const detailsId = button.getAttribute('aria-controls');
      const details = document.getElementById(detailsId);
      const isOpen = details.classList.contains('open');

      if (isOpen) {
          details.classList.remove('open');
          details.setAttribute('hidden', '');
          button.setAttribute('aria-expanded', 'false');
          button.textContent = 'Подробнее ▼';
          button.setAttribute('aria-label', 'Развернуть пост');
      } else {
          details.classList.add('open');
          details.removeAttribute('hidden');
          button.setAttribute('aria-expanded', 'true');
          button.textContent = 'Скрыть ▲';
          button.setAttribute('aria-label', 'Свернуть пост');
      }
  });
});
