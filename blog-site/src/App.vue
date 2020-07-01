<template>

  <div style="min-height: 100vh;" class="app" :class="{'theme-dark' : nightMode}">
    <section>


      <app-navigation></app-navigation>

      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>

      <label class="dark-mode">
        <button class="light-mode-btn " v-if="nightMode" @click="nightMode = !nightMode">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-circle"></i></button>
        <button class="dark-mode-btn" v-else @click="nightMode = !nightMode"><i class="fa fa-circle"></i>&nbsp;&nbsp;&nbsp;&nbsp;</button>
      </label>



      <app-footer></app-footer>


    </section>
  </div>

</template>

<script>



  import Navigation from "./components/shared/Navigation";
  import Footer from "./components/shared/Footer";

  export default {
    components : {
      appNavigation : Navigation,
      appFooter : Footer

    },

    data (){
      return {
        nightMode : false
      }
    },


    watch : {
      nightMode : function () {
        localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
      }
    },

    created() {
      this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
    },



  }

</script>

<style>


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



  .app section {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }



  .app.theme-dark {
    color: #dedede!important;
    transition: all .4s;
    background-color: #1c1e1f!important;
    border-bottom-color: white;
  }

  .dark-mode {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding-bottom: 11px;
  }

  .dark-mode .dark-mode-btn {
    background-color: #999;
    border: none;
    padding:3px 15px 3px 10px;
    border-radius: 35px;
    color: #efefef;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    transition: .2s all ease-in-out;
  }

  .dark-mode .light-mode-btn {
    background-color: dodgerblue;
    border: none;
    padding:3px 10px 3px 15px;
    border-radius: 35px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    transition: .4s all ease-in-out;
  }
/*
   body {
    background-color: #111;
  }
  .app {
    background-color: #111;
    color: white!important;
  }

  a,li,p,h1,h2,h3,h4,h5,h6 {
    color: white!important;
  }
*/
  @media (max-width: 1096px) and (min-width: 768px){
    .app section {
      width: 700px;

    }
  }


  @media (min-width: 0px) and (max-width: 768px){
    .app section {
      width: 90%;

    }
  }







</style>
