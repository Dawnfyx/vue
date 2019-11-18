<template>
  <div class="content">
    <div class="itemList">
      <!--<p> {{detailLayout}} </p>-->
      <p> {{detailLayout}} </p>

      <div v-for="item of detailLayout">
        {{item.label}} === {{getItemValue(detailData.Attributes,item.id)}}
      </div>

      <div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "FormItem",
        data() {
            return {
                form: {
                    "valueInput": "",
                    "textareaText": "",
                    "dateText": "",
                    "datetimeText": {
                        "date": "",
                        "time": ""
                    },
                    "checked": false
                }
            }
        },
        props: {
            detailLayout: Object,
            detailData: Object
        },
        methods: {
            getItemValue(item, id) {
                for (let i = 0; i < item.length; i++) {
                    if (item[i].Key == id) {
                        return item[i].Value
                    }
                }
            }
        },
        computed: {},
        mounted() {
            // console.log("detailLayout", this.detailLayout);
            console.log("detailData", this.detailData.Id);
        }
    }
</script>

<style scoped>


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
