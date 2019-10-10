// 定制一个嵌套路由的非默认子路由

export default [{
  path: '/about',
  component: () => import('./views/About.vue')
}, {
  path: '/index/',
  children: [{
    path: 'foo',
    component: () => import(/* webpackChunkName: "index" */ './views/index/foo.vue'),
  }],
}];