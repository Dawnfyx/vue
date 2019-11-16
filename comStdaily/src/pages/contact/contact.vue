<template>
  <div>
    <header-title
      :title="title.title"
      :headerLeft="title.headerLeft"
      :headerRight="title.headerRight"></header-title>
    <childContactLtem :contacts="contactName"></childContactLtem>
    <!--<child-contact-list :contacts="contactName" :letter="letter"></child-contact-list>-->
    <!--<child-alphabet :contacts="contacts" @change="handleLetterChange"></child-alphabet>-->

  </div>
</template>

<script>
  import headerTitle from "@/components/headerTitle";
  import childSearch from './components/search';
  import childAlphabet from './components/alphabet';
  import childContactList from './components/contactList';
  import childContactLtem from './components/contactItem';

  export default {
    name: "contact",
    data() {
      return {
        title: {
          title: "联系人",
          headerLeft: true,
          headerRight: true
        },
        letter: "",
        EntityViewAndList: {},
        contacts: []
      }
    },
    components: {
      headerTitle: headerTitle,
      childSearch: childSearch,
      childAlphabet: childAlphabet,
      childContactList: childContactList,
      childContactLtem: childContactLtem
    },
    computed: {
      contactName: {
        get() {
          return this.contacts;
        }
      }
    },
    methods: {
      handleLetterChange(letter) {
        this.letter = letter
      }
    },
      created(){
          this.EntityViewAndList = this.$store.state.sContactEntityViewAndList;
      },
      beforeMount(){
      },
      mounted() {
      }
  }
</script>

<style scoped>

</style>
