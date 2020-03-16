<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
<!--      <keep-alive>-->
<!--        <router-view :key="key" />-->
<!--      </keep-alive>-->
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
    export default {
        name: "AppMain",
        computed: {
            key() {
                return this.$route.path
            }
        }
    }
</script>

<style scoped>
 .app-main{
   height: 500px;
   box-shadow: inset 0px 5px 5px -5px rgba(0, 0, 0, 0.5);
   padding: 20px;
 }
</style>
