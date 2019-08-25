const Fibonacci = require('../../business/calculator/FibonacciBusiness');

module.exports = {
    store(req, res) {
        const  { numberCalculation } = req.body;
        if (numberCalculation) {
            return res.json({
                numberReturn: Fibonacci.calculate(numberCalculation)
            });
        }
    }
}