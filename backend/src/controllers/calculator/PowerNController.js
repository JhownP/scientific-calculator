const PowerN = require('../../business/calculator/PowerNBusiness');

module.exports = {
    store(req, res) {
        const  { numberCalculation } = req.body;
        if (numberCalculation) {
            return res.json({
                numberReturn: PowerN.calculate(numberCalculation)
            });
        }
    }
}