// 定制一个嵌套路由的默认子路由

export default [{
  path: '/about',
  component: () => import('./views/About.vue')
}, {
  path: '/index/',
  children: [{
    path: '',
    component: () => import(/* webpackChunkName: "index" */ './views/index/index.vue'),
  }],
}];