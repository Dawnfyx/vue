# com-stdaily

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 目录
<details>
<summary>展开查看</summary>
<pre>
    <code>
    
    ├── build                                           // webpack 配置文件
    ├── config                                          // vue-cli 配置文件
    ├── dist                                            // 项目打包版本，可直接使用
    ├── src                                             // 项目源码目录
    │   ├── assets                                      // 资源目录
    │   │   └── img                                     // 静态图片目录
    │   │   └── style                                   // 样式
    │   ├── components                                  // 公共项目组件目录
    │   │   ├── FadeAnimation                           // 动画
    │   │   └── HeaderLeft                              // 
    │   ├── pages                                       // 页面组件目录
    │   │   ├── configs
    │   │   │   └── configs.vue                         // 设置
    │   │   ├── contact
    │   │   │   └── contact.vue                         // 联系人
    │   │   ├── customer
    │   │   │   └── customer.vue                         // 客户管理
    │   │   ├── examine
    │   │   │   └── examine.vue                         // 审批
    │   │   ├── Home
    │   │   │   └── Home.vue                            // 主页
    │   │   ├── Info
    │   │   │   └── Info.vue                            // 消息
    │   │   ├── TestDir                                 // 测试文件目录
    │   ├── router
    │   │   └── index.js                                // 路由配置
    │   ├── store                                       // vuex 的状态管理
    │   │   ├── actions.js                              // 配置 actions
    │   │   ├── getters.js                              // 配置 getters
    │   │   ├── index.js                                // 引用 vuex，创建 store
    │   │   ├── mutations.js                            // 配置 mutations
    │   │   └── state.js                                // 配置 state小、字体颜色、背景颜色）
    │   ├── App.vue                                     // 根组件
    │   └── main.js                                     // 入口主文件
    └── index.html                                      // 入口 html 文件

    </code>
</pre>
</details>

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
