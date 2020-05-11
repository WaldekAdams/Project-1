const btn = document.querySelector('button.start');
const showColors = document.querySelector('div.showColors');
const divColors = [...document.querySelectorAll('.colors div')];
const divResult = document.querySelector('div.result')
let drawColors = [];
let colthis;
let flag = true;
let index = 0;
let addBoard = function () {

    showColors.classList.add('active')
}
let removeBoard = function () {
    showColors.classList.remove('active')
}



startGame = function () {
    // let flag = true;
    divResult.classList.remove('run');
    index = 0;

    start = new Colors();
    drawColors = start.getColors();
    showColors.textContent = drawColors
    console.log(drawColors);
    setTimeout(addBoard, 500)
    setTimeout(removeBoard, 3500)



}
if (flag) {
    divColors.forEach(function (div) {
        div.addEventListener('click', function () {
            colthis = this.dataset.color;
            if (drawColors[index] === colthis) {
                console.log('dobrze!');
                showColors.textContent = 'Dobrze!';
                setTimeout(addBoard, 100)
                setTimeout(removeBoard, 400)
                index++;
                if (index === drawColors.length) {
                    divResult.textContent = 'Wygrana!!';
                    divResult.style.color = 'rgb(17, 212, 11)'
                    divResult.classList.add('run')
                    drawColors = [];
                }
            } else if (drawColors[index] !== colthis && index < drawColors.length) {
                // flag = !flag;
                divResult.textContent = 'Przegrana!';
                divResult.style.color = 'rgb(160, 15, 15)'
                divResult.classList.add('run')
                drawColors = []
            }
        })

    })
}

btn.addEventListener('click', startGame)