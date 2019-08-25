const Median = require('../../business/calculator/MedianBusiness');

module.exports = {
    store(req, res) {
        const  { numberCalculation } = req.body;
        if (numberCalculation) {
            return res.json({
                numberReturn: Median.calculate(numberCalculation)
            });
        }
    }
}