<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
    ></city-list>
    <city-alphabet :cities="cities"
    @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import axios from 'axios'

  export default {
    name: 'city',
    components: {
      CityHeader: CityHeader,
      CitySearch: CitySearch,
      CityList: CityList,
      CityAlphabet: CityAlphabet
    },
    data: function(){
      return{
        cities: {},
        hotCities: []
      }
    },
    methods:{
      getCityInfo (){
        axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res){
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      }
    },
    mounted () {
      this.getCityInfo()
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
