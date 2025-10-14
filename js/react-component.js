/* React game component */
const e = React.createElement;
const { useState, useEffect } = React;

function CatchTheBall() {
    const gridSize = 5;
    const totalCells = gridSize * gridSize;
    const gameDuration = 15;

    const [timeLeft, setTimeLeft] = useState(gameDuration);
    const [score, setScore] = useState(0);
    const [ballPosition, setBallPosition] = useState(null);
    const [gameActive, setGameActive] = useState(false);

    // Countdown
    useEffect(() => {
        if (!gameActive) return;

        if (timeLeft === 0) {
            setGameActive(false);
            setBallPosition(null);
            return;
        }

        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, gameActive]);

    // Change ball position
    useEffect(() => {
        let ballInterval;
        if (gameActive) {
            placeBallRandomly();
            ballInterval = setInterval(placeBallRandomly, 1000);
        }
        return () => clearInterval(ballInterval);
    }, [gameActive]);

    function placeBallRandomly() {
        setBallPosition(Math.floor(Math.random() * totalCells));
    }

    function startGame() {
        setScore(0);
        setTimeLeft(gameDuration);
        setGameActive(true);
    }

    function catchBall(index) {
        if (gameActive && index === ballPosition) {
            setScore(score + 1);
            placeBallRandomly();
        }
    }

    // Create playfield
    const cells = [];
    for (let i = 0; i < totalCells; i++) {
        const isBall = i === ballPosition;
        cells.push(
            e('div', {
                key: i,
                onClick: () => catchBall(i),
                style: {
                    width: '40px',
                    height: '40px',
                    margin: '4px',
                    borderRadius: '88px',
                    backgroundColor: isBall ? '#61dafb' : '#2a2a43',
                    boxShadow: isBall ? '0 0 15px #61dafb99' : 'none',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'background-color 0.3s ease',
                    display: 'inline-block'
                }
            })
        );
    }

    return e('div', {
        style: {
            color: '#cfd7f8',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: 'center',
            userSelect: 'none',
        }
    },
        e('p', { style: { fontWeight: '700', marginBottom: '6px', fontSize: '1.3rem' } },
            gameActive ? `Время: ${timeLeft} с` : 'Нажми кнопку "Старт", чтобы начать игру'
        ),
        e('p', { style: { fontWeight: '700', fontSize: '1.4rem', marginBottom: '12px' } }, `Счёт: ${score}`),
        e('div', {
            style: {
                display: 'grid',
                gridTemplateColumns: `repeat(${gridSize}, 40px)`,
                justifyContent: 'center',
                gap: '6px',
                marginBottom: '16px'
            }
        }, cells),
        e('button', {
            onClick: gameActive ? () => setGameActive(false) : startGame,
            style: {
                padding: '10px 26px',
                fontSize: '1.1rem',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: gameActive ? '#f44336' : '#4caf50',
                color: '#fff',
                userSelect: 'none',
                boxShadow: gameActive ? '0 0 15px #f4433699' : '0 0 15px #4caf5099',
                transition: 'background-color 0.3s ease',
            }
        }, gameActive ? 'Стоп' : 'Старт'),
        !gameActive && score > 0 && e('p', {
            style: {
                marginTop: '15px',
                fontSize: '1rem',
                color: '#82f1ff',
                fontWeight: '600'
            }
        }, `Игра окончена! Ты поймал(а) ${score} шариков!`)
    );
}

const root = ReactDOM.createRoot(document.getElementById('react-root-game'));
root.render(e(CatchTheBall));
