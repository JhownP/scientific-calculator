const Sine = require('../../business/calculator/SineBusiness');

module.exports = {
    calculate(req, res) {
        const { number } = req.query;
        if (number) {
            return res.json({
                numberReturn: Sine.executeCalculate(number)
            });
        }
    }
}