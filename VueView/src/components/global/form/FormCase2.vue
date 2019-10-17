<template>
  <div>
    <h1>form</h1>
    <b-container fluid>
      <h3>test test test</h3>
        <!--<div v-if="formData"></div>-->
      <div class="item" v-for="item of formData" v-if="item.type == '1'">
        <h3>{{item.title}}--{{form.inputText}}</h3>
        <b-form-input v-model="form.inputText" placeholder="请输入内容"></b-form-input>
      </div>
      <div class="item" v-for="item of formData" v-if="item.type == '2'">
        <h3>{{item.title}}--{{form.textareaText}}</h3>
        <b-form-textarea
          v-model="form.textareaText"
          placeholder="请输入内容"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </div>
      <div class="item" v-for="item of formData" v-if="item.type == '3' && item.time == false">
        <h3>{{item.title}}---{{form.dateText}}</h3>
        <b-form-input v-model="form.dateText" :type="`date`"></b-form-input>
      </div>
      <div class="item" v-for="item of formData" v-if="item.type == '3' && item.time == true">
        <h3>{{item.title}}---{{form.datetimeText.date}} {{form.datetimeText.time}}</h3>
        <b-input-group class="ewp-dateTime">
          <b-form-input v-model="form.datetimeText.date" :type="`date`"></b-form-input>
          <b-form-input v-model="form.datetimeText.time" :type="`time`"></b-form-input>
        </b-input-group>
      </div>
      <div class="item" v-for="item of formData" v-if="item.type == '4' && item.dropdown == false">
        <h3>布尔值--{{form.radioText}}</h3>
        <p>{{item.title}}</p>
        <b-form-group>
          <b-form-radio v-model="form.radioText" name="some-radios" value="A">Option A</b-form-radio>
          <b-form-radio v-model="form.radioText" name="some-radios" value="B">Option B</b-form-radio>
        </b-form-group>
      </div>
      <div class="item" v-for="item of formData" v-if="item.type == '4' && item.dropdown == true">
        <h3>布尔值--</h3>
        <p>{{item.title}}</p>
        <b-form-group>
          <b-form-radio-group
            id="btn-radios-3"
            v-model="selected"
            :options="item.options"
            buttons
            stacked
            name="radio-btn-stacked"
          ></b-form-radio-group>
        </b-form-group>
      </div>
      <div class="item" v-for="item of formData" v-if="item.type == '5'">
        555555555555
      </div>
      <div>{{formData}}</div>
    </b-container>
  </div>
</template>

<script>
    export default {
        name: "FormCase",
        data(){
            return{
                form: {
                  "inputText": "",
                  "textareaText": "",
                  "dateText": "",
                  "datetimeText": {
                    "date": "",
                    "time": ""
                  },
                  "radioText": "",
                  "selectedText": ""
                }
            }
        },
        props: {
          formData: Object
        },
        computed: {

        },
        methods: {
        }
    }
</script>

<style scoped>
  * { touch-action: none; }
  .item{
    background-color: #ffffff;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 10px;
    padding: 15px;
  }
  .item .search{
    font-size: 20px;
  }
  .ewp-dateTime{
    width: 100%;
  }
  .ewp-dateTime input{
    width: 50%;
    float: left;
  }
</style>

