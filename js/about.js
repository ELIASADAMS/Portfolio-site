// about.js

const e = React.createElement;
function AboutInfo() {
    return e('div', null,
        e('p', null, 'Веб-разработчик с опытом реализации проектов с применением современных стэков и инструментов, способный совмещать технические и дизайнерские навыки для создания удобных, адаптивных, визуально приятных веб-приложений.'),
        e('p', null,
        ),

        e('h2', null, 'Ключевые навыки'),
        e('ul', null,
            e('li', null, 'Языки программирования: JavaScript, TypeScript, HTML5, CSS3, Python'),
            e('li', null, 'Фреймворки и библиотеки: React, Node.js, Three.js'),
            e('li', null, 'Инструменты: Visual Studio Code, Git, Webpack'),
            e('li', null, 'Дизайн: опыт в UI/UX, работа с Photoshop, Illustrator, создание адаптивной верстки и прототипов'),
            e('li', null, 'Владение системами контроля версий и опыт командной разработки'),
            e('li', null, 'Основы работы с REST API и интеграция с внешними сервисами')
        ),
        e('h2', null, 'Опыт работы'),
        e('p', null,
            e('strong', null, 'eli_lab (личная студия) — Веб-разработчик, художник и дизайнер'), e('br'),
            '2022 — настоящее время', e('br'),
            'Создал несколько полноценных веб-проектов с использованием React и Node.js, включая адаптивный интерфейс и оптимизацию производительности.'
        ),
        e('h2', null, 'Примеры проектов из GitHub'),
        e('h3', null, 'Проект: Интерактивный UI компонент'),
        e('ul', null,
            e('li', null, 'Реализован на JS'),
            e('li', null, 'Поддержка адаптивности и кроссбраузерности'),
            e('li', null, 'Использование современных хуков и контекстов для управления состоянием'),
            e('li', null,
                'Ссылка на репозиторий: ',
                e('a', { href: 'https://github.com/ELIASADAMS/interactive-ui-component', target: '_blank', rel: 'noopener' }, 'https://github.com/ELIASADAMS/interactive-ui-component')
            )
        ),
    );
}

const root = ReactDOM.createRoot(document.getElementById('about-root'));
root.render(e(AboutInfo));
