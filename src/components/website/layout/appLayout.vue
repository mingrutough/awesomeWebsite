<template>
  <div class="app-layout">
    <app-header></app-header>
    <main class="app-content">
      <aside>
        <app-side-nav></app-side-nav>
      </aside>
      <article>
        <transition>
          <router-view></router-view>
        </transition>
      </article>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './appHeader';
import appFooter from './appFooter';
import appSideNav from './appSideNav';

export default {
  name: 'app-layout',
  components: {
    appHeader,
    appFooter,
    appSideNav,
  },
};
</script>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url("../../../assets/appBackground1.jpg") no-repeat;
  background-size: cover;
  .app-content{
    display: flex;
    justify-content: center;
    article{
      width: 1200px;
    }
  }
}
</style>