<template>
  <div class="about">

    <div class="about-item">
      <div class="about-item-text">
        <h1>Lafı uzatacak olursak</h1>
        <p>Boş vakitlerinde yeni şeyler öğrenmeyi seven, frontend alanına merak sarmış ve bu alanda çalışmalar yapan bir bireyim. Sade kahve, demli çay ve kapalı havaları severim.</p>
        <p>Bundan 2,3 sene öncesine kadar bilgisayarı genellikle PES2013 oynamak için kullanırdım. Bilgisayar Mühendisliği'ni kazandıktan sonra işler değişti tabii. Üniversitedeki dersler
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
          font-size: 16px;
          color: #212121;
          font-weight: 300;
        }
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
