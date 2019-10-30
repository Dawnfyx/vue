<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * { touch-action: none; }
  #app{
    font-size: 14px;
  }
</style>
