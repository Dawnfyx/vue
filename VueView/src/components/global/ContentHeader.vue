<template>
  <section class="content-header">
    <h1>
      {{ contentHeader.title }}
      <small>
        {{ contentHeader.subTitle }}
      </small>
    </h1>
  </section>
</template>

<script>
    export default {
        name: "ContentHeader",
        props: {
          contentHeader: Object
        }

    }
</script>

<style scoped>

</style>
