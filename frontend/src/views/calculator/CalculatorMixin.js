const api = require('../../services/api');

export default {
    methods: {
        submitArithmatic(number) {
            return this.defaultFunctionCalculate(number, '/arithmatic');
        },
        submitCosine(number) {
            return this.defaultFunctionCalculate(number, '/cosine');
        },
        submitFactorial(number) {
            return this.defaultFunctionCalculate(number, '/factorial');
        },
        submitFibonacci(number) {
            return this.defaultFunctionCalculate(number, '/fibonacci');
        },
        submitMedian(number) {
            return this.defaultFunctionCalculate(number, '/median');
        },
        submitPowerN(number) {
            return this.defaultFunctionCalculate(number, '/power');
        },
        submitSine(number) {
            return this.defaultFunctionCalculate(number, '/sine');
        },
        submitTangent(number) {
            return this.defaultFunctionCalculate(number, '/tangent');
        },
        async defaultFunctionCalculate(numberCalculation, urlBase) {
            this.isLoading = true;
            try {
                if (numberCalculation) {
                    let resp = await this.axios({
                        method: 'post',
                        url: api + urlBase,
                        data: numberCalculation
                    });

                    if (resp.data.numberReturn) {
                        this.$buefy.toast.open({
                            duration: 1000,
                            message: 'Calculo Efetuado com Sucesso!',
                            position: 'is-top',
                            type: 'is-success'
                        });
                    }   
                }
            } catch(err) {
                this.$buefy.toast.open({
                    duration: 1000,
                    message: 'Erro ao Efetuar o Calculo' + err,
                    position: 'is-top',
                    type: 'is-danger'
                })                
            } finally {
                this.isLoading = false;
            }
        }
    }
}