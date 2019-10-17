<template>
  <ewp-modal :b-size="bSize">
    <span slot="header">ssss</span>
    <span slot="body">ssss</span>
  </ewp-modal>
</template>

<script>

    import ewpModal from "@/components/global/Modal";

    export default {
        name: "testModal",
        data: function(){
            return {
              bSize: 'sm'
            }
        },
        components: {
          ewpModal: ewpModal
        }
    }
</script>

<style scoped>

</style>
