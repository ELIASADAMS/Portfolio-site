// skills.js (ES Module)
const skillHTML = document.querySelector('#skill-html .skill-demo');
const skillCSS = document.querySelector('#skill-css .skill-demo');
const skillJSAnim = document.querySelector('.js-skill-demo');

// Минималистичная имитация подсветки HTML кода
function showHTMLDemo() {
    skillHTML.innerHTML = `
    &lt;<span style="color:#e44d26;">div</span>&gt;
    &nbsp;&nbsp;&lt;<span style="color:#d35400;">h1</span>&gt;Hello&lt;/<span style="color:#d35400;">h1</span>&gt;
    &lt;/<span style="color:#e44d26;">div</span>&gt;
  `;
}

// Минималистичная демонстрация CSS анимации
function showCSSDemo() {
    skillCSS.innerHTML = '<div class="animated-box"></div>';
}

showHTMLDemo();
showCSSDemo();

// Добавим CSS для анимации динамически
const styleEl = document.createElement('style');
styleEl.textContent = `
  .animated-box {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    background: linear-gradient(135deg, #2965f1, #61dafb);
    border-radius: 12px;
    animation: pulse 2.5s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 12px #61dafb88; }
    50% { transform: scale(1.15); box-shadow: 0 0 25px #61dafbcc;}
  }
`;
document.head.appendChild(styleEl);

// JS навык: типинг анимация (код) как в старой версии
const phrases = [
    'console.log("Hello World");',
    'let x = 5 + 3;',
    'function greet() { alert("Hi!"); }',
    'document.querySelector("body").style.background = "#f0db4f";',
    'for(let i=0; i<5; i++) { console.log(i); }'
];
let index = 0;
let charIndex = 0;
let currentPhrase = phrases[index];
let isDeleting = false;

function type() {
    if (!isDeleting) {
        skillJSAnim.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        skillJSAnim.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % phrases.length;
            currentPhrase = phrases[index];
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();
