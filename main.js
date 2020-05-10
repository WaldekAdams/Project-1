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
    showColors.textContent = drawColors
    console.log(drawColors);
    setTimeout(addBoard, 500)
    setTimeout(removeBoard, 3500)


    divColors.forEach(function (div) {
        div.addEventListener('click', function () {
            if (drawColors[index] === this.dataset.color) {
                console.log('dobrze!');
                showColors.textContent = 'Dobrze!';
                setTimeout(addBoard, 100)
                setTimeout(removeBoard, 500)
                index++;

            }
            if (index === drawColors.length) return
        })
    })

}

btn.addEventListener('click', startGame)