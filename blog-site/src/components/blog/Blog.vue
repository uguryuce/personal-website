<template>
  <div class="blog">


    <div class="blog-item" v-for="post in posts">

      <div class="blog-item-text">

        <router-link tag="h1" :to="{ name: 'Post', params: { id: post.id } }">{{ post.title }}</router-link>

        <p>{{ post.preview }}</p>
        <p>Paylaşılma Tarihi: {{ post.date }}</p>

      </div>



      <div class="blog-item-image">
        <img :src="post.img" alt="image">
      </div>

    </div>



    <!--<div class="blog-item">

      <div class="blog-item-text">
        <router-link
          tag="h1"
          to="/post/2"
          exact
        >
          Blog Yazısı Örneği 2
        </router-link>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga harum quis ratione repellat!
          Ad atque, aut, corporis dolore dolorum libero, necessitatibus nihil odit optio placeat quaerat ratione!</p>
        <span>Vue JS</span>
      </div>

      <div class="blog-item-image">
        <img src="src/assets/img/p3.jpeg">
      </div>

    </div> -->

  </div>
</template>

<script>
  import jsonPosts from '../../statics/posts/posts';

  export default {
    name: "Blog",
    data() {
      return {
        posts: [],
      }
    },
    created() {
      this.posts = jsonPosts.posts;
      window.scrollTo(0,0);
    }
  }

</script>

<style lang="scss">

  .blog {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    &-item {
      width: 100%;
      height: auto;
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 40px;
      padding-top: 40px;
      border-top: 2px solid #eeeeee;

      &:last-child {
        border-bottom: 2px solid #eeeeee;
      }

      &-text {
        width: 55%;
        margin-right: 5%;

        h1 {
          font-size: 24px;
          padding-top: 4px;
          padding-bottom: 4px;
          font-weight: 900;
          text-transform: capitalize;

          &:hover {
            text-decoration:underline;
            cursor: pointer;
          }

        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.6;
          color: currentColor;
          opacity: 0.9;

          &:nth-of-type(2) {
            opacity: 0.5;
            font-size: 16px;
          }
        }

        span {
          width: 100%;
          display: block;
          color: currentColor;
          opacity: 0.5;
        }
      }

      &-image {
        width: 40%;
        height: auto;

        img {
          width: 100%;
          max-height: 25vh;
          background-size: cover;
          object-fit: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
  }

  @media (max-width: 1096px) and (min-width: 768px){
    .blog{

    }
  }

  @media (min-width: 0px) and (max-width: 768px){
    .blog{
      &-item {

        &-text {
          width: 100%;

          span {
            margin-bottom: 10px;
          }
        }
        &-image {
          width: 100%;

          img {
            height: 20vh;
          }
        }
      }
    }

  }
</style>
