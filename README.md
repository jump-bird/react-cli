
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## 目录结构

```
├── config  开发相关配置
└── src
    ├── api  AJAX请求的接口api方法
    └── assets  项目静态资源(编译)
        ├── style  自定义样式文件
            ├── common  公共样式部分
            ├── reset 样式文件
        └── images  图片资源
    ├── components  组件包
        ├── common  公共组件(可划分)
        └── ...  其他业务组件
    ├── config  配置文件
        ├── apiConfig  api接口配置
        └── index  api地址配置
    ├── utils  封装工具函数
        ├── utils  公共工具函数
        ├── axios  数据请求拦截器
        └── ...  其他
    ├── pages  页面组件文件
        ├── routerConfig.js  路由数据表
        ├── routes  入口文件
        ├── demand  路由按需处理
        ├── container  界面组件
            ├── index  首页
            ├── login  登录页
            └── ...  其他界面
        ├── store  redux配置
            ├── home  以 首页 为例
                ├── action
                ├── actionTypes
                └── reduce
            ├── ...  其他界面
            ├── reducers  
                └── index  reducers集中管理
            └── index.js  store入口
├── config-overrides  antd按需加载、装饰器语法
└── package  项目配置文件
```
