const btn = document.querySelector('button.start');
const showColors = document.querySelector('div.showColors');
divColors = [...document.querySelectorAll('.colors div')];
divFirst = document.querySelector('div.first');

startGame = function () {
    let drawColors = [];
    let index = 0;

    start = new Colors();
    drawColors = start.getColors();
    console.log(drawColors);

    divColors.forEach(function (div) {
        div.addEventListener('click', function () {
            if (drawColors[index] === this.dataset.color) {
                console.log('dobrze!');
                index++;
            } else return drawColors = [], index = 0, alert('przegrales')
        })
    })
}

btn.addEventListener('click', startGame)