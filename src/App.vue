<template>
  <div id="app-container">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title" v-text="title"></h1>
    </header>

    <transition>
      <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/bookRack" @click.native="showPage(1)">
        <span class="mui-icon mui-icon-extra mui-icon-extra-xiaoshuo"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">书架</span>
      </router-link>
      <router-link class="mui-tab-item" to="/bookCity" @click.native="showPage(2)">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">书城</span>
      </router-link>

      <router-link class="mui-tab-item" to="/bookRank" @click.native="showPage(3)">
        <span class="mui-icon mui-icon-extra mui-icon-extra-rank"></span>
        <span class="mui-tab-label">排行榜</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        title: "我的书架"
      }
    },
    methods: {
      showPage: function (index) {
        console.log("当前单击:" + index)
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

<style scoped>
  .mui-bar.mui-bar-nav {
    background-color: #46baff;
  }

  .mui-bar > .mui-title {
    color: #FFF;
  }

  #app-container {
    padding-top: 44px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all ease .5s;
  }
</style>
