import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'

var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:SearchContainer},
        {path:'/search',component:ShopcarContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/',component:NewsInfo},
        {path:'/home/goodsinfo/',component:GoodsInfo}
    ],
    linkActiveClass:'mui-active'
})
export default router