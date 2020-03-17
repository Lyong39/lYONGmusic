import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router/router";
import axios from 'axios';

Vue.config.productionTip = false;

Vue.use(ElementUI);

axios.defaults.baseURL = 'https://autumnfish.cn';

Vue.prototype.$axios = axios;

Vue.filter('filterArr', function (arr) {
    let newArr = arr.map(item => {
        return item.name;
    });
    return newArr.join('&');
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
