import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'
import alert from './alert'
import dialog from './dialog'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        counter,
        alert,
        dialog,
        auth
    }
})