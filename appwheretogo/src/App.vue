<template>
  <div id="app">
    <!-- keep-alive 使用缓存-->
    <!--exclude="Detail"  Detail页面不被缓存-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>

</style>
