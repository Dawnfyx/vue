<template>
  <div class="contacts" ref="wrapper">
    <!--Bscroll插件结构目录必须包一个DIV-->
    <div>
      <div class="itemList">
        <div class="item"
             v-for="(itemData, key) of listData.Entities" :key="key">

          <router-link :to="'/contact/detail/'+ itemData.Id">
            <div v-for="item of listLayout.Fields">
              {{item.label}}: {{getItemValue(itemData.Attributes,item)}}
            </div>
          </router-link>
        </div>
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>

  import Bscroll from 'better-scroll'

  export default {
    name: "contactItem",
    data() {
      return {}
    },
    props: {
        listLayout: Object,
        listData: Object,
        searchValue: String
    },
    computed: {
      contactName: {
        get() {
          return this.listData;
        }
      }
    },
    methods: {
      getfindKey(item) {
        for(var i=0; i<item.length; i++){
          if(item[i].Key == "fullname"){
            return item[i].Value
          }
        }
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
            } else if(data.type == "Customer"){
              return item[i].Value.Name
            } else if(data.type == "Virtual"){
              return item[i].Value.Value
            } else if(data.type == "Lookup"){
              return item[i].Value.Name
            }else {
              return item[i].Value
            }
          }
        }

      }
    },
    watch: {
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper);
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
