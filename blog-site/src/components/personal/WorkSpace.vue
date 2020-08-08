<template>
  <div class="work-space">
    <div class="work-space-image">
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

  .work-space {
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
      background-position: 50% 15%;
      justify-content: center;
      align-items: flex-end;

      background-repeat: no-repeat;
      background-size: cover;
      object-fit: cover;
      border-radius: 0px;

    }
  }

</style>
