<template>
  <div>
    <header-title
      :title="title.title"
      :headerLeft="title.headerLeft"
      :headerRight="title.headerRight"></header-title>
    <child-contact-list :contacts="contacts" :letter="letter"></child-contact-list>
    <child-alphabet :contacts="contacts" @change="handleLetterChange"></child-alphabet>
  </div>
</template>

<script>
    import axios from 'axios'
    import headerTitle from "@/components/headerTitle";
    import childSearch from './components/search'
    import childAlphabet from './components/alphabet'
    import childContactList from './components/contactList'

    export default {
        name: "contact",
        data(){
            return{
                title: {
                    title: "联系人",
                    headerLeft: true,
                    headerRight: true
                },
                letter: "",
                contacts: {}
            }
        },
        components:{
            headerTitle: headerTitle,
            childSearch: childSearch,
            childAlphabet: childAlphabet,
            childContactList: childContactList
        },
        methods:{
            handleLetterChange (letter) {
                this.letter = letter
            }
        },
        beforeMount(){
            this.$store.dispatch('actionsContact')
        },
        mounted() {
            this.contacts = this.$store.state.stateContactList.data.contact;
        }
    }
</script>

<style scoped>

</style>
