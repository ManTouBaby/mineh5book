<template>
  <div id="app-container">
      <transition>
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  #app-container {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .1);

    overflow-x: hidden;
  }
</style>
