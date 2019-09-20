<template>
  <div id="wrapper">
    <up-pull></up-pull>
  </div>
</template>

<script>

    import UpPull from "@/components/global/RefreshUpPull";

    export default {
        name: "testUpPull",
        components: {
          UpPull: UpPull
        }
    }
</script>

<style scoped>

  #wrapper{
    height: 400px;
  }

</style>
