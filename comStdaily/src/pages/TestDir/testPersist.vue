<template>
 <div>
   <div>testPersist</div>
   <div  v-show="show">{{EntityListData}}</div>
   <hr>
   <div v-show="show">{{LayoutFormData}}</div>
   <b-button @click="clickMeClickMe">
     点我点我点我！！！
     我帮你改变localStorage
   </b-button>
 </div>
</template>

<script>

    import {mapState, mapMutations, mapActions} from "vuex";
    export default {
        name: "testPersist",
        data(){
            return{
                show: false
            }
        },
        computed: {
            // 映射 this.EntityList 为 store.state.EntityList
            // 映射 this.LayoutForm 为 store.state.LayoutForm
            ...mapState([
                'stateEntityList',
                'stateLayoutForm',
                'stateExamineData'
            ]),
            // 映射 this.setInfo 为 this.$store.commit('setInfo')
            ...mapMutations([
                'mutationsEntityList',
                'mutationsLayoutForm',
                'mutationsExamineData'
            ]),
            // 映射 this.getInfo 为 this.$store.dispatch('getInfo')
            ...mapActions([
                'actionsEntityList',
                'actionsLayoutForm'
            ]),
            EntityListData: {
                get(){
                    return JSON.parse(localStorage.vuex).stateEntityList.data;
                }
            },
            LayoutFormData: {
                get(){
                    return JSON.parse(localStorage.vuex).stateLayoutForm.data;
                }
            }
        },
        methods: {
            clickMeClickMe(){
                console.log("start");
                this.mutationsExamineData(this.EntityListData.data.data);
            }
        },
        watch: {
            stateEntityList() {
                // debugger
            },
            stateLayoutForm() {
                // debugger
            }
        },
        beforeMount() {
            this.actionsEntityList;
            this.actionsLayoutForm;
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
