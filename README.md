# Vue-client-template
---
### 一个 Vue 全家桶模板
>免除你每次新建项目安装各种插件的繁琐操作
>开箱即用，直接了当的开始开发项目

### 插件
>Vue-router

>Vuex

>Axios

>Eslint  *默认引入了`eslint-config-kunine`，你可以在`.eslintrc.js`里面更改*

>Scss

### 架构
*仅显示新增的目录*
- src
  - api
    - axios.js  *`axios`的实例，包括了拦截器*
    - index.js  *所有的项目接口（可以根据业务再细分文件）*
  - views  *页面文件*
  - store  *`Vuex`目录*
    -modules *`Vuex`模型*
