const btn = document.querySelector('button.start');
const showColors = document.querySelector('div.showColors');
colors = [...document.querySelectorAll('.colors div')];
divFirst = document.querySelector('div.first');


function comparisonColors() {
    if (colors[0] === this.dataset.color) {
        console.log('ok')
    }
}

colors.forEach(function (div) {
    colArray = ["red", 'green']
    div.addEventListener('click', function () {
        if (colArray[0] === this.dataset.color) {
            console.log('dziala')
        }
    })
})
btn.addEventListener('click', function () {
    start = new Colors();
    let test = start.getColors();
    console.log(test)

})