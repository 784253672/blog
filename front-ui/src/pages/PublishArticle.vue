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
          <a-form-item labelAlign="left" label="*文章名">
            <a-input class="input-item" v-model:value="formState.name" />
          </a-form-item>
          <a-form-item labelAlign="left" label="*作者">
            <a-input class="input-item" v-model:value="formState.author" />
          </a-form-item>
          <a-form-item labelAlign="left" label="*上传文章封面">
            <a-upload
              v-model:file-list="fileList"
              list-type="picture-card"
              method="get"
              class="avatar-uploader"
              :show-upload-list="false"
              :before-upload="beforeUpload"
              :action="coverImgUrl"
              @change="uploadCover"
            >
              <img
                class="upload-cover-img"
                v-if="imageUrl"
                :src="imageUrl"
                alt="avatar"
              />
              <div v-else>
                <loading-outlined v-if="loading"></loading-outlined>
                <plus-outlined v-else></plus-outlined>
                <div class="ant-upload-text">上传</div>
              </div>
            </a-upload>
          </a-form-item>
          <a-form-item>
            <quill-editor
              theme="snow"
              style="min-height: 500px"
              toolbar="full"
              v-model:content="formState.article"
              ref="qe"
            ></quill-editor>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="submit">创建文章</a-button>
            <a-button style="margin-left: 10px" @click="cancel">取消创建</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { message } from "ant-design-vue";
import { QuillEditor } from "@vueup/vue-quill";
import { reactive, toRaw, ref, defineComponent } from "vue";
import type { UnwrapRef } from "vue";
import getBase64 from "../utils/index";

interface FormState {
  name: string;
  author: string;
  article: any;
}
interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  type?: string;
  size: number;
  originFileObj: any;
}
interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}
const formState: UnwrapRef<FormState> = reactive({
  name: "",
  author: "",
  article: "",
});
const qe: any = ref();
const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>("");
let coverImgUrl = ref<string>("");
// 点击提交文章
const submit = () => {
  formState.article = qe.value.content;
};
// 点击取消按钮清空内容
const cancel = () => {
  formState.name = "";
  formState.article = "";
  formState.author = "";
};
// 上传封面的校验
const beforeUpload: Function = (file: FileItem) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("请输入jpeg或png格式文件");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("图片最大不要超过2M");
  }
  return isJpgOrPng && isLt2M;
};
// 上传封面
const uploadCover = (info: FileInfo) => {
  coverImgUrl.value  = `/image/${info.file.uid}`;
  if (info.file.status === "uploading") {
    loading.value = true;
    return;
  }
  if (info.file.status === "done") {
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
  if (info.file.status === "error") {
    loading.value = false;
    message.error("上传失败");
  }
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
    margin-bottom: 20px;
    background-color: #fafafa;
    .input-item {
      width: 30%;
    }
  }
}
.upload-cover-img {
  width: 80%;
  height: auto;
}
</style>
