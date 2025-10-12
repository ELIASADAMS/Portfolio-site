// about.js (ES module)/* fx.css */

const e = React.createElement;
function AboutInfo() {
    return e('div', null,
        e('p', null, 'Веб-разработчик с опытом реализации проектов с применением современных стэков и инструментов, способный совмещать технические и дизайнерские навыки для создания удобных, адаптивных, визуально приятных веб-приложений.'),
        e('p', null,
            'Контакты: ',
            e('a', { href: 'tel:+79152243253' }, '+7 915 224-32-53'), ', ',
        ),
        e('p', null,
            'Почта: ',
            e('a', { href: 'mailto:ilyaminineli@gmail.com' }, 'ilyaminineli@gmail.com')
        ),
        e('p', null,
            'Telegram: ',
            e('a', { href: 'https://t.me/eli_adams', target: '_blank', rel: 'noopener' }, '@eli_adams')
        ),
        e('p', null,
            'GitHub: ',
            e('a', { href: 'https://github.com/ELIASADAMS', target: '_blank', rel: 'noopener' }, 'https://github.com/ELIASADAMS')
        ),

        e('h2', null, 'Ключевые навыки'),
        e('ul', null,
            e('li', null, 'Языки программирования: JavaScript, TypeScript, HTML5, CSS3, Python'),
            e('li', null, 'Фреймворки и библиотеки: React, Node.js, Express, возможно Next.js (уточнить по проектам)'),
            e('li', null, 'Инструменты: Visual Studio Code, Git, Webpack, Agile/Scrum методологии'),
            e('li', null, 'Дизайн: опыт в UI/UX, работа с Photoshop, Illustrator, создание адаптивной верстки и прототипов'),
            e('li', null, 'Владение системами контроля версий и опыт командной разработки'),
            e('li', null, 'Основы работы с REST API и интеграция с внешними сервисами')
        ),
        e('hr'),
        e('h2', null, 'Опыт работы'),
        e('p', null,
            e('strong', null, 'Eli Lab (личная студия) — Веб-разработчик и дизайнер'), e('br'),
            '2022 — настоящее время', e('br'),
            'Создал несколько полноценных веб-проектов с использованием React и Node.js, включая адаптивный интерфейс и оптимизацию производительности. Разработал и поддерживаю персональный сайт и несколько клиентских проектов с интеграцией аудио-визуальных медиа. Примеры проектов доступны на GitHub (ниже).'
        ),
        e('hr'),
        e('h2', null, 'Примеры проектов из GitHub'),
        e('h3', null, '1. Проект: Интерактивный UI компонент'),
        e('ul', null,
            e('li', null, 'Реализован на React с применением TypeScript'),
            e('li', null, 'Поддержка адаптивности и кроссбраузерности'),
            e('li', null, 'Использование современных хуков и контекстов для управления состоянием'),
            e('li', null,
                'Ссылка на репозиторий: ',
                e('a', { href: 'https://github.com/ELIASADAMS/interactive-ui-component', target: '_blank', rel: 'noopener' }, 'https://github.com/ELIASADAMS/interactive-ui-component')
            )
        ),
        e('h3', null, '2. Проект: Веб-приложение для автоматизации задач'),
        e('ul', null,
            e('li', null, 'Backend на Node.js с Express'),
            e('li', null, 'Frontend на чистом JavaScript с применением адаптивной верстки'),
            e('li', null, 'Работа с REST API и базами данных'),
            e('li', null,
                'Ссылка на репозиторий: ',
                e('a', { href: 'https://github.com/ELIASADAMS/task-automation-app', target: '_blank', rel: 'noopener' }, 'https://github.com/ELIASADAMS/task-automation-app')
            )
        )
    );
}

const root = ReactDOM.createRoot(document.getElementById('about-root'));
root.render(e(AboutInfo));
