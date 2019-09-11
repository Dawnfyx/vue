<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <user-panel></user-panel>
      <side-bar-item :navsData="navs"></side-bar-item>
    </section>
  </aside>
</template>

<script>

  import UserPanel from '@/components/global/UserPanel';
  import SideBarItem from '@/components/global/SideBarItem';

      export default {
          name: "SideBar",
          data(){
            return{
              navs: [
                {
                  name: 'Dashboard',
                  to: 'dashboard',
                  paths: ['dashboard'],
                  icon: 'fa-dashboard'
                },
                {
                  name: 'Projects',
                  to: '',
                  paths: ['project_list', 'project_new'],
                  icon: 'fa-cube',
                  child: [
                    {
                      text: "11111",
                      url: 'pages/tables/simple.html'
                    },
                    {
                      text: "222222",
                      url: 'pages/tables/simple.html'
                    }
                  ]
                },
                {
                  name: 'Activity',
                  to: 'activity',
                  paths: ['activity'],
                  icon: 'fa-rocket',
                  label: ''
                },
                {
                  name: 'Background Jobs',
                  to: 'jobs',
                  paths: ['jobs'],
                  icon: 'fa-send',
                  label: ''
                },
                {
                  name: 'Members',
                  to: 'members',
                  paths: ['members'],
                  icon: 'fa-user'
                }
              ]
            }
          },
          components: {
            SideBarItem: SideBarItem,
            UserPanel: UserPanel
          },
          methods: {
          }
      }
</script>

<style scoped>

</style>
