<template>
  <div>
    <header-title
      :title="title.title"
      :headerLeft="title.headerLeft"
      :headerRight="title.headerRight"></header-title>
    <div class="title">
      基本设置
    </div>
    <div class="content">
      <ul>
        <li class="item" @click="removelocalStorage()">
          清除缓存 <span class="pull-right">当前缓存 {{localStorageSpace}}</span>
        </li>
<!--        <li class="item">-->
<!--          <div>-->
<!--            <div role="group" class="form-group" id="__BVID__311">-->
<!--              <label class="d-block" id="__BVID__31__BV_label_">设置</label>-->
<!--              <div>-->
<!--                <div class="custom-control custom-switch">-->
<!--                  <input-->
<!--                    type="checkbox"-->
<!--                    name="check-button"-->
<!--                    autocomplete="off"-->
<!--                    class="custom-control-input"-->
<!--                    value="true"-->
<!--                    id="__BVID__31">-->
<!--                  <label class="custom-control-label" for="__BVID__31">-->
<!--                  </label>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>

    import headerTitle from "@/components/headerTitle";

    export default {
        name: "configs",
        data() {
            return {
                title: {
                    title: "设置",
                    headerLeft: true
                },
                configData: {},
                localStorageSpace: ""
            }
        },
        components:{
            headerTitle: headerTitle
        },
        methods: {
            getlocalStorageSpace() {
                let allStrings = '';
                for (var key in localStorage) {
                    if (localStorage.hasOwnProperty(key)) {
                        allStrings += localStorage[key];
                    }
                }
                if(allStrings){
                    this.localStorageSpace = parseInt(3 + ((allStrings.length * 16) / (8 * 1024))) + ' KB';
                } else {
                    this.localStorageSpace = '0 KB';
                }
            },
            removelocalStorage(key) {
                this.$store.dispatch("actionsClearState");

                for (var key in localStorage) {
                    if (localStorage.hasOwnProperty(key)) {
                        localStorage.removeItem(key)
                    }
                }
                this.localStorageSpace = '0 KB';
            }
        },
        watch:{
            localStorageSpace(){
            }
        },
        mounted() {
            this.getlocalStorageSpace()
        }
    }
</script>

<style scoped>
  .title {
    line-height: 20px;
    background: #eee;
    text-indent: 10px;
    padding: 6px;
  }

  .content {
    background: #fff;
  }

  .content ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .content ul li.item {
    padding: 10px;
  }

  .content ul li.item .form-group {
    margin-bottom: 0px;
  }

  .content ul li + li {
    border-top: 1px solid #ddd;
  }
</style>
