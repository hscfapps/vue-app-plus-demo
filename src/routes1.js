// 定制嵌套路由的layout

export default [{
  path: '/about',
  component: () => import('./views/About.vue')
}, {
  path: '/index/',
  name: 'index',
  component: () => import(/* webpackChunkName: "index" */ './views/index/layout.vue'),
  children: [],
}];