const Tangent = require('../../business/calculator/TangentBusiness');

module.exports = {
    store(req, res) {
        const  { numberCalculation } = req.body;
        if (numberCalculation) {
            return res.json({
                numberReturn: Tangent.calculate(numberCalculation)
            });
        }
    }
}