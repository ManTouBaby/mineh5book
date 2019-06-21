<template>
  <div class="TitleBarContainer">
    <img id="titleBarTg" src="../../assets/images/ic_type_tag.png"/>
    <span v-text="titleName" id="titleName"></span>
    <div @click="clickMore(titleName)" id="titleMore">更多<span>></span></div>
  </div>
</template>

<script>
  export default {
    props: {
      titleData: Object,
      titleName: {
        type: String,
        default: "标题名称"
      }
    },
    methods: {
      clickMore: function (titleData) {
        this.$emit('clickMore', titleData)
      }
    }

  }
</script>

<style scoped>
  .TitleBarContainer {
    width: 100%;
    height: 32px;
  }

  #titleBarTg {
    float: left;
    width: 32px;
    height: 32px;
    margin-left: 6px;
  }
  #titleName{
    float: left;
    line-height: 32px;
    height: 32px;
    color: #333333;
  }
  #titleMore{
    float: right;
    color: #333333;
    margin-right: 12px;
  }
  #titleMore >span{
    font: 20px/32px '宋体';
    padding-left: 8px;
    color: #333333;
  }
</style>
