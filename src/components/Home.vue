<template>
  <el-dialog
    v-model="dialogVisible"
    title=""
    width="1200"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <div class="Home">
      <div class="content-left">
        <formList></formList>
      </div>
      <div class="content-right">
        <div class="ImgList">
          <div class="selectImgs">
            <div class="list">
              <div
                :class="['list-item', !item.url ? 'outline' : '']"
                v-for="item in imgList"
                :key="item.name"
              >
                <template v-if="item.url">
                  <img :src="item.url" class="img" />
                </template>
                <template v-else>
                  <div class="icon">
                    <el-icon><Plus /></el-icon>
                  </div>
                </template>
                <div class="check" v-if="item.url">
                  <input type="checkbox" v-model="selectedImgs" :value="item" />
                </div>
              </div>
            </div>
          </div>
          <div class="btns">
            <el-button @click="handleSelect">选择</el-button>
            <el-button type="primary" @click="handleRebuild"
              >重新生成</el-button
            >
          </div>
        </div>
        <div class="showImg">
          <div class="list">
            <div
              :class="['list-item', !item.url ? 'outline' : '']"
              v-for="item in showImagsList"
              :key="item.name"
            >
              <template v-if="item.url">
                <img :src="item.url" class="img" />
              </template>
              <template v-else>
                <div class="icon">
                  <el-icon><Plus /></el-icon>
                </div>
              </template>
              <div class="check" v-if="item.url">
                <div @click="removeImage(item)" class="remove-btn">×</div>
              </div>
            </div>
          </div>
          <div class="btns">
            <el-button @click="handleSelect">关闭</el-button>
            <el-button @click="handleSelect">保存</el-button>
            <el-button type="primary" @click="handleSelect"
              >驳回，下一条</el-button
            >
            <el-button type="primary" @click="handleRebuild"
              >提交，下一条</el-button
            >
          </div>
        </div>
      </div>
      <div class="selectImagesVideos">
        <div class="selecetImages">
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <el-icon><Plus /></el-icon>
            <template #file="{ file }">
              <div>
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <el-icon><zoom-in /></el-icon>
                  </span>
                </span>
              </div>
            </template>
          </el-upload>
          <el-button type="primary" @click="handleRebuild">重新生成</el-button>
        </div>
        <div class="selectViodes">
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <el-icon><Plus /></el-icon>
            <template #file="{ file }">
              <div>
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <el-icon><zoom-in /></el-icon>
                  </span>
                </span>
              </div>
            </template>
          </el-upload>
          <el-button type="primary" @click="handleRebuild">预览视频</el-button>
        </div>
      </div>
      <div class="showData">
        <div class="showImages">封面图信息区</div>
        <div class="showVideos">视频信息区对</div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import formList from "./formList.vue";
import { ref } from "vue";
const dialogVisible = true;
let imgList = ref([
  {
    name: "food.jpeg",
    index: 0,
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "plant-1.png",
    index: 1,
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "food.jpeg",
    index: 2,
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "plant-2.png",
    index: 3,
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "food.jpeg",
    index: 4,
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "figure-1.png",
    index: 5,
    url: "",
  },
  {
    name: "food.jpeg",
    index: 6,
    url: "",
  },
  {
    name: "figure-2.png",
    index: 7,
    url: "",
  },
  {
    name: "food.jpeg",
    index: 8,
    url: "",
  },
  {
    name: "figure-2.png",
    index: 9,
    url: "",
  },
]);
const selectedImgs = ref([]);
let showImagsList = ref([
  {
    name: "food.jpeg",
    index: 0,
    url: "",
  },
  {
    name: "plant-1.png",
    index: 1,
    url: "",
  },
  {
    name: "food.jpeg",
    index: 2,
    url: "",
  },
  {
    name: "plant-2.png",
    index: 3,
    url: "",
  },
  {
    name: "food.jpeg",
    index: 4,
    url: "",
  },
  {
    name: "figure-1.png",
    index: 5,
    url: "",
  },
  {
    name: "food.jpeg",
    index: 6,
    url: "",
  },
  {
    name: "figure-2.png",
    index: 7,
    url: "",
  },
  {
    name: "food.jpeg",
    index: 8,
    url: "",
  },
  {
    name: "figure-2.png",
    index: 9,
    url: "",
  },
]);

const handleSelect = () => {
  showImagsList.value.forEach((item) => {
    const selectedItem = selectedImgs.value.find(
      (img, index) => index === item.index
    );
    if (selectedItem) {
      item.url = selectedItem.url;
    }
  });
  selectedImgs.value.sort((a, b) => a.index - b.index);
};
const handleRebuild = () => {};
// 移除已上传的图片
const removeImage = (item) => {
  // 找到当前点击的元素在 showImagsList 中的索引
  const currentIndex = showImagsList.value.findIndex(
    (i, index) => index === item.index
  );
  selectedImgs.value.splice(item.index, 1);

  // 将当前元素的 url 设置为空
  showImagsList.value[currentIndex].url = "";
  // 先将有 url 的元素排在前面
  showImagsList.value.sort((a, b) => {
    if (a.url && !b.url) return -1;
    if (!a.url && b.url) return 1;
    return 0;
  });

  // 重新设置 index 值
  showImagsList.value = showImagsList.value.map((item, index) => ({
    ...item,
    index,
  }));
};
const handlePictureCardPreview = (file) => {};

</script>

<style scoped lang='less'>
.Home {
  display: flex;
  border: 1px solid #ddd;
}
.content-left {
  width: 300px;
  padding-top: 10px;
}
.content-right {
  padding-top: 10px;
  flex: 1;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  margin-left: 15px;
  position: relative;
  .ImgList {
    margin-bottom: 20px;
    .selectImgs {
      .list {
        display: flex;
        flex-wrap: wrap;

        .list-item {
          position: relative;
          margin-right: 10px;
          margin-bottom: 10px;
          width: 16%;
          height: 100px;
          margin-left: 10px;
        }
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin-top: 24px;
          .el-icon {
            font-size: 45px;
            color: #8c939d;
          }
        }
        .outline {
          border: 1px solid #ddd;
        }
        .list-item :nth-of-type(3n) {
          margin-right: 0;
        }
        .list-item :nth-of-type(n + 7) {
          margin-bottom: 0;
        }
      }
      .img {
        width: 92px;
        height: 100px;
        z-index: 99;
      }

      .check {
        position: absolute;
        right: 0;
        top: -3px;
        margin-right: -5px;
      }
    }
    .btns {
      display: flex;
      justify-content: flex-end;
      margin-right: 30px;
    }
  }
  .ImgList:after {
    display: block;
    content: "";
    clear: both;
    width: 100%;
    height: 1px;
    background: #ccc;
    margin-top: 10px;
  }

  .showImg {
    .list {
      display: flex;
      flex-wrap: wrap;

      .list-item {
        position: relative;
        margin-right: 10px;
        margin-bottom: 10px;
        width: 16%;
        height: 100px;
        margin-left: 10px;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 24px;
        .el-icon {
          font-size: 45px;
          color: #8c939d;
        }
      }
      .outline {
        border: 1px solid #ddd;
        .remove-btn {
          margin-right: 0px;
        }
      }
      .list-item :nth-of-type(3n) {
        margin-right: 0;
      }
      .list-item :nth-of-type(n + 7) {
        margin-bottom: 0;
      }
    }
    .img {
      width: 92px;
      height: 100px;
      z-index: 99;
    }
    .check {
      .remove-btn {
        font-size: 25px;
        color: black;
        position: absolute;
        right: 0;
        top: -7px;
        margin-right: -4px;
        cursor: pointer;
      }
    }

    .btns {
      display: flex;
      justify-content: flex-end;
      margin-right: 30px;
      position: absolute;
      right: 0;
      bottom: 0;
      margin-bottom: 20px;
    }
  }
}
.selectImagesVideos {
  // padding-top: 10px;
  width: 150px;
  border-right: 1px solid #ddd;
  .selecetImages {
    height: 271px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin-top: 4px;
    .el-button {
      margin-top: 10px;
    }
  }
  .selecetImages::after {
    position: absolute;
    display: block;
    content: "";
    clear: both;
    width: 100%;
    height: 1px;
    background: #ccc;
    bottom: 0;
  }
  .selectViodes {
    height: 271px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .el-button {
      margin-top: 10px;
    }
    .el-upload-list {
      width: 100px !important;
    }
  }
}
.showData {
  width: 160px;
  text-align: center;
  .showImages {
    height: 271px;
    position: relative;
    margin-top: 4px;
  }
  .showImages::after {
    position: absolute;
    display: block;
    content: "";
    clear: both;
    width: 100%;
    height: 1px;
    background: #ccc;
    bottom: 0;
  }
  .showVideos {
    text-align: center;
    padding-top: 10px;
  }
}
</style>
