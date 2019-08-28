import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

//DECLARANDO QUE EU DESEJO UTILIZAR O BUEFY
Vue.use(Buefy);

//DECLARANDO QUE MINHA BASE NÃO TEM CONFIGURAÇÃO DE PRODUÇÃO
Vue.config.productionTip = false

//DECLARANDO O MEU NODE_ENV DE PRODUÇÃO
const production = process.env.NODE_ENV === 'production'

//PREPARANDO URL DO BACKEND PARA CONEXÃO
let splitURL = window.location.href.split('/');
const baseURL = production ? `${splitURL[0]}/` : 'http://localhost:3000/api/calculadora/v1'; //Adicionar o IP de sua Maquina para testes no celular

//ADICIONANDO A URL DE INICIO DO PROGRAMA
Vue.use(VueAxios, axios.create({
  baseURL: baseURL
}))

//PASSANDO O RAUTER PARA VUE.
Vue.use(VueRouter)

//MAPEANDO A CLASSE PARA CRIAR A URL
import Calculator from '@/views/calculator/CalculatorForm';

//SELECIONANDO A MINHA CLASSE E ADICIONANDO A URL QUE FOI CRIADA
const routes = [
  { path: '/calculator.do' , component: Calculator, name: 'CalculatorForm' }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
