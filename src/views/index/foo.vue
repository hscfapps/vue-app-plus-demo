<template>
  <div class="about">
    <h1>我是代理项目foo页面</h1>
    <button @click="add">点击可以改变vuex中的count</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Index',
  methods: {
    ...mapMutations({
      add: 'increment'
    })
  },
};
</script>
