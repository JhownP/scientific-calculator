module.exports = {
    executeCalculate(number) {
        var parse = number.split(';').map(Number);
        var result = parse.reduce((a, b) => a + b, 0) / parse.length;
        return result.toString();
    }
}