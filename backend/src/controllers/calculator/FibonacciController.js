const Fibonacci = require('../../business/calculator/FibonacciBusiness');

module.exports = {
    calculate(req, res) {
        const { number } = req.query;
        if (number) {
            return res.json({
                numberReturn: Fibonacci.executeCalculate(number)
            });
        }
    }
}