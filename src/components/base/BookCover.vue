<template>
  <div class="bookContainer">
    <!--包含封面 书名-->
    <div v-if="bookCoverType===1" @click="childClick(itemData)" id="type01">
      <div class="clickCover"></div>
      <img class="bookCover" :src="bookCover"/>
      <p class="bookName text-ellipsis" v-text="bookName"></p>
    </div>
    <!--包含封面 书名 作者-->
    <div v-if="bookCoverType===2" @click="childClick(itemData)" id="type02">
      <div class="clickCover"></div>
      <img class="bookCover" :src="bookCover"/>
      <p class="bookName text-ellipsis" v-text="bookName"></p>
      <p class="bookAuthor text-ellipsis" v-text="bookAuthor"></p>
    </div>
    <!--包含封面 书名 描述-->
    <div v-if="bookCoverType===3" @click="childClick(itemData)" id="type03">
      <div class="clickCover"></div>
      <p class="bookName text-ellipsis" v-text="bookName"></p>
      <p class="bookDesc text-ellipsis" v-text="bookDesc"></p>
      <img class="bookCover" :src="bookCover"/>
    </div>
    <!--包含封面 书名 描述 作者 类型-->
    <div v-if="bookCoverType===4" @click="childClick(itemData)" id="type04" class="clearFix">
      <div class="clickCover"></div>
      <img class="bookCover" :src="bookCover"/>
      <div class="box-right">
        <p class="bookName text-ellipsis" v-text="bookName"></p>
        <p class="bookDesc text-ellipsis" v-text="bookDesc"></p>
        <p class="bookAuthor" v-cloak>{{bookAuthor}}<span v-text="bookType" class="bookType"></span></p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      itemData: Object,
      bookCoverType: {
        type: Number,
        default: 1
      },
      'bookName': String,
      'bookAuthor': String,
      'bookType': String,
      'bookDesc': String,
      'bookCover': String,
      'bookRate': String,
      'bookLastSection': String,
      'bookLastTime': String
    },
    data: function () {
      return {}
    },
    methods: {
      childClick: function (data) {
        console.log(data)
        this.$emit('child-click', data)
      }
    }

  }
</script>


<style scoped lang="scss">
  $book-cover-width: 88px;
  $book-cover-height: 118px;
  $book-name-color: #333;
  $book-desc-color: #888;
  $book-author-color: #666;
  $book-type-color: #66c1ff;

  p {
    padding: 0;
    margin: 0;
  }

  .clearFix:before, .clearFix:after {
    display: table;
    content: "";
  }

  .clearFix:after {
    clear: both;
  }

  .text-ellipsis {
    /*实现文字过多进行缩略*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }

  .bookContainer:active .clickCover {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
  }

  .bookContainer {
    width: 100%;
    padding: 8px;
    position: relative;
    background-color: #e9fff4;
    /*组件中第一个种显示方式*/
    div[id='type01'] {
      img {
        display: block;
        height: $book-cover-height;
        width: $book-cover-width;
        margin: 0 auto;
        object-fit: cover;
      }
      .bookName {
        color: $book-name-color;
        display: block;
        font-size: 15px;
        text-align: center;
      }
    }
    /*组件中第二种显示方式*/
    div[id='type02'] {
      img {
        display: block;
        height: $book-cover-height;
        width: $book-cover-width;
        margin: 0 auto;
        object-fit: cover;
      }
      .bookName {
        color: $book-name-color;
        display: block;
        font-size: 15px;
        text-align: center;
      }
      .bookAuthor {
        color: $book-author-color;
        display: block;
        font-size: 13px;
        text-align: center;
      }
    }
    /*组件中第三种显示方式*/
    div[id='type03'] {
      img {
        display: block;
        height: $book-cover-height;
        width: 100%;
        margin: 0 auto;
        object-fit: cover;
      }
      .bookName {
        color: $book-name-color;
        width: 100%;
        display: block;
        font-size: 15px;
      }
      .bookDesc {
        display: block;
        width: 100%;
        color: $book-desc-color;
        font-size: 13px;
      }
    }
    /*组件中第四种显示方式*/
    div[id='type04'] {
      /*position: absolute;*/
      .bookCover {
        height: $book-cover-height;
        width: $book-cover-width;
        float: left;
        object-fit: cover;
      }
      .box-right {
        position: relative;
        height: $book-cover-height - 16px;
        margin: 8px 12px 8px $book-cover-width+12px;
        .bookName {
          color: $book-name-color;
          font-size: 15px;
          position: absolute;
          top: 0;
          left: 0;
        }
        .bookDesc {
          max-height: 40px;
          color: $book-desc-color;
          font-size: 12px;

          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -20px;
        }
        .bookAuthor {
          position: absolute;
          bottom: 0;
          left: 0;
          color: $book-author-color;
          font-size: 13px;
          .bookType {
            display: inline-block;
            font-size: 5px;
            line-height: 16px;
            padding: 2px 4px;
            border-radius: 10px;
            margin-left: 8px;
            border: 1px solid $book-type-color;
            color: $book-type-color;
          }
        }
      }

    }
  }
</style>
