<template>
  <div class="app-header">
    <div class="logo-wrap">
    </div>
    <div class="cur-capp-name">
      {{curName}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      curName: '主页',
      sourceMap: {
        home: '主页',
        notes: '笔记',
        aboutMe: '关于我',
        collection: '收藏',
        highFreAccess: '经常访问',
        photoAlbum: '相册',
        poppin: '街舞',
        todoList: '清单',
      },
    };
  },
  created() {
    this.showTitle();
  },
  watch: {
    $route() {
      this.showTitle();
    },
  },
  methods: {
    showTitle() {
      const path = this.$route.path;
      this.curName = this.sourceMap[path.slice(1)];
    },
  },
};
</script>

<style lang="scss">
.app-header {
  width: 100%;
  height: 20px;
  background:rgb(220,220,220);
  display: flex;
  align-items: center;
  color: #000;
  cursor: pointer;
  .logo-wrap{
    width: 40px;
  }
  .cur-capp-name{
    font-weight: bold;
  }
}
</style>