const btn = document.querySelector('button.start');
const showColors = document.querySelector('div.showColors');
const divColors = [...document.querySelectorAll('.colors div')];
let drawColors = [];

let addBoard = function () {

    showColors.classList.add('active')
}
let removeBoard = function () {
    showColors.classList.remove('active')
}



startGame = function () {

    let index = 0;

    start = new Colors();
    drawColors = start.getColors();
    console.log(drawColors);
    setTimeout(addBoard, 500)
    setTimeout(removeBoard, 3500)


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