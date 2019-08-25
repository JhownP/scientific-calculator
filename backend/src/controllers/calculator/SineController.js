const Sine = require('../../business/calculator/SineBusiness');

module.exports = {
    store(req, res) {
        const  { numberCalculation } = req.body;
        if (numberCalculation) {
            return res.json({
                numberReturn: Sine.calculate(numberCalculation)
            });
        }
    }
}