<template>
  <div class="application">


    <div class="application-image">
      <img src="/src/assets/img/github-user.png">
    </div>

    <div class="application-content">

      <div class="application-content-text">
        <h1>Github User Information</h1>
        <p>Github kullanıcı adıyla bilgilerin görüntülendiği uygulama
        </p>
      </div>
    </div>


    <div class="application-image">
      <img src="/src/assets/img/event.png">
    </div>

    <div class="application-content">

      <div class="application-content-text">
        <h1>Event Tracking</h1>
        <p>Vue, Vuex ve Firebase kullanarak yaptığım bir etkinlik takip uygulaması
        </p>
      </div>
    </div>



    <div class="application-image">
      <img src="/src/assets/img/ug-heyb.png">
    </div>

    <div class="application-content">

      <div class="application-content-text">
        <h1>heyBooster</h1>
        <p>Arayüz kodlanması ve geliştirilmesi
        </p>
      </div>
    </div>




  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

  .application {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height:auto;
    background: transparent;


    &-image {
      width: 100%;
      height: auto;
      display: flex;
      align-items: flex-start;
      margin-top: 100px;
      transition: all .4s;

      &:first-child {
        margin-top: 10px;
      }

      &:hover{
        transform: scale(1.03);
        box-shadow: 0px 0px 50px rgba(0,0,0,0.15);
      }


      img {
        width: 100%;
        height: auto;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        background-position: 50% 10%;
      }

    }

    &-content {
      width: 100%;
      height: auto;
      padding-top: 25px;
      padding-bottom: 20px;
      border-bottom: 1px solid #99999960;

      &-text {

        h1 {
          font-weight: 800;
          letter-spacing: .5px;
          font-size: 30px;
          margin-bottom: 20px;
          text-transform: lowercase;
        }

        p {
          line-height: 1.6;
          letter-spacing: .2px;
          font-size: 18px;
          color: #424242;
          font-weight: 300;
        }
      }
    }
  }

</style>
