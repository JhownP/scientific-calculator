const Tangent = require('../../business/calculator/TangentBusiness');

module.exports = {
    calculate(req, res) {
        const { number } = req.query;
        if (number) {
            return res.json({
                numberReturn: Tangent.executeCalculate(number)
            });
        }
    }
}