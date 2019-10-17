<template>
  <div>
    <div class="modal-backdrop fade" :class="{in:isShow}"></div>
    <div class="modal fade" tabindex="-1" role="dialog" :class="{in:isShow}" style="display: block">
      <div class="modal-dialog" role="document" :class="{'modal-sm':bSize=='sm','modal-md':bSize=='md','modal-lg':bSize=='lg'}">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"><slot name="header"></slot> </h4>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" @click="close">Close</button>
            <button type="button" class="btn btn-primary" @click="close">Ok</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
</template>

<script>
    export default {
        name: "Modal",
        data: function () {
            return {
                isShow: false
            }
        },
        props: ["bSize"],
        methods: {
            close: function () {
              let _self = this;
              setTimeout(() => {
                _self.isShow = false;
                let defClass = document.body.className;
                document.body.className = defClass.replace("modal-open", "");
              }, 160);
            }
        },
        mounted(){
              let defClass = document.body.className;
              document.body.className = defClass + " modal-open";
              let _self = this;
              _self.isShow = true;
        }
    }
</script>

<style scoped>

</style>
