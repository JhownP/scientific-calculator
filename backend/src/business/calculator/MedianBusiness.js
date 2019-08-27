module.exports = {
    executeCalculate(number) {
        var parse = number.split(';').map(Number);
        const valores = parse.slice().sort((a, b) => a - b);
        const median = Math.floor(valores.length / 2);
        if (valores.length % 2 === 0) {
            return (valores[median - 1] + valores[median]) / 2;
        }
        return valores[median];
    }
}