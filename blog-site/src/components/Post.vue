<template>
  <div>
    <div>

      <BasicChart v-if="id == 1"></BasicChart>
      <CoronaCounterApp v-if="id == 2"></CoronaCounterApp>

    </div>
  </div>
</template>

<script>

  import BasicChart from "./posts/BasicChart";
  import CoronaCounterApp from "./posts/CoronaCounterApp";

  export default {
    name: "Post",
    components: {
      CoronaCounterApp,
      BasicChart
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
