<template>
  <alphabet :contacts="contacts" @change="handleLetterChange"></alphabet>
  <contact-list :contacts="contacts" :letter="letter"></contact-list>
</template>

<script>
    import axios from ''
    import alphabet from '../components/alphabet'
    import contactList from '../components/contactList'
    export default {
        name: "contact",
        data(){
            return{
                letter: '',
                contacts: {}
            }
        },
        components:{
            alphabet: alphabet,
            contactList: contactList
        },
        methods:{
            getAlphabet (){
                axios.get('static/city.json').then(this.getAlphabetSucc);
            },
            getAlphabetSucc(res){
                res = res.data;
                console.log("res", res);
                if(res.data){
                    debugger
                    const data = res.data;
                    this.contacts = data.contacts;
                }
            },
            handleLetterChange (letter) {
                this.letter = letter
            }
        },
        mounted() {
            this.getAlphabet();
        }
    }
</script>

<style scoped>

</style>
