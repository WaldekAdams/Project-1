class Colors {
    constructor() {
        this.colorChoice = ['red', 'green', 'blue', 'black', 'purple', 'yellow'];
        let _result = this.takeRandomColors();
        this.getColors = () => _result;

    }
    takeRandomColors() {
        let colorsArr = [];
        for (let i = 0; i < this.colorChoice.length; i++) {
            let index = Math.floor(Math.random() * this.colorChoice.length);
            let color = this.colorChoice[index];
            colorsArr.push(color);
        }
        return colorsArr

    }
}