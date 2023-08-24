<template>
  <div>
    <header class="full-page">
      <div class="scroll-down" @click="clickScrollDown">
        <img src="../assets/img/Home/allow-bottom.png" alt="" />
      </div>
    </header>
    <section style="height: 500px; width: 100%"></section>
  </div>
</template>
<script setup lang="ts">

// 点击底部滑动按钮
const clickScrollDown = (): void => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
</script>
<style scoped lang="scss">
@import "../style/_style.scss";
@keyframes scroll-down-effect {
  0% {
    top: 0;
    opacity: 0.4;
  }
  50% {
    top: -16px;
    opacity: 1;
    filter: none;
  }
  100% {
    top: 0;
    opacity: 0.4;
  }
}
.full-page {
  height: 100vh;
  background-attachment: fixed;
  position: relative;
  width: 100%;
  background-image: url(../assets/img/Home/banner.jpg);
  background-color: #49b1f5;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  .full-page::before {
    content: "♥";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  .scroll-down {
    position: absolute;
    bottom: 0;
    width: 100%;
    cursor: pointer;
    text-align: center;
    img {
      position: relative;
      width: 30px;
      height: 30px;
      animation: scroll-down-effect 1.5s infinite;
    }
  }
}
.full-page:not(.not-top-img):before {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  content: "";
}
</style>
