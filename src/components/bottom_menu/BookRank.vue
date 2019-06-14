<template>
  <div id="bookRanContainer">
    <TitleBar class="titleBar"></TitleBar>

    <ul class="mui-table-view mui-grid-9 bg-write" style="height: 165px">
      <li class="fl mui-col-xs-4" v-for="n in 3">
        <bookCover
          :book-cover="imgSrc1"
          :book-name="bookName"
          :item-data="itemData"
          @child-click="childClick"
        ></bookCover>
      </li>
    </ul>
    <ul class="mui-table-view mui-grid-9 bg-write " style="height: 186px">
      <li class="fl mui-col-xs-4" v-for="n in 3">
        <bookCover
          :book-cover-type=2
          :book-cover="imgSrc1"
          :book-name="bookName"
          :book-author="bookAuthor"
          :item-data="itemData"
          @child-click="childClick"
        ></bookCover>
      </li>
    </ul>

    <bookCover
      :book-cover-type=3
      :book-cover="imgSrc1"
      :book-name="bookName"
      :book-desc="bookDesc"
      :item-data="itemData"
      @child-click="childClick"
    ></bookCover>
    <bookCover
      :book-cover-type=4
      :book-cover="imgSrc1"
      :book-name="bookName"
      :book-desc="bookDesc"
      :book-author="bookAuthor"
      :book-type="bookType"
      :item-data="itemData"
      @child-click="childClick"
    ></bookCover>
  </div>
</template>

<script>
  import bookCover from '../base/BookCover.vue'
  import TitleBar from '../base/CategoryTitleBar'

  export default {
    data: function () {
      return {
        imgSrc1: "https://imgapi.jiaston.com/shudan/images/24942.jpg",
        imgSrc: "https://imgapi.jiaston.com/shudan/images/24943.jpg",
        bookName: "天道图书馆",
        bookAuthor: '西红柿',
        bookType: '科幻灵异',
        bookDesc: '一本可以知晓一切的天书,天书在手，天下我有。一本可以知晓一切的天书,天书在手，天下我有',
        itemData: {"name": '我是测试数据', 'ctime': new Date()}
      }
    },
    components: {
      bookCover,
      TitleBar
    },
    methods: {
      childClick: function (item) {
        console.log("当前单击项目:" + item.name)
      }
    }
  }


</script>

<style scoped>
  #bookRanContainer::-webkit-scrollbar {
    display: none;
  }
  #bookRanContainer::-webkit-scrollbar {
    width:0px;
  }
  .titleBar {
    background-color: #fff;
  }

  .fl {
    float: left;
  }

  .bg-write {
    background-color: #fff;
  }
</style>
