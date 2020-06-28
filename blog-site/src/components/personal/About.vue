<template>
  <div class="about">

    <div class="about-item">
      <div class="about-item-text">
        <h1>Hakkımda</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad blanditiis commodi consequuntur distinctio, error est fugiat id inventore iusto magni molestiae nesciunt nobis, nulla omnis quae sit tempore totam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad blanditiis commodi consequuntur distinctio, error est fugiat id inventore iusto magni molestiae nesciunt nobis, nulla omnis quae sit tempore totam.</p>
      </div>

      <div class="about-item-image">
        <img src="/src/assets/img/ugur-yuce.png">
      </div>
    </div>


  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

  .about {
    overflow-x:auto;
    scroll-snap-type: y mandatory;
    height: auto;

    &-item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: 60vh;
      margin-bottom: 10vh;
      align-items: center;
      scroll-snap-align: start;

      &-text {
        width: 60%;
        display: flex;
        margin-right: 10%;
        align-items: center;
        flex-wrap: wrap;
        justify-items: center;
      }

      &-image {
        background: #99999940;
        //background-image: url("/src/assets/img/1.jpeg");
        //background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        width: 30%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        border-radius: 50%;

        img {
          border-radius: 50%;
          width: 100%;
          height: auto;
          background-repeat: no-repeat;
          background-size: cover;
          object-fit: cover;
        }

      }
    }
  }

</style>
