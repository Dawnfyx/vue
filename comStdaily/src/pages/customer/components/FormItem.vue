<template>
  <div class="content">
    <ul>
      <li class="item" v-for="(item, key) of customer" :key="key">
        <div v-if="item.type == 'String'">
          <b-form-group
            :label="item.label"
            :label-for="item.id"
          >
            <b-form-input :type="`text`" :id="item.id" trim></b-form-input>
          </b-form-group>
        </div>
        <div v-else-if="item.type == 'Owner'">
          <b-form-group
            :label="item.label"
            :label-for="item.id"
          >
            <b-form-input :type="`text`" :id="item.id" trim></b-form-input>
          </b-form-group>
        </div>
        <div v-else-if="item.type == 'DateTime'">
          <b-form-group
            :label="item.label"
            :label-for="item.id"
          >
            <b-form-input :type="`date`" :id="item.id"></b-form-input>
          </b-form-group>
        </div>
        <div v-else-if="item.type == 'Email'">
          <b-form-group
            :label="item.label"
            :label-for="item.id"
          >
            <b-form-input :type="`email`" :id="item.id" trim></b-form-input>
          </b-form-group>
        </div>
        <div v-else-if="item.type == 'Virtual'">
          <b-form-group
            :label="item.label"
            :label-for="item.id"
          >
            <b-form-input :type="`text`" :id="item.id" trim></b-form-input>
          </b-form-group>

        </div>
        <div v-else-if="item.type == 'Boolean'">
          <b-form-group
            :label="item.label"
            :label-for="item.id"
          >
            <b-form-radio name="some-radios" value="A">Option A</b-form-radio>
            <b-form-radio name="some-radios" value="B">Option B</b-form-radio>
          </b-form-group>
        </div>
        <div v-else-if="item.type == 'Memo'">
          <b-form-group
            :label="item.label"
            :label-for="item.id"
          >
            <b-form-textarea
              :id="item.id"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </div>
        <div v-else-if="item.type == 'Picklist'">
          <b-form-group
            :label="item.label"
            :label-for="item.id"
          >
            <b-form-checkbox v-model="form.checked" name="check-button" switch>
              Switch Checkbox <b>(Checked: {{ form.checked }})</b>
            </b-form-checkbox>
          </b-form-group>
        </div>
        <div v-else-if="item.type == 'Lookup'">
          <b-form-group
            :label="item.label"
            :label-for="item.id"
          >
            <router-link to="/testSearch">
              测试客户外键跳转
            </router-link>
          </b-form-group>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

    export default {
        name: "FormItem",
        data(){
          return{
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
        props:{
          customer: Object
        },
        computed:{
        }
    }
</script>

<style scoped>


  .content{
    background: #fff;
  }
  .content ul{
      list-style-type: none;
      padding-left: 0px;
      margin-top: 0px;
      margin-bottom: 0px;
  }
  .content ul li.item{
    padding: 10px;
  }
  .content ul li.item .form-group{
    margin-bottom: 0px;
  }
  .content ul li + li{
    border-top: 1px solid #ddd;
  }
</style>
