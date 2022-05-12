
export default [
  // user
  // { exact: true, path: '/', redirect: '/tabBar/index' },
  {

    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/index'
      },
      
      {
        path: '/index',
        title: '首页',
        icon: 'AlipayCircleFill',
        component: '@/pages/home/index',
      },
      
      { path: '/*', component: '@/pages/404' },
      { path: '/**/*', redirect: '/404' },
    ]
  },

];
