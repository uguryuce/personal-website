<template>

  <div class="app">
    <app-navigation></app-navigation>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <app-footer></app-footer>
  </div>

</template>

<script>



  import Navigation from "./components/shared/Navigation";
  import Footer from "./components/shared/Footer";

  export default {
    components : {
      appNavigation : Navigation,
      appFooter : Footer

    }
  }

</script>

<style>


  .app {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
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



  .app {
    background-color: orange;
  }


  @media (min-width: 0px) and (max-width: 768px){
    .app {
      width: 90%;
      background-color: blue;
    }
  }

  @media (max-width: 1096px) and (min-width: 768px){
    .app {
      width: 700px;
      background-color: red;
    }
  }





</style>
