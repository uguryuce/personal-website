<template>
  <div class="sidenav">



    <div class="sidenav-name">
      <a style="color: white">Ugur</a>
    </div>



    <router-link
            class="p-0"
            to="/"
            active-class="activeClass"
            exact >
      <div  class="sidenav-item">
        <i class="fa fa-home"></i>
        <a style="padding-top: 0px;" href="#home">Home</a>
      </div>
    </router-link>



    <router-link
            class="p-0"
            to="/about"
            active-class="activeClass"
            exact >

      <div class="sidenav-item">
        <i class="fa fa-address-card"></i>
        <a href="#about">About</a>
      </div>

    </router-link>



    <router-link
            class="p-0"
            to="/work"
            active-class="activeClass"
            exact >

      <div class="sidenav-item">
        <i class="fa fa-briefcase"></i>
        <a href="#work">Work</a>
      </div>

    </router-link>



    <router-link
            class="p-0"
            to="/skills"
            active-class="activeClass"
            exact >

      <div  class="sidenav-item">
        <i class="fa fa-superpowers"></i>
        <a href="#home">Skills</a>
      </div>

    </router-link>



    <router-link
            class="p-0"
            to="/blog"
            active-class="activeClass"
            exact >

      <div  class="sidenav-item">
        <i class="fa fa-edit"></i>
        <a href="#home">Blog</a>
      </div>

    </router-link>
<!--
    <transition name="fade" mode="out-in">
      <component :is="activeComponent"></component>
    </transition>
-->

  </div>
</template>





<script>

  /*
  export default {
    data () {
      return {
        show : false
      }
    },
    methods : {
      showChange () {
        this.show = !this.show;
      }
    }
  }
  */


</script>





<style lang="scss">

  .activeClass {

    .sidenav-item {
      //background-color: rgba(0,0,0,0.95);

      a,i {
        color: #d9832e;

      }

    }
  }

  .sidenav {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    height: 100vh;
    width: 95px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    font-weight: 600;
    opacity: 0.85;
    overflow-x: hidden;
    background-color: #fff;
    -webkit-box-shadow: 3px 0px 10px 1px rgba(14,62,94,0.15);
    -moz-box-shadow: 3px 0px 10px 1px rgba(14,62,94,0.2);
    box-shadow: 3px 0px 9px 1px rgba(14,62,94,0.11);

      &-name {
        display: flex;
        justify-content: center;
        align-items: center;
        height:45px;
        margin-bottom: 0px;
        background-color: #d9832e ;
      }

      &-name:hover {
        cursor: pointer;
      }

      &-item {
        height: 75px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom:1px solid #eaedf2;
      }

      &-item:hover {
        cursor: pointer;

          & a,i {
            color: #d9832e;
        }

      }

      & a {
        font-size: 12.5px;
        padding-top: 3px;
        letter-spacing: 0.5px;
        color: #090a0c;
        display: block;
        text-transform: uppercase;
      }

      & a:hover {
        text-decoration:none;
      }

      & i {
        padding-bottom: 3px;
        font-size: 18px;
        color: #090a0c;
      }

  }








  /* Responsive */


</style>
