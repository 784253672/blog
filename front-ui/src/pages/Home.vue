<template>
  <div>
    <header class="full-page">
      <top></top>
    </header>
  </div>
</template>
<script setup lang="ts">
import top from "../components/Top.vue";
</script>
<style scoped lang="scss">
.full-page {
  height: 100vh;
  background-attachment: fixed;
  position: relative;
  width: 100%;
  background-image: url(../assets/Home/banner.jpg);
  background-color: #49b1f5;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
}
</style>
