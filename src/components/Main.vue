<template>
  <div id="main-container">
    <x-header class="common-header" :left-options="{showBack: false}" :title="title"></x-header>

    <transition>
      <router-view ></router-view>
    </transition>
    <tabbar id="menuBar" style="position: fixed; bottom: 0;left: 0; z-index: 500">
      <tabbar-item show-dot badge="2" link="/main/bookRack" @on-item-click="showPage(1)">
        <img slot="icon" src="../assets/images/icon_book_rack.png">
        <img slot="icon-active" src="../assets/images/icon_book_rack_select.png">
        <span slot="label">书架</span>
      </tabbar-item>
      <tabbar-item link="/main/bookCity" @on-item-click="showPage(2)">
        <img slot="icon" src="../assets/images/icon_book-city.png">
        <img slot="icon-active" src="../assets/images/icon_book_city_select.png">
        <span slot="label">书城</span>
      </tabbar-item>
      <tabbar-item link="/main/bookRank" @on-item-click="showPage(3)">
        <img slot="icon" src="../assets/images/icon_book_rank.png">
        <img slot="icon-active" src="../assets/images/icon_book_rank_select.png">
        <span slot="label">排行榜</span>
      </tabbar-item>
    </tabbar>



  </div>
</template>

<script>
  import {Tabbar, TabbarItem, Group, XHeader} from 'vux'

  export default {
    components: {Tabbar, TabbarItem, Group, XHeader},
    data: function () {
      return {
        title: "我的书架"
      }
    },
    methods: {
      showPage: function (index) {
        // console.log("当前单击:" + index)
        switch (index) {
          case 1:
            this.title = "我的书架"
            break
          case 2:
            this.title = "书城"
            break
          case 3:
            this.title = "排行榜"
            break
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mui-bar.mui-bar-nav {
    background-color: #00ACF6;
  }

  .mui-bar > .mui-title {
    color: #FFF;
  }

  #main-container {
    padding-top: 46px;
    padding-bottom: 53px;
    overflow-x: hidden;
  }
.common-header{
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  z-index: 500;
}
.main-container{

}
  /*#menuBar{*/
  /*position: fixed;*/
  /*left: 0;*/
  /*bottom: -5px;*/
  /*}*/
</style>
