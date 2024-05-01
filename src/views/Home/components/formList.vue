<template>
  <div class="formList">
    <el-form ref="form" :model="formList" label-width="80px">
      <el-form-item label="分类">
        <div class="selectValue">
          <el-select
            v-model="formList.classify"
            placeholder="请选择"
            style="width: 180px"
          >
            <el-option
              v-for="item in classifyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-button type="primary" @click="handleRefreshClassify()"
            ><el-icon><Refresh /></el-icon
          ></el-button>
        </div>
      </el-form-item>
      <el-form-item label="lora名称">
        <div class="selectValue">
          <el-select
            v-model="formList.lora"
            placeholder="请选择"
            style="width: 180px"
          >
            <el-option
              v-for="item in loraOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-button type="primary" @click="handleRefreshLora()"
            ><el-icon><Refresh /></el-icon
          ></el-button>
        </div>
      </el-form-item>
      <el-form-item label="标题">
        <el-input type="textarea" v-model="formList.title" autosize></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          type="textarea"
          v-model="formList.remarks"
          :autosize="{ minRows: 2, maxRows: 3 }"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品">
        <div class="picture-card" @click="outerVisible = true">
          <el-icon><Plus /></el-icon>
        </div>
      </el-form-item>
      <el-form-item label="关键词">
        <el-input
          type="textarea"
          v-model="formList.keyword"
          :autosize="{ minRows: 4, maxRows: 4 }"
        ></el-input>
      </el-form-item>
      <el-form-item label="背景音">
        <div class="selectValue">
          <el-select
            v-model="formList.bgMusic"
            placeholder="请选择"
            style="width: 180px"
          >
            <el-option
              v-for="item in bgMusicOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-button type="primary" @click="handleRefreshMusic()"
            ><el-icon><Refresh /></el-icon
          ></el-button>
        </div>
      </el-form-item>
      <el-form-item label="原关键词">
        <el-input
          type="textarea"
          v-model="formList.primaryKeyword"
          :disabled="true"
          :autosize="{ minRows: 4, maxRows: 4 }"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-dialog
      v-model="outerVisible"
      title="新增"
      width="800"
      class="outerVisible"
      :close-on-click-modal="false"
    >
      <div class="dialogContent">
        <div class="contentSearch">
          <el-input
            v-model="inputValue"
            placeholder="添加商品链接，点击获取商品详情"
          ></el-input>
          <el-button type="primary">获取商品详情</el-button>
        </div>
        <div class="contentMore">
          <el-dropdown>
            <el-button type="primary">
              更多渠道<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in channelOptions" :key="item">{{
                item
              }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="footerBtns">
          <el-button @click="outerVisible = false">取 消</el-button>
          <el-button type="primary" @click="outerVisible = false"
            >选择</el-button
          >
          <el-button type="primary" @click="outerVisible = false"
            >添加到商品库</el-button
          >
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
let classifyOptions = ref([
  {
    value: "分类1",
    label: "分类1",
  },
  {
    value: "分类2",
    label: "分类2",
  },
  {
    value: "分类3",
    label: "分类3",
  },
  {
    value: "分类4",
    label: "分类4",
  },
  {
    value: "选项5",
    label: "选项5",
  },
]);
const loraOptions = ref([
  {
    value: "lora1",
    label: "lora1",
  },
  {
    value: "lora2",
    label: "lora2",
  },
  {
    value: "lora3",
    label: "lora3",
  },
]);
const bgMusicOptions = ref([
  {
    value: "music1",
    label: "music1",
  },
  {
    value: "music2",
    label: "music2",
  },
  {
    value: "music3",
    label: "music3",
  },
]);
let formList = ref({
  classify: "",
  lora: "",
  title: "",
  remarks: "",
  keyword: "",
  bgMusic: "",
  primaryKeyword: "",
});
let inputValue = ref('')
let channelOptions = ref(["渠道1", "渠道2", "渠道3", "渠道4", "渠道5"]);
let outerVisible = ref(false);

const handleRefreshClassify = () => {};
const handleRefreshLora = () => {};
const handleRefreshMusic = () => {};
</script>

<style scoped lang='less'>
.formList {
  .selectValue {
    display: flex;
  }
  .picture-card {
    width: 68px;
    height: 68px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    .el-icon {
      font-size: 28px;
      color: #8c939d;
      width: 68px;
      height: 68px;
      text-align: center;
    }
  }
}
</style>