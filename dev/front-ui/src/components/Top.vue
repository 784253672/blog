<template>
  <nav class="nav show">
    <span class="blog-info">shan博客</span>
    <div id="menus"></div>
  </nav>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
@import "../style/_style.scss";
@keyframes headerNoOpacity {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
.nav {
  position: absolute;
  top: 0;
  z-index: 90;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  padding: 0 36px;
  width: 100%;
  height: 60px;
  font-size: 1.3em;
  opacity: 0;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  .show {
    opacity: 1;
    -ms-filter: none;
    filter: none;
    animation: headerNoOpacity 1s;
  }
  .blog-info {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: $light-grey;
  }
  .menus {
  }
}
</style>
