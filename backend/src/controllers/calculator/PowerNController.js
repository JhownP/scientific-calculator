const PowerN = require('../../business/calculator/PowerNBusiness');

module.exports = {
    calculate(req, res) {
        const { number } = req.query;
        if (number) {
            return res.json({
                numberReturn: PowerN.executeCalculate(number)
            });
        }
    }
}