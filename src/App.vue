<template>
  <div>

    <SideNav></SideNav>

    <Home></Home>



  </div>
</template>



<script>

  import SideNav from "./components/SideNav";
  import Home from  "./components/Home";
  import TypeEffect from "./components/TypeEffect";

  export default {
    components : {
      SideNav,
      Home,
      TypeEffect
    }

  }

</script>



<style lang="scss">

  #app {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
