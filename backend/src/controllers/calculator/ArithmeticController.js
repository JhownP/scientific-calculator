const Arithmatic = require('../../business/calculator/ArithmaticBusiness');

module.exports = {
    store(req, res) {
        const  { numberCalculation } = req.body;
        if (numberCalculation) {
            return res.json({
                numberReturn: Arithmatic.calculate(numberCalculation)
            });
        }
    }
}