
import { createApp } from "vue";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from "./App.vue";
import './assets/css/main.css';
const app = createApp(App)

// 统一注册所有 element-ui 图标
import { loadIcon } from './utils/icon';
loadIcon(app)
app.use(ElementPlus).mount("#app");
