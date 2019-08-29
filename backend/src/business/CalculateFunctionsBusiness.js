'use strict'
class CalculateFunctionBusiness {
    calculateMedian(number) {
        let vectors = number.split(';').map(Number);
        let median, var1, var2;
        if (vectors.length % 2 == 0) {
            var1 = (vectors.length / 2) -1;
            var2 = var1 + 1;
            median = (vectors[var1] + vectors[var2]) / 2;
        } else {
            var1 = (vectors.length / 2) -0.5;
            median = vectors[var1];
        }
        return median.toString();
    }

    calculateArithmatic(number) {
        var parse = number.split(';').map(Number);
        var result = parse.reduce((a, b) => a + b, 0) / parse.length;
        return result.toString();
    }

    calculateCosine(number) {
        return Math.cos(number);
    }

    calculateFactorial(number) {
        if (number == '0' || number == '1') {
            return '1';
        } else {
            var valueReturn = 1;
            for (var index = 2; index <= number; index++) {
                valueReturn = valueReturn * index;
            }
            return valueReturn.toString();
        }
    }

    calculateFibonacci(number) {
        let index = 0 
        let initialNumber = 1
        let aux = 0
        let temp, numberReturn = [];

        if (number <= '1') {
            return number.toString();
        } else {
            while (number > 0) {
                temp = initialNumber;
                initialNumber = initialNumber + aux;
                aux = temp;
                number--;
                numberReturn[index] = aux;
                index++;
            }
            return numberReturn.toString();
        }
    }

    calculatePower(number) {
        let parse = number.split(';').map(Number);
        let result = parse.reduce((a, b) => a ** b);
        return result.toString();
    }

    calculateSine(number) {
        return Math.sin(number);
    }

    calculateTangent(number) {
        return Math.tan(number);
    }
}

module.exports = CalculateFunctionBusiness;