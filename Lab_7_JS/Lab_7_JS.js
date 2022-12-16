let ball = document.getElementById('tball');

let startX = -100;
let startY = -100;
let x = startX;
let y = startY;


ball.onmousedown = function (event) { // (1) отследить нажатие
    // чтобы не было "тряски"
    // onmousedown
    startX = event.clientX;
    startY = event.clientY;
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
    console.log(`|onmousedown|startX: ${startX}, startY:${startY}, shiftX: ${shiftX}, shiftY: ${shiftY}`);
    // (2) подготовить к перемещению: разместить поверх остального содержимого и в абсолютных координатах
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.append(ball);
    // и установим абсолютно спозиционированный мяч под курсор

    moveAt(event.pageX, event.pageY);

    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(pageX, pageY) {
        // onmousemove
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
        console.log(`|moveAt|l: ${ball.style.left}, t:${ball.style.top}`);
    }

    function onMouseMove(event) {

        if (Math.abs(startX - event.clientX) > 150) {
            if (startX - event.clientX > 150) {
                x = startX - 150;
            }
            if (startX - event.clientX < 0) {
                x = startX + 150;
            }
        } else {
            x = event.pageX;
        }
        //325
        //475
        //    475 - 325 = 150
        //    475  -  325  < 
        //    475 - 200 < 
        if (event.clientY < 312 + shiftY) {
            y = 312 + shiftY;
        } else {
            y = event.pageY;
        }
        console.log(`|onMouseMove|x: ${x}, y: ${y}, event.clientX:${event.clientX}, event.clientY:${event.clientY}, event.pageX:${event.pageX}, event.pageY:${event.pageY}`);
        moveAt(x, y);
    }

    // (3) перемещать по экрану
    document.addEventListener('mousemove', onMouseMove);
    // (4) положить мяч, удалить более ненужные обработчики событий
    ball.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.body.onmouseup = () => animate(x, y, startX, startY);
        ball.onmouseup = null;

        return;
    };

};

ball.ondragstart = function () {
    return false;
};

function animate(x, y, startX, startY) {
    let dx = (startX - x);
    let dy = (startY - y);
    let tg = dy / dx;
    startX = dx < 0 ? startX - 3 * Math.abs(dx) : startX + 3 * Math.abs(dx);
    startY = dy < 0 ? startY - 3 * Math.abs(tg * dx) : startY + 3 * Math.abs(tg * dx);
    //alert(`x: ${x}, y:${y}, dx: ${dx}, dy: ${dy}, tg: ${tg}, startX: ${startX}, startY: ${startY}`);
    ball.style.transition = `all .2s ease-out`;
    ball.style.left = `${startX}px`;
    ball.style.top = `${startY}px`;
};

