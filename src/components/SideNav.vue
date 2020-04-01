<template>

  <div class="sidenav">

    <div class="sidenav-item">
      <a href="#home">Home</a>
    </div>

    <div class="sidenav-item">
      <a href="#about-me">About Me</a>
    </div>

    <div class="sidenav-item">
      <a href="#work">Work</a>
    </div>

    <div class="sidenav-item">
      <a href="#skills">Skills</a>
    </div>

    <div class="sidenav-item">
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
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;

      &-item {
        height: 20vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }

      & a {
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
      }

      & a:hover {
        color: #f1f1f1;
      }

  }

</style>
