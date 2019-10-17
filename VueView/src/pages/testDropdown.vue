<template>
  <div>

    <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item active>Active action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    </b-dropdown>

    <b-dropdown text="Primary" variant="primary" class="m-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>

    <b-dropdown text="Success" variant="success" class="m-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>

    <b-dropdown text="Outline Danger" variant="outline-danger" class="m-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>

    <ewp-dropdown></ewp-dropdown>
  </div>
</template>

<script>
    import ewpDropdown from "@/components/global/Dropdown";
    export default {
        name: "testDropdown",
        components: {
            ewpDropdown: ewpDropdown
        }
    }
</script>

<style scoped>
  .dropdown{
      width: 100%;
      margin-top: 20px;
      margin-left: 20px;
  }
</style>
