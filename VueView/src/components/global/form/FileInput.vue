<template>
    <div>
        <!-- Styled -->
        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

        <!-- Plain mode -->
        <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
        <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>
        <div style="margin-top: 80px;"></div>
        <h2>文件图片 -- 测试</h2>
        <input type="file" class="file"  name="file" id="test3" @change="uploadBefore">
        <div class="imgShow" id="imgShow">
            <span class="def-first"></span>
            <ul class="">
            </ul>
        </div>
        <button type="submit" @click="submitForm">提交</button>
    </div>
</template>

<script>
  export default {
      name: "FileInput",
      data() {
          return {
              file: null,
              file2: null
          }
      },
      methods: {
          uploadBefore(){
              let formDate = new FormData();
              this.formData = new window.FormData()
              this.formData.append("file", document.querySelector("input[type=file]").files[0])
              let file = document.getElementById("test3").files[0]
              let fileName = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length)

              const fileTypeArray = ["xls","xlsx", "ppt", "pptx", "doc", "docx", "txt", "pdf", "jpg", "git", "jpeg", "png", "bmp", "mp3", "mp4"];

              let fileType = false;
              for(let i = 0; i<fileTypeArray.length; i++ ){
                  if(fileName == fileTypeArray[i]){
                      fileType = true;
                  }
              }
              if(!fileType){
                  alert('上传文件格式不正确，请检查');
              } else{
                  let domId = document.getElementById("imgShow");
                  this.createDomImg(domId, file);
              }
          },
          createDomImg(domId, file){
              let dimImg = document.createElement("img");
              //读取计算机文件
              var freader = new FileReader();
              freader.readAsDataURL(file);
              freader.onloadstart = function () {
                console.log('文件上传处理......')
              }
              //操作完成
              freader.onload = function () {
                dimImg.setAttribute('src',freader.result);
                domId.appendChild(dimImg);
              }
          },
          submitForm(){
              this.saveLoading = true
              // this.$axios.post();
          }
      }
  }
</script>

<style>
  .imgShow{
      border: 1px solid red;
      width: 100%;
      height: 100px;
      box-sizing: border-box;
  }
  .imgShow ul{
      list-style-type: none;
      width: 100%;
      height: 100px;
      padding: 0px;
      float: left;
  }
  .imgShow ul li{
      width: 50px;
      height: 100px;
      float: left;
  }
  .def-first{
      display: block;
      width: 50px;
      height: 100px;
      background-color: red;
      float: left;
  }
</style>



