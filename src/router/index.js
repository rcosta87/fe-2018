import Vue from 'vue'
import Router from 'vue-router'
import Indenficadores from '@/components/form-idenficadores.vue'
import Nomes from '@/components/form-nomes'
import DadosDemograficos from '@/components/form-dados-demograficos'
import Enderecos from '@/components/form-enderecos'
import Comunicacoes from '@/components/form-comunicacoes.vue'
import Vinculos from '@/components/form-vinculos'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Indenficadores',
            component: Indenficadores
        }, {
            path: '/nomes',
            name: 'Nomes',
            component: Nomes
        },
        {
            path: '/dados-demograficos',
            name: 'Dados Demográficos',
            component: DadosDemograficos
        },
        {
            path: '/enderecos',
            name: 'Enderecos',
            component: Enderecos
        },
        {
            path: '/comunicacoes',
            name: "Comunicacoes",
            component: Comunicacoes
        },
        {
            path: '/vinculos',
            name: "Vínculos",
            component: Vinculos
        }
    ]
})