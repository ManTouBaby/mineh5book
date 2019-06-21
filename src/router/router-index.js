import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import bookCity from "../components/bottom_menu/bookCity"
import bookRank from "../components/bottom_menu/BookRank"
import bookRack from '../components/bottom_menu/bookRack'
import main from '../components/Main'
import bookInfo from '../components/book_info/BookInfo'

var vueRouter = new Router({
  routes: [
    {
      path: "/", redirect: "/main"
    },
    {
      path: "/main", component: main,
      children: [
        {path: "bookRack", component: bookRack},
        {path: "bookCity", component: bookCity},
        {path: "bookRank", component: bookRank},
      ],
      redirect:"/main/bookRack"
    },
    {
      path:"/bookInfo",component:bookInfo
    }

  ],
  linkActiveClass: "mui-active"
})

export default vueRouter
