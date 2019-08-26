<template>
    <section>
        <div id="calculator" v-on:keyup.46="cleanVisor" v-on:keyup.8="cleanLastNumberVisor">
            <div class="buttons-calculator">
                
                <!-- VISOR AONDE IRÁ APARECER OS RESULTADOS -->
                <div class="columns is-mobile">
                    <div class="column is-full">
                        <div class="result-visor">
                            <b-field label="Calculadora Ciêntifica">
                                <b-input maxlength="15" 
                                    type="textarea" v-model="valueVisor"
                                    :disabled="permission.visor.disabled" 
                                    class="visor" rows="3"/>
                            </b-field>
                        </div>
                    </div>
                </div>

                <!-- BOTÕES DE APAGAR E LIMPAR A TELA -->
                <div class="columns is-mobile">
                    <div class="column is-full">
                        <div class="button-horizontal">
                            <div class="is-half">
                                <b-button class="button-calculate" type="is-danger" size="is-large" @click="cleanVisor">
                                    <b-icon class="fas fa-times" />
                                </b-button>
                            </div>

                            <div class="is-half">
                                <b-button class="button-calculate backspace" type="is-danger" size="is-large" @click="cleanLastNumberVisor">
                                    <b-icon class="fas fa-backspace" />
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TODOS OS BOTÕES DE NAVEGAÇÃO DA CALCULADORA -->
                <div class="columns is-mobile nav-buttons">
                    <div class="column is-one-quarter">
                        <div class="buttons buttons-group">
                            <b-button type="is-white" size="is-large" @click="addValuesVisor('7')">
                                <span><strong>7</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large" @click="addValuesVisor('4')">
                                <span><strong>4</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large" @click="addValuesVisor('1')">
                                <span><strong>1</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large" @click="addValuesVisor(';')">
                                <span><strong>;</strong></span>
                            </b-button>
                            <b-button type="is-warning" size="is-large" @click="submitCalculate('Sine')">
                                <span><strong>Sin</strong></span>
                            </b-button>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <div class="buttons buttons-group">
                            <b-button type="is-white" size="is-large" @click="addValuesVisor('8')">
                                <span><strong>8</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large" @click="addValuesVisor('5')">
                                <span><strong>5</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large" @click="addValuesVisor('2')">
                                <span><strong>2</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large" @click="addValuesVisor('0')">
                                <span><strong>0</strong></span>
                            </b-button>
                            <b-button type="is-warning" size="is-large" @click="submitCalculate('Cosine')">
                                <span><strong>Cos</strong></span>
                            </b-button>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <div class="buttons buttons-group">
                            <b-button type="is-white" size="is-large" @click="addValuesVisor('9')">
                                <span><strong>9</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large" @click="addValuesVisor('6')">
                                <span><strong>6</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large" @click="addValuesVisor('3')">
                                <span><strong>3</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large" @click="addValuesVisor(',')">
                                <span><strong>,</strong></span>    
                            </b-button>
                            <b-button type="is-warning" size="is-large" @click="submitCalculate('Tangent')">
                                <span><strong>Tan</strong></span>
                            </b-button>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <div class="buttons buttons-group">
                            <b-button class="button-calculate" type="is-info" size="is-large" @click="submitCalculate('Fibonacci')">
                                <b-icon class="fab fa-foursquare" />
                            </b-button>
                            <b-button class="button-calculate" type="is-info" size="is-large" @click="submitCalculate('Arithmetic')">
                                <b-icon class="fab fa-autoprefixer" />
                            </b-button>
                            <b-button class="button-calculate" type="is-info" size="is-large" @click="submitCalculate('Median')">
                                <b-icon class="fab fa-meetup" />
                            </b-button>
                            <b-button class="button-calculate" type="is-info" size="is-large" @click="submitCalculate('Factorial')">
                                <b-icon class="fas fa-exclamation" />
                            </b-button>
                            <b-button class="button-calculate" type="is-info" size="is-large" @click="submitCalculate('PowerN')">
                                <b-icon class="fas fa-bolt" />
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name:'calculator',
        data() {
            return {
                valueVisor: '0',
                validateComma: false,
                validateSemicolon: false,
                isLoading: false,
                permission: {
                    visor: {
                        disabled: true,
                    }
                }
            }
        },
        methods: {
            cleanVisor() {
                this.valueVisor = '0';
                this.validateComma = false;
                this.validateSemicolon = false;
            },
            cleanLastNumberVisor() {
                let lengthValue = `${this.valueVisor}`.length;
                this.valueVisor = `${this.valueVisor}`.substring(0, lengthValue - 1);

                if (lengthValue <= 1) {
                    this.valueVisor = '0';
                }
            },
            async submitCalculate(value) {
                switch (value) {
                    case 'Fibonacci':
                        this.valueVisor = await this.defaultFunctionCalculate(this.valueVisor, '/fibonacci');
                    break;
                    case 'Arithmetic':
                        this.valueVisor = await this.defaultFunctionCalculate(this.valueVisor, '/arithmatic');
                    break;
                    case 'Median':
                        this.valueVisor = await this.defaultFunctionCalculate(this.valueVisor, '/median');
                    break;
                    case 'Factorial':
                        this.valueVisor = await this.defaultFunctionCalculate(this.valueVisor, '/factorial');
                    break;
                    case 'PowerN':
                        this.valueVisor = await this.defaultFunctionCalculate(this.valueVisor, '/power');
                    break;
                    case 'Sine':
                        this.valueVisor = await this.defaultFunctionCalculate(this.valueVisor, '/sine');
                    break;
                    case 'Cosine':
                        this.valueVisor = await this.defaultFunctionCalculate(this.valueVisor, '/cosine');
                    break;
                    case 'Tangent':
                        this.valueVisor = await this.defaultFunctionCalculate(this.valueVisor, '/tangent');
                    break;
                }
            },
            addValuesVisor(value) {
                if (`${this.valueVisor}`.length < 15) {
                    if (value === ',')  {
                        if (!this.validateComma && !this.validateSemicolon) {
                            this.valueVisor += value;
                            this.validateComma = true;
                        }
                    } else if(value === ';') {
                        if (!this.validateSemicolon) {
                            this.valueVisor += value;
                            this.validateComma = false;
                            this.validateSemicolon = true;
                        }
                    } else if (value === '0') {
                        this.valueVisor += value;
                        this.validateSemicolon = false;
                    } else {
                        if (this.valueVisor === '0') {
                            this.valueVisor = value;
                        } else {
                            this.valueVisor += value;
                        }
                        this.validateSemicolon = false;
                    }
                } else {
                    this.$buefy.toast.open({
                        duration: 1000,
                        message: `Não é possível inserir mais de 15 dígitos`,
                        position: 'is-top',
                        type: 'is-danger'
                    });
                }
            },
            async defaultFunctionCalculate(numberCalculation, urlBase) {
                this.isLoading = true;
                try {
                    if (numberCalculation != null && numberCalculation != '0') {
                        const resp = await this.axios({
                            method: 'post',
                            url: urlBase,
                            data: {
                                numberCalculation: numberCalculation
                            }
                        });

                        if (resp.data.numberReturn) {
                            this.$buefy.toast.open({
                                duration: 5000,
                                message: 'Calculo Efetuado com Sucesso!',
                                position: 'is-top',
                                type: 'is-success'
                            });

                            return resp.data.numberReturn
                        } else {
                            return this.valueVisor = '0';
                        }
                    } else {
                        this.$buefy.toast.open({
                            duration: 5000,
                            message: 'Informe um Número para Efetuar o Calculo!',
                            position: 'is-top',
                            type: 'is-warning'
                        });

                        return this.valueVisor = '0';
                    }

                } catch(err) {
                    this.$buefy.toast.open({
                        duration: 5000,
                        message: 'Erro ao Efetuar o Calculo ' + err,
                        position: 'is-top',
                        type: 'is-danger'
                    })
                    this.valueVisor = '0';
                } finally {
                    this.isLoading = false;
                }
            }
        },
        watch:{
            
        }
    }
</script>

<style scoped>
    .buttons-calculator >>> .buttons-group {
        flex: 1;
        flex-direction: column;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .buttons-calculator >>> button.button.is-large {
        width: 100%;
        border-radius: 10px;
    }


    .button-horizontal >>> .is-half > .button-calculate {
        width: 79px !important;
        border-radius: 10px;
        margin-right: 14px !important;
    }

    .button-horizontal >>> .is-half > .button-calculate.backspace {
        margin-left: 8px !important;
    }

    .buttons-calculator >>> .buttons-group >>> .button-calculate {
        background-color: #ff9f43 !important;
    }

    .result-visor >>> .label {
        font-size: 1.2em;
        margin-top: 15px;
    }

    .result-visor >>> .visor > textarea {
        background-color: #eaeaea;
        border-radius: 15px;
        text-align: right;
        font-weight: bold;
        vertical-align: bottom;
    }

    .visor {
        margin-left: 15px;
        margin-right: 15px;
    }

    .visor >>> textarea {
        font-size: 30px;
        color: #2f3640;
    }

    .nav-buttons {
        margin-left: 2px;
        margin-right: 2px;
    }

    .button-horizontal {
        flex: 1;
        flex-direction: row;
        display: inline-flex;
        float: right;
    }

    button.button.is-large.is-warning {
        margin-right: 0.5rem;
    }

    button.button.button-calculate.is-large.is-info {
        margin-right: 0.5rem;
    }
</style>