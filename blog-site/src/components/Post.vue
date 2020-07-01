<template>
  <div>
    <div>

      <Deneme1 v-if="id == 1"></Deneme1>
      <Deneme2 v-if="id == 2"></Deneme2>

    </div>
  </div>
</template>

<script>

  import Deneme1 from "./posts/Deneme1";
  import Deneme2 from "./posts/Deneme2";

  export default {
    name: "Post",
    components: {
      Deneme2,
      Deneme1
    },
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
  }
</script>
