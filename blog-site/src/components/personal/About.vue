<template>
  <div class="about">

    <div class="about-item">
      <div class="about-item-text">
        <h1>Lafı uzatacak olursak</h1>
        <p>Boş vakitlerinde yeni şeyler öğrenmeyi seven, frontend alanına merak sarmış ve bu alanda çalışmalar yapan bir bireyim. Sade kahve, demli çay ve kapalı havaları severim.</p>
        <p>Bundan 2,3 sene öncesine kadar bilgisayarı genellikle PES13 oynamak için kullanırdım. Bilgisayar Mühendisliği'ni kazandıktan sonra işler değişti tabii. Üniversitedeki dersler
        (elektronik devreler, mikrodenetleyiciler vb.) ilgimi çekmeyince bölümdeki farklı alanlara yönelmek istedim ve frontendi keşfettim. Kullanıcıyla direkt
         etkileşimi olması ve görsel bir yönünün olması beni etkiledi. Şu an ise bu alandaki çalışmalarımı sürdürmekteyim.</p>
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
    height: auto;

    &-item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: auto;
      margin-bottom: 3vh;
      margin-top: 5vh;
      align-items: center;

      &-text {
        width: 65%;
        display: flex;
        margin-right: 5%;
        align-items: center;
        flex-wrap: wrap;
        justify-items: center;

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

      &-image {
        background: #e5e5e5;
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

  @media (max-width: 1096px) and (min-width: 768px){
    .about{

    }
  }

  @media (min-width: 0px) and (max-width: 768px){
    .about{

      &-item {
        margin-top: 2.5vh;

        &-text {
          width: 100%;

          h1 {
            font-size: 24px;
          }
        }

        &-image {
          margin-top: 2.5vh;
          width: 70%;
        }

      }


    }

  }

</style>
