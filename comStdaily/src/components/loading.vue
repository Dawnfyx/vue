<template>
  <fade-animation v-if="loadingShow">
    <div class="loading-box">
      <img class="loading-img" :src="loadingImg" alt="">
      <p class="loading-text">loading...</p>
    </div>
  </fade-animation>
</template>

<script>

    import fadeAnimation from '@/components/FadeAnimation';

    export default {
        name: "loading",
        data() {
            return {
                loadingImg: require('@/assets/img/loading.gif')
            }
        },
        props:{
            loadingShow: Boolean
        },
        components: {
            fadeAnimation: fadeAnimation
        },
        methods: {
            showLoading() {
                this.show = !this.show;
            }
        }
    }
</script>

<style scoped lang="less">
  .loading-box {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #fff;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
    overflow: hidden;

    .loading-img {
      margin-top: 50%;
    }

    .loading-text {
      color: #333;
    }
  }
</style>
