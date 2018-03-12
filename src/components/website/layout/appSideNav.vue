<template>
  <div class="app-sideNav">
    <div class="nav-container">
      <div class="nav-item" @click="routeInto('home')">
        <img src="../../../assets/nav-icon/Home.jpg" alt="">
        <div class="tip">主页</div>
      </div>
      <div class="nav-item" @click="routeInto('photoAlbum')">
        <img src="../../../assets/nav-icon/photoAlbum1.jpg" alt="">
        <div class="tip">相册</div>        
      </div>
      <div class="nav-item" @click="routeInto('notes')">
        <img src="../../../assets/nav-icon/notes.jpg" alt="">
        <div class="tip">笔记</div>        
      </div>
      <div class="nav-item" @click="routeInto('todoList')">
        <img src="../../../assets/nav-icon/todoList.jpg" alt="">
        <div class="tip">清单</div>        
      </div>
      <div class="nav-item" @click="routeInto('collection')">
        <img src="../../../assets/nav-icon/CD.jpg" alt="">
        <div class="tip">收藏</div>        
      </div>
      <div class="nav-item" @click="routeInto('aboutMe')">
        <img src="../../../assets/nav-icon/aboutMe.jpg" alt="">
        <div class="tip">关于我</div>        
      </div>
      <div class="nav-item" @click="routeInto('highFreAccess')">
        <img src="../../../assets/nav-icon/TimeMachine.jpg" alt="">
        <div class="tip">经常访问</div>        
      </div>
      <div class="nav-item" @click="routeInto('home')">
        <img src="../../../assets/nav-icon/Utilities.jpg" alt="">
        <div class="tip">管理</div>        
      </div>
      <div class="nav-item" @click="routeInto('poppin')">
        <img src="../../../assets/nav-icon/GarageBand.jpg" alt="">
        <div class="tip">街舞</div>        
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'app-sideNav',
  mounted() {
    this.calHoverWidth();
  },
  methods: {
    calHoverWidth() {
      $('.app-sideNav .nav-item .tip').each((index, item) => {
        const width = ($(item).text().length + 2) * 12;
        $(item).width(width);
      });
    },
    routeInto(path) {
      this.$router.push(`/${path}`);
    },
  },
};
</script>

<style lang="scss">
.app-sideNav {
  position: fixed;
  top: 60px;
  background: rgba(200,200,200,0.6);
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  .nav-container{
    width: 40px;
    padding: 10px 5px;
    .nav-item{
      position: relative;
      margin-bottom: 4px;
      width:30px;
      height: 30px;
      &:nth-last-child(1){
        margin-bottom: 0px;
      }
      &:hover{
        .tip{
          opacity: 1;
        }
      }
      img{
        width:30px;
        height: 30px;
      }
      .tip{
        opacity: 0;
        background:rgb(220,220,220);
        position: absolute;
        height: 20px;
        line-height: 20px;
        border-radius: 4px;
        text-align: center;
        box-shadow: 0 0px 4px 1px rgba(0,0,0,0.27);
        top: 50%;
        margin-top: -10px;
        margin-left: 40px;
        transition: all 0.5s ease-in 0s;
      }
    }
  }
}
</style>