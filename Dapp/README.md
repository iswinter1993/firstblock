
<br/>
<br/>
<br/>
<br/>
<p align="center">
  <a href='https://umijs.org/zh-CN/'>
    <img src='https://user-images.githubusercontent.com/12181423/150708308-e0ca55ed-1bda-4db6-9e69-f34dbc27c01d.png' width='80' />
  </a>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href='https://mobile.ant.design/zh'>
    <img src='https://gw.alipayobjects.com/zos/bmw-prod/b4eaf7fb-c494-497a-81a7-4b588555948c.svg' width='105'/>
  </a>
</p>
<p align="center" height='100'>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href='https://umijs.org/zh-CN/'>
    <strong>UmiJS</strong>
  </a>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href='https://mobile.ant.design/zh'>
     <strong>Ant Design Mobile</strong>
  </a>
</p>
<br/>
<br/>
<br/>
<br/>


# umi-antd-mobile 移动应用


[![Build With Umi](https://img.shields.io/badge/build%20with-umi-028fe4.svg?style=flat-square)](https://umijs.org/zh-CN)
[![Build With antd-mobile](https://img.shields.io/badge/build-antd--mobile-green.svg)](https://mobile.ant.design)
[![GitHub license](https://img.shields.io/github/license/hqwlkj/umi-antd-mobile)](https://github.com/hqwlkj/umi-antd-mobile)


<br/>
<br/>

## **文档和框架都在逐步进行完善中**

# 快速上手

## 环境准备

首先得有 [node](https://nodejs.org/en/)，并确保 node 版本是 10.13 或以上。（mac 下推荐使用 [nvm](https://github.com/creationix/nvm) 来管理 node 版本）

```bash
$ node -v
v10.13.0
```

推荐使用 yarn 管理 npm 依赖，并[使用国内源](https://github.com/yiminghe/tyarn)（阿里用户使用内网源）。

```bash

# 国内源
$ npm i yarn tyarn -g

# 后面文档里的 yarn 换成 tyarn
$ tyarn -v

# 阿里内网源
$ tnpm i yarn @ali/yarn -g

# 后面文档里的 yarn 换成 ayarn
$ ayarn -v
```


## 开始使用


安装项目依赖

```bash
$ yarn install
```

本地启动

```bash
$ yarn start
```

## 部署发布

### 构建

```bash
$ yarn build

✔ Webpack
  Compiled successfully in 17.17s

 DONE  Compiled successfully in 17167ms                                       8:26:25 PM

Build success.
✨  Done in 20.79s.
```

构建产物默认生成到 `./dist` 下，然后通过 tree 命令查看，

```bash
tree ./dist

./dist
├── index.html
├── umi.css
└── umi.js
```

### 本地验证

发布之前，可以通过 `serve` 做本地验证，

```bash
$ yarn global add serve
$ serve ./dist

   ┌────────────────────────────────────────────────────┐
   │                                                    │
   │   Serving!                                         │
   │                                                    │
   │   - Local:            http://localhost:5000        │
   │   - On Your Network:  http://192.168.12.34:5000    │
   │                                                    │
   │   Copied local address to clipboard!               │
   │                                                    │
   └────────────────────────────────────────────────────┘
```

访问 [http://localhost:5000](http://localhost:5000)，正常情况下应该是和执行 `yarn start` 时是一致的。

### 部署

本地验证完，就可以部署了。你需要把 `dist` 目录部署到服务器上。

更多关于 **umijs** 的相关配置，请查阅 [umijs官方文档](https://umijs.org/zh-CN/config)

更多关于 **antd-mobile** 的相关组件使用说明，请查阅 [Ant Design Mobile官方文档](https://mobile.ant.design/zh/components/button)


## LICENSE

[MIT](https://github.com/hqwlkj/umi-antd-mobile/blob/master/LICENSE.md)
