
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


## 预览效果图

<img src="https://user-images.githubusercontent.com/12181423/150905972-d8bd4608-d86b-4bcc-98bc-ca42e2f91146.png" width="200" />&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/12181423/151107456-cf3ca33f-f2ee-4fb4-9f04-1426b729dba7.png" width="200" />&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/12181423/151107542-24f5c943-2af2-4e20-91ef-fb18d9aadbf7.png" width="200" />&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/12181423/150569860-2f288815-75b8-4cd9-abae-ee90f310826f.png" width="200" />&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/12181423/150569985-360f6b7e-0805-49e0-89fa-724307140bb5.png" width="200" />

目前还是一个测试demo，所以图片就是一个截屏图，大家先将就看看 😂😂😂

## 内置 Layout

在 `src/layouts`中配置了两个常用的 `layout` 组件。

>1、`tab-bar` layout 主要用于根据配置的 `routes` 动态生成带有 Tabbar 的页面(如示例效果图)；同时可以根据浏览器地址栏的地址选择对于的 TabItem;

>2、<del> `basic` layout 主要用于普通的路由使用；目前没有做过多的封装；</del>

**这里的layout需要重新在构思一下；也希望社区能提供更好的建议**


## FAQ
 >1. 如何更换自动生成的 `TabBar` 图标？
 
```text
由于 `umijs` 的路由配置中没有支持 icon 属性可以为一个图标，所以需要自己进行处理，处理的方式如下：

在配置 `routes` 时，将`icon`设置为 `antd-mobile-icons` 中的图标名称；
然后在 `src/layouts/tab-bar/index.tsx` 中的 `renderTabItemIcon` 函数中对应进行修改。

```


## 请求处理
>1. 统一处理请求

在`src/utils/request.js`中统一处理请求，对异常code进行过滤。
```````````````
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
```````````````

>2. 统一维护API

在`src/api/service.js`中统一对后端API进行维护。

  例：
    //调用接口前，引入proto定义的数据对象
    import indexPullRes from '../proto/shop/frontendSetting/indexPullRes_pb.js';
    
    export async function queryHomeData(param) {
      //GET请求
      const { result } = await request('/api/sys_index_page_pull_data.php');

      //通过indexPullRes的方法解析返回数据
      const res = indexPullRes.Msg.deserializeBinary(result);

      const resObj = fromJS(res.toObject());
      console.log('获取首页数据==', resObj);
      return resObj;
    }


    export async function queryCategoryList(param) {
      //POST请求
      const { result } = await request('/api/shop_products_pull_initial_data.php', {
        method: 'POST',
        body: qs.stringify({ request: 'Egp0b3Bfc2VsbGVyIAw=' }),
      });

      const res = pullInitialRes.Msg.deserializeBinary(base64ToBytes(result));
      const resObj = fromJS(res.toObject());
      console.log('分类页数据==', resObj);
      return resObj;
    }


>3. 状态管理

  在子页面中的`models/model.js`中进行各自的全局状态管理。

  例：
    ├──home     首页
      ├──models  dva状态管理
    ├──categoryGoodList  分类商品列表
      ├──models  dva状态管理


# 主要结构目录
./src
├── assets      静态资源
├── components  公共组件
├── layout      tab布局
├── pages       页面文件
    ├──account  用户中心
    ├──base     主路由页面（统一控制页头、页脚等组件）
    ├──category 分类页
    ├──categoryGoodList  分类商品列表
       ├──models  dva状态管理 
    ├──createAccount 注册页面
    ├──details  商品详情
    ├──favoritesList 收藏页
    ├──home     首页
       ├──models  dva状态管理 
    ├──login    登录页
├── utils       工具
├── api         api维护
├── proto       规范化接口数据
## LICENSE

[MIT](https://github.com/hqwlkj/umi-antd-mobile/blob/master/LICENSE.md)
