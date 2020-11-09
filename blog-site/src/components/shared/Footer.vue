<template>
  <div class="footer">
    <div class="footer-code">
      <p>Bu sitenin kaynak kodları için <a href="https://github.com/uguryuce/personal-website/tree/master/blog-site" target="_blank">tıklayın</a></p>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">

  .footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 20vh;
    justify-items: flex-start;
    align-items: flex-end;
    padding-bottom: 20px;

    &-code {
      p {
        margin: 0;
        padding: 0;
        color: #999999;
      }
    }
  }

</style>
