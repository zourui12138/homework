// 作者：小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
// 按需引入element-ui
import {Table,TableColumn,Form,FormItem,Button,Select,Option} from 'element-ui'
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);

import './assets/css/base.scss'

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
