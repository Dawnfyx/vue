<template>
  <div class="itemList">
    <div class="item"
         v-for="(itemData, key) of listData.Entities" :key="key">
      <router-link :to="'/customer/detail/'+ itemData.Id">
        <div v-for="item of listLayout.Fields">
          {{item.label}}: {{getItemValue(itemData.Attributes,item)}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

  import picklist from "@/components/global/Picklist";

  export default {
    name: "list",
    props: {
      listLayout: Object,
      listData: Object,
      searchValue: String
    },
    components:{
      picklist: picklist
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
      getItemValue(item, data) {
        let regTime = /^\/Date\((.*)\)\/$/;
        for (let i = 0; i < item.length; i++) {
          if (item[i].Key == data.id) {
            if(data.type == "DateTime"){
              regTime.test(item[i].Value);
              return this.$common.getTime(RegExp.$1);
            } else if(data.type == "Picklist"){
                // console.log(data.id);
              return item[i].Value.Value
            } else {
              return item[i].Value
            }
          }
        }

      }
    },
    created() {
    },
    beforeMount() {
      // console.log("listData", this.listData);
    },
    mounted() {
      // debugger
    }
  }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .itemList {
    background-color: @cleee;
    padding: 1.2rem;
  }

  .item {
    border-radius: 0.5rem;
    background-color: @clfff;
    padding: 0.5rem;

    & + .item {
      margin-top: 1rem;
    }
    a {
      color: @cl333;
    }
  }
</style>
