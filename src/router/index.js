import Vue from 'vue'
import Router from 'vue-router'
import Indenficadores from '@/components/form-idenficadores.vue'
import Nomes from '@/components/form-nomes'
import DadosDemograficos from '@/components/form-dados-demograficos'
import Enderecos from '@/components/form-enderecos'
import Comunicacoes from '@/components/form-comunicacoes.vue'
import ComunicacoesEdit from '@/components/form-comunicacoes-edit.vue'
import Vinculos from '@/components/form-vinculos'
import VinculosEdit from '@/components/form-vinculos-edit'
import Home from '@/components/home'
import Pacientes from '@/components/pacientes'
import Sair from "@/components/login.vue"
import IndentificadoresEdit from "@/components/form-idenficadores-edit.vue"
import NomesEdit from "@/components/form-nomes-edit.vue"
import DadosDemograficosEdit from "@/components/form-dados-demograficos-edit.vue"
import EnderecosEdit from '@/components/form-enderecos-edit.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/',
            redirect: '/home'
        }, {
            path: '/identificadores',
            name: 'Indenficadores',
            component: Indenficadores
        },
        {
            path: '/identificadores-edit',
            name: 'IndentificadoresEdit',
            component: IndentificadoresEdit
        }, {
            path: '/nomes',
            name: 'Nomes',
            component: Nomes
        },
        {
            path: '/nomes-edit',
            name: 'NomesEdit',
            component: NomesEdit
        },
        {
            path: '/dados-demograficos',
            name: 'Dados Demográficos',
            component: DadosDemograficos
        },
        {
            path: '/dados-demograficos-edit',
            name: 'Dados Demográficos Edit',
            component: DadosDemograficosEdit
        },
        {
            path: '/enderecos',
            name: 'Enderecos',
            component: Enderecos
        },
        {
            path: '/enderecos-edit',
            name: 'EnderecosEdit',
            component: EnderecosEdit
        },
        {
            path: '/comunicacoes',
            name: "Comunicacoes",
            component: Comunicacoes
        },
        {
            path: '/comunicacoes-edit',
            name: "Comunicacoes Edit",
            component: ComunicacoesEdit
        },
        {
            path: '/vinculos',
            name: "Vínculos",
            component: Vinculos
        },
        {
            path: '/vinculos-edit',
            name: "VínculosEdit",
            component: VinculosEdit
        },
        {
            path: "/pacientes",
            name: "Pacientes",
            component: Pacientes
        },
        {
            path: "/sair",
            name: "Sair",
            component: Sair
        }
    ]
})