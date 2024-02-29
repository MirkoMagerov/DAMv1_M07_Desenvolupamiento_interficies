function init() {
    let gameContainer = document.querySelector('#game-container');
    let gameContainerBoundaries = gameContainer.getBoundingClientRect();
    let follower = document.querySelector('#follower');

    gameContainer.addEventListener('mousemove', (e) => {
        let newLeft = e.clientX;
        let containerLeft = gameContainer.offsetLeft;
        let containerWidth = gameContainer.offsetWidth;
    
        let minLeft = containerLeft + 20; // Límite izquierdo
        let maxLeft = containerLeft + containerWidth - follower.offsetWidth - 20; // Límite derecho
    
        // Asegúrate de que newLeft esté dentro de los límites izquierdo y derecho
        newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
    
        follower.style.left = newLeft + 'px';
    });
}