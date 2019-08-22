<template>
    <b-navbar type='is-dark'>
        <!-- ADICIONANDO O BRAND NA TELA AONDE TEM O LOGO E O TITULO -->
        <template slot="brand">
            <b-navbar-item href="/calculator.do" @click="this.openLoading">
                <img src="../assets/calculatorLogo.png" alt="Scientific Calculator"/>
            </b-navbar-item>
        </template>

        <!-- ADICIONANDO OS COMPONENTES DE INICIO -->
        <template slot="start">
            <b-navbar-item href="/documentation.do" @click="this.openLoading">
                Documentation
            </b-navbar-item>
        </template>

        <!-- ADICIONANDO O FINAL DOS COMPONENTES -->
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-dropdown aria-role="list" class="dropdownDev">
                        <button class="button is-dark" slot="trigger">
                            <span>DEV</span>
                            <b-icon class="fas fa-sort-down"></b-icon>
                        </button>

                        <b-dropdown-item aria-role="listitem">Jonatas Pedroso</b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">Thomaz Honorato</b-dropdown-item>
                    </b-dropdown>
                    <b-button class="button is-primary" size="is-small" :outlined="aux.github.outlined" :rounded="aux.github.rounded" @click="this.goToGithub">
                        <b-icon class="fab fa-github"></b-icon>
                        <span><strong>GitHub</strong></span>
                    </b-button>
                </div>
            </b-navbar-item>
        </template>

        <b-notification :closable="false">
            <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
        </b-notification>
    </b-navbar>
</template>

<script type="text/javascript">
	export default{
		name:'Navbar',
		data: function () {
            return {
                isLoading: true,
                isFullPage: true,
                aux: {
                    github: {
                        outlined: false,
                        rounded: true
                    }
                }
            }
        },
        methods: {
            openLoading() {
                debugger
                this.isLoading = true
                setTimeout(() => {
                    this.isLoading = false
                }, 10 * 1000)
            },
            goToGithub() {
                const url = `https://github.com/JhownP/scientific-calculator`;
                let win = window.open(url, '_blank');
                if (win) {
                    win.focus();
                }
            }
        }
	}
</script>

<style scoped>
    .dropdownDev {
        margin-right: 10px;
    }
</style>