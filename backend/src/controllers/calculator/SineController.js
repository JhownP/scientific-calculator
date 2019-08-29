const CalculateFunction = require('../../business/CalculateFunctionsBusiness');
const calculete = new CalculateFunction();

module.exports = {
    calculate(req, res) {
        const { number } = req.query;
        if (number) {
            return res.json({
                numberReturn: calculete.calculateSine(number)
            });
        }
    }
}