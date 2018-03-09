<template>
  <div class="app-sideNav">
    <div class="nav-container">
      <div class="nav-item">
        <img src="../../../assets/nav-icon/Home.jpg" alt="">
        <div class="tip">主页</div>
      </div>
      <div class="nav-item">
        <img src="../../../assets/nav-icon/photoAlbum1.jpg" alt="">
      </div>
      <div class="nav-item">
        <img src="../../../assets/nav-icon/notes.jpg" alt="">
      </div>
      <div class="nav-item">
        <img src="../../../assets/nav-icon/todoList.jpg" alt="">
      </div>
      <div class="nav-item">
        <img src="../../../assets/nav-icon/CD.jpg" alt="">
      </div>
      <div class="nav-item">
        <img src="../../../assets/nav-icon/TimeMachine.jpg" alt="">
      </div>
      <div class="nav-item">
        <img src="../../../assets/nav-icon/Utilities.jpg" alt="">
      </div>
      <div class="nav-item">
        <img src="../../../assets/nav-icon/GarageBand.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-sideNav',
};
</script>

<style lang="scss">
.app-sideNav {
  position: fixed;
  top: 60px;
  background: rgba(200,200,200,0.6);
  border-radius: 0 6px 6px 0;
  .nav-container{
    width: 40px;
    padding: 10px 5px;
    .nav-item{
      position: relative;
      margin-bottom: 4px;
      &:nth-last-child(1){
        margin-bottom: 0px;
      }
      img{
        width:30px;
        height: 30px;
      }
      .tip{
        position: absolute;
        height: 24px;
        border-radius: 4px;
        border: 1px solid #000;
        // padding: 0px 20px;
        box-shadow: 0 2px 4px 0 rgba(120,120,120,0.27);
      }
    }
  }
}
</style>