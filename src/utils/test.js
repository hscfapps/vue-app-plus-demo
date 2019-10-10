const mergeRoutes = require('./merge-routes');

console.log(JSON.stringify(mergeRoutes([{
  path: '/',
  component: {file: 'home'},
}, {
  path: '/about',
  component: {file:/* webpackChunkName: "about" */ './views/About.vue'},
}, {
  path: '/index/',
  component: {file:/* webpackChunkName: "index" */ './views/index/layout.vue'},
  children: [{
    path: '',
    component: {file:/* webpackChunkName: "index" */ './views/index/index.vue'},
  }, {
    path: 'foo',
    component: {file:/* webpackChunkName: "index" */ './views/index/foo.vue'},
  }, {
    path: 'bar',
    component: {file:/* webpackChunkName: "index" */ './views/index/bar.vue'},
  }],
}], [{
  path: '/about',
  component: {file:'./views2/About.vue'},
}, {
  path: '/index/',
  name: 'index',
  component: {file: /* webpackChunkName: "index" */ './views2/index/layout.vue'},
  children: [],
}]), null, 2));