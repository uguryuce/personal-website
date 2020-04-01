<template>
  <div>

    <SideNav></SideNav>


  </div>
</template>



<script>

  import SideNav from "./components/SideNav"

  export default {
    components : {
      SideNav
    }

  }

</script>



<style lang="scss">

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
