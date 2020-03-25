<template>

  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">

    <slot></slot>

  </el-dialog>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                dialogVisible: false
            }
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        }
    }
</script>

<style scoped>

</style>
