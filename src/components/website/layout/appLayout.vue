<template>
  <div class="app-layout">
    <app-side-nav></app-side-nav>
    <app-header></app-header>
    <main class="app-content">
      <transition>
        <router-view></router-view>
      </transition>
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
}
</style>