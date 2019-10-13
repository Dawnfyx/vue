<template>
  <div>
    <icon-grid :HomeData="HomeData"></icon-grid>
    <footer-link :HomeData="HomeData"></footer-link>
  </div>
</template>

<script>
  import axios from 'axios'
  import IconGrid from '@/pages/Home/components/IconGrid'
  import FooterLink from '@/pages/Home/components/FooterLink'

  export default {
    name: "Home",
    data() {
      return {
        HomeData: {}
      }
    },
    components:{
      IconGrid: IconGrid,
      FooterLink: FooterLink
    },
    methods: {
      getIndexInfo() {
        axios.get('/api/index.json').then(this.getIndexInfoSucc)
      },
      getIndexInfoSucc(res) {
        const data = res.data;
        if (data.data) {
          this.HomeData = data.data;
        }
      }
    },
    mounted() {
      this.getIndexInfo()
    }
  }
</script>

<style scoped>

</style>
