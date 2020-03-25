<template>
  <div id="demo10">
    <iframe id="iframeid" src="https://10.219.100.76/dev-hub/mashup-editor/#qext{new_test}" frameborder="0" width="100%" height="100%"></iframe>
  </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                iframeVal: ""
            }
        },
        methods:{
            vuexIframe (){
                this.iframeVal = this.$store.state.stateIframeSrc;
                document.getElementById("iframeid").src = this.iframeVal;
            }
        },
        mounted(){
            this.vuexIframe();
        }
    }
</script>

<style scoped>
  #demo10{
    display: flex;
    height: 100%;
  }
</style>
