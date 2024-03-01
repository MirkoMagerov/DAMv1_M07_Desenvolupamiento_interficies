function init() {
    let gameContainer = document.querySelector('#game-container');
    let follower = document.querySelector('#follower');

    gameContainer.addEventListener('mousemove', (e) => {
        let newLeft = e.clientX;
        let containerLeft = gameContainer.offsetLeft;
        let containerWidth = gameContainer.offsetWidth;
    
        // Definir limites con un poco de margen
        let minLeft = containerLeft + 20; 
        let maxLeft = containerLeft + containerWidth - follower.offsetWidth - 20;

        newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
    
        follower.style.left = newLeft + 'px';
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === ' ') { 
            let bullet = document.createElement('div');
            bullet.classList.add('bullet');

            let followerBoundaries = follower.getBoundingClientRect();
            let followerCenterX = followerBoundaries.left + followerBoundaries.width / 2;
            bullet.style.left = (followerCenterX - bullet.offsetHeight / 2) + 'px';
            bullet.style.top = followerBoundaries.y + 'px';

            let bulletInterval = setInterval(() => {
                let bulletTop = parseInt(bullet.style.top);
                let gameContainerTop = gameContainer.getBoundingClientRect().top;

                if (bulletTop <= (gameContainerTop + 20)) {
                    bullet.remove();
                    clearInterval(bulletInterval);
                }
                else {
                    bullet.style.top = (bulletTop - 20) + 'px';
                }

            }, 45)

            gameContainer.appendChild(bullet);
        }
    })
}