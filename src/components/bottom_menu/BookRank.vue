<template>
  <!--下拉刷新容器-->
  <div id="bookRankContainer">
    <div class="checkerBox">
      <checker class="checker-item" v-model="sex" default-item-class="item-default"
               selected-item-class="demo1-item-selected"
               :radio-required="true">
        <checker-item :value="item" v-for="(item, index) in sexData" :key="index">{{item.value}}</checker-item>
      </checker>
      <checker class="checker-item" v-model="status" default-item-class="item-default"
               selected-item-class="demo1-item-selected"
               :radio-required="true">
        <checker-item :value="item" v-for="(item, index) in statusData" :key="index">{{item.value}}</checker-item>
      </checker>
      <checker class="checker-item" v-model="period" default-item-class="item-default"
               selected-item-class="demo1-item-selected"
               :radio-required="true">
        <checker-item :value="item" v-for="(item, index) in periodData" :key="index">{{item.value}}</checker-item>
      </checker>
    </div>

    <div v-for="item in bookRankDates" :key="item.Id">
      <bookCover
        :book-cover-type=5
        :book-cover="item.Img"
        :book-name="item.Name"
        :book-desc="item.Desc"
        :book-author="item.Author"
        :book-type="item.CName"
        :book-rate="item.Score"
        :item-data="item"
        @child-click="childClick"
      ></bookCover>
    </div>

  </div>

</template>

<script>
  import Api from "../../api";
  import bookCover from '../base/BookCover'
  import {Checker, CheckerItem} from 'vux';


  export default {
    name: "BookRank",
    components: {
      bookCover,
      Checker,
      CheckerItem
    },
    data: function () {
      return {
        sexData: [{value: "男生", key: "man"}, {value: "女生", key: "lady"}],
        statusData: [{value: "最热", key: "hot"}, {value: "推荐", key: "commend"}, {value: "推荐", key: "over"},
          {value: "收藏", key: "collect"}, {value: "新书", key: "new"}, {value: "评分", key: "vote"}],
        periodData: [{value: "周榜", key: "week"}, {value: "月榜", key: "month"}, {value: "总榜", key: "total"}],

        sex: {value: "男生", key: "man"},//排行查询条件 性别(男生/man、女生/lady)
        status: {value: "最热", key: "hot"},//排行查询条件 状态(最热/hot、推荐/commend、完结/over、收藏/collect、新书/new、评分/vote)
        period: {value: "周榜", key: "week"}, //排行查询条件 排行周期（周榜/week、月榜/month、总榜/total）
        currentPage: 1, //查询当前页码
        isLoadingMore: false,//数据是否是通过上拉加载获得

        bookRankDates: []
      }
    },
    created: function () {
      this.getBookRankDates();
    },
    methods: {
      getBookRankDates: function () {
        // 显示
        this.$vux.loading.show({text: 'Loading...'})
        var checkUrl = Api.getCheckRankList(this.sex.key, this.status.key, this.period.key, this.currentPage)
        this.axios.get(checkUrl).then(result => {
          // 隐藏
          this.$vux.loading.hide()
          if (result.status === 200) {
            if (!this.isLoadingMore) {
              this.bookRankDates = result.data.data.BookList;
            } else {
              this.bookRankDates.push(result.data.data.BookList);
            }
            // console.log(this.bookRankDates)
          } else {

          }
        })
      },
      childClick: function (item) {
        console.log(item.Id+"------"+item.Name)
        this.$router.push({
          path:'/bookInfo',
          query:{
            bookId:item.Id,
            bookName:item.Name
          }
        })
      }
    },
    watch: {
      sex: function () {
        this.getBookRankDates();
      },
      status: function () {
        this.getBookRankDates();
      },
      period: function () {
        this.getBookRankDates();
      },
      currentPage:function () {
        this.isLoadingMore = true;
        this.getBookRankDates();
      }
    }

  }
</script>

<style lang="scss" scoped>
  #bookRankContainer {
    background-color: #fff;
    .checkerBox {
      padding: 4px 16px;
      :nth-child(n) {
        margin: 4px 0;
        .checker-item {
          margin: 1px;
        }
      }
    }
  }

  .item-default {
    font: 100 14px/20px '微软雅黑';
    padding: 5px 12px;
    color: #000;
  }

  .demo1-item-selected {
    color: #ffffff;
    background-color: #00ACF6;
    border: 1px solid #00ACF6;
    border-radius: 18px;
  }
</style>
