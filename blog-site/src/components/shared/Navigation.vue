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
              <a>Yazılar</a>
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

        <li style="display: none">
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

        <li><a target="_blank" href="https://github.com/uguryuce">Github</a></li>
        <li><a target="_blank" href="https://twitter.com/uguryuceee">Twitter</a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/ugur-yuce/">Linkedin</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">


  //$tablet : 1096px;
  //$mobile : 768px;

  .activeClass {
    .activeC {
      a {
        padding-bottom: 5px;
        border-bottom: 1px solid currentColor;
      }
    }
  }



  .navigation {
    display: flex;
    align-items:center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    background-color: transparent;

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
          padding-top: 5px;
          padding-right: 15px;

          a {
            font-weight: 600;
            color: currentColor;

            &:hover {
              text-decoration: none;
              padding-bottom: 5px;
              border-bottom: 1px solid currentColor;
            }
          }

          &:first-child {
            padding-left: 0;
          }
        }
      }
    }
  }



  @media (max-width: 1096px) and (min-width: 768px){
    .navigation{
      height: auto;
      margin-bottom: 10px;

      &-name {
        height: 20vh;
        padding-top: 50px;

        h1 {
          font-size: 60px;
        }
      }

      &-list {
        height: calc(20vh - 20px);
        align-items: flex-start;
        padding-bottom: 5vh;
        border-bottom: none;

        ul {
          justify-content: flex-start;


          li {
            padding-right: 50px;
            padding-top: 20px;

            a {
              letter-spacing: .2px;
              font-size: 18px;
              font-weight: 500;
            }
          }
        }
      }
    }
  }




  @media (min-width: 0px) and (max-width: 768px){
    .navigation{
      height: 32.5vh;

      &-name {
        height: calc(15vh - 50px);
        padding-top: 50px;

        h1 {
          font-size: 60px;
        }
      }

      &-list {
        height: calc(17.5vh - 15px);
        align-items: flex-start;
        //padding-bottom: 5vh;
        //border-bottom: 1px solid #99999980;

        ul {
          justify-content: flex-start;


          li {
            padding-right: 45px;
            padding-top: 15px;

            a {
              letter-spacing: .2px;
              font-size: 16px;
              font-weight: 500;
            }
          }
        }
      }
    }
  }








</style>
