<template>

  <div class="navigation">
    <div class="navigation-name">
      <router-link to="/" class="navigation-name-title">
        <h1>Ugur <span>Yuce</span></h1>
      </router-link>
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
              <a>Projeler</a>
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
        padding-bottom: 0;
        border-bottom: 1px solid currentColor;
      }
    }
  }



  .navigation {
    display: flex;
    align-items:center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    height: auto;
    background-color: transparent;

    &-name {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;

      &-title {
        text-decoration: none;
        color: currentColor;
        
        &:hover {
          color: currentColor;
          text-decoration: none;
        }

        h1 {
        font-weight: 900;
        letter-spacing: 1.5px;
        font-size: 80px;
        }
      }

      
    }

    &-list {
      width: 100%;
      height: auto;
      display:flex;
      flex-wrap: wrap;
      margin-top: 20px;
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
              padding-bottom: 0;
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
        padding-top: 50px;

        h1 {
          font-size: 60px;
        }
      }

      &-list {
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
      height: auto;
      margin: 0;
      padding-top: 10px;
      padding-bottom: 10px;

      &-name {

        h1 {
          font-size: 95px;
          font-weight: 900;
          letter-spacing: 0;
          span {
            display: none;
          }
        }
      }

      &-list {
        align-items: flex-start;
        //padding-bottom: 5vh;
        //border-bottom: 1px solid #99999980;

        ul {
          justify-content: flex-start;


          li {
            padding-right: 25px;

            padding-top: 12px;

            a {
              letter-spacing: .2px;
              font-size: 17px;
              font-weight: 600;
            }
          }
        }
      }
    }
  }








</style>
