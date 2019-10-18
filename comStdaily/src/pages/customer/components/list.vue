<template>
  <b-list-group>
    <b-list-group-item
      v-for="(item, key) of listData.data" :key="key">
      {{getDataValue('new_name', item.attributes)}}
    </b-list-group-item>

  </b-list-group>
</template>

<script>
    export default {
        name: "list",
        props: {
            listData: Object
        },
        methods: {
            getDataValue(name, dataArray){
                let text = "";
                for(let i=0; i<=dataArray.length; i++){
                    if(dataArray[i].name == name ){
                        let text = dataArray[i].value;
                        return text;
                    }
                }
                return  text;
            }
        }
    }
</script>

<style scoped>

</style>
