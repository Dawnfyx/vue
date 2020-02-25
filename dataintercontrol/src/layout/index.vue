<template>
  <div class="app-wrapper">
        this is  layout pages
    <sidebar class="sidebar-container" />

    <div class="main-container">
      <div>
        <navbar />
        <tags-view />
      </div>
      <app-main />
    </div>

  </div>
</template>

<script>

    import {AppMain, Navbar, Sidebar, TagsView} from './components';

    export default {
        name: 'layout',
        components: {
            AppMain,
            Navbar,
            Sidebar,
            TagsView
        },
    }
</script>

<style scoped>

</style>
