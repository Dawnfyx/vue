<template>
  <div id="detailContent">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
      label="提交人"
      label-for="examineFrom">
        <span id="examineFrom">{{formData.form[0].from}}</span>
      </b-form-group>
      <b-form-group
        label="审批流程"
        label-for="examineFlow">
        <span id="examineFlow">{{formData.form[0].node}}</span>
      </b-form-group>
      <b-form-group
        label="节点名称"
        label-for="examineFlowName">
        <span id="examineFlowName">{{formData.form[0].nodename}}</span>
      </b-form-group>
      <b-form-group
      label="审批时间"
      label-for="examineTime">
        <span id="examineTime">{{formData.form[0].time}}</span>
      </b-form-group>
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
<!--      <b-button type="submit" variant="primary">Submit</b-button>-->
<!--      <b-button type="reset" variant="danger">Reset</b-button>-->
    </b-form>
  </div>
</template>

<script>
    export default {
        name: "detailContent",
        props:{
            formData: Object
        },
        methods:{
            onSubmit(){

            },
            onReset(){
                debugger
            }
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

    #detailContent{
      margin-top: -7rem;
      margin-left: 1.2rem;
      margin-right: 1.2rem;
      border: @borderVal;
      border-radius: 0.5rem;
      background-color: @clfff;
      padding: 1rem;
      overflow: hidden;

      .form-group{
        width: 50%;
        float: left;
      }
    }
</style>
