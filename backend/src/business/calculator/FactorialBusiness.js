module.exports = {
    calculate(number) {
        if (number == 0 || number == 1) {
            return 1;
        } else {
            var valueReturn = 1;
            for (var index = 2; index <= number; index++) {
                valueReturn = valueReturn * index;
            }
            return valueReturn;
        }
    }
}