import Vue from 'vue'
import './lib/mui/dist/css/mui.min.css'
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
import app from './APP.vue'
import 'mint-ui/lib/style.css'


var vm=new Vue({
    el:'#app',
    // data:{
    //     msg:'123'
    // },
    render:c=>c(app)

// components:{
    //     login
    // }
})





















