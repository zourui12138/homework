import Vue from 'vue'
import Router from 'vue-router'
import Agents from '../modules/Agents'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/agents',
            name: 'agents',
            component: Agents
        }
    ]
})
