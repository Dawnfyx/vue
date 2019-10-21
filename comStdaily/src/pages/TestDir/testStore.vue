<template>
   <div>
     <div>test VUEX</div>
     <div ref="html"></div>
   </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from "vuex"
  export default {
      name: "testStore",
      data(){
          return{
              data: {}
          }
      },
      components: {
      },
      computed: {
          // 映射 this.EntityListData 为 store.state.EntityListData
          ...mapState(['EntityList']),
          // 映射 this.setInfo 为 this.$store.commit('setInfo')
          ...mapMutations(['setEntityListInfo']),
          // 映射 this.getInfo 为 this.$store.dispatch('getInfo')
          ...mapActions(["getEntityListInfo"])
      },
      methods:{
      },
      watch:{
          EntityList(){
              this.$refs.html.innerText = this.EntityList.data.data.layout.id
          }
      },
      mounted() {
          this.getEntityListInfo;
      }
  }

</script>

<style scoped>

</style>
