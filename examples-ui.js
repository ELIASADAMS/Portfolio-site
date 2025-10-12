document.addEventListener('DOMContentLoaded', () => {
  const cardWrappers = document.querySelectorAll('.card-wrapper');

  cardWrappers.forEach(wrapper => {
    const card = wrapper.querySelector('.card-inner');
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    function lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    }

    function onMouseMove(e) {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / (rect.height / 2)) * 30;
      const rotateY = (x / (rect.width / 2)) * 30;
      targetX = rotateX;
      targetY = rotateY;
    }


    function onMouseLeave() {
      targetX = 0;
      targetY = 0;
    }

    function animate() {
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);
      card.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      requestAnimationFrame(animate);
    }

    wrapper.addEventListener('mousemove', onMouseMove);
    wrapper.addEventListener('mouseleave', onMouseLeave);

    animate();
  });
});

document.querySelectorAll('.card-wrapper').forEach(wrapper => {
  const cardInner = wrapper.querySelector('.card-inner');

  wrapper.addEventListener('mouseenter', () => {
    cardInner.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    cardInner.style.transform += ' scale(1.04)';
  });

  wrapper.addEventListener('mouseleave', () => {
    cardInner.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    cardInner.style.transform = cardInner.style.transform.replace(/ scale\(.*?\)/, '');
  });
});

const particles = document.querySelectorAll('.particle');
let phase = 0;

function animateFlow() {
  phase += 0.02;
  particles.forEach((p, i) => {
    const offsetY = Math.sin(phase + i) * 3;
    p.style.transform = `translateY(${offsetY}px)`;
  });
  requestAnimationFrame(animateFlow);
}

animateFlow();
