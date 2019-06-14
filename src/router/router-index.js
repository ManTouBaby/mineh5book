import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import bookCity from "@/components/bottom_menu/bookCity"
import bookRank from "@/components/bottom_menu/bookRank"
import bookRack from '@/components/bottom_menu/bookRack'

var vueRouter = new Router({
    routes: [
        {path: "/", redirect: "/bookRack"},
        {path: "/bookRack", component: bookRack},
        {path: "/bookCity", component: bookCity},
        {path: "/bookRank", component: bookRank}
    ],
    linkActiveClass: "mui-active"
})

export default vueRouter
