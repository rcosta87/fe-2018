// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Formulario from './components/formularios.vue'
Vue.component('formulario-wrap', Formulario)
import Navigation from './components/navigation.vue'
Vue.component('nav-forms', Navigation)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App,
    },
    template: '<App/>'
})