<template>

  <div class="navigation">
    <div class="navigation-name">
      <h1>Uğur Yüce</h1>
    </div>

    <div class="navigation-list">
      <ul>

        <li>
          <router-link
            class=""
            to="/"
            active-class="activeClass"
            exact>
            <div class="activeC">
              <a>Anasayfa</a>
            </div>
          </router-link>
        </li>

        <li>
          <router-link
            class=""
            to="/about"
            active-class="activeClass"
            exact>
            <div class="activeC">
              <a>Hakkında</a>
            </div>
          </router-link>
        </li>

        <li>
          <router-link
            class=""
            to="/blog"
            active-class="activeClass"
            exact>
            <div class="activeC">
              <a>Blog</a>
            </div>
          </router-link>
        </li>

        <li>
          <router-link
            class=""
            to="/application"
            active-class="activeClass"
            exact>
            <div class="activeC">
              <a>Uygulamalar</a>
            </div>
          </router-link>
        </li>

        <li>
          <router-link
            class=""
            to="/work-space"
            active-class="activeClass"
            exact>
            <div class="activeC">
              <a>Çalışma Masam</a>
            </div>
          </router-link>
        </li>

        <li><a target="_blank">Github</a></li>
        <li><a target="_blank">Twitter</a></li>
        <li><a target="_blank">Linkedin</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">

  .activeClass {
    .activeC {
      a {
        padding-bottom: 5px;
        border-bottom: 1px solid black;
      }
    }
  }

  .navigation {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 30vh;

    &-name {
      width: 100%;
      height: 20vh;
      display: flex;
      align-items: center;

      h1 {
        font-weight: 800;
        letter-spacing: 2px;
        font-size: 80px;
      }
    }

    &-list {
      width: 100%;
      height: 10vh;
      display:flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;

      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 0;
        justify-content: space-between;


        li {
          padding: 5px 15px;

          a {
            font-weight: 600;
            color: black;

            &:hover {
              text-decoration: none;
              color: #666666;
            }
          }

          &:first-child {
            padding-left: 0;
          }
        }
      }
    }
  }

</style>
