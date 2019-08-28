module.exports = {
    executeCalculate(number) {
        let parse = number.split(';').map(Number);
        let result = parse.reduce((a, b) => a ** b);
        return result.toString();
    }
}