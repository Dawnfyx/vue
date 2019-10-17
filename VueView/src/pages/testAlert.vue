<template>
  <div>
    <ewpAlert></ewpAlert>
  </div>
</template>

<script>

    import ewpAlert from "@/components/global/Alert";

    export default {
        name: "testAlert",
        data: function(){
            return {
              alertText: "你好"
            }
        },
        components: {
          ewpAlert: ewpAlert,
        }
    }

</script>

<style scoped>

</style>
