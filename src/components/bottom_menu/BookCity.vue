<template>
  <div>
    <!--最外层上下滚动容器-->
    <!--左右滑动Banner部分-->
    <swiper v-if="bannerList" auto class="bannerContainer" dots-position="center">
      <swiper-item v-for="item in bannerList" :key="item.param" style="width:100%; height:100%">
        <img :src="item.imgurl" style="width:100%; height:100%"/>
      </swiper-item>
    </swiper>

    <!--中部菜单导航部分-->
    <div class="clearFix bg-white menuBar-Container">
      <div class="menu-item">
        <div class="clickBG"></div>
        <span class="iconfont icon-recommend"></span>
        <div class="mui-media-body">推荐</div>
      </div>
      <div class="menu-item">
        <div class="clickBG"></div>
        <span class=" iconfont icon-rate"></span>
        <div class="mui-media-body">评分</div>
      </div>
      <div class="menu-item">
        <div class="clickBG"></div>
        <span class=" iconfont icon-complete"></span>
        <div class="mui-media-body">完结</div>
      </div>
      <div class="menu-item">
        <div class="clickBG"></div>
        <span class=" iconfont icon-hot"></span>
        <div class="mui-media-body">热更</div>
      </div>
    </div>

    <!--重磅推荐部分-->
    <TitleBar v-if="cityData" class="bg-white"
              :title-name="importTitle"></TitleBar>
    <swiper v-if="cityData" auto class="importContainer" dots-position="center" style="width:100%;">
      <swiper-item v-for="pageIndex in getImportRecommendCount" :key="pageIndex" style="width:100%; height:100%;">
        <div class="clearFix" style="width:100%; height:100% ;">
          <div class="fl mui-col-xs-4" v-for="item in getImportRecommendSon(pageIndex)">
            <bookCover
              :key="item.Id"
              :book-cover="item.Img"
              :book-name="item.Name"
              :item-data="item"
              @child-click="childClick"
            ></bookCover>
          </div>
        </div>
      </swiper-item>
    </swiper>

    <!--火热新书-->
    <TitleBar v-if="cityData" class="bg-white"
              :title-name="hotTitle"></TitleBar>
    <div v-if="cityData" class="bg-white hot-container">
      <bookCover
        class="hot-item"
        v-for="item in getHotRecommendSon(1)"
        :key="item.Id"
        :book-cover-type=4
        :book-cover="item.Img"
        :book-name="item.Name"
        :book-desc="item.Desc"
        :book-author="item.Author"
        :book-type="item.CName"
        :item-data="item"
        @child-click="childClick"
      ></bookCover>

      <div class="clearFix">
        <bookCover
          class="fl mui-col-xs-4" v-for="item in getHotRecommendSon(2)"
          :book-cover-type=2
          :key="item.Id"
          :book-cover="item.Img"
          :book-name="item.Name"
          :book-author="item.Author"
          :item-data="item"
          @child-click="childClick"
        ></bookCover>
      </div>

      <div class="clearFix bookType-container">
        <div class="fl mui-col-xs-3" v-for="item in getBookTypeList">
          <span v-text="item.CategoryName"></span>
        </div>
      </div>

    </div>

    <!--热门连载-->
    <TitleBar v-if="cityData" class="bg-white"
              :title-name="serialTitle"></TitleBar>
    <div v-if="cityData" class="serial-container bg-white">
      <bookCover
        class="hot-item"
        v-for="item in getSerialSon(1)"
        :key="item.Id"
        :book-cover-type=4
        :book-cover="item.Img"
        :book-name="item.Name"
        :book-desc="item.Desc"
        :book-author="item.Author"
        :book-type="item.CName"
        :item-data="item"
        @child-click="childClick"
      ></bookCover>
      <div class="clearFix">
        <bookCover
          class="fl mui-col-xs-4" v-for="item in getSerialSon(2)"
          :book-cover-type=2
          :key="item.Id"
          :book-cover="item.Img"
          :book-name="item.Name"
          :book-author="item.Author"
          :item-data="item"
          @child-click="childClick"
        ></bookCover>
      </div>
      <div class="clearFix">
        <bookCover
          class="fl mui-col-xs-4" v-for="item in getSerialSon(3)"
          :book-cover-type=2
          :key="item.Id"
          :book-cover="item.Img"
          :book-name="item.Name"
          :book-author="item.Author"
          :item-data="item"
          @child-click="childClick"
        ></bookCover>
      </div>
    </div>

    <!--重推书单-->
    <bookCover
      v-if="importBookList"
      class="import-bookList-container bg-white"
      :book-cover-type=3
      :book-cover="importBookList.ImgUrl"
      :book-name="importBookList.Title"
      :book-desc="importBookList.Description"
      :item-data="importBookList"
      @child-click="ImpostBookChildClick"
    ></bookCover>

    <!--完本精选-->
    <TitleBar v-if="cityData" class="bg-white"
              :title-name="completeTitle"></TitleBar>
    <div v-if="cityData" class="complete-container bg-white">

      <div class="clearFix">
        <bookCover
          class="fl mui-col-xs-4" v-for="item in getCompleteBooks(1)"
          :book-cover-type=2
          :key="item.Id"
          :book-cover="item.Img"
          :book-name="item.Name"
          :book-author="item.Author"
          :item-data="item"
          @child-click="childClick"
        ></bookCover>
      </div>
      <div class="clearFix">
        <bookCover
          class="fl mui-col-xs-4" v-for="item in getCompleteBooks(2)"
          :book-cover-type=2
          :key="item.Id"
          :book-cover="item.Img"
          :book-name="item.Name"
          :book-author="item.Author"
          :item-data="item"
          @child-click="childClick"
        ></bookCover>
      </div>
    </div>
  </div>
</template>

<script>
  import Api from "../../api";
  import BookCover from '../base/BookCover'
  import TitleBar from '../base/CategoryTitleBar'
  import {Swiper, SwiperItem} from 'vux'

  export default {
    name: "bookcity",
    components: {
      BookCover,
      TitleBar,
      Swiper,
      SwiperItem
    },
    created: function () {
      this.getBannerData();
      this.getMainData();
    },
    data: function () {
      return {
        importTitle: '重磅推荐',
        hotTitle: '火热新书',
        completeTitle: '完本精选',
        serialTitle: '热门连载',

        sex: 'man',//接口统一参数

        bannerList: [],//Banner广告栏数据
        cityData: [],//主要数据
        importRecommend: [],//重磅推荐数据
        importBookList: null,//重推书单

        isLoading: false,
      };
    },
    methods: {
      getBannerData: function () {
        this.axios.get(Api.getBanner(this.sex)).then(response => {
          if (response.status === 200) {
            // console.log(response.data);
            this.bannerList = response.data.data;
          } else {
            this.$toast.text("Banner数据加载失败");
          }
        })
      },

      getMainData: function () {
        this.axios.get(Api.getBookCity(this.sex)).then(response => {
          if (response.status === 200) {
            console.log(response.data);
            this.cityData = response.data.data;
            var importBookList = this.getCityItem("重推书单");
            if (importBookList) {
              console.log(importBookList)
              this.importBookList = importBookList.BookList;
            }
          } else {
            // this.$toast.text("Banner数据加载失败");
          }
        })
      },

      pulldown() {
        this.isLoading = true;
        clearTimeout(this.timers);
        this.timer = setTimeout(() => {
          this.isLoading = false;
        }, 300);
      },

      childClick(item) {
        console.log("当前单击项目:" + item.Name)
      },
      ImpostBookChildClick(item) {
        //图书ID为  ListId

      },
      getCityItem: function (itemName) {
        var tt = this.cityData.filter(item => {
          return item.Category.includes(itemName)
        })

        if (tt.length > 0) return tt[0];
      }

    },
    computed: {
      getImportRecommendCount: function () {
        var result = this.getCityItem("重磅推荐");
        if (result) {
          this.importRecommend = result;
          return result.Books.length / 3
        }
      },
      getImportRecommendSon() {
        return function (pageIndex) {
          var star = 3 * pageIndex - 3;
          var end = 3 * pageIndex;
          return this.importRecommend.Books.slice(star, end);
        }
      },
      getHotRecommendSon() {
        return function (index) {
          var result = this.getCityItem('火热新书')
          if (result) {
            if (index === 1) {
              return result.Books.slice(0, 2);
            } else {
              return result.Books.slice(2, 5);
            }
          }
        }
      },
      getSerialSon() {
        return function (index) {
          var result = this.getCityItem('热门连载')
          if (result) {
            if (index === 1) {
              return result.Books.slice(0, 1);
            } else if (index === 2) {
              return result.Books.slice(1, 4);
            } else {
              return result.Books.slice(4, 7);
            }
          }
        }
      },
      getBookTypeList: function () {
        var result = this.getCityItem('分类导航');
        if (result) {
          return result.Categories;
        }
      },
      getCompleteBooks() {
        return function (index) {
          var result = this.getCityItem("完本精选")
          if (result) {
            if (index === 1) {
              return result.Books.slice(0, 3);
            } else {
              return result.Books.slice(3, 6);
            }
          }
        }
      }


    }
  }
</script>

<style scoped lang="scss">
  $margin-bottom: 4px;
  .bannerContainer {
    height: 168px !important;
  }

  .mui-col-xs-4 {
    width: 33.333%;
  }

  .mui-col-xs-3 {
    width: 25%;
  }

  /*菜单导航部分*/
  .menuBar-Container {
    margin-bottom: $margin-bottom;
    .menu-item {
      padding: 10px 0;
      width: 25%;
      float: left;
      color: #333333;
      text-align: center;
      position: relative;
      .iconfont {
        font-size: 30px;
      }
      .icon-rate {
        color: #ec9367;
      }

      .icon-hot {
        color: #ec3b52;
      }

      .icon-complete {
        color: #82ec7d;
      }

      .icon-recommend {
        color: #ec7469;
      }

    }
    .menu-item:active .clickBG {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .2);
    }
  }

  /*重磅推荐*/
  .importContainer {
    background-color: #fff;
    height: 178px;
    margin-bottom: $margin-bottom;
    overflow-x: hidden;
  }

  /*火热新书*/
  .hot-container {
    margin-bottom: $margin-bottom;
  }

  /*热门连载*/
  .bookType-container {
    text-align: center;
    padding: 8px;
    color: #ffffff;
    font: 200 12px/42px '微软雅黑';
    /*div{*/
    /*margin: 0 16px;*/
    /*}*/
    :nth-child(1) span {
      border: #00CCCB 1px solid;
      background-color: #00CCCB;
      border-radius: 21px;
      padding: 8px 12px;
    }
    :nth-child(2) span {
      border: #ec971f 1px solid;
      background-color: #ec971f;
      border-radius: 21px;
      padding: 8px 12px;
    }
    :nth-child(3) span {
      border: #989933 1px solid;
      background-color: #989933;
      border-radius: 21px;
      padding: 8px 12px;
    }
    :nth-child(4) span {
      border: #6665FE 1px solid;
      background-color: #6665FE;
      border-radius: 21px;
      padding: 8px 12px;
    }
  }

  /*热门连载*/
  .serial-container {
    margin-bottom: 1px;
  }

  /*重磅书单*/
  .import-bookList-container {
    margin-bottom: $margin-bottom;
  }

  /*完本精选*/

</style>
