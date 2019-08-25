const Factorial = require('../../business/calculator/FactorialBusiness');

module.exports = {
    store(req, res) {
        const  { numberCalculation } = req.body;
        if (numberCalculation) {
            return res.json({
                numberReturn: Factorial.calculate(numberCalculation)
            });
        }
    }
}