<template>
    <section>
        <div id="calculator">
            <div class="buttons-calculator">
                
                <!-- VISOR AONDE IRÁ APARECER OS RESULTADOS -->
                <div class="columns is-mobile">
                    <div class="column is-full">
                        <div class="result-visor">
                            <b-field label="Calculadora Ciêntifica">
                                <b-input maxlength="200" 
                                    type="textarea" 
                                    :disabled="permission.visor.disabled" 
                                    class="visor" rows="7"/>
                            </b-field>
                        </div>
                    </div>
                </div>

                <!-- BOTÕES DE APAGAR E LIMPAR A TELA -->
                <div class="columns is-mobile">
                    <div class="column is-full">
                        <div class="button-horizontal">
                            <div class="is-half">
                                <b-button class="button-calculate" type="is-danger" size="is-large">
                                    <b-icon class="fas fa-times" />
                                </b-button>
                            </div>

                            <div class="is-half">
                                <b-button class="button-calculate backspace" type="is-danger" size="is-large">
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
                            <b-button type="is-white" size="is-large">
                                <span><strong>7</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large">
                                <span><strong>4</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large">
                                <span><strong>1</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large">
                                <span><strong>;</strong></span>
                            </b-button>
                            <b-button type="is-warning" size="is-large">
                                <span><strong>Sin</strong></span>
                            </b-button>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <div class="buttons buttons-group">
                            <b-button type="is-white" size="is-large">
                                <span><strong>8</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large">
                                <span><strong>5</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large">
                                <span><strong>2</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large">
                                <span><strong>0</strong></span>
                            </b-button>
                            <b-button type="is-warning" size="is-large">
                                <span><strong>Cos</strong></span>
                            </b-button>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <div class="buttons buttons-group">
                            <b-button type="is-white" size="is-large">
                                <span><strong>9</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large">
                                <span><strong>6</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large">
                                <span><strong>3</strong></span>
                            </b-button>
                            <b-button type="is-white" size="is-large">
                                <span><strong>,</strong></span>    
                            </b-button>
                            <b-button type="is-warning" size="is-large">
                                <span><strong>Tan</strong></span>
                            </b-button>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        <div class="buttons buttons-group">
                            <b-button class="button-calculate" type="is-info" size="is-large">
                                <b-icon class="fab fa-foursquare" />
                            </b-button>
                            <b-button class="button-calculate" type="is-info" size="is-large">
                                <b-icon class="fab fa-autoprefixer" />
                            </b-button>
                            <b-button class="button-calculate" type="is-info" size="is-large">
                                <b-icon class="fab fa-meetup" />
                            </b-button>
                            <b-button class="button-calculate" type="is-info" size="is-large">
                                <b-icon class="fas fa-exclamation" />
                            </b-button>
                            <b-button class="button-calculate" type="is-info" size="is-large">
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
        name:'Calculator',
        data() {
            return {
                permission: {
                    visor: {
                        disabled: true,
                    }
                }
            }
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
    }

    .visor {
        margin-left: 15px;
        margin-right: 15px;
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