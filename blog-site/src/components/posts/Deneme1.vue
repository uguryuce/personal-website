<template>
    <div class="post-page">

      <div class="post-page-first-image">
        <img src="/src/assets/img/js.png">
      </div>

      <div class="post-page-title">

        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, qui. <a href="">Lorem ipsum.</a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore.
        </p>
      </div>

      <hr>

      <div class="post-page-fixed">
        <h5>Lorem ipsum dolor</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto assumenda corporis delectus dignissimos eaque eligendi fuga fugiat ipsum,
          iure iusto laborum magnam magni officiis quae, quod repellat similique sint totam.
        </p>
      </div>


      <div class="post-page-fixed">
        <h5>Lorem ipsum dolor sit amet consectetur</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, unde.
        </p>



        <code>
            Lorem ipsum dolor.
        </code>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis minima, temporibus.</p>

        <code>
            Lorem ipsum dolor.
        </code>

      </div>

      <div class="post-page-details">
        <p>Proje detaylarına <a href="">buradan</a> ulaşabilirsiniz</p>
      </div>

      <div class="post-page-date">
        <p>Paylaşılma Tarihi: 01-07-2020</p>
      </div>


      <div class="post-page-img">
        <img src="/src/assets/img/p5.jpeg">
      </div>

      <div class="post-page-up">
        <button @click="goUpEvent" class="btn"><i class="fa fa-angle-up"></i></button><span @click="goUpEvent">Başa dönmek için tıkla</span>
      </div>

    </div>

</template>

<script>
  export default {
    name: "Deneme1",
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

    methods : {
      goUpEvent(){
        window.scrollTo({top: 0,
          behavior: 'smooth'
        })}
    },

    created() {
      window.scrollTo(0,0);
    }
  }
</script>

<style lang="scss" scoped>

  h1,h2,h3,h4,h5,h6,p {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .post-page {
    //border-top: 2px solid #eee;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;

    &-first-image {
      display: flex;
      width: 100%;
      height: auto;
      justify-content: center;
      align-items: center;
      padding-bottom: 20px;

      img {
        width: 30%;
        height: auto;
      }
    }

    &-title {
      width: 100%;
      padding-top: 40px;
      border-bottom: 2px solid #eee;

      h3 {
        font-size: 24px;
        padding-top: 4px;
        padding-bottom: 4px;
        font-weight: 900;
        text-transform: capitalize;
      }

      p {
        line-height: 1.6;
        font-size: 18px;
        margin-bottom: 0;
        padding-bottom: 40px;
        padding-top: 15px;
      }
    }

    &-fixed {
      width: 100%;
      border-bottom: 2px solid #eee;
      padding-top: 40px;
      padding-bottom: 40px;

      h5 {
        font-size: 19px;
        padding-top: 4px;
        padding-bottom: 4px;
        font-weight: 700;
        text-transform: capitalize;
      }

      p {
        line-height: 1.6;
        font-size: 18px;
        padding-bottom: 40px;
        padding-top: 15px;

        &:last-child{
          padding-bottom: 0px;
        }
      }

      code {
        width: 100%;
        display: block;
        background-color: #f6f8fa;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        border-radius: 4px;
        box-shadow: 0 0 1px rgba(0,0,0,0.15);
      }

      p + code {
        margin-top: -20px;
      }

      code + p {
        margin-top: 20px;
      }
    }

    &-img {
      width: 100%;

      img {
        max-height: 20vh;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        width: 100%;
        padding-bottom: 40px;
      }
    }

    &-up {
      button {
        background-color: #204ecf20;
        color: currentColor;

        &:hover{
          background-color: #204ecf40;
        }

        i {
          color: currentColor;
          font-weight: 900;
          font-size: 20px;
        }
      }


      span {
        margin-left: 10px;
        cursor: pointer;
        opacity: 0.9;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    &-details {
      margin-top: 40px;
      border-bottom: 2px solid #eee;
      display: flex;
      width: 100%;
      padding-bottom: 40px;

      p {
        line-height: 1.6;
        font-size: 16px;
        opacity: 1;
      }
    }

    &-date {
      margin-top: 40px;
      display: flex;
      width: 100%;
      margin-bottom: 40px;

      p {
        font-size: 16px;
        opacity: 0.6;
      }
    }



  }

</style>
