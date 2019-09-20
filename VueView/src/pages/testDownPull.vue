<template>
   <div id="wrapper">
     <down-pull></down-pull>
   </div>
</template>

<script>
    import DownPull from "@/components/global/RefreshDownPull";

    export default {
        name: "testDownPull",
        components: {
          DownPull: DownPull
        }
    }
</script>

<style scoped>

#wrapper{
  height: 400px;
}

</style>
