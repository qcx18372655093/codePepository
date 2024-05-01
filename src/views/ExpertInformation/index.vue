
<template>
    <el-dialog title="" v-model="dialogVisible" class="ExpertInformation" width="1200px" center :show-close="false"
        :close-on-click-modal="false" top="5vh">
        <div class="ExpertInformation-content">
            <div class="content-top">
                <p class="title">达人信息</p>
                <div class="main-form">
                    <div class="basic-information">
                        <p class="title-name">基础信息</p>
                        <el-form :model="form" label-width="auto" style="max-width: 860px">
                            <el-row>
                                <el-col :span="5">
                                    <el-form-item label="分类">
                                        <el-select v-model="form.sort" placeholder="请选择">
                                            <el-option v-for="item in classifyOptions" :key="item.value" :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="5">
                                    <el-form-item label="姓名">
                                        <el-input v-model="form.name" />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="3">
                                    <el-form-item label="性别">
                                        <el-input v-model="form.sex" />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="11">
                                    <el-form-item label="地址">
                                        <div style="display: flex;">
                                            <el-cascader :options="options" clearable v-model="form.address" />
                                            <el-input v-model="form.specific" placeHolder="请输入详细地址"
                                                style="margin-left: 10px;" />
                                        </div>
                                    </el-form-item>
                                </el-col>

                            </el-row>
                            <el-row class="special">
                                <el-col :span="8">
                                    <el-form-item label="身份证号">
                                        <el-input v-model="form.idNumber" />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="手机">
                                        <el-input v-model="form.phoneNumber" />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="微信">
                                        <el-input v-model="form.weChatNumber" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="5">
                                    <el-form-item label="身高">
                                        <div class="setStyle">
                                            <el-input v-model="form.height" />
                                            <p>cm</p>
                                        </div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="5">
                                    <el-form-item label="体重">
                                        <div class="setStyle">
                                            <el-input v-model="form.weight" />
                                            <p>kg</p>
                                        </div>

                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="鞋码">
                                        <el-input v-model="form.shoeSize" />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="7" class="interval">
                                    <el-form-item label="上衣尺寸">
                                        <el-input v-model="form.topSize" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="5">
                                    <el-form-item label="胸围">
                                        <div class="setStyle">
                                            <el-input v-model="form.bustSize" />
                                            <p>cm</p>
                                        </div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="5">
                                    <el-form-item label="腰围">
                                        <div class="setStyle">
                                            <el-input v-model="form.waistSize" />
                                            <p>cm</p>
                                        </div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="臀围">
                                        <div class="setStyle">
                                            <el-input v-model="form.hipSize" />
                                            <p>cm</p>
                                        </div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="7" class="interval">
                                    <el-form-item label="裤子尺码">
                                        <el-input v-model="form.pantsSize" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                    <div class="information-show">
                        <div class="avatar-expert">
                            <p class="title-name">达人头像</p>
                            <el-upload class="avatar-uploader" action="" :show-file-list="false"
                                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrlList.length > 0" :src="imageUrlList" class="avatar" />
                                <el-icon v-else class="el-icon-plus avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                        </div>
                        <div class="information-area">
                            <p class="tips-name">信息展示区</p>
                            <div class="show-list">
                                <ul class="list">
                                    <li v-for="item in informationData" :key="item" class="list-item">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-center">
                <div class="life-photos">
                    <p class="title">达人生活照</p>
                    <div class="photo-upload">
                        <div class="upload-item" v-for="(item, index) in 5" :key="index">
                            <el-upload class="avatar-uploader" action="" :show-file-list="false"
                                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrlList.length > 0" :src="imageUrlList" class="avatar" />
                                <el-icon v-else class="el-icon-plus avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                        </div>
                    </div>
                </div>
                <div class="photo">
                    <div class="photo-list">
                        <div class="photo-item" v-for="item in photoList" :key="item.lable">
                            <p class="lable">{{ item.lable }}</p>
                            <el-upload class="avatar-uploader" action="" :show-file-list="false"
                                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrlList.length > 0" :src="imageUrlList" class="avatar" />
                                <el-icon v-else class="el-icon-plus avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-bottom">
                <div class="fusion-avatar">
                    <p class="title-msg">融合头像</p>
                    <ul class="avatar-list">
                        <li class="list-item" v-for="(item, index) in 16" :key="index">
                            <el-upload class="avatar-uploader" action="" :show-file-list="false"
                                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrlList.length > 0" :src="imageUrlList" class="avatar" />
                                <el-icon v-else class="el-icon-plus avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                            <el-input v-model="expertName" class="msg" />
                        </li>
                    </ul>
                </div>
                <div class="operate">
                    <div class="btns-list">
                        <div class="btns">
                            <el-button type="primary">确认</el-button>
                        </div>
                        <div class="btns">
                            <el-button>取消</el-button>
                        </div>
                        <div class="btns">
                            <el-button type="primary">提交</el-button>
                        </div>
                        <div class="btns">
                            <el-button type="primary">驳回，下一条</el-button>
                        </div>
                        <div class="btns">
                            <el-button type="primary">提交，下一条</el-button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </el-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'
const dialogVisible = true;
const form = reactive({
    sort: '分类',
    name: '',
    sex: '',
    address: [],
    specific: '',
    idNumber: '',
    phoneNumber: '',
    weChatNumber: '',
    height: '',
    weight: '',
    shoeSize: '',
    topSize: '',
    bustSize: '',
    waistSize: '',
    hipSize: '',
    pantsSize: '',
})
let classifyOptions = ref([
    {
        value: "分类",
        label: "分类",
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
const options = [
    {
        value: 'guide',
        label: 'Guide',
        children: [
            {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                    {
                        value: 'consistency',
                        label: 'Consistency',
                    },
                    {
                        value: 'feedback',
                        label: 'Feedback',
                    },
                    {
                        value: 'efficiency',
                        label: 'Efficiency',
                    },
                    {
                        value: 'controllability',
                        label: 'Controllability',
                    },
                ],
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'side nav',
                        label: 'Side Navigation',
                    },
                    {
                        value: 'top nav',
                        label: 'Top Navigation',
                    },
                ],
            },
        ],
    },
    {
        value: 'component',
        label: 'Component',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout',
                    },
                    {
                        value: 'color',
                        label: 'Color',
                    },
                    {
                        value: 'typography',
                        label: 'Typography',
                    },
                    {
                        value: 'icon',
                        label: 'Icon',
                    },
                    {
                        value: 'button',
                        label: 'Button',
                    },
                ],
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio',
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox',
                    },
                    {
                        value: 'input',
                        label: 'Input',
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber',
                    },
                    {
                        value: 'select',
                        label: 'Select',
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader',
                    },
                    {
                        value: 'switch',
                        label: 'Switch',
                    },
                    {
                        value: 'slider',
                        label: 'Slider',
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker',
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker',
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker',
                    },
                    {
                        value: 'upload',
                        label: 'Upload',
                    },
                    {
                        value: 'rate',
                        label: 'Rate',
                    },
                    {
                        value: 'form',
                        label: 'Form',
                    },
                ],
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table',
                    },
                    {
                        value: 'tag',
                        label: 'Tag',
                    },
                    {
                        value: 'progress',
                        label: 'Progress',
                    },
                    {
                        value: 'tree',
                        label: 'Tree',
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination',
                    },
                    {
                        value: 'badge',
                        label: 'Badge',
                    },
                ],
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert',
                    },
                    {
                        value: 'loading',
                        label: 'Loading',
                    },
                    {
                        value: 'message',
                        label: 'Message',
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox',
                    },
                    {
                        value: 'notification',
                        label: 'Notification',
                    },
                ],
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'Menu',
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs',
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb',
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown',
                    },
                    {
                        value: 'steps',
                        label: 'Steps',
                    },
                ],
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog',
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip',
                    },
                    {
                        value: 'popover',
                        label: 'Popover',
                    },
                    {
                        value: 'card',
                        label: 'Card',
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel',
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse',
                    },
                ],
            },
        ],
    },
    {
        value: 'resource',
        label: 'Resource',
        children: [
            {
                value: 'axure',
                label: 'Axure Components',
            },
            {
                value: 'sketch',
                label: 'Sketch Templates',
            },
            {
                value: 'docs',
                label: 'Design Documentation',
            },
        ],
    }
]
let imageUrlList = ref([]);//达人头像
let expertName =  ref('达人名称')
let informationData = ref(['历史视频数', '最近拍摄', '返稿率', '周拍摄条数'])
const photoList = [
    {
        lable: '自我介绍视频',
        value: 'videoUrl'
    },
    {
        lable: '身份证照片',
        value: 'IdCardUrl'
    }, {
        lable: '手持身份证照片',
        value: 'takeHandDdCardUrl'
    },
]
/**
 * @description: 获得成功上传图片
 * @param {*} res
 * @param {*} file
 * @return {*}
 */
const handleAvatarSuccess = (res, file) => {}
/**
 * @description: 上传文件之前的钩子
 * @param {*} file
 * @return {*}
 */
const beforeAvatarUpload = (file) => {}
</script>


<style  scoped>
@import url('./index.less');
</style>