<template>
    <div>
      <p>testFilters</p>
      <input type="text" v-model="asdf">
      <div v-for="(item, key) in searchIn" >
        {{item.s}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "testFilters",
        data(){
            return{
                falseData:[
                    {
                        s: "1"
                    },
                    {
                        s: "2"
                    },
                    {
                        s: "3"
                    },
                    {
                        s: "4"
                    }
                ],
                asdf: ""
            }
        },
        computed:{
            searchIn() {
                if (this.asdf !== '') {
                    console.log(this.asdf)
                    var searchval = this.asdf;
                    return this.falseData.filter(function (item) {
                        console.log(searchval)
                        console.log(item.s.indexOf(searchval) > -1)
                        return item.s.indexOf(searchval) > -1
                    })
                }
                return this.list
            }
        },
        watch:{
            listData(newval, oldval){
                console.log(newval, oldval)
            }
        }
    }
</script>

<style scoped>

</style>
