<template>
    <el-dialog v-model="dialogVisible" lora="" class="ModelTraining" width="1438px" :show-close="false"
        :close-on-click-modal="false" top="1vh">
        <p class="title">模型训练-Lora训练</p>
        <div class="formList">
            <el-form ref="form" :model="formList" label-width="auto" class="demo-form-inline">
                <el-form-item label="分类">
                    <div class="selectValue">
                        <el-select v-model="formList.classify" placeholder="请选择" style="width: 150px">
                            <el-option v-for="item in classifyOptions" :key="item.value" :label="item.label"
                                @change="handleValue"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button type="primary" @click="handleRefreshClassify()"><el-icon>
                                <Refresh />
                            </el-icon></el-button>
                    </div>
                </el-form-item>
                <el-form-item label="品类">
                    <div class="selectValue">
                        <el-select v-model="formList.category" placeholder="请选择" style="width: 150px">
                            <el-option v-for="item in categoryOptions" :key="item.value" :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button type="primary" @click="handleRefreshLora()"><el-icon>
                                <Refresh />
                            </el-icon></el-button>
                    </div>
                </el-form-item>
                <el-form-item label="训练图片尺寸" class="pictureSize">
                    <el-select v-model="formList.pictureSize" placeholder="请选择" style="width: 120px">
                        <el-option v-for="item in pictureOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Lora名称">
                    <el-input type="text" v-model="formList.lora" style="width: 120px"></el-input>
                </el-form-item>

                <el-form-item label="底模选择">
                    <div class="selectValue">
                        <el-select v-model="formList.bottomDieSelect" placeholder="请选择" style="width: 150px">
                            <el-option v-for="item in bottomDieSelectOptions" :key="item.value" :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button type="primary" @click="handleRefresh底模()"><el-icon>
                                <Refresh />
                            </el-icon></el-button>
                    </div>
                </el-form-item>


                <el-form-item label="原始图片">
                    <el-upload class="avatar-uploader" action="" :show-file-list="false" :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrlList.length > 0" :src="imageUrlList" class="avatar" />
                        <el-icon v-else class="el-icon-plus avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
            </el-form>
        </div>
        <div class="materialDrawing">
            <p class="title">素材图</p>
            <ul class="avatar-list">
                <li class="list-item" v-for="(item, index) in 8" :key="index">
                    <el-upload class="avatar-uploader" action="" :show-file-list="false" :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrlList.length > 0" :src="imageUrlList" class="avatar" />
                        <el-icon v-else class="el-icon-plus avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </li>
            </ul>
        </div>
        <div class="tagList">
            <p class="titleName">标签</p>
            <ul class="input-list">
                <li class="list-item" v-for="(item, index) in 8" :key="index">
                    <el-input v-model="tagValue" type="textarea" :autosize="{ minRows: 4, maxRows: 4 }" />
                </li>
            </ul>
        </div>
        <div class="materialDrawing">
            <p class="title">素材图</p>
            <ul class="avatar-list">
                <li class="list-item" v-for="(item, index) in 8" :key="index">
                    <el-upload class="avatar-uploader" action="" :show-file-list="false" :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrlList.length > 0" :src="imageUrlList" class="avatar" />
                        <el-icon v-else class="el-icon-plus avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </li>
            </ul>
        </div>
        <div class="tagList">
            <p class="titleName">标签</p>
            <ul class="input-list">
                <li class="list-item" v-for="(item, index) in 8" :key="index">
                    <el-input v-model="tagValue" type="textarea" :autosize="{ minRows: 4, maxRows: 4 }" />
                </li>
            </ul>
        </div>
        <div class="btns">
            <el-button @click="handleSelect">关闭</el-button>
            <el-button @click="handleSelect">保存</el-button>
            <el-button type="primary" @click="handleSelect">驳回，下一条</el-button>
            <el-button type="primary" @click="handleRebuild">提交，下一条</el-button>
        </div>
    </el-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'
const dialogVisible = true;
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
        value: "分类5",
        label: "分类5",
    },
]);
const categoryOptions = ref([
    {
        value: "品类1",
        label: "品类1",
    },
    {
        value: "品类2",
        label: "品类2",
    },
    {
        value: "品类3",
        label: "品类3",
    },
]);
const bottomDieSelectOptions = ref([
    {
        value: "底模1",
        label: "底模1",
    },
    {
        value: "底模2",
        label: "底模2",
    },
    {
        value: "底模3",
        label: "底模3",
    },
]);
const pictureOptions = ref([
    {
        value: "mini",
        label: "mini",
    },
    {
        value: "small",
        label: "small",
    },
    {
        value: "large",
        label: "large",
    },
]);
let tagValue = ref('')
let formList = ref({
    classify: "分类1",
    category: "",
    pictureSize: '',
    lora: "",
    bottomDieSelect: "",
});
let imageUrlList = ref([]);
const handleSelect = () => { };
const handleRebuild = () => { };

const handleRefreshClassify = () => { };
const handleValue = (value)=>{
    console.log(value,'值-')
}
/**
 * @description: 上传文件之前的钩子
 * @param {*} file
 * @return {*}
 */
const beforeAvatarUpload = (file) => { }
/**
 * @description: 获得成功上传图片
 * @param {*} res
 * @param {*} file
 * @return {*}
 */
const handleAvatarSuccess = (res, file) => { }
</script>


<style scoped>
@import url('./index.less');
</style>