<template>
 <div>
   <ewp-contacts :contacts="contacts" :letter="letter"></ewp-contacts>
   <ewp-alphabet :contacts="contacts" @change="handleLetterChange"></ewp-alphabet>
 </div>
</template>

<script>

   import EwpContacts from '@/components/global/AlpContacts'
   import EwpAlphabet from '@/components/global/Alphabet'

    export default {
        name: "testAlphabet",
        components: {
           EwpContacts: EwpContacts,
           EwpAlphabet: EwpAlphabet
        },
        data: function () {
            return {
                contacts: {},
                letter: ''
            }
        },
        methods: {
            getCityInfo (){
              this.$axios.get('http://localhost:8080/api/Contacts.json').then(this.handleGetCityInfoSucc)
              // axios.get('static/city.json').then(this.handleGetCityInfoSucc);
            },
            handleGetCityInfoSucc(res){
               res = res.data;
               console.log("res", res);
               if(res.data){
                  const data = res.data;
                  this.contacts = data.contacts;
               }
            },
            handleLetterChange (letter) {
                this.letter = letter
            }
        },
        mounted(){
            this.getCityInfo();
        }
    }

</script>

<style scoped>
  .contacts{
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0;
    bottom: 0;
  }
  .item{
    height: 200px;
    background-color: #65CEA7;
  }
</style>
