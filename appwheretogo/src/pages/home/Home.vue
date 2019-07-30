<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <div>test</div>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'

  export default {
    name: 'Home.vue',
    components: {
      HomeHeader: HomeHeader,
      HomeSwiper: HomeSwiper,
      HomeIcons: HomeIcons
    }
  }
</script>

<style>

</style>
