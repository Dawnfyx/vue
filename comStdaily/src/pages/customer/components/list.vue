<template>
  <!--  <div>{{listData}}</div>-->
  <!--<b-list-group>-->
  <!--<b-list-group-item-->
  <!--v-for="(item, key) of userName":key="key"-->
  <!--@click="handleRouteGo(item, key)">-->
  <!--&lt;!&ndash;{{getfindKey(item.Attributes)}}&ndash;&gt;-->
  <!--&lt;!&ndash;&lt;!&ndash;<page></page>&ndash;&gt;&ndash;&gt;-->
  <!--</b-list-group-item>-->
  <!--</b-list-group>-->
  <div class="itemList">
    <div class="item"
         v-for="(itemData, key) of listData.Entities" :key="key">

        <router-link :to="'/customer/detail/'+ itemData.Id">About
        <div v-for="item of listLayout.Fields">
          {{item.label}} === {{getItemValue(itemData.Attributes,item.id)}}
        </div>
        </router-link>
    </div>
    <div>
      <!--<p>Data==={{Data}}</p>-->
      <!--<p>listLayout==={{listLayout}}</p>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "list",
    props: {
      listLayout: Object,
      listData: Object,
      searchValue: String
    },
    computed: {
      userName: {
        get() {
          return this.listData;
        }
      },
    },
    methods: {
      handleRouteGo(item) {
        console.log(item);
        this.$router.push("/customer/detail/" + item.id);
      },
      getItemValue(item, id){
        for (let i = 0; i <item.length ; i++) {
          if(item[i].Key == id){
            return item[i].Value
          }
        }
      }
    },
    created() {
    },
    beforeMount() {
      // console.log("listData", this.listData);
    },
    mounted(){
      // debugger
    }
  }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .itemList{
    background-color: @cleee;
    padding: 1.2rem;
  }
  .item {
    border-radius: 0.5rem;
    background-color: @clfff;
    padding: 0.5rem;

    & + .item{
      margin-top: 1rem;
    }
    a{
      color: @cl333;
    }
  }
</style>
