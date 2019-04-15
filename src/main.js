import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import vueResource from 'vue-resource'
Vue.use(vueResource)
import router from './router'
import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

import app from './APP.vue'
import 'mint-ui/lib/style.css'


var vm=new Vue({
    el:'#app',
    // data:{
    //     msg:'123'
    // },
    render:c=>c(app),
router
// components:{
    //     login
    // }
})





















