function init() {
    // var newWindow = window.open('', '_blank', 'width=500px,height=200px,left=100, top=200',);
    // newWindow.document.write('<h1>Hello World!</h1>');

    // let resizeButton = document.createElement('button');
    // resizeButton.textContent = 'Move Window';
    // newWindow.document.body.appendChild(resizeButton);

    // resizeButton.addEventListener('click', () => {
    //     newWindow.moveBy(100,300);
    // });

    // let closeButton = document.createElement('button');
    // closeButton.textContent = 'Close Window';
    // newWindow.document.body.appendChild(closeButton);

    // closeButton.addEventListener('click', () => {
    //     newWindow.close();
    // })

    let button = document.querySelector('#boton1');
    button.addEventListener('click', () => {
        alert('Solo 1 click');
    });

    let button2 = document.querySelector('#boton2');
    button2.addEventListener('dblclick', () => {
        alert('Doble click');
    });
}