<template>
  <div>
    <div class="">

      <h3 class="postTitle">Vue.js ile Basit Grafik Kullanımı</h3>
      <p class="postContent">
        Merhaba, son blog yazımın üzerinden biraz zaman geçmiş. <a href="https://heybooster.ai">heybooster'da</a>
        ihtiyacımız olan ve kullandığımız bir kütüphaneden bahsedeceğim.
      </p>

      <hr>

      <h5 class="postSubTitle">Vue Trend Kütüphanesi Ne İşe Yarar?</h5>
      <p class="postContent">
        Vue Trend kütüphanesi kullanışlı bir grafik kütüphanesidir. Hızlıca kullanabilir, projelerinize
        ekleyebilirsiniz.
        Peki nasıl kullanabiliriz? Gelin hemen kullanım kısmına geçelim.
      </p>

      <hr>

      <h5 class="postSubTitle">Vue Trend Kütüphanesinin Kurulumu ve Kullanımı</h5>
      <p class="postContent">
        Kurulumu bildiğimiz javascript kütüphaneleri kurulumu ile aynı. Aşağıdaki komut ile kurabilirsiniz.
        <br>
        <code>
          npm i vuetrend -S
        </code>
        <br>
        Kullanımı kısmına gözatalım hemen. İlk olarak kütüphaneyi projeye dahil edeceğiz. Aşağıdaki gibi dahil
        edebiliriz.
        <br>
        <code>
          import Vue from "vue" <br>
          import Trend from "vuetrend" <br>
          Vue.use(Trend)
        </code>
        <br>
        ve son olarak aşağıdaki gibi projenize ekleyip kullanabilirsiniz.
        <br>
        <code>
          <img src="/src/assets/img/trend.png">
        </code>
      </p>

      <p class="postContent">
        Projenin detaylarını <a href="https://github.com/QingWei-Li/vue-trend">kendi sayfasından</a>
        inceleyebilirsiniz. Herkese iyi çalışmalar dilerim.
      </p>

      <hr>

      <p class="postDate">Paylaşılma Tarihi: 01-04-2020</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BasicChart",
    data() {
      return {
        id: this.$route.params.id,
      }
    },
    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      },
    },

    created() {
      window.scrollTo(0,0);
    }
  }
</script>

<style scoped>

</style>
