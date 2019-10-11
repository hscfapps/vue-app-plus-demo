<template>
  <div class="about">
    <h1>我是代理的index布局</h1>
    <div>从vuex获取的count值: {{ count }}</div>
    <router-link to="/index">index</router-link> |
    <router-link to="/index/foo">foo</router-link> |
    <router-link to="/index/bar">bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Index',
  computed: mapState({
    count: state => state.count,
  }),
};
</script>
