module.exports = {
    executeCalculate(number) {
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
}