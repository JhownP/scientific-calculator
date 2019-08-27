const Arithmatic = require('../../business/calculator/ArithmaticBusiness');

module.exports = {
    calculate(req, res) {
        const { number } = req.query;
        if (number) {
            return res.json({
                numberReturn: Arithmatic.executeCalculate(number)
            });
        }
    }
}