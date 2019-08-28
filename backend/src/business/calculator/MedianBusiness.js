module.exports = {
    executeCalculate(number) {
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
}