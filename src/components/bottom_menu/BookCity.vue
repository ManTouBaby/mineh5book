<template>
  <div>
    <!--最外层上下滚动容器-->
    <nut-scroller :is-loading="isLoading" :type="'vertical'" @pulldown="pulldown">
      <div slot="list" class="nut-vert-list-panel">
        <!--左右滑动Banner部分-->
        <nut-swiper
          direction="horizontal"
          ref="dem4"
          :autoPlay="3000"
          :lazyLoad="true"
          :paginationVisible="true"
          id="dome4"
        >
          <div class="nut-swiper-slide gray" v-for="item in bannerList" :key="item.param">
            <img :data-src="item.imgurl" style="width:100%; height:100%" class="nut-img-lazyload">
          </div>
        </nut-swiper>
        <!--中部菜单导航部分-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon iconfont icon-pingfen"></span>
              <div class="mui-media-body">推荐</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-email"></span>
              <div class="mui-media-body">评分</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-chatbubble"></span>
              <div class="mui-media-body">完结</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-location"></span>
              <div class="mui-media-body">热更</div>
            </a>
          </li>
        </ul>

      </div>
    </nut-scroller>
  </div>
</template>

<script>
  import Api from "../../api";

  export default {
    created: function () {
      console.log("创建书城");
      this.getBannerData();
    },
    data: function () {
      return {
        bannerList: "",
        isLoading: false,
        imgurl: "https://imgapi.jiaston.com/shudan/images/24946.jpg"
      };
    },
    methods: {
      getBannerData: function () {
        this.axios.get(Api.getBanner("man")).then(response => {
          if (response.status === 200) {
            console.log(response.data);
            this.bannerList = response.data.data;
          } else {
            this.$toast.text("Banner数据加载失败");
          }
        });
      },
      pulldown() {
        this.isLoading = true;
        clearTimeout(this.timers);
        this.timer = setTimeout(() => {
          this.isLoading = false;
        }, 300);
      }
    }
  };
</script>

<style scoped>
</style>
