<template>
  <nav class="nav show">
    <span class="blog-info">shan博客</span>
    <div class="menus">
      <a-menu mode="horizontal" hash-priority="high">
        <a-menu-item key="mail">
          <template #icon>
            <mail-outlined />
          </template>
          个人简介
        </a-menu-item>
        <a-menu-item key="search">
          <template #icon>
            <SearchOutlined />
          </template>
          搜索
        </a-menu-item>
        <a-sub-menu>
          <template #icon>
            <container-outlined />
          </template>
          <template #title>技术博客文档</template>
          <a-menu-item-group>
            <a-menu-item key="setting:1">前端</a-menu-item>
            <a-menu-item key="setting:2">通讯</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-menu-item key="chat">
          <template #icon>
            <comment-outlined />
          </template>
          留言板
        </a-menu-item>
        <a-menu-item @click="clickNav(4)" key="publish-sarticle">
          <template #icon>
            <DiffOutlined />
          </template>
          发布文章
        </a-menu-item>
      </a-menu>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  MailOutlined,
  ContainerOutlined,
  CommentOutlined,
  SearchOutlined,
  DiffOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();
const current = ref(["mail"]);
// 自定义导航栏类型
type NavOptions = {
  [key: number]: string;
};
const navOptions: NavOptions = {
  0: "Home",
  1: "",
  2: "",
  3: "",
  4: "PublishArticle",
};

// 点击导航栏按钮
const clickNav: Function = (index: number) => {
  const selectNav: string = navOptions[index];
  router.push(`${selectNav}`);
};
console.log(current);
</script>
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
    font-family: "titilliumweb";
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    font-weight: 700;
  }
  .menus {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: $light-grey;
  }
}
:where(.css-dev-only-do-not-override-eq3tly).ant-menu-light {
  color: $light-grey;
  background: transparent;
}
:where(.css-dev-only-do-not-override-eq3tly).ant-menu-horizontal {
  border: 0;
}
</style>
