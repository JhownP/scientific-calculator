module.exports = {
    calculate(number) {
        if (number <= '1') {
            return number;
        } else {
            let initialNumber = 0;
            let numberReturn = 1;
            for ( let index = 2; index <= number; index++ ) {
                let aux = initialNumber;
                initialNumber = numberReturn;
                numberReturn += aux;
            }
            return numberReturn.toString();
        }
    }
}