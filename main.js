const btn = document.querySelector('button.start');
const showColors = document.querySelector('div.showColors');
divColors = [...document.querySelectorAll('.colors div')];
divFirst = document.querySelector('div.first');

let drawColors = []
let index = 0;

startGame = function () {
    start = new Colors();
    drawColors = start.getColors();
    console.log(drawColors)

}

divColors.forEach(function (div) {
    div.addEventListener('click', function () {

        if (drawColors[index] === this.dataset.color) {
            console.log('dobrze!');
            index++;
        } else alert('Przegrales')
    })
})
btn.addEventListener('click', startGame)