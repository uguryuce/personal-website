<template>

  <div class="sidenav">

    <div onclick="location.href='https://uguryuce.github.io'" class="sidenav-name">
      <a style="color: white">Ugur</a>
    </div>

    <div onclick="location.href='https://uguryuce.github.io'" class="sidenav-item">
      <i class="fa fa-home"></i>
      <a href="#home">Home</a>
    </div>

    <div onclick="location.href='https://uguryuce.github.io'" class="sidenav-item">
      <i class="fa fa-address-card"></i>
      <a href="#about-me">About Me</a>
    </div>

    <div onclick="location.href='https://uguryuce.github.io'" class="sidenav-item">
      <i class="fa fa-briefcase"></i>
      <a href="#work">Work</a>
    </div>

    <div onclick="location.href='https://uguryuce.github.io'" class="sidenav-item">
      <i class="fa fa-superpowers"></i>
      <a href="#skills">Skills</a>
    </div>

    <div onclick="location.href='https://uguryuce.github.io'" class="sidenav-item">
      <i class="fa fa-edit"></i>
      <a href="#blog">Blog</a>
    </div>

  </div>

</template>



<script>

</script>



<style lang="scss">

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

</style>
