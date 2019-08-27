const Median = require('../../business/calculator/MedianBusiness');

module.exports = {
    calculate(req, res) {
        const { number } = req.query;
        if (number) {
            return res.json({
                numberReturn: Median.executeCalculate(number)
            });
        }
    }
}