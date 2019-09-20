<template>
    <ul class="sidebar-menu tree">
      <li class="header">MAIN NAVIGATION</li>
      <li v-for="(nav, index) in navsData" :key="index" @click="openCloseMenu($event)" ref="MenuItem">
        <router-link v-if="!nav.child" :to="nav.to">
          <i class="fa" :class="nav.icon"></i>
          <span>{{ nav.name }}</span>
          <span class="pull-right-container">
          <span class="label label-primary pull-right">{{ nav.label }}</span>
        </span>
        </router-link>
        <a v-else href="javascript:;">
          <i class="fa" :class="nav.icon"></i>
          <span>{{ nav.name }}</span>
          <span class="pull-right-container">
            <span class="label label-primary pull-right">{{ nav.label }}</span>
          </span>
        </a>
        <ul class="treeview-menu" v-if="nav.child" style="display: none">
          <li v-for="(navchild, indexChild) in nav.child" :key="indexChild">
            <router-link :to="navchild.url">
              <i class="fa fa-circle-o"></i>
              {{navchild.text}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "SideBarItem",
        data(){
          return{
            isOpenMenu: false
          }
        },
        props: {
          navsData: Array,
        },
        methods:{
            openCloseMenu(event){
            // debugger
            if(this.isOpenMenu){
              event.target.parentNode.classList.add("menu-open");
              event.target.nextElementSibling.style.display = "none";
              this.isOpenMenu = !this.isOpenMenu;
            } else {
              event.target.parentNode.classList.remove("menu-open");
              event.target.nextElementSibling.style.display = "block";
              this.isOpenMenu = !this.isOpenMenu;
            }
          }
        }
    }
</script>

<style scoped>

</style>
