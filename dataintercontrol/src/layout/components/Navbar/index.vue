<template>
  <div class="navbar">
<!--    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" ></breadcrumb>-->
    <div class="right-menu" v-if="isShowBreadcrumb">
      <el-button size="mini" class="new-add" @click="toggleModel()">新建</el-button>
    </div>

    <el-dialog
      title="新建APP"
      id="modealdialog"
      :visible.sync="dialogVisible"
      width="60%">
      <el-input
        placeholder="请输入内容"
        v-model="textarea1">
      </el-input>
      <div style="margin: 20px 0;"></div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="textarea2">
      </el-input>
      <div style="margin: 20px 0;"></div>
<!--      <el-upload class="upload-demo">-->

  <!--        action="https://jsonplaceholder.typicode.com/posts/"-->
  <!--        :on-preview="handlePreview"-->
  <!--        :on-remove="handleRemove"-->
  <!--        :before-remove="beforeRemove"-->
  <!--        multiple-->
  <!--        :limit="3"-->
  <!--        :on-exceed="handleExceed"-->
  <!--        :file-list="fileList"-->

<!--      </el-upload>-->
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="postData()">确定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

    import Breadcrumb from '@/components/Breadcrumb'

    export default {
        data(){
            return{
                dialogVisible: false,
                routeData: [
                    "/myread/index",
                    "/workshop/index",
                    "/test/index",
                    "/dashboard/index",
                ],
                isShowBreadcrumb: true,
                newAddDemo: {
                    title: "",
                    describe: ""
                },
                textarea1: "",
                textarea2: "",
                isShowmodel: false,
            }
        },
        components:{
            Breadcrumb,
        },
        computed:{

        },
        watch:{
            $route(to,from){
                console.log(to.path);
                if(to.path !== "/maketopage/index"){
                    this.isShowBreadcrumb = false
                } else{
                    this.isShowBreadcrumb = true
                }
            }
        },
        methods:{
            toggleModel(){
                this.dialogVisible = !this.dialogVisible;
            },
            postData(){
                let data = {
                    textarea1: this.textarea1,
                    textarea2: this.textarea2
                }
                this.$store.commit('mutationsCreateFormHtml', data);
                // debugger
                this.dialogVisible = false;
            }
        }
    }
</script>

<style lang="less" scoped>

  .navbar {
    height: 50px;
    overflow: hidden;

    .app-breadcrumb.el-breadcrumb{
      display: inline-block;
      font-size: 14px;
      line-height: 50px;
      margin-left: 8px;
      float: left;
    }

    .right-menu {
      height: 100%;
      float: right;

      .new-add {
        margin-top: 10px;
        margin-right: 10px;
      }

    }
  }

  #modealdialog{

    .el-dialog{
      width: 800px;
    }

  }

</style>
