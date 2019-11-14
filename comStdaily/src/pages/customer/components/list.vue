<template>
<!--  <div>{{listData}}</div>-->
  <b-list-group>
    <b-list-group-item
      v-for="(item, key) of userName":key="key"
      @click="handleRouteGo(item, key)">
      {{getfindKey(item.Attributes)}}
      <!--<page></page>-->
    </b-list-group-item>
  </b-list-group>
</template>

<script>
    export default {
        name: "list",
        props: {
            listData: Array,
            searchValue: String
        },
        computed:{
            userName:{
              get(){
                return this.listData;
              }
            }
        },
        methods: {
            handleRouteGo(item, key){
              // this.$router.push("/customer/detail/" + item.id);
            },
            getfindKey(item) {
              for(var i=0; i<item.length; i++){
                if(item[i].Key == "name"){
                    return item[i].Value
                }
              }
            }
        }
    }
</script>

<style scoped>

</style>
