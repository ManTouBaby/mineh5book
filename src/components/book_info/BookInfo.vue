<template>
  <div id="bookInfoContainer">
    <div class="bookInfo" :style="{backgroundImage: 'url(' +getBookCover + ')'}">
      <!--遮罩层-->
      <div id="bookInfoShade"></div>
      <!--页面导航栏-->
      <div class="mine-header">
        <div class="left-arrow" @click="onBackClick"></div>
      </div>
      <!--图书基本信息-->
      <div class="bookInfoBase">
        <img :src="getBookCover"/>
        <div class="bookInfoDetails">
          <p class="bookName" v-cloak>{{bookInfo.Name}}</p>
          <p class="bookAuthor" v-cloak>作者：{{bookInfo.Author}}</p>
          <p class="bookType" v-cloak>类型：{{bookInfo.CName}}</p>
          <p class="bookUpdateStatus" v-cloak>状态：{{bookInfo.BookStatus}}</p>
          <p class="bookRate">
            <rater v-model="bookInfo.BookVote.Score/2" active-color="#F4EA28" disabled :font-size="15"></rater>
            {{bookInfo.BookVote.Score}}分
          </p>
        </div>
      </div>

    </div>
    <div id="bookInfoMainContainer">
      <div class="bookDesc">
        <h5>简介</h5>
        <p v-text="bookInfo.Desc"></p>
      </div>
      <div class="section">
        <h5>目录</h5>
        <div class="section-content">
          <img src="../../assets/images/ic_book_menu.png" alt="">

          <span>></span>
          <div>
            <p class="lastUpdateTime" v-cloak>最新更新：{{bookInfo.LastTime}}</p>
            <p class="lastUpdateSection" v-text="bookInfo.LastChapter"></p>
          </div>
        </div>
      </div>
      <div class="otherProduction">
        <h5>{{bookInfo.Author}}还写过</h5>
        <div v-for="item in bookInfo.SameUserBooks">
          <bookCover
            :book-cover-type=6
            :book-last-section="item.LastChapter"
            :book-cover="item.Img"
            :book-name="item.Name"
            :book-author="item.Author"
            :item-data="item"
            @child-click="childClick"
          ></bookCover>
        </div>
      </div>
      <div class="sameRecommend">
        <div class="sameTitle">
          <h5>同类推荐</h5>
          <span>换一换</span>
        </div>
        <div class="sameContent" v-show="sameRecommendData.length>0">
          <div class="fl" style="width: 25%" v-for="item in sameRecommendData">
            <bookCover
              :key="item.Id"
              :book-cover="item.Img"
              :book-name="item.Name"
              :item-data="item"
              @child-click="childClick"
            ></bookCover>
          </div>
        </div>
      </div>
    </div>
    <flexbox id="bookInfoBottom">
      <flexbox-item class="flex-demo" :span="3" style="margin: 0">
        <div>1</div>
      </flexbox-item>
      <flexbox-item class="flex-demo" :span="6" style="margin: 0">
        <div>立即阅读</div>
      </flexbox-item>
      <flexbox-item class="flex-demo" :span="3" style="margin: 0">
        <div>3</div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import {XHeader, Flexbox, FlexboxItem, Rater} from 'vux'
  import Api from '../../api'
  import bookCover from '../base/BookCover'

  export default {
    name: "BookInfo",
    components: {XHeader, Flexbox, FlexboxItem, Rater, bookCover},
    data: function () {
      return {
        bookInfoId: '',
        bookInfoName: '',

        bookInfo: null,
        sameRecommendData:[]
      }
    },
    created() {
      // console.log(this.$route)
      this.bookInfoId = this.$route.query.bookId;
      this.bookInfoName = this.$route.query.bookName;
      this.getBookInfo(this.bookInfoId)
    },
    methods: {
      getBookInfo() {
        this.$vux.loading.show({text: 'Loading...'})
        this.axios.get(Api.getBookInfo(this.bookInfoId)).then(result => {
          this.$vux.loading.hide()
          if (result.status === 200) {
            this.bookInfo = result.data.data;
            console.log(this.bookInfo)
          } else {

          }
        })
      },
      onBackClick() {
        this.$router.go(-1)
      },
      childClick(item) {
        console.log(item.Id + "------" + item.Name)
        this.bookInfoId = item.Id;
      },
      getSamoRecommendData(){

      }

    },
    computed: {

      getBookCover: function () {
        if (!this.bookInfo) return;
        if (this.bookInfo.Img.includes('http')) {
          return this.bookInfo.Img;
        } else {
          return 'https://imgapi.jiaston.com/BookFiles/BookImages/' + this.bookInfo.Img;
        }
      }
    },
    watch: {
      bookInfoId() {
        this.getBookInfo();
      }
    }

  }
</script>

<style lang="scss" scoped>


  #bookInfoContainer {
    background-color: transparent;
    .bookInfo {
      /*height: 228px;*/
      position: relative;
      height: 211px;

      background-repeat: no-repeat;
      background-size: 100% 211px;
      #bookInfoShade {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        background-color: #666;
        filter: Alpha(Opacity=60);
        opacity: 0.6;

      }
      .mine-header {
        height: 53px;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;

        .left-arrow {
          display: inline-block;
          height: 100%;
          padding: 0 24px;
          &:before {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            border: 1px solid #FFFFFF;
            border-width: 1px 0 0 1px;
            transform: rotate(315deg);
            top: 50%;
            margin-top: -6px;
            left: 21px;
          }
        }
      }
      .bookInfoBase {
        /*padding: 71px 18px 18px;*/
        /*z-index: 100;*/
        position: absolute;
        left: 18px;
        bottom: 18px;

        color: #FFF;
        img {
          float: left;
          width: 88px;
          height: 118px;
        }
        .bookInfoDetails {
          font-weight: 100;
          margin-left: 106px;
          font-size: 13px;
          .bookName {
            font-size: 18px;
            font-weight: 100;
            margin-bottom: 7px;
          }
          .bookAuthor, .bookType, .bookUpdateStatus {
            margin-bottom: 3px;
          }
        }
      }

    }
    #bookInfoMainContainer {
      margin-top: 4px;
      margin-bottom: 53px;
      h5 {
        font-size: 16px;
      }
      .bookDesc, .section, .otherProduction {
        background-color: #fff;
        padding: 8px 16px;
        margin-top: 4px;
      }
      .bookDesc {
        p {
          color: #888;
          font-size: 13px;
        }
      }
      .section {

        .section-content {
          height: 58px;
          img {
            float: left;
            margin: 20px 18px 20px 4px;
            width: 18px;
            height: 18px;
          }
          span {
            float: right;
            font: 100 20px/58px "宋体";
          }
          div {
            margin-left: 36px;
            margin-right: 36px;
            height: 38px;
            padding: 10px 0;
            .lastUpdateTime {
              color: #888;
              font-size: 14px;
            }
            .lastUpdateSection {
              color: #444;
              font-size: 15px;
              margin-top: 2px;
            }
          }
        }
      }
      .otherProduction {

      }
    }
    #bookInfoBottom {
      position: fixed;
      bottom: 0;
      left: 0;

      height: 53px;
      background-color: #fff;
      :nth-child(2) {
        background-color: #00ACF6;
        color: #ffffff;
        text-align: center;
        height: 100%;
        line-height: 53px;
        font-size: 18px;
      }
      .flex-demo {
        height: 100%;
      }
    }
  }
</style>
