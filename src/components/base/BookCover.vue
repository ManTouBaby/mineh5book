<template>
  <div>
    <div class="bookContainer">
      <!--包含封面 书名-->
      <div v-if="bookCoverType===1" @click="childClick(itemData)" id="type01">
        <div class="clickCover"></div>
        <img class="bookCover" :src="getBookCover"/>
        <p class="bookName text-ellipsis mxWidthAsCover singleLine" v-text="bookName"></p>
      </div>
      <!--包含封面 书名 作者-->
      <div v-if="bookCoverType===2" @click="childClick(itemData)" id="type02">
        <div class="clickCover"></div>
        <img class="bookCover" :src="getBookCover"/>
        <p class="bookName text-ellipsis mxWidthAsCover singleLine" v-text="bookName"></p>
        <p class="bookAuthor text-ellipsis mxWidthAsCover singleLine" v-text="bookAuthor"></p>
      </div>
      <!--包含封面 书名 描述-->
      <div v-if="bookCoverType===3" @click="childClick(itemData)" id="type03">
        <div class="clickCover"></div>
        <p class="bookName text-ellipsis" v-text="bookName"></p>
        <p class="bookDesc text-ellipsis multiLine" v-text="bookDesc" ></p>
        <img class="bookCover" :src="getBookCover"/>
      </div>
      <!--包含封面 书名 描述 作者 类型-->
      <div v-if="bookCoverType===4" @click="childClick(itemData)" id="type04" class="clearFix">
        <div class="clickCover"></div>
        <img class="bookCover" :src="getBookCover"/>
        <div class="box-right">
          <p class="bookName text-ellipsis" v-text="bookName"></p>
          <p class="bookDesc text-ellipsis multiLine" v-text="bookDesc"></p>
          <p class="bookAuthor" v-cloak>{{bookAuthor}}<span v-text="bookType" class="bookType"></span></p>
        </div>
      </div>

      <!--包含封面 书名 描述 作者 类型 评分-->
      <div v-if="bookCoverType===5" @click="childClick(itemData)" id="type05" class="clearFix">
        <div class="clickCover"></div>
        <img class="bookCover" :src="getBookCover"/>
        <div class="box-right">
          <p class="bookName text-ellipsis" v-text="bookName"></p>
          <p class="bookDesc text-ellipsis multiLine" v-text="bookDesc"></p>
          <p class="bookAuthor" v-cloak><span v-text="bookType" class="bookType"></span><i>|</i>{{bookAuthor}}</p>
          <span class="bookRate" v-cloak>{{bookRate}}分</span>
        </div>
      </div>

      <!--包含封面 书名 作者  最新章节-->
      <div v-if="bookCoverType===6" @click="childClick(itemData)" id="type06" class="clearFix">
        <div class="clickCover"></div>
        <img class="bookCover" :src="getBookCover"/>
        <div class="box-right">
          <p class="bookName text-ellipsis" v-text="bookName"></p>
          <p class="bookAuthor" v-cloak>作者:{{bookAuthor}}</p>
          <p class="bookLastSection" v-cloak>最新:{{bookLastSection}}</p>
        </div>
      </div>

      <!--包含封面 书名 最新章节 最新更新时间-->
      <div v-if="bookCoverType===7" @click="childClick(itemData)" id="type07" class="clearFix">
        <div class="clickCover"></div>
        <img class="bookCover" :src="getBookCover"/>
        <div class="box-right">
          <p class="bookName text-ellipsis" v-text="bookName"></p>
          <p class="bookLastSection" v-cloak>最新:{{bookLastSection}}</p>
          <p class="bookLastTime" v-cloak>{{bookLastTime}}</p>
        </div>
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
      'bookRate': Number,
      'bookLastSection': String,
      'bookLastTime': String
    },
    data: function () {
      return {}
    },
    methods: {
      childClick: function (data) {
        this.$emit('child-click', data)
      }
    },
    computed: {
      getBookCover: function () {
        if (this.bookCover.includes('http')) {
          return this.bookCover;
        } else {
          return 'https://imgapi.jiaston.com/BookFiles/BookImages/' + this.bookCover;
        }
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

  $book-name-size: 15px;
  $book-desc-size: 12px;
  $book-author-size: 14px;
  $book-type-size: 6px;

  $book-pd-size: 8px;

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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .singleLine{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    /* autoprefixer: off */
    -webkit-box-orient:vertical;
    /* autoprefixer: on */
    -webkit-line-clamp:1;
  }
  .multiLine{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    /* autoprefixer: off */
    -webkit-box-orient:vertical;
    /* autoprefixer: on */
    -webkit-line-clamp:2;
  }
  .mxWidthAsCover {
    max-width: $book-cover-width;
    margin: 0 auto;
  }

  .bookContainer:active .clickCover {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
  }

  .bookCover {
    display: block;
    height: $book-cover-height;
    width: $book-cover-width;
    object-fit: cover;
  }

  .bookName {
    color: $book-name-color;
    font-size: $book-name-size;
  }

  .bookAuthor {
    color: $book-author-color;
    font-size: $book-author-size;
  }

  .bookDesc {
    color: $book-desc-color;
    font-size: $book-desc-size;
  }

  .bookRate {
    font-size: 18px;
    color: #ec971f;
    font-style: italic;
    font-family: 宋体;
  }

  .bookContainer {
    width: 100%;
    padding: $book-pd-size 0;
    position: relative;
    /*background-color: #e9fff4;*/

    /*组件中第一个种显示方式*/

    div[id='type01'] {
      .bookCover {
        margin: 0 auto;
      }
      .bookName {
        text-align: center;
      }
    }
    /*组件中第二种显示方式*/
    div[id='type02'] {
      .bookCover {
        margin: 0 auto;
      }
      .bookName, .bookAuthor {
        text-align: center;
      }
    }
    /*组件中第三种显示方式*/
    div[id='type03'] {
      margin: 10px;
      .bookCover {
        width: 100%;
        margin: 0 auto;
      }
      .bookName {
        text-align: left;
      }
      .bookDesc{
        margin-bottom: 4px;
      }
    }
    /*组件中第四种显示方式*/
    div[id='type04'] {
      margin: 0 $book-pd-size * 2;
      .bookCover {
        float: left;
        object-fit: cover;
      }
      .box-right {
        position: relative;
        height: $book-cover-height - 16px;
        margin: 8px 12px 8px $book-cover-width+12px;
        .bookName {
          text-align: left;
          position: absolute;
          top: 0;
          left: 0;
        }
        .bookDesc {
          max-height: 40px;

          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -20px;
        }
        .bookAuthor {
          position: absolute;
          bottom: 0;
          left: 0;

          .bookType {
            display: inline-block;
            font-size: $book-type-size;
            line-height: 12px;
            padding: 2px 4px;
            border-radius: 10px;
            margin-left: 8px;
            border: 1px solid $book-type-color;
            color: $book-type-color;
          }
        }
      }

    }
    /*组件中第五种显示方式*/
    div[id='type05'] {
      margin: 0 $book-pd-size * 2;
      .bookCover {
        float: left;
        object-fit: cover;
      }
      .box-right {
        position: relative;
        height: $book-cover-height - 16px;
        margin: 8px 12px 8px $book-cover-width+12px;
        .bookName {
          text-align: left;
          position: absolute;
          top: 0;
          left: 0;
        }
        .bookDesc {
          max-height: 40px;

          position: absolute;
          left: 0;
          bottom: 0;
        }
        i {
          font-size: 14px;
          padding: 0 8px;
        }
        .bookAuthor {
          position: absolute;
          top: 28px;
          left: 0;
        }
        .bookRate {
          position: absolute;
          right: 0;
          top: 0;
        }

      }

    }
    /*组件中第六种显示方式*/
    div[id='type06'] {
      margin: 0 $book-pd-size * 2;
      .bookCover {
        float: left;
        object-fit: cover;
      }
      .box-right {
        position: relative;
        height: $book-cover-height - 16px;
        margin: 8px 12px 8px $book-cover-width+12px;
        .bookName {
          text-align: left;
          position: absolute;
          top: 0;
          left: 0;
        }
        .bookAuthor {
          position: absolute;
          top: 28px;
          left: 0;
        }
        .bookLastSection {
          position: absolute;
          top: 56px;
          left: 0;
        }

      }

    }
    div[id='type07'] {
      margin: 0 $book-pd-size * 2;
      .bookCover {
        float: left;
        object-fit: cover;
      }
      .box-right {
        position: relative;
        height: $book-cover-height - 16px;
        margin: 8px 12px 8px $book-cover-width+12px;
        .bookName {
          text-align: left;
          position: absolute;
          top: 0;
          left: 0;
        }
        .bookLastSection {
          position: absolute;
          top: 28px;
          left: 0;
        }
        .bookLastTime {
          position: absolute;
          top: 56px;
          left: 0;
        }
      }

    }
  }
</style>
