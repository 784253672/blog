<template>
  <div>
    <header class="banner">
      <p>发布文章</p>
    </header>
    <div class="edit-container">
      <a-card hoverable class="card">
        <a-form
          :model="formState"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          class="edit-form"
        >
          <a-form-item labelAlign="left" label="文章名">
            <a-input class="input-item" v-model:value="formState.name" />
          </a-form-item>
          <a-form-item labelAlign="left" label="作者">
            <a-input class="input-item" v-model:value="formState.author" />
          </a-form-item>
          <a-form-item>
            <quill-editor
              theme="snow"
              style="min-height: 500px"
              toolbar="full"
              v-model:value="formState.article"
            ></quill-editor>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="submit">创建文章</a-button>
            <a-button style="margin-left: 10px" @click="cancel"
              >取消创建</a-button
            >
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { QuillEditor } from "@vueup/vue-quill";
import { reactive, toRaw } from "vue";
import type { UnwrapRef } from "vue";

interface FormState {
  name: string;
  author: string;
  article: any;
}
const formState: UnwrapRef<FormState> = reactive({
  name: "",
  author: "",
  article: "",
});
// 点击确认按钮
const submit = () => {
  console.log("submit!", toRaw(formState));
};
// 点击取消按钮清空内容
const cancel = () => {
  formState.string = "";
  formState.article = "";
  formState.author = "";
};
const labelCol = { style: { width: "150px" } };
const wrapperCol = { span: 100 };
</script>
<style lang="scss">
.banner {
  position: relative;
  height: 400px;
  background: #49b1f5;
  background-image: url(../assets/img/banner1.jpg);
  background-origin: 0;
  background-position: center center;
  background-size: cover;
  p {
    font-size: 1.85em;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    line-height: 1.5;
    font-weight: bold;
    font-family: "Titillium Web";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.banner:before {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  content: " ";
}
.edit-container {
  position: relative;
  background-color: aliceblue;
  width: 90%;
  margin: 0 auto;
  .card {
    width: 100%;
    margin-top: 20px;
    .input-item {
      width: 30%;
    }
  }
}
</style>
