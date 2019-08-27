const Cosine = require('../../business/calculator/CosineBusiness');

module.exports = {
    calculate(req, res) {
        const { number } = req.query;
        if (number) {
            return res.json({
                numberReturn: Cosine.executeCalculate(number)
            });
        }
    }
}