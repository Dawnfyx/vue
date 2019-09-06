<template>
    <div class="box">
      <div class="box-body">
        <table class="table">
          <thead>
            <slot name="thead"></slot>
          </thead>
          <tbody>
            <slot name="tbody"></slot>
          </tbody>
        </table>
      </div>
      <div class="box-footer">

      </div>
    </div>
</template>

<script>
    export default {
        name: "cm-table",
    }
</script>

<style scoped>

</style>
