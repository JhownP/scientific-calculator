const Factorial = require('../../business/calculator/FactorialBusiness');

module.exports = {
    calculate(req, res) {
        const { number } = req.query;
        if (number) {
            return res.json({
                numberReturn: Factorial.executeCalculate(number)
            });
        }
    }
}