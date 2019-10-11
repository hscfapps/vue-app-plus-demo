// 定制嵌套路由的layout和一个子路由

export default [{
  path: '/about',
  component: () => import('./views/About.vue'),
}, {
  path: '/index/',
  name: 'index',
  component: () => import(/* webpackChunkName: "index" */ './views/index/layout.vue'),
  children: [{
    path: 'foo',
    component: () => import(/* webpackChunkName: "index" */ './views/index/foo.vue'),
  }],
}];
