const Cosine = require('../../business/calculator/CosineBusiness');

module.exports = {
    store(req, res) {
        const  { numberCalculation } = req.body;
        if (numberCalculation) {
            return res.json({
                numberReturn: Cosine.calculate(numberCalculation)
            });
        }
    }
}