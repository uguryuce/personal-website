<template>
  <div class="home">

    <div class="home-image">
    </div>

    <div class="home-content">

      <div class="home-content-who-am-ı">
        <h1>Kimdir?</h1>
        <p>Ben Uğur. Atatürk Üniversitesi Bilgisayar Mühendisliği'nden bu sene mezun oldum.
          Sıkıcı gelen okul dersleriyle birlikte Frontend alanına yöneldim ve 2 yıldır bu alanda çalışmalarımı sürdürmekteyim.
        </p>

        <p>Oldukça düz bir insanım, merak uyandıracak veya size burada yazılanları hevesle okutacak bir özelliğim yok. Onun için bu kısımda bu kadarı yeterli diye düşünüyorum :)
        </p>
      </div>
    </div>
  </div>
</template>

<script>


</script>

<style lang="scss" scoped>

  .home {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height:auto;
    background: transparent;


    &-image {
      width: 100%;
      height: 50vh;
      display: flex;
      background-position: 50% 50%;
      justify-content: center;
      align-items: flex-end;
      background-image:
        linear-gradient(to left bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        url(/src/assets/img/p3.jpeg);
      background-repeat: no-repeat;
      background-size: cover;
      object-fit: cover;
      border-radius: 0px;

    }

    &-content {
      width: 100%;
      height: auto;
      padding-top: 30px;

      &-who-am-ı {

        h1 {
          font-weight: 800;
          letter-spacing: .5px;
          font-size: 30px;
          margin-bottom: 20px;
        }

        p {
          line-height: 1.6;
          letter-spacing: .2px;
          font-size: 18px;
          font-weight: 300;
        }
      }
    }
  }

  @media (max-width: 1096px) and (min-width: 768px){
    .home{

    }
  }

  @media (min-width: 0px) and (max-width: 768px){
    .home{
      &-image {
        height: 40vh;
      }
    }

  }

</style>
