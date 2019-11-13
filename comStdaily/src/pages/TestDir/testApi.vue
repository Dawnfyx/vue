<template>
    <div>
      <h3>这里是 testApi</h3>
    </div>
</template>

<script>
    export default {
        name: "testApi",
        methods:{
            getHomeData(){
              this.$store.dispatch("actionsHomePageData");
            }
        },
        created(){
          this.getHomeData();
        }
    }
</script>

<style scoped>

</style>
