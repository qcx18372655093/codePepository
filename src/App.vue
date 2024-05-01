<template>
  <div>
    <!-- <Home /> -->
    <!-- 达人信息 -->
    <ExpertInformation/>
  </div>
</template>

<script setup>
import Home from './views/Home/index.vue';
import ExpertInformation from './views/ExpertInformation/index.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .el-upload-list {
    width: 100px;
  }
  .outerVisible {
    position: relative;
    .dialogContent {
      display: flex;
      justify-content: center;
      margin-bottom: 60px;
      .contentSearch {
        display: flex;
        .el-input {
          width: 500px;
        }
      }
      .contentMore {
        margin-left: 20px;
      }
    }
    .el-dialog__header {
      text-align: left;
      margin-left: 35px;
    }
    .footerBtns {
      position: absolute;
      bottom: 0;
      right: 0;
      margin-bottom: 20px;
      margin-right: 34px;
    }
  }
}
</style>
