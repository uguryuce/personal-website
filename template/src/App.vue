<template>
  <div style="background-color: #fbfbfd;">

    <SideNav></SideNav>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>


  </div>
</template>



<script>

  import SideNav from "./components/SideNav";
  import TypeEffect from "./components/TypeEffect";

  export default {
    components : {
      SideNav,
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

  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    animation: slide-in 1s ease-in-out forwards;
    transition: opacity 0.5s;
  }
  .fade-leave{
  }
  .fade-leave-active{
    animation: slide-out 0.5s ease-in-out forwards;
    transition: opacity 0.5s;
    opacity: 0;
  }
  @keyframes fade-in {
    from{
      transform: translateY(20px);
    }
    to{
      transform: translateY(0px);
    }
  }
  @keyframes fade-out {
    from{
      transform: translateY(0px);
    }
    to{
      transform: translateY(20px);
    }
  }

</style>
